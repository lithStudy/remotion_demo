import React from "react";
import {AbsoluteFill} from "remotion";
import {
	Behavior,
	Particles,
	Spawner,
	StaggeredMotion,
	useViewportRect,
} from "remotion-bits";

/** 白底可读：偏琥珀/暖橙（与 remotion-bits 粒子结构搭配） */
const DEFAULT_PALETTE = ["#c2410c", "#d97706", "#ca8a04", "#b45309"];

export type FirefliesBackdropProps = {
	opacity: number;
	seed: string;
	maxParticles?: number;
	colorPalette?: string[];
};

export const FirefliesBackdrop: React.FC<FirefliesBackdropProps> = ({
	opacity,
	seed,
	maxParticles = 120,
	colorPalette = DEFAULT_PALETTE,
}) => {
	const rect = useViewportRect();
	const rootOpacity = Math.max(0, Math.min(1, opacity));

	if (rootOpacity <= 0.001) {
		return null;
	}

	const max = Math.max(0, Math.min(400, Math.floor(maxParticles)));
	if (max <= 0) {
		return null;
	}

	const colors =
		colorPalette.length > 0 ? colorPalette : DEFAULT_PALETTE;

	return (
		<AbsoluteFill
			style={{
				pointerEvents: "none",
				opacity: rootOpacity,
			}}
		>
			<Particles>
				<Spawner
					id={seed}
					rate={0.2}
					max={max}
					area={{width: rect.width, height: rect.height}}
					position={{x: rect.width / 2, y: rect.height / 2}}
					lifespan={100}
					velocity={{x: 0.5, y: 0.5, varianceX: 1, varianceY: 1}}
				>
					{colors.map((color, i) => (
						<StaggeredMotion
							key={`${seed}-${i}-${color}`}
							transition={{
								opacity: [0, 1, 0],
							}}
						>
							<div
								style={{
									width: rect.vmin,
									height: rect.vmin,
									borderRadius: "50%",
									backgroundColor: color,
									boxShadow: `0 0 ${rect.vmin * 2}px ${rect.vmin * 1}px ${color}99`,
								}}
							/>
						</StaggeredMotion>
					))}
				</Spawner>

				<Behavior
					wiggle={{magnitude: 2, frequency: 0.1}}
					wiggleVariance={1}
				/>
			</Particles>
		</AbsoluteFill>
	);
};
