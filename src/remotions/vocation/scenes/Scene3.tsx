import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/** F3 三块屏循环：词 → 词+天职 → 例句(高亮) → 回到词，固定节奏 2 轮 */
const WORD = "vocation";
const MEANING = "天职";
const EXAMPLE = "Teaching is her vocation.";
const BLOCK_DURATION = 75;
const BLOCKS = 4;
const ROUNDS = 2;
const SCENE_DURATION = ROUNDS * BLOCKS * BLOCK_DURATION;

export const calculateScene3Duration = (): number => SCENE_DURATION;

export const Scene3: React.FC = () => {
	const frame = useCurrentFrame();
	const blockIndex = Math.floor(frame / BLOCK_DURATION) % BLOCKS;
	const round = Math.floor(frame / (BLOCKS * BLOCK_DURATION));
	const inBlock = frame % BLOCK_DURATION;

	const fadeIn = interpolate(inBlock, [0, 15], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

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
			{blockIndex === 0 && (
				<div style={{ opacity: fadeIn, fontSize: 80, fontWeight: "bold", color: "#eee", letterSpacing: 2 }}>
					{WORD}
				</div>
			)}
			{blockIndex === 1 && (
				<>
					<div style={{ opacity: fadeIn, fontSize: 80, fontWeight: "bold", color: "#eee", letterSpacing: 2 }}>
						{WORD}
					</div>
					<div style={{ opacity: fadeIn, marginTop: 16, fontSize: 38, color: "#aaa" }}>{MEANING}</div>
				</>
			)}
			{blockIndex === 2 && (
				<div
					style={{
						opacity: fadeIn,
						fontSize: 28,
						color: "#ccc",
						maxWidth: "85%",
						textAlign: "center",
					}}
				>
					Teaching is her <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>vocation</span>.
				</div>
			)}
			{blockIndex === 3 && (
				<div style={{ opacity: fadeIn, fontSize: 80, fontWeight: "bold", color: "#eee", letterSpacing: 2 }}>
					{WORD}
				</div>
			)}
		</AbsoluteFill>
	);
};
