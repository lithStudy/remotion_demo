/**
 * CONCEPT_CARD 模板：符号化锚定，专业术语闪卡
 */
import React from "react";
import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { normalizeContent, TemplateContentRenderer } from "./TemplateContentRenderer";

export { conceptCardMeta as templateMeta } from "./template-definitions";

export interface BWConceptCardProps extends TemplateBaseProps {
	imageSrc?: string;
	conceptName?: string;
}

export const BWConceptCard: React.FC<BWConceptCardProps> = ({
	imageSrc,
	conceptName = "",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const enterSpring = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 200 },
		durationInFrames: 20,
	});
	const scale = interpolate(enterSpring, [0, 1], [0.85, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const normalizedContent = normalizeContent(content);

	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "42%",
					transform: `translate(-50%, -50%) scale(${scale})`,
					opacity: enterSpring,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					border: "4px solid #111111",
					borderRadius: 28,
					padding: "40px 60px 32px",
					gap: 24,
					backgroundColor: "#ffffff",
					boxShadow: "6px 6px 0 #111111",
					minWidth: 360,
				}}
			>
				<Img
					src={getSafeImageSrc(imageSrc)}
					style={{ width: 320, height: 320, objectFit: "contain" }}
				/>
				{conceptName && (
					<div
						style={{
							fontSize: 60,
							fontWeight: 900,
							color: BW_TEXT,
							letterSpacing: "0.04em",
							textAlign: "center",
							fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
						}}
					>
						{conceptName}
					</div>
				)}
			</div>
			<TemplateContentRenderer content={normalizedContent} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
