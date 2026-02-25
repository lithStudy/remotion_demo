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
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 100, preName: null, audioId: "scene2_1" },
    { name: "question1", delayBefore: 0, delayAfter: 10, durationInFrames: 140, preName: "title", audioId: "scene2_2" },
    { name: "question2", delayBefore: 0, delayAfter: 10, durationInFrames: 140, preName: "question1", audioId: "scene2_3" },
    { name: "question3", delayBefore: 0, delayAfter: 10, durationInFrames: 150, preName: "question2", audioId: "scene2_4" },
    { name: "quote", delayBefore: 0, delayAfter: 15, durationInFrames: 200, preName: "question3", audioId: "scene2_5" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene2Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

const ChecklistIcon: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [delay, delay + 20], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            transform: `scale(${scale})`,
            marginBottom: 20,
        }}>
            <span style={{ fontSize: 70 }}>📋</span>
            <span style={{ fontSize: 50 }}>🔍</span>
        </div>
    );
};

const QuestionCard: React.FC<{
    number: number;
    text: string;
    delay: number;
    color: string;
    borderColor: string;
}> = ({ number, text, delay, color, borderColor }) => {
    return (
        <div style={{ width: "100%", marginBottom: 15 }}>
            <FadeInText
                delay={delay}
                duration={20}
                style={{
                    fontSize: 34,
                    color: "#2D3748",
                    background: "white",
                    padding: "15px 20px",
                    borderRadius: 15,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                    borderLeft: `8px solid ${borderColor}`,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                }}
            >
                <span style={{
                    background: color,
                    color: "white",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                    flexShrink: 0,
                }}>
                    {number}
                </span>
                <TypewriterText
                    text={text}
                    delay={delay}
                    durationInFrames={80}
                />
            </FadeInText>
        </div>
    );
};

export const Scene2: React.FC = () => {
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
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "#276749",
                    marginBottom: 15,
                    borderBottom: "4px solid #38A169",
                    paddingBottom: 10,
                }}
            >
                总策略：<HighlightText delay={animationTimings.title.startTime + 20} highlightColor="#9AE6B4">信源三问法</HighlightText>
            </FadeInText>

            <ChecklistIcon delay={animationTimings.title.startTime} />

            <QuestionCard
                number={1}
                text="作者是谁？有什么专业背景？"
                delay={animationTimings.question1.startTime}
                color="#38A169"
                borderColor="#38A169"
            />

            <QuestionCard
                number={2}
                text="平台是什么？有编辑审核吗？"
                delay={animationTimings.question2.startTime}
                color="#3182CE"
                borderColor="#3182CE"
            />

            <QuestionCard
                number={3}
                text="利益关系？他从这条信息中获利吗？"
                delay={animationTimings.question3.startTime}
                color="#D69E2E"
                borderColor="#D69E2E"
            />

            <div style={{ width: "100%", marginTop: 15 }}>
                <FadeInText
                    delay={animationTimings.quote.startTime}
                    duration={20}
                    style={{
                        fontSize: 32,
                        color: "#744210",
                        background: "#FEFCBF",
                        padding: "15px 20px",
                        borderRadius: 15,
                        textAlign: "center",
                        fontStyle: "italic",
                        border: "2px dashed #D69E2E",
                        lineHeight: 1.6,
                    }}
                >
                    万能金句："匿名信息、自媒体、有利益关系的说法——三重警惕。"
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
