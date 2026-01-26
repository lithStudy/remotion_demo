import React from "react";

export interface BoxerProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 拳击手SVG组件
 * 扁平化风格，红色手套，自信姿态
 */
export const Boxer: React.FC<BoxerProps> = ({
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="200"
			height="300"
			viewBox="0 0 200 300"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 身体 */}
			<rect x="70" y="120" width="60" height="100" rx="30" fill="#4A90E2" />

			{/* 头部 */}
			<circle cx="100" cy="60" r="40" fill="#FFE0BD" />

			{/* 眼睛 */}
			<ellipse cx="85" cy="55" rx="8" ry="10" fill="white" />
			<ellipse cx="115" cy="55" rx="8" ry="10" fill="white" />
			<circle cx="87" cy="55" r="4" fill="#333" />
			<circle cx="117" cy="55" r="4" fill="#333" />

			{/* 自信的眉毛 */}
			<line
				x1="70"
				y1="40"
				x2="90"
				y2="45"
				stroke="#333"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			<line
				x1="130"
				y1="40"
				x2="110"
				y2="45"
				stroke="#333"
				strokeWidth="4"
				strokeLinecap="round"
			/>

			{/* 嘴巴 - 自信的笑容 */}
			<path
				d="M 75 75 Q 100 85 125 75"
				stroke="#333"
				strokeWidth="3"
				fill="none"
			/>

			{/* 左拳击手套（向前伸出） */}
			<ellipse
				cx="30"
				cy="150"
				rx="25"
				ry="30"
				fill="#FF6B6B"
			/>
			<rect x="10" y="140" width="40" height="20" rx="10" fill="#FF6B6B" />

			{/* 右拳击手套（准备姿势） */}
			<ellipse
				cx="170"
				cy="160"
				rx="25"
				ry="30"
				fill="#FF6B6B"
			/>
			<rect x="150" y="150" width="40" height="20" rx="10" fill="#FF6B6B" />

			{/* 左手臂 */}
			<rect x="20" y="130" width="20" height="50" rx="10" fill="#FFE0BD" />

			{/* 右手臂 */}
			<rect x="160" y="140" width="20" height="50" rx="10" fill="#FFE0BD" />

			{/* 腿部 */}
			<rect x="75" y="220" width="25" height="60" rx="12" fill="#2C3E50" />
			<rect x="100" y="220" width="25" height="60" rx="12" fill="#2C3E50" />

			{/* 鞋子 */}
			<ellipse cx="87" cy="285" rx="20" ry="10" fill="#1A1A1A" />
			<ellipse cx="113" cy="285" rx="20" ry="10" fill="#1A1A1A" />
		</svg>
	);
};
