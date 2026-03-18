import "./index.css";
import { Composition } from "remotion";
import { Demo as StrawManFallacy, DemoSchema as StrawManFallacySchema, TOTAL_DURATION_DEMO as STRAW_MAN_FALLACY_TOTAL_DURATION } from "./remotions/strawManFallacy/StrawManFallacy";
import { Crowd, CrowdSchema, TOTAL_DURATION_CROWD } from "./remotions/crowd/Crowd";
import { ConfirmationBias, ConfirmationBiasSchema, TOTAL_DURATION_CONFIRMATION_BIAS } from "./remotions/confirmationBias/ConfirmationBias";
import { ScienceIntro, ScienceIntroSchema, TOTAL_DURATION_SCIENCE_INTRO } from "./remotions/scienceIntro/ScienceIntro";
import { Vocation, VocationSchema, TOTAL_DURATION_VOCATION } from "./remotions/vocation/Vocation";
import { MyVideo, MyVideoSchema, TOTAL_DURATION_MY_VIDEO } from "./remotions/my_video/MyVideo";
import { Statistic2, Statistic2Schema, TOTAL_DURATION_STATISTIC_2 } from "./remotions/statistic_2/Statistic2";
import { Statistic1, Statistic1Schema, TOTAL_DURATION_STATISTIC_1 } from "./remotions/statistic_1/Statistic1";
import { StatisticTest1, StatisticTest1Schema, TOTAL_DURATION_STATISTIC_TEST_1 } from "./remotions/statistic_test_1/StatisticTest1";
import { StatisticTest3, StatisticTest3Schema, TOTAL_DURATION_STATISTIC_TEST_3 } from "./remotions/statistic_test_3/StatisticTest3";
import { StatisticTest5, StatisticTest5Schema, TOTAL_DURATION_STATISTIC_TEST_5 } from "./remotions/statistic_test_5/StatisticTest5";

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


    
      {/* MyVideo - 自动生成 */}
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={TOTAL_DURATION_MY_VIDEO}
        fps={30}
        width={960}
        height={1280}
        schema={MyVideoSchema}
        defaultProps={{}}
      />
    
      {/* Statistic2 - 自动生成 */}
      <Composition
        id="Statistic2"
        component={Statistic2}
        durationInFrames={TOTAL_DURATION_STATISTIC_2}
        fps={30}
        width={960}
        height={1280}
        schema={Statistic2Schema}
        defaultProps={{}}
      />
    
      {/* Statistic1 - 自动生成 */}
      <Composition
        id="Statistic1"
        component={Statistic1}
        durationInFrames={TOTAL_DURATION_STATISTIC_1}
        fps={30}
        width={960}
        height={1280}
        schema={Statistic1Schema}
        defaultProps={{}}
      />
    
      {/* StatisticTest1 - 自动生成 */}
      <Composition
        id="StatisticTest1"
        component={StatisticTest1}
        durationInFrames={TOTAL_DURATION_STATISTIC_TEST_1}
        fps={30}
        width={960}
        height={1280}
        schema={StatisticTest1Schema}
        defaultProps={{}}
      />
    
      {/* StatisticTest3 - 自动生成 */}
      <Composition
        id="StatisticTest3"
        component={StatisticTest3}
        durationInFrames={TOTAL_DURATION_STATISTIC_TEST_3}
        fps={30}
        width={960}
        height={1280}
        schema={StatisticTest3Schema}
        defaultProps={{}}
      />
    
      {/* StatisticTest5 - 自动生成 */}
      <Composition
        id="StatisticTest5"
        component={StatisticTest5}
        durationInFrames={TOTAL_DURATION_STATISTIC_TEST_5}
        fps={30}
        width={960}
        height={1280}
        schema={StatisticTest5Schema}
        defaultProps={{}}
      />
    </>
  );
};
