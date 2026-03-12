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

// 两伊战争与持续的制裁
const baseConfigs: AnimationConfig[] = [
    { name: "scene4_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene4_1_0" },
    { name: "scene4_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_0", audioId: "scene4_1_1" },
    { name: "scene4_1_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_1", audioId: "scene4_1_2" },
    { name: "scene4_1_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_2", audioId: "scene4_1_3" },
    { name: "scene4_1_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_3", audioId: "scene4_1_4" },
    { name: "scene4_1_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_4", audioId: "scene4_1_5" },
    { name: "scene4_1_6", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_5", audioId: "scene4_1_6" },
    { name: "scene4_1_7", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_6", audioId: "scene4_1_7" },
    { name: "scene4_1_8", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_7", audioId: "scene4_1_8" },
    { name: "scene4_1_9", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_8", audioId: "scene4_1_9" },
    { name: "scene4_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_9", audioId: "scene4_2_0" },
    { name: "scene4_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_0", audioId: "scene4_2_1" },
    { name: "scene4_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_1", audioId: "scene4_2_2" },
    { name: "scene4_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_2", audioId: "scene4_3_0" },
    { name: "scene4_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene4_3_0", audioId: "scene4_3_1" },
    { name: "scene4_3_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene4_3_1", audioId: "scene4_3_2" },
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
                    src={staticFile("images/my_video/scene4_1.png")}
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
                    src={staticFile("images/my_video/scene4_2.png")}
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
                    src={staticFile("images/my_video/scene4_3.png")}
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>两国结仇后</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene4_1_1"].startTime} durationInFrames={timings["scene4_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>虽然美国没有实际对伊朗发动战争</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene4_1_2"].startTime} durationInFrames={timings["scene4_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但在1980年爆发的“两伊战争”中</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene4_1_3"].startTime} durationInFrames={timings["scene4_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美国选择暗中支持当时关系还不错的伊拉克的萨达姆去打伊朗</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene4_1_4"].startTime} durationInFrames={timings["scene4_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>最严重的是1988年7月3日</div>
                </div>
            </Sequence>

            {/* [1-5] 正文 */}
            <Sequence from={timings["scene4_1_5"].startTime} durationInFrames={timings["scene4_1_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美国海军“文森斯”号巡洋舰</div>
                </div>
            </Sequence>

            {/* [1-6] 正文 */}
            <Sequence from={timings["scene4_1_6"].startTime} durationInFrames={timings["scene4_1_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>因为将客机误判为伊朗战斗机将其击落</div>
                </div>
            </Sequence>

            {/* [1-7] 正文 */}
            <Sequence from={timings["scene4_1_7"].startTime} durationInFrames={timings["scene4_1_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>导致了290名平民遇难</div>
                </div>
            </Sequence>

            {/* [1-8] 正文 */}
            <Sequence from={timings["scene4_1_8"].startTime} durationInFrames={timings["scene4_1_8"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但在伊朗看来，这就是故意的</div>
                </div>
            </Sequence>

            {/* [1-9] 正文 */}
            <Sequence from={timings["scene4_1_9"].startTime} durationInFrames={timings["scene4_1_9"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这是血海深仇</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene4_2_0"].startTime} durationInFrames={timings["scene4_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>进入1990年代</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene4_2_1"].startTime} durationInFrames={timings["scene4_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>克林顿政府开始对伊朗实施全面经济制裁</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene4_2_2"].startTime} durationInFrames={timings["scene4_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这让本来因为革命卫队垄断财富而民不聊生的伊朗人民更加雪上加霜</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene4_3_0"].startTime} durationInFrames={timings["scene4_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2002年，伊朗反对派组织曝光了伊朗正在秘密进行核试验</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene4_3_1"].startTime} durationInFrames={timings["scene4_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这让美国感觉到了威胁</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene4_3_2"].startTime} durationInFrames={timings["scene4_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>彻底断绝了任何和解的可能</div>
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

            {audioMap["scene4_1_2"] && (
                <Sequence from={timings["scene4_1_2"].startTime} durationInFrames={timings["scene4_1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_3"] && (
                <Sequence from={timings["scene4_1_3"].startTime} durationInFrames={timings["scene4_1_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_4"] && (
                <Sequence from={timings["scene4_1_4"].startTime} durationInFrames={timings["scene4_1_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_5"] && (
                <Sequence from={timings["scene4_1_5"].startTime} durationInFrames={timings["scene4_1_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_6"] && (
                <Sequence from={timings["scene4_1_6"].startTime} durationInFrames={timings["scene4_1_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_7"] && (
                <Sequence from={timings["scene4_1_7"].startTime} durationInFrames={timings["scene4_1_7"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_7"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_8"] && (
                <Sequence from={timings["scene4_1_8"].startTime} durationInFrames={timings["scene4_1_8"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_8"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_1_9"] && (
                <Sequence from={timings["scene4_1_9"].startTime} durationInFrames={timings["scene4_1_9"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1_9"].file)} />
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

            {audioMap["scene4_3_1"] && (
                <Sequence from={timings["scene4_3_1"].startTime} durationInFrames={timings["scene4_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_3_2"] && (
                <Sequence from={timings["scene4_3_2"].startTime} durationInFrames={timings["scene4_3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_3_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
