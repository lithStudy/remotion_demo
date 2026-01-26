import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import {
	Scene1FakeVictory,
	Scene2DefiningFallacy,
	Scene3CoffeeExample,
	Scene4CorrectionOutro,
} from "./scenes";

export const strawManSchema = z.object({
	backgroundColor: zColor(),
	primaryColor: zColor(),
	accentColor: zColor(),
});

// 配色方案常量
export const STRAW_YELLOW = "#FFD700";
export const DARK_CHARCOAL = "#2E2E2E";
export const ALERT_RED = "#FF6B6B";
export const LOGIC_BLUE = "#4ECDC4";

// 场景时长配置
const SCENE_DURATIONS = {
	FAKE_VICTORY: 120, // 场景1: 0-120帧 (4秒)
	DEFINING_FALLACY: 150, // 场景2: 121-270帧 (5秒)
	COFFEE_EXAMPLE: 270, // 场景3: 271-540帧 (9秒)
	CORRECTION_OUTRO: 240, // 场景4: 541-780帧 (8秒)
} as const;

// 计算每个场景的起始帧
const SCENE_STARTS = {
	FAKE_VICTORY: 0,
	DEFINING_FALLACY: SCENE_DURATIONS.FAKE_VICTORY,
	COFFEE_EXAMPLE:
		SCENE_DURATIONS.FAKE_VICTORY + SCENE_DURATIONS.DEFINING_FALLACY,
	CORRECTION_OUTRO:
		SCENE_DURATIONS.FAKE_VICTORY +
		SCENE_DURATIONS.DEFINING_FALLACY +
		SCENE_DURATIONS.COFFEE_EXAMPLE,
} as const;

/**
 * 稻草人谬误讲解动画
 * Straw Man Fallacy Animation
 *
 * 场景时间轴:
 * - 场景1 虚假的胜利: 0-120帧 (4秒)
 * - 场景2 定义谬误: 121-270帧 (5秒)
 * - 场景3 经典案例: 271-540帧 (9秒)
 * - 场景4 破解与总结: 541-780帧 (8秒)
 *
 * 总时长: 780帧 (26秒 @ 30fps)
 */
export const StrawManFallacy: React.FC<
	z.infer<typeof strawManSchema>
> = ({ backgroundColor, primaryColor, accentColor }) => {
	return (
		<AbsoluteFill style={{ backgroundColor: DARK_CHARCOAL }}>
			{/* 场景1: 虚假的胜利 */}
			<Sequence durationInFrames={SCENE_DURATIONS.FAKE_VICTORY}>
				<Scene1FakeVictory />
			</Sequence>

			{/* 场景2: 定义谬误 */}
			<Sequence
				from={SCENE_STARTS.DEFINING_FALLACY}
				durationInFrames={SCENE_DURATIONS.DEFINING_FALLACY}
			>
				<Scene2DefiningFallacy />
			</Sequence>

			{/* 场景3: 经典案例 */}
			<Sequence
				from={SCENE_STARTS.COFFEE_EXAMPLE}
				durationInFrames={SCENE_DURATIONS.COFFEE_EXAMPLE}
			>
				<Scene3CoffeeExample />
			</Sequence>

			{/* 场景4: 破解与总结 */}
			<Sequence
				from={SCENE_STARTS.CORRECTION_OUTRO}
				durationInFrames={SCENE_DURATIONS.CORRECTION_OUTRO}
			>
				<Scene4CorrectionOutro />
			</Sequence>
		</AbsoluteFill>
	);
};
