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

// 逼近战争边缘
const baseConfigs: AnimationConfig[] = [
    { name: "scene6_1_0", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene6_1_0" },
    { name: "scene6_1_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_0", audioId: "scene6_1_1" },
    { name: "scene6_1_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_1", audioId: "scene6_1_2" },
    { name: "scene6_1_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_2", audioId: "scene6_1_3" },
    { name: "scene6_1_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_3", audioId: "scene6_1_4" },
    { name: "scene6_1_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_4", audioId: "scene6_1_5" },
    { name: "scene6_1_6", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_5", audioId: "scene6_1_6" },
    { name: "scene6_1_7", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_6", audioId: "scene6_1_7" },
    { name: "scene6_1_8", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_7", audioId: "scene6_1_8" },
    { name: "scene6_2_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1_8", audioId: "scene6_2_0" },
    { name: "scene6_2_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_2_0", audioId: "scene6_2_1" },
    { name: "scene6_2_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_2_1", audioId: "scene6_2_2" },
    { name: "scene6_3_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_2_2", audioId: "scene6_3_0" },
    { name: "scene6_3_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_0", audioId: "scene6_3_1" },
    { name: "scene6_3_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_1", audioId: "scene6_3_2" },
    { name: "scene6_3_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_2", audioId: "scene6_3_3" },
    { name: "scene6_3_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_3", audioId: "scene6_3_4" },
    { name: "scene6_3_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_4", audioId: "scene6_3_5" },
    { name: "scene6_4_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_3_5", audioId: "scene6_4_0" },
    { name: "scene6_4_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_4_0", audioId: "scene6_4_1" },
    { name: "scene6_4_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_4_1", audioId: "scene6_4_2" },
    { name: "scene6_4_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_4_2", audioId: "scene6_4_3" },
    { name: "scene6_4_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_4_3", audioId: "scene6_4_4" },
    { name: "scene6_5_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_4_4", audioId: "scene6_5_0" },
    { name: "scene6_5_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_5_0", audioId: "scene6_5_1" },
    { name: "scene6_5_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_5_1", audioId: "scene6_5_2" },
    { name: "scene6_5_3", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_5_2", audioId: "scene6_5_3" },
    { name: "scene6_5_4", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_5_3", audioId: "scene6_5_4" },
    { name: "scene6_5_5", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_5_4", audioId: "scene6_5_5" },
    { name: "scene6_6_0", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_5_5", audioId: "scene6_6_0" },
    { name: "scene6_6_1", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_6_0", audioId: "scene6_6_1" },
    { name: "scene6_6_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene6_6_1", audioId: "scene6_6_2" },
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
                    src={staticFile("images/my_video/scene6_1.png")}
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
                    src={staticFile("images/my_video/scene6_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_2_0"].startTime, timings["scene6_2_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene6_3_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_3_0"].startTime, timings["scene6_3_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [4] */}
            <Sequence from={timings["scene6_4_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_4.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_4_0"].startTime, timings["scene6_4_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [5] */}
            <Sequence from={timings["scene6_5_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_5.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_5_0"].startTime, timings["scene6_5_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [6] */}
            <Sequence from={timings["scene6_6_0"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_6.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_6_0"].startTime, timings["scene6_6_0"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>至2025年中期</div>
                </div>
            </Sequence>

            {/* [1-1] 正文 */}
            <Sequence from={timings["scene6_1_1"].startTime} durationInFrames={timings["scene6_1_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美国情报部门和国际原子能机构的评估显示</div>
                </div>
            </Sequence>

            {/* [1-2] 正文 */}
            <Sequence from={timings["scene6_1_2"].startTime} durationInFrames={timings["scene6_1_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伊朗的核计划已经越过了危险的临界点</div>
                </div>
            </Sequence>

            {/* [1-3] 正文 */}
            <Sequence from={timings["scene6_1_3"].startTime} durationInFrames={timings["scene6_1_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>经过数年的不受限发展</div>
                </div>
            </Sequence>

            {/* [1-4] 正文 */}
            <Sequence from={timings["scene6_1_4"].startTime} durationInFrames={timings["scene6_1_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伊朗已积累了超过440公斤丰度为60%的高浓缩铀）</div>
                </div>
            </Sequence>

            {/* [1-5] 正文 */}
            <Sequence from={timings["scene6_1_5"].startTime} durationInFrames={timings["scene6_1_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>在核物理学与浓缩技术层面上</div>
                </div>
            </Sequence>

            {/* [1-6] 正文 */}
            <Sequence from={timings["scene6_1_6"].startTime} durationInFrames={timings["scene6_1_6"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>一旦铀浓缩丰度达到60%</div>
                </div>
            </Sequence>

            {/* [1-7] 正文 */}
            <Sequence from={timings["scene6_1_7"].startTime} durationInFrames={timings["scene6_1_7"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>将其进一步浓缩至可用于制造紧凑型核弹头的90%武器级丰度</div>
                </div>
            </Sequence>

            {/* [1-8] 正文 */}
            <Sequence from={timings["scene6_1_8"].startTime} durationInFrames={timings["scene6_1_8"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>在技术上是一个相对容易且迅速的步骤</div>
                </div>
            </Sequence>

            {/* [2-0] 正文 */}
            <Sequence from={timings["scene6_2_0"].startTime} durationInFrames={timings["scene6_2_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>据美国国防情报局在2025年5月的评估</div>
                </div>
            </Sequence>

            {/* [2-1] 正文 */}
            <Sequence from={timings["scene6_2_1"].startTime} durationInFrames={timings["scene6_2_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伊朗生产足够制造一枚核武器的裂变材料的“突破时间”</div>
                </div>
            </Sequence>

            {/* [2-2] 正文 */}
            <Sequence from={timings["scene6_2_2"].startTime} durationInFrames={timings["scene6_2_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>可能已经缩短至“不到一周”</div>
                </div>
            </Sequence>

            {/* [3-0] 正文 */}
            <Sequence from={timings["scene6_3_0"].startTime} durationInFrames={timings["scene6_3_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>面对这一极度紧迫的威胁</div>
                </div>
            </Sequence>

            {/* [3-1] 正文 */}
            <Sequence from={timings["scene6_3_1"].startTime} durationInFrames={timings["scene6_3_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>2025年6月12日</div>
                </div>
            </Sequence>

            {/* [3-2] 正文 */}
            <Sequence from={timings["scene6_3_2"].startTime} durationInFrames={timings["scene6_3_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>国际原子能机构理事会正式裁定伊朗未能履行其核不扩散义务</div>
                </div>
            </Sequence>

            {/* [3-3] 正文 */}
            <Sequence from={timings["scene6_3_3"].startTime} durationInFrames={timings["scene6_3_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伊朗随后强硬回应</div>
                </div>
            </Sequence>

            {/* [3-4] 正文 */}
            <Sequence from={timings["scene6_3_4"].startTime} durationInFrames={timings["scene6_3_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>宣布已建成并即将启动第三个核浓缩设施</div>
                </div>
            </Sequence>

            {/* [3-5] 正文 */}
            <Sequence from={timings["scene6_3_5"].startTime} durationInFrames={timings["scene6_3_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>并大幅限制了国际核查人员的权限</div>
                </div>
            </Sequence>

            {/* [4-0] 正文 */}
            <Sequence from={timings["scene6_4_0"].startTime} durationInFrames={timings["scene6_4_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>次日（6月13日）</div>
                </div>
            </Sequence>

            {/* [4-1] 正文 */}
            <Sequence from={timings["scene6_4_1"].startTime} durationInFrames={timings["scene6_4_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>以色列率先对伊朗发动了全面战争</div>
                </div>
            </Sequence>

            {/* [4-2] 正文 */}
            <Sequence from={timings["scene6_4_2"].startTime} durationInFrames={timings["scene6_4_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>在接下来的12天内</div>
                </div>
            </Sequence>

            {/* [4-3] 正文 */}
            <Sequence from={timings["scene6_4_3"].startTime} durationInFrames={timings["scene6_4_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>对伊朗27个省的150多个地点的核设施与军事目标</div>
                </div>
            </Sequence>

            {/* [4-4] 正文 */}
            <Sequence from={timings["scene6_4_4"].startTime} durationInFrames={timings["scene6_4_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>进行了广泛的空中打击</div>
                </div>
            </Sequence>

            {/* [5-0] 正文 */}
            <Sequence from={timings["scene6_5_0"].startTime} durationInFrames={timings["scene6_5_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>6月22日，美国直接介入了这场冲突</div>
                </div>
            </Sequence>

            {/* [5-1] 正文 */}
            <Sequence from={timings["scene6_5_1"].startTime} durationInFrames={timings["scene6_5_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>执行了代号为“午夜之锤”的军事行动</div>
                </div>
            </Sequence>

            {/* [5-2] 正文 */}
            <Sequence from={timings["scene6_5_2"].startTime} durationInFrames={timings["scene6_5_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美军重点使用了钻地弹</div>
                </div>
            </Sequence>

            {/* [5-3] 正文 */}
            <Sequence from={timings["scene6_5_3"].startTime} durationInFrames={timings["scene6_5_3"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>对纳坦兹、福尔多和伊斯法罕的地下核设施进行了毁灭性打击 </div>
                </div>
            </Sequence>

            {/* [5-4] 正文 */}
            <Sequence from={timings["scene6_5_4"].startTime} durationInFrames={timings["scene6_5_4"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>作为报复</div>
                </div>
            </Sequence>

            {/* [5-5] 正文 */}
            <Sequence from={timings["scene6_5_5"].startTime} durationInFrames={timings["scene6_5_5"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>伊朗向驻扎有美军的卡塔尔乌代德空军基地发射了导弹</div>
                </div>
            </Sequence>

            {/* [6-0] 正文 */}
            <Sequence from={timings["scene6_6_0"].startTime} durationInFrames={timings["scene6_6_0"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>这一系列历史事件表明</div>
                </div>
            </Sequence>

            {/* [6-1] 正文 */}
            <Sequence from={timings["scene6_6_1"].startTime} durationInFrames={timings["scene6_6_1"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>美伊两国在长达半个世纪的博弈中</div>
                </div>
            </Sequence>

            {/* [6-2] 正文 */}
            <Sequence from={timings["scene6_6_2"].startTime} durationInFrames={timings["scene6_6_2"].durationInFrames}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "100%", fontSize: 40, fontWeight: 600, color: "rgba(255,255,255,0.95)", textAlign: "center" as const, lineHeight: 1.4 }}>均认为对方构成了生存性威胁</div>
                </div>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene6_1_0"] && (
                <Sequence from={timings["scene6_1_0"].startTime} durationInFrames={timings["scene6_1_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_1"] && (
                <Sequence from={timings["scene6_1_1"].startTime} durationInFrames={timings["scene6_1_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_2"] && (
                <Sequence from={timings["scene6_1_2"].startTime} durationInFrames={timings["scene6_1_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_3"] && (
                <Sequence from={timings["scene6_1_3"].startTime} durationInFrames={timings["scene6_1_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_4"] && (
                <Sequence from={timings["scene6_1_4"].startTime} durationInFrames={timings["scene6_1_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_5"] && (
                <Sequence from={timings["scene6_1_5"].startTime} durationInFrames={timings["scene6_1_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_6"] && (
                <Sequence from={timings["scene6_1_6"].startTime} durationInFrames={timings["scene6_1_6"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_6"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_7"] && (
                <Sequence from={timings["scene6_1_7"].startTime} durationInFrames={timings["scene6_1_7"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_7"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_1_8"] && (
                <Sequence from={timings["scene6_1_8"].startTime} durationInFrames={timings["scene6_1_8"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1_8"].file)} />
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

            {audioMap["scene6_3_0"] && (
                <Sequence from={timings["scene6_3_0"].startTime} durationInFrames={timings["scene6_3_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_1"] && (
                <Sequence from={timings["scene6_3_1"].startTime} durationInFrames={timings["scene6_3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_2"] && (
                <Sequence from={timings["scene6_3_2"].startTime} durationInFrames={timings["scene6_3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_3"] && (
                <Sequence from={timings["scene6_3_3"].startTime} durationInFrames={timings["scene6_3_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_4"] && (
                <Sequence from={timings["scene6_3_4"].startTime} durationInFrames={timings["scene6_3_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3_5"] && (
                <Sequence from={timings["scene6_3_5"].startTime} durationInFrames={timings["scene6_3_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_0"] && (
                <Sequence from={timings["scene6_4_0"].startTime} durationInFrames={timings["scene6_4_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_4_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_1"] && (
                <Sequence from={timings["scene6_4_1"].startTime} durationInFrames={timings["scene6_4_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_4_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_2"] && (
                <Sequence from={timings["scene6_4_2"].startTime} durationInFrames={timings["scene6_4_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_4_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_3"] && (
                <Sequence from={timings["scene6_4_3"].startTime} durationInFrames={timings["scene6_4_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_4_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_4_4"] && (
                <Sequence from={timings["scene6_4_4"].startTime} durationInFrames={timings["scene6_4_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_4_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_5_0"] && (
                <Sequence from={timings["scene6_5_0"].startTime} durationInFrames={timings["scene6_5_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_5_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_5_1"] && (
                <Sequence from={timings["scene6_5_1"].startTime} durationInFrames={timings["scene6_5_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_5_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_5_2"] && (
                <Sequence from={timings["scene6_5_2"].startTime} durationInFrames={timings["scene6_5_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_5_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_5_3"] && (
                <Sequence from={timings["scene6_5_3"].startTime} durationInFrames={timings["scene6_5_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_5_3"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_5_4"] && (
                <Sequence from={timings["scene6_5_4"].startTime} durationInFrames={timings["scene6_5_4"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_5_4"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_5_5"] && (
                <Sequence from={timings["scene6_5_5"].startTime} durationInFrames={timings["scene6_5_5"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_5_5"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_6_0"] && (
                <Sequence from={timings["scene6_6_0"].startTime} durationInFrames={timings["scene6_6_0"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_6_0"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_6_1"] && (
                <Sequence from={timings["scene6_6_1"].startTime} durationInFrames={timings["scene6_6_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_6_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_6_2"] && (
                <Sequence from={timings["scene6_6_2"].startTime} durationInFrames={timings["scene6_6_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_6_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
