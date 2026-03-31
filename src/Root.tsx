import "./index.css";
import { Composition } from "remotion";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { 可得性启发1, 可得性启发1Schema, TOTAL_DURATION_可得性启发1 } from "./remotions/可得性启发1/可得性启发1";
import { 可得性启发2, 可得性启发2Schema, TOTAL_DURATION_可得性启发2 } from "./remotions/可得性启发2/可得性启发2";
import { 可得性启发3, 可得性启发3Schema, TOTAL_DURATION_可得性启发3 } from "./remotions/可得性启发3/可得性启发3";
import { 可得性启发串联, 可得性启发串联Schema, TOTAL_DURATION_可得性启发_串联 } from "./remotions/可得性启发_串联/可得性启发串联";
import { 可得性启发4, 可得性启发4Schema, TOTAL_DURATION_可得性启发4 } from "./remotions/可得性启发4/可得性启发4";
import { 可得性启发5, 可得性启发5Schema, TOTAL_DURATION_可得性启发5 } from "./remotions/可得性启发5/可得性启发5";
import { 可得性启发6, 可得性启发6Schema, TOTAL_DURATION_可得性启发6 } from "./remotions/可得性启发6/可得性启发6";


// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>

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
    
      {/* 可得性启发串联 - 自动生成 */}
      <Composition
        id="可得性启发串联"
        component={可得性启发串联}
        durationInFrames={TOTAL_DURATION_可得性启发_串联}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发串联Schema}
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
    
      {/* 可得性启发5 - 自动生成 */}
      <Composition
        id="可得性启发5"
        component={可得性启发5}
        durationInFrames={TOTAL_DURATION_可得性启发5}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发5Schema}
        defaultProps={{}}
      />
    
      {/* 可得性启发6 - 自动生成 */}
      <Composition
        id="可得性启发6"
        component={可得性启发6}
        durationInFrames={TOTAL_DURATION_可得性启发6}
        fps={30}
        width={960}
        height={1280}
        schema={可得性启发6Schema}
        defaultProps={{}}
      />
    </>
  );
};
