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

// 开场：图表的真相
const baseConfigs: AnimationConfig[] = [
    { name: "scene1_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene1_1_0" },
    { name: "scene1_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene1_1_0", audioId: "scene1_1_1" },
    { name: "scene1_1_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene1_1_1", audioId: "scene1_1_2" },
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
                    src={staticFile("images/statistic_2/scene1_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene1_1_0"].startTime, timings["scene1_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你敢相信吗</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene1_1_1"].startTime} durationInFrames={timings["scene1_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>两张一模一样的数据图，一张看起来风平浪静，另一张却像世界末日</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene1_1_2"].startTime} durationInFrames={timings["scene1_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这就是我们要聊的《统计素养》第三课：图表骗术</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene1_1_0"] && (
                <Sequence from={timings["scene1_1_0"].startTime} durationInFrames={timings["scene1_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_1_1"] && (
                <Sequence from={timings["scene1_1_1"].startTime} durationInFrames={timings["scene1_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene1_1_2"] && (
                <Sequence from={timings["scene1_1_2"].startTime} durationInFrames={timings["scene1_1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene1_1_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
