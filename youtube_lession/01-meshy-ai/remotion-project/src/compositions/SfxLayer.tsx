import React from "react";
import { Audio, Sequence, staticFile, useVideoConfig } from "remotion";

/**
 * 효과음 하나를 특정 프레임에 배치하는 헬퍼
 */
export const Sfx: React.FC<{
  src: string;
  at: number; // 프레임
  volume?: number;
}> = ({ src, at, volume = 0.5 }) => {
  return (
    <Sequence from={at} durationInFrames={90} name={`SFX-${src}`}>
      <Audio src={staticFile(`sfx/${src}`)} volume={volume} />
    </Sequence>
  );
};

/**
 * 타이핑 효과음을 반복 배치하는 헬퍼
 */
export const TypingSfx: React.FC<{
  startFrame: number;
  endFrame: number;
  interval?: number; // 프레임 간격 (기본 4프레임 = 0.13초)
  volume?: number;
}> = ({ startFrame, endFrame, interval = 4, volume = 0.2 }) => {
  const count = Math.floor((endFrame - startFrame) / interval);
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <Sfx
          key={i}
          src="typing.wav"
          at={startFrame + i * interval}
          volume={volume}
        />
      ))}
    </>
  );
};
