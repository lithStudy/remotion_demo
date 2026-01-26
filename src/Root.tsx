import "./index.css";
import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld";
import { Logo, myCompSchema2 } from "./HelloWorld/Logo";
import {
  StrawManFallacy,
  strawManSchema,
} from "./StrawManFallacy/StrawManFallacy";
import { AdHominem, adHominemSchema } from "./AdHominem/AdHominem";
import {
  SkillAnimation,
  skillAnimationSchema,
  TOTAL_DURATION,
} from "./SkillAnimation/SkillAnimation";
import {
  AcademicAuthority,
  academicAuthoritySchema,
} from "./AcademicAuthority/AcademicAuthority";

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
      {/* 稻草人谬误讲解动画 */}
      <Composition
        id="StrawManFallacy"
        component={StrawManFallacy}
        durationInFrames={780}
        fps={30}
        width={1920}
        height={1080}
        schema={strawManSchema}
        defaultProps={{
          backgroundColor: "#667eea",
          primaryColor: "#3498DB",
          accentColor: "#E74C3C",
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
      {/* 学术权威压制谬误讲解动画 */}
      <Composition
        id="AcademicAuthority"
        component={AcademicAuthority}
        durationInFrames={540}
        fps={30}
        width={1920}
        height={1080}
        schema={academicAuthoritySchema}
        defaultProps={{
          backgroundColor: "#e3f2fd",
          primaryColor: "#4ECDC4",
          accentColor: "#e3f2fd",
        }}
      />
    </>
  );
};
