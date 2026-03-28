import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import {
	BWImageBreath,
	BWCenterFocus,
	BWSplitCompare,
	BWMultiImage,
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
	BWCognitiveShift,
	BWMethodStack,
	BWSubtitle,
} from "../../components";

const SEGMENT_FRAMES = 75;

const img = (path: string) => staticFile(path);

/**
 * 全展示：覆盖当前 templates 目录已导出的模板能力。
 * 新增模板时请在此处追加一项，保证总时长自动更新。
 */
const SHOWCASE_SEGMENTS: Array<{ key: string; content: React.ReactNode }> = [
	{
		key: "image-breath",
		content: (
			<>
				<BWImageBreath src={img("images/template/scene1_1.png")} enterEffect="breathe" />
				<BWSubtitle position="top" text="BWImageBreath · 单图入场基元（breathe）" startFrame={0} />
			</>
		),
	},
	{
		key: "beat-sequence",
		content: (
			<>
				<BWBeatSequence
					stages={[
						{ imageSrc: img("images/template/scene1_1.png"), enterEffect: "breathe" },
						{ imageSrc: img("images/template/scene6_15.png"), enterEffect: "slideBottom" },
						{ imageSrc: img("images/template/scene2_1.png"), enterEffect: "slideBottom" },
					]}
					content={[
						{
							text: "看到规律就等于财富密码？",
							startFrame: 0,
							durationFrames: 28,
						},
						{
							text: "那是幻觉。",
							startFrame: 28,
							durationFrames: 22,
						},
						{
							text: "持续误解就是慢性自杀。",
							startFrame: 50,
							durationFrames: 25,
						},
					]}
					anchors={[{ text: "财富密码", showFrom: 0, color: "#FF8C00", anim: "popIn" }]}
				/>
				<BWSubtitle position="top" text="BEAT_SEQUENCE · 节拍递进（一问一驳一锤）" startFrame={0} />
			</>
		),
	},
	{
		key: "method-stack",
		content: (
			<>
				<BWMethodStack
					title="警惕情绪画面"
					imageSrc={img("images/template/scene1_1.png")}
					notes={[
						{ text: "先识别这是不是情绪刺激", showFrom: 1 },
						{ text: "再判断它是否只是离奇个案", showFrom: 3 },
					]}
					content={[
						{ text: "第一，警惕情绪画面。", startFrame: 0, durationFrames: 22 },
						{ text: "先识别这是在煽动情绪。", startFrame: 22, durationFrames: 20 },
						{ text: "别让极端画面直接接管判断。", startFrame: 42, durationFrames: 20 },
						{ text: "再问它到底普遍，还是离奇。", startFrame: 62, durationFrames: 13 },
					]}
				/>
				<BWSubtitle position="top" text="METHOD_STACK · 单标题解释展开" startFrame={0} />
			</>
		),
	},
	{
		key: "center-focus",
		content: (
			<>
				<BWCenterFocus imageSrc={img("images/template/scene1_1.png")} enterEffect="breathe" />
				<BWSubtitle position="top" text="CENTER_FOCUS · 视觉中心稳定" startFrame={0} />
			</>
		),
	},
	{
		key: "chat-bubble",
		content: (
			<>
				<BWChatBubble imageSrc={img("images/template/scene1_1.png")}>
					<div
						style={{
							fontSize: 36,
							fontWeight: 600,
							color: "#111",
							fontFamily: '"Microsoft YaHei", "PingFang SC", sans-serif',
							lineHeight: 1.4,
						}}
					>
						用户心声 / 常见疑问
					</div>
				</BWChatBubble>
				<BWSubtitle position="top" text="CHAT_BUBBLE · 社会投射" startFrame={0} />
			</>
		),
	},
	{
		key: "cognitive-shift",
		content: (
			<>
				<BWCognitiveShift
					notText="不是更努力就更快成功"
					butText="而是更精准地做选择"
					butSrc={img("images/template/scene5_2.png")}
					content={[
						{
							text: "你以为结果只取决于努力程度。",
							startFrame: 0,
							durationFrames: 32,
						},
						{
							text: "真正拉开差距的是认知和选择。",
							startFrame: 32,
							durationFrames: 43,
						},
					]}
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
		content: (
			<>
				<BWConceptCard imageSrc={img("images/template/scene1_1.png")} conceptName="专业术语" />
				<BWSubtitle position="top" text="CONCEPT_CARD · 术语锚定" startFrame={0} />
			</>
		),
	},
	{
		key: "dos-and-donts",
		content: (
			<>
				<BWDosAndDonts
					leftSrc={img("images/template/scene5_1.png")}
					rightSrc={img("images/template/scene5_2.png")}
					dontLabel="错误示范"
					doLabel="正确做法"
				/>
				<BWSubtitle position="top" text="DOS_AND_DONTS · 避坑对比" startFrame={0} />
			</>
		),
	},
	{
		key: "kpi-hero",
		content: (
			<>
				<BWKpiHero
					value={87}
					suffix="%"
					headline="用户满意度"
					imageSrc={img("images/template/scene1_1.png")}
					content={[
						{ text: "满意度同比大幅提升", startFrame: 0, durationFrames: 36 },
						{ text: "说明产品体验在变好", startFrame: 36, durationFrames: 39 },
					]}
				/>
				<BWSubtitle position="top" text="KPI_HERO · 单指标大字报" startFrame={0} />
			</>
		),
	},
	{
		key: "magnifying-glass",
		content: (
			<>
				<BWMagnifyingGlass
					content={[
						{
							text: "本质是供需失衡在起作用",
							startFrame: 0,
							durationFrames: 40,
						},
					]}
					anchors={[{ text: "供需失衡", showFrom: 0, color: "#111111", anim: "popIn" }]}
				/>
				<BWSubtitle position="top" text="MAGNIFYING_GLASS · 揭秘底层" startFrame={0} />
			</>
		),
	},
	{
		key: "multi-image",
		content: (
			<>
				<BWMultiImage
					images={[
						{ src: img("images/template/scene3_1.png"), position: "left" },
						{ src: img("images/template/scene3_2.png"), position: "right" },
					]}
				/>
				<BWSubtitle position="top" text="LIST_MULTI_GROUP · 多要素并列" startFrame={0} />
			</>
		),
	},
	{
		key: "progress-ring",
		content: (
			<>
				<BWProgressRing
					percent={78}
					label="项目完成度"
					subLabel="截至本季度"
					content={[
						{ text: "已经完成近八成", startFrame: 0, durationFrames: 36 },
						{ text: "剩下部分集中攻坚", startFrame: 36, durationFrames: 39 },
					]}
				/>
				<BWSubtitle position="top" text="PROGRESS_RING · 环形进度" startFrame={0} />
			</>
		),
	},
	{
		key: "quote-citation",
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
		content: (
			<>
				<BWStatCompare leftValue={32} rightValue={68} leftLabel="去年" rightLabel="今年" />
				<BWSubtitle position="top" text="STAT_COMPARE · 双指标对比" startFrame={0} />
			</>
		),
	},
	{
		key: "step-list",
		content: (
			<>
				<BWStepList
					steps={["第一步：打开思路", "第二步：选择方案", "第三步：执行验证"]}
					startFrame={0}
				/>
				<BWSubtitle position="top" text="STEP_LIST · 步骤/流程" startFrame={0} />
			</>
		),
	},
	{
		key: "text-focus",
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
		key: "timeline",
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

export const TOTAL_DURATION_TEMPLATE_SHOWCASE =
	SHOWCASE_SEGMENTS.length * SEGMENT_FRAMES;

export const TemplateShowcase: React.FC = () => {
	return (
		<AbsoluteFill style={{ backgroundColor: "#fff" }}>
			<Series>
				{SHOWCASE_SEGMENTS.map((seg) => (
					<Series.Sequence key={seg.key} durationInFrames={SEGMENT_FRAMES}>
						{seg.content}
					</Series.Sequence>
				))}
			</Series>
		</AbsoluteFill>
	);
};
