import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

// 导入场景组件
import {
    Scene1,
    Scene2,
    Scene3
} from "./scenes";
// 导入场景时长计算函数
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
    { name: "scene1", durationInFrames: calculateScene1Duration()},      // P1: 标题场景（自动计算）
    { name: "scene2", durationInFrames: calculateScene2Duration()},   // P2: 策略场景（自动计算）
    { name: "scene3", durationInFrames: calculateScene3Duration()}      // P3: 案例一（自动计算）
];

/**
 * 计算总时长：所有场景的播放时间 + 静止时间之和
 */
export const DEMO_TOTAL_DURATION = sceneConfigs.reduce(
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
export const Demo: React.FC<z.infer<typeof DemoSchema>> = () => {
    // 计算每个场景的起始时间（相对时间）
    let currentStartFrame = 0;
    const sceneTimings = sceneConfigs.reduce((acc, config) => {
        const startFrame = currentStartFrame;
        currentStartFrame = startFrame + config.durationInFrames;
        acc[config.name] = {
            ...config,
            from: startFrame,
        };
        return acc;
    }, {} as Record<string, { name: string; durationInFrames: number; from: number }>);

    return (
        <AbsoluteFill>
            {/* P1: 标题场景 */}
            <Sequence name="scene1" from={sceneTimings.scene1.from} durationInFrames={sceneTimings.scene1.durationInFrames} premountFor={30}>
                <Scene1 />
            </Sequence>

            {/* P2: 策略场景 */}
            <Sequence name="scene2" from={sceneTimings.scene2.from} durationInFrames={sceneTimings.scene2.durationInFrames} premountFor={30}>
                <Scene2 />
            </Sequence>

            {/* P3: 案例一 */}
            <Sequence name="scene3" from={sceneTimings.scene3.from} durationInFrames={sceneTimings.scene3.durationInFrames} premountFor={30}>
                <Scene3 />
            </Sequence>

            
        </AbsoluteFill>
    );
};
