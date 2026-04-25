/**
 * STAT_COMPARE 模板：2～6 项 KPI 柱状对比；条形高度反映相对大小；
 * 按 showFrom 绑定 content 各句起始帧依次出现，已出现的柱体组整体水平居中。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	BW_TEXT,
	normalizeContent,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

/** 与 SPLIT_COMPARE 一致：showFrom 为 content 下标，取该条 startFrame；越界或非整数则从 0 帧起 */
const resolveBarEnterFrame = (
	showFrom: number,
	contentItems: ReturnType<typeof normalizeContent>,
): number => {
	if (
		Number.isInteger(showFrom) &&
		showFrom >= 0 &&
		showFrom < contentItems.length
	) {
		const cue = contentItems[showFrom];
		if (cue && typeof cue.startFrame === "number") {
			return cue.startFrame;
		}
	}
	return 0;
};

const BAR_COLORS = ["#C53030", "#276749", "#2B6CB0", "#DD6B20", "#805AD5", "#319795"] as const;

/** 单体「砸入」入场弹簧（帧） */
const BAR_ENTRANCE_SPRING_FRAMES = 22;
/** 入场开始后若干帧再启动柱高与数字，保证先 0 再涨 */
const BAR_FILL_DELAY_FRAMES = 18;
/** 柱高与数字滚至目标 */
const BAR_FILL_SPRING_FRAMES = 42;

export const templateMeta = {
	"name": "STAT_COMPARE",
	"componentExport": "BWStatCompare",
	"description":
		"适用：2～6 项 KPI 并列对比；条形高度反映相对大小；bars 每条必填 showFrom（content 下标），从对应口播句的 startFrame 起显示该柱，已出现的柱体作为一组始终画布水平居中。\n差异：左右场景图对比用 SPLIT_COMPARE；单数字强调用 KPI_HERO。\n参数：bars（2～6 条：label、value、showFrom）；可选 anchors（与 bars.showFrom 同为 content 下标）；兼容旧版 leftValue/rightValue/leftLabel/rightLabel（两柱同帧入场）。",
	"psychology": "对比效应",
	"image_count": "0",
	"param_schema": {
		"type": "object",
		"properties": {
			"bars": {
				"type": "array",
				"minItems": 2,
				"maxItems": 6,
				"description":
					"多条柱状对比；每项须含 label、value（非负整数）、showFrom（content 下标），从该条 startFrame 起显示本柱",
				"items": {
					"type": "object",
					"required": ["label", "value", "showFrom"],
					"properties": {
						"label": { "type": "string", "description": "短标签" },
						"value": { "type": "integer", "description": "数值（非负整数）" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description":
								"该柱出现时机：content 数组下标（0-based），取该条 startFrame 作为入场起点",
						},
					},
				},
			},
			"leftValue": { "type": "integer", "description": "左侧数值（非负整数），旧版两柱模式" },
			"rightValue": { "type": "integer", "description": "右侧数值（非负整数），旧版两柱模式" },
			"leftLabel": { "type": "string", "description": "左侧标签" },
			"rightLabel": { "type": "string", "description": "右侧标签" },
			"anchors": {
				"type": "array",
				"description":
					"可选；顶部锚点词列表，showFrom 为 content 下标（取该条 startFrame），与 KPI_HERO / DATA_TABLE 一致",
				"items": {
					"type": "object",
					"required": ["text", "showFrom"],
					"properties": {
						"text": { "type": "string", "description": "锚点词文案" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 下标（0-based），非帧数",
						},
						"color": { "type": "string" },
						"anim": {
							"type": "string",
							"enum": ["spring", "slideUp", "popIn", "highlight"],
						},
						"audioEffect": {
							"type": "string",
							"enum": ["impact_thud", "ping", "woosh"],
						},
					},
				},
			},
		},
		"required": [],
	},
	"example": {
		"template": "STAT_COMPARE",
		"param": {
			"bars": [
				{ "label": "去年", "value": 32, "showFrom": 0 },
				{ "label": "今年", "value": 68, "showFrom": 1 },
			],
		},
	},
} as const;

export interface StatCompareBarItem {
	label: string;
	value: number;
	/** content 下标（0-based），该柱从对应条的 startFrame 起显示 */
	showFrom: number;
}

export interface BWStatCompareProps extends TemplateBaseProps, TemplateAnchorsProps {
	/** 2～6 条柱状数据；与 content 时间轴配合时可逐条 reveal */
	bars?: StatCompareBarItem[];
	leftValue?: number;
	rightValue?: number;
	leftLabel?: string;
	rightLabel?: string;
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

type ResolvedBar = {
	label: string;
	value: number;
	color: string;
	/** bars 模式：content 下标；旧版双柱不用此字段 */
	showFrom?: number;
	/** 旧版 param：两柱始终同帧出现 */
	legacySimultaneous?: boolean;
};

function buildResolvedBars(props: BWStatCompareProps): ResolvedBar[] {
	const { bars, leftValue = 0, rightValue = 0, leftLabel = "", rightLabel = "" } = props;
	if (bars && Array.isArray(bars) && bars.length >= 2) {
		return bars.slice(0, 6).map((b, i) => ({
			label: typeof b.label === "string" ? b.label : "",
			value: Math.max(0, Math.round(Number(b.value) || 0)),
			showFrom:
				typeof b.showFrom === "number" && Number.isInteger(b.showFrom)
					? b.showFrom
					: 0,
			color: BAR_COLORS[i % BAR_COLORS.length]!,
		}));
	}
	return [
		{
			label: leftLabel,
			value: Math.max(0, Math.round(Number(leftValue) || 0)),
			color: BAR_COLORS[0]!,
			legacySimultaneous: true,
		},
		{
			label: rightLabel,
			value: Math.max(0, Math.round(Number(rightValue) || 0)),
			color: BAR_COLORS[1]!,
			legacySimultaneous: true,
		},
	];
}

function getBarEnterFrame(
	b: ResolvedBar,
	contentItems: ReturnType<typeof normalizeContent>,
): number {
	if (b.legacySimultaneous) {
		return 0;
	}
	const idx =
		typeof b.showFrom === "number" && Number.isInteger(b.showFrom) ? b.showFrom : 0;
	return resolveBarEnterFrame(idx, contentItems);
}

export const BWStatCompare: React.FC<BWStatCompareProps> = (props) => {
	const { content, anchors, audioSrc, children, style } = props;
	const frame = useCurrentFrame();
	const { fps, width } = useVideoConfig();
	const contentItems = normalizeContent(content);

	const model = buildResolvedBars(props);
	const maxVal = Math.max(1, ...model.map((b) => b.value));

	const visibleBars = model
		.map((b, origIndex) => ({
			...b,
			origIndex,
			enterFrame: getBarEnterFrame(b, contentItems),
		}))
		.filter((b) => frame >= b.enterFrame);

	const nVis = visibleBars.length;
	const maxGap = width * 0.06;
	const gap = Math.max(12, Math.min(maxGap, width * 0.034));
	/** 列宽略收紧；柱体轨道再用 BAR_TRACK_WIDTH_RATIO 变瘦 */
	const colW = Math.min(
		300,
		Math.max(88, (width * 0.9 - Math.max(0, nVis - 1) * gap) / Math.max(1, nVis)),
	);
	const barTrackWidthRatio = 0.58;

	return (
		<AbsoluteFill style={{ ...style }}>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "center",
					gap,
					width: "92%",
					minHeight: 400,
				}}
			>
				{visibleBars.map((b) => {
					const localFrame = frame - b.enterFrame;

					const entranceP = spring({
						frame: localFrame,
						fps,
						config: { damping: 9, stiffness: 210, mass: 0.62 },
						durationInFrames: BAR_ENTRANCE_SPRING_FRAMES,
					});
					const liftPx = interpolate(entranceP, [0, 1], [88, 0], {
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					});
					const punchScale = interpolate(entranceP, [0, 0.5, 1], [0.48, 1.12, 1], {
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					});
					const tiltDeg = interpolate(entranceP, [0, 1], [-6, 0], {
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					});
					const wrapOpacity = interpolate(entranceP, [0, 0.22], [0, 1], {
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					});

					const fillT = localFrame - BAR_FILL_DELAY_FRAMES;
					const fillP = spring({
						frame: fillT,
						fps,
						config: { damping: 14, stiffness: 92, mass: 0.88 },
						durationInFrames: BAR_FILL_SPRING_FRAMES,
					});
					const targetHPct = (b.value / maxVal) * 100;
					const barH =
						fillT < 0
							? 0
							: interpolate(fillP, [0, 1], [0, targetHPct], {
									extrapolateLeft: "clamp",
									extrapolateRight: "clamp",
								});
					const shown =
						fillT < 0
							? 0
							: Math.round(
									interpolate(fillP, [0, 1], [0, b.value], {
										extrapolateLeft: "clamp",
										extrapolateRight: "clamp",
									}),
								);

					const labelOpacity = interpolate(entranceP, [0.35, 0.88], [0, 1], {
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					});

					return (
						<div
							key={b.origIndex}
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: 20,
								width: colW,
								flexShrink: 0,
								opacity: wrapOpacity,
								transform: `translateY(${liftPx}px) scale(${punchScale}) rotate(${tiltDeg}deg)`,
								transformOrigin: "50% 100%",
							}}
						>
							<div
								style={{
									fontSize: nVis >= 5 ? 48 : 60,
									fontWeight: 900,
									color: BW_TEXT,
									fontFamily: fontStack,
									fontVariantNumeric: "tabular-nums",
								}}
							>
								{shown}
							</div>
							<div
								style={{
									width: `${barTrackWidthRatio * 100}%`,
									maxWidth: Math.round(colW * barTrackWidthRatio),
									height: 280,
									backgroundColor: "rgba(0,0,0,0.06)",
									borderRadius: 16,
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-end",
									overflow: "hidden",
									alignSelf: "center",
								}}
							>
								<div
									style={{
										width: "100%",
										height: `${barH}%`,
										minHeight: barH > 0.8 ? 6 : 0,
										backgroundColor: b.color,
										borderRadius: "0 0 16px 16px",
										boxShadow:
											fillT >= 0 && fillP > 0.08 && fillP < 0.95
												? `0 0 ${Math.round(18 * (1 - fillP))}px ${b.color}55`
												: undefined,
									}}
								/>
							</div>
							<div
								style={{
									fontSize: nVis >= 5 ? 30 : 36,
									fontWeight: 700,
									color: BW_TEXT,
									textAlign: "center",
									fontFamily: fontStack,
									lineHeight: 1.15,
									opacity: labelOpacity,
								}}
							>
								{b.label}
							</div>
						</div>
					);
				})}
			</div>

			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
