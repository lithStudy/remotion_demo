/**
 * STAT_COMPARE 模板：对比效应，双指标并列 + 条形比例
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
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { statCompareMeta as templateMeta } from "./template-definitions";

export interface BWStatCompareProps extends TemplateBaseProps {
	leftValue: number;
	rightValue: number;
	leftLabel?: string;
	rightLabel?: string;
	leftSrc?: string;
	rightSrc?: string;
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

export const BWStatCompare: React.FC<BWStatCompareProps> = ({
	leftValue,
	rightValue,
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
	const { fps, width } = useVideoConfig();
	const barSpring = spring({
		frame: frame - 8,
		fps,
		config: { damping: 55, stiffness: 120 },
		durationInFrames: 32,
	});
	const maxVal = Math.max(1, leftValue, rightValue);
	const leftH = interpolate(barSpring, [0, 1], [0, (leftValue / maxVal) * 100], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const rightH = interpolate(barSpring, [0, 1], [0, (rightValue / maxVal) * 100], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const numSpring = spring({
		frame: frame - 8,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: 30,
	});
	const leftShown = Math.round(
		interpolate(numSpring, [0, 1], [0, leftValue], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	);
	const rightShown = Math.round(
		interpolate(numSpring, [0, 1], [0, rightValue], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	);

	const colW = Math.min(200, width * 0.28);

	return (
		<AbsoluteFill style={{ ...style }}>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "40%",
					transform: "translate(-50%, -50%)",
					display: "flex",
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "center",
					gap: width * 0.12,
					width: "90%",
				}}
			>
				{/* Left */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 16,
						width: colW,
					}}
				>
					<div
						style={{
							fontSize: 44,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
						}}
					>
						{leftShown}
					</div>
					<Img
						src={getSafeImageSrc(leftSrc)}
						style={{ width: 72, height: 72, objectFit: "contain" }}
					/>
					<div
						style={{
							width: "100%",
							height: 220,
							backgroundColor: "rgba(0,0,0,0.06)",
							borderRadius: 12,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							overflow: "hidden",
						}}
					>
						<div
							style={{
								width: "100%",
								height: `${leftH}%`,
								minHeight: 8,
								backgroundColor: "#C53030",
								borderRadius: "0 0 12px 12px",
							}}
						/>
					</div>
					<div
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: BW_TEXT,
							textAlign: "center",
							fontFamily: fontStack,
						}}
					>
						{leftLabel}
					</div>
				</div>

				{/* Right */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 16,
						width: colW,
					}}
				>
					<div
						style={{
							fontSize: 44,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
						}}
					>
						{rightShown}
					</div>
					<Img
						src={getSafeImageSrc(rightSrc)}
						style={{ width: 72, height: 72, objectFit: "contain" }}
					/>
					<div
						style={{
							width: "100%",
							height: 220,
							backgroundColor: "rgba(0,0,0,0.06)",
							borderRadius: 12,
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							overflow: "hidden",
						}}
					>
						<div
							style={{
								width: "100%",
								height: `${rightH}%`,
								minHeight: 8,
								backgroundColor: "#276749",
								borderRadius: "0 0 12px 12px",
							}}
						/>
					</div>
					<div
						style={{
							fontSize: 26,
							fontWeight: 700,
							color: BW_TEXT,
							textAlign: "center",
							fontFamily: fontStack,
						}}
					>
						{rightLabel}
					</div>
				</div>
			</div>

			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
