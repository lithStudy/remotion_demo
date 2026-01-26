import React from "react";

export interface AuthoritySealProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 学术权威印章组件
 * 红色圆形印章，白色文字，边缘有粗糙感
 */
export const AuthoritySeal: React.FC<AuthoritySealProps> = ({
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
			{/* 印章主体 - 红色圆形，边缘粗糙 */}
			<circle cx="100" cy="100" r="80" fill="#DC143C" />
			{/* 粗糙边缘效果 */}
			<circle cx="100" cy="100" r="80" fill="none" stroke="#B22222" strokeWidth="3" />
			<path
				d="M 20 100 A 80 80 0 0 1 100 20 A 80 80 0 0 1 180 100 A 80 80 0 0 1 100 180 A 80 80 0 0 1 20 100"
				fill="none"
				stroke="#8B0000"
				strokeWidth="2"
				opacity="0.5"
			/>

			{/* 白色文字 - 学术权威 */}
			<text
				x="100"
				y="85"
				fontSize="28"
				fontWeight="bold"
				fill="white"
				textAnchor="middle"
				fontFamily="'Noto Sans SC', sans-serif"
				transform="rotate(-5 100 85)"
			>
				学术
			</text>
			<text
				x="100"
				y="120"
				fontSize="28"
				fontWeight="bold"
				fill="white"
				textAnchor="middle"
				fontFamily="'Noto Sans SC', sans-serif"
				transform="rotate(5 100 120)"
			>
				权威
			</text>

			{/* 印章装饰边框 */}
			<circle cx="100" cy="100" r="75" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
			<circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
		</svg>
	);
};
