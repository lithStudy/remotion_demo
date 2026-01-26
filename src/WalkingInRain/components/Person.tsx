import React from "react";

export interface PersonProps {
	x: number;
	color: string;
	frame: number;
}

export const Person: React.FC<PersonProps> = ({ x, color, frame }) => {
	// 走路时的腿部摆动动画 - 使用更自然的频率
	const walkCycle = frame * 0.25; // 控制走路速度
	const legSwing = Math.sin(walkCycle) * 25; // 腿部摆动角度
	const armSwing = Math.sin(walkCycle + Math.PI) * 25; // 手臂与腿部相反摆动
	// 身体轻微上下移动，模拟走路时的起伏
	const bodyBounce = Math.abs(Math.sin(walkCycle)) * 3;

	return (
		<div
			style={{
				position: "absolute",
				left: x,
				bottom: 200 + bodyBounce,
				transform: "translateX(-50%)",
			}}
		>
			{/* 头部 */}
			<div
				style={{
					width: 40,
					height: 40,
					borderRadius: "50%",
					backgroundColor: color,
					margin: "0 auto",
					position: "relative",
					zIndex: 2,
				}}
			/>
			{/* 身体 */}
			<div
				style={{
					width: 50,
					height: 80,
					backgroundColor: color,
					margin: "0 auto",
					marginTop: -5,
					borderRadius: "5px 5px 0 0",
				}}
			/>
			{/* 左手臂 */}
			<div
				style={{
					width: 8,
					height: 50,
					backgroundColor: color,
					position: "absolute",
					left: -15,
					top: 50,
					transformOrigin: "top center",
					transform: `rotate(${armSwing}deg)`,
				}}
			/>
			{/* 右手臂 */}
			<div
				style={{
					width: 8,
					height: 50,
					backgroundColor: color,
					position: "absolute",
					right: -15,
					top: 50,
					transformOrigin: "top center",
					transform: `rotate(${-armSwing}deg)`,
				}}
			/>
			{/* 左腿 */}
			<div
				style={{
					width: 10,
					height: 60,
					backgroundColor: color,
					position: "absolute",
					left: 10,
					top: 120,
					transformOrigin: "top center",
					transform: `rotate(${legSwing}deg)`,
				}}
			/>
			{/* 右腿 */}
			<div
				style={{
					width: 10,
					height: 60,
					backgroundColor: color,
					position: "absolute",
					right: 10,
					top: 120,
					transformOrigin: "top center",
					transform: `rotate(${-legSwing}deg)`,
				}}
			/>
		</div>
	);
};
