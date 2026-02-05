import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

/** F1 呼吸式单词：全屏深色，中央 vocation 呼吸节奏，后加天职与例句 */
const WORD = "vocation";
const MEANING = "天职";
const EXAMPLE = "Teaching is her vocation.";
const BREATHE_CYCLE = 90;
const SCENE_DURATION = 520;

export const calculateScene1Duration = (): number => SCENE_DURATION;

export const Scene1: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// 呼吸：每 90 帧一周期，scale/opacity 轻微变化
	const cycle = frame % BREATHE_CYCLE;
	const breatheT = cycle / BREATHE_CYCLE;
	const scale = interpolate(Math.sin(breatheT * Math.PI * 2), [-1, 1], [0.98, 1.02], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const opacity = interpolate(Math.sin(breatheT * Math.PI * 2), [-1, 1], [0.92, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	// 阶段：0 仅词(0~240) → 1 词+天职(240~360) → 2 例句(360~450) → 3 仅词收尾(450~520)
	const showMeaning = frame >= 240;
	const showExample = frame >= 360 && frame < 450;
	const exampleOpacity = interpolate(frame, [360, 375], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const exampleFadeOut = frame >= 450 ? interpolate(frame, [450, 465], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
	const wordOpacityFinal = frame >= 450 ? 1 : (showExample ? 0.3 : 1);

	return (
		<AbsoluteFill
			style={{
				background: "#1a1a2e",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					transform: `scale(${scale})`,
					opacity: opacity * wordOpacityFinal,
					fontSize: 72,
					fontWeight: "bold",
					color: "#eee",
					letterSpacing: 2,
					textAlign: "center",
				}}
			>
				{WORD}
			</div>
			{showMeaning && !showExample && (
				<div
					style={{
						marginTop: 24,
						fontSize: 36,
						color: "#aaa",
					}}
				>
					{MEANING}
				</div>
			)}
			{showExample && (
				<div
					style={{
						marginTop: 48,
						fontSize: 28,
						color: "#ccc",
						opacity: exampleOpacity * exampleFadeOut,
						maxWidth: "85%",
						textAlign: "center",
					}}
				>
					{EXAMPLE}
				</div>
			)}
		</AbsoluteFill>
	);
};
