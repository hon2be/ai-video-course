import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from "remotion";
import { COLORS, baseText } from "../styles";

export const Scene4TextTo3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 타이핑 효과
  const promptText = "귀여운 만화풍 로봇, 파스텔 컬러";
  const typedChars = Math.floor(
    interpolate(frame, [20, 80], [0, promptText.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const cursorBlink = Math.sin(frame * 0.15) > 0;

  // 변환 화살표
  const arrowOpacity = interpolate(frame, [90, 110], [0, 1], {
    extrapolateRight: "clamp",
  });
  const arrowScale = spring({
    frame: frame - 90,
    fps,
    config: { damping: 10 },
  });

  // 결과 등장
  const resultOpacity = interpolate(frame, [120, 150], [0, 1], {
    extrapolateRight: "clamp",
  });
  const resultScale = spring({
    frame: frame - 120,
    fps,
    config: { damping: 12 },
  });

  // 씬 번호
  const numOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene4.wav")} />

      {/* 배경 파티클 */}
      {Array.from({ length: 15 }).map((_, i) => {
        const x = (i * 137.5) % 1920;
        const baseY = (i * 89.3) % 1080;
        const y = baseY + Math.sin(frame * 0.02 + i) * 20;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: 4,
              height: 4,
              borderRadius: "50%",
              backgroundColor: COLORS.accent,
              opacity: 0.15,
            }}
          />
        );
      })}

      {/* 씬 번호 뱃지 */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 0,
          right: 0,
          opacity: numOpacity,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            ...baseText,
            fontSize: 27,
            fontWeight: 800,
            backgroundColor: COLORS.accent,
            color: COLORS.bg,
            padding: "8px 20px",
            borderRadius: 8,
          }}
        >
          핵심기능 1
        </div>
        <div style={{ ...baseText, fontSize: 56, fontWeight: 800 }}>
          Text to 3D
        </div>
      </div>

      {/* 중앙 콘텐츠 */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* 프롬프트 입력 박스 */}
        <div
          style={{
            backgroundColor: COLORS.panel,
            border: `2px solid ${COLORS.accent}50`,
            borderRadius: 16,
            padding: "28px 48px",
            minWidth: 700,
            textAlign: "center",
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 21,
              color: COLORS.dim,
              marginBottom: 10,
            }}
          >
            프롬프트
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 48,
              fontWeight: 600,
              minHeight: 60,
            }}
          >
            {promptText.slice(0, typedChars)}
            {frame < 90 && (
              <span
                style={{
                  opacity: cursorBlink ? 1 : 0,
                  color: COLORS.accent,
                }}
              >
                |
              </span>
            )}
          </div>
        </div>

        {/* 화살표 */}
        <div
          style={{
            fontSize: 90,
            opacity: arrowOpacity,
            transform: `scale(${interpolate(arrowScale, [0, 1], [0.3, 1])})`,
          }}
        >
          ⬇️
        </div>

        {/* 결과 카드 */}
        <div
          style={{
            opacity: resultOpacity,
            transform: `scale(${interpolate(resultScale, [0, 1], [0.8, 1])})`,
            backgroundColor: COLORS.panel,
            border: `2px solid ${COLORS.ok}50`,
            borderRadius: 20,
            padding: "36px 56px",
            textAlign: "center",
            boxShadow: `0 0 60px ${COLORS.accent}20`,
          }}
        >
          <div style={{ fontSize: 96, marginBottom: 12 }}>🤖</div>
          <div
            style={{
              ...baseText,
              fontSize: 42,
              fontWeight: 700,
              color: COLORS.ok,
            }}
          >
            3D 모델 생성 완료!
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 30,
              color: COLORS.dim,
              marginTop: 8,
            }}
          >
            Meshy 6 · 텍스처 포함
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
