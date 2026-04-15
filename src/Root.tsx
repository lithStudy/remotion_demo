import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { VERTICAL_COVER_POSTER_H, VERTICAL_COVER_POSTER_W } from "./components";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
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
        height={1080}
        defaultProps={{}}
      />

    </>
  );
};
