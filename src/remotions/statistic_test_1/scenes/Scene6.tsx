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

// 结尾：思考题
const baseConfigs: AnimationConfig[] = [
    { name: "scene6_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene6_1_0" },
    { name: "scene6_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_0", audioId: "scene6_2_0" },
    { name: "scene6_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene6_2_0", audioId: "scene6_2_1" },
    { name: "scene6_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene6_2_1", audioId: "scene6_3_0" },
    { name: "scene6_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_0", audioId: "scene6_3_1" },
    { name: "scene6_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_1", audioId: "scene6_4_0" },
    { name: "scene6_4_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene6_4_0", audioId: "scene6_4_1" },
];

export const calculateScene6Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene6: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #2d1b69 0%, #1a0a3e 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene6_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene6_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_1_0"].startTime, timings["scene6_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene6_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene6_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_2_0"].startTime, timings["scene6_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene6_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene6_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_3_0"].startTime, timings["scene6_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene6_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene6_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_4_0"].startTime, timings["scene6_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene6_1_0"].startTime} durationInFrames={timings["scene6_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>最后，留一个思考题给你。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene6_2_0"].startTime} durationInFrames={timings["scene6_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>统计发现，</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene6_2_1"].startTime} durationInFrames={timings["scene6_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>一个城市的书店越多，那里的犯罪率反而越高。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene6_3_0"].startTime} durationInFrames={timings["scene6_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你觉得是因为读书让人变坏了，</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene6_3_1"].startTime} durationInFrames={timings["scene6_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>还是背后藏着什么其他的真相？</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene6_4_0"].startTime} durationInFrames={timings["scene6_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>把你的答案写在评论区，</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene6_4_1"].startTime} durationInFrames={timings["scene6_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>我们看看谁才是真正的认知高手。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene6_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene6_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene6_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_2_1"]?.isFirstInItem && (
                <Sequence from={timings["scene6_2_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene6_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_1"]?.isFirstInItem && (
                <Sequence from={timings["scene6_3_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene6_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_1"]?.isFirstInItem && (
                <Sequence from={timings["scene6_4_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene6_4_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
