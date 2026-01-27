import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    FadeInText,
    TypewriterText,
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
    { name: "concept", delayBefore: 30, delayAfter: 0, durationInFrames: 20, preName: "subtitle" },  // 概念解析
    { name: "example", delayBefore: 30, delayAfter: 100, durationInFrames: 20, preName: "concept" }, // 典型话术
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateTitleSceneDuration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * P1: 标题场景 - 概念引入
 * 画面：骑士攻击稻草人，真正对手在旁边懵逼
 * 
 * 时间范围：由主场景配置决定
 */
export const TitleScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 计算所有动画的延迟时间和配置信息
    const animationTimings = calculateAnimationTimings(animationConfigs);

    const titleScale = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 80 },
        durationInFrames: animationTimings.title.durationInFrames,
    });

    const subtitleOpacity = spring({
        frame: frame - animationTimings.subtitle.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.subtitle.durationInFrames,
    });

    const conceptOpacity = spring({
        frame: frame - animationTimings.concept.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.concept.durationInFrames,
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
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* 主标题 */}
            <div
                style={{
                    transform: `scale(${titleScale})`,
                    textAlign: "center",
                    marginBottom: 20,
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
                    逻辑谬误05：稻草人谬误
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

            {/* 漫画场景描述 */}
            <FadeInText
                delay={animationTimings.subtitle.startTime}
                duration={animationTimings.subtitle.durationInFrames}
                style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: 20,
                    padding: "20px 40px",
                    marginBottom: 30,
                }}
            >
                <div style={{ fontSize: 40, color: "white", textAlign: "center" }}>
                    🗡️ 画面：骑士对着稻草人疯狂输出，真正的对手在旁边一脸懵逼
                </div>
                <div style={{ fontSize: 45, color: "#FFD700", fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
                    "你赢了，但这关我什么事？"
                </div>
            </FadeInText>

            {/* 副标题 */}
            <div
                style={{
                    opacity: subtitleOpacity,
                    fontSize: 50,
                    color: "#F1C40F",
                    fontWeight: "bold",
                    marginBottom: 30,
                }}
            >
                为什么他们总是在反驳我没说过的话？
            </div>

            {/* 概念解析 */}
            <div
                style={{
                    opacity: conceptOpacity,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: 20,
                    padding: "25px 40px",
                    maxWidth: 1000,
                }}
            >
                <div style={{ fontSize: 34, color: "white", marginBottom: 10 }}>
                    💡 <strong>概念解析：</strong>
                </div>
                <div style={{ fontSize: 36, color: "white", lineHeight: 1.7 }}>
                    对方<span style={{ color: "#E74C3C" }}>歪曲你的观点</span>（树立稻草人），
                    然后攻击这个歪曲后的观点。看起来他赢了，其实他打败的只是幻觉。
                </div>
            </div>

            {/* 典型话术 */}
            <div
                style={{
                    opacity: exampleOpacity,
                    marginTop: 25,
                    fontSize: 36,
                    color: "#FED7D7",
                }}
            >
                ❌ 典型话术："你觉得明朝不好，那你是想赞美清朝咯？"
            </div>
        </AbsoluteFill>
    );
};
