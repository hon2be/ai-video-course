import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  Sequence,
} from "remotion";

export type Hotspot = {
  // 이미지 컨테이너 내 위치 (0~100, 퍼센트)
  x: number;
  y: number;
  // 클릭 펄스가 등장하는 시점 (이미지 등장 후 frames)
  appearAt?: number;
  // 추가 안내 라벨 (예: "여기 클릭", "이 버튼")
  label?: string;
};

export type SectionImage = {
  src: string;
  caption?: string;
  hotspots?: Hotspot[];
};

export type SectionProps = {
  sectionNumber: string;
  title: string;
  subtitle?: string;
  audioFile: string;
  images: SectionImage[];
  durationInFrames: number;
  bullets?: string[];
};

const ORANGE = "#e05a00";
const BG = "#f5f5f0";
const CARD_BG = "#ffffff";

export const Section: React.FC<SectionProps> = ({
  sectionNumber,
  title,
  subtitle,
  audioFile,
  images,
  durationInFrames,
  bullets,
}) => {
  const frame = useCurrentFrame();

  // Header fade-in (좀 더 차분하게)
  const headerOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const headerTranslateY = interpolate(frame, [0, 40], [-40, 0], { extrapolateRight: "clamp" });

  // Image carousel timing — divide remaining time across images
  const HEADER_FRAMES = 45;
  const imageFrames = images.length > 0 ? Math.floor((durationInFrames - HEADER_FRAMES) / images.length) : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: BG }}>
      <Audio src={staticFile(audioFile)} />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 80,
          right: 80,
          opacity: headerOpacity,
          transform: `translateY(${headerTranslateY}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span
            style={{
              backgroundColor: ORANGE,
              color: "#fff",
              fontWeight: 700,
              fontSize: 28,
              padding: "8px 24px",
              borderRadius: 30,
              letterSpacing: 1,
              fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
            }}
          >
            {sectionNumber}
          </span>
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#1a1a1a",
              fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>
        {subtitle && (
          <p
            style={{
              fontSize: 28,
              color: "#666",
              marginTop: 12,
              marginLeft: 4,
              fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
            }}
          >
            {subtitle}
          </p>
        )}
        <div
          style={{
            marginTop: 24,
            height: 4,
            background: `linear-gradient(90deg, ${ORANGE} 0%, ${ORANGE}55 100%)`,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Image carousel */}
      {images.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: 240,
            left: 80,
            right: 80,
            bottom: 80,
          }}
        >
          {images.map((img, idx) => (
            <Sequence
              key={img.src + idx}
              from={HEADER_FRAMES + idx * imageFrames}
              durationInFrames={imageFrames + 60}
            >
              <ImageCard src={img.src} caption={img.caption} hotspots={img.hotspots} />
            </Sequence>
          ))}
        </div>
      )}

      {/* Bullets sidebar if provided */}
      {bullets && bullets.length > 0 && (
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 80,
            width: 600,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            borderLeft: `6px solid ${ORANGE}`,
          }}
        >
          {bullets.map((b, i) => {
            const appearAt = HEADER_FRAMES + i * 30;
            const op = interpolate(frame, [appearAt, appearAt + 20], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            const tx = interpolate(frame, [appearAt, appearAt + 20], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
            return (
              <div
                key={i}
                style={{
                  fontSize: 24,
                  color: "#1a1a1a",
                  marginBottom: 16,
                  fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
                  opacity: op,
                  transform: `translateX(${tx}px)`,
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: ORANGE, fontWeight: 800, marginRight: 12 }}>•</span>
                {b}
              </div>
            );
          })}
        </div>
      )}
    </AbsoluteFill>
  );
};

const ImageCard: React.FC<{ src: string; caption?: string; hotspots?: Hotspot[] }> = ({ src, caption, hotspots }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(frame, [0, 90], [1.0, 1.04], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ opacity }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            backgroundColor: CARD_BG,
            borderRadius: 16,
            padding: 16,
            boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
            maxWidth: "90%",
            maxHeight: "85%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <Img
              src={staticFile(src)}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                objectFit: "contain",
                borderRadius: 8,
                transform: `scale(${scale})`,
              }}
            />
            {hotspots?.map((h, i) => (
              <ClickPulse key={i} hotspot={h} />
            ))}
          </div>
        </div>
        {caption && (
          <div
            style={{
              fontSize: 22,
              color: "#555",
              fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
              backgroundColor: "rgba(255,255,255,0.9)",
              padding: "8px 20px",
              borderRadius: 8,
            }}
          >
            {caption}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

const ClickPulse: React.FC<{ hotspot: Hotspot }> = ({ hotspot }) => {
  const frame = useCurrentFrame();
  const start = hotspot.appearAt ?? 30;
  const f = frame - start;
  if (f < 0) return null;

  // 펄스: 0~30 frame 동안 0→1 확대, 그 후 일정 간격으로 반복
  const pulseCycle = 60; // 2초 주기
  const pulseFrame = f % pulseCycle;
  const pulseScale = interpolate(pulseFrame, [0, 40], [1, 2.2], { extrapolateRight: "clamp" });
  const pulseOpacity = interpolate(pulseFrame, [0, 40], [0.7, 0], { extrapolateRight: "clamp" });

  // 마우스 포인터: 등장 시 살짝 튀어 들어옴
  const ptrOpacity = interpolate(f, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const ptrScale = interpolate(f, [0, 18], [0.4, 1], { extrapolateRight: "clamp" });

  // 클릭 점: 펄스 사이클 시작 직후 살짝 작아짐 (탭하는 효과)
  const dotScale = interpolate(pulseFrame, [0, 6, 12], [1, 0.7, 1], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        position: "absolute",
        left: `${hotspot.x}%`,
        top: `${hotspot.y}%`,
        transform: "translate(-50%, -50%)",
        opacity: ptrOpacity,
        pointerEvents: "none",
      }}
    >
      {/* 펄스 링 */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 42,
          height: 42,
          marginLeft: -21,
          marginTop: -21,
          borderRadius: "50%",
          border: "4px solid #ff3d3d",
          transform: `scale(${pulseScale})`,
          opacity: pulseOpacity,
        }}
      />
      {/* 클릭 점 (빨간 동그라미) */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 28,
          height: 28,
          marginLeft: -14,
          marginTop: -14,
          borderRadius: "50%",
          backgroundColor: "#ff3d3d",
          border: "3px solid #fff",
          boxShadow: "0 4px 12px rgba(255,61,61,0.6)",
          transform: `scale(${dotScale})`,
        }}
      />
      {/* 마우스 포인터 (SVG) */}
      <svg
        width="40"
        height="48"
        viewBox="0 0 40 48"
        style={{
          position: "absolute",
          left: 14,
          top: 14,
          transform: `scale(${ptrScale})`,
          transformOrigin: "top left",
          filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.4))",
        }}
      >
        <path
          d="M3 3 L3 33 L11 25 L16 38 L21 36 L16 23 L26 23 Z"
          fill="#fff"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
      {/* 라벨 */}
      {hotspot.label && (
        <div
          style={{
            position: "absolute",
            left: 56,
            top: 56,
            backgroundColor: "#ff3d3d",
            color: "#fff",
            fontSize: 18,
            fontWeight: 700,
            padding: "6px 14px",
            borderRadius: 8,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
          }}
        >
          {hotspot.label}
        </div>
      )}
    </div>
  );
};

export const TitleSection: React.FC<{ durationInFrames: number }> = () => {
  const frame = useCurrentFrame();
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleScale = interpolate(frame, [0, 40], [0.85, 1.0], { extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #ffeed8 0%, #ffd9b0 50%, #ff9d52 100%)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#fff",
            backgroundColor: ORANGE,
            display: "inline-block",
            padding: "8px 28px",
            borderRadius: 40,
            fontWeight: 700,
            marginBottom: 28,
            fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
            letterSpacing: 2,
          }}
        >
          🎬 AI 영상 제작 기초 · 인물 데이터셋 편
        </div>
        <h1
          style={{
            fontSize: 100,
            fontWeight: 900,
            color: "#1a1a1a",
            margin: 0,
            fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
            lineHeight: 1.2,
            textShadow: "0 2px 12px rgba(0,0,0,0.1)",
          }}
        >
          영상 생성 전에<br/>
          <span style={{ color: ORANGE }}>동일인물 데이터셋부터</span>
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#444",
            marginTop: 40,
            opacity: subtitleOpacity,
            fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
          }}
        >
          ChatGPT로 데이터셋 → Firefly로 장면·모델
        </p>
      </div>
    </AbsoluteFill>
  );
};
