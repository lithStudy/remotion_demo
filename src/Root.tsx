import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { Test, TestSchema, TOTAL_DURATION_TEST } from "./remotions/test/Test";


// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>

      {/* TemplateShowcase：BWImageBreath 基元 + 全模板分段演示（含 CAUSE_CHAIN / CHECKLIST_REVEAL / PANEL_GRID 等） */}
      <Composition
        id="TemplateShowcase"
        component={TemplateShowcase}
        durationInFrames={TOTAL_DURATION_TEMPLATE_SHOWCASE}
        fps={30}
        width={1920}
        height={1280}
        defaultProps={{}}
      />
    
    
    
      {/* Test - 自动生成 */}
      <Composition
        id="Test"
        component={Test}
        durationInFrames={TOTAL_DURATION_TEST}
        fps={30}
        width={1080}
        height={680}
        schema={TestSchema}
        defaultProps={{}}
      />
    </>
  );
};
