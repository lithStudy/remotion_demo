import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from "remotion";
import {
    TypewriterText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene7 - 服用建议
 * 标题 + 3个策略模块（温度控制、最佳时间、疗程建议）
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 75, preName: null, audioId: "scene7_1" },
    { name: "strategy1Label", delayBefore: 0, delayAfter: 5, durationInFrames: 57, preName: "title", audioId: "scene7_2" },
    { name: "strategy1Content", delayBefore: 0, delayAfter: 10, durationInFrames: 189, preName: "strategy1Label", audioId: "scene7_3" },
    { name: "strategy2Label", delayBefore: 0, delayAfter: 5, durationInFrames: 58, preName: "strategy1Content", audioId: "scene7_4" },
    { name: "strategy2Content", delayBefore: 0, delayAfter: 10, durationInFrames: 197, preName: "strategy2Label", audioId: "scene7_5" },
    { name: "strategy3Label", delayBefore: 0, delayAfter: 5, durationInFrames: 59, preName: "strategy2Content", audioId: "scene7_6" },
    { name: "strategy3Content", delayBefore: 0, delayAfter: 30, durationInFrames: 239, preName: "strategy3Label", audioId: "scene7_7" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene7Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

// 策略数据
const strategies = [
    {
        label: "温度控制",
        emoji: "🌡️",
        content: "用37度左右的温水冲泡，冲好后尽快喝完，别放置太久。",
        labelKey: "strategy1Label",
        contentKey: "strategy1Content",
        color: "#3182CE"
    },
    {
        label: "最佳时间",
        emoji: "⏰",
        content: "饭后30分钟服用最佳，此时胃酸最低，益生菌存活率更高。",
        labelKey: "strategy2Label",
        contentKey: "strategy2Content",
        color: "#38A169"
    },
    {
        label: "疗程建议",
        emoji: "📅",
        content: "一般服用2-4周即可，不需要长期吃。如果症状改善，可以逐渐减量停止。",
        labelKey: "strategy3Label",
        contentKey: "strategy3Content",
        color: "#805AD5"
    },
];

/**
 * Scene7: 服用建议
 */
export const Scene7: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);

    const titleOpacity = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #F0FFF4 0%, #E6FFFA 100%)",
                padding: 50,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* 标题 */}
            <div
                style={{
                    opacity: titleOpacity,
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                <div style={{ fontSize: 60, marginBottom: 10 }}>📝</div>
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: "bold",
                        color: "#2D3748",
                    }}
                >
                    正确服用小贴士
                </div>
            </div>

            {/* 策略列表 */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 25,
                }}
            >
                {strategies.map((item, index) => {
                    const labelTiming = animationTimings[item.labelKey];
                    const contentTiming = animationTimings[item.contentKey];

                    const labelOpacity = spring({
                        frame: frame - labelTiming.startTime,
                        fps,
                        config: { damping: 80 },
                        durationInFrames: 20,
                    });

                    const labelScale = spring({
                        frame: frame - labelTiming.startTime,
                        fps,
                        config: { damping: 80 },
                        durationInFrames: 20,
                    });

                    const contentOpacity = spring({
                        frame: frame - contentTiming.startTime,
                        fps,
                        config: { damping: 100 },
                        durationInFrames: 20,
                    });

                    return (
                        <div
                            key={index}
                            style={{
                                opacity: labelOpacity,
                                transform: `scale(${labelScale})`,
                                backgroundColor: "white",
                                borderRadius: 20,
                                padding: 25,
                                boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
                                borderBottom: `5px solid ${item.color}`,
                            }}
                        >
                            {/* 策略标签 */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 15,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 40,
                                    }}
                                >
                                    {item.emoji}
                                </span>
                                <span
                                    style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        color: item.color,
                                    }}
                                >
                                    {item.label}
                                </span>
                            </div>
                            {/* 策略内容 */}
                            <div
                                style={{
                                    opacity: contentOpacity,
                                    fontSize: 28,
                                    color: "#4A5568",
                                    lineHeight: 1.6,
                                    paddingLeft: 52,
                                }}
                            >
                                <TypewriterText
                                    text={item.content}
                                    delay={contentTiming.startTime}
                                    durationInFrames={contentTiming.durationInFrames - 20}
                                    showCursor={true}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.title.startTime} durationInFrames={animationTimings.title.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/01_标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.strategy1Label.startTime} durationInFrames={animationTimings.strategy1Label.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/02_策略标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.strategy1Content.startTime} durationInFrames={animationTimings.strategy1Content.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/03_策略内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.strategy2Label.startTime} durationInFrames={animationTimings.strategy2Label.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/04_策略标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.strategy2Content.startTime} durationInFrames={animationTimings.strategy2Content.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/05_策略内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.strategy3Label.startTime} durationInFrames={animationTimings.strategy3Label.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/06_策略标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.strategy3Content.startTime} durationInFrames={animationTimings.strategy3Content.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene7/07_策略内容.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
