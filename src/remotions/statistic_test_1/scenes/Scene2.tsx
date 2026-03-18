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

// 案例一：成功CEO与早起
const baseConfigs: AnimationConfig[] = [
    { name: "scene2_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene2_1_0" },
    { name: "scene2_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_0", audioId: "scene2_2_0" },
    { name: "scene2_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_0", audioId: "scene2_2_1" },
    { name: "scene2_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_1", audioId: "scene2_3_0" },
    { name: "scene2_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_3_0", audioId: "scene2_3_1" },
    { name: "scene2_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_3_1", audioId: "scene2_4_0" },
    { name: "scene2_4_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_0", audioId: "scene2_4_1" },
    { name: "scene2_4_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_1", audioId: "scene2_4_2" },
    { name: "scene2_5_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_2", audioId: "scene2_5_0" },
    { name: "scene2_5_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_5_0", audioId: "scene2_5_1" },
    { name: "scene2_6_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene2_5_1", audioId: "scene2_6_0" },
    { name: "scene2_6_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene2_6_0", audioId: "scene2_6_1" },
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
                    src={staticFile("images/statistic_test_1/scene2_1.png")}
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
                    src={staticFile("images/statistic_test_1/scene2_2.png")}
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
                    src={staticFile("images/statistic_test_1/scene2_3.png")}
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
                    src={staticFile("images/statistic_test_1/scene2_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_4_0"].startTime, timings["scene2_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene2_5_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene2_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_5_0"].startTime, timings["scene2_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [6] */}
            <Sequence from={timings["scene2_6_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene2_6.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_6_0"].startTime, timings["scene2_6_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这种思维误区，生活中简直随处可见。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene2_2_0"].startTime} durationInFrames={timings["scene2_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>比如有人告诉你，</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene2_2_1"].startTime} durationInFrames={timings["scene2_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>成功的CEO每天都凌晨四点起床。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene2_3_0"].startTime} durationInFrames={timings["scene2_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>于是你赶紧定五个闹钟，</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene2_3_1"].startTime} durationInFrames={timings["scene2_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>强迫自己半夜爬起来死磕。</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene2_4_0"].startTime} durationInFrames={timings["scene2_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>结果呢？</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene2_4_1"].startTime} durationInFrames={timings["scene2_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>除了白天哈欠连天、心脏早搏，</div>
                </div>
            </Sequence>

            {/* [4-2] 正文 */}
            <Sequence from={timings["scene2_4_2"].startTime} durationInFrames={timings["scene2_4_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你离升职加薪依然遥遥无期。</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene2_5_0"].startTime} durationInFrames={timings["scene2_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你以为“早起”是成功的“因”，</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene2_5_1"].startTime} durationInFrames={timings["scene2_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但其实，人家可能只是因为工作多到做不完，才被迫早起的“果”。</div>
                </div>
            </Sequence>

            {/* [6-0] 正文 */}
            <Sequence from={timings["scene2_6_0"].startTime} durationInFrames={timings["scene2_6_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你把结果当成了原因，</div>
                </div>
            </Sequence>

            {/* [6-1] 正文 */}
            <Sequence from={timings["scene2_6_1"].startTime} durationInFrames={timings["scene2_6_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>怎么可能成功？</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene2_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene2_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene2_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_1"]?.isFirstInItem && (
                <Sequence from={timings["scene2_2_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene2_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_1"]?.isFirstInItem && (
                <Sequence from={timings["scene2_3_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene2_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_1"]?.isFirstInItem && (
                <Sequence from={timings["scene2_4_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_2"]?.isFirstInItem && (
                <Sequence from={timings["scene2_4_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_4_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_5_0"]?.isFirstInItem && (
                <Sequence from={timings["scene2_5_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_5_1"]?.isFirstInItem && (
                <Sequence from={timings["scene2_5_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_5_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_6_0"]?.isFirstInItem && (
                <Sequence from={timings["scene2_6_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_6_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_6_1"]?.isFirstInItem && (
                <Sequence from={timings["scene2_6_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene2_6_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
