import React from "react";

export interface BrainCheckProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 大脑打勾图标组件
 * 代表理解和识别
 */
export const BrainCheck: React.FC<BrainCheckProps> = ({
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
			{/* 大脑轮廓 */}
			<path
				d="M 100 30 Q 60 40 50 70 Q 40 100 60 130 Q 80 150 100 160 Q 120 150 140 130 Q 160 100 150 70 Q 140 40 100 30 Z"
				fill="#FFE0BD"
				stroke="#E8C39E"
				strokeWidth="3"
			/>

			{/* 大脑纹理 */}
			<path
				d="M 80 60 Q 70 80 75 100 Q 80 120 100 125"
				stroke="#E8C39E"
				strokeWidth="2"
				fill="none"
			/>
			<path
				d="M 120 60 Q 130 80 125 100 Q 120 120 100 125"
				stroke="#E8C39E"
				strokeWidth="2"
				fill="none"
			/>

			{/* 打勾标记 - 绿色 */}
			<circle cx="100" cy="120" r="35" fill="#27AE60" />
			<path
				d="M 85 120 L 95 130 L 115 105"
				stroke="white"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
		</svg>
	);
};
