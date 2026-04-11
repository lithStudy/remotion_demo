/**
 * 通用图片展示组件：breathe 效果常驻，enterEffect 控制初始入场动画。
 * 被 CENTER_FOCUS 等模板复用，单图居中，enterEffect 可选 slideLeft / slideBottom / zoomIn / fadeIn。
 */
import React from "react";
import { Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { useRemotionLayoutMetricsOverride } from "../RemotionLayoutMetricsContext";
import {
	getCenterFocusStackLayoutAtFrame,
	getSafeImageSrc,
	getSingleImageAnchorAvoidanceShiftAnimatedPx,
	type AnchorItem,
	useImageEnterStyle,
	type ContentItem,
	type ImageEnterEffect,
} from "./shared";

export interface BWImageBreathProps {
	/** 图片地址 */
	src: string;
	/** 入场效果，默认 fadeIn；breathe 效果不在此控制，始终常驻 */
	enterEffect?: Exclude<ImageEnterEffect, "breathe">;
	/** 内容数组，用于根据锚点计算图片下移避让 */
	content?: ContentItem[];
	/** 锚点数组（showFrom 关联 content 索引） */
	anchors?: AnchorItem[];
	/** CENTER_FOCUS：主图与锚点同轴堆叠，由布局函数驱动纵向位置 */
	centerFocusStack?: boolean;
	/** 图片容器样式覆盖 */
	style?: React.CSSProperties;
}

export const BWImageBreath: React.FC<BWImageBreathProps> = ({
	src,
	enterEffect = "fadeIn",
	content,
	anchors,
	centerFocusStack = false,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width: compWidth, height: compHeight } = useVideoConfig();
	const layoutOverride = useRemotionLayoutMetricsOverride();
	const width = layoutOverride?.width ?? compWidth;
	const height = layoutOverride?.height ?? compHeight;

	// breathe 常驻：60 帧一周期（2s@30fps），幅度 ±12%
	const breathePhase = frame % 60;
	const breatheScale = interpolate(
		breathePhase,
		[0, 30, 60],
		[1, 1.08, 1],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);

	// enterEffect 控制入场动画；旧数据传入 "breathe" 时降级为 fadeIn
	const safeEffect: Exclude<ImageEnterEffect, "breathe"> =
		(enterEffect as string) === "breathe" ? "fadeIn" : enterEffect;
	const enterStyle = useImageEnterStyle(
		safeEffect,
		frame,
		fps,
		width,
		height,
		"effectOnly",
	);

	const stack = centerFocusStack
		? getCenterFocusStackLayoutAtFrame({
				content,
				anchors,
				frame,
				fps,
				height,
			})
		: null;
	const anchorAvoidanceShift = centerFocusStack
		? 0
		: getSingleImageAnchorAvoidanceShiftAnimatedPx({
				content,
				anchors,
				frame,
				fps,
				height,
			});

	const safeSrc = getSafeImageSrc(src);
	const topValue = stack ? `${stack.imageCenterY}px` : "45%";

	return (
		// 外层：只负责定位（absolute 居中 + 锚点避让）
		<div
			style={{
				position: "absolute",
				left: "50%",
				top: topValue,
				transform: `translate(-50%, -50%) translateY(${anchorAvoidanceShift}px)`,
			}}
		>
			{/* 内层：只负责 breathe 缩放，尺寸约束在此 */}
			<div
				style={{
					transform: `scale(${breatheScale})`,
					transformOrigin: "50% 50%",
					maxWidth: `${width * 0.68}px`,
					maxHeight: `${height * 0.42}px`,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Img
					src={safeSrc}
					style={{
						maxWidth: "100%",
						maxHeight: "100%",
						width: "auto",
						height: "auto",
						display: "block",
						objectFit: "contain",
						...enterStyle,
						...style,
					}}
				/>
			</div>
		</div>
	);
};
