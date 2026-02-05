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
 * 动画配置：Scene6 - 案例三：养生
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 90, preName: null, audioId: "scene6_1" },
    { name: "analysis", delayBefore: 0, delayAfter: 15, durationInFrames: 220, preName: "title", audioId: "scene6_2" },
    { name: "strategy", delayBefore: 0, delayAfter: 10, durationInFrames: 240, preName: "analysis", audioId: "scene6_3" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene6Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene6: 案例三：养生
 */
export const Scene6: React.FC = () => {
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
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "#38A169",
                    marginBottom: 50,
                    marginTop: 20,
                    borderBottom: "4px solid #48BB78",
                    paddingBottom: 10,
                }}
            >
                案例三：养生谣言传播
            </FadeInText>

            {/* 插图：与标题同步淡入 */}
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{ marginBottom: 30, display: 'flex', justifyContent: 'center', height: 320 }}
            >
                <Img
                    src={staticFile("images/confirmationBias/cb_scene_6.png")}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: 20,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    }}
                />
            </FadeInText>

            {/* 偏见剖析 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.analysis.startTime}
                    duration={20}
                    style={{
                        fontSize: 32,
                        color: "#4A5568",
                        background: "white",
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        borderLeft: "8px solid #38A169",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#38A169" }}>偏见剖析</div>
                    <TypewriterContent
                        delay={animationTimings.analysis.startTime + 15}
                        durationInFrames={animationTimings.analysis.durationInFrames - 40}
                    >
                        老人家已经相信“热水养生”，所以<HighlightText delay={animationTimings.analysis.startTime + 30} highlightColor="#C6F6D5">只会注意到</HighlightText>支持这个观点的文章。
                    </TypewriterContent>
                </FadeInText>
            </div>

            {/* 纠偏实例 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.strategy.startTime}
                    duration={20}
                    style={{
                        fontSize: 32,
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
                        text="“妈妈，我们一起来看看正规医学网站怎么说的，对比一下？我也希望你健康。”"
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
