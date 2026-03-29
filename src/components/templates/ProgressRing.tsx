/**
 * PROGRESS_RING 模板：进度闭环感，环形占比
 */
import React from "react";
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { BW_TEXT, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { progressRingMeta as templateMeta } from "./template-definitions";

export interface BWProgressRingProps extends TemplateBaseProps {
	percent: number;
	label: string;
	subLabel?: string;
}

const fontStack =
	'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';

export const BWProgressRing: React.FC<BWProgressRingProps> = ({
	percent,
	label,
	subLabel,
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const clamped = Math.max(0, Math.min(100, percent));
	const ringSpring = spring({
		frame,
		fps,
		config: { damping: 45, stiffness: 90 },
		durationInFrames: 40,
	});
	const animatedPct = interpolate(ringSpring, [0, 1], [0, clamped], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const size = 280;
	const stroke = 18;
	const r = (size - stroke) / 2;
	const c = 2 * Math.PI * r;
	const offset = c - (animatedPct / 100) * c;
	const textOpacity = spring({
		frame: frame - 6,
		fps,
		config: { damping: 60, stiffness: 180 },
		durationInFrames: 16,
	});

	return (
		<AbsoluteFill style={{ ...style }}>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "38%",
					transform: "translate(-50%, -50%)",
					width: size,
					height: size,
				}}
			>
				<svg
					width={size}
					height={size}
					viewBox={`0 0 ${size} ${size}`}
					style={{ transform: "rotate(-90deg)" }}
				>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={r}
						fill="none"
						stroke="rgba(0,0,0,0.08)"
						strokeWidth={stroke}
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={r}
						fill="none"
						stroke="#2B6CB0"
						strokeWidth={stroke}
						strokeLinecap="round"
						strokeDasharray={c}
						strokeDashoffset={offset}
					/>
				</svg>
				<div
					style={{
						position: "absolute",
						left: "50%",
						top: "50%",
						transform: "translate(-50%, -50%)",
						textAlign: "center",
					}}
				>
					<div
						style={{
							fontSize: 52,
							fontWeight: 900,
							color: BW_TEXT,
							fontFamily: fontStack,
							lineHeight: 1.1,
						}}
					>
						{Math.round(animatedPct)}%
					</div>
				</div>
			</div>

			<div
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: "62%",
					textAlign: "center",
					padding: "0 10%",
					opacity: textOpacity,
				}}
			>
				<div
					style={{
						fontSize: 34,
						fontWeight: 800,
						color: BW_TEXT,
						fontFamily: fontStack,
						marginBottom: subLabel ? 10 : 0,
					}}
				>
					{label}
				</div>
				{subLabel ? (
					<div
						style={{
							fontSize: 22,
							fontWeight: 600,
							color: "rgba(17,17,17,0.65)",
							fontFamily: fontStack,
						}}
					>
						{subLabel}
					</div>
				) : null}
			</div>

			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
