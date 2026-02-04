import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Img } from "remotion";
import {
    TypewriterText,
    FadeInText,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene2 - 危害分析
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 90, preName: null, audioId: "scene2_1" },
    { name: "content1", delayBefore: 0, delayAfter: 10, durationInFrames: 200, preName: "title", audioId: "scene2_2" },
    { name: "content2", delayBefore: 0, delayAfter: 10, durationInFrames: 180, preName: "content1", audioId: "scene2_3" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene2Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene2: 危害分析
 */
export const Scene2: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "#FFF5F5",
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
                    fontSize: 56,
                    fontWeight: "bold",
                    color: "#C53030",
                    marginBottom: 20,
                    marginTop: 20,
                    borderBottom: "4px solid #F56565",
                    paddingBottom: 10,
                }}
            >
                被偏见勒索的隐形成本
            </FadeInText>

            {/* 插图 */}
            <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center', height: 320 }}>
                <Img
                    src={staticFile("images/confirmationBias/cb_scene_2.png")}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: 20,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    }}
                />
            </div>

            {/* 正文1 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.content1.startTime}
                    duration={20}
                    style={{
                        fontSize: 28,
                        color: "#2D3748",
                        lineHeight: 1.5,
                        background: "white",
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        borderLeft: "8px solid #DD6B20",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#DD6B20" }}>危害一：<HighlightText delay={animationTimings.content1.startTime + 15} highlightColor="#FBD38D">信息茧房</HighlightText></div>
                    <TypewriterText
                        text="你以为看遍了世界，其实只是在镜子里看自己。"
                        delay={animationTimings.content1.startTime + 15}
                        durationInFrames={animationTimings.content1.durationInFrames - 40}
                    />
                </FadeInText>
            </div>

            {/* 正文2 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.content2.startTime}
                    duration={20}
                    style={{
                        fontSize: 28,
                        color: "#2D3748",
                        lineHeight: 1.5,
                        background: "white",
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        borderLeft: "8px solid #E53E3E",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#E53E3E" }}>危害二：<HighlightText delay={animationTimings.content2.startTime + 15} highlightColor="#FED7D7">认知盲区</HighlightText></div>
                    <TypewriterText
                        text="致命的错误往往来自你“视而不见”的信息。"
                        delay={animationTimings.content2.startTime + 15}
                        durationInFrames={animationTimings.content2.durationInFrames - 40}
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
