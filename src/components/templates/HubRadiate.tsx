/**
 * HUB_RADIATE：一核发散——先出情境核，再连线发散到 2～4 个并列结果/反应。
 * 与 PEER_INDUCT（多前提→归纳）互为镜像；showFrom 语义为 content 下标（0-based）。
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
	type ContentItem,
	type HubRadiateHubItem,
	type HubRadiateRayItem,
	type ImageEnterEffect,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";
import { FirefliesBackdrop } from "./FirefliesBackdrop";
import { useRemotionLayoutMetricsOverride } from "../RemotionLayoutMetricsContext";

export const templateMeta = {
	"name": "HUB_RADIATE",
	"componentExport": "BWHubRadiate",
	"description":
		"适用：「当/在…时，既不会…也不会…」「面对…，第一反应不是…也不是…」等——先立一个情境核，再并列展开 2～4 个结果/反应；视觉上中心核先出，连线向外生长到各支点图。\n差异：纯并列无中心核用 PANEL_GRID；多前提最后归纳收束用 PEER_INDUCT（本模板为其镜像）；文字层次树用 TREE_DIAGRAM。\n口播条为 item 外层 content[]；hub.showFrom 默认 0；rays[i].showFrom 可省略（默认与下标对齐）。\n参数：hub（必填 imageSrc、可选 enterEffect/showFrom）；rays（2～4 项，每项 imageSrc、可选 enterEffect/showFrom）。",
	"chinese_name": "一核发散",
	"image_count": "3-5",
	"param_schema": {
		"type": "object",
		"properties": {
			"hub": {
				"type": "object",
				"required": ["imageSrc"],
				"description": "情境核：居中主图，先于射线出现",
				"properties": {
					"imageSrc": {
						"type": "string",
						"format": "image_prompt",
						"description": "情境核配图",
					},
					"enterEffect": {
						"type": "string",
						"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
						"default": "zoomIn",
					},
					"showFrom": {
						"type": "content_index",
						"minimum": 0,
						"description": "从该条口播起显示核图；省略为 0",
					},
				},
			},
			"rays": {
				"type": "array",
				"minItems": 2,
				"maxItems": 4,
				"description":
					"发散支点：横排在核下方；每项 imageSrc、可选 enterEffect、可选 showFrom（content 0-based）",
				"items": {
					"type": "object",
					"required": ["imageSrc"],
					"properties": {
						"imageSrc": {
							"type": "string",
							"format": "image_prompt",
							"description": "射线支点配图",
						},
						"enterEffect": {
							"type": "string",
							"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
							"default": "fadeIn",
						},
						"showFrom": {
							"type": "content_index",
							"minimum": 0,
							"description": "从该条口播起显示本图与到核的连线；省略则与 rays 下标对齐",
						},
					},
				},
			},
		},
		"required": ["hub", "rays"],
	},
	"example": {
		"template": "HUB_RADIATE",
		"param": {
			"hub": {
				"imageSrc": "面对巨大落差却别过脸去的人群简笔画",
				"enterEffect": "zoomIn",
				"showFrom": 0,
			},
			"rays": [
				{ "imageSrc": "脑边打结线团拨不开迷雾的简笔画", "showFrom": 2, "enterEffect": "fadeIn" },
				{ "imageSrc": "背对裂缝、脚边倒着工具箱的简笔画", "showFrom": 3, "enterEffect": "slideLeft" },
			],
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

function clampContentIndex(raw: unknown, maxContentIndex: number, fallback: number): number {
	if (raw === undefined || raw === null || Number.isNaN(Number(raw))) return fallback;
	return Math.min(Math.max(0, Math.floor(Number(raw))), maxContentIndex);
}

function effectiveRayShowFrom(
	rays: HubRadiateRayItem[],
	stageIndex: number,
	maxContentIndex: number,
): number {
	return clampContentIndex(rays[stageIndex]?.showFrom, maxContentIndex, stageIndex);
}

function visibleRayCountForContentIdx(
	contentIdx: number,
	n: number,
	rays: HubRadiateRayItem[],
	maxContentIndex: number,
): number {
	let count = 0;
	for (let i = 0; i < n; i++) {
		if (contentIdx >= effectiveRayShowFrom(rays, i, maxContentIndex)) count++;
	}
	return count;
}

function getRayLayoutAnchorStartFrame(
	items: ContentItem[],
	contentActiveIdx: number,
	n: number,
	rays: HubRadiateRayItem[],
	maxContentIndex: number,
): number {
	if (items.length === 0 || n <= 0) return 0;
	const vc = visibleRayCountForContentIdx(contentActiveIdx, n, rays, maxContentIndex);
	let j = contentActiveIdx;
	while (
		j > 0 &&
		visibleRayCountForContentIdx(j - 1, n, rays, maxContentIndex) === vc
	) {
		j--;
	}
	return items[j]?.startFrame ?? 0;
}

const RAY_LAYOUTS: Record<number, Array<{ left: string; maxWidth: string; maxHeight: string }>> = {
	1: [{ left: "50%", maxWidth: "30%", maxHeight: "22%" }],
	2: [
		{ left: "30%", maxWidth: "28%", maxHeight: "22%" },
		{ left: "70%", maxWidth: "28%", maxHeight: "22%" },
	],
	3: [
		{ left: "18%", maxWidth: "22%", maxHeight: "20%" },
		{ left: "50%", maxWidth: "22%", maxHeight: "20%" },
		{ left: "82%", maxWidth: "22%", maxHeight: "20%" },
	],
	4: [
		{ left: "14%", maxWidth: "18%", maxHeight: "18%" },
		{ left: "38%", maxWidth: "18%", maxHeight: "18%" },
		{ left: "62%", maxWidth: "18%", maxHeight: "18%" },
		{ left: "86%", maxWidth: "18%", maxHeight: "18%" },
	],
};

function getRayLayout(count: number, index: number) {
	const capped = Math.min(Math.max(count, 1), 4);
	const layouts = RAY_LAYOUTS[capped];
	return layouts[Math.min(Math.max(0, index), layouts.length - 1)];
}

function percentToNumber(value: string): number {
	return Number(value.replace("%", ""));
}

/** 与 RaySlot 相同的左右位插值：1→2 / 2→3 时图与线共用，避免线端点瞬移 */
function interpolateRayLeftPct(
	visibleCount: number,
	slotIndex: number,
	layoutProgress: number,
): number {
	const currentLayout = getRayLayout(visibleCount, slotIndex);
	const prevCount = Math.max(1, visibleCount - 1);
	const prevLayouts = RAY_LAYOUTS[Math.min(prevCount, 4)];
	const prevLayout =
		slotIndex < prevLayouts.length ? prevLayouts[slotIndex] : currentLayout;
	return interpolate(
		layoutProgress,
		[0, 1],
		[percentToNumber(prevLayout.left), percentToNumber(currentLayout.left)],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
}

/** 核图：射线出现前居中；出现后上移 */
const HUB_TOP_SOLO_PCT = 48;
const HUB_TOP_WITH_RAYS_PCT = 30;
const RAY_ROW_TOP_PCT = 72;
/** 连线：核下缘 → 射线行上缘 */
const HUB_CONNECT_LINE_Y_SOLO_RATIO = 0.58;
const HUB_CONNECT_LINE_Y_WITH_RAYS_RATIO = 0.42;
const RAY_CONNECT_LINE_Y_RATIO = 0.62;

const HubSlot: React.FC<{
	imageSrc: string;
	enterEffect: ImageEnterEffect;
	segmentStartFrame: number;
	hubTopPct: number;
	hubScale: number;
}> = ({ imageSrc, enterEffect, segmentStartFrame, hubTopPct, hubScale }) => {
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
		durationInFrames: 20,
	});
	const introScale = interpolate(introProgress, [0, 1], [0.86, 1], {
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
				top: `${hubTopPct}%`,
				maxWidth: "34%",
				maxHeight: "28%",
				objectFit: "contain",
				...enterStyle,
				transform: `${enterStyle.transform ?? "translate(-50%, -50%)"} scale(${introScale * hubScale})`,
				opacity: finalOpacity,
			}}
		/>
	);
};

const RaySlot: React.FC<{
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
	const currentLayout = getRayLayout(visibleCount, imageIndex);
	const prevCount = Math.max(1, visibleCount - 1);
	const prevLayouts = RAY_LAYOUTS[Math.min(prevCount, 4)];
	const prevLayout =
		imageIndex < prevLayouts.length ? prevLayouts[imageIndex] : currentLayout;
	const left = interpolateRayLeftPct(visibleCount, imageIndex, layoutProgress);
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
	const introTranslateY = interpolate(introProgress, [0, 1], [70, 0], {
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
				top: `${RAY_ROW_TOP_PCT}%`,
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

const RadiateConnectorLayer: React.FC<{
	width: number;
	height: number;
	rayCenterXs: number[];
	rayEnterFrames: number[];
	hubLineY: number;
}> = ({ width, height, rayCenterXs, rayEnterFrames, hubLineY }) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	if (rayCenterXs.length === 0) return null;

	const y1 = hubLineY;
	const y2 = height * RAY_CONNECT_LINE_Y_RATIO;
	const cx = width * 0.5;

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
			{rayCenterXs.map((x, i) => {
				const lineEnterFrame = rayEnterFrames[i] ?? 0;
				const drawLocal = Math.max(0, frame - lineEnterFrame);
				const lineDrawProgress = spring({
					frame: drawLocal,
					fps,
					config: { damping: 200, stiffness: 120 },
					durationInFrames: 32,
				});
				const strokeDashoffset = interpolate(
					lineDrawProgress,
					[0, 1],
					[1, 0],
					{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
				);
				/** 控制点随端点平滑移动，避免 1→2 / 2→3 时弧线折跳 */
				const controlY = (y1 + y2) / 2 + height * 0.01;
				const midX = (cx + x) / 2;
				return (
					<path
						key={i}
						pathLength={1}
						d={`M ${cx} ${y1} Q ${midX} ${controlY} ${x} ${y2}`}
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

export interface BWHubRadiateProps extends TemplateBaseProps, TemplateAnchorsProps {
	hub: HubRadiateHubItem;
	rays: HubRadiateRayItem[];
}

export const BWHubRadiate: React.FC<BWHubRadiateProps> = ({
	hub,
	rays,
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
	const n = Math.min(rays.length, 4);
	const maxContentIndex = Math.max(0, items.length - 1);
	const contentActiveIdx = getActiveContentIndex(items, frame);

	const hubShowFrom = clampContentIndex(hub.showFrom, maxContentIndex, 0);
	const hubVisible = items.length > 0 && contentActiveIdx >= hubShowFrom;

	const effectiveRayShowFromIndex = (i: number) =>
		effectiveRayShowFrom(rays, i, maxContentIndex);

	const visibleRayIndices =
		n > 0
			? Array.from({ length: n }, (_, i) => i).filter(
					(i) => contentActiveIdx >= effectiveRayShowFromIndex(i),
				)
			: [];
	const visibleRayCount = visibleRayIndices.length;
	const anyRayVisible = visibleRayCount > 0;

	const firstRayShowFrom =
		n > 0
			? Math.min(...Array.from({ length: n }, (_, i) => effectiveRayShowFromIndex(i)))
			: maxContentIndex;
	const firstRayStartFrame = items[firstRayShowFrom]?.startFrame ?? 0;
	const hubShiftLocal = frame - firstRayStartFrame;
	const hubShiftSpring =
		!anyRayVisible || hubShiftLocal < 0
			? 0
			: spring({
					frame: hubShiftLocal,
					fps,
					config: { damping: 98, stiffness: 200 },
					durationInFrames: 22,
				});
	const hubTopPct = interpolate(
		hubShiftSpring,
		[0, 1],
		[HUB_TOP_SOLO_PCT, HUB_TOP_WITH_RAYS_PCT],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const hubScale = interpolate(hubShiftSpring, [0, 1], [1, 0.88], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const hubLineY = interpolate(
		hubShiftSpring,
		[0, 1],
		[layoutHeight * HUB_CONNECT_LINE_Y_SOLO_RATIO, layoutHeight * HUB_CONNECT_LINE_Y_WITH_RAYS_RATIO],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);

	const layoutStartFrame =
		n > 0
			? getRayLayoutAnchorStartFrame(items, contentActiveIdx, n, rays, maxContentIndex)
			: 0;
	const layoutProgress = spring({
		frame: frame - layoutStartFrame,
		fps,
		config: { damping: 200, stiffness: 140 },
		durationInFrames: 28,
	});

	const rayCenterXs = visibleRayIndices.map((_rayIndex, slotIndex) => {
		const leftPct = interpolateRayLeftPct(visibleRayCount, slotIndex, layoutProgress);
		return (layoutWidth * leftPct) / 100;
	});
	const rayEnterFrames = visibleRayIndices.map(
		(rayIndex) => items[effectiveRayShowFromIndex(rayIndex)]?.startFrame ?? 0,
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
			<FirefliesBackdrop opacity={firefliesOpacity} seed={`HUB_RADIATE-${firstStartFrame}`} />
			{hubVisible && (
				<HubSlot
					imageSrc={hub.imageSrc}
					enterEffect={hub.enterEffect ?? "zoomIn"}
					segmentStartFrame={items[hubShowFrom]?.startFrame ?? 0}
					hubTopPct={hubTopPct}
					hubScale={hubScale}
				/>
			)}
			{visibleRayIndices.map((rayIndex, slotIndex) => (
				<RaySlot
					key={rayIndex}
					imageSrc={rays[rayIndex].imageSrc}
					enterEffect={rays[rayIndex].enterEffect ?? "fadeIn"}
					segmentStartFrame={items[effectiveRayShowFromIndex(rayIndex)].startFrame}
					imageIndex={slotIndex}
					visibleCount={visibleRayCount}
					layoutProgress={layoutProgress}
				/>
			))}
			<RadiateConnectorLayer
				width={layoutWidth}
				height={layoutHeight}
				rayCenterXs={rayCenterXs}
				rayEnterFrames={rayEnterFrames}
				hubLineY={hubLineY}
			/>

			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
