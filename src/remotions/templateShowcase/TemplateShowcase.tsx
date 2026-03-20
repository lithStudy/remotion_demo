import React from "react";
import { AbsoluteFill, Series, staticFile } from "remotion";
import {
	BWImageBreath,
	BWCenterFocus,
	BWSplitCompare,
	BWMultiImage,
	BWStepList,
	BWAlertStyle,
	BWTextFocus,
	BWConceptCard,
	BWQuoteCitation,
	BWTimeline,
	BWDosAndDonts,
	BWMagnifyingGlass,
	BWChatBubble,
	BWScaleBalance,
	BWKpiHero,
	BWStatCompare,
	BWProgressRing,
	BWBeatSequence,
	BWSubtitle,
} from "../../components";

const SEGMENT_FRAMES = 75;

const img = (path: string) => staticFile(path);

/**
 * 全展示：templateMeta 覆盖的模板按 name 字母序，首项为 BWImageBreath（入场基元，无独立 template id）。
 * 新增模板时请在此处追加一项并维持顺序。
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
		key: "alert",
		content: (
			<>
				<BWAlertStyle imageSrc={img("images/template/scene6_15.png")} enterEffect="slideBottom" />
				<BWSubtitle position="top" text="ALERT · 重大转折/冲击结论" startFrame={0} />
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
							anchor: "财富密码",
							anchorColor: "#FF8C00",
							audioEffect: "ping",
						},
						{
							text: "那是幻觉。",
							startFrame: 28,
							durationFrames: 22,
							anchor: null,
							anchorColor: null,
							audioEffect: null,
						},
						{
							text: "持续误解就是慢性自杀。",
							startFrame: 50,
							durationFrames: 25,
							anchor: null,
							anchorColor: null,
							audioEffect: null,
						},
					]}
				/>
				<BWSubtitle position="top" text="BEAT_SEQUENCE · 节拍递进（一问一驳一锤）" startFrame={0} />
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
					content={["满意度同比大幅提升", "说明产品体验在变好"]}
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
							anchor: "供需失衡",
							anchorColor: "#111111",
							audioEffect: null,
						},
					]}
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
				<BWSubtitle position="top" text="MULTI_IMAGE · 多要素并列" startFrame={0} />
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
					content={["已经完成近八成", "剩下部分集中攻坚"]}
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
		key: "scale-balance",
		content: (
			<>
				<BWScaleBalance
					leftSrc={img("images/template/scene5_3.png")}
					rightSrc={img("images/template/scene5_4.png")}
					leftLabel="代价"
					rightLabel="收益"
					tiltDirection="right"
				/>
				<BWSubtitle position="top" text="SCALE_BALANCE · 代价 vs 收益" startFrame={0} />
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
