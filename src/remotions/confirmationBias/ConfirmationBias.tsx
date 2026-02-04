import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import {
    linearTiming,
    TransitionSeries,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

// 导入场景组件
import {
    Scene1,
    Scene2,
    Scene3,
    Scene4,
    Scene5,
    Scene6,
    Scene7,
} from "./scenes";

// 导入场景时长计算函数
import { calculateScene1Duration } from "./scenes/Scene1";
import { calculateScene2Duration } from "./scenes/Scene2";
import { calculateScene3Duration } from "./scenes/Scene3";
import { calculateScene4Duration } from "./scenes/Scene4";
import { calculateScene5Duration } from "./scenes/Scene5";
import { calculateScene6Duration } from "./scenes/Scene6";
import { calculateScene7Duration } from "./scenes/Scene7";

export const ConfirmationBiasSchema = z.object({
    backgroundColor: zColor().optional(),
    primaryColor: zColor().optional(),
    accentColor: zColor().optional(),
});

/**
 * 场景配置
 */
const sceneConfigs = [
    { name: "scene1", durationInFrames: calculateScene1Duration(), component: Scene1 },
    { name: "scene2", durationInFrames: calculateScene2Duration(), component: Scene2 },
    { name: "scene3", durationInFrames: calculateScene3Duration(), component: Scene3 },
    { name: "scene4", durationInFrames: calculateScene4Duration(), component: Scene4 },
    { name: "scene5", durationInFrames: calculateScene5Duration(), component: Scene5 },
    { name: "scene6", durationInFrames: calculateScene6Duration(), component: Scene6 },
    { name: "scene7", durationInFrames: calculateScene7Duration(), component: Scene7 },
];

/**
 * 转场配置
 */
const TRANSITION_DURATION = 15;

/**
 * 计算总时长
 */
export const TOTAL_DURATION_CONFIRMATION_BIAS = sceneConfigs.reduce(
    (total, config) => total + config.durationInFrames,
    0
) - (sceneConfigs.length - 1) * TRANSITION_DURATION;

/**
 * 认知偏见 - 确认偏误动画
 */
export const ConfirmationBias: React.FC<z.infer<typeof ConfirmationBiasSchema>> = () => {
    return (
        <AbsoluteFill>
            <TransitionSeries>
                {sceneConfigs.map((config, index) => {
                    const SceneComponent = config.component;
                    const isLast = index === sceneConfigs.length - 1;

                    return (
                        <React.Fragment key={config.name}>
                            <TransitionSeries.Sequence durationInFrames={config.durationInFrames}>
                                <SceneComponent />
                            </TransitionSeries.Sequence>

                            {!isLast && (
                                <TransitionSeries.Transition
                                    timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                                    presentation={fade()}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </TransitionSeries>
        </AbsoluteFill>
    );
};
