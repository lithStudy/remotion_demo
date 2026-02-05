import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/** F2 全屏唯一词 + 例句锚定：大词 → 天职 → 例句(高亮) → 回到词，可选结尾 voc=call */
const WORD = "vocation";
const MEANING = "天职";
const EXAMPLE = "He found his vocation in medicine.";
const SCENE_DURATION = 480;

export const calculateScene2Duration = (): number => SCENE_DURATION;

export const Scene2: React.FC = () => {
	const frame = useCurrentFrame();

	// 阶段：0 仅词(0~180) → 1 词+天职(180~240) → 2 例句(240~360) → 3 仅词(360~450) → 4 可选 voc(450~480)
	const phase = frame < 180 ? 0 : frame < 240 ? 1 : frame < 360 ? 2 : frame < 450 ? 3 : 4;
	const showMeaning = phase === 1;
	const showExample = phase === 2;
	const showWord = phase !== 2;
	const showVocHint = phase === 4;

	const exampleOpacity = interpolate(frame, [240, 255], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const wordOpacity = phase === 2 ? interpolate(frame, [240, 255], [1, 0.2], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
	const vocOpacity = showVocHint ? interpolate(frame, [450, 465], [0, 0.7], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

	return (
		<AbsoluteFill
			style={{
				background: "#0f0f1a",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{showWord && (
				<div
					style={{
						opacity: wordOpacity,
						fontSize: 88,
						fontWeight: "bold",
						color: "#fff",
						letterSpacing: 2,
						textAlign: "center",
					}}
				>
					{WORD}
				</div>
			)}
			{showMeaning && (
				<div style={{ marginTop: 20, fontSize: 40, color: "#aaa" }}>
					{MEANING}
				</div>
			)}
			{showExample && (
				<div
					style={{
						marginTop: 32,
						fontSize: 32,
						color: "#ccc",
						opacity: exampleOpacity,
						maxWidth: "90%",
						textAlign: "center",
					}}
				>
					He found his{" "}
					<span style={{ color: "#7dd3fc", fontWeight: "bold" }}>vocation</span> in medicine.
				</div>
			)}
			{phase === 2 && (
				<div
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						opacity: 1 - exampleOpacity * 0.8,
						fontSize: 88,
						fontWeight: "bold",
						color: "rgba(255,255,255,0.2)",
					}}
				>
					{WORD}
				</div>
			)}
			{showVocHint && (
				<div
					style={{
						position: "absolute",
						bottom: 40,
						fontSize: 22,
						color: "#666",
						opacity: vocOpacity,
					}}
				>
					voc = call
				</div>
			)}
		</AbsoluteFill>
	);
};
