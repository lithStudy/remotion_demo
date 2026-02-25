import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, useCurrentFrame, interpolate } from "remotion";
import {
    TypewriterText,
    FadeInText,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 85, preName: null, audioId: "scene5_1" },
    { name: "analysis", delayBefore: 0, delayAfter: 15, durationInFrames: 155, preName: "title", audioId: "scene5_2" },
    { name: "strategy", delayBefore: 0, delayAfter: 10, durationInFrames: 100, preName: "analysis", audioId: "scene5_3" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene5Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

const PlatformComparison: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const leftOpacity = interpolate(frame, [delay, delay + 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const rightOpacity = interpolate(frame, [delay + 15, delay + 35], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <div style={{
            display: "flex",
            gap: 20,
            width: "100%",
            marginBottom: 25,
        }}>
            <div style={{
                opacity: leftOpacity,
                flex: 1,
                background: "#F0FFF4",
                borderRadius: 15,
                padding: 18,
                border: "2px solid #38A169",
                textAlign: "center",
            }}>
                <div style={{ fontSize: 50, marginBottom: 8 }}>🏛️</div>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#276749", marginBottom: 6 }}>正规媒体</div>
                <div style={{ fontSize: 18, color: "#4A5568", lineHeight: 1.5 }}>
                    ✅ 编辑审核<br />
                    ✅ 法律责任<br />
                    ✅ 实名制
                </div>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                fontSize: 36,
                fontWeight: "bold",
                color: "#A0AEC0",
            }}>
                VS
            </div>

            <div style={{
                opacity: rightOpacity,
                flex: 1,
                background: "#FFF5F5",
                borderRadius: 15,
                padding: 18,
                border: "2px solid #E53E3E",
                textAlign: "center",
            }}>
                <div style={{ fontSize: 50, marginBottom: 8 }}>📱</div>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#C53030", marginBottom: 6 }}>自媒体</div>
                <div style={{ fontSize: 18, color: "#4A5568", lineHeight: 1.5 }}>
                    ❌ 无审核<br />
                    ❌ 零门槛<br />
                    ❌ 可匿名
                </div>
            </div>
        </div>
    );
};

export const Scene5: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "#EBF8FF",
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
                    color: "#2C5282",
                    marginBottom: 30,
                    borderBottom: "4px solid #4299E1",
                    paddingBottom: 10,
                }}
            >
                案例三：<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#BEE3F8">平台差异</HighlightText>
            </FadeInText>

            <PlatformComparison delay={animationTimings.title.startTime + 10} />

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
                        borderLeft: "8px solid #3182CE",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#3182CE" }}>🔍 剖析</div>
                    <TypewriterText
                        text="正规媒体有法律责任；自媒体零门槛。"
                        delay={animationTimings.analysis.startTime + 15}
                        durationInFrames={animationTimings.analysis.durationInFrames - 40}
                    />
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
                    <TypewriterText
                        text="'这条信息来自哪里？'"
                        delay={animationTimings.strategy.startTime + 15}
                        durationInFrames={animationTimings.strategy.durationInFrames - 40}
                    />
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
