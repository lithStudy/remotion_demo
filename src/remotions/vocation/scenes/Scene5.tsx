import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/** F5 脉冲节奏锚定：中央 vocation 每拍脉冲+发音，中间插例句再回到词 */
const WORD = "vocation";
const EXAMPLE = "Nursing became her vocation.";
const BEAT_DURATION = 60;
const SCENE_DURATION = 480;

export const calculateScene5Duration = (): number => SCENE_DURATION;

export const Scene5: React.FC = () => {
	const frame = useCurrentFrame();

	// 0~300 前 5 拍只显示词，300~390 例句，390~480 再 2 拍只词
	const inBeatPhase = frame < 300 || frame >= 390;
	const beatIndex = frame < 300 ? Math.floor(frame / BEAT_DURATION) : Math.floor((frame - 390) / BEAT_DURATION);
	const inBeat = frame < 300 ? frame % BEAT_DURATION : (frame - 390) % BEAT_DURATION;

	const pulse = interpolate(inBeat, [0, 12, 24], [1, 1.08, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const showExample = frame >= 300 && frame < 390;
	const exampleOpacity = interpolate(frame, [300, 318], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const exampleFadeOut = frame >= 370 ? interpolate(frame, [370, 385], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;

	return (
		<AbsoluteFill
			style={{
				background: "#111827",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{inBeatPhase && (
				<div
					style={{
						transform: `scale(${pulse})`,
						fontSize: 84,
						fontWeight: "bold",
						color: "#f3f4f6",
						letterSpacing: 2,
					}}
				>
					{WORD}
				</div>
			)}
			{showExample && (
				<div
					style={{
						opacity: exampleOpacity * exampleFadeOut,
						fontSize: 30,
						color: "#d1d5db",
						maxWidth: "88%",
						textAlign: "center",
					}}
				>
					Nursing became her <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>vocation</span>.
				</div>
			)}
		</AbsoluteFill>
	);
};
