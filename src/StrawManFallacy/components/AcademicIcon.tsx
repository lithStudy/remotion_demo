import React from "react";

export interface AcademicIconProps {
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 院士头像组件
 * 慈眉善目的老年男性，戴眼镜，灰白头发，带金色桂冠和红色飘带
 */
export const AcademicIcon: React.FC<AcademicIconProps> = ({
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	return (
		<svg
			width="150"
			height="180"
			viewBox="0 0 150 180"
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
			}}
		>
			{/* 金色桂冠 */}
			<ellipse
				cx="75"
				cy="30"
				rx="70"
				ry="25"
				fill="#FFD700"
				stroke="#FFA500"
				strokeWidth="2"
			/>
			{/* 桂冠装饰 */}
			<circle cx="30" cy="30" r="8" fill="#FFA500" />
			<circle cx="75" cy="25" r="10" fill="#FFA500" />
			<circle cx="120" cy="30" r="8" fill="#FFA500" />

			{/* 红色飘带 */}
			<rect x="20" y="50" width="110" height="25" fill="#DC143C" rx="5" />
			<text
				x="75"
				y="68"
				fontSize="18"
				fontWeight="bold"
				fill="white"
				textAnchor="middle"
				fontFamily="'Noto Sans SC', sans-serif"
			>
				院士
			</text>

			{/* 头部 */}
			<circle cx="75" cy="100" r="45" fill="#FFE0BD" />

			{/* 灰白头发 */}
			<ellipse cx="75" cy="70" rx="50" ry="30" fill="#D3D3D3" />
			<path
				d="M 25 70 Q 75 50 125 70 Q 125 60 75 60 Q 25 60 25 70"
				fill="#C0C0C0"
			/>

			{/* 眼镜 */}
			<circle cx="60" cy="95" r="18" fill="none" stroke="#333" strokeWidth="3" />
			<circle cx="90" cy="95" r="18" fill="none" stroke="#333" strokeWidth="3" />
			<line x1="78" y1="95" x2="82" y2="95" stroke="#333" strokeWidth="3" />
			<line x1="42" y1="95" x2="48" y2="95" stroke="#333" strokeWidth="2" />
			<line x1="102" y1="95" x2="108" y2="95" stroke="#333" strokeWidth="2" />

			{/* 眼睛 - 慈眉善目 */}
			<ellipse cx="60" cy="95" rx="8" ry="10" fill="white" />
			<ellipse cx="90" cy="95" rx="8" ry="10" fill="white" />
			<circle cx="62" cy="95" r="4" fill="#333" />
			<circle cx="92" cy="95" r="4" fill="#333" />

			{/* 眉毛 - 慈祥 */}
			<path
				d="M 45 80 Q 60 75 75 80"
				stroke="#666"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
			/>
			<path
				d="M 105 80 Q 90 75 75 80"
				stroke="#666"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
			/>

			{/* 鼻子 */}
			<ellipse cx="75" cy="110" rx="4" ry="8" fill="#E8C39E" />

			{/* 嘴巴 - 微笑 */}
			<path
				d="M 60 125 Q 75 135 90 125"
				stroke="#333"
				strokeWidth="3"
				fill="none"
				strokeLinecap="round"
			/>

			{/* 西装领子 */}
			<path
				d="M 50 145 L 75 160 L 100 145"
				fill="#2C3E50"
				stroke="#1a1a1a"
				strokeWidth="2"
			/>
		</svg>
	);
};
