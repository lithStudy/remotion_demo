/**
 * LIST_MULTI_GROUP 模板：多巴胺刺激，多要素并列
 * 适用场景：排比句、多要素并列展示，支持 2～5 组纵向排布。
 */
import React from "react";
import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { AbsoluteFill } from "remotion";
import {
	getSafeImageSrc,
	type MultiImageItem,
	type AnchorItem,
	type TemplateBaseProps,
} from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";
import { BWAnchorWord } from "../BWPrimitives";

export { listMultiGroupMeta as templateMeta } from "./template-definitions";

type SlotLayout = {
	imageLeft: number;
	anchorLeft: number;
	top: number;
	imageMaxWidth: number;
	imageMaxHeight: number;
	anchorFontSize: number;
};

const getFixedLayout = (count: number, order: number): SlotLayout => {
	const safeCount = Math.min(Math.max(count, 1), 5);
	const topMatrix: Record<number, number[]> = {
		1: [50],
		2: [40, 55],
		3: [40, 50, 60],
		4: [35, 45, 55, 65],
		5: [30, 40, 50, 60, 70],
	};
	const sizeByCount: Record<number, { imageMaxWidth: number; imageMaxHeight: number; anchorFontSize: number }> = {
		// 单组时尽可能放大；新增组出现时通过插值平滑缩小
		1: { imageMaxWidth: 25, imageMaxHeight: 42, anchorFontSize: 52 },
		2: { imageMaxWidth: 20, imageMaxHeight: 30, anchorFontSize: 50 },
		3: { imageMaxWidth: 15, imageMaxHeight: 23, anchorFontSize: 45 },
		4: { imageMaxWidth: 10, imageMaxHeight: 18, anchorFontSize: 42 },
		5: { imageMaxWidth: 10, imageMaxHeight: 15, anchorFontSize: 40 },
	};
	const tops = topMatrix[safeCount];
	const sizes = sizeByCount[safeCount];
	const imageLeft = 20;
	return {
		imageLeft: imageLeft,
		anchorLeft: imageLeft + sizes.imageMaxWidth + 12,
		top: tops[order] ?? 50,
		imageMaxWidth: sizes.imageMaxWidth,
		imageMaxHeight: sizes.imageMaxHeight,
		anchorFontSize: sizes.anchorFontSize,
	};
};

export interface BWMultiImageProps extends TemplateBaseProps {
	groups?: Array<{
		textIndex?: number;
		image: MultiImageItem;
		anchor?: Omit<AnchorItem, "showFrom">;
	}>;
}

export const BWMultiImage: React.FC<BWMultiImageProps> = ({
	groups,
	content,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const normalizedContent = normalizeContent(content);
	const normalizedGroups = (groups ?? []).slice(0, 5);

	const resolvedGroups = normalizedGroups.map((group) => {
		const img = group.image;
		const textIndex = group.textIndex;
		const hasValidTextIndex =
			typeof textIndex === "number" &&
			Number.isInteger(textIndex) &&
			textIndex >= 0 &&
			textIndex < normalizedContent.length;

		if (hasValidTextIndex) {
			const contentItem = normalizedContent[textIndex];
			return {
				...group,
				image: {
					...img,
					startFrame: contentItem.startFrame,
				},
			};
		}

		return group;
	});
	const imageStates = resolvedGroups.map((group, index) => ({
		index,
		startFrame: group.image.startFrame ?? 0,
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

	const prevReflowStates = visibleStates.filter((s) => s.startFrame < latestVisibleStartFrame);

	return (
		<AbsoluteFill style={style}>
			{resolvedGroups.map((group, i) => {
				const order = orderByIndex.get(i);
				const isVisible = order !== undefined;
				const anchorItem = group.anchor;

				if (!isVisible || order === undefined) {
					return null;
				}

				const startFrame = group.image.startFrame ?? 0;
				const toLayout = getFixedLayout(visibleCount, order);

				let fromLayout: SlotLayout;
				if (visibleCount <= 1) {
					fromLayout = toLayout;
				} else if (startFrame === latestVisibleStartFrame) {
					fromLayout = getFixedLayout(1, 0);
				} else {
					const prevOrder = prevReflowStates.findIndex((s) => s.index === i);
					const safePrevOrder = Math.max(0, prevOrder);
					fromLayout = getFixedLayout(prevReflowStates.length, safePrevOrder);
				}

				const top = interpolate(transitionProgress, [0, 1], [fromLayout.top, toLayout.top], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const imageLeft = interpolate(transitionProgress, [0, 1], [fromLayout.imageLeft, toLayout.imageLeft], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const maxWidth = interpolate(transitionProgress, [0, 1], [fromLayout.imageMaxWidth, toLayout.imageMaxWidth], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const maxHeight = interpolate(transitionProgress, [0, 1], [fromLayout.imageMaxHeight, toLayout.imageMaxHeight], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const anchorFontSize = interpolate(
					transitionProgress,
					[0, 1],
					[fromLayout.anchorFontSize, toLayout.anchorFontSize],
					{
						extrapolateLeft: "clamp",
						extrapolateRight: "clamp",
					},
				);

				const enter = spring({
					frame: frame - startFrame,
					fps,
					config: {
						damping: 18,
						stiffness: 120,
					},
					durationInFrames: 20,
				});
				const translateY = interpolate(enter, [0, 1], [56, 0], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});
				const imageOpacity = interpolate(enter, [0, 1], [0, 1], {
					extrapolateLeft: "clamp",
					extrapolateRight: "clamp",
				});

				return (
					<React.Fragment key={i}>
						<Img
							src={getSafeImageSrc(group.image.src)}
							style={{
								position: "absolute",
								left: `${imageLeft}%`,
								top: `${top}%`,
								maxWidth: `${maxWidth}%`,
								maxHeight: `${maxHeight}%`,
								objectFit: "contain",
								opacity: imageOpacity,
								transform: `translate(-50%, -50%) translateY(${translateY}px)`,
							}}
						/>
						{anchorItem && frame >= startFrame && (
							<BWAnchorWord
								anchor={anchorItem.text}
								delay={startFrame}
								fontSize={anchorFontSize}
								color={anchorItem.color || undefined}
								animStyle={anchorItem.anim || "spring"}
								style={{
									left: 350,
									right: "2%",
									top: `${top}%`,
									transform: "translateY(-50%)",
									opacity: imageOpacity,
									justifyContent: "flex-start",
									textAlign: "left",
									paddingLeft: 12,
								}}
							/>
						)}
					</React.Fragment>
				);
			})}
			<TemplateContentRenderer content={normalizedContent} audioSrc={audioSrc} hideAnchors />
			{children}
		</AbsoluteFill>
	);
};
