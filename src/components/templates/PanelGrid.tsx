/**
 * PANEL_GRID 模板：2～6 宫格并列主题（误区、维度、模块）
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
	getDefaultAnchorListBottomPx,
	getSafeImageSrc,
	PANEL_GRID_ANCHOR_CLEARANCE_PX,
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
		"适用：同一镜头内并列 2～6 个主题块（如多个工具/模块清单），每块一图，随对应口播条显现。\n差异：时间演进用 TIMELINE；逐拍换图更适合 BEAT_SEQUENCE。\n参数：panels 2～6 项，每项 src（image_prompt）、showFrom（content 下标）、可选 enterEffect、position（宫格布局弱提示，可省略）。",
	"psychology": "结构并列",
	"image_count": "2-6",
	"content_min_items": 2,
	"content_max_items": 8,
	"param_schema": {
		"type": "object",
		"properties": {
			"panels": {
				"type": "array",
				"minItems": 2,
				"maxItems": 6,
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
const getGridContentMetrics = (
	width: number,
	height: number,
	topRatio = 0.22,
	bottomRatio = 0.26,
) => {
	const marginX = Math.min(32, width * 0.04);
	const gW = width - 2 * marginX;
	const gH = height * (1 - topRatio - bottomRatio);
	return { gW, gH };
};

const resolveGridSpec = (
	panelCount: number,
): { cols: number; rows: number; gap: number; shiftSecondRowStartCol?: number } => {
	// 2: 1×2；3: 2×2(最后一格跨列)；4: 2×2；5/6: 3×2
	if (panelCount <= 2) return { cols: 2, rows: 1, gap: 20 };
	if (panelCount === 3) return { cols: 2, rows: 2, gap: 16 };
	if (panelCount === 4) return { cols: 2, rows: 2, gap: 16 };
	// 5 个时，让第二行从第 2 列开始，更居中（index 3,4 -> col 1,2）
	if (panelCount === 5) return { cols: 3, rows: 2, gap: 14, shiftSecondRowStartCol: 1 };
	return { cols: 3, rows: 2, gap: 14 };
};

/**
 * 从区域中心飞到该格最终位置：返回 (dx,dy)，使「格中心 + (dx,dy) = 区域中心」
 */
const getPanelCenterTravelOffset = (
	n: number,
	index: number,
	width: number,
	height: number,
	gridTopRatio: number,
	gridBottomRatio: number,
): { dx: number; dy: number } => {
	const { gW, gH } = getGridContentMetrics(width, height, gridTopRatio, gridBottomRatio);
	const cx = gW / 2;
	const cy = gH / 2;

	const spec = resolveGridSpec(n);
	const cols = spec.cols;
	const rows = spec.rows;
	const gap = spec.gap;

	// 3 个时：保持“前两格在上，最后一格跨整行”的旧布局
	if (n === 3) {
		const cw = (gW - gap) / 2;
		const rowH = (gH - gap) / 2;
		if (index === 0) return { dx: cx - cw / 2, dy: cy - rowH / 2 };
		if (index === 1) return { dx: cx - (cw + gap + cw / 2), dy: cy - rowH / 2 };
		return { dx: cx - gW / 2, dy: cy - (rowH + gap + rowH / 2) };
	}

	const cw = (gW - gap * (cols - 1)) / cols;
	const ch = (gH - gap * (rows - 1)) / rows;
	const row = Math.floor(index / cols);
	let col = index % cols;

	if (n === 5 && row === 1 && typeof spec.shiftSecondRowStartCol === "number") {
		col = col + spec.shiftSecondRowStartCol;
	}

	const cellCx = col * (cw + gap) + cw / 2;
	const cellCy = row * (ch + gap) + ch / 2;
	return { dx: cx - cellCx, dy: cy - cellCy };
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
	gridTopRatio: number;
	gridBottomRatio: number;
}> = ({
	panel,
	startFrame,
	maxH,
	spanFullWidth,
	panelIndex,
	panelCount,
	layoutWidth,
	layoutHeight,
	gridTopRatio,
	gridBottomRatio,
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
	const { dx, dy } = getPanelCenterTravelOffset(
		panelCount,
		panelIndex,
		layoutWidth,
		layoutHeight,
		gridTopRatio,
		gridBottomRatio,
	);
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
			<div style={{ position: "relative", width: "96%", height: maxH }}>
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
	const frame = useCurrentFrame();
	const { height, width, fps } = useVideoConfig();
	const items = normalizeContent(content);
	const list = (panels ?? []).slice(0, 6);
	const n = list.length;
	const stagger = 15;
	const starts = list.map((p, i) => resolvePanelStartFrame(p.showFrom, i, items, stagger));

	// 宫格配图可视高度：过小会显得图标「缩在角落」；需与 top/bottom 留白及 2×2 行高协调
	const maxH =
		n <= 2
			? Math.min(height * 0.30, 320)
			: n === 3
				? Math.min(height * 0.26, 280)
				: n === 4
					? Math.min(height * 0.24, 280)
					: Math.min(height * 0.20, 240);

	const defaultGridTopRatio = 0.22;
	const gridBottomRatio = 0.26;
	const anchorBottomPx = getDefaultAnchorListBottomPx({
		frame,
		fps,
		height,
		content: items,
		anchors,
	});
	const gridTopPx =
		anchorBottomPx > 0
			? Math.max(
					height * defaultGridTopRatio,
					anchorBottomPx + PANEL_GRID_ANCHOR_CLEARANCE_PX,
				)
			: height * defaultGridTopRatio;
	const gridTopRatio = gridTopPx / height;

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
				: n === 4
					? {
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gridTemplateRows: "1fr 1fr",
							gap: 16,
							alignItems: "center",
						}
					: {
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr",
							gridTemplateRows: "1fr 1fr",
							gap: 14,
							alignItems: "center",
						};

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: Math.min(32, width * 0.04),
					right: Math.min(32, width * 0.04),
					top: `${gridTopRatio * 100}%`,
					bottom: `${gridBottomRatio * 100}%`,
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
						gridTopRatio={gridTopRatio}
						gridBottomRatio={gridBottomRatio}
					/>
				))}
			</div>
			<TemplateDefaultAnchors content={content} anchors={anchors} />
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
