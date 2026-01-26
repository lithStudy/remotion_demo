import React from "react";
import {
	AbsoluteFill,
	useCurrentFrame,
	useVideoConfig,
	spring,
	interpolate,
} from "remotion";
import {
	PersonAThinking,
	PersonBAngry,
	AcademicIcon,
	AuthoritySeal,
	QuestionIcon,
	ShieldCheckIcon,
	TextBubble,
} from "../components";
import { DARK_CHARCOAL, LOGIC_BLUE, ALERT_RED } from "../StrawManFallacy";

/**
 * 场景5：学术权威压制案例
 * 展示学术权威压制谬误的案例
 */
export const Scene5AcademicAuthority: React.FC = () => {
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

	// 标题背景渐变动画
	const titleGradientProgress = interpolate(
		frame,
		[0, 60],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 第30帧：A方场景出现
	const sceneAOpacity = frame >= 30
		? spring({
				frame: frame - 30,
				fps,
				config: { damping: 200 },
		  })
		: 0;
	const sceneAOpacityValue = interpolate(
		sceneAOpacity,
		[0, 1],
		[0, 1],
		{
			extrapolateRight: "clamp",
		}
	);

	// 第60帧：A方人物出现
	const personAScale = frame >= 60
		? spring({
				frame: frame - 60,
				fps,
				config: { damping: 200 },
		  })
		: 0;

	// 第90帧：A方对话气泡出现
	const bubbleAOpacity = interpolate(
		frame,
		[90, 120],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 第150帧：B方场景出现（带放射状背景效果）
	const sceneBOpacity = frame >= 150
		? spring({
				frame: frame - 150,
				fps,
				config: { damping: 150 },
		  })
		: 0;
	const sceneBOpacityValue = interpolate(
		sceneBOpacity,
		[0, 1],
		[0, 1],
		{
			extrapolateRight: "clamp",
		}
	);

	// 放射状背景动画
	const radialGlow = frame >= 150
		? 0.3 + 0.2 * Math.sin((frame - 150) * 0.1)
		: 0;

	// 第180帧：B方人物出现（夸张放大）
	const personBScale = frame >= 180
		? spring({
				frame: frame - 180,
				fps,
				config: { damping: 150 },
		  })
		: 0;
	const personBScaleValue = interpolate(
		personBScale,
		[0, 1],
		[0, 1.1],
		{
			extrapolateRight: "clamp",
		}
	);

	// 第210帧：院士头像出现
	const academicIconScale = frame >= 210
		? spring({
				frame: frame - 210,
				fps,
				config: { damping: 200 },
		  })
		: 0;
	const academicIconGlow = frame >= 210
		? 0.5 + 0.5 * Math.sin((frame - 210) * 0.15)
		: 0;

	// 第240帧：B方对话气泡出现
	const bubbleBOpacity = interpolate(
		frame,
		[240, 270],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	// 第300帧：印章出现（盖章动画）
	const sealScale = frame >= 300
		? spring({
				frame: frame - 300,
				fps,
				config: { damping: 100 },
		  })
		: 0;
	const sealScaleValue = interpolate(
		sealScale,
		[0, 0.3, 0.5, 1],
		[0, 1.2, 0.9, 1],
		{
			extrapolateRight: "clamp",
		}
	);
	const sealRotate = interpolate(
		sealScale,
		[0, 0.3, 1],
		[-5, 2, 0],
		{
			extrapolateRight: "clamp",
		}
	);

	// 第360帧：谬误剖析出现
	const analysisOpacity = interpolate(
		frame,
		[360, 390],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);
	const questionIconScale = frame >= 360
		? spring({
				frame: frame - 360,
				fps,
				config: { damping: 200 },
		  })
		: 0;

	// 第420帧：回应实例出现
	const responseOpacity = interpolate(
		frame,
		[420, 450],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);
	const shieldCheckScale = frame >= 420
		? spring({
				frame: frame - 420,
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
			{/* 标题区域 */}
			<div
				style={{
					position: "absolute",
					top: "0",
					left: "0",
					right: "0",
					height: "120px",
					background: `linear-gradient(90deg, 
						rgba(30, 60, 120, ${titleGradientProgress}), 
						rgba(100, 50, 150, ${titleGradientProgress}))`,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					opacity: titleOpacity,
					zIndex: 10,
				}}
			>
				<div
					style={{
						fontSize: "56px",
						fontWeight: "bold",
						color: "white",
						fontFamily: "'ZCOOL KuaiLe', sans-serif",
						textShadow: "0 4px 20px rgba(0,0,0,0.5)",
					}}
				>
					案例三: 学术权威压制
				</div>
			</div>

			{/* 主要内容区域 */}
			<div
				style={{
					display: "flex",
					height: "100%",
					paddingTop: "120px",
				}}
			>
				{/* 左侧：A方场景 */}
				<div
					style={{
						flex: 1,
						position: "relative",
						backgroundColor: "#E3F2FD",
						opacity: sceneAOpacityValue,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "40px",
					}}
				>
					{/* A方对话气泡 - 在右侧 */}
					{frame >= 90 && (
						<div
							style={{
								position: "absolute",
								top: "80px",
								right: "50px",
								opacity: bubbleAOpacity,
							}}
						>
							<TextBubble
								text="A: 这个理论有争议，需要更多证据。"
								backgroundColor="white"
								textColor="#333"
							/>
						</div>
					)}

					{/* A方人物 */}
					<div
						style={{
							transform: `scale(${personAScale || 0.01})`,
						}}
					>
						<PersonAThinking />
					</div>
				</div>

				{/* 分割线 */}
				<div
					style={{
						width: "4px",
						backgroundColor: "#666",
						opacity: Math.max(sceneAOpacityValue, sceneBOpacityValue),
					}}
				/>

				{/* 右侧：B方场景 */}
				<div
					style={{
						flex: 1,
						position: "relative",
						opacity: sceneBOpacityValue,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						padding: "40px",
						overflow: "hidden",
						backgroundColor: "#FF8C42", // 橙色基础背景
					}}
				>
					{/* 放射状渐变背景 */}
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "200%",
							height: "200%",
							background: `radial-gradient(circle, 
								rgba(255, 100, 50, ${0.4 + radialGlow * 0.3}) 0%, 
								rgba(255, 150, 0, ${0.3 + radialGlow * 0.4}) 30%, 
								rgba(200, 50, 0, ${0.2 + radialGlow * 0.3}) 60%, 
								rgba(150, 30, 0, 0.1) 100%)`,
							pointerEvents: "none",
						}}
					/>

					{/* B方对话气泡 - 在左侧 */}
					{frame >= 240 && (
						<div
							style={{
								position: "absolute",
								top: "60px",
								left: "50px",
								opacity: bubbleBOpacity,
							}}
						>
							<TextBubble
								text="B: 某某院士都支持这个理论，你一个普通人有什么资格质疑？"
								backgroundColor="white"
								textColor="#333"
							/>
						</div>
					)}

					{/* B方人物 */}
					<div
						style={{
							transform: `scale(${personBScaleValue || 0.01})`,
							position: "relative",
							zIndex: 2,
						}}
					>
						<PersonBAngry />
					</div>

					{/* 院士头像 */}
					{frame >= 210 && (
						<div
							style={{
								position: "absolute",
								left: "50px",
								top: "50%",
								transform: `translateY(-50%) scale(${academicIconScale || 0.01})`,
								zIndex: 3,
								filter: `drop-shadow(0 0 ${academicIconGlow * 20}px rgba(255, 215, 0, ${academicIconGlow}))`,
							}}
						>
							<AcademicIcon />
						</div>
					)}

					{/* 学术权威印章 - 在B方指向的前方 */}
					{frame >= 300 && (
						<div
							style={{
								position: "absolute",
								right: "150px",
								top: "250px",
								transform: `scale(${sealScaleValue || 0.01}) rotate(${sealRotate}deg)`,
								zIndex: 4,
							}}
						>
							<AuthoritySeal />
						</div>
					)}
				</div>
			</div>

			{/* 谬误剖析区域 */}
			{frame >= 360 && (
				<div
					style={{
						position: "absolute",
						bottom: "200px",
						left: "50%",
						transform: "translateX(-50%)",
						display: "flex",
						alignItems: "center",
						gap: "20px",
						backgroundColor: "white",
						padding: "20px 40px",
						borderRadius: "10px",
						opacity: analysisOpacity,
						zIndex: 10,
					}}
				>
					<div
						style={{
							transform: `scale(${questionIconScale || 0.01})`,
						}}
					>
						<QuestionIcon color={LOGIC_BLUE} />
					</div>
					<div
						style={{
							fontSize: "32px",
							color: "#333",
							fontFamily: "'Noto Sans SC', sans-serif",
							fontWeight: "bold",
						}}
					>
						谬误剖析: 没有证据支持理论，用身份压制质疑违背了科学精神。
					</div>
				</div>
			)}

			{/* 回应实例区域 */}
			{frame >= 420 && (
				<div
					style={{
						position: "absolute",
						bottom: "100px",
						left: "50%",
						transform: "translateX(-50%)",
						display: "flex",
						alignItems: "center",
						gap: "20px",
						backgroundColor: "white",
						padding: "20px 40px",
						borderRadius: "10px",
						opacity: responseOpacity,
						zIndex: 10,
					}}
				>
					<div
						style={{
							transform: `scale(${shieldCheckScale || 0.01})`,
						}}
					>
						<ShieldCheckIcon color="#27AE60" />
					</div>
					<div
						style={{
							fontSize: "32px",
							color: "#333",
							fontFamily: "'Noto Sans SC', sans-serif",
							fontWeight: "bold",
						}}
					>
						回应实例: "科学真理不取决于身份，而取决于证据。即使是院士，其观点也需要经过同行评议和实验验证。"
					</div>
				</div>
			)}
		</AbsoluteFill>
	);
};
