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

// 案例二：长寿老人与烟酒
const baseConfigs: AnimationConfig[] = [
    { name: "scene3_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene3_1_0" },
    { name: "scene3_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_0", audioId: "scene3_2_0" },
    { name: "scene3_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_0", audioId: "scene3_2_1" },
    { name: "scene3_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_1", audioId: "scene3_3_0" },
    { name: "scene3_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_0", audioId: "scene3_4_0" },
    { name: "scene3_4_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_0", audioId: "scene3_4_1" },
    { name: "scene3_4_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_1", audioId: "scene3_4_2" },
    { name: "scene3_5_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_2", audioId: "scene3_5_0" },
    { name: "scene3_5_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene3_5_0", audioId: "scene3_5_1" },
];

export const calculateScene3Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene3: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #0d1b2a 0%, #1b2838 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene3_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene3_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_1_0"].startTime, timings["scene3_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene3_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene3_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_2_0"].startTime, timings["scene3_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene3_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene3_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_3_0"].startTime, timings["scene3_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene3_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene3_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_4_0"].startTime, timings["scene3_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene3_5_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene3_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_5_0"].startTime, timings["scene3_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene3_1_0"].startTime} durationInFrames={timings["scene3_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>再举个更扎心的例子。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene3_2_0"].startTime} durationInFrames={timings["scene3_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>很多人看到村里的长寿老人天天抽旱烟、喝白酒，</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene3_2_1"].startTime} durationInFrames={timings["scene3_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>就觉得烟酒是长寿秘诀。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene3_3_0"].startTime} durationInFrames={timings["scene3_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这在统计学上叫“幸存者偏差”。</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene3_4_0"].startTime} durationInFrames={timings["scene3_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>真相是，</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene3_4_1"].startTime} durationInFrames={timings["scene3_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>那些因为抽烟喝酒早早把身体搞垮的人，</div>
                </div>
            </Sequence>

            {/* [4-2] 正文 */}
            <Sequence from={timings["scene3_4_2"].startTime} durationInFrames={timings["scene3_4_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>根本没机会活到八九十岁，站到你面前说话。</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene3_5_0"].startTime} durationInFrames={timings["scene3_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你看到的只是偶然的“相关”，</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene3_5_1"].startTime} durationInFrames={timings["scene3_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>根本不是必然的“因果”。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene3_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_1"]?.isFirstInItem && (
                <Sequence from={timings["scene3_2_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_1"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_2"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_5_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_5_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_5_1"]?.isFirstInItem && (
                <Sequence from={timings["scene3_5_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_5_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
