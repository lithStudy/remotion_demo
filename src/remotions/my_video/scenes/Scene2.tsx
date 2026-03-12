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

// 伊朗的反抗与美国的介入
const baseConfigs: AnimationConfig[] = [
    { name: "scene2_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene2_1_0" },
    { name: "scene2_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_0", audioId: "scene2_1_1" },
    { name: "scene2_1_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_1", audioId: "scene2_1_2" },
    { name: "scene2_1_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_2", audioId: "scene2_1_3" },
    { name: "scene2_1_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_3", audioId: "scene2_1_4" },
    { name: "scene2_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_1_4", audioId: "scene2_2_0" },
    { name: "scene2_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_0", audioId: "scene2_2_1" },
    { name: "scene2_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_1", audioId: "scene2_2_2" },
    { name: "scene2_2_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_2", audioId: "scene2_2_3" },
    { name: "scene2_2_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_3", audioId: "scene2_2_4" },
    { name: "scene2_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_2_4", audioId: "scene2_3_0" },
    { name: "scene2_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_3_0", audioId: "scene2_3_1" },
    { name: "scene2_3_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_3_1", audioId: "scene2_3_2" },
    { name: "scene2_4_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_3_2", audioId: "scene2_4_0" },
    { name: "scene2_4_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_0", audioId: "scene2_4_1" },
    { name: "scene2_4_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_1", audioId: "scene2_4_2" },
    { name: "scene2_4_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_2", audioId: "scene2_4_3" },
    { name: "scene2_4_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_3", audioId: "scene2_4_4" },
    { name: "scene2_4_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_4", audioId: "scene2_4_5" },
    { name: "scene2_4_6", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_5", audioId: "scene2_4_6" },
    { name: "scene2_4_7", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_6", audioId: "scene2_4_7" },
    { name: "scene2_5_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_4_7", audioId: "scene2_5_0" },
    { name: "scene2_5_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_5_0", audioId: "scene2_5_1" },
    { name: "scene2_5_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene2_5_1", audioId: "scene2_5_2" },
    { name: "scene2_5_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene2_5_2", audioId: "scene2_5_3" },
];

export const calculateScene2Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene2: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene2_1_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_1_0"].startTime, timings["scene2_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene2_2_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_2_0"].startTime, timings["scene2_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene2_3_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_3_0"].startTime, timings["scene2_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene2_4_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_4_0"].startTime, timings["scene2_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene2_5_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene2_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene2_5_0"].startTime, timings["scene2_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene2_1_0"].startTime} durationInFrames={timings["scene2_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>后来伊朗看着眼红了</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene2_1_1"].startTime} durationInFrames={timings["scene2_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>觉得这是一种极度不公平的资源掠夺</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene2_1_2"].startTime} durationInFrames={timings["scene2_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这点燃了伊朗的民族主义情绪</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene2_1_3"].startTime} durationInFrames={timings["scene2_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>促使摩萨台总理在1951年推动并正式通过了《石油国有化法案》</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene2_1_4"].startTime} durationInFrames={timings["scene2_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>强行将这个英伊石油公司收为国有</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene2_2_0"].startTime} durationInFrames={timings["scene2_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>英国对此非常愤怒</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene2_2_1"].startTime} durationInFrames={timings["scene2_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>认为这是单方面撕毁了双方在1933年签署的石油特许权协议</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene2_2_2"].startTime} durationInFrames={timings["scene2_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>是非法的违约行为</div>
                </div>
            </Sequence>

            {/* [2-3] 正文 */}
            <Sequence from={timings["scene2_2_3"].startTime} durationInFrames={timings["scene2_2_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>于是对伊朗实施了严厉的经济制裁和石油禁运</div>
                </div>
            </Sequence>

            {/* [2-4] 正文 */}
            <Sequence from={timings["scene2_2_4"].startTime} durationInFrames={timings["scene2_2_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>军情六处还率先制定了推翻摩萨台的“靴子行动”</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene2_3_0"].startTime} durationInFrames={timings["scene2_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但是，由于局势恶化</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene2_3_1"].startTime} durationInFrames={timings["scene2_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>英国外交官和情报人员随后被驱逐出伊朗</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene2_3_2"].startTime} durationInFrames={timings["scene2_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>导致英国没有力量实施行动</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene2_4_0"].startTime} durationInFrames={timings["scene2_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>于是英国想要拉美国下水，帮他们做这个事情</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene2_4_1"].startTime} durationInFrames={timings["scene2_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>最初美国总统哈里·杜鲁门是拒绝的</div>
                </div>
            </Sequence>

            {/* [4-2] 正文 */}
            <Sequence from={timings["scene2_4_2"].startTime} durationInFrames={timings["scene2_4_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但是德怀特·艾森豪威尔于1953年就任美国总统后</div>
                </div>
            </Sequence>

            {/* [4-3] 正文 */}
            <Sequence from={timings["scene2_4_3"].startTime} durationInFrames={timings["scene2_4_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>当时正值冷战高峰期</div>
                </div>
            </Sequence>

            {/* [4-4] 正文 */}
            <Sequence from={timings["scene2_4_4"].startTime} durationInFrames={timings["scene2_4_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>艾森豪威尔政府认为</div>
                </div>
            </Sequence>

            {/* [4-5] 正文 */}
            <Sequence from={timings["scene2_4_5"].startTime} durationInFrames={timings["scene2_4_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>英国的石油禁运导致伊朗经济濒临崩溃</div>
                </div>
            </Sequence>

            {/* [4-6] 正文 */}
            <Sequence from={timings["scene2_4_6"].startTime} durationInFrames={timings["scene2_4_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这种混乱局面极有可能导致伊朗国内的共产主义政党夺权</div>
                </div>
            </Sequence>

            {/* [4-7] 正文 */}
            <Sequence from={timings["scene2_4_7"].startTime} durationInFrames={timings["scene2_4_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>或者迫使伊朗倒向苏联</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene2_5_0"].startTime} durationInFrames={timings["scene2_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>因此，美国决定介入</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene2_5_1"].startTime} durationInFrames={timings["scene2_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>此时美国介入的核心动机是</div>
                </div>
            </Sequence>

            {/* [5-2] 正文 */}
            <Sequence from={timings["scene2_5_2"].startTime} durationInFrames={timings["scene2_5_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>防止这个中东战略重地落入苏联阵营</div>
                </div>
            </Sequence>

            {/* [5-3] 正文 */}
            <Sequence from={timings["scene2_5_3"].startTime} durationInFrames={timings["scene2_5_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>而不仅仅是为了帮英国抢回石油</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene2_1_0"] && (
                <Sequence from={timings["scene2_1_0"].startTime} durationInFrames={timings["scene2_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_1_1"] && (
                <Sequence from={timings["scene2_1_1"].startTime} durationInFrames={timings["scene2_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_1_2"] && (
                <Sequence from={timings["scene2_1_2"].startTime} durationInFrames={timings["scene2_1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_1_3"] && (
                <Sequence from={timings["scene2_1_3"].startTime} durationInFrames={timings["scene2_1_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_1_4"] && (
                <Sequence from={timings["scene2_1_4"].startTime} durationInFrames={timings["scene2_1_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_0"] && (
                <Sequence from={timings["scene2_2_0"].startTime} durationInFrames={timings["scene2_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_1"] && (
                <Sequence from={timings["scene2_2_1"].startTime} durationInFrames={timings["scene2_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_2"] && (
                <Sequence from={timings["scene2_2_2"].startTime} durationInFrames={timings["scene2_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_3"] && (
                <Sequence from={timings["scene2_2_3"].startTime} durationInFrames={timings["scene2_2_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_2_4"] && (
                <Sequence from={timings["scene2_2_4"].startTime} durationInFrames={timings["scene2_2_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_2_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_0"] && (
                <Sequence from={timings["scene2_3_0"].startTime} durationInFrames={timings["scene2_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_1"] && (
                <Sequence from={timings["scene2_3_1"].startTime} durationInFrames={timings["scene2_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_3_2"] && (
                <Sequence from={timings["scene2_3_2"].startTime} durationInFrames={timings["scene2_3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_0"] && (
                <Sequence from={timings["scene2_4_0"].startTime} durationInFrames={timings["scene2_4_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_1"] && (
                <Sequence from={timings["scene2_4_1"].startTime} durationInFrames={timings["scene2_4_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_2"] && (
                <Sequence from={timings["scene2_4_2"].startTime} durationInFrames={timings["scene2_4_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_3"] && (
                <Sequence from={timings["scene2_4_3"].startTime} durationInFrames={timings["scene2_4_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_4"] && (
                <Sequence from={timings["scene2_4_4"].startTime} durationInFrames={timings["scene2_4_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_5"] && (
                <Sequence from={timings["scene2_4_5"].startTime} durationInFrames={timings["scene2_4_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_6"] && (
                <Sequence from={timings["scene2_4_6"].startTime} durationInFrames={timings["scene2_4_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_4_7"] && (
                <Sequence from={timings["scene2_4_7"].startTime} durationInFrames={timings["scene2_4_7"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_4_7"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_5_0"] && (
                <Sequence from={timings["scene2_5_0"].startTime} durationInFrames={timings["scene2_5_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_5_1"] && (
                <Sequence from={timings["scene2_5_1"].startTime} durationInFrames={timings["scene2_5_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_5_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_5_2"] && (
                <Sequence from={timings["scene2_5_2"].startTime} durationInFrames={timings["scene2_5_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_5_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene2_5_3"] && (
                <Sequence from={timings["scene2_5_3"].startTime} durationInFrames={timings["scene2_5_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene2_5_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
