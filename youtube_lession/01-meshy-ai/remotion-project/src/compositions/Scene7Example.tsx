import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Img,
  Audio,
  staticFile,
} from "remotion";
import { COLORS, baseText } from "../styles";

export const Scene7Example: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateRight: "clamp",
  });

  // GIF 서서히 확대
  const gifScale = interpolate(frame, [20, 360], [0.95, 1.05], {
    extrapolateRight: "clamp",
  });
  const gifOpacity = interpolate(frame, [10, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  // 프레임 글로우 효과
  const glowPhase = Math.sin(frame * 0.04) * 0.5 + 0.5;
  const glowColor = `rgba(110, 139, 255, ${0.2 + glowPhase * 0.3})`;

  // 하단 캡션
  const captionOpacity = interpolate(frame, [60, 85], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <Audio src={staticFile("audio/scene7.wav")} />

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
          }}
        >
          <div style={{ ...baseText, fontSize: 88, fontWeight: 800 }}>
            직접 만든 예시
          </div>
        </div>

        {/* 메인 GIF - 로봇 턴테이블 */}
        <div
          style={{
            opacity: gifOpacity,
            transform: `scale(${gifScale})`,
            borderRadius: 28,
            overflow: "hidden",
            border: `3px solid ${COLORS.accent}60`,
            boxShadow: `0 0 80px ${glowColor}`,
          }}
        >
          <Img
            src={staticFile("meshy_result_textured_turntable.gif")}
            style={{
              width: 700,
              borderRadius: 24,
            }}
          />
        </div>

        {/* 프롬프트 라벨 */}
        <div
          style={{
            opacity: captionOpacity,
          }}
        >
          <div
            style={{
              ...baseText,
              fontSize: 33,
              backgroundColor: `${COLORS.panel}DD`,
              padding: "14px 32px",
              borderRadius: 12,
              border: `1px solid ${COLORS.accent}30`,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ color: COLORS.accent, fontWeight: 700 }}>
              프롬프트:
            </span>
            <span style={{ color: COLORS.dim }}>
              "귀여운 만화풍 로봇, 파스텔 컬러"
            </span>
          </div>
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
            opacity: interpolate(frame, [90, 115], [0, 1], {
              extrapolateRight: "clamp",
            }),
            color: COLORS.ok,
          }}
        >
          처음 만든 것치고 꽤 그럴듯하죠?
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
