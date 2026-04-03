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
			
			{/* 科普向装饰：点阵网格 */}
			<div
				style={{
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					opacity: 0.12,
					backgroundImage: `radial-gradient(${themeColor} 2px, transparent 2px)`,
					backgroundSize: "36px 36px",
				}}
			/>

			{/* 科普向装饰：抽象几何光环（增加空间感与理性气质） */}
			<div
				style={{
					position: "absolute",
					right: "-15%",
					top: "-25%",
					width: "1200px",
					height: "1200px",
					borderRadius: "50%",
					border: `2px dashed ${themeColor}`,
					opacity: 0.08,
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
					opacity: 0.12,
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

			{/* 主内容区 */}
			<div
				style={{
					position: "absolute",
					left: 60,
					right: 60,
					top: 0,
					bottom: 0,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
					gap: 40,
				}}
			>
				{/* 顶部标签 & 装饰线 */}
				<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
					<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
						{badge && (
							<div
								style={{
									padding: "10px 20px",
									borderRadius: 6,
									fontFamily: FONT_STACK,
									fontSize: 28,
									fontWeight: 800,
									color: "#fff",
									backgroundColor: themeColor,
									letterSpacing: 2,
									boxShadow: `0 8px 24px ${themeColor}55`,
									whiteSpace: "nowrap",
								}}
							>
								{badge}
							</div>
						)}
						<div
							style={{
								width: 60,
								height: 3,
								background: themeColor,
								opacity: 0.5,
							}}
						/>
					</div>
					<div
						style={{
							fontFamily: "monospace",
							fontSize: 20,
							color: themeColor,
							opacity: 0.6,
							letterSpacing: 3,
						}}
					>
						SCIENCE // ANALYSIS // INSIGHT
					</div>
				</div>

				{/* 标题区 */}
				<div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
					<h1
						style={{
							margin: 0,
							padding: 0,
							fontFamily: FONT_STACK,
							fontSize: 110,
							fontWeight: 900,
							lineHeight: 1.15,
							letterSpacing: 2,
							color: "transparent",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							backgroundImage: `linear-gradient(135deg, #0f172a 0%, #334155 60%, ${themeColor} 100%)`,
							textShadow: "0 4px 24px rgba(0,0,0,0.04)",
							wordBreak: "break-word",
						}}
					>
						{title}
					</h1>
					
					{/* 副标题 */}
					<div
						style={{
							display: "flex",
							alignItems: "flex-start",
							gap: 20,
						}}
					>
						<div
							style={{
								width: 6,
								height: "100%",
								minHeight: 60,
								background: `linear-gradient(180deg, ${themeColor}, transparent)`,
								borderRadius: 3,
								marginTop: 8,
							}}
						/>
						<p
							style={{
								margin: 0,
								fontFamily: FONT_STACK,
								fontSize: 40,
								fontWeight: 500,
								lineHeight: 1.5,
								letterSpacing: 1,
								color: "#475569",
							}}
						>
							{subtitle}
						</p>
					</div>
				</div>
			</div>

			{/* 底部学术/杂志风装饰：轻量化处理 */}
			<div
				style={{
					position: "absolute",
					bottom: 48,
					left: 60,
					right: 60,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					borderTop: `1px solid ${themeColor}33`,
					paddingTop: 20,
					pointerEvents: "none",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: 12 }}>
					{/* 几何菱形点缀 */}
					<div
						style={{
							width: 8,
							height: 8,
							background: themeColor,
							transform: "rotate(45deg)",
							opacity: 0.6,
						}}
					/>
					<div
						style={{
							fontFamily: FONT_STACK,
							fontSize: 18,
							fontWeight: 600,
							color: themeColor,
							letterSpacing: 3,
							opacity: 0.6,
						}}
					>
						KNOWLEDGE EXPLORATION
					</div>
				</div>
				
				{/* 类似进度/系列的指示器 */}
				<div style={{ display: "flex", gap: 6 }}>
					<div style={{ width: 32, height: 4, background: themeColor, borderRadius: 2, opacity: 0.5 }} />
					<div style={{ width: 8, height: 4, background: themeColor, borderRadius: 2, opacity: 0.2 }} />
					<div style={{ width: 8, height: 4, background: themeColor, borderRadius: 2, opacity: 0.2 }} />
				</div>
			</div>
		</AbsoluteFill>
	);
};
