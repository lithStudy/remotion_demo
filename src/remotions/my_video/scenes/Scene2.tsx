import React, { useMemo } from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Img, useCurrentFrame, interpolate } from "remotion";
import { FadeInText } from "../../../components";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    type AudioMap,
} from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

// 国有化与制裁
const baseConfigs: AnimationConfig[] = [
    { name: "scene2_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene2_1" },
    { name: "scene2_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene2_1", audioId: "scene2_2" },
];

export const calculateScene2Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene2: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene2_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_1"].startTime, timings["scene2_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene2_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_2"].startTime, timings["scene2_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 底部暗色渐变，保证字幕可读 */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "45%",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
                pointerEvents: "none",
            }} />

            {/* 字幕文本区域 */}
            <div style={{
                position: "absolute", bottom: 80, left: 40, right: 40,
            }}>

            {/* [1] 正文 */}
            <Sequence from={timings["scene2_1"].startTime} durationInFrames={timings["scene2_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>后来伊朗看着眼红了，觉得这是一种极度不公平的资源掠夺，这点燃了伊朗的民族主义情绪，促使摩萨台总理在1951年推动并正式通过了《石油国有化法案》，强行将这个英伊石油公司收为国有</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene2_2"].startTime} durationInFrames={timings["scene2_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>英国对此非常愤怒，认为这是单方面撕毁了双方在1933年签署的石油特许权协议，是非法的违约行为。于是对伊朗实施了严厉的经济制裁和石油禁运，军情六处还率先制定了推翻摩萨台的“靴子行动”。但是，由于局势恶化，英国外交官和情报人员随后被驱逐出伊朗，导致英国没有力量实施行动</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene2_1"] && (
                <Sequence from={timings["scene2_1"].startTime} durationInFrames={timings["scene2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2"] && (
                <Sequence from={timings["scene2_2"].startTime} durationInFrames={timings["scene2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
