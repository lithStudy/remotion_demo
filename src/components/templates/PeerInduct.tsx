/**
 * PEER_INDUCT：同行并列前提依次出现，最后单独一行归纳收束；前提与归纳之间用连线暗示「指向」关系。
 * 时间轴与 showFrom 语义对齐 BEAT_SEQUENCE（按 content 下标，非帧号）。
 */
import React from "react";
import {
	AbsoluteFill,
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import {
	getSafeImageSrc,
	useImageEnterStyle,
	type BeatStageTone,
	type ContentItem,
	type ImageEnterEffect,
	type PeerInductConclusionItem,
	type PeerInductPremiseItem,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";
import { FirefliesBackdrop } from "./FirefliesBackdrop";
import { useRemotionLayoutMetricsOverride } from "../RemotionLayoutMetricsContext";

export const templateMeta = {
	"name": "PEER_INDUCT",
	"componentExport": "BWPeerInduct",
	"description":
		"适用：先并列铺陈 2～3 个同级要点（各配一图、随口播依次出现），最后用单独一行口播+一图做归纳收束；视觉上前提横排在上，归纳在下方居中，连线表示「共同指向结论」。\n差异：纯节拍情绪递进、无「并列→归纳」结构用 BEAT_SEQUENCE；并列块无总归纳行用 PANEL_GRID。\n口播条为 item 外层 content[]；premises[i].showFrom 对齐前提第 i 条（可省略则等于 i）；conclusion.showFrom 默认最后一条 content。\n参数：premises（2～3 项，每项 imageSrc、可选 enterEffect、可选 showFrom）；conclusion（必填 imageSrc、可选 enterEffect、showFrom、tone）。",
	"psychology": "并列前提 → 归纳收束",
	"image_count": "3-4",
	"param_schema": {
		"type": "object",
		"properties": {
			"premises": {
				"type": "array",
				"minItems": 2,
				"maxItems": 3,
				"description":
					"前提配图：横排并列；每项 imageSrc、可选 enterEffect、可选 showFrom（content 0-based）",
				"items": {
					"type": "object",
					"required": ["imageSrc"],
					"properties": {
						"imageSrc": {
							"type": "string",
							"format": "image_prompt",
							"description": "前提配图",
						},
						"enterEffect": {
							"type": "string",
							"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
							"default": "breathe",
						},
						"showFrom": {
							"type": "content_index",
							"minimum": 0,
							"description": "从该条口播起显示本图；省略则与 premises 下标 i 对齐",
						},
					},
				},
			},
			"conclusion": {
				"type": "object",
				"required": ["imageSrc"],
				"description": "归纳行：单独一图，默认对齐末条 content",
				"properties": {
					"imageSrc": {
						"type": "string",
						"format": "image_prompt",
						"description": "归纳配图",
					},
					"enterEffect": {
						"type": "string",
						"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
						"default": "zoomIn",
					},
					"showFrom": {
						"type": "content_index",
						"minimum": 0,
						"description": "从该条口播起显示归纳图与连线；省略为末条下标",
					},
					"tone": {
						"type": "string",
						"enum": ["calm", "alert"],
						"description": "归纳出现后画面整体情绪；默认 alert",
					},
				},
			},
		},
		"required": ["premises", "conclusion"],
	},
	"example": {
		"template": "PEER_INDUCT",
		"param": {
			"premises": [
				{ "imageSrc": "前提甲简笔画", "enterEffect": "fadeIn" },
				{ "imageSrc": "前提乙简笔画", "enterEffect": "fadeIn" },
				{ "imageSrc": "前提丙简笔画", "enterEffect": "breathe" },
			],
			"conclusion": { "imageSrc": "归纳收束主视觉", "enterEffect": "zoomIn", "tone": "alert" },
		},
	},
	"content_min_items": 3,
	"content_max_items": 6,
} as const;

function getActiveContentIndex(items: ContentItem[], frame: number): number {
	let idx = 0;
	for (let i = 0; i < items.length; i++) {
		if (items[i].startFrame <= frame) idx = i;
	}
	return idx;
}

function effectivePremiseShowFrom(
	premises: PeerInductPremiseItem[],
	stageIndex: number,
	maxContentIndex: number,
): number {
	const raw = premises[stageIndex]?.showFrom;
	if (raw === undefined || raw === null || Number.isNaN(Number(raw))) return stageIndex;
	return Math.min(Math.max(0, Math.floor(Number(raw))), maxContentIndex);
}

function visiblePremiseCountForContentIdx(
	contentIdx: number,
	n: number,
	premises: PeerInductPremiseItem[],
	maxContentIndex: number,
): number {
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (contentIdx >= effectivePremiseShowFrom(premises, i, maxContentIndex)) count++;
	}
	return count;
}

function getPremiseLayoutAnchorStartFrame(
	items: ContentItem[],
	contentActiveIdx: number,
	n: number,
	premises: PeerInductPremiseItem[],
	maxContentIndex: number,
): number {
	if (items.length === 0 || n <= 0) return 0;
	const vc = visiblePremiseCountForContentIdx(contentActiveIdx, n, premises, maxContentIndex);
	let j = contentActiveIdx;
	while (
		j > 0 &&
		visiblePremiseCountForContentIdx(j - 1, n, premises, maxContentIndex) === vc
	) {
		j--;
	}
	return items[j]?.startFrame ?? 0;
}

const IMAGE_LAYOUTS: Record<number, Array<{ left: string; maxWidth: string; maxHeight: string }>> = {
	1: [{ left: "50%", maxWidth: "52%", maxHeight: "34%" }],
	2: [
		{ left: "32%", maxWidth: "30%", maxHeight: "26%" },
		{ left: "68%", maxWidth: "30%", maxHeight: "26%" },
	],
	3: [
		{ left: "20%", maxWidth: "22%", maxHeight: "22%" },
		{ left: "50%", maxWidth: "22%", maxHeight: "22%" },
		{ left: "80%", maxWidth: "22%", maxHeight: "22%" },
	],
};

function getLayout(count: number, index: number) {
	const capped = Math.min(Math.max(count, 1), 3);
	return IMAGE_LAYOUTS[capped][index];
}

function percentToNumber(value: string): number {
	return Number(value.replace("%", ""));
}

/** 前提行锚点：与 translate(-50%,-50%) 配合，使前提区在归纳出现前上下居中 */
const PREMISE_ROW_TOP_PCT = 50;
/** 归纳出现后，整块前提区上移量占画布高度比例 */
const PREMISE_SHIFT_UP_RATIO = 0.11;
const CONCLUSION_TOP_PCT = 70;
/** 连线起点：前提行下缘外侧（避免从图内穿出） */
const PREMISE_CONNECT_LINE_Y_RATIO = 0.605;
/** 连线终点：归纳图上方空隙（不穿入归纳图；与 0.72 相比整体上移） */
const CONCLUSION_CONNECT_LINE_Y_RATIO = 0.638;

const PeerInductPremiseSlot: React.FC<{
	imageSrc: string;
	enterEffect: ImageEnterEffect;
	segmentStartFrame: number;
	imageIndex: number;
	visibleCount: number;
	layoutProgress: number;
}> = ({
	imageSrc,
	enterEffect,
	segmentStartFrame,
	imageIndex,
	visibleCount,
	layoutProgress,
}) => {
	const frame = useCurrentFrame();
	const { fps, width: compWidth, height: compHeight } = useVideoConfig();
	const layoutOverride = useRemotionLayoutMetricsOverride();
	const width = layoutOverride?.width ?? compWidth;
	const height = layoutOverride?.height ?? compHeight;
	const localFrame = Math.max(0, frame - segmentStartFrame);
	const enterStyle = useImageEnterStyle(enterEffect, localFrame, fps, width, height);
	const introProgress = spring({
		frame: localFrame,
		fps,
		config: { damping: 90, stiffness: 200 },
		durationInFrames: 16,
	});
	const currentLayout = getLayout(visibleCount, imageIndex);
	const prevLayout = getLayout(Math.max(1, visibleCount - 1), imageIndex) ?? currentLayout;
	const left = interpolate(
		layoutProgress,
		[0, 1],
		[percentToNumber(prevLayout.left), percentToNumber(currentLayout.left)],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const maxWidth = interpolate(
		layoutProgress,
		[0, 1],
		[percentToNumber(prevLayout.maxWidth), percentToNumber(currentLayout.maxWidth)],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const maxHeight = interpolate(
		layoutProgress,
		[0, 1],
		[percentToNumber(prevLayout.maxHeight), percentToNumber(currentLayout.maxHeight)],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const baseOpacity = typeof enterStyle.opacity === "number" ? enterStyle.opacity : 1;
	const introOpacity = interpolate(introProgress, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const introScale = interpolate(introProgress, [0, 1], [0.82, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const introTranslateY = interpolate(introProgress, [0, 1], [90, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const finalOpacity = baseOpacity * introOpacity;
	if (finalOpacity <= 0.001) return null;
	return (
		<Img
			src={getSafeImageSrc(imageSrc)}
			style={{
				position: "absolute",
				left: `${left}%`,
				top: `${PREMISE_ROW_TOP_PCT}%`,
				maxWidth: `${maxWidth}%`,
				maxHeight: `${maxHeight}%`,
				objectFit: "contain",
				...enterStyle,
				transform: `${enterStyle.transform ?? "translate(-50%, -50%)"} translateY(${introTranslateY}px) scale(${introScale})`,
				opacity: finalOpacity,
			}}
		/>
	);
};

const PeerInductConclusionSlot: React.FC<{
	imageSrc: string;
	enterEffect: ImageEnterEffect;
	segmentStartFrame: number;
}> = ({ imageSrc, enterEffect, segmentStartFrame }) => {
	const frame = useCurrentFrame();
	const { fps, width: compWidth, height: compHeight } = useVideoConfig();
	const layoutOverride = useRemotionLayoutMetricsOverride();
	const width = layoutOverride?.width ?? compWidth;
	const height = layoutOverride?.height ?? compHeight;
	const localFrame = Math.max(0, frame - segmentStartFrame);
	const enterStyle = useImageEnterStyle(enterEffect, localFrame, fps, width, height);
	const introProgress = spring({
		frame: localFrame,
		fps,
		config: { damping: 88, stiffness: 200 },
		durationInFrames: 22,
	});
	const introScale = interpolate(introProgress, [0, 1], [0.88, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const introOpacity = interpolate(introProgress, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const baseOpacity = typeof enterStyle.opacity === "number" ? enterStyle.opacity : 1;
	const finalOpacity = baseOpacity * introOpacity;
	if (finalOpacity <= 0.001) return null;
	return (
		<Img
			src={getSafeImageSrc(imageSrc)}
			style={{
				position: "absolute",
				left: "50%",
				top: `${CONCLUSION_TOP_PCT}%`,
				maxWidth: "30%",
				maxHeight: "20%",
				objectFit: "contain",
				...enterStyle,
				transform: `${enterStyle.transform ?? "translate(-50%, -50%)"} scale(${introScale})`,
				opacity: finalOpacity,
			}}
		/>
	);
};

const InductConnectorLayer: React.FC<{
	width: number;
	height: number;
	premiseCenterXs: number[];
	conclusionVisible: boolean;
	lineEnterFrame: number;
	premiseBlockTranslateY: number;
}> = ({
	width,
	height,
	premiseCenterXs,
	conclusionVisible,
	lineEnterFrame,
	premiseBlockTranslateY,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	if (!conclusionVisible || premiseCenterXs.length === 0) return null;

	const y1 = height * PREMISE_CONNECT_LINE_Y_RATIO + premiseBlockTranslateY;
	const y2 = height * CONCLUSION_CONNECT_LINE_Y_RATIO;
	const cx = width * 0.5;
	/** 控制点略靠上，弧顶留在两排图之间的空白带，少压图 */
	const controlY = (y1 + y2) / 2 - height * 0.022;

	/** 每条线错开 2 帧；pathLength=1 + dashoffset 实现从起点「生长」到终点 */
	const LINE_DRAW_STAGGER_FRAMES = 2;

	return (
		<svg
			width={width}
			height={height}
			style={{
				position: "absolute",
				left: 0,
				top: 0,
				pointerEvents: "none",
				opacity: 0.55,
			}}
		>
			{premiseCenterXs.map((x, i) => {
				const drawLocal = Math.max(0, frame - lineEnterFrame - i * LINE_DRAW_STAGGER_FRAMES);
				const lineDrawProgress = spring({
					frame: drawLocal,
					fps,
					config: { damping: 82, stiffness: 145 },
					durationInFrames: 26,
				});
				const strokeDashoffset = interpolate(
					lineDrawProgress,
					[0, 1],
					[1, 0],
					{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
				);
				return (
					<path
						key={i}
						pathLength={1}
						d={`M ${x} ${y1} Q ${(x + cx) / 2} ${controlY} ${cx} ${y2}`}
						fill="none"
						stroke="#1a1a1a"
						strokeWidth={2.2}
						strokeLinecap="round"
						strokeDasharray="1"
						strokeDashoffset={strokeDashoffset}
					/>
				);
			})}
		</svg>
	);
};

function resolveConclusionTone(conclusion: PeerInductConclusionItem): BeatStageTone {
	return conclusion.tone ?? "alert";
}

export interface BWPeerInductProps extends TemplateBaseProps, TemplateAnchorsProps {
	premises: PeerInductPremiseItem[];
	conclusion: PeerInductConclusionItem;
}

export const BWPeerInduct: React.FC<BWPeerInductProps> = ({
	premises,
	conclusion,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width: compWidth, height: compHeight } = useVideoConfig();
	const layoutOverride = useRemotionLayoutMetricsOverride();
	const layoutWidth = layoutOverride?.width ?? compWidth;
	const layoutHeight = layoutOverride?.height ?? compHeight;
	const items = normalizeContent(content);
	const n = Math.min(premises.length, items.length);
	const maxContentIndex = Math.max(0, items.length - 1);
	const contentActiveIdx = getActiveContentIndex(items, frame);

	const conclusionShowFromRaw = conclusion.showFrom;
	const conclusionShowFrom =
		conclusionShowFromRaw === undefined || conclusionShowFromRaw === null || Number.isNaN(Number(conclusionShowFromRaw))
			? maxContentIndex
			: Math.min(Math.max(0, Math.floor(Number(conclusionShowFromRaw))), maxContentIndex);

	const conclusionVisible = items.length > 0 && contentActiveIdx >= conclusionShowFrom;
	const tone = conclusionVisible ? resolveConclusionTone(conclusion) : "calm";

	const effectivePremiseShowFromIndex = (i: number) =>
		effectivePremiseShowFrom(premises, i, maxContentIndex);

	const visiblePremiseIndices =
		n > 0
			? Array.from({ length: n }, (_, i) => i).filter(
					(i) => contentActiveIdx >= effectivePremiseShowFromIndex(i),
				)
			: [];
	const visiblePremiseCount = visiblePremiseIndices.length;

	const layoutStartFrame =
		n > 0
			? getPremiseLayoutAnchorStartFrame(items, contentActiveIdx, n, premises, maxContentIndex)
			: 0;
	const layoutProgress = spring({
		frame: frame - layoutStartFrame,
		fps,
		config: { damping: 100, stiffness: 220 },
		durationInFrames: 18,
	});

	const breatheScale = 1 + Math.sin(frame * 0.075) * 0.02;
	const rootScale = tone === "alert" ? breatheScale : 1;

	const premiseCenterXs = visiblePremiseIndices.map((premiseIndex, slotIndex) => {
		const L = getLayout(visiblePremiseCount, slotIndex);
		return (layoutWidth * percentToNumber(L.left)) / 100;
	});

	const lineEnterFrame = items[conclusionShowFrom]?.startFrame ?? 0;
	const shiftLocalFrame = frame - lineEnterFrame;
	const premiseShiftSpring =
		shiftLocalFrame < 0
			? 0
			: spring({
					frame: shiftLocalFrame,
					fps,
					config: { damping: 98, stiffness: 200 },
					durationInFrames: 22,
				});
	const premiseBlockTranslateY = interpolate(
		premiseShiftSpring,
		[0, 1],
		[0, -layoutHeight * PREMISE_SHIFT_UP_RATIO],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);

	const firstStartFrame = items[0]?.startFrame ?? 0;
	const firefliesOpacity =
		firstStartFrame <= 0
			? 0
			: interpolate(frame, [0, firstStartFrame, firstStartFrame + 15], [1, 1, 0], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});

	return (
		<AbsoluteFill style={style}>
			<AbsoluteFill
				style={{
					transform: `scale(${rootScale})`,
					transformOrigin: "center center",
				}}
			>
				<FirefliesBackdrop opacity={firefliesOpacity} seed={`PEER_INDUCT-${firstStartFrame}`} />
				<AbsoluteFill
					style={{
						transform: `translateY(${premiseBlockTranslateY}px)`,
					}}
				>
					{visiblePremiseIndices.map((premiseIndex, slotIndex) => (
						<PeerInductPremiseSlot
							key={premiseIndex}
							imageSrc={premises[premiseIndex].imageSrc}
							enterEffect={premises[premiseIndex].enterEffect ?? "breathe"}
							segmentStartFrame={items[effectivePremiseShowFromIndex(premiseIndex)].startFrame}
							imageIndex={slotIndex}
							visibleCount={visiblePremiseCount}
							layoutProgress={layoutProgress}
						/>
					))}
				</AbsoluteFill>
				{conclusionVisible && (
					<PeerInductConclusionSlot
						imageSrc={conclusion.imageSrc}
						enterEffect={conclusion.enterEffect ?? "zoomIn"}
						segmentStartFrame={items[conclusionShowFrom].startFrame}
					/>
				)}
				<InductConnectorLayer
					width={layoutWidth}
					height={layoutHeight}
					premiseCenterXs={premiseCenterXs}
					conclusionVisible={conclusionVisible}
					lineEnterFrame={lineEnterFrame}
					premiseBlockTranslateY={premiseBlockTranslateY}
				/>
			</AbsoluteFill>

			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
