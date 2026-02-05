import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/** F8 单页长停 + 例句：一页 词+天职+例句，保持 8~12 秒，极简动画，可选 voc 页脚 */
const WORD = "vocation";
const MEANING = "天职";
const EXAMPLE = "He found his vocation in medicine.";
const SCENE_DURATION = 300;

export const calculateScene8Duration = (): number => SCENE_DURATION;

export const Scene8: React.FC = () => {
	const frame = useCurrentFrame();

	const contentOpacity = interpolate(frame, [0, 25], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const vocOpacity = frame >= 240 ? interpolate(frame, [240, 260], [0, 0.6], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

	return (
		<AbsoluteFill
			style={{
				background: "#0c0c14",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div style={{ opacity: contentOpacity, textAlign: "center" }}>
				<div style={{ fontSize: 82, fontWeight: "bold", color: "#fafafa", letterSpacing: 2 }}>
					{WORD}
				</div>
				<div style={{ marginTop: 20, fontSize: 40, color: "#a1a1aa" }}>{MEANING}</div>
				<div
					style={{
						marginTop: 48,
						fontSize: 28,
						color: "#d4d4d8",
						maxWidth: "88%",
						lineHeight: 1.5,
					}}
				>
					He found his <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>vocation</span> in medicine.
				</div>
			</div>
			<div
				style={{
					position: "absolute",
					bottom: 48,
					fontSize: 20,
					color: "#52525b",
					opacity: vocOpacity,
				}}
			>
				voc = call
			</div>
		</AbsoluteFill>
	);
};
