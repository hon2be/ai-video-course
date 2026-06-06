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

const UseCaseCard: React.FC<{
  icon: string;
  title: string;
  desc: string;
  delay: number;
  index: number;
}> = ({ icon, title, desc, delay, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 좌우 번갈아 슬라이드
  const fromX = index % 2 === 0 ? -80 : 80;
  const x = interpolate(s, [0, 1], [fromX, 0]);

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        alignItems: "center",
        gap: 24,
        padding: "24px 36px",
        backgroundColor: `${COLORS.panel}DD`,
        border: `1px solid ${COLORS.accent}25`,
        borderRadius: 16,
        width: 520,
      }}
    >
      <div style={{ fontSize: 63, flexShrink: 0 }}>{icon}</div>
      <div>
        <div
          style={{ ...baseText, fontSize: 33, fontWeight: 700, marginBottom: 6 }}
        >
          {title}
        </div>
        <div style={{ ...baseText, fontSize: 24, color: COLORS.dim }}>
          {desc}
        </div>
      </div>
    </div>
  );
};

export const SceneUseCases: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 25], [25, 0], {
    extrapolateRight: "clamp",
  });

  const useCases = [
    {
      icon: "🎮",
      title: "게임 개발",
      desc: "캐릭터, 소품, 배경 에셋을 빠르게 제작",
      delay: 30,
    },
    {
      icon: "🎬",
      title: "유튜브 / 콘텐츠",
      desc: "썸네일, 인트로에 3D 오브젝트 활용",
      delay: 60,
    },
    {
      icon: "📚",
      title: "교육 자료",
      desc: "입체 모형으로 시각적 이해도 UP",
      delay: 90,
    },
    {
      icon: "💡",
      title: "제품 프로토타입",
      desc: "아이디어를 빠르게 3D 시각화",
      delay: 120,
    },
    {
      icon: "🥽",
      title: "AR / VR 콘텐츠",
      desc: "몰입형 경험을 위한 3D 에셋",
      delay: 150,
    },
    {
      icon: "🖨️",
      title: "3D 프린팅",
      desc: "STL/OBJ 내보내기로 바로 출력",
      delay: 180,
    },
  ];

  // 하단 메시지
  const bottomOpacity = interpolate(frame, [220, 250], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene_usecases.wav")} />

      {/* 배경 그리드 */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, ${COLORS.accent}08 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${COLORS.accent2}08 0%, transparent 50%)
          `,
        }}
      />

      {/* 중앙 정렬 콘텐츠 */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
        }}
      >
        {/* 타이틀 */}
        <div
          style={{
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div style={{ ...baseText, fontSize: 96, fontWeight: 800 }}>
            어디에 활용할 수 있을까?
          </div>
        </div>

        {/* 카드 그리드 - 2열 3행 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 20,
            padding: "0 40px",
          }}
        >
          {useCases.map((uc, i) => (
            <UseCaseCard key={i} index={i} {...uc} />
          ))}
        </div>
      </AbsoluteFill>

      {/* 하단 메시지 */}
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        <div
          style={{
            ...baseText,
            fontSize: 45,
            fontWeight: 700,
            opacity: bottomOpacity,
            background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          아이디어만 있으면 활용 범위는 무궁무진!
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
