import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { Scene5AcademicAuthority } from "../StrawManFallacy/scenes";

export const academicAuthoritySchema = z.object({
	backgroundColor: zColor(),
	primaryColor: zColor(),
	accentColor: zColor(),
});

// 配色方案常量
export const DARK_CHARCOAL = "#2E2E2E";
export const LOGIC_BLUE = "#4ECDC4";
export const ALERT_RED = "#FF6B6B";

// 场景时长配置
const SCENE_DURATION = 540; // 18秒 @ 30fps

/**
 * 学术权威压制谬误讲解动画
 * Academic Authority Fallacy Animation
 *
 * 场景时间轴:
 * - 场景: 学术权威压制案例: 0-540帧 (18秒)
 *
 * 总时长: 540帧 (18秒 @ 30fps)
 */
export const AcademicAuthority: React.FC<
	z.infer<typeof academicAuthoritySchema>
> = ({ backgroundColor, primaryColor, accentColor }) => {
	return (
		<AbsoluteFill style={{ backgroundColor: DARK_CHARCOAL }}>
			<Sequence durationInFrames={SCENE_DURATION}>
				<Scene5AcademicAuthority />
			</Sequence>
		</AbsoluteFill>
	);
};
