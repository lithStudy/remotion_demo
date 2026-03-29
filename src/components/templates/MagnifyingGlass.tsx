/**
 * MAGNIFYING_GLASS 模板：好奇心缺口，揭秘感
 * 参数为「底层逻辑/真相」的文案精华，多条时在镜片内列表依次动画展示。
 */
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
	getSingleImageAnchorAvoidanceShiftAnimatedPx,
	type TemplateBaseProps,
} from "./shared";
import { TemplateContentRenderer } from "./TemplateContentRenderer";

export { magnifyingGlassMeta as templateMeta } from "./template-definitions";

export type BWMagnifyingGlassProps = TemplateBaseProps;

export const BWMagnifyingGlass: React.FC<TemplateBaseProps> = ({
	content,
	anchors,
	audioSrc,
	children,
	style,
}) => {
	const frame = useCurrentFrame();
	const { fps, height } = useVideoConfig();
	const enterSpring = spring({ frame, fps, config: { damping: 60, stiffness: 180 }, durationInFrames: 25 });
	const scale = interpolate(enterSpring, [0, 1], [0.6, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
	const anchorAvoidanceShift = getSingleImageAnchorAvoidanceShiftAnimatedPx({
		content,
		anchors,
		frame,
		fps,
		height,
	});

	// 左右、上下缓慢漂移（周期不同形成椭圆轨迹）
	const driftX = 28 * Math.sin((2 * Math.PI * frame) / 60);
	const driftY = 22 * Math.cos((2 * Math.PI * frame) / 90);

	return (
		<AbsoluteFill style={style}>

			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: `translate(calc(-50% + ${driftX}px), calc(-50% + ${driftY + anchorAvoidanceShift}px)) scale(${scale})`,
					opacity: enterSpring,
					width: 250,

				}}
			>
				<svg
					width={250}
					height={250}
					viewBox="0 0 200 200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						display: "block",
						margin: "0 auto",
						filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
					}}
				>
					{/* 镜柄 */}
					<line
						x1="125"
						y1="125"
						x2="175"
						y2="175"
						stroke="#111"
						strokeWidth="24"
						strokeLinecap="round"
					/>
					{/* 连接处 */}
					<line
						x1="115"
						y1="115"
						x2="135"
						y2="135"
						stroke="#111"
						strokeWidth="12"
					/>
					{/* 镜框 */}
					<circle
						cx="85"
						cy="85"
						r="60"
						fill="#FFF"
						stroke="#111"
						strokeWidth="16"
					/>
					{/* 镜面高光 */}
					<path
						d="M 45 65 A 40 40 0 0 1 65 45"
						stroke="#EEE"
						strokeWidth="8"
						strokeLinecap="round"
						fill="none"
					/>
				</svg>

			</div>
			<TemplateContentRenderer content={content} anchors={anchors} audioSrc={audioSrc} />
			{children}
		</AbsoluteFill>
	);
};
