import React from "react";
import {useVideoConfig} from "remotion";

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
	const {width: compositionWidth} = useVideoConfig();

	if (frame < coverDurationFrames) {
		return null;
	}
	const contentFrame = frame - coverDurationFrames;
	const segments = buildSegments(sceneConfigs, transitionDuration);

	const activeIndex = segments.findIndex(
		seg => contentFrame >= seg.start && contentFrame < seg.start + seg.duration,
	);
	const validActiveIndex = activeIndex !== -1 ? activeIndex : segments.length - 1;

	/** 窄画布略缩字号，减轻挤成一团时的阅读压力（仍配合单行省略） */
	// const labelFontSize = compositionWidth <= 720 ? 14 : compositionWidth <= 900 ? 15 : 16;
	const labelFontSize = 20

	const dividerStyle: React.CSSProperties = {
		width: 1,
		flexShrink: 0,
		alignSelf: "stretch",
		backgroundColor: "rgba(255, 255, 255, 0.28)",
	};

	/** 已完成：浅底 + 深字；当前：蓝底 + 白字（未铺满时白字在深色底上仍可读）；未播：亮字提高对比 */
	const completedSegmentFill = "rgb(203, 213, 225)";
	const activeSegmentFill = "rgb(37, 99, 235)";

	return (
		<div
			style={{
				width: "100%",
				minWidth: 0,
				boxSizing: "border-box",
				display: "flex",
				flexDirection: "row",
				alignItems: "stretch",
				borderRadius: 0,
				overflow: "hidden",
				backgroundColor: "rgba(255, 255, 255, 0.12)",
			}}
		>
			{segments.map((seg, i) => {
				const isActive = i === validActiveIndex;
				const isCompleted = contentFrame >= seg.start + seg.duration;
				const progress = isCompleted
					? 1
					: isActive
						? Math.max(0, Math.min(1, (contentFrame - seg.start) / seg.duration))
						: 0;

				const label = sceneConfigs[i]?.label ?? "";

				return (
					<React.Fragment key={i}>
						{i > 0 ? <div style={dividerStyle} aria-hidden /> : null}
						<div
							style={{
								flex: 1,
								minWidth: 0,
								position: "relative",
								minHeight: 44,
							}}
						>
							<div
								style={{
									position: "absolute",
									left: 0,
									top: 0,
									bottom: 0,
									width: `${progress * 100}%`,
									background: isCompleted ? completedSegmentFill : activeSegmentFill,
								}}
							/>
							<div
								style={{
									position: "relative",
									zIndex: 1,
									boxSizing: "border-box",
									width: "100%",
									minWidth: 0,
									minHeight: 40,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									padding: "6px 6px",
								}}
							>
								<span
									title={label}
									style={{
										display: "block",
										width: "100%",
										minWidth: 0,
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
										textAlign: "center",
										fontSize: labelFontSize,
										fontWeight: isActive ? 700 : 600,
										fontFamily: fontStack,
										letterSpacing: isCompleted ? 0.12 : 0.2,
										lineHeight: 1.35,
										...(isCompleted
											? {
													color: "rgb(15, 23, 42)",
													opacity: 1,
													textShadow: "none",
												}
											: isActive
												? {
														color: "rgba(255, 255, 255, 0.98)",
														opacity: 1,
														textShadow:
															"0 1px 2px rgba(0, 0, 0, 0.45), 0 0 12px rgba(0, 0, 0, 0.25)",
													}
												: {
														color: "rgb(241, 245, 249)",
														opacity: 0.88,
														textShadow:
															"0 1px 3px rgba(0, 0, 0, 0.85), 0 0 1px rgba(0, 0, 0, 1)",
													}),
									}}
								>
									{label}
								</span>
							</div>
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};
