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

// 开场：冰淇淋与溺水
const baseConfigs: AnimationConfig[] = [
    { name: "scene1_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene1_1_0" },
    { name: "scene1_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_1_0", audioId: "scene1_1_1" },
    { name: "scene1_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_1_1", audioId: "scene1_2_0" },
    { name: "scene1_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_2_0", audioId: "scene1_3_0" },
    { name: "scene1_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_3_0", audioId: "scene1_3_1" },
    { name: "scene1_3_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_3_1", audioId: "scene1_3_2" },
    { name: "scene1_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_3_2", audioId: "scene1_4_0" },
    { name: "scene1_4_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_4_0", audioId: "scene1_4_1" },
    { name: "scene1_4_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_4_1", audioId: "scene1_4_2" },
    { name: "scene1_5_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene1_4_2", audioId: "scene1_5_0" },
    { name: "scene1_5_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene1_5_0", audioId: "scene1_5_1" },
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
            <Sequence from={timings["scene1_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene1_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_1_0"].startTime, timings["scene1_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene1_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene1_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_2_0"].startTime, timings["scene1_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene1_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene1_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_3_0"].startTime, timings["scene1_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene1_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene1_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_4_0"].startTime, timings["scene1_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene1_5_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene1_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_5_0"].startTime, timings["scene1_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene1_1_0"].startTime} durationInFrames={timings["scene1_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>冰淇淋卖得越火，</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene1_1_1"].startTime} durationInFrames={timings["scene1_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>溺水的人就越多。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene1_2_0"].startTime} durationInFrames={timings["scene1_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>难道是吃冰淇淋会导致溺水吗？</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene1_3_0"].startTime} durationInFrames={timings["scene1_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>当然不是。</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene1_3_1"].startTime} durationInFrames={timings["scene1_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>真正的原因是天气热了，</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene1_3_2"].startTime} durationInFrames={timings["scene1_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>吃冰淇淋和下水游泳的人都变多了。</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene1_4_0"].startTime} durationInFrames={timings["scene1_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但就是这种看似离谱的逻辑，</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene1_4_1"].startTime} durationInFrames={timings["scene1_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>正在悄悄掏空你的钱包，</div>
                </div>
            </Sequence>

            {/* [4-2] 正文 */}
            <Sequence from={timings["scene1_4_2"].startTime} durationInFrames={timings["scene1_4_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>甚至毁掉你的认知。</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene1_5_0"].startTime} durationInFrames={timings["scene1_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这就是一个统计学里最深、最隐蔽的坑：</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene1_5_1"].startTime} durationInFrames={timings["scene1_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>把“相关性”当成了“因果关系”。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene1_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene1_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_1_1"]?.isFirstInItem && (
                <Sequence from={timings["scene1_1_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene1_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene1_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_1"]?.isFirstInItem && (
                <Sequence from={timings["scene1_3_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_2"]?.isFirstInItem && (
                <Sequence from={timings["scene1_3_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene1_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_4_1"]?.isFirstInItem && (
                <Sequence from={timings["scene1_4_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_4_2"]?.isFirstInItem && (
                <Sequence from={timings["scene1_4_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_4_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_5_0"]?.isFirstInItem && (
                <Sequence from={timings["scene1_5_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_5_1"]?.isFirstInItem && (
                <Sequence from={timings["scene1_5_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene1_5_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
