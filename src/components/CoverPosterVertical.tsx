/**
 * 竖屏 3:4 静态封面（简化居中 + 装饰版）
 * 主视觉与横屏共用 CoverPosterCore
 * 装饰：四角括号框 + 标题两侧横线 + 顶底细线
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

/** 四角括号：L 形双线，两条边，可控 arm 长和线宽 */
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
	...coreProps
}) => {
	return (
		<AbsoluteFill style={{ overflow: "hidden", fontFamily: FONT_STACK }}>
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
					top: u(48),
					left: u(64),
					right: u(64),
					height: u(2),
					background: `${themeColor}55`,
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
					background: `${themeColor}55`,
					borderRadius: u(1),
					pointerEvents: "none",
				}}
			/>

			<div style={{ position: "absolute", inset: u(48), pointerEvents: "none" }}>
				<CornerBracket color={themeColor} size={u(56)} thickness={u(3)} corner="tl" opacity={0.7} />
				<CornerBracket color={themeColor} size={u(56)} thickness={u(3)} corner="tr" opacity={0.7} />
				<CornerBracket color={themeColor} size={u(56)} thickness={u(3)} corner="bl" opacity={0.7} />
				<CornerBracket color={themeColor} size={u(56)} thickness={u(3)} corner="br" opacity={0.7} />
			</div>

			<div
				style={{
					position: "absolute",
					inset: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<CoverPosterCore themeColor={themeColor} {...coreProps} titleFitSingleLine />
			</div>
		</AbsoluteFill>
	);
};
