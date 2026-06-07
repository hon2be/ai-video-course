# 강의 영상 썸네일 메이커 (1280×720)

YouTube 강의/튜토리얼 시리즈용 썸네일을 일관된 레이아웃으로 빠르게 만드는 Python 스크립트.

## 레이아웃

```
┌────────────────┬──────────────────────┐
│                │  멀티샷 그리드 4컷    │
│   메인 인물     │  (620~1240, y 50~330)│
│   클로즈업      ├──────────────────────┤
│   (0~580)      │  배지                 │
│                │  제목                 │
│                │  강조 부제            │
└────────────────┴──────────────────────┘
```

- 좌측 메인 인물 이미지는 우측 100px가 배경 색으로 페이드 → 텍스트 가독성 보호
- 우측 상단 멀티샷 그리드(2×2) → 같은 인물의 다양한 각도/표정 노출
- 우측 하단 텍스트 영역만 → 이미지와 절대 안 겹침

## 사용법

### 1) JSON config 방식 (권장)

```bash
python3 thumbnail.py --config examples/firefly_ep1.json
```

config 예시 (`examples/firefly_ep1.json`):

```json
{
  "output": "../02-firefly-persion/thumbnail.png",
  "theme": "firefly",
  "badge": "EP.1 · AI 영상 제작 기초",
  "title": ["동일 인물 AI 영상의 핵심"],
  "subtitle": "1 - 데이터셋 만들기",
  "main_image": "/path/to/main_face.png",
  "grid_images": [
    "/path/to/closeup_1.png",
    "/path/to/closeup_2.png",
    "/path/to/closeup_3.png",
    "/path/to/closeup_4.png"
  ]
}
```

### 2) CLI 직접

```bash
python3 thumbnail.py \
  --output out/thumb.png \
  --theme firefly \
  --badge "EP.2 · AI 영상 제작 기초" \
  --title "GPT × Firefly" "동일인물 영상 만들기" \
  --subtitle "2 - 영상 생성" \
  --main-image path/to/main.png \
  --grid-images img1.png img2.png img3.png img4.png
```

## config 필드

| 필드 | 타입 | 설명 |
|---|---|---|
| `output` | str | 저장 경로 (.png) |
| `theme` | `firefly` / `dark` / `blue` | 색상 테마 |
| `badge` | str (선택) | 상단 배지 텍스트 (예: "EP.1 · 시리즈명") |
| `title` | str[] | 제목 — 1줄 또는 2줄 배열 |
| `subtitle` | str (선택) | 큰 강조 부제 (예: 회차 번호) |
| `main_image` | str | 좌측 메인 인물 이미지 경로 |
| `grid_images` | str[4] | 우측 상단 그리드 4컷 경로 |
| `title_size` | int (선택, 기본 54) | 제목 폰트 크기 |
| `subtitle_size` | int (선택, 기본 72) | 부제 폰트 크기 |

## 테마

- **firefly** — 다크 네이비 → 보라 → 오렌지 그라데이션. Adobe Firefly / AI 영상 강의에 적합.
- **dark** — 다크 그라데이션 + 빨간 배지. 일반 강의/튜토리얼.
- **blue** — 블루 그라데이션 + 노란 강조. 테크/개발 강의.

## 폰트

`fonts/` 디렉토리에 노토산스 KR 폰트 포함 (Bold / Black / Regular).

## 시리즈 영상 일관성

같은 시리즈의 EP.2, EP.3을 만들 때는 기존 config를 복사 후 `badge`, `title`, `subtitle`, `main_image`, `grid_images`만 바꾸세요. 레이아웃과 색감이 자동으로 일관됩니다.

## 의존성

```bash
pip install pillow
```

## 디자인 원칙

1. **이미지 ≠ 텍스트 영역** — 텍스트가 들어갈 영역에는 이미지 침범 금지
2. **얼굴 노출 최대화** — 좌측 메인 인물은 인물 얼굴이 명확히 보이게 (cover crop)
3. **시리즈 회차 강조** — `subtitle`에 회차 번호를 큰 글씨로 → 시리즈물임을 즉시 인지
4. **다양성 노출** — 우측 그리드 4컷으로 "이런 다양한 컷을 만들 수 있음" 미리 노출
