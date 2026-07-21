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
import { 华为专利论, 华为专利论竖屏, 华为专利论Schema, TOTAL_DURATION_华为专利论 } from "./remotions/华为专利论/华为专利论";
import { 华为专利论封面横屏, 华为专利论封面竖屏 } from "./remotions/华为专利论/华为专利论CoverStills";
import { MyVideo, MyVideo竖屏, MyVideoSchema, TOTAL_DURATION_MY_VIDEO } from "./remotions/my_video/MyVideo";
import { MyVideo封面横屏, MyVideo封面竖屏 } from "./remotions/my_video/MyVideoCoverStills";
import { 纳税人, 纳税人竖屏, 纳税人Schema, TOTAL_DURATION_纳税人 } from "./remotions/纳税人/纳税人";
import { 纳税人封面横屏, 纳税人封面竖屏 } from "./remotions/纳税人/纳税人CoverStills";
import { 华为韬定律, 华为韬定律竖屏, 华为韬定律Schema, TOTAL_DURATION_华为韬定律 } from "./remotions/华为韬定律/华为韬定律";
import { 华为韬定律封面横屏, 华为韬定律封面竖屏 } from "./remotions/华为韬定律/华为韬定律CoverStills";
import { 权利的边界, 权利的边界竖屏, 权利的边界Schema, TOTAL_DURATION_权利的边界 } from "./remotions/权利的边界/权利的边界";
import { 权利的边界封面横屏, 权利的边界封面竖屏 } from "./remotions/权利的边界/权利的边界CoverStills";
import { Ai普惠执剑人, Ai普惠执剑人竖屏, Ai普惠执剑人Schema, TOTAL_DURATION_AI普惠执剑人 } from "./remotions/AI普惠执剑人/Ai普惠执剑人";
import { Ai普惠执剑人封面横屏, Ai普惠执剑人封面竖屏 } from "./remotions/AI普惠执剑人/Ai普惠执剑人CoverStills";
import { 小米事故论, 小米事故论竖屏, 小米事故论Schema, TOTAL_DURATION_小米事故论 } from "./remotions/小米事故论/小米事故论";
import { 小米事故论封面横屏, 小米事故论封面竖屏 } from "./remotions/小米事故论/小米事故论CoverStills";
import { 大模型先驱论, 大模型先驱论竖屏, 大模型先驱论Schema, TOTAL_DURATION_大模型先驱论 } from "./remotions/大模型先驱论/大模型先驱论";
import { 大模型先驱论封面横屏, 大模型先驱论封面竖屏 } from "./remotions/大模型先驱论/大模型先驱论CoverStills";
import { 大模型先驱科普, 大模型先驱科普竖屏, 大模型先驱科普Schema, TOTAL_DURATION_大模型先驱科普 } from "./remotions/大模型先驱科普/大模型先驱科普";
import { 大模型先驱科普封面横屏, 大模型先驱科普封面竖屏 } from "./remotions/大模型先驱科普/大模型先驱科普CoverStills";
import { 小米买办论, 小米买办论竖屏, 小米买办论Schema, TOTAL_DURATION_小米买办论 } from "./remotions/小米买办论/小米买办论";
import { 小米买办论封面横屏, 小米买办论封面竖屏 } from "./remotions/小米买办论/小米买办论CoverStills";
import { 小米营销论, 小米营销论竖屏, 小米营销论Schema, TOTAL_DURATION_小米营销论 } from "./remotions/小米营销论/小米营销论";
import { 小米营销论封面横屏, 小米营销论封面竖屏 } from "./remotions/小米营销论/小米营销论CoverStills";
import { 智驾兜底论, 智驾兜底论竖屏, 智驾兜底论Schema, TOTAL_DURATION_智驾兜底论 } from "./remotions/智驾兜底论/智驾兜底论";
import { 智驾兜底论封面横屏, 智驾兜底论封面竖屏 } from "./remotions/智驾兜底论/智驾兜底论CoverStills";
import { 权利与责任, 权利与责任竖屏, 权利与责任Schema, TOTAL_DURATION_权利与责任 } from "./remotions/权利与责任/权利与责任";
import { 权利与责任封面横屏, 权利与责任封面竖屏 } from "./remotions/权利与责任/权利与责任CoverStills";
import { 千亿研发, 千亿研发竖屏, 千亿研发Schema, TOTAL_DURATION_千亿研发 } from "./remotions/千亿研发/千亿研发";
import { 千亿研发封面横屏, 千亿研发封面竖屏 } from "./remotions/千亿研发/千亿研发CoverStills";
import { 模型论, 模型论竖屏, 模型论Schema, TOTAL_DURATION_模型论 } from "./remotions/模型论/模型论";
import { 模型论封面横屏, 模型论封面竖屏 } from "./remotions/模型论/模型论CoverStills";
import { 华为高价论, 华为高价论竖屏, 华为高价论Schema, TOTAL_DURATION_华为高价论 } from "./remotions/华为高价论/华为高价论";
import { 华为高价论封面横屏, 华为高价论封面竖屏 } from "./remotions/华为高价论/华为高价论CoverStills";
import { 廉价的便利, 廉价的便利竖屏, 廉价的便利Schema, TOTAL_DURATION_廉价的便利 } from "./remotions/廉价的便利/廉价的便利";
import { 廉价的便利封面横屏, 廉价的便利封面竖屏 } from "./remotions/廉价的便利/廉价的便利CoverStills";
import { 智驾论之瓶颈, 智驾论之瓶颈竖屏, 智驾论之瓶颈Schema, TOTAL_DURATION_智驾论之瓶颈 } from "./remotions/智驾论之瓶颈/智驾论之瓶颈";
import { 智驾论之瓶颈封面横屏, 智驾论之瓶颈封面竖屏 } from "./remotions/智驾论之瓶颈/智驾论之瓶颈CoverStills";
import { 智驾论之性价比, 智驾论之性价比竖屏, 智驾论之性价比Schema, TOTAL_DURATION_智驾论之性价比 } from "./remotions/智驾论之性价比/智驾论之性价比";
import { 智驾论之性价比封面横屏, 智驾论之性价比封面竖屏 } from "./remotions/智驾论之性价比/智驾论之性价比CoverStills";
import { 爱国先爱同胞, 爱国先爱同胞竖屏, 爱国先爱同胞Schema, TOTAL_DURATION_爱国先爱同胞 } from "./remotions/爱国先爱同胞/爱国先爱同胞";
import { 爱国先爱同胞封面横屏, 爱国先爱同胞封面竖屏 } from "./remotions/爱国先爱同胞/爱国先爱同胞CoverStills";
import { 豆包仙人论, 豆包仙人论竖屏, 豆包仙人论Schema, TOTAL_DURATION_豆包仙人论 } from "./remotions/豆包仙人论/豆包仙人论";
import { 豆包仙人论封面横屏, 豆包仙人论封面竖屏 } from "./remotions/豆包仙人论/豆包仙人论CoverStills";
import { 华为抹黑论, 华为抹黑论竖屏, 华为抹黑论Schema, TOTAL_DURATION_华为抹黑论 } from "./remotions/华为抹黑论/华为抹黑论";
import { 华为抹黑论封面横屏, 华为抹黑论封面竖屏 } from "./remotions/华为抹黑论/华为抹黑论CoverStills";
import { 汽车质量论, 汽车质量论竖屏, 汽车质量论Schema, TOTAL_DURATION_汽车质量论 } from "./remotions/汽车质量论/汽车质量论";
import { 汽车质量论封面横屏, 汽车质量论封面竖屏 } from "./remotions/汽车质量论/汽车质量论CoverStills";
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






      {/* 小米营销论 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="小米营销论"
        component={小米营销论}
        durationInFrames={TOTAL_DURATION_小米营销论}
        fps={30}
        width={1920}
        height={1080}
        schema={小米营销论Schema}
        defaultProps={{}}
      />

      {/* 小米营销论竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="小米营销论竖屏"
        component={小米营销论竖屏}
        durationInFrames={TOTAL_DURATION_小米营销论}
        fps={30}
        width={1080}
        height={1920}
        schema={小米营销论Schema}
        defaultProps={{}}
      />
      {/* 小米营销论封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="小米营销论封面横屏"
        component={小米营销论封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 小米营销论封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="小米营销论封面竖屏"
        component={小米营销论封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />






      {/* 智驾论之瓶颈 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="智驾论之瓶颈"
        component={智驾论之瓶颈}
        durationInFrames={TOTAL_DURATION_智驾论之瓶颈}
        fps={30}
        width={1920}
        height={1080}
        schema={智驾论之瓶颈Schema}
        defaultProps={{}}
      />

      {/* 智驾论之瓶颈竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="智驾论之瓶颈竖屏"
        component={智驾论之瓶颈竖屏}
        durationInFrames={TOTAL_DURATION_智驾论之瓶颈}
        fps={30}
        width={1080}
        height={1920}
        schema={智驾论之瓶颈Schema}
        defaultProps={{}}
      />
      {/* 智驾论之瓶颈封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="智驾论之瓶颈封面横屏"
        component={智驾论之瓶颈封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 智驾论之瓶颈封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="智驾论之瓶颈封面竖屏"
        component={智驾论之瓶颈封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 智驾论之性价比 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="智驾论之性价比"
        component={智驾论之性价比}
        durationInFrames={TOTAL_DURATION_智驾论之性价比}
        fps={30}
        width={1920}
        height={1080}
        schema={智驾论之性价比Schema}
        defaultProps={{}}
      />

      {/* 智驾论之性价比竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="智驾论之性价比竖屏"
        component={智驾论之性价比竖屏}
        durationInFrames={TOTAL_DURATION_智驾论之性价比}
        fps={30}
        width={1080}
        height={1920}
        schema={智驾论之性价比Schema}
        defaultProps={{}}
      />
      {/* 智驾论之性价比封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="智驾论之性价比封面横屏"
        component={智驾论之性价比封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 智驾论之性价比封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="智驾论之性价比封面竖屏"
        component={智驾论之性价比封面竖屏}
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







      {/* 豆包仙人论 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="豆包仙人论"
        component={豆包仙人论}
        durationInFrames={TOTAL_DURATION_豆包仙人论}
        fps={30}
        width={1920}
        height={1080}
        schema={豆包仙人论Schema}
        defaultProps={{}}
      />

      {/* 豆包仙人论竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="豆包仙人论竖屏"
        component={豆包仙人论竖屏}
        durationInFrames={TOTAL_DURATION_豆包仙人论}
        fps={30}
        width={1080}
        height={1920}
        schema={豆包仙人论Schema}
        defaultProps={{}}
      />
      {/* 豆包仙人论封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="豆包仙人论封面横屏"
        component={豆包仙人论封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 豆包仙人论封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="豆包仙人论封面竖屏"
        component={豆包仙人论封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />


      {/* 华为抹黑论 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="华为抹黑论"
        component={华为抹黑论}
        durationInFrames={TOTAL_DURATION_华为抹黑论}
        fps={30}
        width={1920}
        height={1080}
        schema={华为抹黑论Schema}
        defaultProps={{}}
      />

      {/* 华为抹黑论竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="华为抹黑论竖屏"
        component={华为抹黑论竖屏}
        durationInFrames={TOTAL_DURATION_华为抹黑论}
        fps={30}
        width={1080}
        height={1920}
        schema={华为抹黑论Schema}
        defaultProps={{}}
      />
      {/* 华为抹黑论封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="华为抹黑论封面横屏"
        component={华为抹黑论封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 华为抹黑论封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="华为抹黑论封面竖屏"
        component={华为抹黑论封面竖屏}
        durationInFrames={1}
        fps={30}
        width={1080}
        height={1440}
        defaultProps={{}}
      />
      {/* 汽车质量论 - 横屏 1920×1080（自动生成） */}
      <Composition
        id="汽车质量论"
        component={汽车质量论}
        durationInFrames={TOTAL_DURATION_汽车质量论}
        fps={30}
        width={1920}
        height={1080}
        schema={汽车质量论Schema}
        defaultProps={{}}
      />

      {/* 汽车质量论竖屏 - 竖屏 1080×1920（自动生成） */}
      <Composition
        id="汽车质量论竖屏"
        component={汽车质量论竖屏}
        durationInFrames={TOTAL_DURATION_汽车质量论}
        fps={30}
        width={1080}
        height={1920}
        schema={汽车质量论Schema}
        defaultProps={{}}
      />
      {/* 汽车质量论封面横屏 - 横屏封面 still 1920×1080 */}
      <Composition
        id="汽车质量论封面横屏"
        component={汽车质量论封面横屏}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* 汽车质量论封面竖屏 - 3:4 封面 still 1080×1440 */}
      <Composition
        id="汽车质量论封面竖屏"
        component={汽车质量论封面竖屏}
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
