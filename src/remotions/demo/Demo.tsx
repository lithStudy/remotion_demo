import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import {
    linearTiming,
    TransitionSeries,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { slide } from "@remotion/transitions/slide";

// 导入场景组件
import {
    Scene0,
    Scene1,
    Scene2,
    Scene3,
} from "./scenes";
// 导入场景时长计算函数
import { calculateScene0Duration } from "./scenes/Scene0";
import { calculateScene1Duration } from "./scenes/Scene1";
import { calculateScene2Duration } from "./scenes/Scene2";
import { calculateScene3Duration } from "./scenes/Scene3";

export const DemoSchema = z.object({
    backgroundColor: zColor(),
    primaryColor: zColor(),
    accentColor: zColor(),
});

/**
 * 场景配置：每个场景的播放时间和静止时间
 * 所有场景的时长都由各自的 animationConfigs 自动计算
 * 修改各场景文件中的 animationConfigs 即可调整动画时长，后续场景会自动调整起始时间
 */
const sceneConfigs = [
    { name: "scene0", durationInFrames: calculateScene0Duration(), component: Scene0},      // P0: 标题场景（自动计算）
    { name: "scene1", durationInFrames: calculateScene1Duration(), component: Scene1},      // P1: 标题场景（自动计算）
    { name: "scene2", durationInFrames: calculateScene2Duration(), component: Scene2},   // P2: 策略场景（自动计算）
    { name: "scene3", durationInFrames: calculateScene3Duration(), component: Scene3}      // P3: 案例一（自动计算）
];

/**
 * 转场效果配置：为不同场景之间选择不同的转场效果
 */
const transitionConfigs = [
    { type: "fade" as const },      // Scene0 -> Scene1: 淡入淡出
    { type: "fade" as const, direction: "from-left" as const },  // Scene1 -> Scene2: 从左擦除
    { type: "fade" as const, direction: "from-bottom" as const }, // Scene2 -> Scene3: 从下向上滑动
];

/**
 * 转场配置：每个转场的持续帧数
 */
const TRANSITION_DURATION = 15; // 每个转场持续15帧

/**
 * 计算总时长：所有场景的播放时间 - 转场时间之和
 * 注意：TransitionSeries 中的转场是重叠的，转场会在两个场景之间同时播放，
 * 所以总时长 = 所有场景时长之和 - 所有转场时长之和
 */
export const TOTAL_DURATION_DEMO = sceneConfigs.reduce(
    (total, config) => total + config.durationInFrames,
    0
) - (sceneConfigs.length - 1) * TRANSITION_DURATION; // 转场是重叠的，所以需要减去转场时间



/**
 * 稻草人谬误讲解动画
 */
export const Demo: React.FC<z.infer<typeof DemoSchema>> = () => {
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
                            
                            {/* 在场景之间添加转场效果，最后一个场景后不需要转场 */}
                            {!isLast && (
                                <TransitionSeries.Transition
                                    timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                                    presentation={
                                        transitionConfigs[index].type === "fade"
                                            ? fade()
                                            : transitionConfigs[index].type === "wipe"
                                            ? wipe({ direction: transitionConfigs[index].direction || "from-left" })
                                            : slide({ direction: transitionConfigs[index].direction || "from-bottom" })
                                    }
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </TransitionSeries>
        </AbsoluteFill>
    );
};
