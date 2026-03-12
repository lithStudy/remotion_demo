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

// 阿贾克斯行动与伊斯兰革命
const baseConfigs: AnimationConfig[] = [
    { name: "scene3_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene3_1_0" },
    { name: "scene3_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_0", audioId: "scene3_1_1" },
    { name: "scene3_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_1_1", audioId: "scene3_2_0" },
    { name: "scene3_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_0", audioId: "scene3_2_1" },
    { name: "scene3_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_1", audioId: "scene3_2_2" },
    { name: "scene3_2_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_2", audioId: "scene3_2_3" },
    { name: "scene3_2_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_3", audioId: "scene3_2_4" },
    { name: "scene3_2_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_4", audioId: "scene3_2_5" },
    { name: "scene3_2_6", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_5", audioId: "scene3_2_6" },
    { name: "scene3_2_7", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_6", audioId: "scene3_2_7" },
    { name: "scene3_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_2_7", audioId: "scene3_3_0" },
    { name: "scene3_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_0", audioId: "scene3_3_1" },
    { name: "scene3_3_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_1", audioId: "scene3_3_2" },
    { name: "scene3_3_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_2", audioId: "scene3_3_3" },
    { name: "scene3_3_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_3", audioId: "scene3_3_4" },
    { name: "scene3_3_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene3_3_4", audioId: "scene3_3_5" },
    { name: "scene3_3_6", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene3_3_5", audioId: "scene3_3_6" },
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
                    src={staticFile("images/my_video/scene3_1.png")}
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
                    src={staticFile("images/my_video/scene3_2.png")}
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
                    src={staticFile("images/my_video/scene3_3.png")}
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>于是在1953年美国策划并参与了推翻伊朗民选总理穆罕默德·摩萨台的“阿贾克斯行动”</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene3_1_1"].startTime} durationInFrames={timings["scene3_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>扶持了亲美但独裁的“巴列维国王”上台</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene3_2_0"].startTime} durationInFrames={timings["scene3_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>巴列维国王在伊朗搞高压统治</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene3_2_1"].startTime} durationInFrames={timings["scene3_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>虽然经济搞好了</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene3_2_2"].startTime} durationInFrames={timings["scene3_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但是没有政治自由</div>
                </div>
            </Sequence>

            {/* [2-3] 正文 */}
            <Sequence from={timings["scene3_2_3"].startTime} durationInFrames={timings["scene3_2_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>他亲手教会伊朗人民什么是民主</div>
                </div>
            </Sequence>

            {/* [2-4] 正文 */}
            <Sequence from={timings["scene3_2_4"].startTime} durationInFrames={timings["scene3_2_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但是自己却舍不得权利而搞君主专制</div>
                </div>
            </Sequence>

            {/* [2-5] 正文 */}
            <Sequence from={timings["scene3_2_5"].startTime} durationInFrames={timings["scene3_2_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这种催发民智但又不放权的操作</div>
                </div>
            </Sequence>

            {/* [2-6] 正文 */}
            <Sequence from={timings["scene3_2_6"].startTime} durationInFrames={timings["scene3_2_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>导致了伊朗于1979年爆发了“伊斯兰革命”推翻了国王</div>
                </div>
            </Sequence>

            {/* [2-7] 正文 */}
            <Sequence from={timings["scene3_2_7"].startTime} durationInFrames={timings["scene3_2_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>建立了反美的政教合一的伊斯兰共和国</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene3_3_0"].startTime} durationInFrames={timings["scene3_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>同年11月美国收留了流亡的国王治病</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene3_3_1"].startTime} durationInFrames={timings["scene3_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这彻底激怒了伊朗的激进学生</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene3_3_2"].startTime} durationInFrames={timings["scene3_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>他们冲进美国驻德黑兰大使馆</div>
                </div>
            </Sequence>

            {/* [3-3] 正文 */}
            <Sequence from={timings["scene3_3_3"].startTime} durationInFrames={timings["scene3_3_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>把52名美国外交官蒙上眼睛扣作人质</div>
                </div>
            </Sequence>

            {/* [3-4] 正文 */}
            <Sequence from={timings["scene3_3_4"].startTime} durationInFrames={timings["scene3_3_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>整整关了444天</div>
                </div>
            </Sequence>

            {/* [3-5] 正文 */}
            <Sequence from={timings["scene3_3_5"].startTime} durationInFrames={timings["scene3_3_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>从这一天起，两国正式断交</div>
                </div>
            </Sequence>

            {/* [3-6] 正文 */}
            <Sequence from={timings["scene3_3_6"].startTime} durationInFrames={timings["scene3_3_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美国人眼里也从此把伊朗看作了“狂热的恐怖国家”</div>
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

            {audioMap["scene3_2_5"] && (
                <Sequence from={timings["scene3_2_5"].startTime} durationInFrames={timings["scene3_2_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_6"] && (
                <Sequence from={timings["scene3_2_6"].startTime} durationInFrames={timings["scene3_2_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2_7"] && (
                <Sequence from={timings["scene3_2_7"].startTime} durationInFrames={timings["scene3_2_7"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2_7"].file)} />
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

            {audioMap["scene3_3_2"] && (
                <Sequence from={timings["scene3_3_2"].startTime} durationInFrames={timings["scene3_3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_3"] && (
                <Sequence from={timings["scene3_3_3"].startTime} durationInFrames={timings["scene3_3_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_4"] && (
                <Sequence from={timings["scene3_3_4"].startTime} durationInFrames={timings["scene3_3_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_5"] && (
                <Sequence from={timings["scene3_3_5"].startTime} durationInFrames={timings["scene3_3_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_3_6"] && (
                <Sequence from={timings["scene3_3_6"].startTime} durationInFrames={timings["scene3_3_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_3_6"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
