import React from "react";

export interface PersonAProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 蓝色小人（甲）组件
 * 冷静、理性的角色
 */
export const PersonA: React.FC<PersonAProps> = ({
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
			<ellipse cx="80" cy="150" rx="45" ry="45" fill="#4ECDC4" />

			{/* 头部 */}
			<circle
				cx="80"
				cy="60"
				r="45"
				fill="#FFE0BD"
				stroke="#E8C39E"
				strokeWidth="2"
			/>

			{/* 眼睛 - 冷静 */}
			<ellipse cx="60" cy="55" rx="10" ry="10" fill="white" />
			<ellipse cx="100" cy="55" rx="10" ry="10" fill="white" />
			<circle cx="60" cy="55" r="5" fill="#333" />
			<circle cx="100" cy="55" r="5" fill="#333" />

			{/* 眉毛 - 平静 */}
			<line
				x1="45"
				y1="42"
				x2="75"
				y2="42"
				stroke="#333"
				strokeWidth="3"
				strokeLinecap="round"
			/>
			<line
				x1="105"
				y1="42"
				x2="135"
				y2="42"
				stroke="#333"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			{/* 嘴巴 - 平静 */}
			<path
				d="M 60 78 Q 80 85 100 78"
				stroke="#333"
				strokeWidth="3"
				fill="none"
			/>
		</svg>
	);
};
