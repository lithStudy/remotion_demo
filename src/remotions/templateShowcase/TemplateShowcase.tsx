import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import {
	BWImageBreath,
	BWCenterFocus,
	BWSplitCompare,
	BWStepList,
	BWTextFocus,
	BWConceptCard,
	BWQuoteCitation,
	BWTimeline,
	BWDosAndDonts,
	BWMagnifyingGlass,
	BWChatBubble,
	BWKpiHero,
	BWStatCompare,
	BWProgressRing,
	BWBeatSequence,
	BWPeerInduct,
	BWCognitiveShift,
	BWMethodStack,
	BWCaseBreakdown,
	BWCauseChain,
	BWChecklistReveal,
	BWPanelGrid,
	BWDataTable,
	BWSubtitle,
} from "../../components";
import type { ContentItem } from "../../components/templates/shared";

/** 无口播时间轴时的展示停留（与各模板入场动画量级一致） */
const SHOWCASE_FALLBACK_FRAMES = 75;

const img = (path: string) => staticFile(path);

/** 口播 coverage：最后一条结束帧 = max(startFrame + durationFrames) */
const durationFromContent = (items: ContentItem[]): number =>
	items.length === 0
		? SHOWCASE_FALLBACK_FRAMES
		: Math.max(...items.map((c) => c.startFrame + c.durationFrames));

/** StaggeredList 末项入场延迟 + 入场 spring(20) + 尾段阅读 */
const durationAfterLastStagger = (
	lastEntryDelay: number,
	settleFrames = 20,
	tailFrames = 40,
): number => lastEntryDelay + settleFrames + tailFrames;

/** TIMELINE：轴线 spring 与末节点出现后的可视尾段 */
const durationForTimelineShowcase = (
	maxImageStart: number,
	lineSpringFrames = 50,
	nodeSettleFrames = 22,
	tailFrames = 28,
): number => Math.max(lineSpringFrames, maxImageStart + nodeSettleFrames) + tailFrames;

const SC_BEAT_CONTENT: ContentItem[] = [
	{ text: "看到规律就等于财富密码？", startFrame: 0, durationFrames: 28 },
	{ text: "那是幻觉。", startFrame: 28, durationFrames: 22 },
	{ text: "持续误解就是慢性自杀。", startFrame: 50, durationFrames: 25 },
];

const SC_PEER_INDUCT_CONTENT: ContentItem[] = [
	{ text: "样本太小会误判。", startFrame: 0, durationFrames: 24 },
	{ text: "指标口径不一致也会误判。", startFrame: 24, durationFrames: 26 },
	{ text: "幸存者偏差还会再误判一次。", startFrame: 50, durationFrames: 26 },
	{ text: "结论：先核对数据再下判断。", startFrame: 76, durationFrames: 32 },
];

const SC_METHOD_CONTENT: ContentItem[] = [
	{ text: "第一，警惕情绪画面。", startFrame: 0, durationFrames: 22 },
	{ text: "先识别这是在煽动情绪。", startFrame: 22, durationFrames: 20 },
	{ text: "别让极端画面直接接管判断。", startFrame: 42, durationFrames: 20 },
	{ text: "再问它到底普遍，还是离奇。", startFrame: 62, durationFrames: 13 },
];

const SC_CASE_CONTENT: ContentItem[] = [
	{ text: "某个百岁老人每天抽烟喝酒，", startFrame: 0, durationFrames: 18 },
	{ text: "大家就觉得养生没用。", startFrame: 18, durationFrames: 16 },
	{ text: "其实那只是因为他基因逆天，", startFrame: 34, durationFrames: 16 },
	{ text: "而那些学他抽烟喝酒的人，", startFrame: 50, durationFrames: 14 },
	{ text: "大多没活到能接受采访的年纪。", startFrame: 64, durationFrames: 11 },
];

const SC_COGNITIVE_CONTENT: ContentItem[] = [
	{ text: "你以为结果只取决于努力程度。", startFrame: 0, durationFrames: 32 },
	{ text: "真正拉开差距的是认知和选择。", startFrame: 32, durationFrames: 43 },
];

/** CHAT_BUBBLE：两条 content 对齐两行气泡的入场与字幕 */
const SC_CHAT_BUBBLE_CONTENT: ContentItem[] = [
	{ text: "这数据越看越焦虑，我是不是该跟着慌？", startFrame: 0, durationFrames: 36 },
	{ text: "先把口径和样本量核对清楚，再决定要不要被情绪带着走。", startFrame: 36, durationFrames: 44 },
];

const SC_KPI_HERO_CONTENT: ContentItem[] = [
	{ text: "满意度稳居高位", startFrame: 0, durationFrames: 45 },
	{ text: "留存同样扎实", startFrame: 45, durationFrames: 45 },
	{ text: "转化还在放大", startFrame: 90, durationFrames: 45 },
];

const SC_MAGNIFY_CONTENT: ContentItem[] = [
	{ text: "本质是供需失衡在起作用", startFrame: 0, durationFrames: 40 },
];

const SC_PROGRESS_CONTENT: ContentItem[] = [
	{ text: "整体进度已经走到近八成。", startFrame: 0, durationFrames: 42 },
	{ text: "核心模块的测试覆盖也过半。", startFrame: 42, durationFrames: 42 },
	{ text: "文档与交付节奏和里程碑对齐。", startFrame: 84, durationFrames: 42 },
];

const SC_STAT_CONTENT: ContentItem[] = [
	{ text: "去年基数还偏低。", startFrame: 0, durationFrames: 60 },
	{ text: "今年明显抬升。", startFrame: 60, durationFrames: 60 },
	{ text: "明年冲刺更高目标。", startFrame: 120, durationFrames: 60 },
];

const SC_CAUSE_CONTENT: ContentItem[] = [
	{ text: "外界先给你一个刺激", startFrame: 0, durationFrames: 24 },
	{ text: "大脑再用偏见去加工", startFrame: 24, durationFrames: 26 },
	{ text: "最后得到偏离事实的判断", startFrame: 50, durationFrames: 25 },
];

const SC_CHECKLIST_CONTENT: ContentItem[] = [
	{ text: "先把事实写清楚", startFrame: 0, durationFrames: 24 },
	{ text: "再把推断分开写", startFrame: 24, durationFrames: 25 },
	{ text: "最后保证可追溯", startFrame: 49, durationFrames: 26 },
];

const SC_PANEL_CONTENT: ContentItem[] = [
	{ text: "第一块拼图是输入", startFrame: 0, durationFrames: 24 },
	{ text: "第二块是处理机制", startFrame: 24, durationFrames: 26 },
	{ text: "第三块是输出行为", startFrame: 50, durationFrames: 25 },
];

const SC_DATA_TABLE_CONTENT: ContentItem[] = [
	{ text: "先看标准版定位", startFrame: 0, durationFrames: 26 },
	{ text: "再看 Pro 的升级点", startFrame: 26, durationFrames: 26 },
	{ text: "最后 Ultra 拉满体验", startFrame: 52, durationFrames: 28 },
];

/** STEP_LIST 演示：与下方 BWStepList 的 startFrame / staggerDelay / steps 数量一致 */
const SC_STEP_LIST_START = 0;
const SC_STEP_LIST_STAGGER = 12;
const SC_STEP_LIST_STEP_COUNT = 3;
const SC_STEP_LIST_LAST_DELAY =
	SC_STEP_LIST_START + (SC_STEP_LIST_STEP_COUNT - 1) * SC_STEP_LIST_STAGGER;

/** TIMELINE 演示：images 中最大的 startFrame */
const SC_TIMELINE_MAX_IMAGE_START = 30;

type ShowcaseSegment = {
	key: string;
	durationInFrames: number;
	content: React.ReactNode;
};

/**
 * 全展示：覆盖当前 templates 目录已导出的模板能力。
 * 新增模板时请在此处追加一项；durationInFrames 由口播 coverage 或专用规则得出，总时长为各段之和。
 */
const SHOWCASE_SEGMENTS: ShowcaseSegment[] = [
	{
		key: "image-breath",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWImageBreath src={img("images/template/scene1_1.png")} />
				<BWSubtitle position="top" text="BWImageBreath · 单图入场基元（breathe）" startFrame={0} />
			</>
		),
	},
	{
		key: "beat-sequence",
		durationInFrames: durationFromContent(SC_BEAT_CONTENT),
		content: (
			<>
				<BWBeatSequence
					stages={[
						{ imageSrc: img("images/template/scene1_1.png"), enterEffect: "breathe" },
						{ imageSrc: img("images/template/scene6_15.png"), enterEffect: "slideBottom" },
						{ imageSrc: img("images/template/scene2_1.png"), enterEffect: "slideBottom" },
					]}
					content={SC_BEAT_CONTENT}
					anchors={[{ text: "财富密码", showFrom: 0, color: "#FF8C00", anim: "popIn" }]}
				/>
				<BWSubtitle position="top" text="BEAT_SEQUENCE · 节拍递进（一问一驳一锤）" startFrame={0} />
			</>
		),
	},
	{
		key: "peer-induct",
		durationInFrames: durationFromContent(SC_PEER_INDUCT_CONTENT),
		content: (
			<>
				<BWPeerInduct
					premises={[
						{ imageSrc: img("images/template/scene1_1.png"), enterEffect: "fadeIn" },
						{ imageSrc: img("images/template/scene6_15.png"), enterEffect: "fadeIn" },
						{ imageSrc: img("images/template/scene2_1.png"), enterEffect: "breathe" },
					]}
					conclusion={{
						imageSrc: img("images/template/scene4_1.png"),
						enterEffect: "zoomIn",
						tone: "alert",
					}}
					content={SC_PEER_INDUCT_CONTENT}
					anchors={[{ text: "幸存者偏差", showFrom: 2, color: "#FF8C00", anim: "popIn" }]}
				/>
				<BWSubtitle position="top" text="PEER_INDUCT · 并列前提 → 归纳收束" startFrame={0} />
			</>
		),
	},
	{
		key: "method-stack",
		durationInFrames: durationFromContent(SC_METHOD_CONTENT),
		content: (
			<>
				<BWMethodStack
					title="警惕情绪画面"
					imageSrc={img("images/template/scene1_1.png")}
					notes={[
						{ text: "先识别这是不是情绪刺激", showFrom: 1 },
						{ text: "再判断它是否只是离奇个案", showFrom: 3 },
					]}
					content={SC_METHOD_CONTENT}
				/>
				<BWSubtitle position="top" text="METHOD_STACK · 单标题解释展开" startFrame={0} />
			</>
		),
	},
	{
		key: "case-breakdown",
		durationInFrames: durationFromContent(SC_CASE_CONTENT),
		content: (
			<>
				<BWCaseBreakdown
					title="长寿悖论"
					imageSrc={img("images/template/scene1_1.png")}
					phases={[
						{ phaseLabel: "表面个案", showFrom: 0 },
						{ phaseLabel: "常见推论", showFrom: 1 },
						{ phaseLabel: "真相", showFrom: 2 },
						{ phaseLabel: "收束", showFrom: 4 },
					]}
					content={SC_CASE_CONTENT}
					anchors={[]}
				/>
				<BWSubtitle position="top" text="CASE_BREAKDOWN · 案例/子话题详解" startFrame={0} />
			</>
		),
	},
	{
		key: "center-focus",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWCenterFocus imageSrc={img("images/template/scene1_1.png")} />
				<BWSubtitle position="top" text="CENTER_FOCUS · 视觉中心稳定" startFrame={0} />
			</>
		),
	},
	{
		key: "chat-bubble",
		durationInFrames: durationFromContent(SC_CHAT_BUBBLE_CONTENT),
		content: (
			<>
				<BWChatBubble
					content={SC_CHAT_BUBBLE_CONTENT}
					bubbles={[
						{
							bubbleText: "这数据越看越焦虑，我是不是该跟着慌？",
							showFrom: 0,
							align: "left",
						},
						{
							bubbleText: "先把口径和样本量核对清楚，再决定要不要被情绪带着走。",
							showFrom: 1,
							align: "right",
						},
					]}
				/>
				<BWSubtitle position="top" text="CHAT_BUBBLE · 多气泡 / 左右对聊" startFrame={0} />
			</>
		),
	},
	{
		key: "cognitive-shift",
		durationInFrames: durationFromContent(SC_COGNITIVE_CONTENT),
		content: (
			<>
				<BWCognitiveShift
					notText="不是更努力就更快成功"
					butText="而是更精准地做选择"
					butSrc={img("images/template/scene5_2.png")}
					content={SC_COGNITIVE_CONTENT}
					anchors={[
						{ text: "努力程度", showFrom: 0, color: "#D64545", anim: "popIn" },
						{ text: "认知和选择", showFrom: 1, color: "#111111", anim: "highlight" },
					]}
				/>
				<BWSubtitle position="top" text="COGNITIVE_SHIFT · 不是...而是..." startFrame={0} />
			</>
		),
	},
	{
		key: "concept-card",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWConceptCard imageSrc={img("images/template/scene1_1.png")} conceptName="可得性启发fasdfasdfs" />
				<BWSubtitle position="top" text="CONCEPT_CARD · 术语锚定" startFrame={0} />
			</>
		),
	},
	{
		key: "dos-and-donts",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWDosAndDonts
					left={{ label: "错误示范", src: img("images/template/scene5_1.png"), showFrom: 0 }}
					right={{ label: "正确做法", src: img("images/template/scene5_2.png"), showFrom: 10 }}
				/>
				<BWSubtitle position="top" text="DOS_AND_DONTS · 避坑对比" startFrame={0} />
			</>
		),
	},
	{
		key: "kpi-hero",
		durationInFrames: durationFromContent(SC_KPI_HERO_CONTENT),
		content: (
			<>
				<BWKpiHero
					blocks={[
						{ value: 87, suffix: "%", label: "满意度", showFrom: 0 },
						{ value: 62, suffix: "%", label: "次月留存", showFrom: 1 },
						{ value: 3, suffix: "倍", label: "转化放大", showFrom: 2 },
					]}
					content={SC_KPI_HERO_CONTENT}
				/>
				<BWSubtitle position="top" text="KPI_HERO · 多指标并列" startFrame={0} />
			</>
		),
	},
	{
		key: "magnifying-glass",
		durationInFrames: durationFromContent(SC_MAGNIFY_CONTENT),
		content: (
			<>
				<BWMagnifyingGlass
					content={SC_MAGNIFY_CONTENT}
					anchors={[{ text: "供需失衡", showFrom: 0, color: "#111111", anim: "popIn" }]}
				/>
				<BWSubtitle position="top" text="MAGNIFYING_GLASS · 揭秘底层" startFrame={0} />
			</>
		),
	},
	{
		key: "progress-ring",
		durationInFrames: durationFromContent(SC_PROGRESS_CONTENT),
		content: (
			<>
				<BWProgressRing
					blocks={[
						{
							percent: 78,
							label: "项目完成度",
							subLabel: "截至本季度",
							showFrom: 0,
						},
						{
							percent: 62,
							label: "测试覆盖",
							subLabel: "核心模块",
							ringColor: "#059669",
							showFrom: 1,
						},
						{
							percent: 88,
							label: "文档同步",
							subLabel: "与里程碑对齐",
							ringColor: "#7C3AED",
							showFrom: 2,
						},
					]}
					content={SC_PROGRESS_CONTENT}
				/>
				<BWSubtitle position="top" text="PROGRESS_RING · 多组环形" startFrame={0} />
			</>
		),
	},
	{
		key: "quote-citation",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWQuoteCitation
					imageSrc={img("images/template/scene2_1.png")}
					quoteSource="某研究 / 某名人"
				/>
				<BWSubtitle position="top" text="QUOTE_CITATION · 引用背书" startFrame={0} />
			</>
		),
	},
	{
		key: "split-compare",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWSplitCompare
					leftSrc={img("images/template/scene2_3_left.png")}
					rightSrc={img("images/template/scene2_3_right.png")}
					leftLabel="左"
					rightLabel="右"
				/>
				<BWSubtitle position="top" text="SPLIT_COMPARE · A vs B 对比" startFrame={0} />
			</>
		),
	},
	{
		key: "stat-compare",
		durationInFrames: durationFromContent(SC_STAT_CONTENT),
		content: (
			<>
				<BWStatCompare
					bars={[
						{ label: "去年", value: 32, showFrom: 0 },
						{ label: "今年", value: 68, showFrom: 1 },
						{ label: "目标", value: 85, showFrom: 2 },
					]}
					content={SC_STAT_CONTENT}
				/>
				<BWSubtitle position="top" text="STAT_COMPARE · 多柱 KPI（bars + showFrom）" startFrame={0} />
			</>
		),
	},
	{
		key: "step-list",
		durationInFrames: durationAfterLastStagger(SC_STEP_LIST_LAST_DELAY),
		content: (
			<>
				<BWStepList
					steps={["第一步：打开思路", "第二步：选择方案", "第三步：执行验证"]}
					startFrame={SC_STEP_LIST_START}
					staggerDelay={SC_STEP_LIST_STAGGER}
				/>
				<BWSubtitle position="top" text="STEP_LIST · 步骤/流程" startFrame={0} />
			</>
		),
	},
	{
		key: "text-focus",
		durationInFrames: SHOWCASE_FALLBACK_FRAMES,
		content: (
			<>
				<BWTextFocus>
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: "40%",
							transform: "translateY(-50%)",
							textAlign: "center",
							fontSize: 56,
							fontWeight: 800,
							color: "red",
							padding: "0 10%",
							fontFamily: '"Microsoft YaHei", "PingFang SC", sans-serif',
						}}
					>
						这是核心金句，无需配图
					</div>
				</BWTextFocus>
				<BWSubtitle position="top" text="TEXT_FOCUS · 信噪比极致化" startFrame={0} />
			</>
		),
	},
	{
		key: "cause-chain",
		durationInFrames: durationFromContent(SC_CAUSE_CONTENT),
		content: (
			<>
				<BWCauseChain
					nodes={[
						{ label: "诱因", imageSrc: img("images/template/scene1_1.png"), showFrom: 0 },
						{ label: "加工", imageSrc: img("images/template/scene2_1.png"), showFrom: 1 },
						{ label: "结果", imageSrc: img("images/template/scene6_15.png"), showFrom: 2 },
					]}
					content={SC_CAUSE_CONTENT}
				/>
				<BWSubtitle position="top" text="CAUSE_CHAIN · 因果链" startFrame={0} />
			</>
		),
	},
	{
		key: "checklist-reveal",
		durationInFrames: durationFromContent(SC_CHECKLIST_CONTENT),
		content: (
			<>
				<BWChecklistReveal
					title="自检三项"
					rows={[
						{ text: "事实写清楚", showFrom: 0 },
						{ text: "推断分开写", showFrom: 1 },
						{ text: "留痕可追溯", showFrom: 2 },
					]}
					content={SC_CHECKLIST_CONTENT}
				/>
				<BWSubtitle position="top" text="CHECKLIST_REVEAL · 清单打勾" startFrame={0} />
			</>
		),
	},
	{
		key: "panel-grid",
		durationInFrames: durationFromContent(SC_PANEL_CONTENT),
		content: (
			<>
				<BWPanelGrid
					panels={[
						{ src: img("images/template/scene4_1.png"), showFrom: 0, enterEffect: "zoomIn" },
						{ src: img("images/template/scene4_2.png"), showFrom: 1 },
						{ src: img("images/template/scene4_3.png"), showFrom: 2 },
					]}
					content={SC_PANEL_CONTENT}
				/>
				<BWSubtitle position="top" text="PANEL_GRID · 宫格并列" startFrame={0} />
			</>
		),
	},
	{
		key: "data-table",
		durationInFrames: durationFromContent(SC_DATA_TABLE_CONTENT),
		content: (
			<>
				<BWDataTable
					title="机型对照"
					columns={["档位", "续航", "起售价"]}
					rows={[
						{ cells: ["标准", "全天", "1999 起"], showFrom: 0 },
						{ cells: ["Pro", "一天半", "2699 起"], showFrom: 1 },
						{ cells: ["Ultra", "两天", "3999 起"], showFrom: 2 },
					]}
					content={SC_DATA_TABLE_CONTENT}
				/>
				<BWSubtitle position="top" text="DATA_TABLE · 表格对照" startFrame={0} />
			</>
		),
	},
	{
		key: "timeline",
		durationInFrames: durationForTimelineShowcase(SC_TIMELINE_MAX_IMAGE_START),
		content: (
			<>
				<BWTimeline
					images={[
						{ src: img("images/template/scene4_1.png"), position: "left", startFrame: 0 },
						{ src: img("images/template/scene4_2.png"), position: "center", startFrame: 15 },
						{ src: img("images/template/scene4_3.png"), position: "right", startFrame: 30 },
					]}
				/>
				<BWSubtitle position="top" text="TIMELINE · 时间序列" startFrame={0} />
			</>
		),
	},
];

export const TEMPLATE_SHOWCASE_SEGMENTS = SHOWCASE_SEGMENTS.length;

export const TOTAL_DURATION_TEMPLATE_SHOWCASE = SHOWCASE_SEGMENTS.reduce(
	(sum, seg) => sum + seg.durationInFrames,
	0,
);

export const TemplateShowcase: React.FC = () => {
	return (
		<AbsoluteFill style={{ backgroundColor: "#fff" }}>
			<Series>
				{SHOWCASE_SEGMENTS.map((seg) => (
					<Series.Sequence key={seg.key} durationInFrames={seg.durationInFrames}>
						{seg.content}
					</Series.Sequence>
				))}
			</Series>
		</AbsoluteFill>
	);
};
