/**
 * SPLIT_COMPARE 模板：认知失调，A vs B 对比
 * 适用场景：左右对比（如两种选择、两种结果），需 2 张图，可配左右标签。
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { splitCompareMeta as templateMeta } from "./template-definitions";

export interface BWSplitCompareProps extends TemplateBaseProps {
	leftLabel?: string;
	rightLabel?: string;
	leftSrc?: string;
	rightSrc?: string;
}

export const BWSplitCompare: React.FC<BWSplitCompareProps> = ({
	leftLabel = "",
	rightLabel = "",
	leftSrc,
	rightSrc,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { width } = useVideoConfig();
	const half = width / 2;
	const slideLeft = interpolate(frame, [0, 12], [-half, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
	});
	const slideRight = interpolate(frame, [0, 12], [half, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
	});
	// 中间竖线独立动画：在左右滑入之后，从中心向上下展开
	const lineProgress = interpolate(frame, [12, 20], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});


	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					display: "flex",
					width: "100%",
					height: "100%",
					alignItems: "stretch",
				}}
			>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						transform: `translateX(${slideLeft}px)`,
					}}
				>
					<Img
						src={getSafeImageSrc(leftSrc)}
						style={{
							maxWidth: "80%",
							maxHeight: "50%",
							objectFit: "contain",
						}}
					/>
					{leftLabel && (
						<span
							style={{
								marginTop: 16,
								fontSize: 36,
								fontWeight: 700,
								color: BW_TEXT,
							}}
						>
							{leftLabel}
						</span>
					)}
				</div>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						transform: `translateX(${slideRight}px)`,
					}}
				>
					<Img
						src={getSafeImageSrc(rightSrc)}
						style={{
							maxWidth: "80%",
							maxHeight: "50%",
							objectFit: "contain",
						}}
					/>
					{rightLabel && (
						<span
							style={{
								marginTop: 16,
								fontSize: 36,
								fontWeight: 700,
								color: BW_TEXT,
							}}
						>
							{rightLabel}
						</span>
					)}
				</div>
			</div>
			{/* 中间竖线：独立于左右内容，从中心向上下展开 */}
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					width: 3,
					height: "40%",
					background: "#111",
					transformOrigin: "center center",
					transform: `translate(-50%, -50%) scaleY(${lineProgress})`,
				}}
			/>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} hideAnchors />
			{children}
		</AbsoluteFill>
	);
};
