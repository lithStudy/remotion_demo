import "./index.css";
import { Composition } from "remotion";
import {
  StrawManFallacy2,
  StrawManFallacy2Schema,
  STRAW_MAN_FALLACY_2_TOTAL_DURATION,
} from "./remotions/StrawManFallacy2/StrawManFallacy2";
import { Demo,DemoSchema,TOTAL_DURATION_DEMO } from "./remotions/demo/Demo";

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
      <Composition
        id="Demo2"
        component={Demo}
        durationInFrames={TOTAL_DURATION_DEMO}
        fps={30}
        width={960}
        height={1280}
        schema={DemoSchema}
        defaultProps={{
          backgroundColor: "#F7F9FC",
          primaryColor: "#38B2AC",
          accentColor: "#E53E3E",
        }}
      />
      {/* 稻草人谬误讲解动画 v2 */}
      <Composition
        id="StrawManFallacy2"
        component={StrawManFallacy2}
        durationInFrames={STRAW_MAN_FALLACY_2_TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
        schema={StrawManFallacy2Schema}
        defaultProps={{
          backgroundColor: "#F7F9FC",
          primaryColor: "#38B2AC",
          accentColor: "#E53E3E",
        }}
      />
      
    </>
  );
};
