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

const FeatureCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  delay: number;
  color: string;
}> = ({ icon, title, desc, delay, color }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${interpolate(s, [0, 1], [50, 0])}px) scale(${interpolate(s, [0, 1], [0.9, 1])})`,
        backgroundColor: COLORS.panel,
        border: `1px solid ${color}40`,
        borderRadius: 24,
        padding: "36px 32px",
        width: 380,
        textAlign: "center",
        boxShadow: `0 8px 32px ${color}15`,
      }}
    >
      <div style={{ fontSize: 84, marginBottom: 16 }}>{icon}</div>
      <div
        style={{
          ...baseText,
          fontSize: 39,
          fontWeight: 800,
          color,
          marginBottom: 10,
        }}
      >
        {title}
      </div>
      <div
        style={{
          ...baseText,
          fontSize: 27,
          color: COLORS.dim,
          lineHeight: 1.5,
        }}
      >
        {desc}
      </div>
    </div>
  );
};

export const Scene6Features: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  // GIF 등장 (텍스처링 워크플로우)
  const gifOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene6.wav")} />

      {/* 중앙 정렬 콘텐츠 */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* 타이틀 */}
        <div
          style={{
            textAlign: "center",
            opacity: titleOpacity,
          }}
        >
          <div style={{ ...baseText, fontSize: 96, fontWeight: 800 }}>
            더 많은 기능들
          </div>
        </div>

        {/* 카드 3개 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
          }}
        >
          <FeatureCard
            icon="🎨"
            title="AI 텍스처링"
            desc="자동으로 색상과 질감을 입혀줍니다"
            delay={30}
            color={COLORS.accent}
          />
          <FeatureCard
            icon="💃"
            title="500+ 애니메이션"
            desc="걷기, 춤 등 다양한 모션 적용"
            delay={55}
            color={COLORS.accent2}
          />
          <FeatureCard
            icon="📦"
            title="다양한 포맷"
            desc="FBX · OBJ · GLB · USDZ Blender · Unity · Unreal"
            delay={80}
            color={COLORS.ok}
          />
        </div>

        {/* 하단 GIF - 텍스처링 워크플로우 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: gifOpacity,
          }}
        >
          <Img
            src={staticFile("meshy_texturing_workflow.gif")}
            style={{
              height: 220,
              borderRadius: 16,
              border: `1px solid ${COLORS.accent}30`,
            }}
          />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
