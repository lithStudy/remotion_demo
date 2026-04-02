/**
 * 通用静态视频封面：无动画，第 0 帧即最终画面，适合 remotion still 导出缩略图。
 */
import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";

const FONT_STACK =
	'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif';

export const StaticCoverSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	themeColor: z.string().optional(),
	/** 可选角标文案；不传则不显示 */
	badge: z.string().optional(),
});

export type StaticCoverProps = z.infer<typeof StaticCoverSchema>;

const DEFAULT_THEME = "#2563EB";

export const StaticCover: React.FC<StaticCoverProps> = ({
	title,
	subtitle,
	themeColor = DEFAULT_THEME,
	badge,
}) => {
	return (
		<AbsoluteFill style={{ overflow: "hidden" }}>
			{/* 基底渐变（与系列视频主 Composition 风格一致，固定无动效） */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(165deg, #fffdf7 0%, #f7fbff 48%, #f0fdf4 100%)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					inset: "-4%",
					pointerEvents: "none",
					opacity: 0.32,
					background: `radial-gradient(circle at 18% 22%, rgba(255, 225, 170, 0.5), transparent 38%),
						radial-gradient(circle at 82% 58%, rgba(174, 222, 255, 0.42), transparent 42%),
						radial-gradient(circle at 50% 88%, rgba(191, 255, 208, 0.28), transparent 44%)`,
				}}
			/>
			{/* 轻微装饰网格，增强「科普 / 理性」质感 */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					opacity: 0.10,
					backgroundImage: `linear-gradient(${themeColor} 1px, transparent 2px),
						linear-gradient(90deg, ${themeColor} 1px, transparent 2px)`,
					backgroundSize: "48px 48px",
				}}
			/>
			{/* 主内容区（封面不含正片底部的字幕遮罩层） */}
			<div
				style={{
					position: "absolute",
					left: 48,
					right: 48,
					top: "18%",
					bottom: "20%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
					gap: 28,
				}}
			>
				<div
					style={{
						width: 72,
						height: 8,
						borderRadius: 999,
						background: `linear-gradient(90deg, ${themeColor}, rgba(56, 189, 248, 0.95))`,
						boxShadow: `0 0 24px ${themeColor}55`,
					}}
				/>
				<h1
					style={{
						margin: 0,
						padding: 0,
						fontFamily: FONT_STACK,
						fontSize: 98,
						fontWeight: 900,
						lineHeight: 1.12,
						letterSpacing: 1,
						color: "rgba(15, 23, 42, 0.96)",
						textShadow: "0 2px 0 rgba(255,255,255,0.85)",
					}}
				>
					{title}
				</h1>
				<p
					style={{
						margin: 0,
						maxWidth: "92%",
						fontFamily: FONT_STACK,
						fontSize: 38,
						fontWeight: 600,
						lineHeight: 1.55,
						letterSpacing: 0.3,
						color: "rgba(30, 41, 59, 0.88)",
					}}
				>
					{subtitle}
				</p>
				{badge ? (
					<div
						style={{
							marginTop: 8,
							padding: "12px 20px",
							borderRadius: 12,
							fontFamily: FONT_STACK,
							fontSize: 30,
							fontWeight: 700,
							color: themeColor,
							backgroundColor: "rgba(255, 255, 255, 0.92)",
							border: `1px solid ${themeColor}55`,
							backdropFilter: "blur(8px)",
							boxShadow:
								"0 8px 24px rgba(15, 23, 42, 0.12), 0 1px 0 rgba(255, 255, 255, 0.6)",
							textShadow: "0 1px 0 rgba(255, 255, 255, 0.85)",
						}}
					>
						{badge}
					</div>
				) : null}
			</div>
		</AbsoluteFill>
	);
};
