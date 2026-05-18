/**
 * TREE_DIAGRAM 模板：层次关系 / 分类体系 / 分叉决策树
 * 适合展示 "分为…和…，各自又分为…" 的树状结构。
 */
import React from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { useRemotionLayoutMetricsOverride } from "../RemotionLayoutMetricsContext";
import { BW_TEXT, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "TREE_DIAGRAM",
	"componentExport": "BWTreeDiagram",
	"description":
		"适用：层次关系、分类体系、分叉决策树、组织结构等需要展示树状结构的场景。\n差异：线性链条用 CAUSE_CHAIN；并列清单用 PANEL_GRID；时间轴用 TIMELINE；因果传导用 CAUSE_CHAIN。\n参数：root 为根节点，含 label 和可选 children（1～4 个子节点），子节点可递归包含 children（建议 ≤ 3 层）。showFrom 为 content 数组下标（0-based），控制各节点随口播逐层展开。",
	"psychology": "层次可视化",
	"image_count": 0,
	"content_min_items": 2,
	"content_max_items": 8,
	"param_schema": {
		"type": "object",
		"properties": {
			"root": {
				"type": "object",
				"required": ["label"],
				"description": "根节点",
				"properties": {
					"label": { "type": "string", "description": "节点文本，建议 2～12 字" },
					"showFrom": {
						"type": "integer",
						"format": "content_index",
						"description": "content 数组下标（0-based），控制该节点出现时机",
					},
					"children": {
						"type": "array",
						"minItems": 1,
						"maxItems": 4,
						"description": "子节点列表",
						"items": { "$ref": "#/$defs/treeNode" },
					},
				},
			},
		},
		"required": ["root"],
		"$defs": {
			"treeNode": {
				"type": "object",
				"required": ["label"],
				"properties": {
					"label": { "type": "string", "description": "节点文本" },
					"showFrom": {
						"type": "integer",
						"format": "content_index",
						"description": "content 数组下标（0-based）",
					},
					"children": {
						"type": "array",
						"minItems": 1,
						"maxItems": 4,
						"items": { "$ref": "#/$defs/treeNode" },
					},
				},
			},
		},
	},
	"example": {
		"template": "TREE_DIAGRAM",
		"param": {
			"root": {
				"label": "西方抵制华为",
				"showFrom": 0,
				"children": [
					{
						"label": "被制裁",
						"showFrom": 1,
						"children": [
							{ 
								"label": "惩罚性制裁", 
								"showFrom": 2 ,
								"children": [
									{ "label": "星通事件", "showFrom": 3 },
									{ "label": "孟女士PPT事件", "showFrom": 4 },
								],
							},
							{ "label": "制约性制裁", "showFrom": 3 },
						],
					},
					{
						"label": "被去华为化",
						"showFrom": 4,
						"children": [
							{ "label": "技术原因", "showFrom": 5 },
							{ "label": "法理原因", "showFrom": 6 },
						],
					},
				],
			},
		},
	},
} as const;

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export interface TreeNodeData {
	label: string;
	showFrom?: number;
	children?: TreeNodeData[];
}

export interface BWTreeDiagramProps extends TemplateBaseProps {
	root: TreeNodeData;
}

// ──────────────────────────────────────────────
// Layout helpers
// ──────────────────────────────────────────────

interface PositionedNode {
	label: string;
	x: number;
	y: number;
	startFrame: number;
	depth: number;
	parentX?: number;
	parentY?: number;
}

function resolveStartFrame(
	showFrom: number | undefined,
	fallback: number,
	contentItems: { startFrame: number }[],
): number {
	if (
		typeof showFrom === "number" &&
		Number.isInteger(showFrom) &&
		showFrom >= 0 &&
		showFrom < contentItems.length
	) {
		const cue = contentItems[showFrom];
		if (cue && typeof cue.startFrame === "number") return cue.startFrame;
	}
	return fallback;
}

function collectPositions(
	node: TreeNodeData,
	depth: number,
	xMin: number,
	xMax: number,
	yFrac: number,
	startFrame: number,
	contentItems: { startFrame: number }[],
	parentX?: number,
	parentY?: number,
): PositionedNode[] {
	const x = (xMin + xMax) / 2;
	const result: PositionedNode[] = [
		{ label: node.label, x, y: yFrac, startFrame, depth, parentX, parentY },
	];

	const kids = node.children ?? [];
	if (kids.length === 0) return result;

	const slotW = (xMax - xMin) / kids.length;
	const nextYFrac = depth === 0 ? 0.42 : depth === 1 ? 0.68 : 0.88;
	const stagger = 8;

	kids.forEach((child, i) => {
		const childStart = resolveStartFrame(
			child.showFrom,
			startFrame + (i + 1) * stagger,
			contentItems,
		);
		result.push(
			...collectPositions(
				child,
				depth + 1,
				xMin + i * slotW,
				xMin + (i + 1) * slotW,
				nextYFrac,
				childStart,
				contentItems,
				x,
				yFrac,
			),
		);
	});

	return result;
}

// ──────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────

const TreeNodeBox: React.FC<{
	node: PositionedNode;
	frame: number;
	fps: number;
	width: number;
	height: number;
}> = ({ node, frame, fps, width, height }) => {
	const rel = frame - node.startFrame;
	const appear = spring({
		frame: rel,
		fps,
		config: { damping: 80, stiffness: 180 },
		durationInFrames: 18,
	});
	const opacity = interpolate(appear, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const scale = interpolate(appear, [0, 1], [0.85, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const fontSize = node.depth === 0 ? 56 : node.depth === 1 ? 48 : 42;
	const py = node.depth === 0 ? "12px 28px" : "10px 24px";
	const bgColor = node.depth === 0 ? BW_TEXT : "#f0f0f0";
	const fgColor = node.depth === 0 ? "#fff" : BW_TEXT;
	const borderRadius = node.depth === 0 ? 16 : 12;

	return (
		<div
			style={{
				position: "absolute",
				left: node.x * width,
				top: node.y * height,
				transform: `translate(-50%, -50%) scale(${scale})`,
				backgroundColor: bgColor,
				color: fgColor,
				fontSize,
				fontWeight: 700,
				padding: py,
				borderRadius,
				textAlign: "center",
				lineHeight: 1.3,
				opacity,
				whiteSpace: "nowrap",
				maxWidth: width * 0.28,
				overflow: "hidden",
				textOverflow: "ellipsis",
				border: node.depth === 0 ? "none" : `3px solid ${BW_TEXT}`,
			}}
		>
			{node.label}
		</div>
	);
};

const TreeEdge: React.FC<{
	fromX: number;
	fromY: number;
	toX: number;
	toY: number;
	startFrame: number;
	frame: number;
	fps: number;
	width: number;
	height: number;
}> = ({ fromX, fromY, toX, toY, startFrame, frame, fps, width, height }) => {
	const rel = frame - startFrame;
	const progress = spring({
		frame: rel,
		fps,
		config: { damping: 70, stiffness: 160 },
		durationInFrames: 16,
	});
	const opacity = interpolate(progress, [0, 1], [0, 0.7], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const x1 = fromX * width;
	const y1 = fromY * height + 24;
	const x2 = toX * width;
	const y2 = toY * height - 24;
	const midY = (y1 + y2) / 2;

	const pathD = `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;

	return (
		<path
			d={pathD}
			stroke={BW_TEXT}
			strokeWidth={3}
			fill="none"
			opacity={opacity}
			strokeLinecap="round"
		/>
	);
};

// ──────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────

export const BWTreeDiagram: React.FC<BWTreeDiagramProps> = ({
	root,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width: compWidth, height: compHeight } = useVideoConfig();
	const layoutOverride = useRemotionLayoutMetricsOverride();
	const width = layoutOverride?.width ?? compWidth;
	const height = layoutOverride?.height ?? compHeight;
	const items = normalizeContent(content);

	const rootStartFrame = resolveStartFrame(root.showFrom, 0, items);
	const positions = collectPositions(
		root,
		0,
		0.08,
		0.92,
		0.18,
		rootStartFrame,
		items,
	);

	const edges = positions.filter((n) => n.parentX !== undefined && n.parentY !== undefined);

	return (
		<AbsoluteFill style={style}>
			{/* 连接线 SVG 层 */}
			<svg
				width={width}
				height={height}
				style={{ position: "absolute", top: 0, left: 0 }}
			>
				{edges.map((node, i) => (
					<TreeEdge
						key={i}
						fromX={node.parentX!}
						fromY={node.parentY!}
						toX={node.x}
						toY={node.y}
						startFrame={node.startFrame}
						frame={frame}
						fps={fps}
						width={width}
						height={height}
					/>
				))}
			</svg>

			{/* 节点层 */}
			{positions.map((node, i) => (
				<TreeNodeBox
					key={i}
					node={node}
					frame={frame}
					fps={fps}
					width={width}
					height={height}
				/>
			))}

			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
