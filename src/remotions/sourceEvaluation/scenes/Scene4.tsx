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
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 85, preName: null, audioId: "scene4_1" },
    { name: "analysis", delayBefore: 0, delayAfter: 15, durationInFrames: 115, preName: "title", audioId: "scene4_2" },
    { name: "strategy", delayBefore: 0, delayAfter: 10, durationInFrames: 135, preName: "analysis", audioId: "scene4_3" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene4Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

const StockRecommendation: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <div style={{
            opacity,
            background: "linear-gradient(135deg, #1A365D, #2C5282)",
            borderRadius: 15,
            padding: "18px 22px",
            marginBottom: 25,
            width: "100%",
            color: "white",
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
            }}>
                <span style={{ fontSize: 16, color: "#90CDF4" }}>财经自媒体 · 今日推荐</span>
                <span style={{ fontSize: 14, color: "#FC8181" }}>⚠️ 利益相关</span>
            </div>
            <div style={{
                fontSize: 32,
                fontWeight: "bold",
                marginBottom: 8,
            }}>
                📈 强烈推荐！某某股票即将暴涨！
            </div>
            <div style={{
                display: "flex",
                gap: 20,
                fontSize: 16,
                color: "#90CDF4",
            }}>
                <span>🏷️ 作者已持仓</span>
                <span>💰 付费课程推广</span>
            </div>
        </div>
    );
};

export const Scene4: React.FC = () => {
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
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "#D69E2E",
                    marginBottom: 30,
                    borderBottom: "4px solid #ECC94B",
                    paddingBottom: 10,
                }}
            >
                案例二：<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#FEFCBF">利益冲突</HighlightText>
            </FadeInText>

            <StockRecommendation delay={animationTimings.title.startTime + 10} />

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
                        borderLeft: "8px solid #D69E2E",
                    }}
                >
                    <div style={{ fontWeight: "bold", marginBottom: 10, color: "#D69E2E" }}>🔍 剖析</div>
                    <span>推荐者自己持有该股票。</span>
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
                    <span>'他的收益和我的行为有关系吗？'</span>
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
