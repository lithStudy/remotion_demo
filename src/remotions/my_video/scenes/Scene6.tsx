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

// 核协议与极限施压
const baseConfigs: AnimationConfig[] = [
    { name: "scene6_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene6_1" },
    { name: "scene6_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene6_1", audioId: "scene6_2" },
    { name: "scene6_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene6_2", audioId: "scene6_3" },
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
            <Sequence from={timings["scene6_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_1"].startTime, timings["scene6_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene6_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_2"].startTime, timings["scene6_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene6_3"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene6_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene6_3"].startTime, timings["scene6_3"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene6_1"].startTime} durationInFrames={timings["scene6_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>尽管在2013年至2018年间，国际社会与伊朗达成了《伊核协议》，但此协议之下并没有限制伊朗发展可能对美国产生威胁的弹道导弹，而且伊朗的铀浓缩进程并没有停止，这导致了2018年，美国特朗普政府单方面退出该协议，并实施了旨在扼杀伊朗经济的“极限施压”政策，希望以此来威胁重新签署一份对伊朗武器限制更大的协议。但是伊朗也是破罐子破摔，开始明目张胆的进行高丰度铀浓缩活动</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene6_2"].startTime} durationInFrames={timings["scene6_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>2020年1月3日，美军在巴格达机场用无人机暗杀了伊朗“圣城旅”(被定性为恐怖组织)指挥官苏莱曼尼</div>
                </FadeInText>
            </Sequence>

            {/* [3] 正文 */}
            <Sequence from={timings["scene6_3"].startTime} durationInFrames={timings["scene6_3"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>至2025年中期，美国情报部门和国际原子能机构（IAEA）的评估显示，伊朗的核计划已经越过了危险的临界点。经过数年的不受限发展，伊朗已积累了超过440公斤丰度为60%的高浓缩铀（HEU） 。在核物理学与浓缩技术层面上，一旦铀浓缩丰度达到60%，将其进一步浓缩至可用于制造紧凑型核弹头的90%武器级丰度，在技术上是一个相对容易且迅速的步骤 。据美国国防情报局（DIA）在2025年5月的评估，伊朗生产足够制造一枚核武器的裂变材料的“突破时间”（Breakout time）可能已经缩短至“不到一周”</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene6_1"] && (
                <Sequence from={timings["scene6_1"].startTime} durationInFrames={timings["scene6_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_2"] && (
                <Sequence from={timings["scene6_2"].startTime} durationInFrames={timings["scene6_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene6_3"] && (
                <Sequence from={timings["scene6_3"].startTime} durationInFrames={timings["scene6_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene6_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
