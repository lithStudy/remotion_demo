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

// 史诗狂怒
const baseConfigs: AnimationConfig[] = [
    { name: "scene7_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene7_1_0" },
    { name: "scene7_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_0", audioId: "scene7_1_1" },
    { name: "scene7_1_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_1", audioId: "scene7_1_2" },
    { name: "scene7_1_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_2", audioId: "scene7_1_3" },
    { name: "scene7_1_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_3", audioId: "scene7_1_4" },
    { name: "scene7_1_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_4", audioId: "scene7_1_5" },
    { name: "scene7_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1_5", audioId: "scene7_2_0" },
    { name: "scene7_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_0", audioId: "scene7_2_1" },
    { name: "scene7_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_1", audioId: "scene7_2_2" },
    { name: "scene7_2_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_2", audioId: "scene7_2_3" },
    { name: "scene7_2_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_3", audioId: "scene7_2_4" },
    { name: "scene7_2_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_4", audioId: "scene7_2_5" },
    { name: "scene7_2_6", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_5", audioId: "scene7_2_6" },
    { name: "scene7_2_7", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_6", audioId: "scene7_2_7" },
    { name: "scene7_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_2_7", audioId: "scene7_3_0" },
    { name: "scene7_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_3_0", audioId: "scene7_3_1" },
    { name: "scene7_3_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_3_1", audioId: "scene7_3_2" },
    { name: "scene7_3_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene7_3_2", audioId: "scene7_3_3" },
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
                    src={staticFile("images/my_video/scene7_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_1_0"].startTime, timings["scene7_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene7_2_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene7_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_2_0"].startTime, timings["scene7_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene7_3_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene7_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_3_0"].startTime, timings["scene7_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2026年1月</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene7_1_1"].startTime} durationInFrames={timings["scene7_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>因为财富的分配问题和制裁导致的经济问题</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene7_1_2"].startTime} durationInFrames={timings["scene7_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>德黑兰市中心两大主要市场爆发大规模抗议活动</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene7_1_3"].startTime} durationInFrames={timings["scene7_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>哈梅内伊下达了血腥镇压的指令</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene7_1_4"].startTime} durationInFrames={timings["scene7_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>导致数以千计的平民死亡</div>
                </div>
            </Sequence>

            {/* [1-5] 正文 */}
            <Sequence from={timings["scene7_1_5"].startTime} durationInFrames={timings["scene7_1_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>并实施了大规模的任意逮捕和强迫失踪</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene7_2_0"].startTime} durationInFrames={timings["scene7_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伊朗国内的动荡与政权的脆弱状态</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene7_2_1"].startTime} durationInFrames={timings["scene7_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>被美国和以色列视为不可多得的战略窗口期</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene7_2_2"].startTime} durationInFrames={timings["scene7_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2026年1月</div>
                </div>
            </Sequence>

            {/* [2-3] 正文 */}
            <Sequence from={timings["scene7_2_3"].startTime} durationInFrames={timings["scene7_2_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>特朗普开始在社交媒体上公开发表支持伊朗抗议者的言论</div>
                </div>
            </Sequence>

            {/* [2-4] 正文 */}
            <Sequence from={timings["scene7_2_4"].startTime} durationInFrames={timings["scene7_2_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>并警告如果伊朗政府屠杀和平抗议者</div>
                </div>
            </Sequence>

            {/* [2-5] 正文 */}
            <Sequence from={timings["scene7_2_5"].startTime} durationInFrames={timings["scene7_2_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美军将采取“子弹上膛”的军事干预</div>
                </div>
            </Sequence>

            {/* [2-6] 正文 */}
            <Sequence from={timings["scene7_2_6"].startTime} durationInFrames={timings["scene7_2_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这是一种战争前的宣言</div>
                </div>
            </Sequence>

            {/* [2-7] 正文 */}
            <Sequence from={timings["scene7_2_7"].startTime} durationInFrames={timings["scene7_2_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但也是发动战争的正当性的宣告</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene7_3_0"].startTime} durationInFrames={timings["scene7_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2026年2月28日美国正式发动“史诗狂怒”行动</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene7_3_1"].startTime} durationInFrames={timings["scene7_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>其目的主要有两个：</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene7_3_2"].startTime} durationInFrames={timings["scene7_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>1.彻底解除伊朗核武装与消灭弹道导弹工业以消除伊朗对美国的武力威胁；</div>
                </div>
            </Sequence>

            {/* [3-3] 正文 */}
            <Sequence from={timings["scene7_3_3"].startTime} durationInFrames={timings["scene7_3_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2. 借力打力：实现“敌视美国的政权更迭”的最高隐性目标，彻底解除后顾之忧</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene7_1_0"] && (
                <Sequence from={timings["scene7_1_0"].startTime} durationInFrames={timings["scene7_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_1"] && (
                <Sequence from={timings["scene7_1_1"].startTime} durationInFrames={timings["scene7_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_2"] && (
                <Sequence from={timings["scene7_1_2"].startTime} durationInFrames={timings["scene7_1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_3"] && (
                <Sequence from={timings["scene7_1_3"].startTime} durationInFrames={timings["scene7_1_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_4"] && (
                <Sequence from={timings["scene7_1_4"].startTime} durationInFrames={timings["scene7_1_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_1_5"] && (
                <Sequence from={timings["scene7_1_5"].startTime} durationInFrames={timings["scene7_1_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_0"] && (
                <Sequence from={timings["scene7_2_0"].startTime} durationInFrames={timings["scene7_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_1"] && (
                <Sequence from={timings["scene7_2_1"].startTime} durationInFrames={timings["scene7_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_2"] && (
                <Sequence from={timings["scene7_2_2"].startTime} durationInFrames={timings["scene7_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_3"] && (
                <Sequence from={timings["scene7_2_3"].startTime} durationInFrames={timings["scene7_2_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_4"] && (
                <Sequence from={timings["scene7_2_4"].startTime} durationInFrames={timings["scene7_2_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_5"] && (
                <Sequence from={timings["scene7_2_5"].startTime} durationInFrames={timings["scene7_2_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_6"] && (
                <Sequence from={timings["scene7_2_6"].startTime} durationInFrames={timings["scene7_2_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2_7"] && (
                <Sequence from={timings["scene7_2_7"].startTime} durationInFrames={timings["scene7_2_7"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2_7"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_3_0"] && (
                <Sequence from={timings["scene7_3_0"].startTime} durationInFrames={timings["scene7_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_3_1"] && (
                <Sequence from={timings["scene7_3_1"].startTime} durationInFrames={timings["scene7_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_3_2"] && (
                <Sequence from={timings["scene7_3_2"].startTime} durationInFrames={timings["scene7_3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_3_3"] && (
                <Sequence from={timings["scene7_3_3"].startTime} durationInFrames={timings["scene7_3_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_3_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
