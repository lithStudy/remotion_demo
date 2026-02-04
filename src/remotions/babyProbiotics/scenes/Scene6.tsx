import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from "remotion";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene6 - 常见误区（3个坑）
 * 标题 + 副标题 + 3张卡片
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 5, durationInFrames: 80, preName: null, audioId: "scene6_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 10, durationInFrames: 60, preName: "title", audioId: "scene6_2" },
    { name: "card1", delayBefore: 0, delayAfter: 5, durationInFrames: 219, preName: "subtitle", audioId: "scene6_3" },
    { name: "card2", delayBefore: 0, delayAfter: 5, durationInFrames: 228, preName: "card1", audioId: "scene6_4" },
    { name: "card3", delayBefore: 0, delayAfter: 30, durationInFrames: 210, preName: "card2", audioId: "scene6_5" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene6Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

// 误区数据
const mistakes = [
    {
        number: 1,
        title: "热水冲泡",
        content: "超过40度会杀死益生菌，请用温水或凉白开冲泡。",
        emoji: "🔥",
        cardKey: "card1"
    },
    {
        number: 2,
        title: "和抗生素同时吃",
        content: "抗生素会杀死益生菌，要间隔至少2小时服用。",
        emoji: "💊",
        cardKey: "card2"
    },
    {
        number: 3,
        title: "买贵的就是好的",
        content: "价格和效果不成正比，关键看菌株和活菌数。",
        emoji: "💰",
        cardKey: "card3"
    },
];

/**
 * Scene6: 常见误区
 */
export const Scene6: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);

    const titleOpacity = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    const subtitleOpacity = spring({
        frame: frame - animationTimings.subtitle.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #FFF5F5 0%, #FED7D7 100%)",
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
                    marginBottom: 10,
                }}
            >
                <div style={{ fontSize: 60, marginBottom: 5 }}>⚠️</div>
                <div
                    style={{
                        fontSize: 44,
                        fontWeight: "bold",
                        color: "#C53030",
                    }}
                >
                    家长常踩的3个坑
                </div>
            </div>

            {/* 副标题 */}
            <div
                style={{
                    opacity: subtitleOpacity,
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                <div
                    style={{
                        fontSize: 30,
                        color: "#E53E3E",
                        fontWeight: 600,
                    }}
                >
                    你中了几个？
                </div>
            </div>

            {/* 误区卡片列表 */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                }}
            >
                {mistakes.map((item, index) => {
                    const cardTiming = animationTimings[item.cardKey];

                    const cardOpacity = spring({
                        frame: frame - cardTiming.startTime,
                        fps,
                        config: { damping: 80 },
                        durationInFrames: 20,
                    });

                    const cardScale = spring({
                        frame: frame - cardTiming.startTime,
                        fps,
                        config: { damping: 80 },
                        durationInFrames: 20,
                    });

                    return (
                        <div
                            key={index}
                            style={{
                                opacity: cardOpacity,
                                transform: `scale(${cardScale})`,
                                backgroundColor: "white",
                                borderRadius: 20,
                                padding: 25,
                                boxShadow: "0 8px 30px rgba(197, 48, 48, 0.15)",
                                border: "3px solid #FC8181",
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 20,
                            }}
                        >
                            {/* 坑编号 */}
                            <div
                                style={{
                                    backgroundColor: "#E53E3E",
                                    color: "white",
                                    width: 50,
                                    height: 50,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: 28,
                                    fontWeight: "bold",
                                    flexShrink: 0,
                                }}
                            >
                                {item.number}
                            </div>

                            {/* 内容区 */}
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        marginBottom: 10,
                                    }}
                                >
                                    <span style={{ fontSize: 32 }}>{item.emoji}</span>
                                    <span
                                        style={{
                                            fontSize: 30,
                                            fontWeight: "bold",
                                            color: "#C53030",
                                        }}
                                    >
                                        {item.title}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        fontSize: 26,
                                        color: "#4A5568",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.title.startTime} durationInFrames={animationTimings.title.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene6/01_标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.subtitle.startTime} durationInFrames={animationTimings.subtitle.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene6/02_副标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card1.startTime} durationInFrames={animationTimings.card1.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene6/03_卡片标题_内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card2.startTime} durationInFrames={animationTimings.card2.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene6/04_卡片标题_内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card3.startTime} durationInFrames={animationTimings.card3.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene6/05_卡片标题_内容.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
