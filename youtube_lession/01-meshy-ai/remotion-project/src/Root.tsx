import React from "react";
import { Composition } from "remotion";
import { SCENE_FRAMES, TOTAL_FRAMES } from "./config";
import { FullVideo } from "./compositions/FullVideo";
import { Scene1Opening } from "./compositions/Scene1Opening";
import { Scene2WhatIsMeshy } from "./compositions/Scene2WhatIsMeshy";
import { Scene3GettingStarted } from "./compositions/Scene3GettingStarted";
import { Scene4TextTo3D } from "./compositions/Scene4TextTo3D";
import { Scene5ImageTo3D } from "./compositions/Scene5ImageTo3D";
import { Scene6Features } from "./compositions/Scene6Features";
import { SceneUseCases } from "./compositions/SceneUseCases";
import { Scene7Example } from "./compositions/Scene7Example";
import { Scene8Closing } from "./compositions/Scene8Closing";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;

const scenes = [
  { id: "Scene1-Opening", component: Scene1Opening, label: "1. 오프닝" },
  { id: "Scene2-WhatIsMeshy", component: Scene2WhatIsMeshy, label: "2. meshy란?" },
  { id: "Scene3-GettingStarted", component: Scene3GettingStarted, label: "3. 시작하기" },
  { id: "Scene4-TextTo3D", component: Scene4TextTo3D, label: "4. Text→3D" },
  { id: "Scene5-ImageTo3D", component: Scene5ImageTo3D, label: "5. Image→3D" },
  { id: "Scene6-Features", component: Scene6Features, label: "6. 기능 정리" },
  { id: "Scene7-UseCases", component: SceneUseCases, label: "7. 활용 사례" },
  { id: "Scene8-Example", component: Scene7Example, label: "8. 예시" },
  { id: "Scene9-Closing", component: Scene8Closing, label: "9. 마무리" },
];

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="FullVideo"
        component={FullVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />

      {scenes.map((scene, i) => (
        <Composition
          key={scene.id}
          id={scene.id}
          component={scene.component}
          durationInFrames={SCENE_FRAMES[i]}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      ))}
    </>
  );
};
