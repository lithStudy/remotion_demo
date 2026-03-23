/**
 * MULTI_IMAGE 模板：多巴胺刺激，多要素并列
 * 适用场景：排比句、多要素并列展示，支持 2～4 张图错落布局。
 */
import React from "react";
import { Img, useCurrentFrame, useVideoConfig } from "remotion";
import { AbsoluteFill } from "remotion";
import {
	getSafeImageSrc,
	useImageEnterStyle,
	type ImagePosition,
	type MultiImageItem,
	type TemplateBaseProps,
	type ContentItem,
} from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";
import { BWAnchorWord } from "../BWPrimitives";

export const templateMeta = {
	"name": "MULTI_IMAGE",
	"componentExport": "BWMultiImage",
	"description":
		"适用：排比句、多要素并列，2～4 张图同时呈现。\n差异：有时间先后/演进线用 TIMELINE；有序可执行步骤（第一步…）用 STEP_LIST。\n参数：images 每项含 src、position（top/bottom/left/right/center）、enterEffect。",
	"psychology": "多巴胺刺激",
	"image_count": "2-4",
	"param_schema": {
		"images": { "type": "image_prompt_array", "required": true, "desc": "多张图片描述数组，每项含 src/position/enterEffect" },
	},
	"required_extra_params": [] as string[],
	"example": {
		"template": "MULTI_IMAGE",
		"param": {
			"images": [
				{ "src": "齿轮简笔画图标", "position": "top", "enterEffect": "fadeIn" },
				{ "src": "钞票简笔画图标", "position": "bottom", "enterEffect": "slideBottom" },
			],
			"content": ["核心是自律", "核心是资源"],
		},
	},
	"default_anchor_color": "#2B6CB0",
	"default_anchor_anim": "spring",
	"default_audio_effect": "ping",
} as const;

const POSITION_STYLES: Record<ImagePosition, React.CSSProperties> = {
	center: { left: "50%", top: "55%", maxWidth: "70%", maxHeight: "45%" },
	left: { left: "26%", top: "55%", maxWidth: "44%", maxHeight: "45%" },
	right: { left: "74%", top: "55%", maxWidth: "44%", maxHeight: "45%" },
	top: { left: "50%", top: "35%", maxWidth: "70%", maxHeight: "35%" },
	bottom: { left: "50%", top: "72%", maxWidth: "70%", maxHeight: "35%" },
};

const ANCHOR_LAYOUT: Record<ImagePosition, React.CSSProperties> = {
	center: { left: 0, right: 0, top: "22%" },
	left: { left: 0, right: "48%", top: "25%" },
	right: { left: "48%", right: 0, top: "25%" },
	top: { left: 0, right: 0, top: "16%" },
	bottom: { left: 0, right: 0, top: "53%" },
};

const MultiImageSlot: React.FC<{ item: MultiImageItem; anchorItem?: ContentItem }> = ({ item, anchorItem }) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const localFrame = frame - (item.startFrame ?? 0);
	const enterStyle = useImageEnterStyle(
		item.enterEffect ?? "breathe",
		Math.max(0, localFrame),
		fps,
		width,
		height,
	);
	const visible = localFrame >= 0;
	const posStyle = POSITION_STYLES[item.position] ?? POSITION_STYLES.center;
	const anchorStyle = ANCHOR_LAYOUT[item.position] ?? ANCHOR_LAYOUT.center;

	return (
		<>
			<Img
				src={getSafeImageSrc(item.src)}
				style={{
					position: "absolute",
					objectFit: "contain",
					...posStyle,
					...enterStyle,
					opacity: visible ? (enterStyle.opacity ?? 1) : 0,
				}}
			/>
			{anchorItem && anchorItem.anchor && frame >= anchorItem.startFrame && (
				<BWAnchorWord
					anchor={anchorItem.anchor}
					delay={anchorItem.startFrame}
					color={anchorItem.anchorColor || undefined}
					style={anchorStyle}
				/>
			)}
		</>
	);
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
	const normalizedContent = normalizeContent(content);
	const anchorItems = normalizedContent.filter((c) => c.anchor);

	const contentWithoutAnchors = normalizedContent.map((c) => ({
		...c,
		anchor: null,
	}));

	return (
		<AbsoluteFill style={style}>
			{images.map((img, i) => (
				<MultiImageSlot key={i} item={img} anchorItem={anchorItems[i]} />
			))}
			<TemplateContentRenderer content={contentWithoutAnchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
