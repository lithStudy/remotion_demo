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
	/** 右上角系列名（如「科学方法论」）；不传则用默认值 */
	seriesLabel: z.string().optional(),
	/** 角标下英文副标题 */
	seriesLabelEn: z.string().optional(),
	/** 方法论行中文词序列（如观察/假设/验证）；空数组则回退默认 */
	methodologySteps: z.array(z.string()).optional(),
	/** 方法论行英文整行 */
	methodologyStepsEn: z.string().optional(),
	/** 可选角标文案；不传则不显示 */
	badge: z.string().optional(),
});

export type StaticCoverProps = z.infer<typeof StaticCoverSchema>;

/** 偏学院蓝，与理性、方法论气质一致 */
const DEFAULT_THEME = "#1d4ed8";

const DEFAULT_SERIES_LABEL = "科学方法论";
const DEFAULT_SERIES_LABEL_EN = "SCIENTIFIC METHODOLOGY";
const DEFAULT_METHODOLOGY_STEPS = ["观察", "假设", "验证"] as const;
const DEFAULT_METHODOLOGY_STEPS_EN = "OBSERVE · HYPOTHESIZE · TEST";

export const StaticCover: React.FC<StaticCoverProps> = ({
	title,
	subtitle,
	themeColor = DEFAULT_THEME,
	seriesLabel = DEFAULT_SERIES_LABEL,
	seriesLabelEn = DEFAULT_SERIES_LABEL_EN,
	methodologySteps,
	methodologyStepsEn = DEFAULT_METHODOLOGY_STEPS_EN,
	badge,
}) => {
	const resolvedMethodologySteps =
		methodologySteps && methodologySteps.length > 0
			? methodologySteps
			: [...DEFAULT_METHODOLOGY_STEPS];

	return (
		<AbsoluteFill style={{ overflow: "hidden" }}>
			{/* 基底：中性纸感 + 冷灰蓝，弱化暖色，贴近方法论/笔记气质 */}
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

			{/* 细坐标线（低对比，像稿纸/坐标系） */}
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

			{/* 方法论向：点阵（略密，偏实验记录感） */}
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

			{/* 抽象几何：轨道感，克制不花哨 */}
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

			{/* 系列角标：小图/缩略图时仍易辨认*/}
			<div
				style={{
					position: "absolute",
					top: 40,
					right: 60,
					zIndex: 2,
					padding: "14px 26px 14px 22px",
					borderRadius: 8,
					backgroundColor: "#0a1628",
					borderLeft: `7px solid ${themeColor}`,
					boxShadow: `0 6px 28px rgba(15,23,42,0.55), 0 0 0 1px rgba(255,255,255,0.06)`,
					pointerEvents: "none",
				}}
			>
				<div
					style={{
						fontFamily: FONT_STACK,
						fontSize: 44,
						fontWeight: 900,
						lineHeight: 1.1,
						color: "#f1f5f9",
						letterSpacing: 3,
						textShadow: "0 1px 4px rgba(0,0,0,0.6)",
					}}
				>
					{seriesLabel}
				</div>
				<div
					style={{
						marginTop: 7,
						fontFamily:
							'"JetBrains Mono", "Cascadia Code", Consolas, monospace',
						fontSize: 15,
						fontWeight: 600,
						color: themeColor,
						letterSpacing: 2,
						opacity: 0.9,
					}}
				>
					{seriesLabelEn}
				</div>
			</div>

			{/* 主内容区：为顶部角标让出垂直空间 */}
			<div
				style={{
					position: "absolute",
					left: 72,
					right: 72,
					top: 0,
					bottom: 0,
					paddingTop: 160,
					paddingBottom: 160,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
					gap: 44,
				}}
			>
				{/* 顶部标签 & 装饰线 */}
				<div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
					<div style={{ display: "flex", alignItems: "center", gap: 18 }}>
						{badge && (
							<div
								style={{
									padding: "9px 20px",
									borderRadius: 5,
									fontFamily: FONT_STACK,
									fontSize: 28,
									fontWeight: 800,
									color: "#fff",
									backgroundColor: themeColor,
									letterSpacing: 2,
									boxShadow: `0 4px 16px ${themeColor}50`,
									whiteSpace: "nowrap",
								}}
							>
								{badge}
							</div>
						)}
						<div
							style={{
								height: 3,
								width: badge ? 48 : 72,
								background: `linear-gradient(90deg, ${themeColor}, transparent)`,
								borderRadius: 2,
							}}
						/>
					</div>
					<div
						style={{
							fontFamily:
								'"JetBrains Mono", "Cascadia Code", "SF Mono", Consolas, monospace',
							fontSize: 20,
							color: "#475569",
							letterSpacing: 2.5,
						}}
					>
						{resolvedMethodologySteps.map((step, i) => (
							<React.Fragment key={`${i}-${step}`}>
								{i > 0 && (
									<span style={{ margin: "0 10px", opacity: 0.3 }}>·</span>
								)}
								<span style={{ color: themeColor, fontWeight: 700 }}>{step}</span>
							</React.Fragment>
						))}
						<span style={{ margin: "0 16px", opacity: 0.2 }}>|</span>
						<span style={{ opacity: 0.45, letterSpacing: 1.5, fontSize: 18 }}>
							{methodologyStepsEn}
						</span>
					</div>
				</div>

				{/* 标题区 */}
				<div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
					<h1
						style={{
							margin: 0,
							padding: 0,
							fontFamily: FONT_STACK,
							fontSize: 108,
							fontWeight: 900,
							lineHeight: 1.18,
							letterSpacing: 3,
							color: "transparent",
							backgroundClip: "text",
							WebkitBackgroundClip: "text",
							backgroundImage: `linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, ${themeColor} 100%)`,
							wordBreak: "break-word",
						}}
					>
						{title}
					</h1>

					{/* 副标题 */}
					<div
						style={{
							display: "flex",
							alignItems: "stretch",
							gap: 22,
						}}
					>
						<div
							style={{
								width: 5,
								minHeight: 56,
								background: `linear-gradient(180deg, ${themeColor} 0%, ${themeColor}22 100%)`,
								borderRadius: 3,
								flexShrink: 0,
							}}
						/>
						<p
							style={{
								margin: 0,
								fontFamily: FONT_STACK,
								fontSize: 44,
								fontWeight: 500,
								lineHeight: 1.55,
								letterSpacing: 1,
								color: "#334155",
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
							fontSize: 17,
							fontWeight: 600,
							color: themeColor,
							letterSpacing: 3.5,
							opacity: 0.55,
						}}
					>
						KNOWLEDGE EXPLORATION
					</div>
				</div>

				{/* 系列进度指示器 */}
				<div style={{ display: "flex", alignItems: "center", gap: 6 }}>
					<div style={{ width: 36, height: 4, background: themeColor, borderRadius: 2, opacity: 0.6 }} />
					<div style={{ width: 10, height: 4, background: themeColor, borderRadius: 2, opacity: 0.22 }} />
					<div style={{ width: 10, height: 4, background: themeColor, borderRadius: 2, opacity: 0.22 }} />
				</div>
			</div>
		</AbsoluteFill>
	);
};
