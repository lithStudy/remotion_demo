import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, interpolate } from "remotion";
import {
    TypewriterText,
    Stamp,
    LottieAnimation,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration } from "../../../utils";

/**
 * 动画配置：统一的数据结构
 * - name: 动画名称
 * - delayBefore: 在前一个动画结束后的延迟帧数
 * - delayAfter: 当前动画结束后的延迟帧数（用于下一个动画）
 * - durationInFrames: 动画持续帧数
 * - preName: 前一个动画的名称，null 表示这是第一个动画
 * 
 * 修改这里的值即可调整动画时序，后续动画会自动调整延迟时间
 */
const animationConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 20, preName: null },           // 主标题动画
    { name: "subtitle", delayBefore: 30, delayAfter: 0, durationInFrames: 20, preName: "title" },    // 副标题
    { name: "stamp", delayBefore: 20, delayAfter: 0, durationInFrames: 20, preName: "title" },      // 印章效果
    { name: "lottie", delayBefore: 0, delayAfter: 0, durationInFrames: 120, preName: null },      // Lottie背景动画
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateScene0Duration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * 场景入口
 */
export const Scene0: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 计算所有动画的延迟时间和配置信息
    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 计算主标题缩放动画，解释各参数：
    // - frame: 当前帧减去主标题动画实际开始的帧数，使 spring 在动画开始时由 0 计数
    // - fps: 视频帧率，用于弹簧动画的物理计算
    // - config: 弹簧配置，damping（阻尼）越大，动画更容易收敛、颤动更少
    // - durationInFrames: 动画持续帧数，影响 spring 在这段时间内完成（可选，具体实现可根据 utils 内 spring 定义决定）
    const titleScale = spring({
        frame: frame - animationTimings.title.startTime, // 当前帧数减去动画开始帧，使动画从0开始
        fps, // 视频帧率
        config: { damping: 80 }, // 阻尼系数，影响动画弹性收敛速度
        durationInFrames: animationTimings.title.durationInFrames, // 动画持续帧数
    });


    // Lottie动画的透明度，在动画开始时淡入
    const lottieOpacity = interpolate(
        frame,
        [animationTimings.lottie.startTime, animationTimings.lottie.startTime + 20],
        [0, 1],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
        }
    );

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: 60,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* 印章效果 - 右上角 */}
            <div
                style={{
                    position: "absolute",
                    top: 60,
                    right: 60,
                }}
            >
                <Stamp
                    text="逻辑谬误"
                    delay={animationTimings.stamp.startTime}
                    style={{ 
                        fontSize: 30,
                        padding: "10px 20px",

                    }}
                />
            </div>
            {/* 主标题 */}
            <div
                style={{
                    transform: `scale(${titleScale})`,
                    textAlign: "center",
                    marginBottom: 500,
                }}
            >
                <div
                    style={{
                        fontSize: 100,
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                    }}
                >
                    稻草人谬误
                </div>
                <div
                    style={{
                        fontSize: 50,
                        color: "rgba(255,255,255,0.8)",
                        marginTop: 10,
                    }}
                >
                    <TypewriterText 
                        text="Straw Man Fallacy" 
                        delay={animationTimings.title.startTime} 
                        charFrames={2}
                        durationInFrames={animationTimings.title.durationInFrames}
                    />
                </div>
            </div>
            {/* Lottie背景装饰动画 */}
            <Sequence from={animationTimings.lottie.startTime} durationInFrames={animationTimings.lottie.durationInFrames}>
                <div
                    style={{
                        position: "absolute",
                        top: "35%",
                        left: "8%",
                        opacity: lottieOpacity,
                        width: 800,
                        height: 800,
                    }}
                >
                    <LottieAnimation
                        src="https://assets1.lottiefiles.com/packages/lf20_pwohahvd.json"
                        style={{ width: "100%", height: "100%" }}
                        playbackRate={1}
                        loop={true}
                    />
                </div>
            </Sequence>
           
        </AbsoluteFill>
    );
};
