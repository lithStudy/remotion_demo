/**
 * BEAT_SEQUENCE：同一镜头内多节拍递进 — 首段偏 CENTER_FOCUS，后续可切 ALERT 式脉动；按 content 时间线换图。
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
	type BeatStageItem,
	type BeatStageTone,
	type ContentItem,
	type ImageEnterEffect,
	type TemplateAnchorsProps,
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";
import { FirefliesBackdrop } from "./FirefliesBackdrop";

export const templateMeta = {
	"name": "BEAT_SEQUENCE",
	"componentExport": "BWBeatSequence",
	"description":
		"适用：一问一驳一锤等同一镜头内情绪递进；多图按口播条切换，首段 calm、后续默认可 alert。\n差异：单段平缓叙述用 CENTER_FOCUS；单句结论暴击、无需配图时用 TEXT_FOCUS；本模板负责多段串联。\n慎用：stages 与 content 条数需一致；段落间若有空隙，画面保持上一张直至下一段切入（交叉淡化）。\n参数：stages[i].enterEffect / tone / showFrom（content 0-based，省略则同 i）；tone 省略时首条 calm、其余 alert。",
	"psychology": "节拍递进",
	"image_count": "2-4",
	"param_schema": {
		"type": "object",
		"properties": {
			"stages": {
				"type": "array",
				"minItems": 2,
				"maxItems": 4,
				"description":
					"与 content 逐条对应：每节拍一条；imageSrc、enterEffect、可选 tone（calm|alert）、可选 showFrom",
				"items": {
					"type": "object",
					"required": ["imageSrc"],
					"properties": {
						"imageSrc": {
							"type": "string",
							"format": "image_prompt",
							"description": "该节拍配图提示词",
						},
						"enterEffect": {
							"type": "string",
							"enum": ["breathe", "slideLeft", "slideBottom", "zoomIn", "fadeIn"],
							"default": "breathe",
							"description": "入场效果",
						},
						"tone": {
							"type": "string",
							"enum": ["calm", "alert"],
							"description": "首条可 calm，其余默认可 alert",
						},
						"showFrom": {
							"type": "content_index",
							"minimum": 0,
							"description": "从 content 第几条（0-based）起显示该图；省略则与当前 stages 下标一致",
						},
					},
				},
			},
		},
		"required": ["stages"],
	},
	"example": {
		"template": "BEAT_SEQUENCE",
		"param": {
			"stages": [
				{ "imageSrc": "问句配图简笔画", "enterEffect": "breathe" },
				{ "imageSrc": "转折警示配图", "enterEffect": "slideBottom" },
				{ "imageSrc": "结论冲击配图", "enterEffect": "slideBottom" },
			],
		},
	},
	"content_min_items": 2,
	"content_max_items": 4,
} as const;

function getActiveBeatIndex(items: ContentItem[], frame: number): number {
	let idx = 0;
	for (let i = 0; i < items.length; i++) {
		if (items[i].startFrame <= frame) idx = i;
	}
	return idx;
}

function resolveTone(stage: BeatStageItem | undefined, index: number): BeatStageTone {
	if (stage?.tone) return stage.tone;
	return index === 0 ? "calm" : "alert";
}

const IMAGE_LAYOUTS: Record<number, Array<{ left: string; maxWidth: string; maxHeight: string }>> = {
	1: [{ left: "50%", maxWidth: "64%", maxHeight: "42%" }],
	2: [
		{ left: "35%", maxWidth: "32%", maxHeight: "28%" },
		{ left: "65%", maxWidth: "32%", maxHeight: "28%" },
	],
	3: [
		{ left: "22%", maxWidth: "24%", maxHeight: "24%" },
		{ left: "50%", maxWidth: "24%", maxHeight: "24%" },
		{ left: "78%", maxWidth: "24%", maxHeight: "24%" },
	],
	4: [
		{ left: "13%", maxWidth: "18%", maxHeight: "20%" },
		{ left: "38%", maxWidth: "18%", maxHeight: "20%" },
		{ left: "62%", maxWidth: "18%", maxHeight: "20%" },
		{ left: "87%", maxWidth: "18%", maxHeight: "20%" },
	],
};

function getLayout(count: number, index: number) {
	const capped = Math.min(Math.max(count, 1), 4);
	return IMAGE_LAYOUTS[capped][index];
}

function percentToNumber(value: string): number {
	return Number(value.replace("%", ""));
}

const BeatSequenceImageSlot: React.FC<{
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
	const { fps, width, height } = useVideoConfig();
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
	const baseOpacity =
		typeof enterStyle.opacity === "number" ? enterStyle.opacity : 1;
	const introOpacity = interpolate(introProgress, [0, 1], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const introScale = interpolate(introProgress, [0, 1], [0.82, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const introTranslateY = imageIndex === 0
		? interpolate(introProgress, [0, 1], [120, 0], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			})
		: 0;
	const finalOpacity = baseOpacity * introOpacity;
	if (finalOpacity <= 0.001) return null;
	return (
		<Img
			src={getSafeImageSrc(imageSrc)}
			style={{
				position: "absolute",
				left: `${left}%`,
				top: "45%",
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

export interface BWBeatSequenceProps extends TemplateBaseProps, TemplateAnchorsProps {
	stages: BeatStageItem[];
}

export const BWBeatSequence: React.FC<BWBeatSequenceProps> = ({
	stages,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const items = normalizeContent(content);
	const n = Math.min(stages.length, items.length);
	const activeIdx = Math.min(getActiveBeatIndex(items, frame), Math.max(0, n - 1));
	const tone = n > 0 ? resolveTone(stages[activeIdx], activeIdx) : "calm";

	const effectiveShowFromIndex = (i: number) => {
		const raw = stages[i]?.showFrom;
		if (raw === undefined || raw === null || Number.isNaN(Number(raw))) return i;
		return Math.min(Math.max(0, Math.floor(Number(raw))), Math.max(0, n - 1));
	};

	const visibleStageIndices =
		n > 0
			? Array.from({ length: n }, (_, i) => i).filter((i) => activeIdx >= effectiveShowFromIndex(i))
			: [];
	const visibleCount = visibleStageIndices.length;
	const { fps } = useVideoConfig();
	const layoutStartFrame = n > 0 ? items[activeIdx].startFrame : 0;
	const layoutProgress = spring({
		frame: frame - layoutStartFrame,
		fps,
		config: { damping: 100, stiffness: 220 },
		durationInFrames: 18,
	});
	const breatheScale = 1 + Math.sin(frame * 0.075) * 0.02;
	const rootScale = tone === "alert" ? breatheScale : 1;

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
			{/* 画面层：允许呼吸缩放，但不影响字幕层 */}
			<AbsoluteFill
				style={{
					transform: `scale(${rootScale})`,
					transformOrigin: "center center",
				}}
			>
				<FirefliesBackdrop opacity={firefliesOpacity} seed={`BEAT_SEQUENCE-${firstStartFrame}`} />
				{visibleStageIndices.map((stageIndex, slotIndex) => (
					<BeatSequenceImageSlot
						key={stageIndex}
						imageSrc={stages[stageIndex].imageSrc}
						enterEffect={stages[stageIndex].enterEffect ?? "breathe"}
						segmentStartFrame={items[effectiveShowFromIndex(stageIndex)].startFrame}
						imageIndex={slotIndex}
						visibleCount={visibleCount}
						layoutProgress={layoutProgress}
					/>
				))}
			</AbsoluteFill>

			{/* 字幕/前景层：不跟随呼吸动画 */}
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
