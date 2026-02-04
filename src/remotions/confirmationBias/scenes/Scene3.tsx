import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Img } from "remotion";
import {
    TypewriterText,
    TypewriterContent,
    FadeInText,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene3 - 总策略
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 90, preName: null, audioId: "scene3_1" },
    { name: "core", delayBefore: 0, delayAfter: 15, durationInFrames: 140, preName: "title", audioId: "scene3_2" },
    { name: "point1", delayBefore: 0, delayAfter: 10, durationInFrames: 180, preName: "core", audioId: "scene3_3" },
    { name: "point2", delayBefore: 0, delayAfter: 10, durationInFrames: 150, preName: "point1", audioId: "scene3_4" },
    { name: "quote", delayBefore: 0, delayAfter: 10, durationInFrames: 120, preName: "point2", audioId: "scene3_5" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene3Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene3: 总策略
 */
export const Scene3: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "#F0FFF4",
                padding: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* 标题 */}
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{
                    fontSize: 48, // Reduced from 56
                    fontWeight: "bold",
                    color: "#276749",
                    marginBottom: 10,
                    marginTop: 10,
                    borderBottom: "4px solid #38A169",
                    paddingBottom: 10,
                }}
            >
                总策略：<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#9AE6B4">主动找反例法</HighlightText>
            </FadeInText>

            {/* 插图 */}
            <div style={{ marginBottom: 15, display: 'flex', justifyContent: 'center', height: 320 }}>
                <Img
                    src={staticFile("images/confirmationBias/cb_scene_3.png")}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: 20,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    }}
                />
            </div>

            {/* 核心心法 */}
            <div style={{ width: "100%", marginBottom: 15 }}>
                <FadeInText
                    delay={animationTimings.core.startTime}
                    duration={20}
                    style={{
                        fontSize: 26, // Reduced from 32
                        color: "#22543D",
                        background: "#C6F6D5",
                        padding: "15px 20px",
                        borderRadius: 15,
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.core.startTime}
                        durationInFrames={animationTimings.core.durationInFrames - 30}
                    >
                        核心心法：强迫自己去寻找<HighlightText delay={animationTimings.core.startTime + 30} highlightColor="#FAF089">“反对自己”</HighlightText>的证据。
                    </TypewriterContent>
                </FadeInText>
            </div>

            {/* 策略点1 */}
            <div style={{ width: "100%", marginBottom: 10 }}>
                <FadeInText
                    delay={animationTimings.point1.startTime}
                    duration={20}
                    style={{
                        fontSize: 22, // Reduced from 28
                        color: "#2D3748",
                        background: "white",
                        padding: "10px 20px",
                        borderRadius: 15,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                >
                    <TypewriterText
                        text="1. 换位搜索：用对方的关键词去搜索，看看他们的论据是什么。"
                        delay={animationTimings.point1.startTime}
                        durationInFrames={animationTimings.point1.durationInFrames - 30}
                    />
                </FadeInText>
            </div>

            {/* 策略点2 */}
            <div style={{ width: "100%", marginBottom: 15 }}>
                <FadeInText
                    delay={animationTimings.point2.startTime}
                    duration={20}
                    style={{
                        fontSize: 22, // Reduced from 28
                        color: "#2D3748",
                        background: "white",
                        padding: "10px 20px",
                        borderRadius: 15,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                >
                    <TypewriterText
                        text="2. 红队思维：假设自己是错的，找5个理由证明。"
                        delay={animationTimings.point2.startTime}
                        durationInFrames={animationTimings.point2.durationInFrames - 30}
                    />
                </FadeInText>
            </div>

            {/* 名言 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.quote.startTime}
                    duration={20}
                    style={{
                        fontSize: 28, // Reduced from 34
                        color: "#744210",
                        background: "#FEFCBF",
                        padding: "15px 20px",
                        borderRadius: 15,
                        textAlign: "center",
                        fontStyle: "italic",
                        border: "2px dashed #D69E2E",
                    }}
                >
                    万能金句：“如果我错了，会有什么证据？”
                </FadeInText>
            </div>

            {/* 音频 */}
            {baseConfigs.map((config) => (
                <Sequence key={config.name} from={animationTimings[config.name].startTime} durationInFrames={animationTimings[config.name].durationInFrames}>
                    <Audio src={staticFile(audioMap[config.audioId!].file)} />
                </Sequence>
            ))}
        </AbsoluteFill>
    );
};
