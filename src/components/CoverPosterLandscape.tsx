/**
 * 横屏 1920×1080 静态片头/封面：无动画，第 0 帧即最终画面；主视觉与竖屏共用 CoverPosterCore。
 * 供正片 Sequence 与 remotion still 导出使用。
 */
import React from "react";
import { AbsoluteFill } from "remotion";

import { CoverPosterCore, type StaticCoverProps } from "./CoverPosterCore";

/** 偏学院蓝，与理性、方法论气质一致 */
const DEFAULT_THEME = "#1d4ed8";

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
					background:
						"linear-gradient(168deg, #f8fafc 0%, #f1f5f9 42%, #e8eef5 100%)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					inset: "-4%",
					pointerEvents: "none",
					opacity: 0.38,
					background: `radial-gradient(circle at 14% 20%, rgba(148, 163, 184, 0.22), transparent 40%),
						radial-gradient(circle at 78% 55%, rgba(29, 78, 216, 0.12), transparent 45%),
						radial-gradient(circle at 48% 92%, rgba(51, 65, 85, 0.08), transparent 48%)`,
				}}
			/>

			<div
				style={{
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					opacity: 0.045,
					backgroundImage: `linear-gradient(90deg, #64748b 1px, transparent 1px),
						linear-gradient(#64748b 1px, transparent 1px)`,
					backgroundSize: "48px 48px",
				}}
			/>

			<div
				style={{
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					opacity: 0.1,
					backgroundImage: `radial-gradient(${themeColor} 1.5px, transparent 1.5px)`,
					backgroundSize: "28px 28px",
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
					right: "15%",
					top: "20%",
					width: "200px",
					height: "200px",
					borderRadius: "50%",
					background: themeColor,
					filter: "blur(120px)",
					opacity: 0.15,
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
					left: 72,
					right: 72,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					borderTop: `1px solid ${themeColor}28`,
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
