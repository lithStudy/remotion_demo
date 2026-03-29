/**
 * QUOTE_CITATION 模板：社会认同背书，引用展示
 */
import React from "react";
import { AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BW_TEXT, getSafeImageSrc, type TemplateBaseProps } from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { quoteCitationMeta as templateMeta } from "./template-definitions";

export interface BWQuoteCitationProps extends TemplateBaseProps {
	imageSrc?: string;
	quoteSource?: string;
}

export const BWQuoteCitation: React.FC<BWQuoteCitationProps> = ({
	imageSrc,
	quoteSource = "",
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();
	const opacity = spring({
		frame,
		fps,
		config: { damping: 80, stiffness: 100 },
		durationInFrames: 30,
	});
	return (
		<AbsoluteFill style={style}>
			<div
				style={{
					position: "absolute",
					left: "8%",
					right: "8%",
					top: "15%",
					opacity,
				}}
			>
				<div
					style={{						
						fontSize: 200,
						lineHeight: 0.7,
						color: BW_TEXT,
						fontFamily: "Georgia, 'Times New Roman', serif",
						fontWeight: 900,
					}}
				>
					"
				</div>
				<div style={{ display: "flex", justifyContent: "center", marginTop: 16 }}>
					<Img
						src={getSafeImageSrc(imageSrc)}
						style={{ width: 160, height: 160, objectFit: "contain", opacity: 0.5 }}
					/>
				</div>
				{quoteSource && (
					<div
						style={{
							marginTop: 100,
							fontSize: 30,
							color: "#555555",
							fontStyle: "italic",
							borderLeft: "4px solid #111111",
							paddingLeft: 24,
							lineHeight: 1.4,
							fontFamily: '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
						}}
					>
						— {quoteSource}
					</div>
				)}
			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
