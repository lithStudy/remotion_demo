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

// 招数三：截断Y轴
const baseConfigs: AnimationConfig[] = [
    { name: "scene6_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene6_1_0" },
    { name: "scene6_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_0", audioId: "scene6_2_0" },
    { name: "scene6_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_2_0", audioId: "scene6_2_1" },
    { name: "scene6_2_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene6_2_1", audioId: "scene6_2_2" },
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
                    src={staticFile("images/statistic_2/scene6_1.png")}
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
                    src={staticFile("images/statistic_2/scene6_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_2_0"].startTime, timings["scene6_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>第三种是最损的：截断Y轴</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene6_2_0"].startTime} durationInFrames={timings["scene6_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>比如某项指标从98涨到了99，如果坐标轴从0开始，这几乎是一条横线；</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene6_2_1"].startTime} durationInFrames={timings["scene6_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但如果坐标轴从95开始，这1%的增长看起来就像翻了一倍</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene6_2_2"].startTime} durationInFrames={timings["scene6_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这种图专门欺负那些只看柱子高度、不看刻度数字的人</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene6_1_0"] && (
                <Sequence from={timings["scene6_1_0"].startTime} durationInFrames={timings["scene6_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_2_0"] && (
                <Sequence from={timings["scene6_2_0"].startTime} durationInFrames={timings["scene6_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_2_1"] && (
                <Sequence from={timings["scene6_2_1"].startTime} durationInFrames={timings["scene6_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_2_2"] && (
                <Sequence from={timings["scene6_2_2"].startTime} durationInFrames={timings["scene6_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_2_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
