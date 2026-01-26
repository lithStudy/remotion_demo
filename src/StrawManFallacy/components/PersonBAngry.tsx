import React from "react";

export interface PersonBAngryProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 愤怒指向的PersonB组件
 * 表情愤怒，右手食指指向前方
 */
export const PersonBAngry: React.FC<PersonBAngryProps> = ({
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="200"
			height="250"
			viewBox="0 0 200 250"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 身体 */}
			<ellipse cx="100" cy="180" rx="50" ry="50" fill="#FF6B6B" />

			{/* 头部 */}
			<circle
				cx="100"
				cy="70"
				r="50"
				fill="#FFE0BD"
				stroke="#E8C39E"
				strokeWidth="2"
			/>

			{/* 愤怒的眉毛 - 上挑 */}
			<path
				d="M 70 50 Q 85 40 100 50"
				stroke="#333"
				strokeWidth="4"
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 130 50 Q 115 40 100 50"
				stroke="#333"
				strokeWidth="4"
				fill="none"
				strokeLinecap="round"
			/>

			{/* 眼睛 - 愤怒 */}
			<ellipse cx="80" cy="75" rx="8" ry="6" fill="white" />
			<ellipse cx="120" cy="75" rx="8" ry="6" fill="white" />
			<circle cx="82" cy="75" r="4" fill="#333" />
			<circle cx="122" cy="75" r="4" fill="#333" />

			{/* 嘴巴 - 张开，愤怒 */}
			<ellipse cx="100" cy="95" rx="15" ry="20" fill="#333" />

			{/* 右手 - 指向前方 */}
			<ellipse
				cx="160"
				cy="140"
				rx="12"
				ry="35"
				fill="#FFE0BD"
				transform="rotate(-20 160 140)"
			/>
			{/* 食指指向 */}
			<ellipse
				cx="170"
				cy="110"
				rx="6"
				ry="20"
				fill="#FFE0BD"
				transform="rotate(-10 170 110)"
			/>
			{/* 其他手指 */}
			<ellipse
				cx="175"
				cy="125"
				rx="5"
				ry="15"
				fill="#FFE0BD"
				transform="rotate(-5 175 125)"
			/>
			<ellipse
				cx="175"
				cy="145"
				rx="5"
				ry="15"
				fill="#FFE0BD"
				transform="rotate(5 175 145)"
			/>
			<ellipse
				cx="170"
				cy="160"
				rx="5"
				ry="12"
				fill="#FFE0BD"
				transform="rotate(10 170 160)"
			/>

			{/* 左手 */}
			<ellipse
				cx="40"
				cy="160"
				rx="12"
				ry="35"
				fill="#FFE0BD"
				transform="rotate(20 40 160)"
			/>
		</svg>
	);
};
