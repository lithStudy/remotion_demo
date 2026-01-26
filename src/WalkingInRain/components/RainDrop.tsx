import React from "react";

export interface RainDropProps {
	x: number;
	startY: number;
	speed: number;
	color: string;
	frame: number;
}

export const RainDrop: React.FC<RainDropProps> = ({
	x,
	startY,
	speed,
	color,
	frame,
}) => {
	// 让雨滴从顶部循环下落
	const totalDistance = 1080 + 20; // 屏幕高度 + 雨滴长度
	const y = (startY + frame * speed) % totalDistance - 20;

	return (
		<div
			style={{
				position: "absolute",
				left: x,
				top: y,
				width: 2,
				height: 20,
				backgroundColor: color,
				opacity: 0.8,
				borderRadius: "0 0 2px 2px",
			}}
		/>
	);
};
