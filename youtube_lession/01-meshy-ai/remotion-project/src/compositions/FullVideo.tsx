import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Audio,
  OffthreadVideo,
  useCurrentFrame,
  interpolate,
  staticFile,
} from "remotion";
import { INTRO_FRAMES, SCENE_FRAMES, TOTAL_FRAMES } from "../config";
import { Sfx, TypingSfx } from "./SfxLayer";
import { Scene1Opening } from "./Scene1Opening";
import { Scene2WhatIsMeshy } from "./Scene2WhatIsMeshy";
import { Scene3GettingStarted } from "./Scene3GettingStarted";
import { Scene4TextTo3D } from "./Scene4TextTo3D";
import { Scene5ImageTo3D } from "./Scene5ImageTo3D";
import { Scene6Features } from "./Scene6Features";
import { SceneUseCases } from "./SceneUseCases";
import { Scene7Example } from "./Scene7Example";
import { Scene8Closing } from "./Scene8Closing";

export { SCENE_FRAMES, TOTAL_FRAMES };

const FADE_FRAMES = 15;

const SceneWithFade: React.FC<{
  children: React.ReactNode;
  duration: number;
  isLast?: boolean;
}> = ({ children, duration, isLast }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, FADE_FRAMES], [0, 1], {
    extrapolateRight: "clamp",
  });

  const fadeOut = isLast
    ? interpolate(frame, [duration - FADE_FRAMES * 3, duration], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    : interpolate(frame, [duration - FADE_FRAMES, duration], [1, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });

  return (
    <AbsoluteFill style={{ opacity: Math.min(fadeIn, fadeOut) }}>
      {children}
    </AbsoluteFill>
  );
};

// 각 씬의 시작 프레임 계산
const sceneStarts: number[] = [];
let _offset = INTRO_FRAMES;
for (let i = 0; i < SCENE_FRAMES.length; i++) {
  sceneStarts.push(_offset);
  _offset += SCENE_FRAMES[i];
}

export const FullVideo: React.FC = () => {
  const scenes = [
    Scene1Opening,
    Scene2WhatIsMeshy,
    Scene3GettingStarted,
    Scene4TextTo3D,
    Scene5ImageTo3D,
    Scene6Features,
    SceneUseCases,
    Scene7Example,
    Scene8Closing,
  ];

  let offset = INTRO_FRAMES;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0B0F1A" }}>
      {/* ===== BGM (인트로 이후 ~ 끝까지, 볼륨 낮게) ===== */}
      <Sequence from={INTRO_FRAMES} durationInFrames={TOTAL_FRAMES - INTRO_FRAMES}>
        <Audio
          src={staticFile("bgm_1.mp3")}
          volume={(f) => {
            const totalF = TOTAL_FRAMES - INTRO_FRAMES;
            // 페이드인 2초 + 페이드아웃 3초
            const fadeIn = interpolate(f, [0, 60], [0, 0.22], { extrapolateRight: "clamp" });
            const fadeOut = interpolate(f, [totalF - 90, totalF], [0.22, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
            return Math.min(fadeIn, fadeOut);
          }}
        />
      </Sequence>

      {/* ===== 인트로 영상 ===== */}
      <Sequence from={0} durationInFrames={INTRO_FRAMES} name="Intro">
        <SceneWithFade duration={INTRO_FRAMES}>
          <OffthreadVideo src={staticFile("intro.mp4")} />
        </SceneWithFade>
      </Sequence>

      {/* ===== 본편 씬들 ===== */}
      {scenes.map((SceneComponent, i) => {
        const from = offset;
        const duration = SCENE_FRAMES[i];
        offset += duration;
        return (
          <Sequence
            key={i}
            from={from}
            durationInFrames={duration}
            name={`Scene ${i + 1}`}
          >
            <SceneWithFade
              duration={duration}
              isLast={i === scenes.length - 1}
            >
              <SceneComponent />
            </SceneWithFade>
          </Sequence>
        );
      })}

      {/* ===== SFX 레이어 ===== */}

      {/* Scene 1: 오프닝 */}
      <Sfx src="whoosh.wav" at={sceneStarts[0]} volume={0.39} />
      <Sfx src="pop.wav" at={sceneStarts[0] + 30} volume={0.52} />
      <Sfx src="soft_appear.wav" at={sceneStarts[0] + 60} volume={0.39} />
      <Sfx src="fade_in.wav" at={sceneStarts[0] + 80} volume={0.26} />

      {/* Scene 2: meshy.ai란? */}
      <Sfx src="slide.wav" at={sceneStarts[1]} volume={0.39} />
      <Sfx src="tick.wav" at={sceneStarts[1] + 40} volume={0.39} />
      <Sfx src="tick.wav" at={sceneStarts[1] + 60} volume={0.39} />
      <Sfx src="tick.wav" at={sceneStarts[1] + 80} volume={0.39} />
      <Sfx src="pop.wav" at={sceneStarts[1] + 50} volume={0.33} />
      <Sfx src="pop.wav" at={sceneStarts[1] + 70} volume={0.33} />
      <Sfx src="pop.wav" at={sceneStarts[1] + 90} volume={0.33} />
      <Sfx src="ding.wav" at={sceneStarts[1] + 110} volume={0.26} />

      {/* Scene 3: 시작하기 */}
      <Sfx src="fade_in.wav" at={sceneStarts[2]} volume={0.26} />
      <Sfx src="select.wav" at={sceneStarts[2] + 30} volume={0.39} />
      <Sfx src="pop.wav" at={sceneStarts[2] + 50} volume={0.46} />
      <Sfx src="pop.wav" at={sceneStarts[2] + 70} volume={0.46} />
      <Sfx src="success.wav" at={sceneStarts[2] + 90} volume={0.33} />

      {/* Scene 4: Text to 3D */}
      <Sfx src="click.wav" at={sceneStarts[3]} volume={0.39} />
      <TypingSfx startFrame={sceneStarts[3] + 20} endFrame={sceneStarts[3] + 80} interval={4} volume={0.2} />
      <Sfx src="whoosh.wav" at={sceneStarts[3] + 90} volume={0.33} />
      <Sfx src="ding.wav" at={sceneStarts[3] + 120} volume={0.46} />
      <Sfx src="success.wav" at={sceneStarts[3] + 125} volume={0.26} />

      {/* Scene 5: Image to 3D */}
      <Sfx src="slide.wav" at={sceneStarts[4] + 10} volume={0.39} />
      <Sfx src="select.wav" at={sceneStarts[4] + 35} volume={0.39} />
      <Sfx src="whoosh.wav" at={sceneStarts[4] + 60} volume={0.39} />
      <Sfx src="pop.wav" at={sceneStarts[4] + 90} volume={0.46} />
      <Sfx src="ding.wav" at={sceneStarts[4] + 100} volume={0.26} />

      {/* Scene 6: 기능 정리 */}
      <Sfx src="fade_in.wav" at={sceneStarts[5]} volume={0.26} />
      <Sfx src="pop.wav" at={sceneStarts[5] + 30} volume={0.46} />
      <Sfx src="pop.wav" at={sceneStarts[5] + 55} volume={0.46} />
      <Sfx src="pop.wav" at={sceneStarts[5] + 80} volume={0.46} />
      <Sfx src="soft_appear.wav" at={sceneStarts[5] + 100} volume={0.26} />

      {/* Scene 7: 활용 사례 */}
      <Sfx src="bell.wav" at={sceneStarts[6]} volume={0.26} />
      <Sfx src="slide.wav" at={sceneStarts[6] + 30} volume={0.33} />
      <Sfx src="slide.wav" at={sceneStarts[6] + 60} volume={0.33} />
      <Sfx src="slide.wav" at={sceneStarts[6] + 90} volume={0.33} />
      <Sfx src="slide.wav" at={sceneStarts[6] + 120} volume={0.33} />
      <Sfx src="slide.wav" at={sceneStarts[6] + 150} volume={0.33} />
      <Sfx src="slide.wav" at={sceneStarts[6] + 180} volume={0.33} />
      <Sfx src="whistle.wav" at={sceneStarts[6] + 220} volume={0.26} />

      {/* Scene 8: 예시 쇼케이스 */}
      <Sfx src="soft_appear.wav" at={sceneStarts[7] + 10} volume={0.39} />
      <Sfx src="ding.wav" at={sceneStarts[7] + 40} volume={0.26} />
      <Sfx src="whistle.wav" at={sceneStarts[7] + 60} volume={0.2} />
      <Sfx src="applause.wav" at={sceneStarts[7] + 90} volume={0.2} />

      {/* Scene 9: 마무리 */}
      <Sfx src="fade_in.wav" at={sceneStarts[8]} volume={0.26} />
      <Sfx src="pop.wav" at={sceneStarts[8] + 60} volume={0.39} />
      <Sfx src="click.wav" at={sceneStarts[8] + 120} volume={0.46} />
      <Sfx src="bell.wav" at={sceneStarts[8] + 125} volume={0.33} />
      <Sfx src="success.wav" at={sceneStarts[8] + 130} volume={0.26} />
    </AbsoluteFill>
  );
};
