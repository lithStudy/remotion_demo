import React from "react";

export interface BombIconProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 炸弹图标组件
 * 卡通风格
 */
export const BombIcon: React.FC<BombIconProps> = ({
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
			{/* 炸弹主体 */}
			<circle cx="60" cy="70" r="40" fill="#2C3E50" />

			{/* 高光 */}
			<ellipse cx="50" cy="60" rx="15" ry="20" fill="#34495E" />

			{/* 引线 */}
			<line
				x1="60"
				y1="30"
				x2="60"
				y2="50"
				stroke="#8B6914"
				strokeWidth="6"
				strokeLinecap="round"
			/>

			{/* 火花 */}
			<circle cx="60" cy="25" r="8" fill="#FF6B6B" />
			<circle cx="55" cy="20" r="4" fill="#FFD700" />
			<circle cx="65" cy="20" r="4" fill="#FFD700" />

			{/* 炸弹表情 - 邪恶 */}
			<ellipse cx="50" cy="65" rx="6" ry="8" fill="white" />
			<ellipse cx="70" cy="65" rx="6" ry="8" fill="white" />
			<circle cx="52" cy="65" r="3" fill="#333" />
			<circle cx="72" cy="65" r="3" fill="#333" />
			<path
				d="M 45 80 Q 60 75 75 80"
				stroke="#333"
				strokeWidth="3"
				fill="none"
			/>
		</svg>
	);
};
