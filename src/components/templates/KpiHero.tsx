/**
 * KPI_HERO 模板：锚定效应，单指标或多指标（最多 4 列）大字报 + 数字滚动
 */
import React, { useMemo } from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {
	BW_TEXT,
	normalizeContent,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

/** 与 STAT_COMPARE 一致：showFrom 为 content 下标，取该条 startFrame */
const resolveBlockEnterFrame = (
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

const FONT_FOR_VISIBLE_COUNT: Record<1 | 2 | 3 | 4, number> = {
	1: 168,
	2: 132,
	3: 102,
	// 4 列时「数字 + 后缀」单行易超宽，略降主字号避免与邻列叠字
	4: 72,
};

const GAP_FOR_VISIBLE_COUNT: Record<1 | 2 | 3 | 4, number> = {
	1: 0,
	2: 36,
	3: 22,
	// 略减缝、把宽度还给单元格（总宽固定时增大每列 unitW）
	4: 12,
};

const LAYOUT_REFLOW_SPRING_FRAMES = 26;

function clampColCount(n: number): 1 | 2 | 3 | 4 {
	return Math.min(Math.max(n, 1), 4) as 1 | 2 | 3 | 4;
}

function unitWAndGap(innerW: number, n: 1 | 2 | 3 | 4): { unitW: number; g: number } {
	const g = GAP_FOR_VISIBLE_COUNT[n];
	if (n === 1) {
		return { unitW: innerW, g: 0 };
	}
	return { unitW: (innerW - (n - 1) * g) / n, g };
}

/** 第 slot 列左边缘（相对 inner 轨道） */
function leftEdgeForSlot(slot: number, n: 1 | 2 | 3 | 4, innerW: number): number {
	const { unitW, g } = unitWAndGap(innerW, n);
	return slot * (unitW + g);
}

function layoutReflowProgress(
	frame: number,
	fps: number,
	maxEnter: number,
	simultaneous: boolean,
): number {
	if (simultaneous) {
		return 1;
	}
	return spring({
		frame: frame - maxEnter,
		fps,
		config: { damping: 18, stiffness: 200 },
		durationInFrames: LAYOUT_REFLOW_SPRING_FRAMES,
	});
}

type AnimatedCellLayout = {
	left: number;
	width: number;
};

function computeAnimatedCellLayout(args: {
	slot: number;
	innerW: number;
	frame: number;
	fps: number;
	visibleEntries: Array<{ enterFrame: number }>;
}): AnimatedCellLayout {
	const { slot, innerW, frame, fps, visibleEntries } = args;
	const n = clampColCount(visibleEntries.length);
	const enterFrames = visibleEntries.map((v) => v.enterFrame);
	const maxEnter = Math.max(...enterFrames, 0);
	const minEnter = Math.min(...enterFrames);
	const simultaneous =
		visibleEntries.length > 1 && maxEnter === minEnter;
	const nPrev = simultaneous ? n : (Math.max(1, n - 1) as 1 | 2 | 3 | 4);
	const p = layoutReflowProgress(frame, fps, maxEnter, simultaneous);

	const { unitW: uwTo } = unitWAndGap(innerW, n);
	const { unitW: uwFrom } = unitWAndGap(innerW, nPrev);

	const ownEnter = visibleEntries[slot]?.enterFrame ?? 0;
	const newcomerSlots = visibleEntries
		.map((e, i) => (e.enterFrame === maxEnter ? i : -1))
		.filter((i) => i >= 0);
	const isNewcomer =
		!simultaneous &&
		n > 1 &&
		newcomerSlots.length === 1 &&
		slot === newcomerSlots[0] &&
		ownEnter === maxEnter;

	const widthTo = uwTo;
	const widthFrom = isNewcomer ? uwTo : uwFrom;
	const leftTo = leftEdgeForSlot(slot, n, innerW);

	let leftFrom: number;
	if (isNewcomer) {
		leftFrom = innerW / 2 - uwTo / 2;
	} else {
		leftFrom = leftEdgeForSlot(slot, nPrev, innerW);
	}

	const sameRect =
		Math.abs(leftFrom - leftTo) < 0.5 && Math.abs(widthFrom - widthTo) < 0.5;
	const progress = sameRect ? 1 : p;

	return {
		left: interpolate(progress, [0, 1], [leftFrom, leftTo], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
		width: interpolate(progress, [0, 1], [widthFrom, widthTo], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	};
}

export const templateMeta = {
	"name": "KPI_HERO",
	"componentExport": "BWKpiHero",
	"description":
		"适用：单指标或多指标（最多 4 列）大字报：占比、排名、研发费用等；主视觉在画布垂直水平居中。\n单指标：传 value（整数或小数）+ prefix/suffix/useGrouping，可选 label、decimalPlaces（缺省按 value 推断小数位）。\n多指标：传 blocks（1～4 项），每项 value、showFrom，可选 decimalPlaces；列数变化时已有块 left/width 弹簧过渡。\n差异：柱状对比用 STAT_COMPARE；环形进度用 PROGRESS_RING。\n参数：countDuration 为每块数字滚动 spring 时长（帧）。",
	"psychology": "锚定效应",
	"image_count": "0",
	"param_schema": {
		"type": "object",
		"properties": {
			"value": {
				"type": "number",
				"description": "单指标模式：滚动终值（整数或小数）；若提供 blocks 则可省略",
			},
			"prefix": { "type": "string", "description": "单指标：数字左侧" },
			"suffix": { "type": "string", "description": "单指标：数字右侧单位" },
			"label": {
				"type": "string",
				"description": "单指标：数字上方标签（与 blocks[].label 同视觉层级）",
			},
			"useGrouping": { "type": "boolean", "description": "单指标：千分位（小数时作用于整数部分）" },
			"decimalPlaces": {
				"type": "integer",
				"description": "单指标：小数位数，缺省按 value 自动推断",
			},
			"blocks": {
				"type": "array",
				"minItems": 1,
				"maxItems": 4,
				"description":
					"多指标：每项 value、showFrom（content 下标）；可选 prefix、suffix、label、useGrouping",
				"items": {
					"type": "object",
					"required": ["value", "showFrom"],
					"properties": {
						"value": { "type": "number", "description": "终值，整数或小数（如 2.5 万人）" },
						"decimalPlaces": {
							"type": "integer",
							"description": "小数位数，缺省按 value 自动推断（如 2.5→1）",
						},
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "该块出现时机：content 下标，取该条 startFrame",
						},
						"prefix": { "type": "string" },
						"suffix": { "type": "string" },
						"label": { "type": "string", "description": "数字上方标签（多列时字号已加大）" },
						"useGrouping": { "type": "boolean" },
					},
				},
			},
			"countDuration": {
				"type": "integer",
				"description": "数字从 0 滚到目标值的 spring 时长（帧），默认 28",
			},
		},
		"required": [],
	},
	"example": {
		"template": "KPI_HERO",
		"param": {
			"blocks": [
				{ "value": 87, "suffix": "%", "label": "满意度", "showFrom": 0 },
				{ "value": 62, "suffix": "%", "label": "留存", "showFrom": 1 },
			],
		},
	},
} as const;

/** 多列模式下每一项 */
export interface KpiHeroBlockItem {
	value: number;
	prefix?: string;
	suffix?: string;
	/** 数字上方短标签（多列时便于区分） */
	label?: string;
	/** content 下标：从该条 startFrame 起显示本数值块 */
	showFrom: number;
	useGrouping?: boolean;
	/** 小数位数；缺省按 value 自动推断 */
	decimalPlaces?: number;
}

export interface BWKpiHeroProps extends TemplateBaseProps, TemplateAnchorsProps {
	/** 单指标模式；若传入 blocks 且非空则忽略 */
	value?: number;
	prefix?: string;
	suffix?: string;
	/** 单指标时在数字上方显示的标签（多列请用 blocks[].label） */
	label?: string;
	/** 单指标模式下的千分位 */
	useGrouping?: boolean;
	/** 单指标：小数位数，缺省按 value 自动推断 */
	decimalPlaces?: number;
	countDuration?: number;
	/** 多指标：1～4 项，优先于单指标的 value */
	blocks?: KpiHeroBlockItem[];
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

/** 主数值区（prefix + 数字 + suffix）固定强调色 */
const KPI_VALUE_RED = "#DC2626";

const MAX_DECIMAL_PLACES = 8;

/** 未传 decimalPlaces 时，由终值推断小数位数（整数为 0） */
function inferDecimalPlaces(value: number): number {
	if (!Number.isFinite(value)) {
		return 0;
	}
	const r = Math.round(value);
	if (Math.abs(value - r) < 1e-9) {
		return 0;
	}
	const s = String(value);
	if (/[eE]/.test(s)) {
		return inferDecimalPlaces(Number(value.toFixed(MAX_DECIMAL_PLACES)));
	}
	const dot = s.indexOf(".");
	if (dot === -1) {
		return 0;
	}
	return Math.min(MAX_DECIMAL_PLACES, Math.max(0, s.length - dot - 1));
}

function formatKpiNumber(
	n: number,
	useGrouping: boolean,
	decimalPlaces: number,
): string {
	if (!Number.isFinite(n)) {
		return "0";
	}
	const rounded = Number(n.toFixed(Math.max(0, decimalPlaces)));
	if (decimalPlaces <= 0) {
		const v = Math.round(rounded);
		if (!useGrouping) {
			return String(v);
		}
		return v.toLocaleString("zh-CN", {
			useGrouping: true,
			maximumFractionDigits: 0,
		});
	}
	return rounded.toLocaleString("zh-CN", {
		useGrouping,
		minimumFractionDigits: decimalPlaces,
		maximumFractionDigits: decimalPlaces,
	});
}

type NormalizedBlock = {
	value: number;
	prefix: string;
	suffix: string;
	label?: string;
	showFrom: number;
	useGrouping: boolean;
	decimalPlaces: number;
};

const KpiHeroValueCell: React.FC<{
	block: NormalizedBlock;
	enterFrame: number;
	frame: number;
	fps: number;
	countDuration: number;
	fontSize: number;
	layout: AnimatedCellLayout;
}> = ({ block, enterFrame, frame, fps, countDuration, fontSize, layout }) => {
	const localFrame = frame - enterFrame;
	if (localFrame < 0) {
		return null;
	}

	const entrance = spring({
		frame: localFrame,
		fps,
		config: { damping: 11, stiffness: 320 },
		durationInFrames: 22,
	});

	const countProgress = spring({
		frame: localFrame,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: countDuration,
	});

	const raw = interpolate(countProgress, [0, 1], [0, block.value], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const displayNumber = formatKpiNumber(
		raw,
		block.useGrouping,
		block.decimalPlaces,
	);

	const translateY = interpolate(
		entrance,
		[0, 1],
		[72, 0],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const scale = interpolate(
		entrance,
		[0, 1],
		[0.5, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const rotate = interpolate(
		entrance,
		[0, 1],
		[-7, 0],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const opacity = interpolate(
		entrance,
		[0, 0.28],
		[0, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);

	return (
		<div
			style={{
				position: "absolute",
				left: layout.left,
				width: layout.width,
				bottom: 0,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-end",
				minWidth: 0,
				boxSizing: "border-box",
				// 单行 nowrap 时内容可能略超列宽，必须裁在列内，否则会与邻列叠字
				overflowX: "hidden",
				overflowY: "visible",
			}}
		>
			<div
				style={{
					width: "100%",
					maxWidth: "100%",
					minWidth: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "flex-end",
					opacity,
					transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
					transformOrigin: "50% 80%",
					fontFamily: fontStack,
				}}
			>
			{block.label ? (
				<div
					style={{
						fontSize: Math.max(40, fontSize * 0.38),
						fontWeight: 800,
						color: BW_TEXT,
						marginBottom: 14,
						textAlign: "center",
						lineHeight: 1.25,
						padding: "0 6px",
						letterSpacing: "0.02em",
					}}
				>
					{block.label}
				</div>
			) : null}
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "baseline",
					flexWrap: "nowrap",
					columnGap: "0.1em",
					maxWidth: "100%",
					minWidth: 0,
					boxSizing: "border-box",
					padding: "0 2px",
					fontSize,
					fontWeight: 900,
					letterSpacing: "0.01em",
					textAlign: "center",
					whiteSpace: "nowrap",
				}}
			>
				{block.prefix ? (
					<span
						style={{
							fontSize: "0.42em",
							color: KPI_VALUE_RED,
						}}
					>
						{block.prefix}
					</span>
				) : null}
				<span style={{ color: KPI_VALUE_RED }}>{displayNumber}</span>
				{block.suffix ? (
					<span
						style={{
							fontSize: "0.42em",
							lineHeight: 1,
							color: BW_TEXT,
							fontWeight: 800,
						}}
					>
						{block.suffix}
					</span>
				) : null}
			</div>
			</div>
		</div>
	);
};

export const BWKpiHero: React.FC<BWKpiHeroProps> = ({
	value,
	prefix = "",
	suffix = "",
	label,
	useGrouping = false,
	decimalPlaces: decimalPlacesProp,
	countDuration = 28,
	blocks,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width } = useVideoConfig();
	const contentItems = normalizeContent(content);

	const normalizedBlocks: NormalizedBlock[] = useMemo(() => {
		if (blocks && blocks.length > 0) {
			return blocks.slice(0, 4).map((b) => {
				const dp =
					b.decimalPlaces !== undefined && Number.isInteger(b.decimalPlaces)
						? Math.min(MAX_DECIMAL_PLACES, Math.max(0, b.decimalPlaces))
						: inferDecimalPlaces(b.value);
				return {
					value: b.value,
					prefix: b.prefix ?? "",
					suffix: b.suffix ?? "",
					label: b.label,
					showFrom: b.showFrom,
					useGrouping: Boolean(b.useGrouping),
					decimalPlaces: dp,
				};
			});
		}
		if (value !== undefined && value !== null) {
			const dp =
				decimalPlacesProp !== undefined && Number.isInteger(decimalPlacesProp)
					? Math.min(MAX_DECIMAL_PLACES, Math.max(0, decimalPlacesProp))
					: inferDecimalPlaces(value);
			return [
				{
					value,
					prefix,
					suffix,
					label,
					showFrom: 0,
					useGrouping,
					decimalPlaces: dp,
				},
			];
		}
		return [];
	}, [blocks, value, prefix, suffix, label, useGrouping, decimalPlacesProp]);

	const visibleEntries = normalizedBlocks
		.map((block, index) => {
			const enterFrame = resolveBlockEnterFrame(block.showFrom, contentItems);
			return { block, index, enterFrame };
		})
		.filter(({ enterFrame }) => frame >= enterFrame);

	const visibleCount = Math.min(
		Math.max(visibleEntries.length, 1),
		4,
	) as 1 | 2 | 3 | 4;
	const fontSize = FONT_FOR_VISIBLE_COUNT[visibleCount];
	const horizontalPad = 0.06;
	const innerW = width * (1 - 2 * horizontalPad);

	return (
		<AbsoluteFill style={{ ...style }}>
			<div
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: `0 ${horizontalPad * 100}%`,
					boxSizing: "border-box",
				}}
			>
				<div
					style={{
						position: "relative",
						width: innerW,
						minHeight: 260,
						maxWidth: "100%",
					}}
				>
					{visibleEntries.map(({ block, index, enterFrame }, slot) => {
						const layout = computeAnimatedCellLayout({
							slot,
							innerW,
							frame,
							fps,
							visibleEntries,
						});
						return (
							<KpiHeroValueCell
								key={index}
								block={block}
								enterFrame={enterFrame}
								frame={frame}
								fps={fps}
								countDuration={countDuration}
								fontSize={fontSize}
								layout={layout}
							/>
						);
					})}
				</div>
			</div>

			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
