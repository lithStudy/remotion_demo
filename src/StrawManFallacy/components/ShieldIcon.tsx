import React from "react";

export interface ShieldIconProps {
	color?: string;
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 盾牌图标组件
 * 代表真实观点，坚固的金属盾牌
 */
export const ShieldIcon: React.FC<ShieldIconProps> = ({
	color = "#4ECDC4",
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="200"
			height="240"
			viewBox="0 0 200 240"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 盾牌主体 */}
			<path
				d="M 100 20 L 160 50 L 160 140 Q 160 180 100 220 Q 40 180 40 140 L 40 50 Z"
				fill={color}
				stroke="#2E2E2E"
				strokeWidth="4"
			/>

			{/* 盾牌内部装饰线 */}
			<path
				d="M 100 30 L 150 55 L 150 135 Q 150 170 100 210 Q 50 170 50 135 L 50 55 Z"
				fill="none"
				stroke="#2E2E2E"
				strokeWidth="2"
				opacity="0.3"
			/>

			{/* 盾牌中央标记 */}
			<circle cx="100" cy="100" r="25" fill="none" stroke="#2E2E2E" strokeWidth="3" />
			<path
				d="M 85 100 L 95 110 L 115 90"
				stroke="#2E2E2E"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</svg>
	);
};
