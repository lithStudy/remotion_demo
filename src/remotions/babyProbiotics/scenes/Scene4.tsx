import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from "remotion";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene4 - 什么情况需要补充
 * 标题 + 副标题 + 4张卡片
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 5, durationInFrames: 75, preName: null, audioId: "scene4_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 10, durationInFrames: 75, preName: "title", audioId: "scene4_2" },
    { name: "card1", delayBefore: 0, delayAfter: 5, durationInFrames: 202, preName: "subtitle", audioId: "scene4_3" },
    { name: "card2", delayBefore: 0, delayAfter: 5, durationInFrames: 237, preName: "card1", audioId: "scene4_4" },
    { name: "card3", delayBefore: 0, delayAfter: 5, durationInFrames: 197, preName: "card2", audioId: "scene4_5" },
    { name: "card4", delayBefore: 0, delayAfter: 30, durationInFrames: 213, preName: "card3", audioId: "scene4_6" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene4Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

// 卡片数据
const cards = [
    { emoji: "🚽", title: "腹泻期间", content: "拉肚子会冲走好菌，补充益生菌可以加快恢复。", color: "#E53E3E" },
    { emoji: "💊", title: "抗生素之后", content: "抗生素「杀敌一千自损八百」，吃完要补充益生菌重建菌群。", color: "#DD6B20" },
    { emoji: "💨", title: "消化不良", content: "经常胀气、便秘的宝宝，可以尝试益生菌调节。", color: "#38A169" },
    { emoji: "🤧", title: "过敏体质", content: "研究表明，某些菌株可能对湿疹等过敏症状有帮助。", color: "#3182CE" },
];

/**
 * Scene4: 什么情况需要补充
 */
export const Scene4: React.FC = () => {
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

    const cardTimings = ["card1", "card2", "card3", "card4"].map(name => animationTimings[name]);

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #FFF5F5 0%, #FED7E2 100%)",
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
                <div style={{ fontSize: 60, marginBottom: 5 }}>💡</div>
                <div
                    style={{
                        fontSize: 44,
                        fontWeight: "bold",
                        color: "#2D3748",
                    }}
                >
                    什么情况需要补充？
                </div>
            </div>

            {/* 副标题 */}
            <div
                style={{
                    opacity: subtitleOpacity,
                    textAlign: "center",
                    marginBottom: 25,
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        color: "#38B2AC",
                        fontWeight: 600,
                    }}
                >
                    对症下药才有效
                </div>
            </div>

            {/* 卡片网格 */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 20,
                    flex: 1,
                }}
            >
                {cards.map((card, index) => {
                    const timing = cardTimings[index];
                    const cardOpacity = spring({
                        frame: frame - timing.startTime,
                        fps,
                        config: { damping: 80 },
                        durationInFrames: 20,
                    });
                    const cardScale = spring({
                        frame: frame - timing.startTime,
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
                                boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                                borderTop: `5px solid ${card.color}`,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div style={{ fontSize: 50, marginBottom: 10 }}>{card.emoji}</div>
                            <div
                                style={{
                                    fontSize: 28,
                                    fontWeight: "bold",
                                    color: card.color,
                                    marginBottom: 10,
                                }}
                            >
                                {card.title}
                            </div>
                            <div
                                style={{
                                    fontSize: 24,
                                    color: "#4A5568",
                                    lineHeight: 1.5,
                                    flex: 1,
                                }}
                            >
                                {card.content}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.title.startTime} durationInFrames={animationTimings.title.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene4/01_标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.subtitle.startTime} durationInFrames={animationTimings.subtitle.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene4/02_副标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card1.startTime} durationInFrames={animationTimings.card1.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene4/03_卡片标题_内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card2.startTime} durationInFrames={animationTimings.card2.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene4/04_卡片标题_内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card3.startTime} durationInFrames={animationTimings.card3.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene4/05_卡片标题_内容.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.card4.startTime} durationInFrames={animationTimings.card4.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene4/06_卡片标题_内容.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
