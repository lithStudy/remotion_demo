import React from "react";
import { useVideoConfig, useCurrentFrame } from "remotion";
import { RainDrop } from "./RainDrop";

export interface RainProps {
	color: string;
	count?: number;
}

export const Rain: React.FC<RainProps> = ({ color, count = 160 }) => {
	const frame = useCurrentFrame();
	const { width } = useVideoConfig();

	// 生成多个雨滴
	const rainDrops = Array.from({ length: count }, (_, i) => {
		// 简单的伪随机分布
		const x = ((i * 13 + 7) * 19.2) % width; // 均匀分布但避免重复
		const startY = ((i * 17 + 11) * 7.2) % 1080; // 不同的起始位置
		const speed = 4 + ((i * 3) % 4); // 不同的速度，4-7之间

		return (
			<RainDrop
				key={i}
				x={x}
				startY={startY}
				speed={speed}
				color={color}
				frame={frame}
			/>
		);
	});

	return <>{rainDrops}</>;
};
