import "./index.css";
import { Composition } from "remotion";
import { Test, TestSchema, TOTAL_DURATION_TEST } from "./remotions/test/Test";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { Test1, Test1Schema, TOTAL_DURATION_TEST1 } from "./remotions/test1/Test1";
import { Test2, Test2Schema, TOTAL_DURATION_TEST2 } from "./remotions/test2/Test2";
import { Test3, Test3Schema, TOTAL_DURATION_TEST3 } from "./remotions/test3/Test3";
import { Test4, Test4Schema, TOTAL_DURATION_TEST4 } from "./remotions/test4/Test4";
import { Test5, Test5Schema, TOTAL_DURATION_TEST5 } from "./remotions/test5/Test5";
import { Test6, Test6Schema, TOTAL_DURATION_TEST6 } from "./remotions/test6/Test6";
import { 可得性启发, 可得性启发Schema, TOTAL_DURATION_可得性启发 } from "./remotions/可得性启发/可得性启发";
import { 可得性启发2, 可得性启发2Schema, TOTAL_DURATION_可得性启发2 } from "./remotions/可得性启发2/可得性启发2";
import { 可得性启发1, 可得性启发1Schema, TOTAL_DURATION_可得性启发1 } from "./remotions/可得性启发1/可得性启发1";
import { 可得性启发3, 可得性启发3Schema, TOTAL_DURATION_可得性启发3 } from "./remotions/可得性启发3/可得性启发3";
import { 可得性启发4, 可得性启发4Schema, TOTAL_DURATION_可得性启发4 } from "./remotions/可得性启发4/可得性启发4";


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
    
      {/* Test5 - 自动生成 */}
      <Composition
        id="Test5"
        component={Test5}
        durationInFrames={TOTAL_DURATION_TEST5}
        fps={30}
        width={960}
        height={1280}
        schema={Test5Schema}
        defaultProps={{}}
      />
    
      {/* Test6 - 自动生成 */}
      <Composition
        id="Test6"
        component={Test6}
        durationInFrames={TOTAL_DURATION_TEST6}
        fps={30}
        width={960}
        height={1280}
        schema={Test6Schema}
        defaultProps={{}}
      />
    
      {/* 可得性启发 - 自动生成 */}
      <Composition
        id="可得性启发"
        component={可得性启发}
        durationInFrames={TOTAL_DURATION_可得性启发}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发Schema}
        defaultProps={{}}
      />
    
      {/* 可得性启发2 - 自动生成 */}
      <Composition
        id="可得性启发2"
        component={可得性启发2}
        durationInFrames={TOTAL_DURATION_可得性启发2}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发2Schema}
        defaultProps={{}}
      />
    
      {/* 可得性启发1 - 自动生成 */}
      <Composition
        id="可得性启发1"
        component={可得性启发1}
        durationInFrames={TOTAL_DURATION_可得性启发1}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发1Schema}
        defaultProps={{}}
      />
    
      {/* 可得性启发3 - 自动生成 */}
      <Composition
        id="可得性启发3"
        component={可得性启发3}
        durationInFrames={TOTAL_DURATION_可得性启发3}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发3Schema}
        defaultProps={{}}
      />
    
      {/* 可得性启发4 - 自动生成 */}
      <Composition
        id="可得性启发4"
        component={可得性启发4}
        durationInFrames={TOTAL_DURATION_可得性启发4}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发4Schema}
        defaultProps={{}}
      />
    </>
  );
};
