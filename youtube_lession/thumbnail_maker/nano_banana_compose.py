#!/usr/bin/env python3
"""
nano-banana (gemini-2.5-flash-image) 멀티모달로 인물 이미지 5장을 받아
1280x720 유튜브 썸네일 배경 이미지를 합성한다. 한국어 텍스트는 그리지 않고,
별도로 PIL 오버레이로 처리(한국어 글자 깨짐 방지).

사용:
  python3 nano_banana_compose.py \\
    --output bg.png \\
    --main path/to/main.png \\
    --grid img1.png img2.png img3.png img4.png \\
    [--prompt "추가 프롬프트"]
"""
import argparse
import io
import os
import sys
from pathlib import Path
from PIL import Image
from google import genai
from google.genai import types

MODEL_CANDIDATES = [
    "nano-banana-pro-preview",       # 진짜 nano-banana
    "gemini-3-pro-image",
    "gemini-3-pro-image-preview",
    "gemini-3.1-flash-image",
    "gemini-3.1-flash-image-preview",
    "gemini-2.5-flash-image",
]

DEFAULT_PROMPT = """The attached images are IDENTITY REFERENCES showing the SAME Korean woman in her early 20s — preserve her face, hair (long black hair with bangs in low ponytail), and overall appearance precisely.

TASK: Create ONE single 1280x720 horizontal YouTube thumbnail image featuring this SAME woman.

COMPOSITION:
- The woman should appear on the LEFT HALF of the image as a LARGE, EYE-CATCHING close-up portrait (chest-up or shoulder-up).
- Her facial expression: confident, slightly surprised, or amazed — an engaging look that makes viewers want to click.
- She is the SINGLE main subject. Do NOT add multiple copies of her, do NOT make a collage, do NOT include the reference grid.
- RIGHT HALF (roughly 620px onward): KEEP MOSTLY EMPTY for text overlay. Use a clean gradient/empty area there.

BACKGROUND & STYLE:
- Premium tech/tutorial vibe.
- Dark navy-to-purple gradient with subtle orange accents (Adobe Firefly brand feel).
- Soft warm spotlight/glow behind/around the woman.
- Subtle abstract tech elements (particles, light streaks, soft bokeh) on the right empty side — but very minimal, not distracting.
- High contrast, vibrant but professional. Looks like a top-tier YouTube tutorial thumbnail for an AI video creation course.

CRITICAL CONSTRAINTS:
- ONE woman only, ONE close-up.
- NO TEXT, NO KOREAN OR ENGLISH LETTERS, NO LOGOS, NO WATERMARKS, NO SIGNATURES.
- Text will be overlaid in post-processing on the right side, so leave that area clean.
- Preserve identity from references — same face, same hair style."""


def load_image_part(path: str):
    """이미지를 nano-banana API 입력용 Part로 변환."""
    img = Image.open(path).convert("RGB")
    # 너무 큰 이미지는 축소 (API 효율)
    if max(img.size) > 1024:
        img.thumbnail((1024, 1024), Image.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return types.Part.from_bytes(data=buf.getvalue(), mime_type="image/png")


def compose(main_path: str, grid_paths: list, output_path: str, extra_prompt: str = "", verbose: bool = True):
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        sys.exit("Error: GEMINI_API_KEY not set")

    client = genai.Client(api_key=api_key)

    prompt = DEFAULT_PROMPT
    if extra_prompt:
        prompt += f"\n\nADDITIONAL: {extra_prompt}"

    # 이미지 5장 + 프롬프트 (메인은 첫번째)
    parts = [load_image_part(main_path)]
    for gp in grid_paths:
        parts.append(load_image_part(gp))
    parts.append(prompt)

    last_err = None
    for model in MODEL_CANDIDATES:
        try:
            if verbose:
                print(f"[try] model = {model}")
            response = client.models.generate_content(
                model=model,
                contents=parts,
                config=types.GenerateContentConfig(
                    response_modalities=["TEXT", "IMAGE"],
                ),
            )
            # 이미지 파트 추출
            for part in response.candidates[0].content.parts:
                if part.inline_data is not None and part.inline_data.data:
                    out = Path(output_path)
                    out.parent.mkdir(parents=True, exist_ok=True)

                    # 받은 이미지를 1280x720으로 리사이즈/크롭
                    raw = Image.open(io.BytesIO(part.inline_data.data)).convert("RGB")
                    if raw.size != (1280, 720):
                        # cover crop
                        raw = cover_to_1280x720(raw)
                    raw.save(out, "PNG")
                    if verbose:
                        print(f"✅ Saved background: {out} ({out.stat().st_size // 1024} KB)")
                    return str(out)
                elif hasattr(part, "text") and part.text and verbose:
                    print(f"[model text] {part.text[:200]}")
            print(f"[warn] no image in response from {model}")
        except Exception as e:
            last_err = e
            print(f"[fail] {model}: {e}")

    sys.exit(f"All models failed. Last error: {last_err}")


def cover_to_1280x720(img):
    W, H = 1280, 720
    src_w, src_h = img.size
    src_ratio = src_w / src_h
    tgt_ratio = W / H
    if src_ratio > tgt_ratio:
        new_h = H
        new_w = int(H * src_ratio)
    else:
        new_w = W
        new_h = int(W / src_ratio)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - W) // 2
    top = (new_h - H) // 2
    return img.crop((left, top, left + W, top + H))


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--output", required=True)
    p.add_argument("--main", required=True, help="메인(왼쪽 큰 얼굴) 이미지 경로")
    p.add_argument("--grid", nargs="+", required=True, help="그리드 이미지들")
    p.add_argument("--prompt", default="", help="추가 프롬프트")
    args = p.parse_args()
    compose(args.main, args.grid, args.output, args.prompt)


if __name__ == "__main__":
    main()
