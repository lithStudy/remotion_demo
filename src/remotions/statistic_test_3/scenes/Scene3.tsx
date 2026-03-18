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

// 数据可视化陷阱：相亲照的秘密
const baseConfigs: AnimationConfig[] = [
    { name: "scene3_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene3_1_0" },
    { name: "scene3_1_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_0", audioId: "scene3_1_1" },
    { name: "scene3_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_1", audioId: "scene3_2_0" },
    { name: "scene3_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_0", audioId: "scene3_2_1" },
    { name: "scene3_2_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_1", audioId: "scene3_2_2" },
    { name: "scene3_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_2", audioId: "scene3_3_0" },
    { name: "scene3_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_0", audioId: "scene3_3_1" },
    { name: "scene3_3_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_1", audioId: "scene3_3_2" },
    { name: "scene3_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_2", audioId: "scene3_4_0" },
    { name: "scene3_4_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_0", audioId: "scene3_4_1" },
    { name: "scene3_4_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_1", audioId: "scene3_4_2" },
    { name: "scene3_4_3", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_2", audioId: "scene3_4_3" },
    { name: "scene3_4_4", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_3", audioId: "scene3_4_4" },
    { name: "scene3_4_5", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_4", audioId: "scene3_4_5" },
    { name: "scene3_4_6", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_5", audioId: "scene3_4_6" },
    { name: "scene3_4_7", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene3_4_6", audioId: "scene3_4_7" },
    { name: "scene3_4_8", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene3_4_7", audioId: "scene3_4_8" },
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
                    src={staticFile("images/statistic_test_3/scene3_1.png")}
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
                    src={staticFile("images/statistic_test_3/scene3_2.png")}
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
                    src={staticFile("images/statistic_test_3/scene3_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_3_0"].startTime, timings["scene3_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene3_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_3/scene3_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_4_0"].startTime, timings["scene3_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>说白了，这就叫数据可视化陷阱。</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene3_1_1"].startTime} durationInFrames={timings["scene3_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这是什么意思？</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene3_2_0"].startTime} durationInFrames={timings["scene3_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>想象一下你去相亲。</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene3_2_1"].startTime} durationInFrames={timings["scene3_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>对方给你发了一张大长腿全身照，</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene3_2_2"].startTime} durationInFrames={timings["scene3_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>看着身材比例完美，气场一米八。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene3_3_0"].startTime} durationInFrames={timings["scene3_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>结果你见了真人一看，连一米六都不到。</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene3_3_1"].startTime} durationInFrames={timings["scene3_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>难道照片是假的吗？</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene3_3_2"].startTime} durationInFrames={timings["scene3_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>没造假，只是人家拍照的时候用了广角仰拍，还偷偷垫了块砖头。</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene3_4_0"].startTime} durationInFrames={timings["scene3_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>做图表也是一模一样的套路。</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene3_4_1"].startTime} durationInFrames={timings["scene3_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>很多图表最爱在坐标轴上搞偷梁换柱。</div>
                </div>
            </Sequence>

            {/* [4-2] 正文 */}
            <Sequence from={timings["scene3_4_2"].startTime} durationInFrames={timings["scene3_4_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>只要把图表左边纵坐标的起点，从零偷偷改成八十，</div>
                </div>
            </Sequence>

            {/* [4-3] 正文 */}
            <Sequence from={timings["scene3_4_3"].startTime} durationInFrames={timings["scene3_4_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>原本只涨了百分之二的微弱变化，</div>
                </div>
            </Sequence>

            {/* [4-4] 正文 */}
            <Sequence from={timings["scene3_4_4"].startTime} durationInFrames={timings["scene3_4_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>在视觉上看着就像是一飞冲天的暴富神话。</div>
                </div>
            </Sequence>

            {/* [4-5] 正文 */}
            <Sequence from={timings["scene3_4_5"].startTime} durationInFrames={timings["scene3_4_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>刻度稍微拉伸那么一下，</div>
                </div>
            </Sequence>

            {/* [4-6] 正文 */}
            <Sequence from={timings["scene3_4_6"].startTime} durationInFrames={timings["scene3_4_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>微小的差异就能被放大十倍。</div>
                </div>
            </Sequence>

            {/* [4-7] 正文 */}
            <Sequence from={timings["scene3_4_7"].startTime} durationInFrames={timings["scene3_4_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>你以为你在看客观事实，</div>
                </div>
            </Sequence>

            {/* [4-8] 正文 */}
            <Sequence from={timings["scene3_4_8"].startTime} durationInFrames={timings["scene3_4_8"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>其实你是在看别人精心布置的视觉魔术。</div>
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

            {audioMap["scene3_2_2"]?.isFirstInItem && (
                <Sequence from={timings["scene3_2_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_3_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_1"]?.isFirstInItem && (
                <Sequence from={timings["scene3_3_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_2"]?.isFirstInItem && (
                <Sequence from={timings["scene3_3_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_1"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_2"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_2"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_3"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_3"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_4"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_4"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_5"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_5"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_6"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_6"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_7"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_7"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_7"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_4_8"]?.isFirstInItem && (
                <Sequence from={timings["scene3_4_8"].startTime}>
                    <Audio src={staticFile(audioMap["scene3_4_8"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
