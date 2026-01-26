import React from "react";
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from "remotion";
import { ShieldIcon, StrawIcon } from "../components";
import { DARK_CHARCOAL, LOGIC_BLUE, STRAW_YELLOW } from "../StrawManFallacy";

/**
 * 场景2：定义谬误
 * 时间范围: 121-270帧 (5秒)
 * 旁白: "这就是稻草人谬误。你歪曲了对方的观点，把它变成一个脆弱的稻草人，然后轻易推翻它。"
 */
export const Scene2DefiningFallacy: React.FC = () => {
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

	// 第60帧开始：使用spring控制变换动画
	const progress = frame >= 60
		? spring({
				frame: frame - 60,
				fps,
				config: { damping: 200 },
		  })
		: 0;

	// 盾牌opacity从1到0
	const shieldOpacity = interpolate(
		progress,
		[0, 1],
		[1, 0],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 稻草堆opacity从0到1
	const strawOpacity = interpolate(
		progress,
		[0, 1],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 稻草堆旋转从-15deg到0deg
	const strawRotate = interpolate(
		progress,
		[0, 1],
		[-15, 0],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 文字显示动画
	const textOpacity = interpolate(
		frame,
		[200, 220],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	return (
		<AbsoluteFill
			style={{
				backgroundColor: DARK_CHARCOAL,
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
					marginBottom: "40px",
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
					这就是稻草人谬误
				</div>
				<div
					style={{
						fontSize: "32px",
						color: "#4ECDC4",
						fontFamily: "'Noto Sans SC', sans-serif",
					}}
				>
					你歪曲了对方的观点，把它变成一个脆弱的稻草人，然后轻易推翻它
				</div>
			</div>

			{/* 中央图标区域 */}
			<div
				style={{
					position: "relative",
					width: "400px",
					height: "400px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{/* 盾牌 - 初始显示，然后淡出 */}
				{frame < 60 || shieldOpacity > 0.01 ? (
					<div
						style={{
							position: "absolute",
							opacity: frame < 60 ? 1 : shieldOpacity,
						}}
					>
						<ShieldIcon color={LOGIC_BLUE} />
					</div>
				) : null}

				{/* 稻草堆 - 从第60帧开始显示 */}
				{frame >= 60 && (
					<div
						style={{
							position: "absolute",
							opacity: strawOpacity,
							transform: `rotate(${strawRotate}deg)`,
						}}
					>
						<StrawIcon color={STRAW_YELLOW} />
					</div>
				)}
			</div>

			{/* 文字说明 */}
			<div
				style={{
					opacity: textOpacity,
					textAlign: "center",
					color: "white",
					fontSize: "48px",
					fontWeight: "bold",
					fontFamily: "'Noto Sans SC', sans-serif",
				}}
			>
				<div style={{ marginBottom: "20px" }}>
					歪曲 (Distort) → 替换 (Replace)
				</div>
				<div
					style={{
						fontSize: "36px",
						color: "#FFD700",
						marginTop: "20px",
						marginBottom: "15px",
					}}
				>
					真实观点 → 稻草人
				</div>
				<div
					style={{
						fontSize: "28px",
						color: "#4ECDC4",
						fontFamily: "'Noto Sans SC', sans-serif",
						fontWeight: "normal",
					}}
				>
					把对方的观点变成一个脆弱的稻草人，然后轻易推翻它
				</div>
			</div>
		</AbsoluteFill>
	);
};
