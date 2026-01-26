import React from "react";
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from "remotion";
import { PersonA, PersonB, BombIcon, FoodNoIcon, TextBubble } from "../components";
import { DARK_CHARCOAL, LOGIC_BLUE, ALERT_RED } from "../StrawManFallacy";

/**
 * 场景3：经典案例
 * 时间范围: 271-540帧 (9秒)
 * 旁白: "举个例子。甲说：‘国家应该适度投入军事。’ 乙反驳：‘天啊，所以你想让大家都没饭吃，把钱全拿去造炸弹吗？’"
 */
export const Scene3CoffeeExample: React.FC = () => {
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

	// 第9帧（相对帧数，对应全局280帧）：甲出现（spring scale 0 -> 1）
	const personAScale = frame >= 9
		? spring({
				frame: frame - 9,
				fps,
				config: { damping: 200 },
		  })
		: 0;

	// 甲气泡显示
	const bubbleAOpacity = interpolate(
		frame,
		[9, 29],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 第89帧（相对帧数，对应全局360帧）：乙打断（spring scale 0 -> 1.2，夸张放大）
	const personBScale = frame >= 89
		? spring({
				frame: frame - 89,
				fps,
				config: { damping: 150 },
		  })
		: 0;
	const personBScaleValue = interpolate(
		personBScale,
		[0, 1],
		[0, 1.2],
		{
			extrapolateRight: "clamp",
		}
	);

	// 乙气泡抖动（第89-179帧）
	const bubbleBShake = frame >= 89 && frame <= 179
		? Math.sin((frame - 89) * 0.3) * 5
		: 0;

	const bubbleBOpacity = interpolate(
		frame,
		[89, 109],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 炸弹和禁止食物图标闪烁（第89帧开始）
	const iconOpacity = frame >= 89
		? 0.3 + 0.7 * Math.sin((frame - 89) * 0.2)
		: 0;

	const iconScale = frame >= 89
		? spring({
				frame: frame - 89,
				fps,
				config: { damping: 200 },
		  })
		: 0;

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
					top: "50px",
					left: "50%",
					transform: "translateX(-50%)",
					opacity: titleOpacity,
					textAlign: "center",
					zIndex: 10,
				}}
			>
				<div
					style={{
						fontSize: "52px",
						fontWeight: "bold",
						color: "white",
						fontFamily: "'ZCOOL KuaiLe', sans-serif",
						textShadow: "0 4px 20px rgba(0,0,0,0.5)",
						marginBottom: "15px",
					}}
				>
					举个例子
				</div>
				<div
					style={{
						fontSize: "28px",
						color: "#4ECDC4",
						fontFamily: "'Noto Sans SC', sans-serif",
					}}
				>
					甲说："国家应该适度投入军事"
				</div>
			</div>

			{/* 主要内容区域 */}
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "150px",
					height: "100%",
					paddingTop: "150px",
				}}
			>
				{/* 左侧：甲 */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "30px",
						position: "relative",
					}}
				>
					{/* 甲的气泡 */}
					{frame >= 9 && (
						<div
							style={{
								opacity: bubbleAOpacity,
								marginBottom: "20px",
							}}
						>
							<TextBubble
								text="适度投入军事"
								backgroundColor={LOGIC_BLUE}
								textColor="white"
							/>
						</div>
					)}

					{/* 甲的人物 - 始终显示，但开始时scale为0 */}
					<PersonA scale={personAScale || 0.01} />

					{/* 甲头顶的图标（乙歪曲的观点） */}
					{frame >= 89 && (
						<div
							style={{
								position: "absolute",
								top: "-120px",
								left: "50%",
								transform: `translateX(-50%) scale(${iconScale})`,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "10px",
								opacity: iconOpacity,
							}}
						>
							<div style={{ display: "flex", gap: "20px" }}>
								<BombIcon />
								<FoodNoIcon />
							</div>
							<div
								style={{
									fontSize: "24px",
									color: "#FF6B6B",
									fontFamily: "'Noto Sans SC', sans-serif",
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								乙歪曲的观点
							</div>
						</div>
					)}
				</div>

				{/* 右侧：乙 */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "30px",
					}}
				>
					{/* 乙的气泡 */}
					{frame >= 89 && (
						<div
							style={{
								opacity: bubbleBOpacity,
								marginBottom: "20px",
								transform: `translateX(${bubbleBShake}px)`,
							}}
						>
							<TextBubble
								text="天啊，所以你想让大家都没饭吃，把钱全拿去造炸弹吗？"
								backgroundColor={ALERT_RED}
								textColor="white"
							/>
						</div>
					)}

					{/* 乙的人物 - 始终显示，但开始时scale为0 */}
					<PersonB scale={personBScaleValue || 0.01} />
				</div>
			</div>
		</AbsoluteFill>
	);
};
