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

export const Scene5ImageTo3D: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const numOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 이미지 카드 등장
  const imgOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateRight: "clamp",
  });
  const imgX = interpolate(frame, [10, 35], [-100, 0], {
    extrapolateRight: "clamp",
  });

  // 화살표
  const arrowOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateRight: "clamp",
  });
  const arrowX = spring({ frame: frame - 60, fps, config: { damping: 10 } });

  // 3D 결과
  const resultOpacity = interpolate(frame, [90, 120], [0, 1], {
    extrapolateRight: "clamp",
  });
  const resultX = interpolate(frame, [90, 120], [100, 0], {
    extrapolateRight: "clamp",
  });

  // 회전 효과
  const rotation = interpolate(frame, [120, 360], [0, 360], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene5.wav")} />

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
            backgroundColor: COLORS.accent2,
            color: COLORS.bg,
            padding: "8px 20px",
            borderRadius: 8,
          }}
        >
          핵심기능 2
        </div>
        <div style={{ ...baseText, fontSize: 56, fontWeight: 800 }}>
          Image to 3D
        </div>
      </div>

      {/* 중앙 레이아웃: 이미지 → 화살표 → 3D */}
      <AbsoluteFill
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 60,
        }}
      >
        {/* 이미지 카드 */}
        <div
          style={{
            opacity: imgOpacity,
            transform: `translateX(${imgX}px)`,
            width: 380,
            height: 380,
            backgroundColor: COLORS.panel,
            border: `2px solid ${COLORS.accent}40`,
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 100 }}>🖼️</div>
          <div style={{ ...baseText, fontSize: 36, fontWeight: 600 }}>
            사진 / 그림
          </div>
          <div style={{ ...baseText, fontSize: 24, color: COLORS.dim }}>
            PNG · JPG · WebP
          </div>
        </div>

        {/* 화살표 */}
        <div
          style={{
            opacity: arrowOpacity,
            transform: `translateX(${interpolate(arrowX, [0, 1], [-30, 0])}px)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 96,
              color: COLORS.accent,
            }}
          >
            →
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 24,
              color: COLORS.dim,
            }}
          >
            AI 변환
          </div>
        </div>

        {/* 3D 결과 */}
        <div
          style={{
            opacity: resultOpacity,
            transform: `translateX(${resultX}px)`,
            width: 380,
            height: 380,
            backgroundColor: COLORS.panel,
            border: `2px solid ${COLORS.ok}40`,
            borderRadius: 24,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            boxShadow: `0 0 40px ${COLORS.accent2}20`,
          }}
        >
          <div
            style={{
              fontSize: 100,
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            🧊
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 36,
              fontWeight: 600,
              color: COLORS.ok,
            }}
          >
            3D 모델
          </div>
          <div style={{ ...baseText, fontSize: 24, color: COLORS.dim }}>
            텍스처 포함
          </div>
        </div>
      </AbsoluteFill>

      {/* 하단 메시지 */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 60,
        }}
      >
        <div
          style={{
            ...baseText,
            fontSize: 42,
            color: COLORS.dim,
            opacity: interpolate(frame, [100, 120], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          미드저니 이미지도 그대로 3D로!
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
