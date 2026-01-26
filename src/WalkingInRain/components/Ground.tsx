import React from "react";

export interface GroundProps {
	color: string;
	height?: number;
	bottom?: number;
}

export const Ground: React.FC<GroundProps> = ({
	color,
	height = 4,
	bottom = 140,
}) => {
	return (
		<div
			style={{
				position: "absolute",
				bottom,
				left: 0,
				right: 0,
				height,
				backgroundColor: color,
			}}
		/>
	);
};
