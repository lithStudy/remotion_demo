import "./index.css";
import { Composition } from "remotion";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { 可得性启发1, 可得性启发1Schema, TOTAL_DURATION_可得性启发1 } from "./remotions/可得性启发1/可得性启发1";


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
    </>
  );
};
