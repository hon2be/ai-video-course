import React from "react";
import { Composition } from "remotion";
import { MainVideo, TOTAL_FRAMES, FPS, WIDTH, HEIGHT } from "./compositions/MainVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainVideo"
        component={MainVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
