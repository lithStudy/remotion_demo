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

// 统计陷阱二：幸存者偏差
const baseConfigs: AnimationConfig[] = [
    { name: "scene4_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene4_1_0" },
    { name: "scene4_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_0", audioId: "scene4_1_1" },
    { name: "scene4_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_1", audioId: "scene4_2_0" },
    { name: "scene4_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_0", audioId: "scene4_2_1" },
    { name: "scene4_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_1", audioId: "scene4_2_2" },
    { name: "scene4_3_0", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene4_2_2", audioId: "scene4_3_0" },
];

export const calculateScene4Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene4: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #1f1147 0%, #120a2e 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene4_1_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene4_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_1_0"].startTime, timings["scene4_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene4_2_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene4_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_2_0"].startTime, timings["scene4_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene4_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_1/scene4_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_3_0"].startTime, timings["scene4_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene4_1_0"].startTime} durationInFrames={timings["scene4_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>经常听人感叹：</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene4_1_1"].startTime} durationInFrames={timings["scene4_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>“现在的华语乐坛不行了，还是以前的老歌好听。”</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene4_2_0"].startTime} durationInFrames={timings["scene4_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>真不是以前没烂歌，而是因为难听的歌早被时间淘汰了</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene4_2_1"].startTime} durationInFrames={timings["scene4_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>能流传到今天、让你在耳机里听到的</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene4_2_2"].startTime} durationInFrames={timings["scene4_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>全是“幸存”下来的神作</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene4_3_0"].startTime} durationInFrames={timings["scene4_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这就是“幸存者偏差”</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene4_1_0"] && (
                <Sequence from={timings["scene4_1_0"].startTime} durationInFrames={timings["scene4_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_1"] && (
                <Sequence from={timings["scene4_1_1"].startTime} durationInFrames={timings["scene4_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_0"] && (
                <Sequence from={timings["scene4_2_0"].startTime} durationInFrames={timings["scene4_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_1"] && (
                <Sequence from={timings["scene4_2_1"].startTime} durationInFrames={timings["scene4_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_2"] && (
                <Sequence from={timings["scene4_2_2"].startTime} durationInFrames={timings["scene4_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_3_0"] && (
                <Sequence from={timings["scene4_3_0"].startTime} durationInFrames={timings["scene4_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_3_0"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
