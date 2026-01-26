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

export const strawManFallacy2Schema = z.object({
    backgroundColor: zColor(),
    primaryColor: zColor(),
    accentColor: zColor(),
});

/**
 * 稻草人谬误讲解动画 v2
 * Straw Man Fallacy Animation
 *
 * 场景时间轴（全局帧数）：
 * - P1 标题场景 (Title):      0-150帧  (5秒)
 * - P2 策略场景 (Strategy):   150-330帧 (6秒)
 * - P3 案例一 (Case1):        330-480帧 (5秒)
 * - P4 案例二 (Case2):        480-630帧 (5秒)
 * - P5 案例三 (Case3):        630-780帧 (5秒)
 * - P6 总结场景 (Summary):    780-960帧 (6秒)
 *
 * 总时长: 960帧 (32秒 @ 30fps)
 */
export const StrawManFallacy2: React.FC<z.infer<typeof strawManFallacy2Schema>> = () => {
    return (
        <AbsoluteFill>
            {/* P1: 标题场景 - 0-150帧 (5秒) */}
            <Sequence durationInFrames={150} premountFor={30}>
                <TitleScene />
            </Sequence>

            {/* P2: 策略场景 - 150-330帧 (6秒) */}
            <Sequence from={150} durationInFrames={180} premountFor={30}>
                <StrategyScene />
            </Sequence>

            {/* P3: 案例一 - 330-480帧 (5秒) */}
            <Sequence from={330} durationInFrames={150} premountFor={30}>
                <Case1Scene />
            </Sequence>

            {/* P4: 案例二 - 480-630帧 (5秒) */}
            <Sequence from={480} durationInFrames={150} premountFor={30}>
                <Case2Scene />
            </Sequence>

            {/* P5: 案例三 - 630-780帧 (5秒) */}
            <Sequence from={630} durationInFrames={150} premountFor={30}>
                <Case3Scene />
            </Sequence>

            {/* P6: 总结场景 - 780-960帧 (6秒) */}
            <Sequence from={780} durationInFrames={180} premountFor={30}>
                <SummaryScene />
            </Sequence>
        </AbsoluteFill>
    );
};
