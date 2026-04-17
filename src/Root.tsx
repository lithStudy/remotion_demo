import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { VERTICAL_COVER_POSTER_H, VERTICAL_COVER_POSTER_W } from "./components";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { 小米核心技术, 小米核心技术竖屏, 小米核心技术Schema, TOTAL_DURATION_小米核心技术 } from "./remotions/小米核心技术/小米核心技术";
import { 小米核心技术封面横屏, 小米核心技术封面竖屏 } from "./remotions/小米核心技术/小米核心技术CoverStills";
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

      {/* 小米核心技术 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="小米核心技术"
        component={小米核心技术}
        durationInFrames={TOTAL_DURATION_小米核心技术}
        fps={30}
        width={1920}
        height={1080}
        schema={小米核心技术Schema}
        defaultProps={{}}
      />

      {/* 小米核心技术竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="小米核心技术竖屏"
        component={小米核心技术竖屏}
        durationInFrames={TOTAL_DURATION_小米核心技术}
        fps={30}
        width={1080}
        height={1920}
        schema={小米核心技术Schema}
        defaultProps={{}}
      />
      {/* 小米核心技术封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="小米核心技术封面横屏"
        component={小米核心技术封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 小米核心技术封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="小米核心技术封面竖屏"
        component={小米核心技术封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />
    </>
  );
};
