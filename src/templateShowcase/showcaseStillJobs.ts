/**
 * Showcase 分段时长与预览图导出任务（无模板组件依赖，可供 Node 脚本直接 import）。
 * 新增模板：在此追加 { key: 模板名, durationInFrames }，并在 TemplateShowcase 增加同名段内容。
 */
import type { ContentItem } from "../components/templates/shared";

/** 无口播时间轴时的展示停留（与各模板入场动画量级一致） */
export const SHOWCASE_FALLBACK_FRAMES = 75;

/** 口播 coverage：最后一条结束帧 = max(startFrame + durationFrames) */
export const durationFromContent = (items: ContentItem[]): number =>
	items.length === 0
		? SHOWCASE_FALLBACK_FRAMES
		: Math.max(...items.map((c) => c.startFrame + c.durationFrames));

/** StaggeredList 末项入场延迟 + 入场 spring(20) + 尾段阅读 */
export const durationAfterLastStagger = (
	lastEntryDelay: number,
	settleFrames = 20,
	tailFrames = 40,
): number => lastEntryDelay + settleFrames + tailFrames;

/** TIMELINE：轴线 spring 与末节点出现后的可视尾段 */
export const durationForTimelineShowcase = (
	maxImageStart: number,
	lineSpringFrames = 50,
	nodeSettleFrames = 22,
	tailFrames = 28,
): number => Math.max(lineSpringFrames, maxImageStart + nodeSettleFrames) + tailFrames;

export const SC_BEAT_CONTENT: ContentItem[] = [
	{ text: "看到规律就等于财富密码？", startFrame: 0, durationFrames: 28 },
	{ text: "那是幻觉。", startFrame: 28, durationFrames: 22 },
	{ text: "持续误解就是慢性自杀。", startFrame: 50, durationFrames: 25 },
];

export const SC_PUNCH_CONTENT: ContentItem[] = [
	{ text: "什么？", startFrame: 0, durationFrames: 22 },
	{ text: "你说我瞎说？", startFrame: 22, durationFrames: 24 },
	{ text: "你是不相信中国的科技力量吗？", startFrame: 46, durationFrames: 28 },
	{ text: "你是不爱国吗？", startFrame: 74, durationFrames: 24 },
];

export const SC_PEER_INDUCT_CONTENT: ContentItem[] = [
	{ text: "样本太小会误判。", startFrame: 0, durationFrames: 24 },
	{ text: "指标口径不一致也会误判。", startFrame: 24, durationFrames: 26 },
	{ text: "幸存者偏差还会再误判一次。", startFrame: 50, durationFrames: 26 },
	{ text: "结论：先核对数据再下判断。", startFrame: 76, durationFrames: 32 },
];

export const SC_METHOD_CONTENT: ContentItem[] = [
	{ text: "第一，警惕情绪画面。", startFrame: 0, durationFrames: 22 },
	{ text: "先识别这是在煽动情绪。", startFrame: 22, durationFrames: 20 },
	{ text: "别让极端画面直接接管判断。", startFrame: 42, durationFrames: 20 },
	{ text: "再问它到底普遍，还是离奇。", startFrame: 62, durationFrames: 13 },
];

export const SC_CASE_CONTENT: ContentItem[] = [
	{ text: "某个百岁老人每天抽烟喝酒，", startFrame: 0, durationFrames: 18 },
	{ text: "大家就觉得养生没用。", startFrame: 18, durationFrames: 16 },
	{ text: "其实那只是因为他基因逆天，", startFrame: 34, durationFrames: 16 },
	{ text: "而那些学他抽烟喝酒的人，", startFrame: 50, durationFrames: 14 },
	{ text: "大多没活到能接受采访的年纪。", startFrame: 64, durationFrames: 11 },
];

export const SC_COGNITIVE_CONTENT: ContentItem[] = [
	{ text: "你以为结果只取决于努力程度。", startFrame: 0, durationFrames: 32 },
	{ text: "真正拉开差距的是认知和选择。", startFrame: 32, durationFrames: 43 },
];

export const SC_CHAT_BUBBLE_CONTENT: ContentItem[] = [
	{ text: "这数据越看越焦虑，我是不是该跟着慌？", startFrame: 0, durationFrames: 36 },
	{ text: "先把口径和样本量核对清楚，再决定要不要被情绪带着走。", startFrame: 36, durationFrames: 44 },
];

export const SC_KPI_HERO_CONTENT: ContentItem[] = [
	{ text: "满意度稳居高位", startFrame: 0, durationFrames: 45 },
	{ text: "留存同样扎实", startFrame: 45, durationFrames: 45 },
	{ text: "转化还在放大", startFrame: 90, durationFrames: 45 },
];

export const SC_MAGNIFY_CONTENT: ContentItem[] = [
	{ text: "本质是供需失衡在起作用", startFrame: 0, durationFrames: 40 },
];

export const SC_PROGRESS_CONTENT: ContentItem[] = [
	{ text: "整体进度已经走到近八成。", startFrame: 0, durationFrames: 42 },
	{ text: "核心模块的测试覆盖也过半。", startFrame: 42, durationFrames: 42 },
	{ text: "文档与交付节奏和里程碑对齐。", startFrame: 84, durationFrames: 42 },
];

export const SC_STAT_CONTENT: ContentItem[] = [
	{ text: "去年基数还偏低。", startFrame: 0, durationFrames: 60 },
	{ text: "今年明显抬升。", startFrame: 60, durationFrames: 60 },
	{ text: "明年冲刺更高目标。", startFrame: 120, durationFrames: 60 },
];

export const SC_CAUSE_CONTENT: ContentItem[] = [
	{ text: "外界先给你一个刺激", startFrame: 0, durationFrames: 24 },
	{ text: "大脑再用偏见去加工", startFrame: 24, durationFrames: 26 },
	{ text: "最后得到偏离事实的判断", startFrame: 50, durationFrames: 25 },
];

export const SC_CHECKLIST_CONTENT: ContentItem[] = [
	{ text: "先把事实写清楚", startFrame: 0, durationFrames: 24 },
	{ text: "再把推断分开写", startFrame: 24, durationFrames: 25 },
	{ text: "最后保证可追溯", startFrame: 49, durationFrames: 26 },
];

export const SC_PANEL_CONTENT: ContentItem[] = [
	{ text: "第一块拼图是输入", startFrame: 0, durationFrames: 24 },
	{ text: "第二块是处理机制", startFrame: 24, durationFrames: 26 },
	{ text: "第三块是输出行为", startFrame: 50, durationFrames: 25 },
];

export const SC_DATA_TABLE_CONTENT: ContentItem[] = [
	{ text: "先看标准版定位", startFrame: 0, durationFrames: 26 },
	{ text: "再看 Pro 的升级点", startFrame: 26, durationFrames: 26 },
	{ text: "最后 Ultra 拉满体验", startFrame: 52, durationFrames: 28 },
];

export const SC_TREE_DIAGRAM_CONTENT: ContentItem[] = [
	{ text: "抵制华为的背景是什么？", startFrame: 0, durationFrames: 22 },
	{ text: "分为制裁和去华为化两大类", startFrame: 22, durationFrames: 22 },
	{ text: "制裁又分为惩罚性制裁和制约性制裁", startFrame: 44, durationFrames: 26 },
	{ text: "去华为化分为技术原因和法理原因", startFrame: 70, durationFrames: 26 },
];

export const SC_STEP_LIST_START = 0;
export const SC_STEP_LIST_STAGGER = 12;
export const SC_STEP_LIST_STEP_COUNT = 3;
export const SC_STEP_LIST_LAST_DELAY =
	SC_STEP_LIST_START + (SC_STEP_LIST_STEP_COUNT - 1) * SC_STEP_LIST_STAGGER;

export const SC_TIMELINE_MAX_IMAGE_START = 30;

export type ShowcaseSegmentTiming = {
	/** 模板注册名；非模板段用非 SCREAMING_SNAKE（如 image-breath） */
	key: string;
	durationInFrames: number;
};

/** 与 TemplateShowcase 分段顺序、时长保持一致的唯一数据源 */
export const SHOWCASE_SEGMENT_TIMINGS: ShowcaseSegmentTiming[] = [
	{ key: "image-breath", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "BEAT_SEQUENCE", durationInFrames: durationFromContent(SC_BEAT_CONTENT) },
	{ key: "PUNCH_CAPTION", durationInFrames: durationFromContent(SC_PUNCH_CONTENT) },
	{ key: "PEER_INDUCT", durationInFrames: durationFromContent(SC_PEER_INDUCT_CONTENT) },
	{ key: "METHOD_STACK", durationInFrames: durationFromContent(SC_METHOD_CONTENT) },
	{ key: "CASE_BREAKDOWN", durationInFrames: durationFromContent(SC_CASE_CONTENT) },
	{ key: "CENTER_FOCUS", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "CHAT_BUBBLE", durationInFrames: durationFromContent(SC_CHAT_BUBBLE_CONTENT) },
	{ key: "COGNITIVE_SHIFT", durationInFrames: durationFromContent(SC_COGNITIVE_CONTENT) },
	{ key: "CONCEPT_CARD", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "DOS_AND_DONTS", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "KPI_HERO", durationInFrames: durationFromContent(SC_KPI_HERO_CONTENT) },
	{ key: "MAGNIFYING_GLASS", durationInFrames: durationFromContent(SC_MAGNIFY_CONTENT) },
	{ key: "PROGRESS_RING", durationInFrames: durationFromContent(SC_PROGRESS_CONTENT) },
	{ key: "QUOTE_CITATION", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "SPLIT_COMPARE", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "STAT_COMPARE", durationInFrames: durationFromContent(SC_STAT_CONTENT) },
	{ key: "STEP_LIST", durationInFrames: durationAfterLastStagger(SC_STEP_LIST_LAST_DELAY) },
	{ key: "TEXT_FOCUS", durationInFrames: SHOWCASE_FALLBACK_FRAMES },
	{ key: "CAUSE_CHAIN", durationInFrames: durationFromContent(SC_CAUSE_CONTENT) },
	{ key: "CHECKLIST_REVEAL", durationInFrames: durationFromContent(SC_CHECKLIST_CONTENT) },
	{ key: "PANEL_GRID", durationInFrames: durationFromContent(SC_PANEL_CONTENT) },
	{ key: "DATA_TABLE", durationInFrames: durationFromContent(SC_DATA_TABLE_CONTENT) },
	{ key: "TREE_DIAGRAM", durationInFrames: durationFromContent(SC_TREE_DIAGRAM_CONTENT) },
	{ key: "TIMELINE", durationInFrames: durationForTimelineShowcase(SC_TIMELINE_MAX_IMAGE_START) },
];

const isTemplateShowcaseKey = (key: string) => /^[A-Z][A-Z0-9_]*$/.test(key);

export type TemplateShowcaseStillJob = {
	templateName: string;
	frame: number;
};

export const TOTAL_DURATION_TEMPLATE_SHOWCASE = SHOWCASE_SEGMENT_TIMINGS.reduce(
	(sum, seg) => sum + seg.durationInFrames,
	0,
);

export const TEMPLATE_SHOWCASE_SEGMENTS = SHOWCASE_SEGMENT_TIMINGS.length;

/** 各模板段末帧（绝对帧号）；新增模板段后无需改导出脚本 */
export function getTemplateShowcaseStillJobs(): TemplateShowcaseStillJob[] {
	let cursor = 0;
	const jobs: TemplateShowcaseStillJob[] = [];
	for (const seg of SHOWCASE_SEGMENT_TIMINGS) {
		const lastFrame = cursor + seg.durationInFrames - 1;
		if (isTemplateShowcaseKey(seg.key)) {
			jobs.push({ templateName: seg.key, frame: lastFrame });
		}
		cursor += seg.durationInFrames;
	}
	return jobs;
}

export function showcaseDuration(key: string): number {
	const hit = SHOWCASE_SEGMENT_TIMINGS.find((s) => s.key === key);
	if (!hit) {
		throw new Error(`SHOWCASE_SEGMENT_TIMINGS 缺少 key=${key}`);
	}
	return hit.durationInFrames;
}
