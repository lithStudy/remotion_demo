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
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 60, preName: null, audioId: "scene6_1" },
    { name: "point1", delayBefore: 0, delayAfter: 10, durationInFrames: 105, preName: "title", audioId: "scene6_2" },
    { name: "point2", delayBefore: 0, delayAfter: 10, durationInFrames: 130, preName: "point1", audioId: "scene6_3" },
    { name: "point3", delayBefore: 0, delayAfter: 15, durationInFrames: 80, preName: "point2", audioId: "scene6_4" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

export const calculateScene6Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

const UnmaskAnimation: React.FC<{ delay: number }> = ({ delay }) => {
    const frame = useCurrentFrame();
    const progress = interpolate(frame, [delay, delay + 30], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const maskOffset = interpolate(progress, [0, 1], [0, -40], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const maskOpacity = interpolate(progress, [0, 0.5, 1], [1, 0.8, 0.3], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const faceOpacity = interpolate(progress, [0, 0.5, 1], [0, 0.5, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <div style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            marginBottom: 20,
        }}>
            <span style={{
                fontSize: 80,
                opacity: faceOpacity,
                position: "absolute",
            }}>
                😊
            </span>
            <span style={{
                fontSize: 80,
                opacity: maskOpacity,
                position: "absolute",
                transform: `translateY(${maskOffset}px) rotate(${maskOffset * 0.5}deg)`,
            }}>
                🎭
            </span>
        </div>
    );
};

export const Scene6: React.FC = () => {
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
            <FadeInText
                delay={animationTimings.title.startTime}
                duration={20}
                style={{
                    fontSize: 60,
                    fontWeight: "bold",
                    color: "#63B3ED",
                    marginBottom: 15,
                    borderBottom: "4px solid #63B3ED",
                    paddingBottom: 10,
                }}
            >
                本期总结
            </FadeInText>

            <UnmaskAnimation delay={animationTimings.title.startTime + 10} />

            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.point1.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        textAlign: "center",
                        lineHeight: 1.6,
                    }}
                >
                    ✅ 在相信之前，先问<HighlightText delay={animationTimings.point1.startTime + 20} highlightColor="rgba(99, 179, 237, 0.3)">'谁在说话'</HighlightText>
                </FadeInText>
            </div>

            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.point2.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        textAlign: "center",
                        fontWeight: "bold",
                        color: "#F6E05E",
                        lineHeight: 1.6,
                    }}
                >
                    ✅ 检查<HighlightText delay={animationTimings.point2.startTime + 15} highlightColor="rgba(246, 224, 94, 0.2)">作者资质</HighlightText>、<HighlightText delay={animationTimings.point2.startTime + 40} highlightColor="rgba(246, 224, 94, 0.2)">平台审核</HighlightText>、<HighlightText delay={animationTimings.point2.startTime + 65} highlightColor="rgba(246, 224, 94, 0.2)">利益关系</HighlightText>
                </FadeInText>
            </div>

            <div style={{ width: "100%", marginBottom: 20 }}>
                <FadeInText
                    delay={animationTimings.point3.startTime}
                    duration={20}
                    style={{
                        fontSize: 36,
                        textAlign: "center",
                        lineHeight: 1.6,
                    }}
                >
                    ✅ <HighlightText delay={animationTimings.point3.startTime + 15} highlightColor="rgba(252, 129, 129, 0.3)">匿名爆料</HighlightText>要打折扣
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
