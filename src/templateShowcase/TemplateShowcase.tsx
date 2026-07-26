import React, { createContext, useContext } from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import { z } from "zod";
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
	BWPunchCaption,
	BWPeerInduct,
	BWCognitiveShift,
	BWMethodStack,
	BWCaseBreakdown,
	BWCauseChain,
	BWChecklistReveal,
	BWPanelGrid,
	BWDataTable,
	BWTreeDiagram,
	BWSubtitle,
} from "../components";
import {
	SC_BEAT_CONTENT,
	SC_PUNCH_CONTENT,
	SC_PEER_INDUCT_CONTENT,
	SC_METHOD_CONTENT,
	SC_CASE_CONTENT,
	SC_COGNITIVE_CONTENT,
	SC_CHAT_BUBBLE_CONTENT,
	SC_KPI_HERO_CONTENT,
	SC_MAGNIFY_CONTENT,
	SC_PROGRESS_CONTENT,
	SC_STAT_CONTENT,
	SC_CAUSE_CONTENT,
	SC_CHECKLIST_CONTENT,
	SC_PANEL_CONTENT,
	SC_DATA_TABLE_CONTENT,
	SC_TREE_DIAGRAM_CONTENT,
	SC_STEP_LIST_START,
	SC_STEP_LIST_STAGGER,
	showcaseDuration,
} from "./showcaseStillJobs";

const img = (path: string) => staticFile(path);

type ShowcaseSegment = {
	/** 模板注册名（如 BEAT_SEQUENCE）；非模板演示段可用非 SCREAMING_SNAKE 的 key（如 image-breath） */
	key: string;
	durationInFrames: number;
	content: React.ReactNode;
};

export const TemplateShowcaseSchema = z.object({
	showLabels: z.boolean(),
});

export type TemplateShowcaseProps = z.infer<typeof TemplateShowcaseSchema>;

const ShowcaseLabelsContext = createContext(true);

/** Studio 预览用顶栏说明；导出预览图时 showLabels=false 不渲染 */
const ShowcaseLabel: React.FC<{ text: string }> = ({ text }) => {
	const showLabels = useContext(ShowcaseLabelsContext);
	if (!showLabels) {
		return null;
	}
	return <BWSubtitle position="top" text={text} startFrame={0} />;
};

/**
 * 全展示：覆盖当前 templates 目录已导出的模板能力。
 * 新增模板：showcaseStillJobs 追加 timing（key=模板名），并在此处追加同名段内容。
 */
const SHOWCASE_SEGMENTS: ShowcaseSegment[] = [
	{
		key: "image-breath",
		durationInFrames: showcaseDuration("image-breath"),
		content: (
			<>
				<BWImageBreath src={img("images/template/scene1_1.png")} />
				<ShowcaseLabel text="BWImageBreath · 单图入场基元（breathe）" />
			</>
		),
	},
	{
		key: "BEAT_SEQUENCE",
		durationInFrames: showcaseDuration("BEAT_SEQUENCE"),
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
				<ShowcaseLabel text="BEAT_SEQUENCE · 节拍递进（一问一驳一锤）" />
			</>
		),
	},
	{
		key: "PUNCH_CAPTION",
		durationInFrames: showcaseDuration("PUNCH_CAPTION"),
		content: (
			<>
				<BWPunchCaption
					content={SC_PUNCH_CONTENT}
					punches={[
						{ text: "什么？", showFrom: 0, enterEffect: "popIn", tone: "calm" },
						{ text: "你说我瞎说？", showFrom: 1, enterEffect: "snap", tone: "alert" },
						{ text: "不信科技力量？", showFrom: 2, enterEffect: "shake", tone: "alert" },
						{ text: "不爱国？", showFrom: 3, enterEffect: "shake", tone: "alert" },
					]}
					anchors={[
						{ text: "科技力量", showFrom: 2, color: "#EF4444" },
						{ text: "不爱国", showFrom: 3, color: "#EF4444" },
					]}
				/>
				<ShowcaseLabel text="PUNCH_CAPTION · 暴击字幕（连击质问）" />
			</>
		),
	},
	{
		key: "PEER_INDUCT",
		durationInFrames: showcaseDuration("PEER_INDUCT"),
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
				<ShowcaseLabel text="PEER_INDUCT · 并列前提 → 归纳收束" />
			</>
		),
	},
	{
		key: "METHOD_STACK",
		durationInFrames: showcaseDuration("METHOD_STACK"),
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
				<ShowcaseLabel text="METHOD_STACK · 单标题解释展开" />
			</>
		),
	},
	{
		key: "CASE_BREAKDOWN",
		durationInFrames: showcaseDuration("CASE_BREAKDOWN"),
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
				<ShowcaseLabel text="CASE_BREAKDOWN · 案例/子话题详解" />
			</>
		),
	},
	{
		key: "CENTER_FOCUS",
		durationInFrames: showcaseDuration("CENTER_FOCUS"),
		content: (
			<>
				<BWCenterFocus imageSrc={img("images/template/scene1_1.png")} />
				<ShowcaseLabel text="CENTER_FOCUS · 视觉中心稳定" />
			</>
		),
	},
	{
		key: "CHAT_BUBBLE",
		durationInFrames: showcaseDuration("CHAT_BUBBLE"),
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
				<ShowcaseLabel text="CHAT_BUBBLE · 多气泡 / 左右对聊" />
			</>
		),
	},
	{
		key: "COGNITIVE_SHIFT",
		durationInFrames: showcaseDuration("COGNITIVE_SHIFT"),
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
				<ShowcaseLabel text="COGNITIVE_SHIFT · 不是...而是..." />
			</>
		),
	},
	{
		key: "CONCEPT_CARD",
		durationInFrames: showcaseDuration("CONCEPT_CARD"),
		content: (
			<>
				<BWConceptCard imageSrc={img("images/template/scene1_1.png")} conceptName="可得性启发fasdfasdfs" />
				<ShowcaseLabel text="CONCEPT_CARD · 术语锚定" />
			</>
		),
	},
	{
		key: "DOS_AND_DONTS",
		durationInFrames: showcaseDuration("DOS_AND_DONTS"),
		content: (
			<>
				<BWDosAndDonts
					left={{ label: "错误示范", src: img("images/template/scene5_1.png"), showFrom: 0 }}
					right={{ label: "正确做法", src: img("images/template/scene5_2.png"), showFrom: 10 }}
				/>
				<ShowcaseLabel text="DOS_AND_DONTS · 避坑对比" />
			</>
		),
	},
	{
		key: "KPI_HERO",
		durationInFrames: showcaseDuration("KPI_HERO"),
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
				<ShowcaseLabel text="KPI_HERO · 多指标并列" />
			</>
		),
	},
	{
		key: "MAGNIFYING_GLASS",
		durationInFrames: showcaseDuration("MAGNIFYING_GLASS"),
		content: (
			<>
				<BWMagnifyingGlass
					content={SC_MAGNIFY_CONTENT}
					anchors={[{ text: "供需失衡", showFrom: 0, color: "#111111", anim: "popIn" }]}
				/>
				<ShowcaseLabel text="MAGNIFYING_GLASS · 揭秘底层" />
			</>
		),
	},
	{
		key: "PROGRESS_RING",
		durationInFrames: showcaseDuration("PROGRESS_RING"),
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
				<ShowcaseLabel text="PROGRESS_RING · 多组环形" />
			</>
		),
	},
	{
		key: "QUOTE_CITATION",
		durationInFrames: showcaseDuration("QUOTE_CITATION"),
		content: (
			<>
				<BWQuoteCitation
					imageSrc={img("images/template/scene2_1.png")}
					quoteSource="某研究 / 某名人"
				/>
				<ShowcaseLabel text="QUOTE_CITATION · 引用背书" />
			</>
		),
	},
	{
		key: "SPLIT_COMPARE",
		durationInFrames: showcaseDuration("SPLIT_COMPARE"),
		content: (
			<>
				<BWSplitCompare
					leftSrc={img("images/template/scene2_3_left.png")}
					rightSrc={img("images/template/scene2_3_right.png")}
					leftLabel="左"
					rightLabel="右"
				/>
				<ShowcaseLabel text="SPLIT_COMPARE · A vs B 对比" />
			</>
		),
	},
	{
		key: "STAT_COMPARE",
		durationInFrames: showcaseDuration("STAT_COMPARE"),
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
				<ShowcaseLabel text="STAT_COMPARE · 多柱 KPI（bars + showFrom）" />
			</>
		),
	},
	{
		key: "STEP_LIST",
		durationInFrames: showcaseDuration("STEP_LIST"),
		content: (
			<>
				<BWStepList
					steps={["第一步：打开思路", "第二步：选择方案", "第三步：执行验证"]}
					startFrame={SC_STEP_LIST_START}
					staggerDelay={SC_STEP_LIST_STAGGER}
				/>
				<ShowcaseLabel text="STEP_LIST · 步骤/流程" />
			</>
		),
	},
	{
		key: "TEXT_FOCUS",
		durationInFrames: showcaseDuration("TEXT_FOCUS"),
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
				<ShowcaseLabel text="TEXT_FOCUS · 信噪比极致化" />
			</>
		),
	},
	{
		key: "CAUSE_CHAIN",
		durationInFrames: showcaseDuration("CAUSE_CHAIN"),
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
				<ShowcaseLabel text="CAUSE_CHAIN · 因果链" />
			</>
		),
	},
	{
		key: "CHECKLIST_REVEAL",
		durationInFrames: showcaseDuration("CHECKLIST_REVEAL"),
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
				<ShowcaseLabel text="CHECKLIST_REVEAL · 清单打勾" />
			</>
		),
	},
	{
		key: "PANEL_GRID",
		durationInFrames: showcaseDuration("PANEL_GRID"),
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
				<ShowcaseLabel text="PANEL_GRID · 宫格并列" />
			</>
		),
	},
	{
		key: "DATA_TABLE",
		durationInFrames: showcaseDuration("DATA_TABLE"),
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
				<ShowcaseLabel text="DATA_TABLE · 表格对照" />
			</>
		),
	},
	{
		key: "TREE_DIAGRAM",
		durationInFrames: showcaseDuration("TREE_DIAGRAM"),
		content: (
			<>
				<BWTreeDiagram
					root={{
						label: "抵制华为",
						showFrom: 0,
						children: [
							{
								label: "被制裁",
								showFrom: 1,
								children: [
									{ label: "惩罚性制裁",
										children: [
											{ label: "星通事件" },
											{ label: "孟女士PPT事件" },
										],
									},
									{ label: "制约性制裁" },
								],
							},
							{
								label: "被去华为化",
								showFrom: 2,
								children: [
									{ label: "技术原因" },
									{ label: "法理原因" },
								],
							},
						],
					}}
					content={SC_TREE_DIAGRAM_CONTENT}
				/>
				<ShowcaseLabel text="TREE_DIAGRAM · 树状层次" />
			</>
		),
	},
	{
		key: "TIMELINE",
		durationInFrames: showcaseDuration("TIMELINE"),
		content: (
			<>
				<BWTimeline
					images={[
						{ src: img("images/template/scene4_1.png"), startFrame: 0, label: "阶段一" },
						{ src: img("images/template/scene4_2.png"), startFrame: 15, label: "阶段二" },
						{ src: img("images/template/scene4_3.png"), startFrame: 30, label: "阶段三" },
					]}
				/>
				<ShowcaseLabel text="TIMELINE · 时间序列" />
			</>
		),
	},
];

export {
	TOTAL_DURATION_TEMPLATE_SHOWCASE,
	TEMPLATE_SHOWCASE_SEGMENTS,
	getTemplateShowcaseStillJobs,
} from "./showcaseStillJobs";

export const TemplateShowcase: React.FC<TemplateShowcaseProps> = ({
	showLabels,
}) => {
	return (
		<ShowcaseLabelsContext.Provider value={showLabels}>
			<AbsoluteFill style={{ backgroundColor: "#fff" }}>
				<Series>
					{SHOWCASE_SEGMENTS.map((seg) => (
						<Series.Sequence key={seg.key} durationInFrames={seg.durationInFrames}>
							{seg.content}
						</Series.Sequence>
					))}
				</Series>
			</AbsoluteFill>
		</ShowcaseLabelsContext.Provider>
	);
};
