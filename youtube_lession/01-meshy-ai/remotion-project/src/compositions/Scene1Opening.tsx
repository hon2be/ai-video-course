import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  Audio,
  staticFile,
} from "remotion";
import { COLORS, baseText } from "../styles";

export const Scene1Opening: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // GIF 페이드인
  const gifOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });
  const gifScale = interpolate(frame, [0, 30], [1.1, 1], {
    extrapolateRight: "clamp",
  });

  // 타이틀 등장
  const titleY = spring({ frame: frame - 30, fps, config: { damping: 12 } });
  const titleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 서브타이틀
  const subOpacity = interpolate(frame, [60, 80], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 글로우 펄스
  const glowIntensity = interpolate(
    Math.sin(frame * 0.05),
    [-1, 1],
    [20, 40]
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene1.wav")} />

      {/* 배경 GIF - 로봇 턴테이블 */}
      <AbsoluteFill
        style={{
          opacity: gifOpacity * 0.6,
          transform: `scale(${gifScale})`,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img
          src={staticFile("meshy_result_textured_turntable.gif")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(2px) brightness(0.5)",
          }}
        />
      </AbsoluteFill>

      {/* 그라데이션 오버레이 */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #0B0F1A 80%)",
        }}
      />

      {/* 메인 타이틀 */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
        }}
      >
        <div
          style={{
            ...baseText,
            fontSize: 112,
            fontWeight: 900,
            opacity: titleOpacity,
            transform: `translateY(${interpolate(titleY, [0, 1], [40, 0])}px)`,
            textShadow: `0 0 ${glowIntensity}px ${COLORS.accent}`,
            textAlign: "center",
          }}
        >
          글 한 줄, 사진 한 장이면
        </div>
        <div
          style={{
            ...baseText,
            fontSize: 144,
            fontWeight: 900,
            opacity: subOpacity,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}
        >
          3D 모델 1분 완성
        </div>
      </AbsoluteFill>

      {/* 하단 meshy.ai 로고 텍스트 */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 80,
        }}
      >
        <div
          style={{
            ...baseText,
            fontSize: 48,
            fontWeight: 700,
            opacity: interpolate(frame, [80, 100], [0, 1], {
              extrapolateRight: "clamp",
            }),
            color: COLORS.dim,
          }}
        >
          meshy.ai
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
