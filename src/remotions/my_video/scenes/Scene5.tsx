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

// 伊核协议与极限施压
const baseConfigs: AnimationConfig[] = [
    { name: "scene5_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene5_1_0" },
    { name: "scene5_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_0", audioId: "scene5_1_1" },
    { name: "scene5_1_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_1", audioId: "scene5_1_2" },
    { name: "scene5_1_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_2", audioId: "scene5_1_3" },
    { name: "scene5_1_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_3", audioId: "scene5_1_4" },
    { name: "scene5_1_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_4", audioId: "scene5_1_5" },
    { name: "scene5_1_6", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_5", audioId: "scene5_1_6" },
    { name: "scene5_1_7", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_6", audioId: "scene5_1_7" },
    { name: "scene5_1_8", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_7", audioId: "scene5_1_8" },
    { name: "scene5_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1_8", audioId: "scene5_2_0" },
    { name: "scene5_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_2_0", audioId: "scene5_2_1" },
    { name: "scene5_2_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene5_2_1", audioId: "scene5_2_2" },
];

export const calculateScene5Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene5: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #0c1821 0%, #1b3a4b 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene5_1_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene5_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_1_0"].startTime, timings["scene5_1_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene5_2_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene5_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_2_0"].startTime, timings["scene5_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene5_1_0"].startTime} durationInFrames={timings["scene5_1_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>尽管在2013年至2018年间</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene5_1_1"].startTime} durationInFrames={timings["scene5_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>国际社会与伊朗达成了《伊核协议》</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene5_1_2"].startTime} durationInFrames={timings["scene5_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但此协议之下并没有限制伊朗发展可能对美国产生威胁的弹道导弹</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene5_1_3"].startTime} durationInFrames={timings["scene5_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>而且伊朗的铀浓缩进程并没有停止</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene5_1_4"].startTime} durationInFrames={timings["scene5_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这导致了2018年美国特朗普政府单方面退出该协议</div>
                </div>
            </Sequence>

            {/* [1-5] 正文 */}
            <Sequence from={timings["scene5_1_5"].startTime} durationInFrames={timings["scene5_1_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>并实施了旨在扼杀伊朗经济的“极限施压”政策</div>
                </div>
            </Sequence>

            {/* [1-6] 正文 */}
            <Sequence from={timings["scene5_1_6"].startTime} durationInFrames={timings["scene5_1_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>希望以此来威胁重新签署一份对伊朗武器限制更大的协议</div>
                </div>
            </Sequence>

            {/* [1-7] 正文 */}
            <Sequence from={timings["scene5_1_7"].startTime} durationInFrames={timings["scene5_1_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但是伊朗也是破罐子破摔</div>
                </div>
            </Sequence>

            {/* [1-8] 正文 */}
            <Sequence from={timings["scene5_1_8"].startTime} durationInFrames={timings["scene5_1_8"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>开始明目张胆的进行高丰度铀浓缩活动</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene5_2_0"].startTime} durationInFrames={timings["scene5_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2020年1月3日</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene5_2_1"].startTime} durationInFrames={timings["scene5_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美军在巴格达机场用无人机</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene5_2_2"].startTime} durationInFrames={timings["scene5_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>暗杀了被定性为恐怖组织“圣城旅”的伊朗指挥官苏莱曼尼</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene5_1_0"] && (
                <Sequence from={timings["scene5_1_0"].startTime} durationInFrames={timings["scene5_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_1"] && (
                <Sequence from={timings["scene5_1_1"].startTime} durationInFrames={timings["scene5_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_2"] && (
                <Sequence from={timings["scene5_1_2"].startTime} durationInFrames={timings["scene5_1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_3"] && (
                <Sequence from={timings["scene5_1_3"].startTime} durationInFrames={timings["scene5_1_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_4"] && (
                <Sequence from={timings["scene5_1_4"].startTime} durationInFrames={timings["scene5_1_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_5"] && (
                <Sequence from={timings["scene5_1_5"].startTime} durationInFrames={timings["scene5_1_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_6"] && (
                <Sequence from={timings["scene5_1_6"].startTime} durationInFrames={timings["scene5_1_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_7"] && (
                <Sequence from={timings["scene5_1_7"].startTime} durationInFrames={timings["scene5_1_7"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_7"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_1_8"] && (
                <Sequence from={timings["scene5_1_8"].startTime} durationInFrames={timings["scene5_1_8"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1_8"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_2_0"] && (
                <Sequence from={timings["scene5_2_0"].startTime} durationInFrames={timings["scene5_2_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_2_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_2_1"] && (
                <Sequence from={timings["scene5_2_1"].startTime} durationInFrames={timings["scene5_2_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_2_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_2_2"] && (
                <Sequence from={timings["scene5_2_2"].startTime} durationInFrames={timings["scene5_2_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_2_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
