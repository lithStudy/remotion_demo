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

export const templateMeta = {
	"name": "LIST_MULTI_GROUP",
	"componentExport": "BWMultiImage",
	"description":
		"适用：当前 item 原文本身就明确包含 2～5 个并列分点/主体时使用，图文同时呈现。\n差异：有时间先后/演进线用 TIMELINE；有序可执行步骤（第一步…）用 STEP_LIST；若只是总起句/引导句（如“给你两个方法：”）而具体分点已拆到后续 item，禁止用本模板。\n参数：仅使用 groups；每组采用 textIndex + image + 可选 anchor 的结构，其中 textIndex 绑定 content 序号，image 只负责图片描述。\n动画：首组图文居中并放大入场；每新增一组时，已出现组与新组一起平滑重排为纵向均分布局，图片与文字同步动态缩放、并保持同轴左图右文展示。",
	"psychology": "多巴胺刺激",
	"image_count": "2-5",
	"param_schema": {
		"content": { "type": "content_array", "required": true, "desc": "口播字幕分段，对象数组每项含 text；须完整覆盖该 item 台词" },
		"groups": { "type": "list_multi_group_group_array", "required": true, "desc": "唯一合法结构：每项包含 textIndex、image 与可选 anchor。组数必须与当前 item 原文里真实出现的并列分点数一致，严禁仅根据“两个/三个/若干个”标题脑补 group。textIndex 是该组绑定的 content 序号；image.src 填图片描述；anchor.text 必须是该组的高价值短语，若无高价值短语则整体省略 anchor" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "LIST_MULTI_GROUP",
		"param": {
			"groups": [
				{
					"textIndex": 0,
					"image": { "src": "齿轮简笔画图标" },
					"anchor": { "text": "核心是自律", "audioEffect": "ping" }
				},
				{
					"textIndex": 1,
					"image": { "src": "钞票简笔画图标" },
					"anchor": { "text": "核心是资源", "audioEffect": "impact_thud" }
				}
			],
			"content": [{ "text": "怎么才能成功？" }, { "text": "成功的核心是自律" }, { "text": "成功的核心是资源" }],

		},
	},
	"default_anchor_color": "#2B6CB0",
	"default_anchor_anim": "spring",
	"default_audio_effect": "ping",
} as const;

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
