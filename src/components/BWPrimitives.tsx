/**
 * 公共 UI 原子组件：BWSubtitle、BWAnchorWord
 * 从 BWLayouts 中抽取，避免模板组件循环依赖。
 */
import React from "react";
import {
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { FadeInText } from "./TextAnimations";

const BW_TEXT = "#111111";

// ─────────────────────────────────────────────────────────────
// BWAnchorWord
// ─────────────────────────────────────────────────────────────

type AnchorAnimStyle = "spring" | "slideUp" | "popIn" | "highlight";

interface BWAnchorWordProps {
	anchor: string;
	delay?: number;
	color?: string;
	animStyle?: AnchorAnimStyle;
	style?: React.CSSProperties;
}

export const BWAnchorWord: React.FC<BWAnchorWordProps> = ({
	anchor,
	delay = 0,
	color = BW_TEXT,
	animStyle = "spring",
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const localFrame = frame - delay;

	const springVal = spring({
		frame: localFrame,
		fps,
		config: { stiffness: 400, damping: 20 },
	});

	let animTransform = "";
	let animOpacity = springVal;

	switch (animStyle) {
		case "slideUp": {
			const ty = interpolate(springVal, [0, 1], [40, 0], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			animTransform = `translateY(${ty}px)`;
			break;
		}
		case "popIn": {
			const sc = interpolate(springVal, [0, 1], [0.3, 1], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			animTransform = `scale(${sc})`;
			break;
		}
		case "highlight":
			animTransform = "";
			break;
		case "spring":
		default: {
			const sc2 = interpolate(springVal, [0, 1], [0.6, 1], {
				extrapolateLeft: "clamp",
				extrapolateRight: "clamp",
			});
			animTransform = `scale(${sc2})`;
			break;
		}
	}

	const highlightBg =
		animStyle === "highlight"
			? `linear-gradient(transparent 60%, ${color}33 60%)`
			: "none";

	return (
		<div
			style={{
				position: "absolute",
				left: 0,
				right: 0,
				top: "22%",
				display: "flex",
				justifyContent: "center",
				opacity: animOpacity,
				transform: animTransform,
				...style,
			}}
		>
			<span
				style={{
					fontSize: 56,
					fontWeight: 900,
					color,
					letterSpacing: "0.02em",
					backgroundImage: highlightBg,
					paddingBottom: 4,
					fontFamily:
						'"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
				}}
			>
				{anchor}
			</span>
		</div>
	);
};

// ─────────────────────────────────────────────────────────────
// BWSubtitle
// ─────────────────────────────────────────────────────────────

interface BWSubtitleProps {
	text: string;
	startFrame?: number;
	/** 模板展示用顶部，其余用底部 */
	position?: "top" | "bottom";
	style?: React.CSSProperties;
	durationFrames?: number;
}

export const BWSubtitle: React.FC<BWSubtitleProps> = ({
	text,
	startFrame = 0,
	position = "bottom",
	style,
	durationFrames = 15,
}) => (
	<div
		style={{
			position: "absolute",
			left: 0,
			right: 0,
			...(position === "top" ? { top: 0, bottom: "auto" } : { bottom: 0 }),
			height: "10%",
			minHeight: 48,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			padding: "8px 24px",
			...(position === "top" ? { backgroundColor: "rgba(0, 0, 0, 0.55)" } : {}),
			...style,
		}}
	>
		<FadeInText
			delay={startFrame}
			duration={durationFrames}
			style={{ width: "100%", textAlign: "center" }}
		>
			<span
				style={{
					fontSize: 40,
					fontWeight: 500,
					color: "rgba(255, 255, 255, 0.95)",
					fontFamily:
						'"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", sans-serif',
				}}
			>
				{text}
			</span>
		</FadeInText>
	</div>
);
