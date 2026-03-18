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

// 提防被操纵的情绪
const baseConfigs: AnimationConfig[] = [
    { name: "scene4_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene4_1_0" },
    { name: "scene4_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_0", audioId: "scene4_1_1" },
    { name: "scene4_1_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_1", audioId: "scene4_1_2" },
    { name: "scene4_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_2", audioId: "scene4_2_0" },
    { name: "scene4_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_0", audioId: "scene4_2_1" },
    { name: "scene4_2_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_1", audioId: "scene4_2_2" },
    { name: "scene4_2_3", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_2", audioId: "scene4_2_3" },
    { name: "scene4_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_3", audioId: "scene4_3_0" },
    { name: "scene4_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_3_0", audioId: "scene4_3_1" },
    { name: "scene4_3_2", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene4_3_1", audioId: "scene4_3_2" },
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
                    src={staticFile("images/statistic_test_3/scene4_1.png")}
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
                    src={staticFile("images/statistic_test_3/scene4_2.png")}
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
                    src={staticFile("images/statistic_test_3/scene4_3.png")}
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>其实在这个注意力被疯狂收割的时代，</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene4_1_1"].startTime} durationInFrames={timings["scene4_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>图表早就不是什么单纯的记录工具了。</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene4_1_2"].startTime} durationInFrames={timings["scene4_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>它变成了操纵你情绪的终极武器。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene4_2_0"].startTime} durationInFrames={timings["scene4_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>不管是商家给你看业绩暴涨的柱状图，</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene4_2_1"].startTime} durationInFrames={timings["scene4_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>还是推销员给你看疯狂下降的患病率曲线。</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene4_2_2"].startTime} durationInFrames={timings["scene4_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>他们都在利用你大脑对视觉画面的天然盲从，</div>
                </div>
            </Sequence>

            {/* [2-3] 正文 */}
            <Sequence from={timings["scene4_2_3"].startTime} durationInFrames={timings["scene4_2_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>直接绕过了你的理性防御机制。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene4_3_0"].startTime} durationInFrames={timings["scene4_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>记住一句话，</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene4_3_1"].startTime} durationInFrames={timings["scene4_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>看图如果不看坐标轴，不看数据基准线，</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene4_3_2"].startTime} durationInFrames={timings["scene4_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>那你早晚要被这个社会当成最肥的韭菜狠狠收割。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene4_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_1_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_2"]?.isFirstInItem && (
                <Sequence from={timings["scene4_1_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_2_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_2_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_2"]?.isFirstInItem && (
                <Sequence from={timings["scene4_2_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_2_3"]?.isFirstInItem && (
                <Sequence from={timings["scene4_2_3"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_2_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_3_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_3_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_3_2"]?.isFirstInItem && (
                <Sequence from={timings["scene4_3_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_3_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
