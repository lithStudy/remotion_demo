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
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer, normalizeContent } from "./TemplateContentRenderer";

export const templateMeta = {
	name: "BEAT_SEQUENCE",
	componentExport: "BWBeatSequence",
	description:
		"适用：一问一驳一锤等同一镜头内情绪递进；多图按口播条切换，首段 calm、后续默认可 alert。\n差异：单段平缓叙述用 CENTER_FOCUS；单句暴击用 ALERT；本模板负责多段串联。\n慎用：stages 与 content 条数需一致；段落间若有空隙，画面保持上一张直至下一段切入（交叉淡化）。\n参数：stages[i].enterEffect / tone；tone 省略时首条 calm、其余 alert。",
	psychology: "节拍递进",
	image_count: "2-4",
	param_schema: {
		stages: {
			type: "beat_stage_array",
			required: true,
			desc: "与 content 逐条对应：imageSrc、enterEffect、可选 tone（calm|alert）",
		},
	},
	required_extra_params: [] as string[],
	example: {
		template: "BEAT_SEQUENCE",
		param: {
			stages: [
				{ imageSrc: "问句配图简笔画", enterEffect: "breathe" },
				{ imageSrc: "转折警示配图", enterEffect: "slideBottom" },
				{ imageSrc: "结论冲击配图", enterEffect: "slideBottom" },
			],
			content: ["看到规律就抓财富密码？", "那是幻觉。", "你在慢性自杀。"],
		},
	},
	default_anchor_color: "#2B6CB0",
	default_anchor_anim: "spring",
	default_audio_effect: "ping",
	content_min_items: 2,
	content_max_items: 4,
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
				top: "60%",
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

export interface BWBeatSequenceProps extends TemplateBaseProps {
	stages: BeatStageItem[];
}

export const BWBeatSequence: React.FC<BWBeatSequenceProps> = ({
	stages,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const items = normalizeContent(content);
	const n = Math.min(stages.length, items.length);
	const activeIdx = Math.min(getActiveBeatIndex(items, frame), Math.max(0, n - 1));
	const tone = n > 0 ? resolveTone(stages[activeIdx], activeIdx) : "calm";
	const visibleCount = n > 0 ? Math.min(activeIdx + 1, n) : 0;
	const { fps } = useVideoConfig();
	const layoutStartFrame = visibleCount > 0 ? items[visibleCount - 1].startFrame : 0;
	const layoutProgress = spring({
		frame: frame - layoutStartFrame,
		fps,
		config: { damping: 100, stiffness: 220 },
		durationInFrames: 18,
	});
	const breatheScale = 1 + Math.sin(frame * 0.075) * 0.02;
	const rootScale = tone === "alert" ? breatheScale : 1;

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${rootScale})`,
				transformOrigin: "center center",
				...style,
			}}
		>
			{Array.from({ length: visibleCount }, (_, i) => (
				<BeatSequenceImageSlot
					key={i}
					imageSrc={stages[i].imageSrc}
					enterEffect={stages[i].enterEffect ?? "breathe"}
					segmentStartFrame={items[i].startFrame}
					imageIndex={i}
					visibleCount={visibleCount}
					layoutProgress={layoutProgress}
				/>
			))}
			<TemplateContentRenderer content={content} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
