import { CSSProperties } from "react";

export const COLORS = {
  bg: "#0B0F1A",
  panel: "#121A2E",
  panel2: "#1B2745",
  accent: "#6E8BFF",
  accent2: "#9B6BFF",
  text: "#F4F7FF",
  dim: "#A7B2CC",
  warn: "#FBBF24",
  ok: "#4ADE80",
  gradientStart: "#6E8BFF",
  gradientEnd: "#9B6BFF",
};

export const baseText: CSSProperties = {
  fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif",
  color: COLORS.text,
};

export const captionStyle: CSSProperties = {
  ...baseText,
  fontSize: 84,
  fontWeight: 800,
  textAlign: "center" as const,
  lineHeight: 1.4,
};

export const subtitleStyle: CSSProperties = {
  ...baseText,
  fontSize: 42,
  fontWeight: 600,
  color: COLORS.dim,
  textAlign: "center" as const,
};

export const numberStyle: CSSProperties = {
  ...baseText,
  fontSize: 192,
  fontWeight: 900,
  background: `linear-gradient(135deg, ${COLORS.gradientStart}, ${COLORS.gradientEnd})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};
