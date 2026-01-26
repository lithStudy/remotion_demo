import React from "react";

export interface StrawIconProps {
	color?: string;
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 稻草堆图标组件
 * 代表被歪曲的稻草人观点
 */
export const StrawIcon: React.FC<StrawIconProps> = ({
	color = "#FFD700",
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="200"
			height="200"
			viewBox="0 0 200 200"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 稻草堆主体 */}
			<ellipse cx="100" cy="150" rx="80" ry="40" fill={color} />

			{/* 稻草堆顶部 */}
			<ellipse cx="100" cy="120" rx="60" ry="30" fill="#FFE44D" />

			{/* 稻草堆细节 - 稻草条 */}
			<line
				x1="60"
				y1="100"
				x2="70"
				y2="130"
				stroke="#8B6914"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="80"
				y1="95"
				x2="85"
				y2="125"
				stroke="#8B6914"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="100"
				y1="90"
				x2="100"
				y2="120"
				stroke="#8B6914"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="120"
				y1="95"
				x2="115"
				y2="125"
				stroke="#8B6914"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="140"
				y1="100"
				x2="130"
				y2="130"
				stroke="#8B6914"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			{/* 破旧标记 */}
			<line
				x1="70"
				y1="140"
				x2="130"
				y2="160"
				stroke="#8B6914"
				strokeWidth="2"
				strokeDasharray="5,5"
			/>
		</svg>
	);
};
