import React from "react";

export type VerticalSceneSegmentConfig = {
	duration: number;
	label: string;
};

export type VerticalSegmentedProgressBarProps = {
	frame: number;
	coverDurationFrames: number;
	sceneConfigs: VerticalSceneSegmentConfig[];
	transitionDuration: number;
	fontStack?: string;
};

const DEFAULT_FONT_STACK =
	'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif';

function buildSegments(
	sceneConfigs: VerticalSceneSegmentConfig[],
	transitionDuration: number,
): { start: number; duration: number }[] {
	let currentStart = 0;
	return sceneConfigs.map((c, i) => {
		const isLast = i === sceneConfigs.length - 1;
		const segmentDuration = isLast ? c.duration : c.duration - transitionDuration;
		const segment = { start: currentStart, duration: segmentDuration };
		currentStart += segmentDuration;
		return segment;
	});
}

export const VerticalSegmentedProgressBar: React.FC<VerticalSegmentedProgressBarProps> = ({
	frame,
	coverDurationFrames,
	sceneConfigs,
	transitionDuration,
	fontStack = DEFAULT_FONT_STACK,
}) => {
	if (frame < coverDurationFrames) {
		return null;
	}
	const contentFrame = frame - coverDurationFrames;
	const segments = buildSegments(sceneConfigs, transitionDuration);

	const activeIndex = segments.findIndex(
		seg => contentFrame >= seg.start && contentFrame < seg.start + seg.duration,
	);
	const validActiveIndex = activeIndex !== -1 ? activeIndex : segments.length - 1;
	const activeLabel = sceneConfigs[validActiveIndex]?.label || "";

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: 12,
				zIndex: 100,
			}}
		>
			<div style={{ display: "flex", gap: 8, height: 8 }}>
				{segments.map((seg, i) => {
					const progress = Math.max(0, Math.min(1, (contentFrame - seg.start) / seg.duration));
					const isActive = i === validActiveIndex;
					return (
						<div
							key={i}
							style={{
								flex: 1,
								backgroundColor: isActive ? "rgba(34, 43, 69, 0.18)" : "rgba(34, 43, 69, 0.1)",
								borderRadius: 999,
								overflow: "hidden",
								border: isActive ? "1px solid rgba(34, 43, 69, 0.32)" : "1px solid rgba(34, 43, 69, 0.2)",
								boxShadow: isActive
									? "0 3px 10px rgba(31, 41, 55, 0.12)"
									: "0 1px 4px rgba(31, 41, 55, 0.08)",
							}}
						>
							<div
								style={{
									width: `${progress * 100}%`,
									height: "100%",
									background: isActive
										? "linear-gradient(90deg, rgba(29, 78, 216, 0.95), rgba(56, 189, 248, 0.92))"
										: "rgba(30, 41, 59, 0.72)",
									boxShadow: isActive ? "0 0 12px rgba(37, 99, 235, 0.35)" : "none",
								}}
							/>
						</div>
					);
				})}
			</div>

			<div
				style={{
					fontSize: 30,
					fontWeight: 700,
					fontFamily: fontStack,
					letterSpacing: 0.4,
					color: "rgba(17, 24, 39, 0.95)",
					textAlign: "left",
					textShadow: "0 1px 2px rgba(255,255,255,0.45)",
					padding: "6px 14px",
					backgroundColor: "rgba(255, 255, 255, 0.58)",
					border: "1px solid rgba(17, 24, 39, 0.12)",
					borderRadius: 10,
					alignSelf: "flex-start",
					backdropFilter: "blur(6px)",
					boxShadow: "0 6px 20px rgba(15, 23, 42, 0.12)",
				}}
			>
				{activeLabel}
			</div>
		</div>
	);
};
