import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, useCurrentFrame, interpolate } from "remotion";
import {
    FadeInText,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 90, preName: null, audioId: "scene3_1" },
    { name: "analysis", delayBefore: 0, delayAfter: 15, durationInFrames: 150, preName: "title", audioId: "scene3_2" },
    { name: "strategy", delayBefore: 0, delayAfter: 10, durationInFrames: 140, preName: "analysis", audioId: "scene3_3" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene3Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

const FakeArticle: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const shake = frame > delay + 20
        ? interpolate(
            (frame - delay) % 16,
            [0, 4, 8, 12, 16],
            [0, -2, 0, 2, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
        )
        : 0;

    return (
        <div style={{
            opacity,
            transform: `rotate(${shake}deg)`,
            background: "white",
            borderRadius: 15,
            padding: "18px 22px",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            border: "2px solid #E53E3E",
            marginBottom: 25,
            width: "100%",
        }}>
            <div style={{
                fontSize: 14,
                color: "#A0AEC0",
                marginBottom: 6,
            }}>
                来源：某某养生堂
            </div>
            <div style={{
                fontSize: 36,
                fontWeight: "bold",
                color: "#E53E3E",
                lineHeight: 1.4,
            }}>
                震惊！喝水竟然能治癌症！
            </div>
            <div style={{
                fontSize: 16,
                color: "#A0AEC0",
                marginTop: 8,
                display: "flex",
                gap: 15,
            }}>
                <span>👁 10万+</span>
                <span>❤️ 999+</span>
                <span>💬 500+</span>
            </div>
        </div>
    );
};

export const Scene3: React.FC = () => {
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
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "#C53030",
                    marginBottom: 30,
                    borderBottom: "4px solid #F56565",
                    paddingBottom: 10,
                }}
            >
                案例一：<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#FED7D7">伪科学传播</HighlightText>
            </FadeInText>

            <FakeArticle delay={animationTimings.title.startTime + 10} />

            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.analysis.startTime}
                    duration={20}
                    style={{
                        fontSize: 34,
                        color: "#4A5568",
                        background: "white",
                        padding: 20,
                        borderRadius: 20,
                        boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                        borderLeft: "8px solid #E53E3E",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#E53E3E" }}>🔍 剖析</div>
                    <span>'某某养生堂'是什么？作者是医生吗？</span>
                </FadeInText>
            </div>

            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.strategy.startTime}
                    duration={20}
                    style={{
                        fontSize: 34,
                        color: "#276749",
                        background: "#F0FFF4",
                        padding: 20,
                        borderRadius: 20,
                        borderLeft: "8px solid #38A169",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#38A169" }}>🛡️ 识别</div>
                    <span>'我先去查查这个专家是否真的存在。'</span>
                </FadeInText>
            </div>

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
