import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { TemplateShowcase, TOTAL_DURATION_TEMPLATE_SHOWCASE } from "./templateShowcase/TemplateShowcase";
import { 小米核心技术, 小米核心技术竖屏, 小米核心技术Schema, TOTAL_DURATION_小米核心技术 } from "./remotions/小米核心技术/小米核心技术";
import { 小米核心技术封面横屏, 小米核心技术封面竖屏 } from "./remotions/小米核心技术/小米核心技术CoverStills";
import { 小米平权, 小米平权竖屏, 小米平权Schema, TOTAL_DURATION_小米平权 } from "./remotions/小米平权/小米平权";
import { 小米平权封面横屏, 小米平权封面竖屏 } from "./remotions/小米平权/小米平权CoverStills";
import { 碎片认知, 碎片认知竖屏, 碎片认知Schema, TOTAL_DURATION_碎片认知 } from "./remotions/碎片认知/碎片认知";
import { 碎片认知封面横屏, 碎片认知封面竖屏 } from "./remotions/碎片认知/碎片认知CoverStills";
import { 鸿蒙商业圈地, 鸿蒙商业圈地竖屏, 鸿蒙商业圈地Schema, TOTAL_DURATION_鸿蒙商业圈地 } from "./remotions/鸿蒙商业圈地/鸿蒙商业圈地";
import { 鸿蒙商业圈地封面横屏, 鸿蒙商业圈地封面竖屏 } from "./remotions/鸿蒙商业圈地/鸿蒙商业圈地CoverStills";
import { 开源精神, 开源精神竖屏, 开源精神Schema, TOTAL_DURATION_开源精神 } from "./remotions/开源精神/开源精神";
import { 开源精神封面横屏, 开源精神封面竖屏 } from "./remotions/开源精神/开源精神CoverStills";
import { 国产情怀的谎言, 国产情怀的谎言竖屏, 国产情怀的谎言Schema, TOTAL_DURATION_国产情怀的谎言 } from "./remotions/国产情怀的谎言/国产情怀的谎言";
import { 国产情怀的谎言封面横屏, 国产情怀的谎言封面竖屏 } from "./remotions/国产情怀的谎言/国产情怀的谎言CoverStills";
import { 小米挖孔机盖事件, 小米挖孔机盖事件竖屏, 小米挖孔机盖事件Schema, TOTAL_DURATION_小米挖孔机盖事件 } from "./remotions/小米挖孔机盖事件/小米挖孔机盖事件";
import { 小米挖孔机盖事件封面横屏, 小米挖孔机盖事件封面竖屏 } from "./remotions/小米挖孔机盖事件/小米挖孔机盖事件CoverStills";
import { 华为的5g迷思, 华为的5g迷思竖屏, 华为的5g迷思Schema, TOTAL_DURATION_华为的5G迷思 } from "./remotions/华为的5G迷思/华为的5g迷思";
import { 华为的5g迷思封面横屏, 华为的5g迷思封面竖屏 } from "./remotions/华为的5G迷思/华为的5g迷思CoverStills";
import { 廉价的便利, 廉价的便利竖屏, 廉价的便利Schema, TOTAL_DURATION_廉价的便利 } from "./remotions/廉价的便利/廉价的便利";
import { 廉价的便利封面横屏, 廉价的便利封面竖屏 } from "./remotions/廉价的便利/廉价的便利CoverStills";
import { 华为依赖论, 华为依赖论竖屏, 华为依赖论Schema, TOTAL_DURATION_华为依赖论 } from "./remotions/华为依赖论/华为依赖论";
import { 华为依赖论封面横屏, 华为依赖论封面竖屏 } from "./remotions/华为依赖论/华为依赖论CoverStills";
import { 华为制裁论, 华为制裁论竖屏, 华为制裁论Schema, TOTAL_DURATION_华为制裁论 } from "./remotions/华为制裁论/华为制裁论";
import { 华为制裁论封面横屏, 华为制裁论封面竖屏 } from "./remotions/华为制裁论/华为制裁论CoverStills";
import { 抵制特斯拉的伪爱国, 抵制特斯拉的伪爱国竖屏, 抵制特斯拉的伪爱国Schema, TOTAL_DURATION_抵制特斯拉的伪爱国 } from "./remotions/抵制特斯拉的伪爱国/抵制特斯拉的伪爱国";
import { 抵制特斯拉的伪爱国封面横屏, 抵制特斯拉的伪爱国封面竖屏 } from "./remotions/抵制特斯拉的伪爱国/抵制特斯拉的伪爱国CoverStills";
import { 为雷军正名, 为雷军正名竖屏, 为雷军正名Schema, TOTAL_DURATION_为雷军正名 } from "./remotions/为雷军正名/为雷军正名";
import { 为雷军正名封面横屏, 为雷军正名封面竖屏 } from "./remotions/为雷军正名/为雷军正名CoverStills";
import { 国产支持论, 国产支持论竖屏, 国产支持论Schema, TOTAL_DURATION_国产支持论 } from "./remotions/国产支持论/国产支持论";
import { 国产支持论封面横屏, 国产支持论封面竖屏 } from "./remotions/国产支持论/国产支持论CoverStills";
import { 搞对立, 搞对立竖屏, 搞对立Schema, TOTAL_DURATION_搞对立 } from "./remotions/搞对立/搞对立";
import { 搞对立封面横屏, 搞对立封面竖屏 } from "./remotions/搞对立/搞对立CoverStills";
import { 小米掀翻蚂蚁市场, 小米掀翻蚂蚁市场竖屏, 小米掀翻蚂蚁市场Schema, TOTAL_DURATION_小米掀翻蚂蚁市场 } from "./remotions/小米掀翻蚂蚁市场/小米掀翻蚂蚁市场";
import { 小米掀翻蚂蚁市场封面横屏, 小米掀翻蚂蚁市场封面竖屏 } from "./remotions/小米掀翻蚂蚁市场/小米掀翻蚂蚁市场CoverStills";
import { 食品安全, 食品安全竖屏, 食品安全Schema, TOTAL_DURATION_食品安全 } from "./remotions/食品安全/食品安全";
import { 食品安全封面横屏, 食品安全封面竖屏 } from "./remotions/食品安全/食品安全CoverStills";
import { 爱国先爱同胞, 爱国先爱同胞竖屏, 爱国先爱同胞Schema, TOTAL_DURATION_爱国先爱同胞 } from "./remotions/爱国先爱同胞/爱国先爱同胞";
import { 爱国先爱同胞封面横屏, 爱国先爱同胞封面竖屏 } from "./remotions/爱国先爱同胞/爱国先爱同胞CoverStills";
import { 华为专利论, 华为专利论竖屏, 华为专利论Schema, TOTAL_DURATION_华为专利论 } from "./remotions/华为专利论/华为专利论";
import { 华为专利论封面横屏, 华为专利论封面竖屏 } from "./remotions/华为专利论/华为专利论CoverStills";
import { 劳动法落实, 劳动法落实竖屏, 劳动法落实Schema, TOTAL_DURATION_劳动法落实 } from "./remotions/劳动法落实/劳动法落实";
import { 劳动法落实封面横屏, 劳动法落实封面竖屏 } from "./remotions/劳动法落实/劳动法落实CoverStills";
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




      {/* 廉价的便利 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="廉价的便利"
        component={廉价的便利}
        durationInFrames={TOTAL_DURATION_廉价的便利}
        fps={30}
        width={1920}
        height={1080}
        schema={廉价的便利Schema}
        defaultProps={{}}
      />

      {/* 廉价的便利竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="廉价的便利竖屏"
        component={廉价的便利竖屏}
        durationInFrames={TOTAL_DURATION_廉价的便利}
        fps={30}
        width={1080}
        height={1920}
        schema={廉价的便利Schema}
        defaultProps={{}}
      />
      {/* 廉价的便利封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="廉价的便利封面横屏"
        component={廉价的便利封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 廉价的便利封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="廉价的便利封面竖屏"
        component={廉价的便利封面竖屏}
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




      {/* 爱国先爱同胞 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="爱国先爱同胞"
        component={爱国先爱同胞}
        durationInFrames={TOTAL_DURATION_爱国先爱同胞}
        fps={30}
        width={1920}
        height={1080}
        schema={爱国先爱同胞Schema}
        defaultProps={{}}
      />

      {/* 爱国先爱同胞竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="爱国先爱同胞竖屏"
        component={爱国先爱同胞竖屏}
        durationInFrames={TOTAL_DURATION_爱国先爱同胞}
        fps={30}
        width={1080}
        height={1920}
        schema={爱国先爱同胞Schema}
        defaultProps={{}}
      />
      {/* 爱国先爱同胞封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="爱国先爱同胞封面横屏"
        component={爱国先爱同胞封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 爱国先爱同胞封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="爱国先爱同胞封面竖屏"
        component={爱国先爱同胞封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />




      {/* 华为专利论 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="华为专利论"
        component={华为专利论}
        durationInFrames={TOTAL_DURATION_华为专利论}
        fps={30}
        width={1920}
        height={1080}
        schema={华为专利论Schema}
        defaultProps={{}}
      />

      {/* 华为专利论竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="华为专利论竖屏"
        component={华为专利论竖屏}
        durationInFrames={TOTAL_DURATION_华为专利论}
        fps={30}
        width={1080}
        height={1920}
        schema={华为专利论Schema}
        defaultProps={{}}
      />
      {/* 华为专利论封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="华为专利论封面横屏"
        component={华为专利论封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 华为专利论封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="华为专利论封面竖屏"
        component={华为专利论封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 劳动法落实 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="劳动法落实"
        component={劳动法落实}
        durationInFrames={TOTAL_DURATION_劳动法落实}
        fps={30}
        width={1920}
        height={1080}
        schema={劳动法落实Schema}
        defaultProps={{}}
      />

      {/* 劳动法落实竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="劳动法落实竖屏"
        component={劳动法落实竖屏}
        durationInFrames={TOTAL_DURATION_劳动法落实}
        fps={30}
        width={1080}
        height={1920}
        schema={劳动法落实Schema}
        defaultProps={{}}
      />
      {/* 劳动法落实封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="劳动法落实封面横屏"
        component={劳动法落实封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 劳动法落实封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="劳动法落实封面竖屏"
        component={劳动法落实封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />
    </>
  );
};
