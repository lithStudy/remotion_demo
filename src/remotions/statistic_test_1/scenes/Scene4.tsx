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

// 案例三：相亲与“割韭菜”
const baseConfigs: AnimationConfig[] = [
    { name: "scene4_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene4_1_0" },
    { name: "scene4_2_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_1_0", audioId: "scene4_2_0" },
    { name: "scene4_2_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_0", audioId: "scene4_2_1" },
    { name: "scene4_3_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_2_1", audioId: "scene4_3_0" },
    { name: "scene4_3_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_3_0", audioId: "scene4_3_1" },
    { name: "scene4_3_2", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_3_1", audioId: "scene4_3_2" },
    { name: "scene4_4_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_3_2", audioId: "scene4_4_0" },
    { name: "scene4_4_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_4_0", audioId: "scene4_4_1" },
    { name: "scene4_5_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_4_1", audioId: "scene4_5_0" },
    { name: "scene4_5_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_5_0", audioId: "scene4_5_1" },
    { name: "scene4_6_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_5_1", audioId: "scene4_6_0" },
    { name: "scene4_6_1", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_6_0", audioId: "scene4_6_1" },
    { name: "scene4_7_0", delayBefore: 0, delayAfter: 0, durationInFrames: 60, preName: "scene4_6_1", audioId: "scene4_7_0" },
    { name: "scene4_7_1", delayBefore: 0, delayAfter: 20, durationInFrames: 60, preName: "scene4_7_0", audioId: "scene4_7_1" },
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
                    src={staticFile("images/statistic_test_1/scene4_1.png")}
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
                    src={staticFile("images/statistic_test_1/scene4_2.png")}
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
                    src={staticFile("images/statistic_test_1/scene4_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_3_0"].startTime, timings["scene4_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene4_4_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene4_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_4_0"].startTime, timings["scene4_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene4_5_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene4_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_5_0"].startTime, timings["scene4_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [6] */}
            <Sequence from={timings["scene4_6_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene4_6.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_6_0"].startTime, timings["scene4_6_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [7] */}
            <Sequence from={timings["scene4_7_0"].startTime}>
                <Img
                    src={staticFile("images/statistic_test_1/scene4_7.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_7_0"].startTime, timings["scene4_7_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>要是分不清这两者的区别，现实中可是要吃大亏的。</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene4_2_0"].startTime} durationInFrames={timings["scene4_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>比如相亲时，</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene4_2_1"].startTime} durationInFrames={timings["scene4_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>看到对方穿一身名牌，就觉得他事业有成。</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene4_3_0"].startTime} durationInFrames={timings["scene4_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>其实，</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene4_3_1"].startTime} durationInFrames={timings["scene4_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>那身西装可能只是他为了掩盖负债，</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene4_3_2"].startTime} durationInFrames={timings["scene4_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>花两百块租来的道具。</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene4_4_0"].startTime} durationInFrames={timings["scene4_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这种逻辑错位，</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene4_4_1"].startTime} durationInFrames={timings["scene4_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>正是那些“割韭菜大师”最核心的财富密码。</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene4_5_0"].startTime} durationInFrames={timings["scene4_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>他们天天在朋友圈晒豪车、名表，</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene4_5_1"].startTime} durationInFrames={timings["scene4_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>暗示你只要买他的课，也能过上这种生活。</div>
                </div>
            </Sequence>

            {/* [6-0] 正文 */}
            <Sequence from={timings["scene4_6_0"].startTime} durationInFrames={timings["scene4_6_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>但真相往往是：</div>
                </div>
            </Sequence>

            {/* [6-1] 正文 */}
            <Sequence from={timings["scene4_6_1"].startTime} durationInFrames={timings["scene4_6_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>正因为你交了高昂的学费，他才买得起那辆豪车。</div>
                </div>
            </Sequence>

            {/* [7-0] 正文 */}
            <Sequence from={timings["scene4_7_0"].startTime} durationInFrames={timings["scene4_7_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>他把你被掏空钱包的“果”，</div>
                </div>
            </Sequence>

            {/* [7-1] 正文 */}
            <Sequence from={timings["scene4_7_1"].startTime} durationInFrames={timings["scene4_7_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伪装成了带你赚钱的“因”。</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene4_1_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_1_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_1_0"].file)} />
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

            {audioMap["scene4_4_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_4_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_4_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_4_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_5_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_5_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_5_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_5_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_5_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_6_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_6_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_6_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_6_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_6_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_6_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_7_0"]?.isFirstInItem && (
                <Sequence from={timings["scene4_7_0"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_7_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene4_7_1"]?.isFirstInItem && (
                <Sequence from={timings["scene4_7_1"].startTime}>
                    <Audio src={staticFile(audioMap["scene4_7_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
