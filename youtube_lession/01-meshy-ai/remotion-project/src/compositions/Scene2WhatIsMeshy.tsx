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

const CountUp: React.FC<{ value: string; delay: number }> = ({
  value,
  delay,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 14 } });
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})`,
        textAlign: "center",
      }}
    >
      <div
        style={{
          ...baseText,
          fontSize: 160,
          fontWeight: 900,
          background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accent2})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {value}
      </div>
    </div>
  );
};

export const Scene2WhatIsMeshy: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [0, 25], [30, 0], {
    extrapolateRight: "clamp",
  });

  const stats = [
    { value: "190+", label: "개국", delay: 40 },
    { value: "1,000만+", label: "사용자", delay: 60 },
    { value: "1억+", label: "3D 모델", delay: 80 },
  ];

  const bottomOpacity = interpolate(frame, [110, 130], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene2.wav")} />

      {/* 배경 그리드 패턴 */}
      <AbsoluteFill
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,139,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,139,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

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
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 104,
              fontWeight: 800,
            }}
          >
            meshy.ai란?
          </div>
          <div
            style={{
              ...baseText,
              fontSize: 39,
              color: COLORS.dim,
              marginTop: 16,
            }}
          >
            텍스트 / 이미지 &rarr; 3D 모델 생성 AI
          </div>
        </div>

        {/* 숫자 카드 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 80,
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <CountUp value={stat.value} delay={stat.delay} />
              <div
                style={{
                  ...baseText,
                  fontSize: 36,
                  color: COLORS.dim,
                  marginTop: 8,
                  opacity: interpolate(
                    frame,
                    [stat.delay + 10, stat.delay + 25],
                    [0, 1],
                    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                  ),
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </AbsoluteFill>

      {/* 하단 메시지 */}
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
            fontSize: 54,
            fontWeight: 700,
            opacity: bottomOpacity,
            padding: "16px 40px",
            borderRadius: 16,
            border: `1px solid ${COLORS.accent}40`,
            backgroundColor: `${COLORS.panel}CC`,
          }}
        >
          3D를 전혀 몰라도 시작할 수 있습니다
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
