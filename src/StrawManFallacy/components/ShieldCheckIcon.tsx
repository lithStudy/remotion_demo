import React from "react";

export interface ShieldCheckIconProps {
	color?: string;
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 带对勾的盾牌图标组件
 * 绿色正方形，内有一个白色盾牌和对勾
 */
export const ShieldCheckIcon: React.FC<ShieldCheckIconProps> = ({
	color = "#27AE60",
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 80 80"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 绿色正方形背景 */}
			<rect x="0" y="0" width="80" height="80" fill={color} rx="8" />

			{/* 盾牌 */}
			<path
				d="M 40 15 L 55 22 L 55 38 Q 55 50 40 60 Q 25 50 25 38 L 25 22 Z"
				fill="white"
				stroke="none"
			/>

			{/* 对勾 */}
			<path
				d="M 30 38 L 37 45 L 50 32"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</svg>
	);
};
