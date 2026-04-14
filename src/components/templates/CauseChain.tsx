/**
 * CAUSE_CHAIN 模板：因果链 / 机制传导（因为→所以→导致）
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	BW_TEXT,
	getSafeImageSrc,
	useImageEnterStyle,
	type ImageEnterEffect,
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	"name": "CAUSE_CHAIN",
	"componentExport": "BWCauseChain",
	"description":
		"适用：同一镜头内讲清「因→果→再果」传导、机制链条；每段口播对应链上一环。\n差异：有时间刻度/年代演进用 TIMELINE；单标题+多句解释用 METHOD_STACK；左右对照用 SPLIT_COMPARE；情绪递进换图用 BEAT_SEQUENCE。\n参数：nodes 2～4 项，每项 label（短标签）、imageSrc、showFrom（content 下标 0-based，非帧数）；可选 layout 为 horizontal（默认，左→右链）或 vertical（竖向堆叠，适配竖屏）。",
	"psychology": "因果可视化",
	"image_count": "2-4",
	"content_min_items": 2,
	"content_max_items": 6,
	"param_schema": {
		"type": "object",
		"properties": {
			"layout": {
				"type": "string",
				"enum": ["horizontal", "vertical"],
				"default": "horizontal",
				"description": "链的排布方向；横屏/常规叙事默认 horizontal，竖屏可设 vertical",
			},
			"nodes": {
				"type": "array",
				"minItems": 2,
				"maxItems": 4,
				"description": "因果节点；showFrom 为 content 数组下标（0-based），入场时刻取该条 startFrame",
				"items": {
					"type": "object",
					"required": ["label", "imageSrc", "showFrom"],
					"properties": {
						"label": { "type": "string", "description": "节点短标签，建议 2～8 字" },
						"imageSrc": {
							"type": "string",
							"format": "image_prompt",
							"description": "该环节隐喻配图",
						},
						"showFrom": {
							"type": "integer",
							"format": "content_index",
							"description": "content 下标（0-based），非帧数",
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
		"required": ["nodes"],
	},
	"example": {
		"template": "CAUSE_CHAIN",
		"param": {
			"layout": "horizontal",
			"nodes": [
				{ "label": "刺激", "imageSrc": "闪电击中大脑的简笔画", "showFrom": 0 },
				{ "label": "解读", "imageSrc": "放大镜看信息的简笔画", "showFrom": 1 },
				{ "label": "行动", "imageSrc": "按下按钮的简笔画", "showFrom": 2 },
			],
		},
	},
} as const;

export type CauseChainNodeItem = {
	label: string;
	imageSrc: string;
	showFrom: number;
	enterEffect?: ImageEnterEffect;
};

export interface BWCauseChainProps extends TemplateBaseProps {
	nodes: CauseChainNodeItem[];
	layout?: "vertical" | "horizontal";
}

const resolveNodeStartFrame = (
	showFrom: number,
	nodeIndex: number,
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
	return nodeIndex * staggerFallback;
};

const CauseChainNodeCard: React.FC<{
	node: CauseChainNodeItem;
	startFrame: number;
	isVertical: boolean;
	maxImgH: number;
	maxImgW: number;
	labelFontSize: number;
}> = ({ node, startFrame, isVertical, maxImgH, maxImgW, labelFontSize }) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const rel = frame - startFrame;
	const appear = spring({
		frame: rel,
		fps,
		config: { damping: 70, stiffness: 180 },
		durationInFrames: 20,
	});
	const opacity = interpolate(appear, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const imgStyle = useImageEnterStyle(
		node.enterEffect ?? "fadeIn",
		Math.max(0, rel),
		fps,
		width,
		height,
	);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				opacity,
				gap: isVertical ? 12 : 14,
				flex: isVertical ? "0 0 auto" : "1 1 0",
				minWidth: isVertical ? undefined : 0,
			}}
		>
			<div
				style={{
					position: "relative",
					width: maxImgW,
					height: maxImgH,
				}}
			>
				<Img
					src={getSafeImageSrc(node.imageSrc)}
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
			<div
				style={{
					fontSize: labelFontSize,
					fontWeight: 700,
					color: BW_TEXT,
					textAlign: "center",
					lineHeight: 1.25,
					padding: "0 4px",
				}}
			>
				{node.label}
			</div>
		</div>
	);
};

const ChainArrow: React.FC<{
	frame: number;
	fps: number;
	startNext: number;
	vertical: boolean;
}> = ({ frame, fps, startNext, vertical }) => {
	const rel = frame - startNext;
	const p = spring({
		frame: rel,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: 14,
	});
	const len = interpolate(p, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	if (vertical) {
		return (
			<div
				style={{
					width: 5,
					height: 44 * len,
					background: `linear-gradient(to bottom, ${BW_TEXT}, ${BW_TEXT}88)`,
					borderRadius: 2,
					flexShrink: 0,
				}}
			/>
		);
	}
	return (
		<div
			style={{
				height: 5,
				width: 44 * len,
				background: `linear-gradient(to right, ${BW_TEXT}, ${BW_TEXT}88)`,
				borderRadius: 2,
				flexShrink: 0,
			}}
		/>
	);
};

export const BWCauseChain: React.FC<BWCauseChainProps> = ({
	nodes,
	layout = "horizontal",
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, height, width } = useVideoConfig();
	const items = normalizeContent(content);
	const chain = (nodes ?? []).slice(0, 4);
	const stagger = 18;
	const starts = chain.map((n, i) => resolveNodeStartFrame(n.showFrom, i, items, stagger));

	const isVertical = layout === "vertical";
	const n = chain.length;
	const maxImgH = isVertical
		? Math.min(195, height * 0.195)
		: Math.min(220, height * 0.22);
	const maxImgW = isVertical
		? width * 0.5
		: Math.min(
				width * 0.38,
				(width - 48 - Math.max(0, n - 1) * 52) / Math.max(n, 1) - 6,
			);
	const labelFontSize = isVertical ? 50 : 60;

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: 140,
					right: 140,
					top: "12%",
					bottom: "18%",
					display: "flex",
					flexDirection: isVertical ? "column" : "row",
					alignItems: "center",
					justifyContent: "center",
					gap: isVertical ? 14 : 22,
				}}
			>
				{chain.map((node, i) => (
					<React.Fragment key={i}>
						<CauseChainNodeCard
							node={node}
							startFrame={starts[i] ?? 0}
							isVertical={isVertical}
							maxImgH={maxImgH}
							maxImgW={maxImgW}
							labelFontSize={labelFontSize}
						/>
						{i < chain.length - 1 ? (
							<ChainArrow
								frame={frame}
								fps={fps}
								startNext={starts[i + 1] ?? 0}
								vertical={isVertical}
							/>
						) : null}
					</React.Fragment>
				))}
			</div>
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
