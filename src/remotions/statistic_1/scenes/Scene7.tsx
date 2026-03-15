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

// 结尾：总结与号召
const baseConfigs: AnimationConfig[] = [
    { name: "scene7_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene7_1_0" },
    { name: "scene7_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_0", audioId: "scene7_1_1" },
    { name: "scene7_1_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_1", audioId: "scene7_1_2" },
    { name: "scene7_1_3", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_2", audioId: "scene7_1_3" },
    { name: "scene7_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_3", audioId: "scene7_2_0" },
    { name: "scene7_3_0", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene7_2_0", audioId: "scene7_3_0" },
];

export const calculateScene7Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene7: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #0b1d3a 0%, #162447 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene7_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene7_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_1_0"].startTime, timings["scene7_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene7_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene7_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_2_0"].startTime, timings["scene7_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene7_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene7_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_3_0"].startTime, timings["scene7_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene7_1_0"].startTime} durationInFrames={timings["scene7_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>所以，</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene7_1_1"].startTime} durationInFrames={timings["scene7_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>下次再看到那些让你焦虑、让你震惊的统计数据，</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene7_1_2"].startTime} durationInFrames={timings["scene7_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>先别急着相信。</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene7_1_3"].startTime} durationInFrames={timings["scene7_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>样本无代表性，则结论不可信。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene7_2_0"].startTime} durationInFrames={timings["scene7_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>多问一句：调查问了谁？是怎么问的？</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene7_3_0"].startTime} durationInFrames={timings["scene7_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>保持清醒，别让偏见伪装成真相。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene7_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene7_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_1"]?.isFirstInItem && (
                <Sequence from={timings["scene7_1_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_2"]?.isFirstInItem && (
                <Sequence from={timings["scene7_1_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_3"]?.isFirstInItem && (
                <Sequence from={timings["scene7_1_3"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene7_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene7_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_3_0"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
