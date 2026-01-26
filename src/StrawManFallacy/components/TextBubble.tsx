import React from "react";

export interface TextBubbleProps {
	text: string;
	scale?: number;
	opacity?: number;
	transform?: string;
	backgroundColor?: string;
	textColor?: string;
}

/**
 * 对话气泡组件
 */
export const TextBubble: React.FC<TextBubbleProps> = ({
	text,
	scale = 1,
	opacity = 1,
	transform = "",
	backgroundColor = "white",
	textColor = "#333",
}) => {
	return (
		<div
			style={{
				opacity,
				transform: `scale(${scale}) ${transform}`,
				position: "relative",
				display: "inline-block",
			}}
		>
			<div
				style={{
					backgroundColor,
					borderRadius: "20px",
					padding: "20px 30px",
					fontSize: "32px",
					fontWeight: "bold",
					color: textColor,
					boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
					fontFamily: "'Noto Sans SC', sans-serif",
					maxWidth: "600px",
					position: "relative",
				}}
			>
				{text}
				{/* 气泡尾巴 */}
				<div
					style={{
						position: "absolute",
						bottom: "-15px",
						left: "50px",
						width: 0,
						height: 0,
						borderLeft: "20px solid transparent",
						borderRight: "20px solid transparent",
						borderTop: `20px solid ${backgroundColor}`,
					}}
				/>
			</div>
		</div>
	);
};
