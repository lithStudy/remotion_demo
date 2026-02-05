import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/** F7 极简闪卡 + 例句：正面 vocation，反面 天职+例句，正→反→正 2 轮 */
const WORD = "vocation";
const MEANING = "天职";
const EXAMPLE = "Teaching is her vocation.";
const FRONT_DURATION = 75;
const BACK_DURATION = 105;
const ROUND_DURATION = FRONT_DURATION + BACK_DURATION + FRONT_DURATION;
const ROUNDS = 2;
const SCENE_DURATION = ROUNDS * ROUND_DURATION;

export const calculateScene7Duration = (): number => SCENE_DURATION;

export const Scene7: React.FC = () => {
	const frame = useCurrentFrame();
	const inRound = frame % ROUND_DURATION;
	const isFront1 = inRound < FRONT_DURATION;
	const isBack = inRound >= FRONT_DURATION && inRound < FRONT_DURATION + BACK_DURATION;
	const isFront2 = inRound >= FRONT_DURATION + BACK_DURATION;

	const backOpacity = isBack ? 1 : 0;
	const frontOpacity = isFront1 || isFront2 ? 1 : 0;

	return (
		<AbsoluteFill
			style={{
				background: "#0f172a",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{/* 正面：仅词 */}
			<div
				style={{
					position: "absolute",
					opacity: frontOpacity,
					fontSize: 78,
					fontWeight: "bold",
					color: "#e2e8f0",
					letterSpacing: 2,
				}}
			>
				{WORD}
			</div>
			{/* 反面：天职 + 例句 */}
			<div
				style={{
					position: "absolute",
					opacity: backOpacity,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}
			>
				<div style={{ fontSize: 42, color: "#94a3b8", marginBottom: 24 }}>{MEANING}</div>
				<div style={{ fontSize: 26, color: "#cbd5e1", maxWidth: "85%" }}>
					{EXAMPLE}
				</div>
			</div>
		</AbsoluteFill>
	);
};
