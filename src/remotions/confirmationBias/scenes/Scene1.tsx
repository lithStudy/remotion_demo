import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile, Img } from "remotion";
import {
    TypewriterText,
    FadeInText,
    HighlightText,
    Stamp,
    TypewriterContent,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene1 - 开场：概念解析
 */
const baseConfigs: AnimationConfig[] = [
    { name: "content1", delayBefore: 10, delayAfter: 10, durationInFrames: 200, preName: null, audioId: "scene1_3" },
    { name: "content2", delayBefore: 0, delayAfter: 20, durationInFrames: 150, preName: "content1", audioId: "scene1_4" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene1Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene1: 开场：概念解析
 */
export const Scene1: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);



    return (
        <AbsoluteFill
            style={{
                background: "#F7F9FC",
                padding: 40, // Reduced padding
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center", // Changed to center content
            }}
        >

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 50,
                    width: "100%",
                    marginTop: 20,
                }}
            >
                <div style={{ position: "relative" }}>
                    {/* 主标题：确认偏误 */}
                    <div
                        style={{

                            fontSize: 80,
                            fontWeight: "bold",
                            color: "#2D3748",
                            zIndex: 1,
                            borderBottom: "4px solid #0E0000",
                        }}
                    >
                        概念解析
                    </div>

                </div>
            </div>

            {/* 副标题 */}
            {/* <div style={{ marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.subtitle.startTime}
                    duration={15}
                    style={{
                        fontSize: 52,
                        fontWeight: "bold",
                        color: "#E53E3E",
                        background: "#FFE4E6",
                        padding: "10px 30px",
                        borderRadius: 15,
                    }}
                >
                    我总是对的！
                </FadeInText>
            </div> */}


            {/* 正文1 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.content1.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        color: "#4A5568",
                        lineHeight: 1.5,
                        background: "white",
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.content1.startTime}
                        durationInFrames={animationTimings.content1.durationInFrames - 30}
                    >
                        大脑会
                        <HighlightText delay={animationTimings.content1.startTime} highlightColor="#FED7D7">
                            自动过滤
                        </HighlightText>
                        掉与你观点不符的信息，只让你看到、记住支持你的证据。
                    </TypewriterContent>
                </FadeInText>
            </div>

            {/* 正文2 */}
            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.content2.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        color: "#2C5282",
                        lineHeight: 1.5,
                        background: "#EBF8FF",
                        padding: 20,
                        borderRadius: 20,
                        borderLeft: "8px solid #4299E1",
                    }}
                >
                    <TypewriterText
                        text="典型表现：“我就知道会这样！”“你看，果然又是这样！”"
                        delay={animationTimings.content2.startTime}
                        durationInFrames={animationTimings.content2.durationInFrames - 30}
                    />
                </FadeInText>
            </div>

            {/* 音频 */}
            {baseConfigs.map((config) => {
                if (!config.audioId || !audioMap[config.audioId]) return null;
                return (
                    <Sequence
                        key={config.name}
                        from={animationTimings[config.name].startTime}
                        durationInFrames={animationTimings[config.name].durationInFrames}
                    >
                        <Audio src={staticFile(audioMap[config.audioId].file)} />
                    </Sequence>
                );
            })}
        </AbsoluteFill>
    );
};
