import React from "react";

export interface PersonBProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 红色小人（乙）组件
 * 愤怒、夸张的肢体语言
 */
export const PersonB: React.FC<PersonBProps> = ({
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="160"
			height="200"
			viewBox="0 0 160 200"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 身体 */}
			<ellipse cx="80" cy="150" rx="45" ry="45" fill="#FF6B6B" />

			{/* 头部 */}
			<circle
				cx="80"
				cy="60"
				r="45"
				fill="#FFE0BD"
				stroke="#E8C39E"
				strokeWidth="2"
			/>

			{/* 眼睛 - 愤怒 */}
			<ellipse cx="60" cy="55" rx="8" ry="6" fill="white" />
			<ellipse cx="100" cy="55" rx="8" ry="6" fill="white" />
			<circle cx="62" cy="55" r="4" fill="#333" />
			<circle cx="102" cy="55" r="4" fill="#333" />

			{/* 愤怒的眉毛 */}
			<line
				x1="48"
				y1="40"
				x2="72"
				y2="45"
				stroke="#333"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			<line
				x1="112"
				y1="40"
				x2="88"
				y2="45"
				stroke="#333"
				strokeWidth="4"
				strokeLinecap="round"
			/>

			{/* 嘴巴 - 愤怒 */}
			<path
				d="M 55 80 Q 80 70 105 80"
				stroke="#333"
				strokeWidth="3"
				fill="none"
			/>

			{/* 夸张的手臂 - 向上举起 */}
			<rect
				x="20"
				y="100"
				width="20"
				height="60"
				rx="10"
				fill="#FFE0BD"
				transform="rotate(-30 30 130)"
			/>
			<rect
				x="120"
				y="100"
				width="20"
				height="60"
				rx="10"
				fill="#FFE0BD"
				transform="rotate(30 130 130)"
			/>
		</svg>
	);
};
