import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from "remotion";
import {
    TypewriterText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene5 - 如何选择益生菌
 * 标题 + 副标题 + 4个指标模块（菌株、活菌数、配料表）
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 5, durationInFrames: 75, preName: null, audioId: "scene5_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 10, durationInFrames: 76, preName: "title", audioId: "scene5_2" },
    { name: "label1", delayBefore: 0, delayAfter: 5, durationInFrames: 47, preName: "subtitle", audioId: "scene5_3" },
    { name: "content1", delayBefore: 0, delayAfter: 10, durationInFrames: 321, preName: "label1", audioId: "scene5_4" },
    { name: "label2", delayBefore: 0, delayAfter: 5, durationInFrames: 55, preName: "content1", audioId: "scene5_5" },
    { name: "content2", delayBefore: 0, delayAfter: 10, durationInFrames: 266, preName: "label2", audioId: "scene5_6" },
    { name: "label3", delayBefore: 0, delayAfter: 5, durationInFrames: 53, preName: "content2", audioId: "scene5_7" },
    { name: "content3", delayBefore: 0, delayAfter: 30, durationInFrames: 260, preName: "label3", audioId: "scene5_8" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene5Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

// 指标数据
const indicators = [
    {
        label: "菌株",
        emoji: "🧬",
        content: "认准菌株号，如鼠李糖乳杆菌LGG、罗伊氏乳杆菌DSM17938，这些是有临床验证的明星菌株。",
        labelKey: "label1",
        contentKey: "content1",
        color: "#805AD5"
    },
    {
        label: "活菌数",
        emoji: "🔢",
        content: "保质期内活菌数至少10亿CFU以上。注意是「保质期末」的数量，不是生产时的数量。",
        labelKey: "label2",
        contentKey: "content2",
        color: "#38A169"
    },
    {
        label: "配料表",
        emoji: "📋",
        content: "越简单越好。避免添加糖、香精、色素。麦芽糊精作为载体是可以接受的。",
        labelKey: "label3",
        contentKey: "content3",
        color: "#DD6B20"
    },
];

/**
 * Scene5: 如何选择益生菌
 */
export const Scene5: React.FC = () => {
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
                background: "linear-gradient(180deg, #EBF8FF 0%, #E6FFFA 100%)",
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
                <div style={{ fontSize: 60, marginBottom: 5 }}>🛒</div>
                <div
                    style={{
                        fontSize: 44,
                        fontWeight: "bold",
                        color: "#2D3748",
                    }}
                >
                    如何选择益生菌？
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
                        fontSize: 30,
                        color: "#3182CE",
                        fontWeight: 600,
                        backgroundColor: "rgba(49, 130, 206, 0.1)",
                        padding: "8px 25px",
                        borderRadius: 20,
                        display: "inline-block",
                    }}
                >
                    看这4个关键指标
                </div>
            </div>

            {/* 指标列表 */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                }}
            >
                {indicators.map((item, index) => {
                    const labelTiming = animationTimings[item.labelKey];
                    const contentTiming = animationTimings[item.contentKey];

                    const labelOpacity = spring({
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
                                backgroundColor: "white",
                                borderRadius: 20,
                                padding: 25,
                                boxShadow: "0 6px 25px rgba(0,0,0,0.06)",
                                borderLeft: `6px solid ${item.color}`,
                            }}
                        >
                            {/* 标签头部 */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 12,
                                }}
                            >
                                <span style={{ fontSize: 36 }}>{item.emoji}</span>
                                <span
                                    style={{
                                        fontSize: 28,
                                        fontWeight: "bold",
                                        color: item.color,
                                    }}
                                >
                                    {item.label}
                                </span>
                            </div>
                            {/* 内容 */}
                            <div
                                style={{
                                    opacity: contentOpacity,
                                    fontSize: 26,
                                    color: "#4A5568",
                                    lineHeight: 1.6,
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
                <Audio src={staticFile("audio/babyProbiotics/scene5/01_标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.subtitle.startTime} durationInFrames={animationTimings.subtitle.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/02_副标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.label1.startTime} durationInFrames={animationTimings.label1.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/03_小标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.content1.startTime} durationInFrames={animationTimings.content1.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/04_正文.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.label2.startTime} durationInFrames={animationTimings.label2.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/05_小标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.content2.startTime} durationInFrames={animationTimings.content2.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/06_正文.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.label3.startTime} durationInFrames={animationTimings.label3.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/07_小标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.content3.startTime} durationInFrames={animationTimings.content3.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene5/08_正文.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
