/**
 * PANEL_GRID 模板：2～4 宫格并列主题（误区、维度、模块）
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	getSafeImageSrc,
	useImageEnterStyle,
	type ImageEnterEffect,
	type ImagePosition,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateDefaultAnchors } from "./TemplateAnchorsLayer";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "PANEL_GRID",
	"componentExport": "BWPanelGrid",
	"description":
		"适用：同一镜头内并列 2～4 个主题块（如三个误区、四个检查项），每块一图，随对应口播条显现。\n差异：时间演进用 TIMELINE；节拍换图用 BEAT_SEQUENCE。\n参数：panels 2～4 项，结构与 TIMELINE 的 images 类似：src（image_prompt）、showFrom（content 下标）、可选 enterEffect、position（布局弱提示，可省略）。",
	"psychology": "结构并列",
	"image_count": "2-4",
	"content_min_items": 2,
	"content_max_items": 8,
	"param_schema": {
		"type": "object",
		"properties": {
			"panels": {
				"type": "array",
				"minItems": 2,
				"maxItems": 4,
				"description": "宫格配图；showFrom 为 content 下标（0-based），在该条 startFrame 显现",
				"items": {
					"type": "object",
					"required": ["src", "showFrom"],
					"properties": {
						"src": {
							"type": "string",
							"format": "image_prompt",
							"description": "该宫格配图提示词",
						},
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 下标（0-based），非帧数",
						},
						"position": {
							"type": "string",
							"enum": ["center", "left", "right", "top", "bottom"],
							"description": "可选；弱提示，布局以宫格为准",
						},
						"enterEffect": {
							"type": "string",
							"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
							"default": "fadeIn",
						},
					},
				},
			},
		},
		"required": ["panels"],
	},
	"example": {
		"template": "PANEL_GRID",
		"param": {
			"panels": [
				{ "src": "问号堵住去路的简笔画", "showFrom": 0, "enterEffect": "zoomIn" },
				{ "src": "放大镜只看一角的简笔画", "showFrom": 1 },
				{ "src": "两人各执一词的简笔画", "showFrom": 2 },
			],
		},
	},
} as const;

export type PanelGridItem = {
	src: string;
	showFrom: number;
	enterEffect?: ImageEnterEffect;
	position?: ImagePosition;
};

export interface BWPanelGridProps extends TemplateBaseProps, TemplateAnchorsProps {
	panels: PanelGridItem[];
}

const resolvePanelStartFrame = (
	showFrom: number,
	panelIndex: number,
	contentItems: ReturnType<typeof normalizeContent>,
	staggerFallback: number,
): number => {
	if (
		typeof showFrom === "number" &&
		Number.isInteger(showFrom) &&
		showFrom >= 0 &&
		showFrom < contentItems.length
	) {
		const cue = contentItems[showFrom];
		if (cue && typeof cue.startFrame === "number") return cue.startFrame;
	}
	return panelIndex * staggerFallback;
};

/** 宫格内容区与 BWPanelGrid 外层 div 一致：用于计算各格中心相对区域中心的像素偏移 */
const getGridContentMetrics = (width: number, height: number) => {
	const marginX = Math.min(32, width * 0.04);
	const gW = width - 2 * marginX;
	const gH = height * (1 - 0.22 - 0.26);
	return { gW, gH };
};

/**
 * 从区域中心飞到该格最终位置：返回 (dx,dy)，使「格中心 + (dx,dy) = 区域中心」
 */
const getPanelCenterTravelOffset = (
	n: number,
	index: number,
	width: number,
	height: number,
): { dx: number; dy: number } => {
	const { gW, gH } = getGridContentMetrics(width, height);
	const cx = gW / 2;
	const cy = gH / 2;

	if (n === 2) {
		const gap = 20;
		const cw = (gW - gap) / 2;
		const cellCx = index === 0 ? cw / 2 : cw + gap + cw / 2;
		return { dx: cx - cellCx, dy: cy - gH / 2 };
	}

	if (n === 3) {
		const gap = 16;
		const cw = (gW - gap) / 2;
		const rowH = (gH - gap) / 2;
		if (index === 0) {
			return { dx: cx - cw / 2, dy: cy - rowH / 2 };
		}
		if (index === 1) {
			return { dx: cx - (cw + gap + cw / 2), dy: cy - rowH / 2 };
		}
		return { dx: cx - gW / 2, dy: cy - (rowH + gap + rowH / 2) };
	}

	// n === 4
	const gap = 16;
	const cw = (gW - gap) / 2;
	const ch = (gH - gap) / 2;
	const cellCenters: [number, number][] = [
		[cw / 2, ch / 2],
		[cw + gap + cw / 2, ch / 2],
		[cw / 2, ch + gap + ch / 2],
		[cw + gap + cw / 2, ch + gap + ch / 2],
	];
	const [ccx, ccy] = cellCenters[index] ?? [cx, cy];
	return { dx: cx - ccx, dy: cy - ccy };
};

const PanelCell: React.FC<{
	panel: PanelGridItem;
	startFrame: number;
	maxH: number;
	spanFullWidth?: boolean;
	panelIndex: number;
	panelCount: number;
	layoutWidth: number;
	layoutHeight: number;
}> = ({
	panel,
	startFrame,
	maxH,
	spanFullWidth,
	panelIndex,
	panelCount,
	layoutWidth,
	layoutHeight,
}) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const rel = frame - startFrame;

	// --- 入场动画可调参数（PanelCell）---
	// appear：整格（含图）透明度由 0→1，数值越小整体「显现」越快。
	// travel：图从宫格区域中心飞到各自格位的位移进度，与 appear 独立。
	//   durationInFrames — 期望在约多少帧内基本到位；越小越快（例如 12～28）。
	//   stiffness — 弹簧硬度；越大位移跟得越快、更「脆」（例如 150～320）。
	//   damping — 阻尼；越大越少回弹、越快停稳，过小会多晃几下（例如 55～100）。
	const appear = spring({
		frame: rel,
		fps,
		config: {
			damping: 72,
			stiffness: 170,
		},
		durationInFrames: 22,
	});
	const travel = spring({
		frame: rel,
		fps,
		config: {
			damping: 78,
			stiffness: 240,
		},
		durationInFrames: 18,
	});
	const opacity = interpolate(appear, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const { dx, dy } = getPanelCenterTravelOffset(panelCount, panelIndex, layoutWidth, layoutHeight);
	const ox = interpolate(travel, [0, 1], [dx, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const oy = interpolate(travel, [0, 1], [dy, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const effectStyle = useImageEnterStyle(
		panel.enterEffect ?? "fadeIn",
		Math.max(0, rel),
		fps,
		width,
		height,
		"effectOnly",
	);
	const effectTransform =
		typeof effectStyle.transform === "string" && effectStyle.transform.length > 0
			? effectStyle.transform
			: "";
	const imgTransform = `translate(-50%, -50%) translate(${ox}px, ${oy}px)${effectTransform ? ` ${effectTransform}` : ""}`;

	return (
		<div
			style={{
				opacity,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				minHeight: maxH,
				gridColumn: spanFullWidth ? "1 / -1" : undefined,
			}}
		>
			<div style={{ position: "relative", width: "88%", height: maxH }}>
				<Img
					src={getSafeImageSrc(panel.src)}
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						maxWidth: "100%",
						maxHeight: "100%",
						objectFit: "contain",
						transform: imgTransform,
					}}
				/>
			</div>
		</div>
	);
};

export const BWPanelGrid: React.FC<BWPanelGridProps> = ({
	panels,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const { height, width } = useVideoConfig();
	const items = normalizeContent(content);
	const list = (panels ?? []).slice(0, 4);
	const n = list.length;
	const stagger = 15;
	const starts = list.map((p, i) => resolvePanelStartFrame(p.showFrom, i, items, stagger));

	const maxH =
		n <= 2
			? Math.min(height * 0.22, 220)
			: n === 3
				? Math.min(height * 0.18, 180)
				: Math.min(height * 0.16, 160);

	const gridStyle: React.CSSProperties =
		n === 2
			? {
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
					gap: 20,
					alignItems: "center",
				}
			: n === 3
				? {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridTemplateRows: "auto auto",
						gap: 16,
						alignItems: "center",
					}
				: {
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridTemplateRows: "1fr 1fr",
						gap: 16,
						alignItems: "center",
					};

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: Math.min(32, width * 0.04),
					right: Math.min(32, width * 0.04),
					top: "22%",
					bottom: "26%",
					...gridStyle,
				}}
			>
				{list.map((panel, i) => (
					<PanelCell
						key={i}
						panel={panel}
						startFrame={starts[i] ?? 0}
						maxH={maxH}
						spanFullWidth={n === 3 && i === 2}
						panelIndex={i}
						panelCount={n}
						layoutWidth={width}
						layoutHeight={height}
					/>
				))}
			</div>
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
