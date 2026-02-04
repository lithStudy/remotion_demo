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
 * 动画配置：Scene5 - 案例二：投资
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 110, preName: null, audioId: "scene5_1" },
    { name: "analysis", delayBefore: 0, delayAfter: 15, durationInFrames: 190, preName: "title", audioId: "scene5_2" },
    { name: "strategy", delayBefore: 0, delayAfter: 10, durationInFrames: 270, preName: "analysis", audioId: "scene5_3" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene5Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene5: 案例二：投资
 */
export const Scene5: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "#FFFFF0",
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
                    fontSize: 48,
                    fontWeight: "bold",
                    color: "#D69E2E",
                    marginBottom: 20,
                    marginTop: 20,
                    borderBottom: "4px solid #ECC94B",
                    paddingBottom: 10,
                }}
            >
                案例二：<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#FEFCBF">选择性引用</HighlightText>
            </FadeInText>

            {/* 插图 */}
            <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', height: 320 }}>
                <Img
                    src={staticFile("images/confirmationBias/cb_scene_5.png")}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: 20,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    }}
                />
            </div>

            {/* 偏见剖析 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.analysis.startTime}
                    duration={20}
                    style={{
                        fontSize: 24,
                        color: "#4A5568",
                        background: "white",
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        borderLeft: "8px solid #D69E2E",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#D69E2E" }}>偏见剖析</div>
                    <TypewriterContent
                        delay={animationTimings.analysis.startTime + 15}
                        durationInFrames={animationTimings.analysis.durationInFrames - 40}
                    >
                        <HighlightText delay={animationTimings.analysis.startTime + 20} highlightColor="#FEFCBF">只搜集</HighlightText>支持自己判断的“利好消息”，<HighlightText delay={animationTimings.analysis.startTime + 60} highlightColor="#FEFCBF">忽略</HighlightText>风险警告。
                    </TypewriterContent>
                </FadeInText>
            </div>

            {/* 纠偏实例 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.strategy.startTime}
                    duration={20}
                    style={{
                        fontSize: 24,
                        color: "#2C5282",
                        background: "#EBF8FF",
                        padding: 20,
                        borderRadius: 20,
                        borderLeft: "8px solid #4299E1",
                        fontStyle: "italic",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#4299E1", fontStyle: "normal" }}>纠偏实例</div>
                    <TypewriterText
                        text="“我需要同时看看看跌的分析是什么理由。如果我决定买入，我能反驳这些看跌理由吗？”"
                        delay={animationTimings.strategy.startTime + 15}
                        durationInFrames={animationTimings.strategy.durationInFrames - 40}
                    />
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
