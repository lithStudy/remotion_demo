/**
 * DOS_AND_DONTS 模板：损失厌恶，避坑对比
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { dosAndDontsMeta as templateMeta } from "./template-definitions";

export interface BWDosAndDontsProps extends TemplateBaseProps {
	leftSrc?: string;
	rightSrc?: string;
	dontLabel?: string;
	doLabel?: string;
}

export const BWDosAndDonts: React.FC<BWDosAndDontsProps> = ({
	leftSrc,
	rightSrc,
	dontLabel = "❌ 错误",
	doLabel = "✅ 正确",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, width, height } = useVideoConfig();
	const half = width / 2;
	const progressSafeArea = 40;
	// 与 BWSubtitle 保持一致：底部约 10% 为字幕安全区，模板主内容不进入该区域。
	const subtitleSafeArea = Math.max(48, Math.round(height * 0.1));

	const leftSpring = spring({ frame, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 20 });
	const rightSpring = spring({ frame: frame - 10, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 20 });
	const leftX = interpolate(leftSpring, [0, 1], [-half, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const rightX = interpolate(rightSpring, [0, 1], [half, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					display: "flex",
					width: "100%",
					height: `calc(100% - ${progressSafeArea}px - ${subtitleSafeArea}px)`,
					marginTop: progressSafeArea,
				}}
			>
				<div style={{
					flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					gap: 24, transform: `translateX(${leftX}px)`, backgroundColor: "rgba(229, 62, 62, 0.05)", borderRight: "4px solid #E53E3E",
				}}>
					<div style={{ fontSize: 40, fontWeight: 900, color: "#E53E3E", textAlign: "center", padding: "0 16px", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
						{dontLabel}
					</div>
					<Img src={getSafeImageSrc(leftSrc)} style={{ maxWidth: "55%", maxHeight: "38%", objectFit: "contain", opacity: 0.75 }} />
				</div>
				<div style={{
					flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
					gap: 24, transform: `translateX(${rightX}px)`, backgroundColor: "rgba(39, 103, 73, 0.05)",
				}}>
					<div style={{ fontSize: 40, fontWeight: 900, color: "#276749", textAlign: "center", padding: "0 16px", fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif' }}>
						{doLabel}
					</div>
					<Img src={getSafeImageSrc(rightSrc)} style={{ maxWidth: "55%", maxHeight: "38%", objectFit: "contain" }} />
				</div>
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
