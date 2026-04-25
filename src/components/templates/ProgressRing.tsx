/**
 * PROGRESS_RING 模板：进度闭环感，环形占比；单组或多组（最多 4 列）
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

/** 与 KPI_HERO 一致：showFrom 为 content 下标，取该条 startFrame */
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

const GAP_FOR_VISIBLE_COUNT: Record<1 | 2 | 3 | 4, number> = {
	1: 0,
	2: 36,
	3: 22,
	4: 16,
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

const RING_SIZE: Record<1 | 2 | 3 | 4, number> = {
	1: 280,
	2: 240,
	3: 200,
	4: 168,
};

const RING_STROKE: Record<1 | 2 | 3 | 4, number> = {
	1: 18,
	2: 16,
	3: 14,
	4: 12,
};

const PCT_FONT: Record<1 | 2 | 3 | 4, number> = {
	1: 78,
	2: 64,
	3: 54,
	4: 44,
};

const LABEL_FONT: Record<1 | 2 | 3 | 4, number> = {
	1: 52,
	2: 40,
	3: 34,
	4: 28,
};

const SUBLABEL_FONT: Record<1 | 2 | 3 | 4, number> = {
	1: 34,
	2: 28,
	3: 24,
	4: 20,
};

const DEFAULT_RING_COLOR = "#2B6CB0";

export const templateMeta = {
	"name": "PROGRESS_RING",
	"componentExport": "BWProgressRing",
	"description":
		"适用：完成度、达成率、占比、进度结论；环形动效强化「走到哪一步」。\n单组：percent（0–100）+ label，可选 subLabel。\n多组：blocks（1～4 项），每项 percent、label、showFrom（content 下标），可选 subLabel、ringColor；列数变化时弹簧过渡与 KPI_HERO 一致。\n差异：单数字大字报用 KPI_HERO；两项柱状对比用 STAT_COMPARE。",
	"psychology": "目标梯度",
	"image_count": 0,
	"param_schema": {
		"type": "object",
		"properties": {
			"percent": {
				"type": "integer",
				"description": "单组模式：进度百分比 0–100；若提供 blocks 则可省略",
			},
			"label": { "type": "string", "description": "单组：主标题；多组请用 blocks[].label" },
			"subLabel": { "type": "string", "description": "单组：副标题或口径说明" },
			"blocks": {
				"type": "array",
				"minItems": 1,
				"maxItems": 4,
				"description":
					"多组：每项 percent、label、showFrom（content 下标）；可选 subLabel、ringColor",
				"items": {
					"type": "object",
					"required": ["percent", "label", "showFrom"],
					"properties": {
						"percent": { "type": "integer", "description": "0–100" },
						"label": { "type": "string" },
						"subLabel": { "type": "string" },
						"ringColor": { "type": "string", "description": "环与进度弧颜色，默认 #2B6CB0" },
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "该列出现时机：content 下标，取该条 startFrame",
						},
					},
				},
			},
		},
		"required": [],
	},
	"example": {
		"template": "PROGRESS_RING",
		"param": {
			"blocks": [
				{ "percent": 78, "label": "项目完成度", "subLabel": "Q1", "showFrom": 0 },
				{ "percent": 62, "label": "测试覆盖", "ringColor": "#059669", "showFrom": 1 },
			],
		},
	},
} as const;

/** 多列模式下每一项 */
export interface ProgressRingBlockItem {
	percent: number;
	label: string;
	subLabel?: string;
	/** 进度弧颜色，缺省为 #2B6CB0 */
	ringColor?: string;
	/** content 下标：从该条 startFrame 起显示本列 */
	showFrom: number;
}

export interface BWProgressRingProps extends TemplateBaseProps, TemplateAnchorsProps {
	/** 单组模式；若传入 blocks 且非空则忽略 */
	percent?: number;
	label?: string;
	subLabel?: string;
	/** 多组：1～4 项，优先于单组的 percent/label */
	blocks?: ProgressRingBlockItem[];
}

type NormalizedBlock = {
	percent: number;
	label: string;
	subLabel?: string;
	ringColor: string;
	showFrom: number;
};

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

const ProgressRingCell: React.FC<{
	block: NormalizedBlock;
	enterFrame: number;
	frame: number;
	fps: number;
	layout: AnimatedCellLayout;
	colCount: 1 | 2 | 3 | 4;
}> = ({ block, enterFrame, frame, fps, layout, colCount }) => {
	const localFrame = frame - enterFrame;
	if (localFrame < 0) {
		return null;
	}

	const clamped = Math.max(0, Math.min(100, block.percent));
	const ringSpring = spring({
		frame: localFrame,
		fps,
		config: { damping: 45, stiffness: 90 },
		durationInFrames: 40,
	});
	const animatedPct = interpolate(ringSpring, [0, 1], [0, clamped], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const size = RING_SIZE[colCount];
	const stroke = RING_STROKE[colCount];
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const offset = c - (animatedPct / 100) * c;

	const textOpacity = spring({
		frame: localFrame - 6,
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 16,
	});

	const pctFont = PCT_FONT[colCount];
	const labelFont = LABEL_FONT[colCount];
	const subFont = SUBLABEL_FONT[colCount];

	return (
		<div
			style={{
				position: "absolute",
				left: layout.left,
				width: layout.width,
				top: "10%",
				bottom: "14%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minWidth: 0,
				boxSizing: "border-box",
			}}
		>
			<div
				style={{
					position: "relative",
					width: size,
					height: size,
					flexShrink: 0,
				}}
			>
				<svg
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
					style={{ transform: "rotate(-90deg)" }}
				>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={r}
						fill="none"
						stroke="rgba(0,0,0,0.08)"
						strokeWidth={stroke}
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={r}
						fill="none"
						stroke={block.ringColor}
						strokeWidth={stroke}
						strokeLinecap="round"
						strokeDasharray={c}
						strokeDashoffset={offset}
					/>
				</svg>
				<div
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						textAlign: "center",
					}}
				>
					<div
						style={{
							fontSize: pctFont,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
							lineHeight: 1.1,
						}}
					>
						{Math.round(animatedPct)}%
					</div>
				</div>
			</div>

			<div
				style={{
					marginTop: 18,
					textAlign: "center",
					padding: "0 4px",
					opacity: textOpacity,
					width: "100%",
					boxSizing: "border-box",
				}}
			>
				<div
					style={{
						fontSize: labelFont,
						fontWeight: 800,
						color: BW_TEXT,
						fontFamily: fontStack,
						marginBottom: block.subLabel ? 8 : 0,
						lineHeight: 1.25,
					}}
				>
					{block.label}
				</div>
				{block.subLabel ? (
					<div
						style={{
							fontSize: subFont,
							fontWeight: 600,
							color: "rgba(17,17,17,0.65)",
							fontFamily: fontStack,
							lineHeight: 1.3,
						}}
					>
						{block.subLabel}
					</div>
				) : null}
			</div>
		</div>
	);
};

export const BWProgressRing: React.FC<BWProgressRingProps> = ({
	percent,
	label,
	subLabel,
	blocks,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { width, fps } = useVideoConfig();
	const contentItems = normalizeContent(content);

	const normalizedBlocks: NormalizedBlock[] = useMemo(() => {
		if (blocks && blocks.length > 0) {
			return blocks.slice(0, 4).map((b) => ({
				percent: b.percent,
				label: b.label,
				subLabel: b.subLabel,
				ringColor: b.ringColor?.trim() || DEFAULT_RING_COLOR,
				showFrom: b.showFrom,
			}));
		}
		if (percent !== undefined && percent !== null && label) {
			return [
				{
					percent,
					label,
					subLabel,
					ringColor: DEFAULT_RING_COLOR,
					showFrom: 0,
				},
			];
		}
		return [];
	}, [blocks, percent, label, subLabel]);

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
	const horizontalPad = 0.1;
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
						minHeight: 420,
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
							<ProgressRingCell
								key={index}
								block={block}
								enterFrame={enterFrame}
								frame={frame}
								fps={fps}
								layout={layout}
								colCount={visibleCount}
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
