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

// 结尾：保持警惕
const baseConfigs: AnimationConfig[] = [
    { name: "scene8_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene8_1_0" },
    { name: "scene8_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene8_1_0", audioId: "scene8_1_1" },
    { name: "scene8_1_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene8_1_1", audioId: "scene8_1_2" },
    { name: "scene8_1_3", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene8_1_2", audioId: "scene8_1_3" },
    { name: "scene8_1_4", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene8_1_3", audioId: "scene8_1_4" },
    { name: "scene8_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene8_1_4", audioId: "scene8_2_0" },
    { name: "scene8_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene8_2_0", audioId: "scene8_2_1" },
    { name: "scene8_2_2", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene8_2_1", audioId: "scene8_2_2" },
];

export const calculateScene8Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene8: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a0000 0%, #2d1f1f 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene8_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_5/scene8_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene8_1_0"].startTime, timings["scene8_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene8_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_5/scene8_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene8_2_0"].startTime, timings["scene8_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene8_1_0"].startTime} durationInFrames={timings["scene8_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>所以以后再看到。</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene8_1_1"].startTime} durationInFrames={timings["scene8_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>暴涨。</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene8_1_2"].startTime} durationInFrames={timings["scene8_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>暴跌。</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene8_1_3"].startTime} durationInFrames={timings["scene8_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>翻倍。</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene8_1_4"].startTime} durationInFrames={timings["scene8_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>腰斩。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene8_2_0"].startTime} durationInFrames={timings["scene8_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>先别激动。</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene8_2_1"].startTime} durationInFrames={timings["scene8_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>先问一句。</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene8_2_2"].startTime} durationInFrames={timings["scene8_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>原来到底是多少。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene8_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene8_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_1_1"]?.isFirstInItem && (
                <Sequence from={timings["scene8_1_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_1_2"]?.isFirstInItem && (
                <Sequence from={timings["scene8_1_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_1_3"]?.isFirstInItem && (
                <Sequence from={timings["scene8_1_3"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_1_4"]?.isFirstInItem && (
                <Sequence from={timings["scene8_1_4"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene8_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_2_1"]?.isFirstInItem && (
                <Sequence from={timings["scene8_2_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_2_2"]?.isFirstInItem && (
                <Sequence from={timings["scene8_2_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene8_2_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
