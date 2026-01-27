import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    TypewriterText,
    TypewriterContent,
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
    { name: "conceptContainer", delayBefore: 0, delayAfter: 0, durationInFrames: 20, preName: "title" },  // 概念解析容器
    { name: "conceptTitle", delayBefore: 0, delayAfter: 0, durationInFrames: 20, preName: "conceptContainer" },  // 概念解析标题
    { name: "conceptContent", delayBefore: 0, delayAfter: 0, durationInFrames: 50, preName: "conceptTitle" },  // 概念解析内容
    { name: "example", delayBefore: 30, delayAfter: 100, durationInFrames: 20, preName: "conceptContent" }, // 典型话术
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateScene1Duration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * 场景入口
 */
export const Scene1: React.FC = () => {
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


    const conceptContainerOpacity = spring({
        frame: frame - animationTimings.conceptContainer.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.conceptContainer.durationInFrames,
    });

    const conceptContainerScale = spring({
        frame: frame - animationTimings.conceptContainer.startTime,
        fps,
        config: { damping: 80 },
        durationInFrames: animationTimings.conceptContainer.durationInFrames,
    });

    const conceptTitleOpacity = spring({
        frame: frame - animationTimings.conceptTitle.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.conceptTitle.durationInFrames,
    });

    const exampleOpacity = spring({
        frame: frame - animationTimings.example.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.example.durationInFrames,
    });


    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: 60,
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >

            {/* 主标题 */}
            <div
                style={{
                    transform: `scale(${titleScale})`,
                    textAlign: "center",
                    marginTop: 10,
                    // marginBottom: 90,
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



            {/* 概念解析 */}
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: 20,
                    padding: "25px 40px",
                    marginTop:150,
                    maxWidth: 1000,
                    position: "relative",
                    opacity: conceptContainerOpacity,
                    transform: `scale(${conceptContainerScale})`,
                }}
            >
                <div style={{ 
                    fontSize: 34, 
                    color: "white", 
                    marginBottom: 10, 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: 10,
                    opacity: conceptTitleOpacity,
                }}>
                    <strong>概念解析：</strong>
                </div>
                <div style={{ 
                    fontSize: 36, 
                    color: "white", 
                    lineHeight: 1.7,
                }}>
                    <TypewriterContent
                        delay={animationTimings.conceptContent.startTime}
                        durationInFrames={animationTimings.conceptContent.durationInFrames}
                        charFrames={2}
                    >
                        对方<span style={{ color: "#E74C3C" }}>歪曲你的观点</span>（树立稻草人），
                        然后攻击这个<span style={{ color: "#E74C3C" }}>歪曲后的观点</span>。看起来他赢了，其实他打败的只是幻觉。
                    </TypewriterContent>
                </div>
            </div>

            {/* 典型话术 */}
            <div
                style={{
                    opacity: exampleOpacity,
                    marginTop: 150,
                    fontSize: 36,
                    color: "#FED7D7",
                }}
            >
                ❌ 典型话术："你觉得明朝不好，那你是想赞美清朝咯？"
            </div>
        </AbsoluteFill>
    );
};
