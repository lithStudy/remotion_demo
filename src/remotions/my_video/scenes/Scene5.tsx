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

// 战争阴影下的博弈
const baseConfigs: AnimationConfig[] = [
    { name: "scene5_1", delayBefore: 8, delayAfter: 0, durationInFrames: 60, preName: null, audioId: "scene5_1" },
    { name: "scene5_2", delayBefore: 3, delayAfter: 0, durationInFrames: 60, preName: "scene5_1", audioId: "scene5_2" },
    { name: "scene5_3", delayBefore: 3, delayAfter: 20, durationInFrames: 60, preName: "scene5_2", audioId: "scene5_3" },
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
            <Sequence from={timings["scene5_1"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene5_1.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_1"].startTime, timings["scene5_1"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [2] */}
            <Sequence from={timings["scene5_2"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene5_2.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_2"].startTime, timings["scene5_2"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
                    }}
                />
            </Sequence>

            {/* 配图 [3] */}
            <Sequence from={timings["scene5_3"].startTime}>
                <Img
                    src={staticFile("images/my_video/scene5_3.png")}
                    style={{
                        position: "absolute",
                        width: "100%", height: "100%", objectFit: "cover",
                        opacity: interpolate(frame, [timings["scene5_3"].startTime, timings["scene5_3"].startTime + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }),
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
            <Sequence from={timings["scene5_1"].startTime} durationInFrames={timings["scene5_1"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>两国结仇后，虽然美国没有实际对伊朗发动战争，但在1980年爆发的“两伊战争”中，美国选择暗中支持当时关系还不错的伊拉克的萨达姆去打伊朗。最严重的是1988年7月3日美国海军“文森斯”号巡洋舰因为将客机误判为伊朗战斗机，将其击落，导致了290名平民遇难。但在伊朗看来，这就是故意的，这是血海深仇</div>
                </FadeInText>
            </Sequence>

            {/* [2] 正文 */}
            <Sequence from={timings["scene5_2"].startTime} durationInFrames={timings["scene5_2"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>进入1990年代，克林顿政府开始对伊朗实施全面经济制裁 。这让本来因为革命卫队垄断财富而民不聊生的伊朗人民更加雪上加霜</div>
                </FadeInText>
            </Sequence>

            {/* [3] 正文 */}
            <Sequence from={timings["scene5_3"].startTime} durationInFrames={timings["scene5_3"].durationInFrames + 30}>
                <FadeInText delay={0}>
                    <div style={{ fontSize: 36, fontWeight: 400, color: "rgba(255,255,255,0.92)", textAlign: "center" as const, lineHeight: 1.6 }}>2002年，伊朗反对派组织曝光了伊朗正在秘密进行核试验，这让美国感觉到了威胁，彻底断绝了任何和解的可能</div>
                </FadeInText>
            </Sequence>
            </div>

            {/* 音频 */}

            {audioMap["scene5_1"] && (
                <Sequence from={timings["scene5_1"].startTime} durationInFrames={timings["scene5_1"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_1"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_2"] && (
                <Sequence from={timings["scene5_2"].startTime} durationInFrames={timings["scene5_2"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_2"].file)} />
                </Sequence>
            )}

            {audioMap["scene5_3"] && (
                <Sequence from={timings["scene5_3"].startTime} durationInFrames={timings["scene5_3"].durationInFrames}>
                    <Audio src={staticFile(audioMap["scene5_3"].file)} />
                </Sequence>
            )}
        </AbsoluteFill>
    );
};
