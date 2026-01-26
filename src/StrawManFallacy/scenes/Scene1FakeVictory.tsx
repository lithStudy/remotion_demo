import React from "react";
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from "remotion";
import { Boxer, Scarecrow } from "../components";
import { DARK_CHARCOAL } from "../StrawManFallacy";

/**
 * 场景1：虚假的胜利
 * 时间范围: 0-120帧 (4秒)
 * 旁白: "你是否曾在争论中大获全胜？但等等，你打败的真的是对方的观点，还是你自己树立的靶子？"
 */
export const Scene1FakeVictory: React.FC = () => {
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

	// 第10帧：拳击手入场动画（spring scale 0 -> 1）
	const boxerScale = frame >= 10
		? spring({
				frame: frame - 10,
				fps,
				config: { damping: 200 },
		  })
		: 0;

	// 第40帧：拳击手出拳动画
	const punchProgress = interpolate(
		frame,
		[40, 60],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);
	const punchTranslateX = interpolate(
		punchProgress,
		[0, 1],
		[0, 200],
		{
			extrapolateRight: "clamp",
		}
	);

	// 稻草人受击效果（第40-60帧）
	const scarecrowHitOpacity = interpolate(
		frame,
		[40, 50],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 稻草人震动效果
	const shakeX = Math.sin((frame - 40) * 0.5) * 10 * punchProgress;
	const shakeY = Math.cos((frame - 40) * 0.5) * 5 * punchProgress;

	return (
		<AbsoluteFill
			style={{
				backgroundColor: DARK_CHARCOAL,
			}}
		>
			{/* 标题 */}
			<div
				style={{
					position: "absolute",
					top: "80px",
					left: "50%",
					transform: "translateX(-50%)",
					opacity: titleOpacity,
					textAlign: "center",
					zIndex: 10,
				}}
			>
				<div
					style={{
						fontSize: "64px",
						fontWeight: "bold",
						color: "white",
						fontFamily: "'ZCOOL KuaiLe', sans-serif",
						textShadow: "0 4px 20px rgba(0,0,0,0.5)",
						marginBottom: "20px",
					}}
				>
					破解逻辑陷阱：稻草人谬误
				</div>
				<div
					style={{
						fontSize: "36px",
						color: "#FFD700",
						fontFamily: "'Noto Sans SC', sans-serif",
					}}
				>
					你是否曾在争论中大获全胜？
				</div>
				<div
					style={{
						fontSize: "32px",
						color: "#FF6B6B",
						fontFamily: "'Noto Sans SC', sans-serif",
						marginTop: "15px",
					}}
				>
					但等等，你打败的真的是对方的观点，还是你自己树立的靶子？
				</div>
			</div>

			{/* 主要内容区域 */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "200px",
					height: "100%",
					paddingTop: "200px",
				}}
			>
				{/* 拳击手 */}
				<div
					style={{
						transform: `translateX(${punchTranslateX}px)`,
					}}
				>
					<Boxer scale={boxerScale} />
				</div>

			{/* 稻草人 - 完好状态（第40帧之前显示） */}
			{frame < 40 && (
				<Scarecrow
					isBroken={false}
					opacity={1}
				/>
			)}

			{/* 稻草人 - 破碎状态（第40帧之后显示，带震动效果） */}
			{frame >= 40 && (
				<div
					style={{
						transform: `translate(${shakeX}px, ${shakeY}px)`,
					}}
				>
					<Scarecrow isBroken={true} opacity={scarecrowHitOpacity} />
				</div>
			)}
			</div>
		</AbsoluteFill>
	);
};
