import React from "react";
import {
	AbsoluteFill,
	Audio,
	Img,
	interpolate,
	staticFile,
	useCurrentFrame,
} from "remotion";

import brandLogoBlue from "../templates/images/logo-blue.svg";
import { RemotionLayoutMetricsProvider } from "../RemotionLayoutMetricsContext";

/** 品牌角标专用衬线栈，与正文黑体区分，偏书卷/资讯气质 */
const BRAND_FONT_STACK =
	'"Source Han Sans Medium", "Noto Serif SC", "Source Han Serif SC", "STSong", "SimSun", serif';

const DEFAULT_BRAND_NAME = "沐时思维";

export type NarratorLandscapeShellProps = {
	designW: number;
	designH: number;
	containScale: number;
	/** 为 true 时不渲染背景 BGM（对齐 step4 mute_audio） */
	muteAudio?: boolean;
	brandName?: string;
	children: React.ReactNode;
};

const LandscapeBrandMark: React.FC<{ brandName: string }> = ({ brandName }) => (
	<div
		style={{
			position: "absolute",
			top: 36,
			right: 40,
			zIndex: 20,
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			gap: 10,
			pointerEvents: "none",
		}}
	>
		<Img
			src={brandLogoBlue}
			alt=""
			style={{ width: 34, height: 34, objectFit: "contain", display: "block", flexShrink: 0 }}
		/>
		<span
			style={{
				fontFamily: BRAND_FONT_STACK,
				fontSize: 28,
				fontWeight: 600,
				color: "#334155",
				letterSpacing: "0.06em",
				lineHeight: 1.15,
				whiteSpace: "nowrap",
				textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
			}}
		>
			{brandName}
		</span>
	</div>
);

/** 横屏 1920×1080 外壳：BGM、背景、呼吸光、右上角品牌角标、版心 contain */
export const NarratorLandscapeShell: React.FC<NarratorLandscapeShellProps> = ({
	designW,
	designH,
	containScale,
	muteAudio = false,
	brandName = DEFAULT_BRAND_NAME,
	children,
}) => {
	const frame = useCurrentFrame();
	const bgShiftX = interpolate(frame % 240, [0, 120, 240], [-4, 4, -4], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const bgShiftY = interpolate(frame % 180, [0, 90, 180], [-3, 3, -3], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});
	const bgBreathOpacity = interpolate(frame % 150, [0, 75, 150], [0.22, 0.34, 0.22], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<AbsoluteFill style={{ background: "#0f172a" }}>
			{muteAudio ? null : (
				<Audio
					src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
					loop
					volume={0.1}
					name="Background music"
				/>
			)}
			<div
				style={{
					height: "100%",
					width: "100%",
					background: "linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #e2e8f0 100%)",
				}}
			/>
			<div
				style={{
					position: "absolute",
					inset: "-6%",
					pointerEvents: "none",
					opacity: bgBreathOpacity,
					transform: `translate(${bgShiftX}px, ${bgShiftY}px)`,
					background:
						"radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(56, 189, 248, 0.12), transparent 45%), radial-gradient(circle at 40% 80%, rgba(148, 163, 184, 0.15), transparent 50%)",
				}}
			/>
			<RemotionLayoutMetricsProvider value={{ width: designW, height: designH }}>
				<AbsoluteFill
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						overflow: "hidden",
					}}
				>
					<div
						style={{
							width: designW,
							height: designH,
							flexShrink: 0,
							transform: `scale(${containScale})`,
							transformOrigin: "center center",
						}}
					>
						{children}
					</div>
				</AbsoluteFill>
			</RemotionLayoutMetricsProvider>
			<LandscapeBrandMark brandName={brandName} />
		</AbsoluteFill>
	);
};
