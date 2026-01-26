import React from "react";

export interface PersonAThinkingProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 思考状态的PersonA组件
 * 坐在办公桌前，手托下巴，表情若有所思
 */
export const PersonAThinking: React.FC<PersonAThinkingProps> = ({
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="300"
			height="400"
			viewBox="0 0 300 400"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 办公桌 */}
			<rect x="0" y="280" width="300" height="120" fill="#8B4513" />
			<rect x="10" y="270" width="280" height="10" fill="#654321" />

			{/* 电脑显示器 */}
			<rect x="80" y="200" width="140" height="100" fill="#1a1a1a" rx="5" />
			<rect x="85" y="205" width="130" height="90" fill="#000" />
			<rect x="90" y="210" width="120" height="80" fill="#0a0a0a" />

			{/* 键盘 */}
			<rect x="100" y="300" width="100" height="20" fill="#2a2a2a" rx="3" />

			{/* 身体 */}
			<ellipse cx="150" cy="250" rx="50" ry="50" fill="#4ECDC4" />

			{/* 头部 */}
			<circle
				cx="150"
				cy="120"
				r="50"
				fill="#FFE0BD"
				stroke="#E8C39E"
				strokeWidth="2"
			/>

			{/* 思考的眉毛 - 微蹙 */}
			<path
				d="M 110 100 Q 130 95 150 100"
				stroke="#333"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 190 100 Q 170 95 150 100"
				stroke="#333"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
			/>

			{/* 眼睛 - 思考状态 */}
			<ellipse cx="130" cy="115" rx="8" ry="10" fill="white" />
			<ellipse cx="170" cy="115" rx="8" ry="10" fill="white" />
			<circle cx="132" cy="115" r="4" fill="#333" />
			<circle cx="172" cy="115" r="4" fill="#333" />

			{/* 嘴巴 - 思考 */}
			<path
				d="M 130 140 Q 150 145 170 140"
				stroke="#333"
				strokeWidth="2"
				fill="none"
			/>

			{/* 右手 - 托下巴 */}
			<ellipse
				cx="180"
				cy="150"
				rx="12"
				ry="25"
				fill="#FFE0BD"
				transform="rotate(20 180 150)"
			/>
			{/* 手指 */}
			<ellipse
				cx="190"
				cy="130"
				rx="6"
				ry="15"
				fill="#FFE0BD"
				transform="rotate(45 190 130)"
			/>
			<ellipse
				cx="195"
				cy="125"
				rx="5"
				ry="12"
				fill="#FFE0BD"
				transform="rotate(50 195 125)"
			/>

			{/* 左手 - 放在鼠标上 */}
			<ellipse
				cx="120"
				cy="280"
				rx="15"
				ry="30"
				fill="#FFE0BD"
				transform="rotate(-30 120 280)"
			/>
			{/* 鼠标 */}
			<ellipse cx="115" cy="295" rx="20" ry="12" fill="#3a3a3a" />
		</svg>
	);
};
