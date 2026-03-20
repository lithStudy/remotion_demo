import React from "react";
import {
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";

// Re-export from BWPrimitives for backwards compatibility
export { BWSubtitle, BWAnchorWord } from "./BWPrimitives";

const BW_TEXT = "#111111";

interface BWCountUpAnchorProps {
	prefix?: string;
	value: number;
	suffix?: string;
	enterFrame?: number;
	countDuration?: number;
	color?: string;
	style?: React.CSSProperties;
}

export const BWCountUpAnchor: React.FC<BWCountUpAnchorProps> = ({
	prefix = "",
	value,
	suffix = "",
	enterFrame = 0,
	countDuration = 25,
	color = BW_TEXT,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const progress = spring({
		frame: frame - enterFrame,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: countDuration,
	});
	const current = Math.round(
		interpolate(progress, [0, 1], [0, value], {
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		})
	);
	const opacity = interpolate(frame, [enterFrame, enterFrame + 5], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	return (
		<div
			style={{
				position: "absolute",
				left: 0,
				right: 0,
				top: "35%",
				transform: "translateY(-50%)",
				display: "flex",
				justifyContent: "center",
				alignItems: "baseline",
				opacity,
				fontSize: 80,
				fontWeight: 900,
				color,
				letterSpacing: "0.02em",
				...style,
			}}
		>
			{prefix && <span>{prefix}</span>}
			<span>{current}</span>
			{suffix && (
				<span style={{ fontSize: "0.55em", marginLeft: 2 }}>{suffix}</span>
			)}
		</div>
	);
};

// Re-export all template components (and shared types) so existing imports from BWLayouts still work.
export {
	BWImageBreath,
	BWCenterFocus,
	BWSplitCompare,
	BWMultiImage,
	BWStepList,
	BWAlertStyle,
	BWTextFocus,
	BWConceptCard,
	BWQuoteCitation,
	BWTimeline,
	BWDosAndDonts,
	BWMagnifyingGlass,
	BWChatBubble,
	BWScaleBalance,
	BWKpiHero,
	BWStatCompare,
	BWProgressRing,
	BWBeatSequence,
	type MultiImageItem,
	type BeatStageItem,
	type BeatStageTone,
	type ContentItem,
	type TemplateBaseProps,
} from "./templates";
