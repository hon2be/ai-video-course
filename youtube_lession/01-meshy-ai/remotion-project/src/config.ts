/**
 * 씬 타이밍 설정 — 이 파일만 수정하면 전체 영상 길이가 조절됩니다.
 * Studio에서 핫리로드되므로 저장 즉시 프리뷰에 반영됩니다.
 *
 * 단위: 초 (소수점 가능)
 * 최소값: 각 씬의 TTS 오디오 길이 이상이어야 합니다.
 */

export const SCENE_SECONDS = {
  intro: 20,        // 인트로 영상 (mp4 길이 고정)
  scene1: 14,       // 오프닝 후킹         (TTS 12.5s + 1.5s)
  scene2: 20,       // meshy.ai란?         (TTS 17.9s + 2s)
  scene3: 14,       // 시작하기             (TTS 12.4s + 1.5s)
  scene4: 18,       // Text to 3D          (TTS 16.1s + 2s)
  scene5: 14,       // Image to 3D         (TTS 12.2s + 1.5s)
  scene6: 16,       // 기능 정리            (TTS 14.5s + 1.5s)
  usecases: 33,     // 활용 사례            (TTS 31.5s + 1.5s)
  scene7: 16,       // 직접 만든 예시        (TTS 14.1s + 2s)
  scene8: 15,       // 마무리/예고           (TTS 13.4s + 1.5s)
};

// === 아래는 자동 계산 — 수정 불필요 ===

const FPS = 30;

const toFrames = (sec: number) => Math.round(sec * FPS);

export const INTRO_FRAMES = toFrames(SCENE_SECONDS.intro);

export const SCENE_FRAMES = [
  toFrames(SCENE_SECONDS.scene1),
  toFrames(SCENE_SECONDS.scene2),
  toFrames(SCENE_SECONDS.scene3),
  toFrames(SCENE_SECONDS.scene4),
  toFrames(SCENE_SECONDS.scene5),
  toFrames(SCENE_SECONDS.scene6),
  toFrames(SCENE_SECONDS.usecases),
  toFrames(SCENE_SECONDS.scene7),
  toFrames(SCENE_SECONDS.scene8),
];

export const TOTAL_FRAMES =
  INTRO_FRAMES + SCENE_FRAMES.reduce((a, b) => a + b, 0);

// 총 길이 (초)
export const TOTAL_SECONDS = TOTAL_FRAMES / FPS;
