import React, { useMemo } from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Img, useCurrentFrame, interpolate } from "remotion";
import { FadeInText } from "../../../components";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    type AudioMap,
} from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

// 战争爆发
const baseConfigs: AnimationConfig[] = [
    { name: "scene7_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene7_1" },
    { name: "scene7_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene7_1", audioId: "scene7_2" },
    { name: "scene7_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene7_2", audioId: "scene7_3" },
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
            <Sequence from={timings["scene7_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene7_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_1"].startTime, timings["scene7_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene7_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene7_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_2"].startTime, timings["scene7_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene7_3"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene7_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene7_3"].startTime, timings["scene7_3"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
                position: "absolute", bottom: 80, left: 40, right: 40,
            }}>

            {/* [1] 正文 */}
            <Sequence from={timings["scene7_1"].startTime} durationInFrames={timings["scene7_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>面对这一极度紧迫的威胁，2025年6月12日，国际原子能机构理事会正式裁定伊朗未能履行其核不扩散义务。伊朗随后强硬回应，宣布已建成并即将启动第三个核浓缩设施，并大幅限制了国际核查人员的权限 。次日（6月13日），以色列率先对伊朗发动了全面战争，在接下来的12天内，对伊朗27个省的150多个地点的核设施与军事目标进行了广泛的空中打击 。</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene7_2"].startTime} durationInFrames={timings["scene7_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>6月22日，美国直接介入了这场冲突，执行了代号为“午夜之锤”（Operation Midnight Hammer）的军事行动。美军重点使用了钻地弹，对纳坦兹（Natanz）、福尔多（Fordow）和伊斯法罕（Isfahan）的地下核设施进行了毁灭性打击 。作为报复，伊朗向驻扎有美军的卡塔尔乌代德空军基地（Al Udeid）发射了导弹</div>
                </FadeInText>
            </Sequence>

            {/* [3] 正文 */}
            <Sequence from={timings["scene7_3"].startTime} durationInFrames={timings["scene7_3"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>这一系列历史事件表明，美伊两国在长达半个世纪的博弈中，均认为对方构成了生存性威胁</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene7_1"] && (
                <Sequence from={timings["scene7_1"].startTime} durationInFrames={timings["scene7_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_2"] && (
                <Sequence from={timings["scene7_2"].startTime} durationInFrames={timings["scene7_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene7_3"] && (
                <Sequence from={timings["scene7_3"].startTime} durationInFrames={timings["scene7_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene7_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
