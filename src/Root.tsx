import "./index.css";
import { Composition } from "remotion";
import { Test, TestSchema, TOTAL_DURATION_TEST } from "./remotions/test/Test";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { Test1, Test1Schema, TOTAL_DURATION_TEST1 } from "./remotions/test1/Test1";
import { Test2, Test2Schema, TOTAL_DURATION_TEST2 } from "./remotions/test2/Test2";
import { Test3, Test3Schema, TOTAL_DURATION_TEST3 } from "./remotions/test3/Test3";
import { Test4, Test4Schema, TOTAL_DURATION_TEST4 } from "./remotions/test4/Test4";


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
    
      {/* Test2 - 自动生成 */}
      <Composition
        id="Test2"
        component={Test2}
        durationInFrames={TOTAL_DURATION_TEST2}
        fps={30}
        width={960}
        height={1280}
        schema={Test2Schema}
        defaultProps={{}}
      />
    
      {/* Test3 - 自动生成 */}
      <Composition
        id="Test3"
        component={Test3}
        durationInFrames={TOTAL_DURATION_TEST3}
        fps={30}
        width={960}
        height={1280}
        schema={Test3Schema}
        defaultProps={{}}
      />
    
      {/* Test4 - 自动生成 */}
      <Composition
        id="Test4"
        component={Test4}
        durationInFrames={TOTAL_DURATION_TEST4}
        fps={30}
        width={960}
        height={1280}
        schema={Test4Schema}
        defaultProps={{}}
      />
    </>
  );
};
