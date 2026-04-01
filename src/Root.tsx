import "./index.css";
import { Composition } from "remotion";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { 可得性启发6, 可得性启发6Schema, TOTAL_DURATION_可得性启发6 } from "./remotions/可得性启发/可得性启发6";
import { 可证伪性, 可证伪性Schema, TOTAL_DURATION_可证伪性 } from "./remotions/可证伪性/可证伪性";
import { 双盲实验, 双盲实验Schema, TOTAL_DURATION_双盲实验 } from "./remotions/双盲实验/双盲实验";


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
    
      {/* 可证伪性 - 自动生成 */}
      <Composition
        id="可证伪性"
        component={可证伪性}
        durationInFrames={TOTAL_DURATION_可证伪性}
        fps={30}
        width={960}
        height={1280}
        schema={可证伪性Schema}
        defaultProps={{}}
      />
    
      {/* 双盲实验 - 自动生成 */}
      <Composition
        id="双盲实验"
        component={双盲实验}
        durationInFrames={TOTAL_DURATION_双盲实验}
        fps={30}
        width={960}
        height={1280}
        schema={双盲实验Schema}
        defaultProps={{}}
      />
    </>
  );
};
