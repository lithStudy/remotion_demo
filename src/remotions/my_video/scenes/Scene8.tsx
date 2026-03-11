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

// 史诗狂怒
const baseConfigs: AnimationConfig[] = [
    { name: "scene8_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene8_1" },
    { name: "scene8_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene8_1", audioId: "scene8_2" },
    { name: "scene8_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene8_2", audioId: "scene8_3" },
];

export const calculateScene8Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap, 30);
};

export const Scene8: React.FC = () => {
    const frame = useCurrentFrame();
    const animConfigs = useMemo(() => applyAudioDurations(baseConfigs, audioMap, 30), []);
    const timings = useMemo(() => calculateAnimationTimings(animConfigs), [animConfigs]);

    return (
        <AbsoluteFill style={{ background: "linear-gradient(180deg, #1a0000 0%, #2d1f1f 100%)" }}>
            {/* 场景配图 (全屏轮播) */}

            {/* 配图 [1] */}
            <Sequence from={timings["scene8_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene8_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene8_1"].startTime, timings["scene8_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene8_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene8_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene8_2"].startTime, timings["scene8_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene8_3"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene8_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene8_3"].startTime, timings["scene8_3"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene8_1"].startTime} durationInFrames={timings["scene8_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>2026年1月，因为财富的分配问题和制裁导致的经济问题，德黑兰市中心两大主要市场爆发大规模抗议活动，哈梅内伊下达了血腥镇压的指令，导致数以千计的平民死亡，并实施了大规模的任意逮捕和强迫失踪</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene8_2"].startTime} durationInFrames={timings["scene8_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>伊朗国内的动荡与政权的脆弱状态被美国和以色列视为不可多得的战略窗口期。2026年1月，特朗普开始在社交媒体上公开发表支持伊朗抗议者的言论，并警告如果伊朗政府屠杀和平抗议者，美军将采取“子弹上膛”的军事干预。这是一种战争前的宣言，但也是发动战争的正当性的宣告。</div>
                </FadeInText>
            </Sequence>

            {/* [3] 正文 */}
            <Sequence from={timings["scene8_3"].startTime} durationInFrames={timings["scene8_3"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>2026年2月28日美国正式发动“史诗狂怒”行动，其目的主要有两个：1.彻底解除伊朗核武装与消灭弹道导弹工业，以消除伊朗对美国的武力威胁；2. 借力打力：实现“敌视美国的政权更迭”的最高隐性目标，彻底解除后顾之忧</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene8_1"] && (
                <Sequence from={timings["scene8_1"].startTime} durationInFrames={timings["scene8_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene8_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_2"] && (
                <Sequence from={timings["scene8_2"].startTime} durationInFrames={timings["scene8_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene8_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene8_3"] && (
                <Sequence from={timings["scene8_3"].startTime} durationInFrames={timings["scene8_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene8_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
