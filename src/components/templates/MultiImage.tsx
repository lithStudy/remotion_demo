/**
 * MULTI_IMAGE 模板：多巴胺刺激，多要素并列
 * 适用场景：排比句、多要素并列展示，支持 2～4 张图错落布局。
 */
import React from "react";
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AbsoluteFill } from "remotion";
import {
	getSafeImageSrc,
	type MultiImageItem,
	type TemplateBaseProps,
} from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";
import { BWAnchorWord } from "../BWPrimitives";

export const templateMeta = {
	"name": "MULTI_IMAGE",
	"componentExport": "BWMultiImage",
	"description":
		"适用：排比句、多要素并列，2～4 张图同时呈现。\n差异：有时间先后/演进线用 TIMELINE；有序可执行步骤（第一步…）用 STEP_LIST。\n参数：images 每项含 src，可选 textIndex（关联 content 序号，命中后按该 text 的 startFrame 出现）；布局与动画模式固定为多图动态横向编排。",
	"psychology": "多巴胺刺激",
	"image_count": "2-4",
	"param_schema": {
		"images": { "type": "image_prompt_array", "required": true, "desc": "多张图片描述数组，每项含 src，可选 textIndex（关联 content 序号）" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "MULTI_IMAGE",
		"param": {
			"images": [
				{ "src": "齿轮简笔画图标", "textIndex": 0 },
				{ "src": "钞票简笔画图标", "textIndex": 1 },
			],
			"content": [{ "text": "核心是自律" }, { "text": "核心是资源" }],
		},
	},
	"default_anchor_color": "#2B6CB0",
	"default_anchor_anim": "spring",
	"default_audio_effect": "ping",
} as const;

type SlotLayout = {
	left: number;
	top: number;
	maxWidth: number;
	maxHeight: number;
};

const getFixedLayout = (count: number, order: number): SlotLayout => {
	if (count <= 1) {
		return { left: 50, top: 56, maxWidth: 62, maxHeight: 46 };
	}

	if (count === 2) {
		const lefts = [32, 68];
		return { left: lefts[order] ?? 50, top: 56, maxWidth: 42, maxHeight: 36 };
	}

	if (count === 3) {
		const lefts = [20, 50, 80];
		return { left: lefts[order] ?? 50, top: 56, maxWidth: 28, maxHeight: 30 };
	}

	const lefts = [14, 38, 62, 86];
	return { left: lefts[order] ?? 50, top: 56, maxWidth: 22, maxHeight: 26 };
};

export interface BWMultiImageProps extends TemplateBaseProps {
	images: MultiImageItem[];
}

export const BWMultiImage: React.FC<BWMultiImageProps> = ({
	images,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const normalizedContent = normalizeContent(content);
	const anchorItems = normalizedContent.filter((c) => c.anchor);
	const resolvedImages = images.map((img) => {
		const textIndex = img.textIndex;
		const hasValidTextIndex =
			typeof textIndex === "number" &&
			Number.isInteger(textIndex) &&
			textIndex >= 0 &&
			textIndex < normalizedContent.length;

		if (hasValidTextIndex) {
			const contentItem = normalizedContent[textIndex];
			return {
				...img,
				startFrame: contentItem.startFrame,
			};
		}

		return img;
	});
	const imageStates = resolvedImages.map((img, index) => ({
		index,
		startFrame: img.startFrame ?? 0,
	}));
	const visibleStates = imageStates
		.filter((state) => frame >= state.startFrame)
		.sort((a, b) => {
			if (a.startFrame !== b.startFrame) return a.startFrame - b.startFrame;
			return a.index - b.index;
		});
	const visibleCount = visibleStates.length;
	const orderByIndex = new Map<number, number>();
	visibleStates.forEach((state, order) => {
		orderByIndex.set(state.index, order);
	});
	const latestVisibleStartFrame = visibleCount > 0 ? visibleStates[visibleCount - 1].startFrame : 0;
	const transitionProgress = spring({
		frame: frame - latestVisibleStartFrame,
		fps,
		config: {
			damping: 24,
			stiffness: 130,
		},
		durationInFrames: 22,
	});

	const contentWithoutAnchors = normalizedContent.map((c) => ({
		...c,
		anchor: null,
	}));

	return (
		<AbsoluteFill style={style}>
			{resolvedImages.map((img, i) => {
				const order = orderByIndex.get(i);
				const isVisible = order !== undefined;
				const anchorItem = anchorItems[i];

				if (!isVisible || order === undefined) {
					return null;
				}

				const currentLayout = getFixedLayout(visibleCount, order);
				const prevCount = Math.max(1, visibleCount - 1);
				const prevOrder = Math.min(order, prevCount - 1);
				const prevLayout = getFixedLayout(prevCount, prevOrder);
				const left = interpolate(transitionProgress, [0, 1], [prevLayout.left, currentLayout.left], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const maxWidth = interpolate(
					transitionProgress,
					[0, 1],
					[prevLayout.maxWidth, currentLayout.maxWidth],
					{
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					},
				);
				const maxHeight = interpolate(
					transitionProgress,
					[0, 1],
					[prevLayout.maxHeight, currentLayout.maxHeight],
					{
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					},
				);
				const firstImageLocalFrame = frame - (resolvedImages[0]?.startFrame ?? 0);
				const firstImageEnter = spring({
					frame: firstImageLocalFrame,
					fps,
					config: {
						damping: 18,
						stiffness: 120,
					},
					durationInFrames: 20,
				});
				const firstImageTranslateY = interpolate(firstImageEnter, [0, 1], [80, 0], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const firstImageOpacity = interpolate(firstImageEnter, [0, 1], [0, 1], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const isFirstImage = i === 0;
				const imageOpacity = isFirstImage ? firstImageOpacity : 1;
				const translateY = isFirstImage ? firstImageTranslateY : 0;

				return (
					<React.Fragment key={i}>
						<Img
							src={getSafeImageSrc(img.src)}
							style={{
								position: "absolute",
								left: `${left}%`,
								top: `${currentLayout.top}%`,
								maxWidth: `${maxWidth}%`,
								maxHeight: `${maxHeight}%`,
								objectFit: "contain",
								opacity: imageOpacity,
								transform: `translate(-50%, -50%) translateY(${translateY}px)`,
							}}
						/>
						{anchorItem && anchorItem.anchor && frame >= anchorItem.startFrame && (
							<BWAnchorWord
								anchor={anchorItem.anchor}
								delay={anchorItem.startFrame}
								color={anchorItem.anchorColor || undefined}
								style={{ left: `${left - 12}%`, right: `${100 - (left + 12)}%`, top: "24%" }}
							/>
						)}
					</React.Fragment>
				);
			})}
			<TemplateContentRenderer content={contentWithoutAnchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
