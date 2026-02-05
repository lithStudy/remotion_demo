import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

/** F6 例句先行再收束：先整句(高亮 vocation) → 其他词淡出，只留 vocation + 天职 */
const WORD = "vocation";
const MEANING = "天职";
const EXAMPLE = "Nursing became her vocation.";
const SCENE_DURATION = 280;

export const calculateScene6Duration = (): number => SCENE_DURATION;

export const Scene6: React.FC = () => {
	const frame = useCurrentFrame();

	// 0~90 整句，90~150 其他淡出，150~280 只留词+释义
	const showFullSentence = frame < 150;
	const shrinkOthers = frame >= 90 && frame < 150;
	const showWordOnly = frame >= 150;

	const sentenceOpacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const othersOpacity = shrinkOthers
		? interpolate(frame, [90, 150], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })
		: 1;
	const wordScale = showWordOnly ? interpolate(frame, [150, 180], [0.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
	const wordOnlyOpacity = showWordOnly ? interpolate(frame, [150, 170], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
	const meaningOpacity = showWordOnly ? interpolate(frame, [170, 195], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;

	return (
		<AbsoluteFill
			style={{
				background: "#1e293b",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{showFullSentence && (
				<div
					style={{
						opacity: sentenceOpacity * othersOpacity,
						fontSize: 34,
						color: "#94a3b8",
						maxWidth: "90%",
						textAlign: "center",
					}}
				>
					Nursing became her <span style={{ color: "#7dd3fc", fontWeight: "bold" }}>vocation</span>.
				</div>
			)}
			{showWordOnly && (
				<>
					<div
						style={{
							opacity: wordOnlyOpacity,
							transform: `scale(${wordScale})`,
							fontSize: 76,
							fontWeight: "bold",
							color: "#f1f5f9",
							letterSpacing: 2,
						}}
					>
						{WORD}
					</div>
					<div style={{ opacity: meaningOpacity, marginTop: 20, fontSize: 38, color: "#94a3b8" }}>
						{MEANING}
					</div>
				</>
			)}
		</AbsoluteFill>
	);
};
