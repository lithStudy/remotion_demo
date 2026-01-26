import React from "react";

export interface QuestionIconProps {
	color?: string;
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 问号图标组件
 * 蓝色正方形，内有一个白色问号和放大镜
 */
export const QuestionIcon: React.FC<QuestionIconProps> = ({
	color = "#4ECDC4",
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="80"
			height="80"
			viewBox="0 0 80 80"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 蓝色正方形背景 */}
			<rect x="0" y="0" width="80" height="80" fill={color} rx="8" />

			{/* 放大镜 */}
			<circle cx="50" cy="50" r="12" fill="none" stroke="white" strokeWidth="3" />
			<line
				x1="58"
				y1="58"
				x2="70"
				y2="70"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			{/* 问号 */}
			<text
				x="25"
				y="45"
				fontSize="32"
				fontWeight="bold"
				fill="white"
				fontFamily="'Noto Sans SC', sans-serif"
			>
				Q
			</text>
		</svg>
	);
};
