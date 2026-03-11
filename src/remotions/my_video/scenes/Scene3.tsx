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

// 美国的介入
const baseConfigs: AnimationConfig[] = [
    { name: "scene3_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene3_1" },
    { name: "scene3_2", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene3_1", audioId: "scene3_2" },
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
            <Sequence from={timings["scene3_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene3_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_1"].startTime, timings["scene3_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene3_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene3_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene3_2"].startTime, timings["scene3_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene3_1"].startTime} durationInFrames={timings["scene3_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>于是英国想要拉美国下水，帮他们做这个事情。最初美国总统哈里·杜鲁门是拒绝的，但是德怀特·艾森豪威尔于1953年就任美国总统后，当时正值冷战高峰期。艾森豪威尔政府认为，英国的石油禁运导致伊朗经济濒临崩溃，这种混乱局面极有可能导致伊朗国内的共产主义政党（人民党，Tudeh）夺权，或者迫使伊朗倒向苏联。因此，美国决定介入。此时美国介入的核心动机是防止这个中东战略重地落入苏联阵营，而不仅仅是为了帮英国抢回石油。</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene3_2"].startTime} durationInFrames={timings["scene3_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>于是在1953年美国策划并参与了推翻伊朗民选总理穆罕默德·摩萨台的“阿贾克斯行动”，扶持了亲美但独裁的“巴列维国王”上台。</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene3_1"] && (
                <Sequence from={timings["scene3_1"].startTime} durationInFrames={timings["scene3_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene3_2"] && (
                <Sequence from={timings["scene3_2"].startTime} durationInFrames={timings["scene3_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene3_2"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
