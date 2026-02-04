import "./index.css";
import { Composition } from "remotion";
import { Demo, DemoSchema, TOTAL_DURATION_DEMO } from "./remotions/demo/Demo";
import { Demo as StrawManFallacy, DemoSchema as StrawManFallacySchema, TOTAL_DURATION_DEMO as STRAW_MAN_FALLACY_TOTAL_DURATION } from "./remotions/strawManFallacy/StrawManFallacy";
import { Crowd, CrowdSchema, TOTAL_DURATION_CROWD } from "./remotions/crowd/Crowd";
import { BabyProbiotics, BabyProbioticsSchema, TOTAL_DURATION_BABY_PROBIOTICS } from "./remotions/babyProbiotics/BabyProbiotics";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* demo */}
      <Composition
        id="Demo"
        component={Demo}
        durationInFrames={TOTAL_DURATION_DEMO}
        fps={30}
        width={1920}
        height={1080}
        schema={DemoSchema}
        defaultProps={{
          backgroundColor: "#F7F9FC",
          primaryColor: "#38B2AC",
          accentColor: "#E53E3E",
        }}
      />
      {/* 乌合之众 / 群体效应 */}
      <Composition
        id="Crowd"
        component={Crowd}
        durationInFrames={TOTAL_DURATION_CROWD}
        fps={30}
        width={960}
        height={1280}
        schema={CrowdSchema}
        defaultProps={{}}
      />
      {/* 稻草人谬误讲解动画 */}
      <Composition
        id="StrawManFallacy"
        component={StrawManFallacy}
        durationInFrames={STRAW_MAN_FALLACY_TOTAL_DURATION}
        fps={30}
        width={960}
        height={1280}
        schema={StrawManFallacySchema}
        defaultProps={{
          backgroundColor: "#F7F9FC",
          primaryColor: "#38B2AC",
          accentColor: "#E53E3E",
        }}
      />
      {/* 宝宝益生菌科普动画 */}
      <Composition
        id="BabyProbiotics"
        component={BabyProbiotics}
        durationInFrames={TOTAL_DURATION_BABY_PROBIOTICS}
        fps={30}
        width={960}
        height={1280}
        schema={BabyProbioticsSchema}
        defaultProps={{}}
      />

    </>
  );
};
