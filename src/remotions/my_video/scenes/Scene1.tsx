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

// 开端：石油的诱惑
const baseConfigs: AnimationConfig[] = [
    { name: "scene1_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene1_1_0" },
    { name: "scene1_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_1_0", audioId: "scene1_2_0" },
    { name: "scene1_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_2_0", audioId: "scene1_2_1" },
    { name: "scene1_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_2_1", audioId: "scene1_2_2" },
    { name: "scene1_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_2_2", audioId: "scene1_3_0" },
    { name: "scene1_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_3_0", audioId: "scene1_3_1" },
    { name: "scene1_3_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_3_1", audioId: "scene1_3_2" },
    { name: "scene1_3_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene1_3_2", audioId: "scene1_3_3" },
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
                    src={staticFile("images/my_video/scene1_1.png")}
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
                    src={staticFile("images/my_video/scene1_2.png")}
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
                    src={staticFile("images/my_video/scene1_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_3_0"].startTime, timings["scene1_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>事情要从一百多年前说起</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene1_2_0"].startTime} durationInFrames={timings["scene1_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>1914年</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene1_2_1"].startTime} durationInFrames={timings["scene1_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>英国政府购买了一家在伊朗开采石油的企业（英伊石油公司）51%的股份</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene1_2_2"].startTime} durationInFrames={timings["scene1_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>获得了实际的石油开采控制权</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene1_3_0"].startTime} durationInFrames={timings["scene1_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>虽然英国在石油开采的过程中投入了大量的人力物力和开采技术</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene1_3_1"].startTime} durationInFrames={timings["scene1_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但也赚取了极其惊人的财富</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene1_3_2"].startTime} durationInFrames={timings["scene1_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>仅在1945年至1950年间</div>
                </div>
            </Sequence>

            {/* [3-3] 正文 */}
            <Sequence from={timings["scene1_3_3"].startTime} durationInFrames={timings["scene1_3_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>AIOC就从伊朗石油中赚取了2.5亿英镑</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene1_1_0"] && (
                <Sequence from={timings["scene1_1_0"].startTime} durationInFrames={timings["scene1_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_2_0"] && (
                <Sequence from={timings["scene1_2_0"].startTime} durationInFrames={timings["scene1_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_2_1"] && (
                <Sequence from={timings["scene1_2_1"].startTime} durationInFrames={timings["scene1_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_2_2"] && (
                <Sequence from={timings["scene1_2_2"].startTime} durationInFrames={timings["scene1_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_0"] && (
                <Sequence from={timings["scene1_3_0"].startTime} durationInFrames={timings["scene1_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_1"] && (
                <Sequence from={timings["scene1_3_1"].startTime} durationInFrames={timings["scene1_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_2"] && (
                <Sequence from={timings["scene1_3_2"].startTime} durationInFrames={timings["scene1_3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_3_3"] && (
                <Sequence from={timings["scene1_3_3"].startTime} durationInFrames={timings["scene1_3_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_3_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
