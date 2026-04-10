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
	fontSize?: number;
	style?: React.CSSProperties;
}

export const BWAnchorWord: React.FC<BWAnchorWordProps> = ({
	anchor,
	delay = 0,
	color = BW_TEXT,
	animStyle = "spring",
	fontSize = 56,
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
	const animOpacity = springVal;

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
					fontSize,
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
}) => {
	const onLightBg = position !== "top";

	return (
		<div
			style={{
				position: "absolute",
				left: 0,
				bottom: 30,
				right: 0,
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
						fontSize: 56,
						fontWeight: onLightBg ? 700 : 600,
						letterSpacing: onLightBg ? "0.03em" : "0.02em",
						lineHeight: 1.35,
						color: onLightBg ? "#0a0a0a" : "rgba(255, 255, 255, 0.96)",
						textShadow: onLightBg
							? "0 1px 0 rgba(255,255,255,0.92), 0 0 2px rgba(255,255,255,0.65), 0 2px 8px rgba(0,0,0,0.12)"
							: "0 1px 2px rgba(0,0,0,0.45)",
						fontFamily:
							'"Microsoft YaHei", "PingFang SC", "Hiragino Sans GB", "Noto Sans SC", sans-serif',
					}}
				>
					{text}
				</span>
			</FadeInText>
		</div>
	);
};
