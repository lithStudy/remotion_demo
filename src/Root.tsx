import "./index.css";
import { Composition } from "remotion";
import { Demo as StrawManFallacy, DemoSchema as StrawManFallacySchema, TOTAL_DURATION_DEMO as STRAW_MAN_FALLACY_TOTAL_DURATION } from "./remotions/strawManFallacy/StrawManFallacy";
import { Crowd, CrowdSchema, TOTAL_DURATION_CROWD } from "./remotions/crowd/Crowd";
import { ConfirmationBias, ConfirmationBiasSchema, TOTAL_DURATION_CONFIRMATION_BIAS } from "./remotions/confirmationBias/ConfirmationBias";
import { ScienceIntro, ScienceIntroSchema, TOTAL_DURATION_SCIENCE_INTRO } from "./remotions/scienceIntro/ScienceIntro";
import { SourceEvaluation, SourceEvaluationSchema, TOTAL_DURATION_SOURCE_EVALUATION } from "./remotions/sourceEvaluation/SourceEvaluation";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
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
      {/* 认知偏见 - 确认偏误动画 */}
      <Composition
        id="ConfirmationBias"
        component={ConfirmationBias}
        durationInFrames={TOTAL_DURATION_CONFIRMATION_BIAS}
        fps={30}
        width={960}
        height={1280}
        schema={ConfirmationBiasSchema}
        defaultProps={{}}
      />
      {/* 科普类开场动画：卡片闪烁 → 定格 → 下移 + 主题文字 */}
      <Composition
        id="ScienceIntro"
        component={ScienceIntro}
        durationInFrames={TOTAL_DURATION_SCIENCE_INTRO}
        fps={30}
        width={960}
        height={1280}
        schema={ScienceIntroSchema}
        defaultProps={{
          titleText: "稻草人谬误",
        }}
      />


      {/* 批判性思维01：信息源评估 */}
      <Composition
        id="SourceEvaluation"
        component={SourceEvaluation}
        durationInFrames={TOTAL_DURATION_SOURCE_EVALUATION}
        fps={30}
        width={960}
        height={1280}
        schema={SourceEvaluationSchema}
        defaultProps={{}}
      />
    </>
  );
};
