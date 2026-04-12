/**
 * 横/竖屏封面共用的居中主视觉：系列标签 + 主副标题 + 细线装饰。
 * StaticCoverSchema / StaticCoverProps 定义于此，供 Remotion defaultProps 与封面组件复用。
 */
import React from "react";
import { useVideoConfig } from "remotion";
import { z } from "zod";

export const StaticCoverSchema = z.object({
	title: z.string(),
	subtitle: z.string(),
	themeColor: z.string().optional(),
	/** 系列名（如「科学方法论」）；不传则用默认值 */
	seriesLabel: z.string().optional(),
	/** 标签下英文副标题 */
	seriesLabelEn: z.string().optional(),
	/** 方法论行中文词序列（如观察/假设/验证）；封面核心块不展示，保留以兼容既有 props */
	methodologySteps: z.array(z.string()).optional(),
	/** 方法论行英文整行 */
	methodologyStepsEn: z.string().optional(),
	/** 可选角标文案；封面核心块不展示，保留以兼容既有 props */
	badge: z.string().optional(),
});

export type StaticCoverProps = z.infer<typeof StaticCoverSchema>;

const FONT_STACK =
	'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif';
const MONO_STACK =
	'"JetBrains Mono", "Cascadia Code", "SF Mono", Consolas, monospace';

/** 设计稿参考：1920×1440（与竖屏 1080×1440 同高）；scale 取 min(宽比, 高比) 使横屏主视觉随画幅放大且受高度约束 */
const DESIGN_REF_W = 1920;
const DESIGN_REF_H = 1440;
const THUMB_READABILITY_MULT = 1.65;

const DEFAULT_THEME = "#1d4ed8";
const DEFAULT_SERIES_LABEL = "科学方法论";

export const CoverPosterCore: React.FC<StaticCoverProps> = ({
	title,
	subtitle,
	themeColor = DEFAULT_THEME,
	seriesLabel = DEFAULT_SERIES_LABEL,
	seriesLabelEn,
}) => {
	const { width, height } = useVideoConfig();
	const scale = Math.min(width / DESIGN_REF_W, height / DESIGN_REF_H);
	const u = (px: number) => Math.round(px * scale);
	const uf = (px: number) => Math.round(px * scale * THUMB_READABILITY_MULT);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: u(52),
				padding: `0 ${u(110)}px`,
				boxSizing: "border-box",
				textAlign: "center",
				width: "100%",
				fontFamily: FONT_STACK,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: u(14),
				}}
			>
				<div
					style={{
						display: "inline-flex",
						alignItems: "center",
						padding: `${u(14)}px ${u(36)}px`,
						borderRadius: u(6),
						background: themeColor,
						boxShadow: `0 ${u(4)}px ${u(24)}px ${themeColor}44`,
					}}
				>
					<span
						style={{
							fontSize: uf(50),
							fontWeight: 900,
							color: "#ffffff",
							letterSpacing: uf(4),
							lineHeight: 1.15,
						}}
					>
						{seriesLabel}
					</span>
				</div>
				{seriesLabelEn ? (
					<span
						style={{
							fontFamily: MONO_STACK,
							fontSize: uf(16),
							fontWeight: 600,
							color: themeColor,
							letterSpacing: uf(3),
							opacity: 0.65,
						}}
					>
						{seriesLabelEn}
					</span>
				) : null}
			</div>

			<div style={{ display: "flex", alignItems: "center", gap: u(18), width: "100%" }}>
				<div
					style={{
						flex: 1,
						height: u(1),
						background: `linear-gradient(90deg, transparent, ${themeColor}44)`,
					}}
				/>
				<div
					style={{
						width: u(8),
						height: u(8),
						borderRadius: "50%",
						background: themeColor,
						opacity: 0.45,
					}}
				/>
				<div
					style={{
						flex: 1,
						height: u(1),
						background: `linear-gradient(270deg, transparent, ${themeColor}44)`,
					}}
				/>
			</div>

			<h1
				style={{
					margin: 0,
					padding: 0,
					fontSize: uf(170),
					fontWeight: 900,
					lineHeight: 1.1,
					letterSpacing: uf(2),
					color: "#0f172a",
					wordBreak: "break-word",
				}}
			>
				{title}
			</h1>

			<div style={{ display: "flex", alignItems: "center", gap: u(18), width: "100%" }}>
				<div
					style={{
						flex: 1,
						height: u(1),
						background: `linear-gradient(90deg, transparent, ${themeColor}44)`,
					}}
				/>
				<div
					style={{
						width: u(8),
						height: u(8),
						borderRadius: "50%",
						background: themeColor,
						opacity: 0.45,
					}}
				/>
				<div
					style={{
						flex: 1,
						height: u(1),
						background: `linear-gradient(270deg, transparent, ${themeColor}44)`,
					}}
				/>
			</div>

			<p
				style={{
					margin: 0,
					fontSize: uf(75),
					fontWeight: 600,
					lineHeight: 1.6,
					letterSpacing: uf(1),
					color: "#334155",
				}}
			>
				{subtitle}
			</p>
		</div>
	);
};
