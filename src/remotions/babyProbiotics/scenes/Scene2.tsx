import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile, interpolate } from "remotion";
import {
    TypewriterContent,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene2 - 什么是益生菌
 * 标题 + 副标题 + 小标题 + 正文
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 5, durationInFrames: 63, preName: null, audioId: "scene2_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 5, durationInFrames: 74, preName: "title", audioId: "scene2_2" },
    { name: "heading", delayBefore: 0, delayAfter: 5, durationInFrames: 59, preName: "subtitle", audioId: "scene2_3" },
    { name: "content", delayBefore: 0, delayAfter: 30, durationInFrames: 389, preName: "heading", audioId: "scene2_4" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene2Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene2: 什么是益生菌
 */
export const Scene2: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 标题动画
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

    const headingOpacity = spring({
        frame: frame - animationTimings.heading.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    const contentOpacity = spring({
        frame: frame - animationTimings.content.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #E6FFFA 0%, #F0FFF4 100%)",
                padding: 60,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* 标题区域 */}
            <div
                style={{
                    opacity: titleOpacity,
                    textAlign: "center",
                    marginBottom: 20,
                }}
            >
                <div style={{ fontSize: 80, marginBottom: 10 }}>🦠</div>
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: "bold",
                        color: "#2D3748",
                    }}
                >
                    什么是益生菌？
                </div>
            </div>

            {/* 副标题 */}
            <div
                style={{
                    opacity: subtitleOpacity,
                    textAlign: "center",
                    marginBottom: 40,
                }}
            >
                <div
                    style={{
                        fontSize: 36,
                        color: "#38B2AC",
                        fontWeight: 500,
                        display: "inline-block",
                        backgroundColor: "rgba(56, 178, 172, 0.1)",
                        padding: "10px 30px",
                        borderRadius: 25,
                    }}
                >
                    肠道里的「好帮手」
                </div>
            </div>

            {/* 概念卡片 */}
            <div
                style={{
                    opacity: headingOpacity,
                    backgroundColor: "white",
                    borderRadius: 25,
                    padding: 40,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* 小标题 */}
                <div
                    style={{
                        fontSize: 32,
                        fontWeight: "bold",
                        color: "#38B2AC",
                        marginBottom: 25,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <span style={{
                        backgroundColor: "#38B2AC",
                        color: "white",
                        padding: "5px 15px",
                        borderRadius: 10,
                        fontSize: 24,
                    }}>
                        概念解析
                    </span>
                </div>

                {/* 正文内容 */}
                <div
                    style={{
                        opacity: contentOpacity,
                        fontSize: 34,
                        color: "#2D3748",
                        lineHeight: 1.8,
                        flex: 1,
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.content.startTime}
                        durationInFrames={animationTimings.content.durationInFrames - 30}
                        showCursor={true}
                    >
                        <HighlightText delay={animationTimings.content.startTime + 5} highlightColor="#B2F5EA">益生菌</HighlightText>
                        就是对人体
                        <HighlightText delay={animationTimings.content.startTime + 30} highlightColor="#FED7E2">有益的活性微生物</HighlightText>
                        ，住在肠道里，
                        <HighlightText delay={animationTimings.content.startTime + 80} highlightColor="#C6F6D5">帮助消化</HighlightText>
                        、
                        <HighlightText delay={animationTimings.content.startTime + 100} highlightColor="#FEEBC8">增强免疫力</HighlightText>
                        。简单说，就是宝宝肚子里的「
                        <HighlightText delay={animationTimings.content.startTime + 150} highlightColor="#E9D8FD">小卫士</HighlightText>
                        」，专门
                        <HighlightText delay={animationTimings.content.startTime + 180} highlightColor="#FED7D7">打击坏细菌</HighlightText>
                        。
                    </TypewriterContent>
                </div>

                {/* 图解区域 */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 40,
                        marginTop: 30,
                        opacity: interpolate(
                            frame,
                            [animationTimings.content.startTime + 60, animationTimings.content.startTime + 90],
                            [0, 1],
                            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                        ),
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 60 }}>🛡️</div>
                        <div style={{ fontSize: 22, color: "#718096", marginTop: 5 }}>增强免疫</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 60 }}>💪</div>
                        <div style={{ fontSize: 22, color: "#718096", marginTop: 5 }}>帮助消化</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 60 }}>⚔️</div>
                        <div style={{ fontSize: 22, color: "#718096", marginTop: 5 }}>打击坏菌</div>
                    </div>
                </div>
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.title.startTime} durationInFrames={animationTimings.title.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene2/01_标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.subtitle.startTime} durationInFrames={animationTimings.subtitle.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene2/02_副标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.heading.startTime} durationInFrames={animationTimings.heading.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene2/03_小标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.content.startTime} durationInFrames={animationTimings.content.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene2/04_正文.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
