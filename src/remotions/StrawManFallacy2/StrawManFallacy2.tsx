import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

// 导入场景组件
import {
    TitleScene,
    StrategyScene,
    Case1Scene,
    Case2Scene,
    Case3Scene,
    SummaryScene,
} from "./scenes";
// 导入场景时长计算函数
import { calculateTitleSceneDuration } from "./scenes/TitleScene";
import { calculateStrategySceneDuration } from "./scenes/StrategyScene";
import { calculateCase1SceneDuration } from "./scenes/Case1Scene";
import { calculateCase2SceneDuration } from "./scenes/Case2Scene";
import { calculateCase3SceneDuration } from "./scenes/Case3Scene";
import { calculateSummarySceneDuration } from "./scenes/SummaryScene";

export const StrawManFallacy2Schema = z.object({
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
    { name: "Title", durationInFrames: calculateTitleSceneDuration()},      // P1: 标题场景（自动计算）
    { name: "Strategy", durationInFrames: calculateStrategySceneDuration()},   // P2: 策略场景（自动计算）
    { name: "Case1", durationInFrames: calculateCase1SceneDuration()},      // P3: 案例一（自动计算）
    { name: "Case2", durationInFrames: calculateCase2SceneDuration()},      // P4: 案例二（自动计算）
    { name: "Case3", durationInFrames: calculateCase3SceneDuration()},      // P5: 案例三（自动计算）
    { name: "Summary", durationInFrames: calculateSummarySceneDuration()},     // P6: 总结场景（自动计算）
];

/**
 * 计算总时长：所有场景的播放时间 + 静止时间之和
 */
export const STRAW_MAN_FALLACY_2_TOTAL_DURATION = sceneConfigs.reduce(
    (total, config) => total + config.durationInFrames,
    0
);

/**
 * 稻草人谬误讲解动画 v2
 * Straw Man Fallacy Animation
 *
 * 场景配置（相对时间）：
 * 每个场景的起始时间 = 上一个场景的起始时间 + 播放时间 + 静止时间
 * 所有场景的时长都由各自的 animationConfigs 自动计算
 * 
 * 场景时间轴（全局帧数，自动计算）：
 * 具体时长取决于各场景文件中的 animationConfigs 配置
 * 总时长由所有场景的时长和 pauseAfter 自动计算
 */
export const StrawManFallacy2: React.FC<z.infer<typeof strawManFallacy2Schema>> = () => {
    // 计算每个场景的起始时间（相对时间）
    let currentStartFrame = 0;
    const sceneTimings = sceneConfigs.map((config) => {
        const startFrame = currentStartFrame;
        currentStartFrame = startFrame + config.durationInFrames;
        return {
            ...config,
            from: startFrame,
        };
    });

    return (
        <AbsoluteFill>
            {/* P1: 标题场景 */}
            <Sequence name="scene1" from={sceneTimings[0].from} durationInFrames={sceneTimings[0].durationInFrames} premountFor={30}>
                <TitleScene />
            </Sequence>

            {/* P2: 策略场景 */}
            <Sequence name="scene2" from={sceneTimings[1].from} durationInFrames={sceneTimings[1].durationInFrames} premountFor={30}>
                <StrategyScene />
            </Sequence>

            {/* P3: 案例一 */}
            <Sequence name="scene3" from={sceneTimings[2].from} durationInFrames={sceneTimings[2].durationInFrames} premountFor={30}>
                <Case1Scene />
            </Sequence>

            {/* P4: 案例二 */}
            <Sequence name="scene4" from={sceneTimings[3].from} durationInFrames={sceneTimings[3].durationInFrames} premountFor={30}>
                <Case2Scene />
            </Sequence>

            {/* P5: 案例三 */}
            <Sequence name="scene5" from={sceneTimings[4].from} durationInFrames={sceneTimings[4].durationInFrames} premountFor={30}>
                <Case3Scene />
            </Sequence>

            {/* P6: 总结场景 */}
            <Sequence name="scene6" from={sceneTimings[5].from} durationInFrames={sceneTimings[5].durationInFrames} premountFor={30}>
                <SummaryScene />
            </Sequence>
        </AbsoluteFill>
    );
};
