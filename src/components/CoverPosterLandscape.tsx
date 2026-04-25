/**
 * 横屏 1920×1080 静态片头/封面：无动画，第 0 帧即最终画面；主视觉与竖屏共用 CoverPosterCore。
 * 供正片 Sequence 与 remotion still 导出使用。
 */
import React from "react";
import { AbsoluteFill } from "remotion";

import { CoverPosterCore, type StaticCoverProps } from "./CoverPosterCore";

const DEFAULT_THEME = "#1d4ed8";

const COVER_SOLID_BG = "#f1f5f9";

/** 与竖屏统一的深色资讯壳层（纯色，避免预览图对渐变压缩失真） */
const COVER_DARK_SOLID = "#0f172a";

const MONO_FOOTER =
	'"JetBrains Mono", "Cascadia Code", "SF Mono", Consolas, monospace';

export const LandscapeCoverPoster: React.FC<StaticCoverProps> = ({
	themeColor = DEFAULT_THEME,
	surface = "light",
	seriesLabelEn,
	...coreProps
}) => {
	const isDark = surface === "dark";

	return (
		<AbsoluteFill style={{ overflow: "hidden" }}>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: isDark ? COVER_DARK_SOLID : COVER_SOLID_BG,
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
					opacity: isDark ? 0.16 : 0.07,
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
					border: `1px solid ${isDark ? `${themeColor}99` : themeColor}`,
					opacity: isDark ? 0.22 : 0.1,
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
				<CoverPosterCore
					themeColor={themeColor}
					surface={surface}
					seriesLabelEn={seriesLabelEn}
					{...coreProps}
				/>
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
					paddingTop: 22,
					pointerEvents: "none",
				}}
			>
				{seriesLabelEn?.trim() ? (
					<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
						<div
							style={{
								width: 7,
								height: 7,
								background: themeColor,
								transform: "rotate(45deg)",
								opacity: isDark ? 0.85 : 0.55,
							}}
						/>
						<div
							style={{
								fontFamily: MONO_FOOTER,
								fontSize: 22,
								fontWeight: 600,
								color: isDark ? "#e2e8f0" : themeColor,
								letterSpacing: 3.5,
								opacity: isDark ? 0.88 : 0.55,
							}}
						>
							{seriesLabelEn.trim()}
						</div>
					</div>
				) : (
					<div />
				)}

				<div style={{ display: "flex", alignItems: "center", gap: 6 }}>
					<div
						style={{
							width: 36,
							height: 4,
							background: themeColor,
							borderRadius: 2,
							opacity: isDark ? 0.75 : 0.6,
						}}
					/>
					<div
						style={{
							width: 10,
							height: 4,
							background: themeColor,
							borderRadius: 2,
							opacity: isDark ? 0.35 : 0.22,
						}}
					/>
					<div
						style={{
							width: 10,
							height: 4,
							background: themeColor,
							borderRadius: 2,
							opacity: isDark ? 0.35 : 0.22,
						}}
					/>
				</div>
			</div>
		</AbsoluteFill>
	);
};
