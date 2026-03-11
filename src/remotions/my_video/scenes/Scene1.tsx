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

// 开端：石油的诱惑
const baseConfigs: AnimationConfig[] = [
    { name: "scene1_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene1_1" },
    { name: "scene1_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_1", audioId: "scene1_2" },
    { name: "scene1_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene1_2", audioId: "scene1_3" },
];

export const calculateScene1Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene1: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene1_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene1_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_1"].startTime, timings["scene1_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene1_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene1_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_2"].startTime, timings["scene1_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene1_3"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene1_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_3"].startTime, timings["scene1_3"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene1_1"].startTime} durationInFrames={timings["scene1_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>事情要从一百多年前说起</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene1_2"].startTime} durationInFrames={timings["scene1_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>1914年，英国政府购买第一家在伊朗开采石油的企业（英伊石油公司）51%的股份，获得了实际的石油开采控制权</div>
                </FadeInText>
            </Sequence>

            {/* [3] 正文 */}
            <Sequence from={timings["scene1_3"].startTime} durationInFrames={timings["scene1_3"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>虽然英国在石油开采的过程中投入了大量的人力物力和开采技术，但也赚取了极其惊人的财富（仅在1945年至1950年间，AIOC就从伊朗石油中赚取了2.5亿英镑）。</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene1_1"] && (
                <Sequence from={timings["scene1_1"].startTime} durationInFrames={timings["scene1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_2"] && (
                <Sequence from={timings["scene1_2"].startTime} durationInFrames={timings["scene1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3"] && (
                <Sequence from={timings["scene1_3"].startTime} durationInFrames={timings["scene1_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
