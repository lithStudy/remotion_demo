import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, useCurrentFrame, interpolate } from "remotion";
import {
    FadeInText,
    HighlightText,
    SpringText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 10, delayAfter: 10, durationInFrames: 110, preName: null, audioId: "scene1_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 10, durationInFrames: 100, preName: "title", audioId: "scene1_2" },
    { name: "traps", delayBefore: 0, delayAfter: 20, durationInFrames: 190, preName: "subtitle", audioId: "scene1_3" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene1Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

const MaskedPerson: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const bounce = interpolate(
        (frame - delay) % 20,
        [0, 10, 20],
        [0, -8, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <div
            style={{
                opacity: progress,
                transform: `translateY(${bounce}px)`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div style={{ fontSize: 120, lineHeight: 1 }}>🎭</div>
            <div style={{
                fontSize: 18,
                color: "#718096",
                marginTop: 8,
            }}>
                谁在说话？
            </div>
        </div>
    );
};

const ListenerGroup: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const emojis = ["👤", "👤", "👤", "👤", "👤"];
    return (
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {emojis.map((emoji, i) => {
                const itemDelay = delay + i * 5;
                const op = interpolate(frame, [itemDelay, itemDelay + 15], [0, 1], {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                });
                return (
                    <span key={i} style={{ fontSize: 48, opacity: op }}>
                        {emoji}
                    </span>
                );
            })}
        </div>
    );
};

export const Scene1: React.FC = () => {
    const animationTimings = calculateAnimationTimings(animationConfigs);

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #1A202C 0%, #2D3748 100%)",
                padding: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <MaskedPerson delay={animationTimings.title.startTime} />

            <div style={{ marginTop: 30, marginBottom: 10 }}>
                <FadeInText
                    delay={animationTimings.title.startTime}
                    duration={20}
                    style={{
                        fontSize: 56,
                        fontWeight: "bold",
                        color: "#63B3ED",
                        textAlign: "center",
                        borderBottom: "4px solid #4299E1",
                        paddingBottom: 10,
                    }}
                >
                    批判性思维01：信息源评估
                </FadeInText>
            </div>

            <div style={{ marginBottom: 30 }}>
                <FadeInText
                    delay={animationTimings.subtitle.startTime}
                    duration={15}
                    style={{
                        fontSize: 40,
                        fontWeight: "bold",
                        color: "#F6E05E",
                        textAlign: "center",
                    }}
                >
                    谁在说话比说了什么更重要
                </FadeInText>
            </div>

            <ListenerGroup delay={animationTimings.subtitle.startTime + 10} />

            <div style={{ marginTop: 40, width: "100%" }}>
                <SpringText
                    delay={animationTimings.traps.startTime}
                    style={{
                        fontSize: 30,
                        color: "#FC8181",
                        background: "rgba(254, 215, 215, 0.15)",
                        padding: "20px 25px",
                        borderRadius: 15,
                        border: "2px solid rgba(252, 129, 129, 0.3)",
                        lineHeight: 1.8,
                        textAlign: "center",
                    }}
                >
                    ❌ 典型陷阱：
                    <HighlightText delay={animationTimings.traps.startTime + 10} highlightColor="rgba(229, 62, 62, 0.3)">"据网友爆料..."</HighlightText>
                    {"  "}
                    <HighlightText delay={animationTimings.traps.startTime + 40} highlightColor="rgba(229, 62, 62, 0.3)">"有人说..."</HighlightText>
                    {"  "}
                    <HighlightText delay={animationTimings.traps.startTime + 70} highlightColor="rgba(229, 62, 62, 0.3)">"震惊！专家称..."</HighlightText>
                </SpringText>
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
