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

// 图表审计三问
const baseConfigs: AnimationConfig[] = [
    { name: "scene3_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene3_1_0" },
    { name: "scene3_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_0", audioId: "scene3_1_1" },
    { name: "scene3_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_1", audioId: "scene3_2_0" },
    { name: "scene3_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_0", audioId: "scene3_2_1" },
    { name: "scene3_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_1", audioId: "scene3_2_2" },
    { name: "scene3_2_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_2", audioId: "scene3_2_3" },
    { name: "scene3_2_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_3", audioId: "scene3_2_4" },
    { name: "scene3_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_4", audioId: "scene3_3_0" },
    { name: "scene3_3_1", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene3_3_0", audioId: "scene3_3_1" },
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
                    src={staticFile("images/statistic_2/scene3_1.png")}
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
                    src={staticFile("images/statistic_2/scene3_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_2_0"].startTime, timings["scene3_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene3_3_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_2/scene3_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_3_0"].startTime, timings["scene3_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>不想被当成韭菜割</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene3_1_1"].startTime} durationInFrames={timings["scene3_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你要学会一套“图表审计法”</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene3_2_0"].startTime} durationInFrames={timings["scene3_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>下次看到任何让你心跳加速的图表</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene3_2_1"].startTime} durationInFrames={timings["scene3_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>先在心里问自己三个问题：</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene3_2_2"].startTime} durationInFrames={timings["scene3_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>第一，Y轴是从0开始的吗</div>
                </div>
            </Sequence>

            {/* [2-3] 正文 */}
            <Sequence from={timings["scene3_2_3"].startTime} durationInFrames={timings["scene3_2_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>第二，时间范围是不是被“掐头去尾”了</div>
                </div>
            </Sequence>

            {/* [2-4] 正文 */}
            <Sequence from={timings["scene3_2_4"].startTime} durationInFrames={timings["scene3_2_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>第三，比例有没有被刻意扭曲</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene3_3_0"].startTime} durationInFrames={timings["scene3_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>永远记住这句万能金句：</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene3_3_1"].startTime} durationInFrames={timings["scene3_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>“这张图的坐标轴，到底有没有猫腻？”</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene3_1_0"] && (
                <Sequence from={timings["scene3_1_0"].startTime} durationInFrames={timings["scene3_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_1_1"] && (
                <Sequence from={timings["scene3_1_1"].startTime} durationInFrames={timings["scene3_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_0"] && (
                <Sequence from={timings["scene3_2_0"].startTime} durationInFrames={timings["scene3_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_1"] && (
                <Sequence from={timings["scene3_2_1"].startTime} durationInFrames={timings["scene3_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_2"] && (
                <Sequence from={timings["scene3_2_2"].startTime} durationInFrames={timings["scene3_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_3"] && (
                <Sequence from={timings["scene3_2_3"].startTime} durationInFrames={timings["scene3_2_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_4"] && (
                <Sequence from={timings["scene3_2_4"].startTime} durationInFrames={timings["scene3_2_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_0"] && (
                <Sequence from={timings["scene3_3_0"].startTime} durationInFrames={timings["scene3_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_1"] && (
                <Sequence from={timings["scene3_3_1"].startTime} durationInFrames={timings["scene3_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
