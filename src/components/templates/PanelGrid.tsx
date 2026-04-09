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
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "PANEL_GRID",
	"componentExport": "BWPanelGrid",
	"description":
		"适用：同一镜头内并列 2～4 个主题块（如三个误区、四个检查项），每块一图，随对应口播条显现。\n差异：纵向左图右文、组间重排用 LIST_MULTI_GROUP；时间演进用 TIMELINE；节拍换图用 BEAT_SEQUENCE。\n参数：panels 2～4 项，结构与 TIMELINE 的 images 类似：src（image_prompt）、showFrom（content 下标）、可选 enterEffect、position（布局弱提示，可省略）。",
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

const PanelCell: React.FC<{
	panel: PanelGridItem;
	startFrame: number;
	maxH: number;
	spanFullWidth?: boolean;
}> = ({ panel, startFrame, maxH, spanFullWidth }) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const rel = frame - startFrame;
	const appear = spring({
		frame: rel,
		fps,
		config: { damping: 72, stiffness: 170 },
		durationInFrames: 22,
	});
	const opacity = interpolate(appear, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const imgStyle = useImageEnterStyle(
		panel.enterEffect ?? "fadeIn",
		Math.max(0, rel),
		fps,
		width,
		height,
	);

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
						...imgStyle,
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
			? Math.min(height * 0.2, 200)
			: n === 3
				? Math.min(height * 0.165, 168)
				: Math.min(height * 0.15, 150);

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
					top: "20%",
					bottom: "22%",
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
					/>
				))}
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
