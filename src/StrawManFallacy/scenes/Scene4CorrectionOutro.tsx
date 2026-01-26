import React from "react";
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from "remotion";
import { BrainCheck, TextBubble, BombIcon, FoodNoIcon } from "../components";
import { DARK_CHARCOAL, ALERT_RED } from "../StrawManFallacy";

/**
 * 场景4：破解与总结
 * 时间范围: 541-780帧 (8秒)
 * 旁白: "乙攻击的是那个极端的'炸弹稻草人'，而不是甲的本意。下次遇到这种情况，请大声问：‘这真的是我的原话吗？’"
 */
export const Scene4CorrectionOutro: React.FC = () => {
	const frame = useCurrentFrame();
	const { fps } = useVideoConfig();

	// 标题显示动画
	const titleOpacity = interpolate(
		frame,
		[0, 30],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 第541-650帧：红色"X"划痕动画
	const crossProgress = interpolate(
		frame,
		[541, 650],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	const crossDashOffset = interpolate(
		crossProgress,
		[0, 1],
		[300, 0],
		{
			extrapolateRight: "clamp",
		}
	);

	// 第650帧：对话气泡从底部滑入
	const bubbleTranslateY = frame >= 650
		? spring({
				frame: frame - 650,
				fps,
				config: { damping: 200 },
		  })
		: 0;

	const bubbleY = interpolate(
		bubbleTranslateY,
		[0, 1],
		[200, 0],
		{
			extrapolateRight: "clamp",
		}
	);

	const bubbleOpacity = interpolate(
		frame,
		[650, 680],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 第750-780帧：整个场景淡出
	const fadeOut = interpolate(
		frame,
		[750, 780],
		[1, 0],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: DARK_CHARCOAL,
				opacity: fadeOut,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "60px",
			}}
		>
			{/* 标题 */}
			<div
				style={{
					opacity: titleOpacity,
					textAlign: "center",
					marginBottom: "30px",
				}}
			>
				<div
					style={{
						fontSize: "56px",
						fontWeight: "bold",
						color: "white",
						fontFamily: "'ZCOOL KuaiLe', sans-serif",
						textShadow: "0 4px 20px rgba(0,0,0,0.5)",
						marginBottom: "15px",
					}}
				>
					破解与总结
				</div>
				<div
					style={{
						fontSize: "32px",
						color: "#4ECDC4",
						fontFamily: "'Noto Sans SC', sans-serif",
						marginBottom: "10px",
					}}
				>
					乙攻击的是那个极端的"炸弹稻草人"，而不是甲的本意
				</div>
				<div
					style={{
						fontSize: "28px",
						color: "#FFD700",
						fontFamily: "'Noto Sans SC', sans-serif",
					}}
				>
					下次遇到这种情况，请大声问：
				</div>
			</div>

			{/* 上半部分：划掉稻草人图标 */}
			<div
				style={{
					position: "relative",
					display: "flex",
					gap: "40px",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{/* 炸弹和禁止食物图标 */}
				<BombIcon opacity={0.5} />
				<FoodNoIcon opacity={0.5} />

				{/* 红色X划痕 */}
				{frame >= 541 && (
					<svg
						width="300"
						height="300"
						viewBox="0 0 300 300"
						style={{
							position: "absolute",
							pointerEvents: "none",
						}}
					>
						{/* 第一条斜线 */}
						<line
							x1="50"
							y1="50"
							x2="250"
							y2="250"
							stroke={ALERT_RED}
							strokeWidth="12"
							strokeLinecap="round"
							strokeDasharray="300"
							strokeDashoffset={crossDashOffset}
						/>
						{/* 第二条斜线 */}
						<line
							x1="250"
							y1="50"
							x2="50"
							y2="250"
							stroke={ALERT_RED}
							strokeWidth="12"
							strokeLinecap="round"
							strokeDasharray="300"
							strokeDashoffset={crossDashOffset}
						/>
					</svg>
				)}
			</div>

			{/* 中间：大脑打勾图标 */}
			{frame >= 600 && (
				<div
					style={{
						opacity: interpolate(
							frame,
							[600, 630],
							[0, 1],
							{
								extrapolateLeft: "clamp",
								extrapolateRight: "clamp",
							}
						),
					}}
				>
					<BrainCheck />
				</div>
			)}

			{/* 底部：对话气泡 */}
			{frame >= 650 && (
				<div
					style={{
						opacity: bubbleOpacity,
						transform: `translateY(${bubbleY}px)`,
					}}
				>
					<TextBubble
						text="这真的是我的原话吗？"
						backgroundColor="white"
						textColor="#333"
					/>
				</div>
			)}
		</AbsoluteFill>
	);
};
