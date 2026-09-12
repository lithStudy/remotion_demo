import "./index.css";
import React from "react";
import { Composition } from "remotion";
import { NarratorTopicCompositions } from "./components";
import {
  TemplateShowcase,
  TemplateShowcaseSchema,
  TOTAL_DURATION_TEMPLATE_SHOWCASE,
} from "./templateShowcase/TemplateShowcase";
import { 小米核心技术, 小米核心技术竖屏, 小米核心技术Schema, TOTAL_DURATION_小米核心技术 } from "./remotions/小米核心技术/小米核心技术";
import { 小米核心技术封面横屏, 小米核心技术封面竖屏 } from "./remotions/小米核心技术/小米核心技术CoverStills";
import { 小米挖孔机盖事件, 小米挖孔机盖事件竖屏, 小米挖孔机盖事件Schema, TOTAL_DURATION_小米挖孔机盖事件 } from "./remotions/小米挖孔机盖事件/小米挖孔机盖事件";
import { 小米挖孔机盖事件封面横屏, 小米挖孔机盖事件封面竖屏 } from "./remotions/小米挖孔机盖事件/小米挖孔机盖事件CoverStills";
import { 为雷军正名, 为雷军正名竖屏, 为雷军正名Schema, TOTAL_DURATION_为雷军正名 } from "./remotions/为雷军正名/为雷军正名";
import { 为雷军正名封面横屏, 为雷军正名封面竖屏 } from "./remotions/为雷军正名/为雷军正名CoverStills";
import { 搞对立, 搞对立竖屏, 搞对立Schema, TOTAL_DURATION_搞对立 } from "./remotions/搞对立/搞对立";
import { 搞对立封面横屏, 搞对立封面竖屏 } from "./remotions/搞对立/搞对立CoverStills";
import { 小米掀翻蚂蚁市场, 小米掀翻蚂蚁市场竖屏, 小米掀翻蚂蚁市场Schema, TOTAL_DURATION_小米掀翻蚂蚁市场 } from "./remotions/小米掀翻蚂蚁市场/小米掀翻蚂蚁市场";
import { 小米掀翻蚂蚁市场封面横屏, 小米掀翻蚂蚁市场封面竖屏 } from "./remotions/小米掀翻蚂蚁市场/小米掀翻蚂蚁市场CoverStills";
import { 智驾兜底论, 智驾兜底论竖屏, 智驾兜底论Schema, TOTAL_DURATION_智驾兜底论 } from "./remotions/智驾兜底论/智驾兜底论";
import { 智驾兜底论封面横屏, 智驾兜底论封面竖屏 } from "./remotions/智驾兜底论/智驾兜底论CoverStills";
import { 千亿研发, 千亿研发竖屏, 千亿研发Schema, TOTAL_DURATION_千亿研发 } from "./remotions/千亿研发/千亿研发";
import { 千亿研发封面横屏, 千亿研发封面竖屏 } from "./remotions/千亿研发/千亿研发CoverStills";
import { 智驾论之瓶颈, 智驾论之瓶颈竖屏, 智驾论之瓶颈Schema, TOTAL_DURATION_智驾论之瓶颈 } from "./remotions/智驾论之瓶颈/智驾论之瓶颈";
import { 智驾论之瓶颈封面横屏, 智驾论之瓶颈封面竖屏 } from "./remotions/智驾论之瓶颈/智驾论之瓶颈CoverStills";
import { 智驾论之性价比, 智驾论之性价比竖屏, 智驾论之性价比Schema, TOTAL_DURATION_智驾论之性价比 } from "./remotions/智驾论之性价比/智驾论之性价比";
import { 智驾论之性价比封面横屏, 智驾论之性价比封面竖屏 } from "./remotions/智驾论之性价比/智驾论之性价比CoverStills";
import { 豆包仙人论, 豆包仙人论竖屏, 豆包仙人论Schema, TOTAL_DURATION_豆包仙人论 } from "./remotions/豆包仙人论/豆包仙人论";
import { 豆包仙人论封面横屏, 豆包仙人论封面竖屏 } from "./remotions/豆包仙人论/豆包仙人论CoverStills";
import { 华为抹黑论, 华为抹黑论竖屏, 华为抹黑论Schema, TOTAL_DURATION_华为抹黑论 } from "./remotions/华为抹黑论/华为抹黑论";
import { 华为抹黑论封面横屏, 华为抹黑论封面竖屏 } from "./remotions/华为抹黑论/华为抹黑论CoverStills";
import { 汽车质量论, 汽车质量论竖屏, 汽车质量论Schema, TOTAL_DURATION_汽车质量论 } from "./remotions/汽车质量论/汽车质量论";
import { 汽车质量论封面横屏, 汽车质量论封面竖屏 } from "./remotions/汽车质量论/汽车质量论CoverStills";
import { 劳动法落实, 劳动法落实竖屏, 劳动法落实Schema, TOTAL_DURATION_劳动法落实 } from "./remotions/劳动法落实/劳动法落实";
import { 劳动法落实封面横屏, 劳动法落实封面竖屏 } from "./remotions/劳动法落实/劳动法落实CoverStills";
import { 国产情怀的谎言, 国产情怀的谎言竖屏, 国产情怀的谎言Schema, TOTAL_DURATION_国产情怀的谎言 } from "./remotions/国产情怀的谎言/国产情怀的谎言";
import { 国产情怀的谎言封面横屏, 国产情怀的谎言封面竖屏 } from "./remotions/国产情怀的谎言/国产情怀的谎言CoverStills";
import { 小米平权, 小米平权竖屏, 小米平权Schema, TOTAL_DURATION_小米平权 } from "./remotions/小米平权/小米平权";
import { 小米平权封面横屏, 小米平权封面竖屏 } from "./remotions/小米平权/小米平权CoverStills";
import { 华为制裁论, 华为制裁论竖屏, 华为制裁论Schema, TOTAL_DURATION_华为制裁论 } from "./remotions/华为制裁论/华为制裁论";
import { 华为制裁论封面横屏, 华为制裁论封面竖屏 } from "./remotions/华为制裁论/华为制裁论CoverStills";
import { 抵制特斯拉的伪爱国, 抵制特斯拉的伪爱国竖屏, 抵制特斯拉的伪爱国Schema, TOTAL_DURATION_抵制特斯拉的伪爱国 } from "./remotions/抵制特斯拉的伪爱国/抵制特斯拉的伪爱国";
import { 抵制特斯拉的伪爱国封面横屏, 抵制特斯拉的伪爱国封面竖屏 } from "./remotions/抵制特斯拉的伪爱国/抵制特斯拉的伪爱国CoverStills";
import { 权利的边界, 权利的边界竖屏, 权利的边界Schema, TOTAL_DURATION_权利的边界 } from "./remotions/权利的边界/权利的边界";
import { 权利的边界封面横屏, 权利的边界封面竖屏 } from "./remotions/权利的边界/权利的边界CoverStills";
import { 廉价的便利, 廉价的便利竖屏, 廉价的便利Schema, TOTAL_DURATION_廉价的便利 } from "./remotions/廉价的便利/廉价的便利";
import { 廉价的便利封面横屏, 廉价的便利封面竖屏 } from "./remotions/廉价的便利/廉价的便利CoverStills";
import { 爱国先爱同胞, 爱国先爱同胞竖屏, 爱国先爱同胞Schema, TOTAL_DURATION_爱国先爱同胞 } from "./remotions/爱国先爱同胞/爱国先爱同胞";
import { 爱国先爱同胞封面横屏, 爱国先爱同胞封面竖屏 } from "./remotions/爱国先爱同胞/爱国先爱同胞CoverStills";
import { Ai普惠执剑人, Ai普惠执剑人竖屏, Ai普惠执剑人Schema, TOTAL_DURATION_AI普惠执剑人 } from "./remotions/AI普惠执剑人/Ai普惠执剑人";
import { Ai普惠执剑人封面横屏, Ai普惠执剑人封面竖屏 } from "./remotions/AI普惠执剑人/Ai普惠执剑人CoverStills";
import { 纳税人, 纳税人竖屏, 纳税人Schema, TOTAL_DURATION_纳税人 } from "./remotions/纳税人/纳税人";
import { 纳税人封面横屏, 纳税人封面竖屏 } from "./remotions/纳税人/纳税人CoverStills";
import { 华为韬定律, 华为韬定律竖屏, 华为韬定律Schema, TOTAL_DURATION_华为韬定律 } from "./remotions/华为韬定律/华为韬定律";
import { 华为韬定律封面横屏, 华为韬定律封面竖屏 } from "./remotions/华为韬定律/华为韬定律CoverStills";
import { 华为高价论, 华为高价论竖屏, 华为高价论Schema, TOTAL_DURATION_华为高价论 } from "./remotions/华为高价论/华为高价论";
import { 华为高价论封面横屏, 华为高价论封面竖屏 } from "./remotions/华为高价论/华为高价论CoverStills";
import { 权利与责任, 权利与责任竖屏, 权利与责任Schema, TOTAL_DURATION_权利与责任 } from "./remotions/权利与责任/权利与责任";
import { 权利与责任封面横屏, 权利与责任封面竖屏 } from "./remotions/权利与责任/权利与责任CoverStills";
import { 碎片认知, 碎片认知竖屏, 碎片认知Schema, TOTAL_DURATION_碎片认知 } from "./remotions/碎片认知/碎片认知";
import { 碎片认知封面横屏, 碎片认知封面竖屏 } from "./remotions/碎片认知/碎片认知CoverStills";
import { 客户提纯论, 客户提纯论竖屏, 客户提纯论Schema, TOTAL_DURATION_客户提纯论 } from "./remotions/客户提纯论/客户提纯论";
import { 客户提纯论封面横屏, 客户提纯论封面竖屏 } from "./remotions/客户提纯论/客户提纯论CoverStills";
import { 开源精神, 开源精神竖屏, 开源精神Schema, TOTAL_DURATION_开源精神 } from "./remotions/开源精神/开源精神";
import { 开源精神封面横屏, 开源精神封面竖屏 } from "./remotions/开源精神/开源精神CoverStills";
import { 国产支持论, 国产支持论竖屏, 国产支持论Schema, TOTAL_DURATION_国产支持论 } from "./remotions/国产支持论/国产支持论";
import { 国产支持论封面横屏, 国产支持论封面竖屏 } from "./remotions/国产支持论/国产支持论CoverStills";
import { 食品安全, 食品安全竖屏, 食品安全Schema, TOTAL_DURATION_食品安全 } from "./remotions/食品安全/食品安全";
import { 食品安全封面横屏, 食品安全封面竖屏 } from "./remotions/食品安全/食品安全CoverStills";
import { 华为纳税论, 华为纳税论竖屏, 华为纳税论Schema, TOTAL_DURATION_华为纳税论 } from "./remotions/华为纳税论/华为纳税论";
import { 华为纳税论封面横屏, 华为纳税论封面竖屏 } from "./remotions/华为纳税论/华为纳税论CoverStills";
import { 小米买办论, 小米买办论竖屏, 小米买办论Schema, TOTAL_DURATION_小米买办论 } from "./remotions/小米买办论/小米买办论";
import { 小米买办论封面横屏, 小米买办论封面竖屏 } from "./remotions/小米买办论/小米买办论CoverStills";
import { 华为的5g迷思, 华为的5g迷思竖屏, 华为的5g迷思Schema, TOTAL_DURATION_华为的5G迷思 } from "./remotions/华为的5G迷思/华为的5g迷思";
import { 华为的5g迷思封面横屏, 华为的5g迷思封面竖屏 } from "./remotions/华为的5G迷思/华为的5g迷思CoverStills";
import { 华为专利论, 华为专利论竖屏, 华为专利论Schema, TOTAL_DURATION_华为专利论 } from "./remotions/华为专利论/华为专利论";
import { 华为专利论封面横屏, 华为专利论封面竖屏 } from "./remotions/华为专利论/华为专利论CoverStills";
import { 小米营销论, 小米营销论竖屏, 小米营销论Schema, TOTAL_DURATION_小米营销论 } from "./remotions/小米营销论/小米营销论";
import { 小米营销论封面横屏, 小米营销论封面竖屏 } from "./remotions/小米营销论/小米营销论CoverStills";
import { 模型论, 模型论竖屏, 模型论Schema, TOTAL_DURATION_模型论 } from "./remotions/模型论/模型论";
import { 模型论封面横屏, 模型论封面竖屏 } from "./remotions/模型论/模型论CoverStills";
import { 大模型先驱论, 大模型先驱论竖屏, 大模型先驱论Schema, TOTAL_DURATION_大模型先驱论 } from "./remotions/大模型先驱论/大模型先驱论";
import { 大模型先驱论封面横屏, 大模型先驱论封面竖屏 } from "./remotions/大模型先驱论/大模型先驱论CoverStills";
import { 华为造车论, 华为造车论竖屏, 华为造车论Schema, TOTAL_DURATION_华为造车论 } from "./remotions/华为造车论/华为造车论";
import { 华为造车论封面横屏, 华为造车论封面竖屏 } from "./remotions/华为造车论/华为造车论CoverStills";
import { 鸿蒙商业圈地, 鸿蒙商业圈地竖屏, 鸿蒙商业圈地Schema, TOTAL_DURATION_鸿蒙商业圈地 } from "./remotions/鸿蒙商业圈地/鸿蒙商业圈地";
import { 鸿蒙商业圈地封面横屏, 鸿蒙商业圈地封面竖屏 } from "./remotions/鸿蒙商业圈地/鸿蒙商业圈地CoverStills";
import { 华为依赖论, 华为依赖论竖屏, 华为依赖论Schema, TOTAL_DURATION_华为依赖论 } from "./remotions/华为依赖论/华为依赖论";
import { 华为依赖论封面横屏, 华为依赖论封面竖屏 } from "./remotions/华为依赖论/华为依赖论CoverStills";
import { 小米事故论, 小米事故论竖屏, 小米事故论Schema, TOTAL_DURATION_小米事故论 } from "./remotions/小米事故论/小米事故论";
import { 小米事故论封面横屏, 小米事故论封面竖屏 } from "./remotions/小米事故论/小米事故论CoverStills";
import { 精神胜利法, 精神胜利法竖屏, 精神胜利法Schema, TOTAL_DURATION_精神胜利法 } from "./remotions/精神胜利法/精神胜利法";
import { 精神胜利法封面横屏, 精神胜利法封面竖屏 } from "./remotions/精神胜利法/精神胜利法CoverStills";
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
        schema={TemplateShowcaseSchema}
        defaultProps={{ showLabels: true }}
      />

      <NarratorTopicCompositions
        id="小米核心技术"
        landscape={小米核心技术}
        vertical={小米核心技术竖屏}
        durationInFrames={TOTAL_DURATION_小米核心技术}
        schema={小米核心技术Schema}
        coverLandscape={小米核心技术封面横屏}
        coverVertical={小米核心技术封面竖屏}
      />



      <NarratorTopicCompositions
        id="小米挖孔机盖事件"
        landscape={小米挖孔机盖事件}
        vertical={小米挖孔机盖事件竖屏}
        durationInFrames={TOTAL_DURATION_小米挖孔机盖事件}
        schema={小米挖孔机盖事件Schema}
        coverLandscape={小米挖孔机盖事件封面横屏}
        coverVertical={小米挖孔机盖事件封面竖屏}
      />



      <NarratorTopicCompositions
        id="为雷军正名"
        landscape={为雷军正名}
        vertical={为雷军正名竖屏}
        durationInFrames={TOTAL_DURATION_为雷军正名}
        schema={为雷军正名Schema}
        coverLandscape={为雷军正名封面横屏}
        coverVertical={为雷军正名封面竖屏}
      />


      <NarratorTopicCompositions
        id="搞对立"
        landscape={搞对立}
        vertical={搞对立竖屏}
        durationInFrames={TOTAL_DURATION_搞对立}
        schema={搞对立Schema}
        coverLandscape={搞对立封面横屏}
        coverVertical={搞对立封面竖屏}
      />

      <NarratorTopicCompositions
        id="小米掀翻蚂蚁市场"
        landscape={小米掀翻蚂蚁市场}
        vertical={小米掀翻蚂蚁市场竖屏}
        durationInFrames={TOTAL_DURATION_小米掀翻蚂蚁市场}
        schema={小米掀翻蚂蚁市场Schema}
        coverLandscape={小米掀翻蚂蚁市场封面横屏}
        coverVertical={小米掀翻蚂蚁市场封面竖屏}
      />



      <NarratorTopicCompositions
        id="智驾兜底论"
        landscape={智驾兜底论}
        vertical={智驾兜底论竖屏}
        durationInFrames={TOTAL_DURATION_智驾兜底论}
        schema={智驾兜底论Schema}
        coverLandscape={智驾兜底论封面横屏}
        coverVertical={智驾兜底论封面竖屏}
      />


      <NarratorTopicCompositions
        id="千亿研发"
        landscape={千亿研发}
        vertical={千亿研发竖屏}
        durationInFrames={TOTAL_DURATION_千亿研发}
        schema={千亿研发Schema}
        coverLandscape={千亿研发封面横屏}
        coverVertical={千亿研发封面竖屏}
      />



      <NarratorTopicCompositions
        id="智驾论之瓶颈"
        landscape={智驾论之瓶颈}
        vertical={智驾论之瓶颈竖屏}
        durationInFrames={TOTAL_DURATION_智驾论之瓶颈}
        schema={智驾论之瓶颈Schema}
        coverLandscape={智驾论之瓶颈封面横屏}
        coverVertical={智驾论之瓶颈封面竖屏}
      />

      <NarratorTopicCompositions
        id="智驾论之性价比"
        landscape={智驾论之性价比}
        vertical={智驾论之性价比竖屏}
        durationInFrames={TOTAL_DURATION_智驾论之性价比}
        schema={智驾论之性价比Schema}
        coverLandscape={智驾论之性价比封面横屏}
        coverVertical={智驾论之性价比封面竖屏}
      />


      <NarratorTopicCompositions
        id="豆包仙人论"
        landscape={豆包仙人论}
        vertical={豆包仙人论竖屏}
        durationInFrames={TOTAL_DURATION_豆包仙人论}
        schema={豆包仙人论Schema}
        coverLandscape={豆包仙人论封面横屏}
        coverVertical={豆包仙人论封面竖屏}
      />

      <NarratorTopicCompositions
        id="华为抹黑论"
        landscape={华为抹黑论}
        vertical={华为抹黑论竖屏}
        durationInFrames={TOTAL_DURATION_华为抹黑论}
        schema={华为抹黑论Schema}
        coverLandscape={华为抹黑论封面横屏}
        coverVertical={华为抹黑论封面竖屏}
      />

      <NarratorTopicCompositions
        id="汽车质量论"
        landscape={汽车质量论}
        vertical={汽车质量论竖屏}
        durationInFrames={TOTAL_DURATION_汽车质量论}
        schema={汽车质量论Schema}
        coverLandscape={汽车质量论封面横屏}
        coverVertical={汽车质量论封面竖屏}
      />

      <NarratorTopicCompositions
        id="劳动法落实"
        landscape={劳动法落实}
        vertical={劳动法落实竖屏}
        durationInFrames={TOTAL_DURATION_劳动法落实}
        schema={劳动法落实Schema}
        coverLandscape={劳动法落实封面横屏}
        coverVertical={劳动法落实封面竖屏}
      />

      <NarratorTopicCompositions
        id="国产情怀的谎言"
        landscape={国产情怀的谎言}
        vertical={国产情怀的谎言竖屏}
        durationInFrames={TOTAL_DURATION_国产情怀的谎言}
        fps={30}
        schema={国产情怀的谎言Schema}
        coverLandscape={国产情怀的谎言封面横屏}
        coverVertical={国产情怀的谎言封面竖屏}
      />
      <NarratorTopicCompositions
        id="小米平权"
        landscape={小米平权}
        vertical={小米平权竖屏}
        durationInFrames={TOTAL_DURATION_小米平权}
        fps={30}
        schema={小米平权Schema}
        coverLandscape={小米平权封面横屏}
        coverVertical={小米平权封面竖屏}
      />
      <NarratorTopicCompositions
        id="华为制裁论"
        landscape={华为制裁论}
        vertical={华为制裁论竖屏}
        durationInFrames={TOTAL_DURATION_华为制裁论}
        fps={30}
        schema={华为制裁论Schema}
        coverLandscape={华为制裁论封面横屏}
        coverVertical={华为制裁论封面竖屏}
      />


      <NarratorTopicCompositions
        id="抵制特斯拉的伪爱国"
        landscape={抵制特斯拉的伪爱国}
        vertical={抵制特斯拉的伪爱国竖屏}
        durationInFrames={TOTAL_DURATION_抵制特斯拉的伪爱国}
        fps={30}
        schema={抵制特斯拉的伪爱国Schema}
        coverLandscape={抵制特斯拉的伪爱国封面横屏}
        coverVertical={抵制特斯拉的伪爱国封面竖屏}
      />
      <NarratorTopicCompositions
        id="权利的边界"
        landscape={权利的边界}
        vertical={权利的边界竖屏}
        durationInFrames={TOTAL_DURATION_权利的边界}
        fps={30}
        schema={权利的边界Schema}
        coverLandscape={权利的边界封面横屏}
        coverVertical={权利的边界封面竖屏}
      />
      <NarratorTopicCompositions
        id="廉价的便利"
        landscape={廉价的便利}
        vertical={廉价的便利竖屏}
        durationInFrames={TOTAL_DURATION_廉价的便利}
        fps={30}
        schema={廉价的便利Schema}
        coverLandscape={廉价的便利封面横屏}
        coverVertical={廉价的便利封面竖屏}
      />
      <NarratorTopicCompositions
        id="爱国先爱同胞"
        landscape={爱国先爱同胞}
        vertical={爱国先爱同胞竖屏}
        durationInFrames={TOTAL_DURATION_爱国先爱同胞}
        fps={30}
        schema={爱国先爱同胞Schema}
        coverLandscape={爱国先爱同胞封面横屏}
        coverVertical={爱国先爱同胞封面竖屏}
      />
      <NarratorTopicCompositions
        id="Ai普惠执剑人"
        landscape={Ai普惠执剑人}
        vertical={Ai普惠执剑人竖屏}
        durationInFrames={TOTAL_DURATION_AI普惠执剑人}
        fps={30}
        schema={Ai普惠执剑人Schema}
        coverLandscape={Ai普惠执剑人封面横屏}
        coverVertical={Ai普惠执剑人封面竖屏}
      />


      <NarratorTopicCompositions
        id="纳税人"
        landscape={纳税人}
        vertical={纳税人竖屏}
        durationInFrames={TOTAL_DURATION_纳税人}
        fps={30}
        schema={纳税人Schema}
        coverLandscape={纳税人封面横屏}
        coverVertical={纳税人封面竖屏}
      />

      <NarratorTopicCompositions
        id="华为韬定律"
        landscape={华为韬定律}
        vertical={华为韬定律竖屏}
        durationInFrames={TOTAL_DURATION_华为韬定律}
        fps={30}
        schema={华为韬定律Schema}
        coverLandscape={华为韬定律封面横屏}
        coverVertical={华为韬定律封面竖屏}
      />
      <NarratorTopicCompositions
        id="华为高价论"
        landscape={华为高价论}
        vertical={华为高价论竖屏}
        durationInFrames={TOTAL_DURATION_华为高价论}
        fps={30}
        schema={华为高价论Schema}
        coverLandscape={华为高价论封面横屏}
        coverVertical={华为高价论封面竖屏}
      />
      <NarratorTopicCompositions
        id="权利与责任"
        landscape={权利与责任}
        vertical={权利与责任竖屏}
        durationInFrames={TOTAL_DURATION_权利与责任}
        fps={30}
        schema={权利与责任Schema}
        coverLandscape={权利与责任封面横屏}
        coverVertical={权利与责任封面竖屏}
      />
      <NarratorTopicCompositions
        id="碎片认知"
        landscape={碎片认知}
        vertical={碎片认知竖屏}
        durationInFrames={TOTAL_DURATION_碎片认知}
        fps={30}
        schema={碎片认知Schema}
        coverLandscape={碎片认知封面横屏}
        coverVertical={碎片认知封面竖屏}
      />


      <NarratorTopicCompositions
        id="客户提纯论"
        landscape={客户提纯论}
        vertical={客户提纯论竖屏}
        durationInFrames={TOTAL_DURATION_客户提纯论}
        fps={30}
        schema={客户提纯论Schema}
        coverLandscape={客户提纯论封面横屏}
        coverVertical={客户提纯论封面竖屏}
      />



      <NarratorTopicCompositions
        id="开源精神"
        landscape={开源精神}
        vertical={开源精神竖屏}
        durationInFrames={TOTAL_DURATION_开源精神}
        fps={30}
        schema={开源精神Schema}
        coverLandscape={开源精神封面横屏}
        coverVertical={开源精神封面竖屏}
      />



      <NarratorTopicCompositions
        id="国产支持论"
        landscape={国产支持论}
        vertical={国产支持论竖屏}
        durationInFrames={TOTAL_DURATION_国产支持论}
        fps={30}
        schema={国产支持论Schema}
        coverLandscape={国产支持论封面横屏}
        coverVertical={国产支持论封面竖屏}
      />


      <NarratorTopicCompositions
        id="食品安全"
        landscape={食品安全}
        vertical={食品安全竖屏}
        durationInFrames={TOTAL_DURATION_食品安全}
        fps={30}
        schema={食品安全Schema}
        coverLandscape={食品安全封面横屏}
        coverVertical={食品安全封面竖屏}
      />

      <NarratorTopicCompositions
        id="华为纳税论"
        landscape={华为纳税论}
        vertical={华为纳税论竖屏}
        durationInFrames={TOTAL_DURATION_华为纳税论}
        fps={30}
        schema={华为纳税论Schema}
        coverLandscape={华为纳税论封面横屏}
        coverVertical={华为纳税论封面竖屏}
      />
      <NarratorTopicCompositions
        id="小米买办论"
        landscape={小米买办论}
        vertical={小米买办论竖屏}
        durationInFrames={TOTAL_DURATION_小米买办论}
        fps={30}
        schema={小米买办论Schema}
        coverLandscape={小米买办论封面横屏}
        coverVertical={小米买办论封面竖屏}
      />
      <NarratorTopicCompositions
        id="华为的5g迷思"
        landscape={华为的5g迷思}
        vertical={华为的5g迷思竖屏}
        durationInFrames={TOTAL_DURATION_华为的5G迷思}
        fps={30}
        schema={华为的5g迷思Schema}
        coverLandscape={华为的5g迷思封面横屏}
        coverVertical={华为的5g迷思封面竖屏}
      />

      <NarratorTopicCompositions
        id="华为专利论"
        landscape={华为专利论}
        vertical={华为专利论竖屏}
        durationInFrames={TOTAL_DURATION_华为专利论}
        fps={30}
        schema={华为专利论Schema}
        coverLandscape={华为专利论封面横屏}
        coverVertical={华为专利论封面竖屏}
      />

      <NarratorTopicCompositions
        id="小米营销论"
        landscape={小米营销论}
        vertical={小米营销论竖屏}
        durationInFrames={TOTAL_DURATION_小米营销论}
        fps={30}
        schema={小米营销论Schema}
        coverLandscape={小米营销论封面横屏}
        coverVertical={小米营销论封面竖屏}
      />

      <NarratorTopicCompositions
        id="模型论"
        landscape={模型论}
        vertical={模型论竖屏}
        durationInFrames={TOTAL_DURATION_模型论}
        fps={30}
        schema={模型论Schema}
        coverLandscape={模型论封面横屏}
        coverVertical={模型论封面竖屏}
      />
      <NarratorTopicCompositions
        id="大模型先驱论"
        landscape={大模型先驱论}
        vertical={大模型先驱论竖屏}
        durationInFrames={TOTAL_DURATION_大模型先驱论}
        fps={30}
        schema={大模型先驱论Schema}
        coverLandscape={大模型先驱论封面横屏}
        coverVertical={大模型先驱论封面竖屏}
      />

      <NarratorTopicCompositions
        id="华为造车论"
        landscape={华为造车论}
        vertical={华为造车论竖屏}
        durationInFrames={TOTAL_DURATION_华为造车论}
        fps={30}
        schema={华为造车论Schema}
        coverLandscape={华为造车论封面横屏}
        coverVertical={华为造车论封面竖屏}
      />

      <NarratorTopicCompositions
        id="鸿蒙商业圈地"
        landscape={鸿蒙商业圈地}
        vertical={鸿蒙商业圈地竖屏}
        durationInFrames={TOTAL_DURATION_鸿蒙商业圈地}
        fps={30}
        schema={鸿蒙商业圈地Schema}
        coverLandscape={鸿蒙商业圈地封面横屏}
        coverVertical={鸿蒙商业圈地封面竖屏}
      />


      <NarratorTopicCompositions
        id="华为依赖论"
        landscape={华为依赖论}
        vertical={华为依赖论竖屏}
        durationInFrames={TOTAL_DURATION_华为依赖论}
        fps={30}
        schema={华为依赖论Schema}
        coverLandscape={华为依赖论封面横屏}
        coverVertical={华为依赖论封面竖屏}
      />
      <NarratorTopicCompositions
        id="小米事故论"
        landscape={小米事故论}
        vertical={小米事故论竖屏}
        durationInFrames={TOTAL_DURATION_小米事故论}
        fps={30}
        schema={小米事故论Schema}
        coverLandscape={小米事故论封面横屏}
        coverVertical={小米事故论封面竖屏}
      />

      <NarratorTopicCompositions
        id="精神胜利法"
        landscape={精神胜利法}
        vertical={精神胜利法竖屏}
        durationInFrames={TOTAL_DURATION_精神胜利法}
        fps={30}
        schema={精神胜利法Schema}
        coverLandscape={精神胜利法封面横屏}
        coverVertical={精神胜利法封面竖屏}
      />
    </>
  );
};
