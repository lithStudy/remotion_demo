/**
 * 通用图片展示组件：支持多种入场动画与呼吸效果
 * 被 CENTER_FOCUS、ALERT 等模板复用，单图居中，可选 breathe / slideLeft / slideBottom / zoomIn / fadeIn。
 */
import React from "react";
import { Img, useCurrentFrame, useVideoConfig } from "remotion";
import {
	getSingleImageAnchorAvoidanceShiftAnimatedPx,
	useImageEnterStyle,
	type ContentItem,
	type ImageEnterEffect,
} from "./shared";

export interface BWImageBreathProps {
	/** 图片地址 */
	src: string;
	/** 入场效果，默认 breathe */
	enterEffect?: ImageEnterEffect;
	/** 内容数组，用于根据锚点计算图片下移避让 */
	content?: (string | ContentItem)[];
	/** 图片容器样式覆盖 */
	style?: React.CSSProperties;
}

export const BWImageBreath: React.FC<BWImageBreathProps> = ({
	src,
	enterEffect = "breathe",
	content,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const enterStyle = useImageEnterStyle(enterEffect, frame, fps, width, height);
	const { transform: enterTransform, ...restEnterStyle } = enterStyle;
	const anchorAvoidanceShift = getSingleImageAnchorAvoidanceShiftAnimatedPx({
		content,
		frame,
		fps,
		height,
	});
	const transform = `${enterTransform ?? "translate(-50%, -50%)"} translateY(${anchorAvoidanceShift}px)`;
	return (
		<Img
			src={src}
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				maxWidth: "70%",
				maxHeight: "40%",
				objectFit: "contain",
				...restEnterStyle,
				transform,
				...style,
			}}
		/>
	);
};
