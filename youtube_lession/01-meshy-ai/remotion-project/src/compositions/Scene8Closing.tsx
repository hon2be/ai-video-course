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

export const Scene8Closing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 25], [30, 0], {
    extrapolateRight: "clamp",
  });

  // 다음 예고 등장
  const nextOpacity = interpolate(frame, [60, 85], [0, 1], {
    extrapolateRight: "clamp",
  });
  const nextScale = spring({
    frame: frame - 60,
    fps,
    config: { damping: 12 },
  });

  // 구독 버튼 애니메이션
  const subBtnOpacity = interpolate(frame, [120, 145], [0, 1], {
    extrapolateRight: "clamp",
  });
  const subBtnScale = spring({
    frame: frame - 120,
    fps,
    config: { damping: 10, stiffness: 150 },
  });

  // 배경 그라데이션 회전
  const bgAngle = frame * 0.3;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene8.wav")} />

      {/* 배경 그라데이션 */}
      <AbsoluteFill
        style={{
          background: `conic-gradient(from ${bgAngle}deg at 50% 50%, ${COLORS.accent}10, ${COLORS.accent2}10, ${COLORS.accent}10)`,
        }}
      />

      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 48,
        }}
      >
        {/* 오늘 영상 마무리 */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            textAlign: "center",
          }}
        >
          <div style={{ ...baseText, fontSize: 80, fontWeight: 700 }}>
            오늘은 여기까지!
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 36,
              color: COLORS.dim,
              marginTop: 12,
            }}
          >
            meshy.ai로 3D의 세계에 첫 발을 내딛어보세요
          </div>
        </div>

        {/* 다음 영상 예고 */}
        <div
          style={{
            opacity: nextOpacity,
            transform: `scale(${interpolate(nextScale, [0, 1], [0.8, 1])})`,
            backgroundColor: COLORS.panel,
            border: `2px solid ${COLORS.accent2}50`,
            borderRadius: 24,
            padding: "32px 56px",
            textAlign: "center",
            boxShadow: `0 0 40px ${COLORS.accent2}20`,
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 27,
              color: COLORS.dim,
              marginBottom: 10,
            }}
          >
            다음 영상
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 72,
              fontWeight: 800,
              background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            이미지 생성 AI — 미드저니
          </div>
        </div>

        {/* 구독 + 알림 버튼 */}
        <div
          style={{
            opacity: subBtnOpacity,
            transform: `scale(${interpolate(subBtnScale, [0, 1], [0.5, 1])})`,
            display: "flex",
            gap: 24,
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 36,
              fontWeight: 800,
              backgroundColor: "#FF0000",
              color: "white",
              padding: "16px 44px",
              borderRadius: 12,
            }}
          >
            구독
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 36,
              fontWeight: 800,
              backgroundColor: COLORS.panel2,
              border: `1px solid ${COLORS.dim}40`,
              color: COLORS.text,
              padding: "16px 44px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            🔔 알림 설정
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
