import React, { useMemo } from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Img, useCurrentFrame, interpolate } from "remotion";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    type AudioMap,
} from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

// 核心方法：观察漏斗
const baseConfigs: AnimationConfig[] = [
    { name: "scene2_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene2_1_0" },
    { name: "scene2_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_0", audioId: "scene2_1_1" },
    { name: "scene2_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_1", audioId: "scene2_2_0" },
    { name: "scene2_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_0", audioId: "scene2_2_1" },
    { name: "scene2_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_1", audioId: "scene2_2_2" },
    { name: "scene2_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_2", audioId: "scene2_3_0" },
    { name: "scene2_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_3_0", audioId: "scene2_3_1" },
    { name: "scene2_4_0", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene2_3_1", audioId: "scene2_4_0" },
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
            <Sequence from={timings["scene2_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene2_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_1_0"].startTime, timings["scene2_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene2_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene2_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_2_0"].startTime, timings["scene2_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene2_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene2_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_3_0"].startTime, timings["scene2_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene2_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene2_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_4_0"].startTime, timings["scene2_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                position: "absolute", bottom: 150, left: 40, right: 40,
            }}>

            {/* [1-0] 正文 */}
            <Sequence from={timings["scene2_1_0"].startTime} durationInFrames={timings["scene2_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>想看穿一份调查报告</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene2_1_1"].startTime} durationInFrames={timings["scene2_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你只需要像拿着放大镜一样，盯着那个“漏斗”看：</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene2_2_0"].startTime} durationInFrames={timings["scene2_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>样本是怎么选的</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene2_2_1"].startTime} durationInFrames={timings["scene2_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>够随机吗</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene2_2_2"].startTime} durationInFrames={timings["scene2_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>样本量够大吗</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene2_3_0"].startTime} durationInFrames={timings["scene2_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>记住这个万能金句：</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene2_3_1"].startTime} durationInFrames={timings["scene2_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>“这个调查是在哪里做的,到底问了谁？”</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene2_4_0"].startTime} durationInFrames={timings["scene2_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>接下来，带你看穿四个最常见的“统计陷阱”</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene2_1_0"] && (
                <Sequence from={timings["scene2_1_0"].startTime} durationInFrames={timings["scene2_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_1_1"] && (
                <Sequence from={timings["scene2_1_1"].startTime} durationInFrames={timings["scene2_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_0"] && (
                <Sequence from={timings["scene2_2_0"].startTime} durationInFrames={timings["scene2_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_1"] && (
                <Sequence from={timings["scene2_2_1"].startTime} durationInFrames={timings["scene2_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_2"] && (
                <Sequence from={timings["scene2_2_2"].startTime} durationInFrames={timings["scene2_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_0"] && (
                <Sequence from={timings["scene2_3_0"].startTime} durationInFrames={timings["scene2_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_1"] && (
                <Sequence from={timings["scene2_3_1"].startTime} durationInFrames={timings["scene2_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_0"] && (
                <Sequence from={timings["scene2_4_0"].startTime} durationInFrames={timings["scene2_4_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_0"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
