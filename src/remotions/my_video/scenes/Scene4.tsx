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

// 伊斯兰革命与人质危机
const baseConfigs: AnimationConfig[] = [
    { name: "scene4_1", delayBefore: 8, delayAfter: 20, durationInFrames: 60, preName: null, audioId: "scene4_1" },
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
            <Sequence from={timings["scene4_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene4_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene4_1"].startTime, timings["scene4_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene4_1"].startTime} durationInFrames={timings["scene4_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>巴列维国王在伊朗搞高压统治，虽然经济搞好了，但是没有政治自由，他亲手教会伊朗人民什么是民主，但是自己却舍不得权利而搞君主专制，这种催发民智但又不放权的操作导致了伊朗于1979年爆发了“伊斯兰革命”，推翻了国王，建立了反美的政教合一的伊斯兰共和国。同年11月美国收留了流亡的国王治病，这彻底激怒了伊朗的激进学生。他们冲进美国驻德黑兰大使馆，把52名美国外交官蒙上眼睛扣作人质，整整关了444天（人质危机）。从这一天起，两国正式断交，美国人眼里也从此把伊朗看作了“狂热的恐怖国家”。</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene4_1"] && (
                <Sequence from={timings["scene4_1"].startTime} durationInFrames={timings["scene4_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene4_1"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
