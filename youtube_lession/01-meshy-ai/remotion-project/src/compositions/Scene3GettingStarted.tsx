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

const CheckItem: React.FC<{
  text: string;
  icon: string;
  delay: number;
}> = ({ text, icon, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 12 } });
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 24,
        opacity,
        transform: `translateX(${interpolate(s, [0, 1], [-60, 0])}px)`,
        padding: "22px 40px",
        backgroundColor: `${COLORS.panel}CC`,
        border: `1px solid ${COLORS.accent}30`,
        borderRadius: 16,
      }}
    >
      <div style={{ fontSize: 54 }}>{icon}</div>
      <div style={{ ...baseText, fontSize: 48, fontWeight: 600 }}>{text}</div>
    </div>
  );
};

export const Scene3GettingStarted: React.FC = () => {
  const frame = useCurrentFrame();

  const gifOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene3.wav")} />

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 왼쪽: 진입점 GIF */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: gifOpacity,
            padding: 40,
          }}
        >
          <Img
            src={staticFile("meshy_entry_point.gif")}
            style={{
              width: "90%",
              borderRadius: 20,
              border: `2px solid ${COLORS.accent}40`,
              boxShadow: `0 0 40px ${COLORS.accent}20`,
            }}
          />
        </div>

        {/* 오른쪽: 체크리스트 */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 28,
            paddingRight: 60,
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 88,
              fontWeight: 800,
              marginBottom: 20,
              textAlign: "center",
              opacity: interpolate(frame, [10, 30], [0, 1], {
                extrapolateRight: "clamp",
              }),
            }}
          >
            시작하기
          </div>
          <CheckItem icon="💳" text="신용카드 필요 없음" delay={30} />
          <CheckItem icon="🎁" text="매달 100 무료 크레딧" delay={50} />
          <CheckItem icon="🌐" text="웹에서 바로 사용" delay={70} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
