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

// 原理与总结
const baseConfigs: AnimationConfig[] = [
    { name: "scene5_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene5_1_0" },
    { name: "scene5_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_0", audioId: "scene5_2_0" },
    { name: "scene5_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_2_0", audioId: "scene5_3_0" },
    { name: "scene5_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_3_0", audioId: "scene5_3_1" },
    { name: "scene5_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_3_1", audioId: "scene5_4_0" },
    { name: "scene5_5_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_4_0", audioId: "scene5_5_0" },
    { name: "scene5_5_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_5_0", audioId: "scene5_5_1" },
    { name: "scene5_6_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene5_5_1", audioId: "scene5_6_0" },
    { name: "scene5_6_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene5_6_0", audioId: "scene5_6_1" },
];

export const calculateScene5Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene5: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #0c1821 0%, #1b3a4b 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene5_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene5_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_1_0"].startTime, timings["scene5_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene5_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene5_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_2_0"].startTime, timings["scene5_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene5_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene5_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_3_0"].startTime, timings["scene5_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene5_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene5_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_4_0"].startTime, timings["scene5_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene5_5_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene5_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_5_0"].startTime, timings["scene5_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [6] */}
            <Sequence from={timings["scene5_6_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene5_6.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_6_0"].startTime, timings["scene5_6_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene5_1_0"].startTime} durationInFrames={timings["scene5_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>为什么这种骗局屡试不爽？</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene5_2_0"].startTime} durationInFrames={timings["scene5_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>因为我们的大脑太懒了。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene5_3_0"].startTime} durationInFrames={timings["scene5_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>人类天生就喜欢给复杂的事物找一个简单的理由，</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene5_3_1"].startTime} durationInFrames={timings["scene5_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>哪怕这个理由根本站不住脚。</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene5_4_0"].startTime} durationInFrames={timings["scene5_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>记住，两件事同时发生，不代表它们互相决定。</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene5_5_0"].startTime} durationInFrames={timings["scene5_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>中间可能隔着一个你看不见的变量，</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene5_5_1"].startTime} durationInFrames={timings["scene5_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>或者干脆就是纯属巧合。</div>
                </div>
            </Sequence>

            {/* [6-0] 正文 */}
            <Sequence from={timings["scene5_6_0"].startTime} durationInFrames={timings["scene5_6_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>在这个信息爆炸的时代，分不清因果，</div>
                </div>
            </Sequence>

            {/* [6-1] 正文 */}
            <Sequence from={timings["scene5_6_1"].startTime} durationInFrames={timings["scene5_6_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你不仅会变穷，还会被骗得团团转。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene5_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene5_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene5_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene5_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_3_1"]?.isFirstInItem && (
                <Sequence from={timings["scene5_3_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene5_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_5_0"]?.isFirstInItem && (
                <Sequence from={timings["scene5_5_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_5_1"]?.isFirstInItem && (
                <Sequence from={timings["scene5_5_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_5_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_6_0"]?.isFirstInItem && (
                <Sequence from={timings["scene5_6_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_6_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_6_1"]?.isFirstInItem && (
                <Sequence from={timings["scene5_6_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene5_6_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
