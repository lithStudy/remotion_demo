import React from "react";

export interface FoodNoIconProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 禁止食物图标组件
 */
export const FoodNoIcon: React.FC<FoodNoIconProps> = ({
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="120"
			height="120"
			viewBox="0 0 120 120"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 食物图标 - 盘子 */}
			<ellipse cx="60" cy="80" rx="35" ry="15" fill="#E8E8E8" />

			{/* 食物 */}
			<circle cx="50" cy="70" r="12" fill="#FF6B6B" />
			<circle cx="70" cy="70" r="12" fill="#4ECDC4" />
			<circle cx="60" cy="60" r="10" fill="#FFD700" />

			{/* 禁止符号 - 红色斜线 */}
			<line
				x1="20"
				y1="20"
				x2="100"
				y2="100"
				stroke="#FF6B6B"
				strokeWidth="8"
				strokeLinecap="round"
			/>
			<circle
				cx="60"
				cy="60"
				r="50"
				fill="none"
				stroke="#FF6B6B"
				strokeWidth="6"
			/>
		</svg>
	);
};
