/**
 * 竖屏 3:4 静态封面
 * 主视觉与横屏共用 CoverPosterCore
 * surface=light：浅底 + 四角括号；surface=dark：深蓝纯色底 + 左侧品牌条 + 顶底细线
 * 画布固定 1080×1440
 */
import React from "react";
import { AbsoluteFill } from "remotion";

import { CoverPosterCore, type StaticCoverProps } from "./CoverPosterCore";

const FONT_STACK =
	'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif';

export const VERTICAL_COVER_POSTER_W = 1080;
export const VERTICAL_COVER_POSTER_H = 1440;

const SCALE = VERTICAL_COVER_POSTER_W / 1920;
const u = (px: number) => Math.round(px * SCALE);

const DEFAULT_THEME = "#1d4ed8";

const COVER_SOLID_BG = "#f1f5f9";

const COVER_DARK_SOLID = "#0f172a";

/** 四角括号：L 形，浅色壳用 */
const CornerBracket: React.FC<{
	color: string;
	size: number;
	thickness: number;
	corner: "tl" | "tr" | "bl" | "br";
	opacity?: number;
}> = ({ color, size, thickness, corner, opacity = 1 }) => {
	const isTop = corner === "tl" || corner === "tr";
	const isLeft = corner === "tl" || corner === "bl";
	return (
		<div
			style={{
				position: "absolute",
				...(isTop ? { top: 0 } : { bottom: 0 }),
				...(isLeft ? { left: 0 } : { right: 0 }),
				width: size,
				height: size,
				opacity,
				pointerEvents: "none",
			}}
		>
			<div
				style={{
					position: "absolute",
					...(isTop ? { top: 0 } : { bottom: 0 }),
					...(isLeft ? { left: 0 } : { right: 0 }),
					width: size,
					height: thickness,
					background: color,
					borderRadius: thickness,
				}}
			/>
			<div
				style={{
					position: "absolute",
					...(isTop ? { top: 0 } : { bottom: 0 }),
					...(isLeft ? { left: 0 } : { right: 0 }),
					width: thickness,
					height: size,
					background: color,
					borderRadius: thickness,
				}}
			/>
		</div>
	);
};

export const VerticalCoverPoster: React.FC<StaticCoverProps> = ({
	themeColor = DEFAULT_THEME,
	surface = "light",
	...coreProps
}) => {
	const isDark = surface === "dark";

	const lineColor = isDark ? `${themeColor}aa` : `${themeColor}55`;
	const bracketOpacity = 0.7;

	return (
		<AbsoluteFill style={{ overflow: "hidden", fontFamily: FONT_STACK }}>
			<div
				style={{
					position: "absolute",
					inset: 0,
					background: isDark ? COVER_DARK_SOLID : COVER_SOLID_BG,
				}}
			/>

			{isDark ? (
				<div
					style={{
						position: "absolute",
						left: 0,
						top: u(120),
						bottom: u(120),
						width: u(5),
						background: themeColor,
						opacity: 0.45,
						pointerEvents: "none",
					}}
				/>
			) : null}

			<div
				style={{
					position: "absolute",
					top: u(48),
					left: u(64),
					right: u(64),
					height: u(2),
					background: lineColor,
					borderRadius: u(1),
					pointerEvents: "none",
				}}
			/>
			<div
				style={{
					position: "absolute",
					bottom: u(48),
					left: u(64),
					right: u(64),
					height: u(2),
					background: lineColor,
					borderRadius: u(1),
					pointerEvents: "none",
				}}
			/>

			{!isDark ? (
				<div style={{ position: "absolute", inset: u(48), pointerEvents: "none" }}>
					<CornerBracket
						color={themeColor}
						size={u(56)}
						thickness={u(3)}
						corner="tl"
						opacity={bracketOpacity}
					/>
					<CornerBracket
						color={themeColor}
						size={u(56)}
						thickness={u(3)}
						corner="tr"
						opacity={bracketOpacity}
					/>
					<CornerBracket
						color={themeColor}
						size={u(56)}
						thickness={u(3)}
						corner="bl"
						opacity={bracketOpacity}
					/>
					<CornerBracket
						color={themeColor}
						size={u(56)}
						thickness={u(3)}
						corner="br"
						opacity={bracketOpacity}
					/>
				</div>
			) : null}

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
					{...coreProps}
					titleFitSingleLine
				/>
			</div>
		</AbsoluteFill>
	);
};
