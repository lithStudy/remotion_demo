import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { StaticCover, StaticCoverSchema } from "./components";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { 可证伪性, 可证伪性Schema, TOTAL_DURATION_可证伪性 } from "./remotions/可证伪性/可证伪性";
import { 双盲实验, 双盲实验Schema, TOTAL_DURATION_双盲实验 } from "./remotions/双盲实验/双盲实验";
import { 样本偏差, 样本偏差Schema, TOTAL_DURATION_样本偏差 } from "./remotions/样本偏差/样本偏差";
import { 数据可视化陷阱, 数据可视化陷阱Schema, TOTAL_DURATION_数据可视化陷阱 } from "./remotions/数据可视化陷阱/数据可视化陷阱";
import { 平均数陷阱, 平均数陷阱Schema, TOTAL_DURATION_平均数陷阱 } from "./remotions/平均数陷阱/平均数陷阱";
import { 相关不等于因果, 相关不等于因果Schema, TOTAL_DURATION_相关不等于因果 } from "./remotions/相关不等于因果/相关不等于因果";
import { 认知偏见确认偏误, 认知偏见确认偏误Schema, TOTAL_DURATION_认知偏见_确认偏误 } from "./remotions/认知偏见_确认偏误/认知偏见确认偏误";
import { 认知偏见可得性启发, 认知偏见可得性启发Schema, TOTAL_DURATION_认知偏见_可得性启发 } from "./remotions/认知偏见_可得性启发/认知偏见可得性启发";


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

      {/* 样本偏差 - 自动生成 */}
      <Composition
        id="样本偏差"
        component={样本偏差}
        durationInFrames={TOTAL_DURATION_样本偏差}
        fps={30}
        width={960}
        height={1280}
        schema={样本偏差Schema}
        defaultProps={{}}
      />
    
      {/* 数据可视化陷阱 - 自动生成 */}
      <Composition
        id="数据可视化陷阱"
        component={数据可视化陷阱}
        durationInFrames={TOTAL_DURATION_数据可视化陷阱}
        fps={30}
        width={960}
        height={1280}
        schema={数据可视化陷阱Schema}
        defaultProps={{}}
      />
    
      {/* 平均数陷阱 - 自动生成 */}
      <Composition
        id="平均数陷阱"
        component={平均数陷阱}
        durationInFrames={TOTAL_DURATION_平均数陷阱}
        fps={30}
        width={960}
        height={1280}
        schema={平均数陷阱Schema}
        defaultProps={{}}
      />
    
      {/* 相关不等于因果 - 自动生成 */}
      <Composition
        id="相关不等于因果"
        component={相关不等于因果}
        durationInFrames={TOTAL_DURATION_相关不等于因果}
        fps={30}
        width={960}
        height={1280}
        schema={相关不等于因果Schema}
        defaultProps={{}}
      />
    
      {/* 认知偏见确认偏误 - 自动生成 */}
      <Composition
        id="认知偏见确认偏误"
        component={认知偏见确认偏误}
        durationInFrames={TOTAL_DURATION_认知偏见_确认偏误}
        fps={30}
        width={960}
        height={1280}
        schema={认知偏见确认偏误Schema}
        defaultProps={{}}
      />
    
      {/* 认知偏见可得性启发 - 自动生成 */}
      <Composition
        id="认知偏见可得性启发"
        component={认知偏见可得性启发}
        durationInFrames={TOTAL_DURATION_认知偏见_可得性启发}
        fps={30}
        width={960}
        height={1280}
        schema={认知偏见可得性启发Schema}
        defaultProps={{}}
      />
    </>
  );
};
