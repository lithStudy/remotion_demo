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

// 比例的迷惑性：大基数的真相
const baseConfigs: AnimationConfig[] = [
    { name: "scene3_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene3_1_0" },
    { name: "scene3_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_0", audioId: "scene3_1_1" },
    { name: "scene3_1_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_1", audioId: "scene3_1_2" },
    { name: "scene3_1_3", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_2", audioId: "scene3_1_3" },
    { name: "scene3_1_4", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_3", audioId: "scene3_1_4" },
    { name: "scene3_1_5", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_4", audioId: "scene3_1_5" },
    { name: "scene3_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_5", audioId: "scene3_2_0" },
    { name: "scene3_2_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene3_2_0", audioId: "scene3_2_1" },
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
                    src={staticFile("images/statistic_test_5/scene3_1.png")}
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
                    src={staticFile("images/statistic_test_5/scene3_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_2_0"].startTime, timings["scene3_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>可如果换一组。</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene3_1_1"].startTime} durationInFrames={timings["scene3_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>一万人死一千。</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene3_1_2"].startTime} durationInFrames={timings["scene3_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>变成一千一百。</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene3_1_3"].startTime} durationInFrames={timings["scene3_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>只涨百分之十。</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene3_1_4"].startTime} durationInFrames={timings["scene3_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>听着不吓人。</div>
                </div>
            </Sequence>

            {/* [1-5] 正文 */}
            <Sequence from={timings["scene3_1_5"].startTime} durationInFrames={timings["scene3_1_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但多死了一百个。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene3_2_0"].startTime} durationInFrames={timings["scene3_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这就是比例和基数。</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene3_2_1"].startTime} durationInFrames={timings["scene3_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>专门收割不算账的人。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene3_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_1_1"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_1_2"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_1_3"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_3"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_1_4"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_4"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_1_5"]?.isFirstInItem && (
                <Sequence from={timings["scene3_1_5"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_1_5"].file)} />
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
        </AbsoluteFill>
    );
};
