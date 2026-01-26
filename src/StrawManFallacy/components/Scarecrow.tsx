import React from "react";

export interface ScarecrowProps {
	isBroken?: boolean;
	scale?: number;
	opacity?: number;
	transform?: string;
}

/**
 * 稻草人SVG组件
 * 支持完好和破碎两种状态
 */
export const Scarecrow: React.FC<ScarecrowProps> = ({
	isBroken = false,
	scale = 1,
	opacity = 1,
	transform = "",
}) => {
	if (isBroken) {
		// 破碎的稻草人
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
				{/* 破碎的头部 - 倾斜 */}
				<circle
					cx="100"
					cy="60"
					r="35"
					fill="#FFD700"
					transform="rotate(-15 100 60)"
				/>
				<circle cx="95" cy="55" r="8" fill="#8B6914" />
				<circle cx="105" cy="55" r="8" fill="#8B6914" />
				<line
					x1="90"
					y1="70"
					x2="110"
					y2="70"
					stroke="#8B6914"
					strokeWidth="2"
				/>

				{/* 破碎的身体 - 散落 */}
				<rect
					x="80"
					y="100"
					width="40"
					height="80"
					rx="20"
					fill="#FFD700"
					transform="rotate(10 100 140)"
				/>
				<rect
					x="85"
					y="110"
					width="30"
					height="60"
					rx="15"
					fill="#8B6914"
					transform="rotate(10 100 140)"
				/>

				{/* 散落的手臂 */}
				<rect
					x="30"
					y="120"
					width="15"
					height="50"
					rx="7"
					fill="#FFD700"
					transform="rotate(-45 37.5 145)"
				/>
				<rect
					x="155"
					y="130"
					width="15"
					height="50"
					rx="7"
					fill="#FFD700"
					transform="rotate(45 162.5 155)"
				/>

				{/* 散落的腿部 */}
				<rect
					x="70"
					y="200"
					width="20"
					height="60"
					rx="10"
					fill="#FFD700"
					transform="rotate(-20 80 230)"
				/>
				<rect
					x="110"
					y="210"
					width="20"
					height="60"
					rx="10"
					fill="#FFD700"
					transform="rotate(20 120 240)"
				/>

				{/* 破碎的稻草堆 */}
				<ellipse cx="50" cy="280" rx="30" ry="15" fill="#8B6914" />
				<ellipse cx="150" cy="270" rx="25" ry="12" fill="#8B6914" />
			</svg>
		);
	}

	// 完好的稻草人
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
			{/* 头部 */}
			<circle cx="100" cy="60" r="40" fill="#FFD700" />
			<circle cx="90" cy="55" r="8" fill="#8B6914" />
			<circle cx="110" cy="55" r="8" fill="#8B6914" />
			<line
				x1="85"
				y1="70"
				x2="115"
				y2="70"
				stroke="#8B6914"
				strokeWidth="2"
			/>

			{/* 身体 */}
			<rect x="70" y="100" width="60" height="100" rx="30" fill="#FFD700" />
			<rect x="80" y="110" width="40" height="80" rx="20" fill="#8B6914" />

			{/* 手臂 */}
			<rect x="30" y="120" width="20" height="60" rx="10" fill="#FFD700" />
			<rect x="150" y="120" width="20" height="60" rx="10" fill="#FFD700" />

			{/* 腿部 */}
			<rect x="75" y="200" width="25" height="70" rx="12" fill="#FFD700" />
			<rect x="100" y="200" width="25" height="70" rx="12" fill="#FFD700" />

			{/* 支撑杆 */}
			<line
				x1="100"
				y1="270"
				x2="100"
				y2="300"
				stroke="#654321"
				strokeWidth="8"
				strokeLinecap="round"
			/>
		</svg>
	);
};
