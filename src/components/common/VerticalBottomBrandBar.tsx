import React from "react";
import { Img } from "remotion";

import brandLogo from "../templates/images/logo.svg";

const DEFAULT_FONT_STACK =
	'"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif';

export type VerticalBottomBrandBarProps = {
	canvasW: number;
	brandName?: string;
	barHeight?: number;
	fontStack?: string;
};

export const VerticalBottomBrandBar: React.FC<VerticalBottomBrandBarProps> = ({
	canvasW,
	brandName = "沐时思维",
	barHeight = 112,
	fontStack = DEFAULT_FONT_STACK,
}) => (
	<div
		style={{
			width: canvasW,
			height: barHeight,
			boxSizing: "border-box",
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			gap: 16,
			padding: "10px 36px 14px",
			background:
				"linear-gradient(180deg, transparent 0%, rgba(13, 17, 23, 0.9) 32%, rgba(13, 17, 23, 1) 100%)",
		}}
	>
		<div
			style={{
				flexShrink: 0,
				padding: 8,
				boxSizing: "border-box",
				borderRadius: 12,
				border: "1px solid rgba(255, 255, 255, 0.12)",
				// background:
				// 	"linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(129, 140, 246, 0.15))",
			}}
		>
			<Img
				src={brandLogo}
				alt=""
				style={{ width: 28, height: 28, objectFit: "contain", display: "block" }}
			/>
		</div>
		<span
			style={{
				fontFamily: fontStack,
				fontSize: 28,
				fontWeight: 500,
				color: "#f0f9ff",
				letterSpacing: "0.20em",
				lineHeight: 1.15,
				textShadow: "0 2px 12px rgba(56, 189, 248, 0.25)",
				whiteSpace: "nowrap",
			}}
		>
			{brandName}
		</span>
	</div>
);
