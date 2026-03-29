/**
 * KPI_HERO 模板：锚定效应，单指标大字报 + 数字滚动
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

export { kpiHeroMeta as templateMeta } from "./template-definitions";

export interface BWKpiHeroProps extends TemplateBaseProps {
	value: number;
	prefix?: string;
	suffix?: string;
	headline?: string;
	imageSrc?: string;
	countDuration?: number;
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

export const BWKpiHero: React.FC<BWKpiHeroProps> = ({
	value,
	prefix = "",
	suffix = "",
	headline,
	imageSrc,
	countDuration = 28,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const progress = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: countDuration,
	});
	const current = Math.round(
		interpolate(progress, [0, 1], [0, value], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}),
	);
	const blockOpacity = spring({
		frame,
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 18,
	});

	return (
		<AbsoluteFill style={{...style }}>
			{headline ? (
				<div
					style={{
						position: "absolute",
						left: 0,
						right: 0,
						top: "12%",
						textAlign: "center",
						fontSize: 36,
						fontWeight: 800,
						color: BW_TEXT,
						opacity: blockOpacity,
						padding: "0 8%",
						fontFamily: fontStack,
					}}
				>
					{headline}
				</div>
			) : null}

			<div
				style={{
					position: "absolute",
					left: 0,
					right: getSafeImageSrc(imageSrc) ? "28%" : 0,
					top: "42%",
					transform: "translateY(-50%)",
					display: "flex",
					justifyContent: "center",
					alignItems: "baseline",
					opacity: blockOpacity,
					fontSize: 112,
					fontWeight: 900,
					color: BW_TEXT,
					letterSpacing: "0.02em",
					fontFamily: fontStack,
				}}
			>
				{prefix ? (
					<span style={{ fontSize: "0.45em", marginRight: 4 }}>{prefix}</span>
				) : null}
				<span>{current}</span>
				{suffix ? (
					<span style={{ fontSize: "0.45em", marginLeft: 4 }}>{suffix}</span>
				) : null}
			</div>

			<div
				style={{
					position: "absolute",
					right: "6%",
					top: "38%",
					transform: "translateY(-50%)",
					width: "22%",
					maxWidth: 280,
					opacity: blockOpacity,
				}}
			>
				<Img
					src={getSafeImageSrc(imageSrc)}
					style={{ width: "100%", objectFit: "contain" }}
				/>
			</div>

			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
