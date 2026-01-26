import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import { AdHominem, adHominemSchema } from "./AdHominem/AdHominem";
import {
  SkillAnimation,
  skillAnimationSchema,
  TOTAL_DURATION,
} from "./SkillAnimation/SkillAnimation";
import {
  StrawManFallacy2,
  strawManFallacy2Schema,
} from "./StrawManFallacy2/StrawManFallacy2";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        // You can take the "id" to render a video:
        // npx remotion render HelloWorld
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        // You can override these props for each render:
        // https://www.remotion.dev/docs/parametrized-rendering
        schema={myCompSchema}
        defaultProps={{
          titleText: "Welcome to Remotion",
          titleColor: "#000000",
          logoColor1: "#91EAE4",
          logoColor2: "#86A8E7",
        }}
      />
      {/* Mount any React component to make it show up in the sidebar and work on it individually! */}
      <Composition
        id="OnlyLogo"
        component={Logo}
        durationInFrames={150}
        fps={30}
        width={1920}
        height={1080}
        schema={myCompSchema2}
        defaultProps={{
          logoColor1: "#91dAE2" as const,
          logoColor2: "#86A8E7" as const,
        }}
      />
      {/* 稻草人谬误讲解动画 v2 */}
      <Composition
        id="StrawManFallacy2"
        component={StrawManFallacy2}
        durationInFrames={960}
        fps={30}
        width={1920}
        height={1080}
        schema={strawManFallacy2Schema}
        defaultProps={{
          backgroundColor: "#F7F9FC",
          primaryColor: "#38B2AC",
          accentColor: "#E53E3E",
        }}
      />
      {/* 人身攻击谬误讲解动画 */}
      <Composition
        id="AdHominem"
        component={AdHominem}
        durationInFrames={960}
        fps={30}
        width={1920}
        height={1080}
        schema={adHominemSchema}
        defaultProps={{
          backgroundColor: "#E74C3C",
          primaryColor: "#3498DB",
          accentColor: "#27AE60",
        }}
      />
      {/* Skill 提示词改变过程动画 */}
      <Composition
        id="SkillAnimation"
        component={SkillAnimation}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={skillAnimationSchema}
        defaultProps={{
          backgroundColor: "#1a1a2e",
          primaryColor: "#64ffda",
          accentColor: "#79c0ff",
        }}
      />
    </>
  );
};
