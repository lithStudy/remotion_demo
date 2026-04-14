/**
 * 横屏 1920×1080 静态片头/封面：无动画，第 0 帧即最终画面；主视觉与竖屏共用 CoverPosterCore。
 * 供正片 Sequence 与 remotion still 导出使用。
 */
import React from "react";
import { AbsoluteFill } from "remotion";

import { CoverPosterCore, type StaticCoverProps } from "./CoverPosterCore";

/** 偏学院蓝，与理性、方法论气质一致 */
const DEFAULT_THEME = "#1d4ed8";

/** 封面底色素色（与原先灰阶主色一致） */
const COVER_SOLID_BG = "#f1f5f9";

export const LandscapeCoverPoster: React.FC<StaticCoverProps> = ({
	themeColor = DEFAULT_THEME,
	...coreProps
}) => {
	return (
		<AbsoluteFill style={{ overflow: "hidden" }}>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: COVER_SOLID_BG,
				}}
			/>

			<div
				style={{
					position: "absolute",
					right: "-15%",
					top: "-25%",
					width: "1200px",
					height: "1200px",
					borderRadius: "50%",
					border: `1.5px dashed ${themeColor}`,
					opacity: 0.07,
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					right: "5%",
					top: "5%",
					width: "600px",
					height: "600px",
					borderRadius: "50%",
					border: `1px solid ${themeColor}`,
					opacity: 0.1,
					pointerEvents: "none",
				}}
			/>

			<div
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CoverPosterCore themeColor={themeColor} {...coreProps} />
			</div>

			<div
				style={{
					position: "absolute",
					bottom: 50,
					left: 200,
					right: 200,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					// borderTop: `1px solid ${themeColor}28`,
					paddingTop: 22,
					pointerEvents: "none",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
					<div
						style={{
							width: 7,
							height: 7,
							background: themeColor,
							transform: "rotate(45deg)",
							opacity: 0.55,
						}}
					/>
					<div
						style={{
							fontFamily: '"JetBrains Mono", "Cascadia Code", Consolas, monospace',
							fontSize: 22,
							fontWeight: 600,
							color: themeColor,
							letterSpacing: 3.5,
							opacity: 0.55,
						}}
					>
						KNOWLEDGE EXPLORATION
					</div>
				</div>

				<div style={{ display: "flex", alignItems: "center", gap: 6 }}>
					<div style={{ width: 36, height: 4, background: themeColor, borderRadius: 2, opacity: 0.6 }} />
					<div style={{ width: 10, height: 4, background: themeColor, borderRadius: 2, opacity: 0.22 }} />
					<div style={{ width: 10, height: 4, background: themeColor, borderRadius: 2, opacity: 0.22 }} />
				</div>
			</div>
		</AbsoluteFill>
	);
};
