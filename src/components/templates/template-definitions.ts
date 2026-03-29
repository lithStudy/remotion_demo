/**
 * All 17 template metadata definitions — the single source of truth for:
 *  - Parameter schema (field types, constraints, semantic tags)
 *  - AI prompt content (description, examples)
 *  - Default values for anchors / audio effects
 *
 * This file has NO React imports and NO image imports, so it can safely be
 * imported by the registry generation script (generate-registry.ts).
 */

import {
  arrField,
  enumField,
  IMAGE_ENTER_EFFECTS,
  numField,
  objField,
  strField,
  type TemplateMeta,
} from "./template-schema";

// ─────────────────────────────────────────────────────────────
// CENTER_FOCUS
// ─────────────────────────────────────────────────────────────

export const centerFocusMeta: TemplateMeta = {
  name: "CENTER_FOCUS",
  componentExport: "BWCenterFocus",
  description:
    "适用：默认叙事底盘；平缓讲事实、下定义、引入话题；单图居中。\n差异：强情绪/震惊句用 TEXT_FOCUS；专业术语卡用 CONCEPT_CARD；多要素同时出现用 LIST_MULTI_GROUP。\n慎用：需要左右对比或步骤列表时请换 SPLIT_COMPARE / STEP_LIST 等。\n参数：enterEffect 默认 breathe。",
  psychology: "视觉中心稳定",
  imageCount: 1,
  paramSchema: {
    imageSrc: strField({ required: true, description: "主图描述", tags: ["imagePrompt"] }),
    enterEffect: enumField({
      values: IMAGE_ENTER_EFFECTS,
      defaultValue: "breathe",
      description: "入场效果",
    }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "ping",
  example: {
    template: "CENTER_FOCUS",
    param: { imageSrc: "上班族坐在电脑前的简笔画图标", enterEffect: "breathe" },
  },
};

// ─────────────────────────────────────────────────────────────
// SPLIT_COMPARE
// ─────────────────────────────────────────────────────────────

export const splitCompareMeta: TemplateMeta = {
  name: "SPLIT_COMPARE",
  componentExport: "BWSplitCompare",
  description:
    "适用：两种方案、两条路径、两方行为对照；口播里常见「你/我…他/对方…  不是/而是..」对仗或分号（；）两侧对立叙述。\n差异：明确错/对避坑用 DOS_AND_DONTS；权衡轻重与代价用 SCALE_BALANCE；多要素平铺列举用 LIST_MULTI_GROUP。\n参数：leftLabel/rightLabel 为 2～6 字短语，与左右图语义一致。",
  psychology: "认知失调",
  imageCount: 2,
  paramSchema: {
    leftSrc: strField({ required: true, description: "左侧图片描述", tags: ["imagePrompt"] }),
    rightSrc: strField({ required: true, description: "右侧图片描述", tags: ["imagePrompt"] }),
    leftLabel: strField({ required: true, description: "左侧标签（2～6字）" }),
    rightLabel: strField({ required: true, description: "右侧标签（2～6字）" }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "slideUp",
  defaultAudioEffect: "woosh",
  example: {
    template: "SPLIT_COMPARE",
    param: {
      leftSrc: "传统低效工作图标",
      rightSrc: "高效数字工具图标",
      leftLabel: "旧方法",
      rightLabel: "新方法",
    },
  },
};

// ─────────────────────────────────────────────────────────────
// LIST_MULTI_GROUP
// ─────────────────────────────────────────────────────────────

export const listMultiGroupMeta: TemplateMeta = {
  name: "LIST_MULTI_GROUP",
  componentExport: "BWMultiImage",
  description:
    "适用：当前 item 原文本身就明确包含 2～5 个并列分点/主体时使用，图文同时呈现。\n差异：有时间先后/演进线用 TIMELINE；有序可执行步骤（第一步…）用 STEP_LIST；若只是总起句/引导句而具体分点已拆到后续 item，禁止用本模板。\n参数：仅使用 groups；每组采用 textIndex + image + 可选 anchor 的结构，其中 textIndex 绑定 content 序号，image 只负责图片描述。",
  psychology: "多巴胺刺激",
  imageCount: "2-5",
  paramSchema: {
    groups: arrField({
      required: true,
      description:
        "分组数组，每项包含 textIndex、image 与可选 anchor。组数必须与口播中真实出现的并列分点数一致，严禁脑补额外分组。",
      item: objField({
        description: "单个分组",
        fields: {
          textIndex: numField({
            required: true,
            description: "关联 content 的序号（0-based）",
          }),
          image: objField({
            required: true,
            description: "分组图片配置",
            fields: {
              src: strField({
                required: true,
                description: "图片描述（填写视觉提示词）",
                tags: ["imagePrompt"],
              }),
              enterEffect: enumField({
                values: IMAGE_ENTER_EFFECTS,
                defaultValue: "breathe",
                description: "入场效果",
              }),
            },
          }),
          anchor: objField({
            required: false,
            description:
              "可选锚点；anchor.text 必须是该组的高价值短语，若无则整体省略",
            tags: ["anchorLike"],
            fields: {
              text: strField({ required: true, description: "锚点文本" }),
              audioEffect: strField({
                required: false,
                description: "音效 ID（如 ping、impact_thud、woosh）",
              }),
            },
          }),
        },
      }),
      minItems: 2,
      maxItems: 5,
    }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "ping",
  example: {
    template: "LIST_MULTI_GROUP",
    param: {
      groups: [
        {
          textIndex: 0,
          image: { src: "齿轮简笔画图标" },
          anchor: { text: "核心是自律", audioEffect: "ping" },
        },
        {
          textIndex: 1,
          image: { src: "钞票简笔画图标" },
          anchor: { text: "核心是资源", audioEffect: "impact_thud" },
        },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────
// STEP_LIST
// ─────────────────────────────────────────────────────────────

export const stepListMeta: TemplateMeta = {
  name: "STEP_LIST",
  componentExport: "BWStepList",
  description:
    "适用：可执行步骤、操作流程、短分点清单（第一步/第二步…），无配图，每个分点必须限制在10个字符以内。\n差异：若每条方法后还跟较长解释、追问或补充句，优先用 METHOD_STACK；无步骤感的并列要点用 LIST_MULTI_GROUP 或 CENTER_FOCUS。\n参数：仅用 content 多条字符串即可，建议保持短句清单感。",
  psychology: "降低认知负荷",
  imageCount: 0,
  paramSchema: {},
  defaultAnchorColor: "#276749",
  defaultAnchorAnim: "slideUp",
  defaultAudioEffect: "ping",
  contentMinItems: 2,
  contentMaxItems: 6,
  example: { template: "STEP_LIST", param: {} },
};

// ─────────────────────────────────────────────────────────────
// TEXT_FOCUS
// ─────────────────────────────────────────────────────────────

export const textFocusMeta: TemplateMeta = {
  name: "TEXT_FOCUS",
  componentExport: "BWTextFocus",
  description:
    "适用：全片最强金句、结论暴击；0 图纯大字。\n差异：需要配图锚定用 CENTER_FOCUS；模拟读者吐槽口吻用 CHAT_BUBBLE。\n慎用：content 建议不超过 3 条以保持冲击；若口播/字幕必须保留长 content，可填 coreSentence 仅用于大屏一句展示。",
  psychology: "信噪比极致化",
  imageCount: 0,
  paramSchema: {
    coreSentence: strField({
      required: true,
      description: "精炼核心句，不超过25个字；锚点词须出现在此句内",
    }),
  },
  defaultAnchorColor: "#ffffff",
  defaultAnchorAnim: "popIn",
  defaultAudioEffect: "impact_thud",
  contentMaxItems: 3,
  example: {
    template: "TEXT_FOCUS",
    param: {
      coreSentence: "承认自己「可能错了」并不是一种软弱",
      anchors: [{ text: "可能错了", showFrom: 0, color: "red" }],
    },
  },
};

// ─────────────────────────────────────────────────────────────
// CONCEPT_CARD
// ─────────────────────────────────────────────────────────────

export const conceptCardMeta: TemplateMeta = {
  name: "CONCEPT_CARD",
  componentExport: "BWConceptCard",
  description:
    "适用：首次抛出专业名词、模型、核心概念；概念图标+侧栏概念名。\n差异：普通解释句、无闪卡式术语强调时用 CENTER_FOCUS。\n参数：conceptName 与口播术语一致；imageSrc 为概念隐喻图标。",
  psychology: "符号化锚定",
  imageCount: 1,
  paramSchema: {
    imageSrc: strField({ required: true, description: "概念图标描述", tags: ["imagePrompt"] }),
    conceptName: strField({ required: true, description: "概念名称（与口播术语一致）" }),
  },
  defaultAnchorColor: "#805AD5",
  defaultAnchorAnim: "slideUp",
  defaultAudioEffect: "ping",
  example: {
    template: "CONCEPT_CARD",
    param: { imageSrc: "过滤器/筛网简笔画图标", conceptName: "幸存者偏差" },
  },
};

// ─────────────────────────────────────────────────────────────
// QUOTE_CITATION
// ─────────────────────────────────────────────────────────────

export const quoteCitationMeta: TemplateMeta = {
  name: "QUOTE_CITATION",
  componentExport: "BWQuoteCitation",
  description:
    "适用：名言、著作、研究等引用体裁；可选一张配角图。\n差异：非引用类普通叙述用 CENTER_FOCUS。\n参数：quoteSource 写清出处；imageSrc 可省略。",
  psychology: "社会认同背书",
  imageCount: "0-1",
  paramSchema: {
    imageSrc: strField({ required: false, description: "可选图片描述", tags: ["imagePrompt"] }),
    quoteSource: strField({
      required: true,
      description: "引言来源（如《思考，快与慢》）",
    }),
  },
  defaultAnchorColor: "#276749",
  defaultAnchorAnim: "highlight",
  defaultAudioEffect: "ping",
  example: {
    template: "QUOTE_CITATION",
    param: { quoteSource: "《思考，快与慢》" },
  },
};

// ─────────────────────────────────────────────────────────────
// TIMELINE
// ─────────────────────────────────────────────────────────────

const TIMELINE_POSITIONS = ["left", "center", "right"] as const;

export const timelineMeta: TemplateMeta = {
  name: "TIMELINE",
  componentExport: "BWTimeline",
  description:
    "适用：历史演进、时间顺序、前后对比带明确时间轴。\n差异：无时间线的并列要点用 LIST_MULTI_GROUP；操作步骤用 STEP_LIST。\n参数：images 2～3 项，position 常 left/right 以配合轴线。",
  psychology: "叙事连贯性",
  imageCount: "2-3",
  paramSchema: {
    images: arrField({
      required: true,
      description: "时间轴图片数组，每项含 src/position/enterEffect",
      item: objField({
        description: "时间轴节点图片",
        fields: {
          src: strField({ required: true, description: "图片描述", tags: ["imagePrompt"] }),
          position: enumField({
            values: TIMELINE_POSITIONS,
            defaultValue: "center",
            description: "节点位置（left/center/right）",
          }),
          enterEffect: enumField({
            values: IMAGE_ENTER_EFFECTS,
            defaultValue: "breathe",
            description: "入场效果",
          }),
        },
      }),
      minItems: 2,
      maxItems: 3,
    }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "slideUp",
  defaultAudioEffect: "woosh",
  example: {
    template: "TIMELINE",
    param: {
      images: [
        { src: "1990年代电脑图标", position: "left", enterEffect: "slideLeft" },
        { src: "2020年代手机图标", position: "right", enterEffect: "slideLeft" },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────
// DOS_AND_DONTS
// ─────────────────────────────────────────────────────────────

export const dosAndDontsMeta: TemplateMeta = {
  name: "DOS_AND_DONTS",
  componentExport: "BWDosAndDonts",
  description:
    "适用：明确「别这样做 vs 应该这样做」的避坑；左右对错叙事。\n差异：两种中立方案并列、无对错标签用 SPLIT_COMPARE；代价/收益权衡用 SCALE_BALANCE。\n参数：dontLabel/doLabel 是极简的对错标签（如：❌ 别这样 vs ✅ 正确做法），严禁使用长句说明；与 leftSrc/rightSrc 语义一致。",
  psychology: "损失厌恶",
  imageCount: 2,
  paramSchema: {
    leftSrc: strField({ required: true, description: "错误做法图片描述", tags: ["imagePrompt"] }),
    rightSrc: strField({ required: true, description: "正确做法图片描述", tags: ["imagePrompt"] }),
    dontLabel: strField({ required: true, description: "错误标签（如 ❌ 别这样）" }),
    doLabel: strField({ required: true, description: "正确标签（如 ✅ 正确做法）" }),
  },
  defaultAnchorColor: "#E53E3E",
  defaultAnchorAnim: "popIn",
  defaultAudioEffect: "impact_thud",
  example: {
    template: "DOS_AND_DONTS",
    param: {
      leftSrc: "盲目跟风的人简笔画图标",
      rightSrc: "理性分析图表的人简笔画图标",
      dontLabel: "❌ 别这样",
      doLabel: "✅ 正确做法",
    },
  },
};

// ─────────────────────────────────────────────────────────────
// MAGNIFYING_GLASS
// ─────────────────────────────────────────────────────────────

export const magnifyingGlassMeta: TemplateMeta = {
  name: "MAGNIFYING_GLASS",
  componentExport: "BWMagnifyingGlass",
  description:
    "适用：揭秘、拆穿表象、强调「真相/底层逻辑」。\n差异：本模板要求 param.anchors 非空，且通过 showFrom 关联 content；非揭秘句勿用。\n参数：anchors.text 对准要聚焦的关键词。",
  psychology: "好奇心缺口",
  imageCount: 0,
  paramSchema: {},
  defaultAnchorColor: "#111111",
  defaultAnchorAnim: "popIn",
  defaultAudioEffect: "ping",
  contentAnchorRequired: true,
  example: {
    template: "MAGNIFYING_GLASS",
    param: {
      anchors: [
        { text: "忽略了基础", showFrom: 0, color: "#111111", anim: "popIn", audioEffect: "ping" },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────
// CHAT_BUBBLE
// ─────────────────────────────────────────────────────────────

export const chatBubbleMeta: TemplateMeta = {
  name: "CHAT_BUBBLE",
  componentExport: "BWChatBubble",
  description:
    "适用：模拟用户/读者心声、弹窗式疑问、痛点自问。\n差异：纯金句大字无对话感用 TEXT_FOCUS；需配图但非气泡口径用 CENTER_FOCUS。\n参数：imageSrc 为人物/侧脸简笔图标；content 宜短。",
  psychology: "社会投射",
  imageCount: 1,
  paramSchema: {
    imageSrc: strField({ required: true, description: "人物图标描述", tags: ["imagePrompt"] }),
  },
  defaultAnchorColor: "#FF8C00",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "ping",
  example: {
    template: "CHAT_BUBBLE",
    param: { imageSrc: "困惑的人简笔画图标" },
  },
};

// ─────────────────────────────────────────────────────────────
// KPI_HERO
// ─────────────────────────────────────────────────────────────

export const kpiHeroMeta: TemplateMeta = {
  name: "KPI_HERO",
  componentExport: "BWKpiHero",
  description:
    "适用：口播强调一个核心数字、增长率、占比、排名；单指标「大字报」。\n差异：两句并列指标对比用 STAT_COMPARE；完成度/进度感用 PROGRESS_RING；纯金句无数字用 TEXT_FOCUS。\n参数：value 为展示终值；prefix/suffix 宜短；headline 可一句标题；countDuration 控制数字滚动帧长。",
  psychology: "锚定效应",
  imageCount: "0-1",
  paramSchema: {
    value: numField({ required: true, description: "展示的目标数字（整数滚动到该值）" }),
    prefix: strField({ required: false, description: "数字前缀，如「¥」「+」" }),
    suffix: strField({ required: false, description: "数字后缀，如「%」「万」" }),
    headline: strField({ required: false, description: "顶部短标题" }),
    imageSrc: strField({
      required: false,
      description: "可选配图（角落小图）",
      tags: ["imagePrompt"],
    }),
    countDuration: numField({
      required: false,
      description: "数字从 0 滚到 value 的 spring 时长（帧），默认 28",
      defaultValue: 28,
    }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "ping",
  example: {
    template: "KPI_HERO",
    param: { value: 87, prefix: "", suffix: "%", headline: "用户满意度" },
  },
};

// ─────────────────────────────────────────────────────────────
// STAT_COMPARE
// ─────────────────────────────────────────────────────────────

export const statCompareMeta: TemplateMeta = {
  name: "STAT_COMPARE",
  componentExport: "BWStatCompare",
  description:
    "适用：两项 KPI 并列对比（前后、A/B、涨跌）；条形高度反映相对大小。\n差异：意象化代价/收益用 SCALE_BALANCE；左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO。\n参数：leftValue/rightValue 为非负整数；标签宜短。",
  psychology: "对比效应",
  imageCount: "0-2",
  paramSchema: {
    leftValue: numField({ required: true, description: "左侧数值" }),
    rightValue: numField({ required: true, description: "右侧数值" }),
    leftLabel: strField({ required: true, description: "左侧标签" }),
    rightLabel: strField({ required: true, description: "右侧标签" }),
    leftSrc: strField({ required: false, description: "左侧小图标", tags: ["imagePrompt"] }),
    rightSrc: strField({ required: false, description: "右侧小图标", tags: ["imagePrompt"] }),
  },
  defaultAnchorColor: "#276749",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "woosh",
  example: {
    template: "STAT_COMPARE",
    param: { leftValue: 32, rightValue: 68, leftLabel: "去年", rightLabel: "今年" },
  },
};

// ─────────────────────────────────────────────────────────────
// PROGRESS_RING
// ─────────────────────────────────────────────────────────────

export const progressRingMeta: TemplateMeta = {
  name: "PROGRESS_RING",
  componentExport: "BWProgressRing",
  description:
    "适用：完成度、达成率、占比、进度结论；环形动效强化「走到哪一步」。\n差异：单数字大字报用 KPI_HERO；两项对比用 STAT_COMPARE。\n参数：percent 为 0–100；label 为主文案；subLabel 可写口径说明。",
  psychology: "目标梯度",
  imageCount: 0,
  paramSchema: {
    percent: numField({ required: true, description: "进度百分比 0–100" }),
    label: strField({ required: true, description: "主标题（如「年度目标达成」）" }),
    subLabel: strField({ required: false, description: "副标题或口径说明" }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "ping",
  example: {
    template: "PROGRESS_RING",
    param: { percent: 78, label: "项目完成度", subLabel: "截至本季度" },
  },
};

// ─────────────────────────────────────────────────────────────
// BEAT_SEQUENCE
// ─────────────────────────────────────────────────────────────

const BEAT_TONES = ["calm", "alert"] as const;

export const beatSequenceMeta: TemplateMeta = {
  name: "BEAT_SEQUENCE",
  componentExport: "BWBeatSequence",
  description:
    "适用：一问一驳一锤等同一镜头内情绪递进；多图按口播条切换，首段 calm、后续默认可 alert。\n差异：单段平缓叙述用 CENTER_FOCUS；单句暴击用 ALERT；本模板负责多段串联。\n慎用：stages 与 content 条数需一致；段落间若有空隙，画面保持上一张直至下一段切入（交叉淡化）。\n参数：stages[i].enterEffect / tone；tone 省略时首条 calm、其余 alert。",
  psychology: "节拍递进",
  imageCount: "2-4",
  paramSchema: {
    stages: arrField({
      required: true,
      description:
        "与 content 逐条对应的节拍配置；stages 条数须与 content 条数一致",
      item: objField({
        description: "单个节拍",
        fields: {
          imageSrc: strField({
            required: true,
            description: "节拍图片描述",
            tags: ["imagePrompt"],
          }),
          enterEffect: enumField({
            values: IMAGE_ENTER_EFFECTS,
            defaultValue: "breathe",
            description: "入场效果",
          }),
          tone: enumField({
            values: BEAT_TONES,
            description: "情绪色调（省略时首条 calm、其余 alert）",
          }),
        },
      }),
      minItems: 2,
      maxItems: 4,
    }),
  },
  defaultAnchorColor: "#2B6CB0",
  defaultAnchorAnim: "spring",
  defaultAudioEffect: "ping",
  contentMinItems: 2,
  contentMaxItems: 4,
  example: {
    template: "BEAT_SEQUENCE",
    param: {
      stages: [
        { imageSrc: "问句配图简笔画", enterEffect: "breathe" },
        { imageSrc: "转折警示配图", enterEffect: "slideBottom" },
        { imageSrc: "结论冲击配图", enterEffect: "slideBottom" },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────
// COGNITIVE_SHIFT
// ─────────────────────────────────────────────────────────────

export const cognitiveShiftMeta: TemplateMeta = {
  name: "COGNITIVE_SHIFT",
  componentExport: "BWCognitiveShift",
  description:
    "适用：强力认知翻转「不是...而是...」；打破直觉误区，揭示底层逻辑。\n视觉：A 部分（直觉）淡入后变灰并划线；B 部分（事实）随后高亮弹出。\n参数：notText（被否定的部分）、butText（建立的部分）必须是极简的对比关键词（如：靠勤奋 vs 靠认知），严禁使用完整长句；可配对应图片。",
  psychology: "认知翻转",
  imageCount: 2,
  paramSchema: {
    notText: strField({
      required: true,
      description: "被否认知（「不是」后面的关键词，4~10字）",
    }),
    butText: strField({
      required: true,
      description: "真实认知（「而是」后面的关键词，4~10字）",
    }),
    butSrc: strField({
      required: false,
      description: "真实认知的配图",
      tags: ["imagePrompt"],
    }),
    notContentIndex: numField({
      required: false,
      description: "触发「不是」动画的字幕段索引（默认 0）",
      defaultValue: 0,
    }),
    butContentIndex: numField({
      required: false,
      description: "触发「而是」动画的字幕段索引（默认 1）",
      defaultValue: 1,
    }),
  },
  defaultAnchorColor: "#E53E3E",
  defaultAnchorAnim: "popIn",
  defaultAudioEffect: "impact_thud",
  example: {
    template: "COGNITIVE_SHIFT",
    param: {
      notText: "靠勤奋拼命",
      butText: "靠认知和选择",
      butSrc: "站在高处看地图的思考者",
      notContentIndex: 0,
      butContentIndex: 1,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// METHOD_STACK
// ─────────────────────────────────────────────────────────────

export const methodStackMeta: TemplateMeta = {
  name: "METHOD_STACK",
  componentExport: "BWMethodStack",
  description:
    "适用：单个 item 内是「方法/提醒/观点标题 + 解释展开」，例如一句方法名后继续补 2～4 句说明。\n差异：多个独立步骤/并列分点用 STEP_LIST 或 LIST_MULTI_GROUP；多方法不要为了套模板强行合并到同一 item。\n参数：title 为视觉标题，imageSrc 为单张主图，notes 为按讲解顺序出现的解释短语。",
  psychology: "聚焦解释",
  imageCount: 1,
  paramSchema: {
    title: strField({
      required: true,
      description: "该 item 的方法名/提醒标题/观点标题，建议 4~12 个字",
    }),
    imageSrc: strField({
      required: true,
      description: "单张主图描述，用于承接这个方法或观点",
      tags: ["imagePrompt"],
    }),
    notes: arrField({
      required: false,
      description:
        "解释短语数组；每项含 text（解释文本）与 showFrom（关联 content 索引，0-based），按讲解顺序出现，适合提炼当前叙事的解释重点",
      item: objField({
        description: "解释条目",
        fields: {
          text: strField({ required: true, description: "解释文本" }),
          showFrom: numField({
            required: true,
            description: "关联 content 索引（0-based），决定该条何时出现",
          }),
        },
      }),
      maxItems: 4,
    }),
  },
  defaultAnchorColor: "#111111",
  defaultAnchorAnim: "highlight",
  defaultAudioEffect: "ping",
  contentMinItems: 2,
  contentMaxItems: 5,
  example: {
    template: "METHOD_STACK",
    param: {
      title: "警惕情绪画面",
      imageSrc: "被耸动新闻画面包围、神情紧张的人物简笔画",
      notes: [
        { text: "先识别这是情绪刺激", showFrom: 1 },
        { text: "再追问它是否只是离奇个案", showFrom: 3 },
      ],
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Registry (ordered for the AI prompt guide table)
// ─────────────────────────────────────────────────────────────

export const ALL_TEMPLATE_METAS: TemplateMeta[] = [
  centerFocusMeta,
  splitCompareMeta,
  listMultiGroupMeta,
  stepListMeta,
  textFocusMeta,
  conceptCardMeta,
  quoteCitationMeta,
  timelineMeta,
  dosAndDontsMeta,
  magnifyingGlassMeta,
  chatBubbleMeta,
  kpiHeroMeta,
  statCompareMeta,
  progressRingMeta,
  beatSequenceMeta,
  cognitiveShiftMeta,
  methodStackMeta,
];

export const TEMPLATE_META_MAP: Record<string, TemplateMeta> = Object.fromEntries(
  ALL_TEMPLATE_METAS.map((m) => [m.name, m])
);
