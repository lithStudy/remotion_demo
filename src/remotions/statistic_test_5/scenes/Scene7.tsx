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

// 总结：理性思考
const baseConfigs: AnimationConfig[] = [
    { name: "scene7_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene7_1_0" },
    { name: "scene7_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_0", audioId: "scene7_1_1" },
    { name: "scene7_1_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_1", audioId: "scene7_1_2" },
    { name: "scene7_1_3", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_2", audioId: "scene7_1_3" },
    { name: "scene7_1_4", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_3", audioId: "scene7_1_4" },
    { name: "scene7_1_5", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene7_1_4", audioId: "scene7_1_5" },
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
                    src={staticFile("images/statistic_test_5/scene7_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_1_0"].startTime, timings["scene7_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>真正会算账的人。</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene7_1_1"].startTime} durationInFrames={timings["scene7_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>先看基数。</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene7_1_2"].startTime} durationInFrames={timings["scene7_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>再看比例。</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene7_1_3"].startTime} durationInFrames={timings["scene7_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>最后才看结论。</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene7_1_4"].startTime} durationInFrames={timings["scene7_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>顺序一反。</div>
                </div>
            </Sequence>

            {/* [1-5] 正文 */}
            <Sequence from={timings["scene7_1_5"].startTime} durationInFrames={timings["scene7_1_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你就成了被带节奏的人。</div>
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

            {audioMap["scene7_1_4"]?.isFirstInItem && (
                <Sequence from={timings["scene7_1_4"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_5"]?.isFirstInItem && (
                <Sequence from={timings["scene7_1_5"].startTime}>
                    <Audio src={staticFile(audioMap["scene7_1_5"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
