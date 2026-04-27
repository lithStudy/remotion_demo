import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./remotions/templateShowcase/TemplateShowcase";
import { 小米核心技术, 小米核心技术竖屏, 小米核心技术Schema, TOTAL_DURATION_小米核心技术 } from "./remotions/小米核心技术/小米核心技术";
import { 小米核心技术封面横屏, 小米核心技术封面竖屏 } from "./remotions/小米核心技术/小米核心技术CoverStills";
import { 小米平权, 小米平权竖屏, 小米平权Schema, TOTAL_DURATION_小米平权 } from "./remotions/小米平权/小米平权";
import { 小米平权封面横屏, 小米平权封面竖屏 } from "./remotions/小米平权/小米平权CoverStills";
import { 认知陷阱3, 认知陷阱3竖屏, 认知陷阱3Schema, TOTAL_DURATION_认知陷阱3 } from "./remotions/认知陷阱3/认知陷阱3";
import { 认知陷阱3封面横屏, 认知陷阱3封面竖屏 } from "./remotions/认知陷阱3/认知陷阱3CoverStills";
import { 小米掀翻蚂蚁市场, 小米掀翻蚂蚁市场竖屏, 小米掀翻蚂蚁市场Schema, TOTAL_DURATION_小米掀翻蚂蚁市场 } from "./remotions/小米掀翻蚂蚁市场/小米掀翻蚂蚁市场";
import { 小米掀翻蚂蚁市场封面横屏, 小米掀翻蚂蚁市场封面竖屏 } from "./remotions/小米掀翻蚂蚁市场/小米掀翻蚂蚁市场CoverStills";
import { 碎片认知, 碎片认知竖屏, 碎片认知Schema, TOTAL_DURATION_碎片认知 } from "./remotions/碎片认知/碎片认知";
import { 碎片认知封面横屏, 碎片认知封面竖屏 } from "./remotions/碎片认知/碎片认知CoverStills";
import { 外资撤离逻辑图, TOTAL_DURATION_外资撤离逻辑图 } from "./remotions/外资撤离逻辑图/外资撤离逻辑图";
import { 鸿蒙商业圈地, 鸿蒙商业圈地竖屏, 鸿蒙商业圈地Schema, TOTAL_DURATION_鸿蒙商业圈地 } from "./remotions/鸿蒙商业圈地/鸿蒙商业圈地";
import { 鸿蒙商业圈地封面横屏, 鸿蒙商业圈地封面竖屏 } from "./remotions/鸿蒙商业圈地/鸿蒙商业圈地CoverStills";
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


      {/* 小米平权 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="小米平权"
        component={小米平权}
        durationInFrames={TOTAL_DURATION_小米平权}
        fps={30}
        width={1920}
        height={1080}
        schema={小米平权Schema}
        defaultProps={{}}
      />

      {/* 小米平权竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="小米平权竖屏"
        component={小米平权竖屏}
        durationInFrames={TOTAL_DURATION_小米平权}
        fps={30}
        width={1080}
        height={1920}
        schema={小米平权Schema}
        defaultProps={{}}
      />
      {/* 小米平权封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="小米平权封面横屏"
        component={小米平权封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 小米平权封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="小米平权封面竖屏"
        component={小米平权封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 认知陷阱3 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="认知陷阱3"
        component={认知陷阱3}
        durationInFrames={TOTAL_DURATION_认知陷阱3}
        fps={30}
        width={1920}
        height={1080}
        schema={认知陷阱3Schema}
        defaultProps={{}}
      />

      {/* 认知陷阱3竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="认知陷阱3竖屏"
        component={认知陷阱3竖屏}
        durationInFrames={TOTAL_DURATION_认知陷阱3}
        fps={30}
        width={1080}
        height={1920}
        schema={认知陷阱3Schema}
        defaultProps={{}}
      />
      {/* 认知陷阱3封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="认知陷阱3封面横屏"
        component={认知陷阱3封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 认知陷阱3封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="认知陷阱3封面竖屏"
        component={认知陷阱3封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 小米掀翻蚂蚁市场 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="小米掀翻蚂蚁市场"
        component={小米掀翻蚂蚁市场}
        durationInFrames={TOTAL_DURATION_小米掀翻蚂蚁市场}
        fps={30}
        width={1920}
        height={1080}
        schema={小米掀翻蚂蚁市场Schema}
        defaultProps={{}}
      />

      {/* 小米掀翻蚂蚁市场竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="小米掀翻蚂蚁市场竖屏"
        component={小米掀翻蚂蚁市场竖屏}
        durationInFrames={TOTAL_DURATION_小米掀翻蚂蚁市场}
        fps={30}
        width={1080}
        height={1920}
        schema={小米掀翻蚂蚁市场Schema}
        defaultProps={{}}
      />
      {/* 小米掀翻蚂蚁市场封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="小米掀翻蚂蚁市场封面横屏"
        component={小米掀翻蚂蚁市场封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 小米掀翻蚂蚁市场封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="小米掀翻蚂蚁市场封面竖屏"
        component={小米掀翻蚂蚁市场封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 碎片认知 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="碎片认知"
        component={碎片认知}
        durationInFrames={TOTAL_DURATION_碎片认知}
        fps={30}
        width={1920}
        height={1080}
        schema={碎片认知Schema}
        defaultProps={{}}
      />

      {/* 碎片认知竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="碎片认知竖屏"
        component={碎片认知竖屏}
        durationInFrames={TOTAL_DURATION_碎片认知}
        fps={30}
        width={1080}
        height={1920}
        schema={碎片认知Schema}
        defaultProps={{}}
      />
      {/* 碎片认知封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="碎片认知封面横屏"
        component={碎片认知封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 碎片认知封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="碎片认知封面竖屏"
        component={碎片认知封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 鸿蒙商业圈地 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="鸿蒙商业圈地"
        component={鸿蒙商业圈地}
        durationInFrames={TOTAL_DURATION_鸿蒙商业圈地}
        fps={30}
        width={1920}
        height={1080}
        schema={鸿蒙商业圈地Schema}
        defaultProps={{}}
      />

      {/* 鸿蒙商业圈地竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="鸿蒙商业圈地竖屏"
        component={鸿蒙商业圈地竖屏}
        durationInFrames={TOTAL_DURATION_鸿蒙商业圈地}
        fps={30}
        width={1080}
        height={1920}
        schema={鸿蒙商业圈地Schema}
        defaultProps={{}}
      />
      {/* 鸿蒙商业圈地封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="鸿蒙商业圈地封面横屏"
        component={鸿蒙商业圈地封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 鸿蒙商业圈地封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="鸿蒙商业圈地封面竖屏"
        component={鸿蒙商业圈地封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />
    </>
  );
};
