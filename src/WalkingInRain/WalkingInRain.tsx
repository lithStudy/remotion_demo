import {
	AbsoluteFill,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { Person, Rain, Ground } from "./components";

export const walkingInRainSchema = z.object({
	backgroundColor: zColor(),
	groundColor: zColor(),
	personColor: zColor(),
	rainColor: zColor(),
});

export const WalkingInRain: React.FC<
	z.infer<typeof walkingInRainSchema>
> = ({ backgroundColor, groundColor, personColor, rainColor }) => {
	const frame = useCurrentFrame();
	const { width, durationInFrames } = useVideoConfig();

	// 小人从左边走到右边
	const personX = interpolate(
		frame,
		[0, durationInFrames],
		[100, width - 100],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	return (
		<AbsoluteFill
			style={{
				backgroundColor,
			}}
		>
			{/* 水平线（地面） */}
			<Ground color={groundColor} />

			{/* 雨滴 */}
			<Rain color={rainColor} count={150} />

			{/* 小人 */}
			<Person x={personX} color={personColor} frame={frame} />
		</AbsoluteFill>
	);
};
