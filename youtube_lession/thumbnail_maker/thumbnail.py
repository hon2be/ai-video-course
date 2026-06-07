#!/usr/bin/env python3
"""
유튜브 강의 영상 썸네일 메이커 — 1280x720
- 좌측: 메인 인물 클로즈업
- 우측 상단: 멀티샷 그리드 (4컷)
- 우측 하단: 한국어 텍스트 (배지 / 제목 / 강조 부제)

사용:
  # JSON config로
  python3 thumbnail.py --config sample_config.json

  # CLI 직접
  python3 thumbnail.py \\
    --output out/thumb.png \\
    --badge "EP.1 · AI 영상 제작 기초" \\
    --title "동일 인물 AI 영상의 핵심" \\
    --subtitle "1 - 데이터셋 만들기" \\
    --main-image path/to/main.png \\
    --grid-images img1.png img2.png img3.png img4.png \\
    --theme firefly
"""
import argparse
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

BASE_DIR = Path(__file__).parent
FONTS_DIR = BASE_DIR / "fonts"
NOTO_BOLD = FONTS_DIR / "NotoSansKR-Bold.otf"
NOTO_BLACK = FONTS_DIR / "NotoSansKR-Black.otf"
NOTO_REG = FONTS_DIR / "NotoSansKR-Regular.otf"
BLACK_HAN = FONTS_DIR / "BlackHanSans-Regular.ttf"

# 썸네일 제목·부제용 디스플레이 폰트 (Black Han Sans — 초굵은 한글 디스플레이체)
DISPLAY_FONT = BLACK_HAN

W, H = 1280, 720

THEMES = {
    "firefly": {
        "bg_start": (12, 16, 38),
        "bg_mid": (44, 26, 60),
        "bg_end": (224, 90, 0),
        "title_color": (255, 255, 255),
        "subtitle_color": (255, 215, 80),
        "subtitle_gradient": [(255, 255, 200), (255, 215, 0), (255, 110, 0)],
        "badge_bg": (224, 90, 0),
        "badge_fg": (255, 255, 255),
        "grid_border": (255, 255, 255, 200),
    },
    "dark": {
        "bg_start": (10, 10, 20),
        "bg_mid": (25, 25, 60),
        "bg_end": (60, 30, 120),
        "title_color": (255, 255, 255),
        "subtitle_color": (255, 209, 102),
        "badge_bg": (255, 80, 80),
        "badge_fg": (255, 255, 255),
        "grid_border": (255, 255, 255, 200),
    },
    "blue": {
        "bg_start": (8, 24, 60),
        "bg_mid": (16, 60, 120),
        "bg_end": (60, 160, 220),
        "title_color": (255, 255, 255),
        "subtitle_color": (255, 215, 0),
        "badge_bg": (255, 100, 80),
        "badge_fg": (255, 255, 255),
        "grid_border": (255, 255, 255, 200),
    },
}


def make_gradient(w, h, c1, c2, c3=None):
    """대각선 3색 그라데이션 (좌상→우하)."""
    img = Image.new("RGB", (w, h))
    px = img.load()
    if c3 is None:
        for y in range(h):
            t = y / max(1, h - 1)
            px_row = tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))
            for x in range(w):
                px[x, y] = px_row
        return img
    for y in range(h):
        for x in range(w):
            t = (x * 0.4 + y * 0.6) / (w * 0.4 + h * 0.6)
            if t < 0.5:
                s = t * 2
                c = tuple(int(c1[i] + (c2[i] - c1[i]) * s) for i in range(3))
            else:
                s = (t - 0.5) * 2
                c = tuple(int(c2[i] + (c3[i] - c2[i]) * s) for i in range(3))
            px[x, y] = c
    return img


def cover_image(img_path, target_w, target_h):
    """비율 유지 + 중앙 크롭."""
    img = Image.open(img_path).convert("RGBA")
    src_ratio = img.width / img.height
    tgt_ratio = target_w / target_h
    if src_ratio > tgt_ratio:
        new_h = target_h
        new_w = int(target_h * src_ratio)
    else:
        new_w = target_w
        new_h = int(target_w / src_ratio)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))


def fade_right_edge(img, fade_w, bg_color):
    """이미지 우측 가장자리를 배경색으로 점진 페이드."""
    w, h = img.size
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    for i in range(fade_w):
        alpha = int(255 * (i / fade_w) ** 1.3)
        x = w - fade_w + i
        od.line([(x, 0), (x, h)], fill=(*bg_color, alpha))
    img.paste(overlay, (0, 0), overlay)
    return img


def _blend_gradient(colors, t):
    """colors=[(r,g,b), ...] 사이 보간. t in [0,1]."""
    if t <= 0:
        return tuple(colors[0])
    if t >= 1:
        return tuple(colors[-1])
    n = len(colors) - 1
    seg = t * n
    i = int(seg)
    frac = seg - i
    c1 = colors[i]
    c2 = colors[i + 1]
    return tuple(int(c1[k] + (c2[k] - c1[k]) * frac) for k in range(3))


def draw_gradient_text(canvas, xy, text, font,
                       gradient_colors=None, fill=None,
                       stroke_width=0, stroke_color=(0, 0, 0),
                       glow_radius=0, glow_color=(0, 0, 0), glow_alpha=200):
    """빵빵한 썸네일용 글자.
    - gradient_colors: 세로 그라데이션 색 리스트 (없으면 fill 사용)
    - stroke_width: 외곽선 두께 (px)
    - glow_radius: 가우시안 글로우 반경
    """
    bbox = font.getbbox(text)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    pad = max(stroke_width * 2, glow_radius * 3, 12)
    LW, LH = tw + pad * 2, th + pad * 2
    ox, oy = pad - bbox[0], pad - bbox[1]

    layer = Image.new("RGBA", (LW, LH), (0, 0, 0, 0))

    # 1) 글로우 (텍스트 외곽선보다 두껍게 그려 블러)
    if glow_radius > 0:
        glow = Image.new("RGBA", (LW, LH), (0, 0, 0, 0))
        gd = ImageDraw.Draw(glow)
        gd.text((ox, oy), text, font=font,
                fill=(*glow_color, glow_alpha),
                stroke_width=stroke_width + 6,
                stroke_fill=(*glow_color, glow_alpha))
        glow = glow.filter(ImageFilter.GaussianBlur(glow_radius))
        layer = Image.alpha_composite(layer, glow)

    # 2) 외곽선
    if stroke_width > 0:
        stroke = Image.new("RGBA", (LW, LH), (0, 0, 0, 0))
        sd = ImageDraw.Draw(stroke)
        sd.text((ox, oy), text, font=font,
                fill=(*stroke_color, 255),
                stroke_width=stroke_width,
                stroke_fill=(*stroke_color, 255))
        layer = Image.alpha_composite(layer, stroke)

    # 3) 본문 fill (그라데이션 또는 단색)
    if gradient_colors:
        grad = Image.new("RGB", (LW, LH))
        gx = grad.load()
        for y in range(LH):
            t = (y - pad) / max(1, th)
            t = max(0.0, min(1.0, t))
            c = _blend_gradient(gradient_colors, t)
            for x in range(LW):
                gx[x, y] = c
        grad = grad.convert("RGBA")
        mask = Image.new("L", (LW, LH), 0)
        ImageDraw.Draw(mask).text((ox, oy), text, font=font, fill=255)
        body = Image.new("RGBA", (LW, LH), (0, 0, 0, 0))
        body.paste(grad, (0, 0), mask)
        layer = Image.alpha_composite(layer, body)
    elif fill is not None:
        body = Image.new("RGBA", (LW, LH), (0, 0, 0, 0))
        ImageDraw.Draw(body).text((ox, oy), text, font=font, fill=fill)
        layer = Image.alpha_composite(layer, body)

    # 4) 캔버스에 합성
    canvas.alpha_composite(layer, (xy[0] - pad, xy[1] - pad))


def make_thumbnail(config):
    theme = THEMES[config.get("theme", "firefly")]

    # 0) 배경 — 외부 이미지(예: nano-banana 결과) 또는 그라데이션
    bg_image_path = config.get("bg_image")
    if bg_image_path:
        bg_src = Image.open(bg_image_path).convert("RGBA")
        if bg_src.size != (W, H):
            # cover crop
            ratio_src = bg_src.width / bg_src.height
            ratio_tgt = W / H
            if ratio_src > ratio_tgt:
                new_h = H
                new_w = int(H * ratio_src)
            else:
                new_w = W
                new_h = int(W / ratio_src)
            bg_src = bg_src.resize((new_w, new_h), Image.LANCZOS)
            left = (new_w - W) // 2
            top = (new_h - H) // 2
            bg_src = bg_src.crop((left, top, left + W, top + H))
        bg = bg_src
        # 배경이 nano-banana 등 외부 합성물일 때는 그 위에 추가 음영을 깔지 않는다.
        # 가독성은 글자 자체의 부드러운 글로우/그림자로 확보한다.
    else:
        # 그라데이션 + 인물 콜라주 (직접 합성 모드)
        bg = make_gradient(W, H, theme["bg_start"], theme["bg_mid"], theme["bg_end"]).convert("RGBA")

        # 2) 좌측 메인 인물 (580x720)
        MAIN_W, MAIN_H = 580, 720
        main = cover_image(config["main_image"], MAIN_W, MAIN_H)
        main = fade_right_edge(main, fade_w=100, bg_color=theme["bg_mid"])
        bg.paste(main, (0, 0), main)

        # 3) 우측 상단 멀티샷 그리드 (4컷 2x2)
        GRID_X = 620
        GRID_Y = 50
        GRID_W = 620
        GRID_H = 280
        cell_w = (GRID_W - 14) // 2
        cell_h = (GRID_H - 14) // 2
        grid_imgs = config.get("grid_images", [])[:4]
        for idx, img_path in enumerate(grid_imgs):
            col = idx % 2
            row = idx // 2
            x = GRID_X + col * (cell_w + 14)
            y = GRID_Y + row * (cell_h + 14)
            cell_img = cover_image(img_path, cell_w, cell_h)
            mask = Image.new("L", (cell_w, cell_h), 0)
            ImageDraw.Draw(mask).rounded_rectangle([0, 0, cell_w, cell_h], radius=14, fill=255)
            card = Image.new("RGBA", (cell_w, cell_h), (20, 25, 45, 255))
            card.paste(cell_img, (0, 0), cell_img)
            bg.paste(card, (x, y), mask)
            border = Image.new("RGBA", (cell_w, cell_h), (0, 0, 0, 0))
            ImageDraw.Draw(border).rounded_rectangle(
                [0, 0, cell_w - 1, cell_h - 1], radius=14,
                outline=theme["grid_border"], width=3,
            )
            bg.paste(border, (x, y), border)

    # 4) 텍스트 — 디자인 시스템 적용
    #    - spacing tokens: 8 / 16 / 24 / 32 / 48
    #    - 배지·제목·부제 좌측 정렬 통일 (모두 같은 GLYPH_X)
    #    - 배지 박스 안 글자는 정확히 중앙 (anchor=mm)
    #    - 그림자/글로우 없음, stroke만
    SPACE_XS, SPACE_S, SPACE_M, SPACE_L, SPACE_XL = 8, 16, 24, 32, 48

    GLYPH_X = 540                              # 모든 글자의 좌측 정렬 기준
    BADGE_PAD_X = SPACE_M                      # 배지 박스 좌우 안쪽 여백
    BADGE_PAD_Y = SPACE_S                      # 배지 박스 위아래 안쪽 여백
    # 콘텐츠 블록 간 여백은 모두 동일 (디자인 시스템 — 같은 그룹 일관성)
    BLOCK_GAP = SPACE_L                        # 배지 ↔ 제목 / 제목 ↔ 부제 (통일)
    GAP_TITLE_LINES = SPACE_XS                 # 제목 줄 간 간격

    draw = ImageDraw.Draw(bg)

    # 배지 — 둥근 캡슐 박스, 글자 정확히 중앙
    badge_text = config.get("badge", "")
    by = 140
    if badge_text:
        badge_font = ImageFont.truetype(str(NOTO_BLACK), 30)
        # 글자 실제 폭 (앵커 mm 기준 정확한 측정)
        bbox = draw.textbbox((0, 0), badge_text, font=badge_font, anchor="lt")
        text_w = bbox[2] - bbox[0]
        text_h = bbox[3] - bbox[1]
        bw = text_w + BADGE_PAD_X * 2
        bh = text_h + BADGE_PAD_Y * 2
        # 박스 시작 x: 글자 GLYPH_X에서 시작하므로 박스는 GLYPH_X - BADGE_PAD_X
        box_x = GLYPH_X - BADGE_PAD_X
        # 캡슐 박스
        draw.rounded_rectangle(
            [box_x, by, box_x + bw, by + bh],
            radius=bh // 2, fill=theme["badge_bg"],
        )
        # 글자 — 박스 중앙 정확히
        draw.text(
            (box_x + bw // 2, by + bh // 2),
            badge_text, font=badge_font, fill=theme["badge_fg"],
            anchor="mm",
        )
        by += bh + BLOCK_GAP

    # 제목 — 흰 + 검정 stroke
    title_lines = config.get("title", [])
    if isinstance(title_lines, str):
        title_lines = [title_lines]
    title_font_size = config.get("title_size", 80)
    title_font = ImageFont.truetype(str(DISPLAY_FONT), title_font_size)
    ty = by
    for line in title_lines:
        draw_gradient_text(
            bg, (GLYPH_X, ty), line, title_font,
            fill=theme["title_color"],
            stroke_width=7, stroke_color=(0, 0, 0),
            glow_radius=0,
        )
        ty += title_font_size + GAP_TITLE_LINES

    # 부제 — 거대한 그라데이션 + stroke
    subtitle = config.get("subtitle", "")
    if subtitle:
        sub_size = config.get("subtitle_size", 128)
        sub_font = ImageFont.truetype(str(DISPLAY_FONT), sub_size)
        sy = ty + BLOCK_GAP
        gradient = theme.get("subtitle_gradient") or [
            theme["subtitle_color"], theme["badge_bg"]
        ]
        draw_gradient_text(
            bg, (GLYPH_X, sy), subtitle, sub_font,
            gradient_colors=gradient,
            stroke_width=9, stroke_color=(0, 0, 0),
            glow_radius=0,
        )

    out_path = Path(config["output"])
    out_path.parent.mkdir(parents=True, exist_ok=True)
    bg.convert("RGB").save(out_path, "PNG")
    return out_path


def main():
    p = argparse.ArgumentParser(description="Lesson thumbnail maker — 1280x720")
    p.add_argument("--config", help="JSON config 파일 경로")
    p.add_argument("--output")
    p.add_argument("--badge", default="")
    p.add_argument("--title", nargs="+", default=[])
    p.add_argument("--subtitle", default="")
    p.add_argument("--main-image")
    p.add_argument("--grid-images", nargs="+", default=[])
    p.add_argument("--bg-image", help="이미 합성된 배경 이미지 (예: nano-banana 출력)")
    p.add_argument("--theme", default="firefly", choices=list(THEMES.keys()))
    p.add_argument("--title-size", type=int, default=54)
    p.add_argument("--subtitle-size", type=int, default=72)
    args = p.parse_args()

    if args.config:
        config = json.loads(Path(args.config).read_text())
    else:
        config = {
            "output": args.output,
            "badge": args.badge,
            "title": args.title,
            "subtitle": args.subtitle,
            "main_image": args.main_image,
            "grid_images": args.grid_images,
            "bg_image": args.bg_image,
            "theme": args.theme,
            "title_size": args.title_size,
            "subtitle_size": args.subtitle_size,
        }

    out = make_thumbnail(config)
    size_kb = out.stat().st_size // 1024
    print(f"✅ Saved: {out} ({size_kb} KB, 1280x720)")


if __name__ == "__main__":
    main()
