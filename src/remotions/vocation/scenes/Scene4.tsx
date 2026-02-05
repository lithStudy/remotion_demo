import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { TypewriterText } from "../../../components";

/** F4 打字机聚焦：逐字打 vocation → 停留 → 打例句(高亮 vocation) → 清屏 → 仅词 */
const WORD = "vocation";
const EXAMPLE = "Teaching is her vocation.";
const SCENE_DURATION = 520;

export const calculateScene4Duration = (): number => SCENE_DURATION;

export const Scene4: React.FC = () => {
	const frame = useCurrentFrame();

	// 阶段：0 打词(0~120) 1 停留(120~180) 2 打词 again(180~300) 3 打例句(300~420) 4 仅词(420~520)
	const phase =
		frame < 120 ? 0 : frame < 180 ? 1 : frame < 300 ? 2 : frame < 420 ? 3 : 4;
	const showWordType1 = phase === 0;
	const showWordHold1 = phase === 1;
	const showWordType2 = phase === 2;
	const showExampleType = phase === 3;
	const showWordFinal = phase === 4;

	const wordOpacity = phase === 3 ? interpolate(frame, [300, 315], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
	const exampleOpacity = phase === 3 || phase === 4 ? interpolate(frame, [300, 318], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
	const exampleFadeOut = phase === 4 ? interpolate(frame, [420, 435], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
	const wordFinalOpacity = phase === 4 ? interpolate(frame, [420, 438], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

	return (
		<AbsoluteFill
			style={{
				background: "#0a0a0a",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{(showWordType1 || showWordHold1) && (
				<div style={{ opacity: wordOpacity }}>
					<TypewriterText
						text={WORD}
						delay={0}
						durationInFrames={100}
						showCursor={showWordType1}
						style={{ fontSize: 64, fontWeight: "bold", color: "#fff", letterSpacing: 2 }}
					/>
				</div>
			)}
			{showWordType2 && (
				<div style={{ opacity: wordOpacity }}>
					<TypewriterText
						text={WORD}
						delay={180}
						durationInFrames={100}
						showCursor={true}
						style={{ fontSize: 64, fontWeight: "bold", color: "#fff", letterSpacing: 2 }}
					/>
				</div>
			)}
			{showExampleType && (
				<div
					style={{
						opacity: exampleOpacity * exampleFadeOut,
						fontSize: 32,
						color: "#ccc",
						maxWidth: "90%",
						textAlign: "center",
					}}
				>
					Teaching is her{" "}
					<span style={{ color: "#7dd3fc", fontWeight: "bold" }}>vocation</span>.
				</div>
			)}
			{showWordFinal && (
				<div
					style={{
						opacity: wordFinalOpacity,
						fontSize: 64,
						fontWeight: "bold",
						color: "#fff",
						letterSpacing: 2,
					}}
				>
					{WORD}
				</div>
			)}
		</AbsoluteFill>
	);
};
