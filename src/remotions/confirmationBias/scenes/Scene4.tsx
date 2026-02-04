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
 * 动画配置：Scene4 - 案例一：饭圈
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 90, preName: null, audioId: "scene4_1" },
    { name: "analysis", delayBefore: 0, delayAfter: 15, durationInFrames: 300, preName: "title", audioId: "scene4_2" },
    { name: "strategy", delayBefore: 0, delayAfter: 10, durationInFrames: 270, preName: "analysis", audioId: "scene4_3" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene4Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene4: 案例一：饭圈
 */
export const Scene4: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "#FAF5FF",
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
                    color: "#6B46C1",
                    marginBottom: 20,
                    marginTop: 20,
                    borderBottom: "4px solid #9F7AEA",
                    paddingBottom: 10,
                }}
            >
                案例一：饭圈<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#E9D8FD">信息茧房</HighlightText>
            </FadeInText>

            {/* 插图 */}
            <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', height: 320 }}>
                <Img
                    src={staticFile("images/confirmationBias/cb_scene_4.png")}
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
                        borderLeft: "8px solid #805AD5",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#805AD5" }}>偏见剖析</div>
                    <TypewriterContent
                        delay={animationTimings.analysis.startTime + 15}
                        durationInFrames={animationTimings.analysis.durationInFrames - 40}
                    >
                        粉丝甲<HighlightText delay={animationTimings.analysis.startTime + 30} highlightColor="#E9D8FD">只看</HighlightText>自家超话的夸赞，粉丝乙<HighlightText delay={animationTimings.analysis.startTime + 60} highlightColor="#E9D8FD">只看</HighlightText>黑料合集。双方都只接收<HighlightText delay={animationTimings.analysis.startTime + 90} highlightColor="#E9D8FD">符合自己立场</HighlightText>的信息。
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
                        text="“我承认他在某方面确实有不足，但这不影响我喜欢他的其他特质。我不需要他完美。”"
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
