import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Img } from "remotion";
import {
    TypewriterContent,
    FadeInText,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene7 - 总结
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 60, preName: null, audioId: "scene7_1" },
    { name: "point1", delayBefore: 0, delayAfter: 10, durationInFrames: 140, preName: "title", audioId: "scene7_2" },
    { name: "point2", delayBefore: 0, delayAfter: 10, durationInFrames: 95, preName: "point1", audioId: "scene7_3" },
    { name: "point3", delayBefore: 0, delayAfter: 10, durationInFrames: 120, preName: "point2", audioId: "scene7_4" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene7Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene7: 总结
 */
export const Scene7: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "#2D3748",
                padding: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
            }}
        >
            {/* 标题 */}
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "#63B3ED",
                    marginBottom: 50,
                    marginTop: 20,
                    borderBottom: "4px solid #63B3ED",
                    paddingBottom: 10,
                }}
            >
                本期总结
            </FadeInText>

            {/* 插图：与标题同步淡入 */}
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{ marginBottom: 30, display: 'flex', justifyContent: 'center', height: 320 }}
            >
                <Img
                    src={staticFile("images/confirmationBias/cb_scene_7.png")}
                    style={{
                        maxHeight: "100%",
                        maxWidth: "100%",
                        objectFit: "contain",
                        borderRadius: 20,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                    }}
                />
            </FadeInText>

            {/* 总结点1 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.point1.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        textAlign: "center",
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.point1.startTime}
                        durationInFrames={animationTimings.point1.durationInFrames - 30}
                    >
                        你的大脑不是客观的摄像头，它是<HighlightText delay={animationTimings.point1.startTime + 20} highlightColor="#4A5568">带滤镜的</HighlightText>。
                    </TypewriterContent>
                </FadeInText>
            </div>

            {/* 总结点2 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.point2.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#F6E05E",
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.point2.startTime}
                        durationInFrames={animationTimings.point2.durationInFrames - 30}
                    >
                        主动寻找<HighlightText delay={animationTimings.point2.startTime + 15} highlightColor="#4A5568">“反对自己”</HighlightText>的证据。
                    </TypewriterContent>
                </FadeInText>
            </div>

            {/* 总结点3 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.point3.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        textAlign: "center",
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.point3.startTime}
                        durationInFrames={animationTimings.point3.durationInFrames - 30}
                    >
                        承认自己<HighlightText delay={animationTimings.point3.startTime + 15} highlightColor="#4A5568">可能是错的</HighlightText>，是智慧的开始。
                    </TypewriterContent>
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
