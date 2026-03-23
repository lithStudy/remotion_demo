import "./index.css";
import { Composition } from "remotion";
import { Test, TestSchema, TOTAL_DURATION_TEST } from "./remotions/test/Test";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { Test1, Test1Schema, TOTAL_DURATION_TEST1 } from "./remotions/test1/Test1";


// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
     

    
      {/* Test - 自动生成 */}
      <Composition
        id="Test"
        component={Test}
        durationInFrames={TOTAL_DURATION_TEST}
        fps={30}
        width={960}
        height={1280}
        schema={TestSchema}
        defaultProps={{}}
      />

      {/* 13 个模板示例动画（仅展示用） */}
      <Composition
        id="TemplateShowcase"
        component={TemplateShowcase}
        durationInFrames={TOTAL_DURATION_TEMPLATE_SHOWCASE}
        fps={30}
        width={960}
        height={1280}
        defaultProps={{}}
      />
    
      {/* Test1 - 自动生成 */}
      <Composition
        id="Test1"
        component={Test1}
        durationInFrames={TOTAL_DURATION_TEST1}
        fps={30}
        width={960}
        height={1280}
        schema={Test1Schema}
        defaultProps={{}}
      />
    </>
  );
};
