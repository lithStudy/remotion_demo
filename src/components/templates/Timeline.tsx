/**
 * TIMELINE 模板：叙事连贯性，时间轴展示
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type MultiImageItem, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { timelineMeta as templateMeta } from "./template-definitions";

const TIMELINE_X_BY_POS: Record<string, number> = {
	left: 0.2,
	center: 0.5,
	right: 0.8,
};

export interface BWTimelineProps extends TemplateBaseProps {
	images: MultiImageItem[];
}

export const BWTimeline: React.FC<BWTimelineProps> = ({
	images,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const lineProgress = interpolate(
		spring({ frame, fps, config: { damping: 80, stiffness: 40 }, durationInFrames: 50 }),
		[0, 1],
		[0, 80],
		{ extrapolateLeft: "clamp", extrapolateRight: "clamp" },
	);
	const timelineY = 45;

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "10%",
					width: "80%",
					top: `${timelineY}%`,
					height: 6,
					backgroundColor: "#e0e0e0",
					borderRadius: 3,
				}}
			/>
			<div
				style={{
					position: "absolute",
					left: "10%",
					width: `${lineProgress}%`,
					top: `${timelineY}%`,
					height: 6,
					backgroundColor: BW_TEXT,
					borderRadius: 3,
				}}
			/>
			{images.map((img, i) => {
				const xFrac = img.position ? (TIMELINE_X_BY_POS[img.position] ?? 0.5) : 0.5;
				const localFrame = Math.max(0, frame - (img.startFrame ?? 0));
				const nodeSpring = spring({
					frame: localFrame,
					fps,
					config: { damping: 60, stiffness: 300 },
					durationInFrames: 15,
				});
				const visible = frame >= (img.startFrame ?? 0);
				const isAbove = i % 2 === 0;
				const iconTop = isAbove ? "28%" : "52%";
				return (
					<React.Fragment key={i}>
						<div
							style={{
								position: "absolute",
								left: `${xFrac * 100}%`,
								top: `${timelineY}%`,
								transform: "translate(-50%, -50%)",
								width: 24,
								height: 24,
								borderRadius: "50%",
								backgroundColor: BW_TEXT,
								border: "4px solid #fff",
								boxShadow: "0 0 0 2px #111",
								opacity: visible ? nodeSpring : 0,
								zIndex: 2,
							}}
						/>
						<Img
							src={getSafeImageSrc(img.src)}
							style={{
								position: "absolute",
								left: `${xFrac * 100}%`,
								top: iconTop,
								transform: `translate(-50%, 0) scale(${visible ? nodeSpring : 0.5})`,
								width: 140,
								height: 140,
								objectFit: "contain",
								opacity: visible ? nodeSpring : 0,
							}}
						/>
					</React.Fragment>
				);
			})}
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
