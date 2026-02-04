import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile, interpolate } from "remotion";
import {
    TypewriterText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene8 - 结尾
 * 名言 + 出处 + 结语
 */
const baseConfigs: AnimationConfig[] = [
    { name: "quote", delayBefore: 0, delayAfter: 10, durationInFrames: 251, preName: null, audioId: "scene8_1" },
    { name: "source", delayBefore: 0, delayAfter: 10, durationInFrames: 67, preName: "quote", audioId: "scene8_2" },
    { name: "outro", delayBefore: 0, delayAfter: 60, durationInFrames: 203, preName: "source", audioId: "scene8_3" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene8Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene8: 结尾
 */
export const Scene8: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);

    const quoteOpacity = spring({
        frame: frame - animationTimings.quote.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 30,
    });

    const sourceOpacity = spring({
        frame: frame - animationTimings.source.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    const outroOpacity = spring({
        frame: frame - animationTimings.outro.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    // 背景动画
    const bgShift = interpolate(frame, [0, 300], [0, 20], { extrapolateRight: "clamp" });

    return (
        <AbsoluteFill
            style={{
                background: `linear-gradient(${135 + bgShift}deg, #667EEA 0%, #764BA2 50%, #38B2AC 100%)`,
                padding: 60,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* 装饰圆形 */}
            <div
                style={{
                    position: "absolute",
                    top: -200,
                    right: -200,
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: -150,
                    left: -150,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                }}
            />

            {/* 名言区域 */}
            <div
                style={{
                    opacity: quoteOpacity,
                    textAlign: "center",
                    marginBottom: 40,
                    maxWidth: 800,
                }}
            >
                {/* 引号装饰 */}
                <div
                    style={{
                        fontSize: 120,
                        color: "rgba(255,255,255,0.3)",
                        lineHeight: 0.5,
                        marginBottom: 20,
                    }}
                >
                    "
                </div>
                <div
                    style={{
                        fontSize: 38,
                        color: "white",
                        fontWeight: 500,
                        lineHeight: 1.8,
                        textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    }}
                >
                    <TypewriterText
                        text="益生菌不是万能药，也不是必需品。科学选择，按需补充，才是对宝宝最好的爱。"
                        delay={animationTimings.quote.startTime}
                        durationInFrames={animationTimings.quote.durationInFrames - 30}
                        showCursor={true}
                    />
                </div>
            </div>

            {/* 出处 */}
            <div
                style={{
                    opacity: sourceOpacity,
                    marginBottom: 60,
                }}
            >
                <div
                    style={{
                        fontSize: 26,
                        color: "rgba(255,255,255,0.8)",
                        fontStyle: "italic",
                    }}
                >
                    —— 育儿知识科普
                </div>
            </div>

            {/* 结语 */}
            <div
                style={{
                    opacity: outroOpacity,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(10px)",
                    borderRadius: 25,
                    padding: "25px 40px",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        fontSize: 32,
                        color: "white",
                        fontWeight: 600,
                        lineHeight: 1.6,
                    }}
                >
                    <TypewriterText
                        text="养娃路上，少交智商税，多做功课。关注我，一起科学育儿！"
                        delay={animationTimings.outro.startTime}
                        durationInFrames={animationTimings.outro.durationInFrames - 30}
                        showCursor={true}
                    />
                </div>
            </div>

            {/* 底部 Logo/图标 */}
            <div
                style={{
                    position: "absolute",
                    bottom: 60,
                    display: "flex",
                    alignItems: "center",
                    gap: 15,
                    opacity: interpolate(
                        frame,
                        [animationTimings.outro.startTime + 30, animationTimings.outro.startTime + 60],
                        [0, 1],
                        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                    ),
                }}
            >
                <div style={{ fontSize: 50 }}>👶</div>
                <div
                    style={{
                        fontSize: 28,
                        color: "rgba(255,255,255,0.9)",
                        fontWeight: 500,
                    }}
                >
                    科学育儿
                </div>
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.quote.startTime} durationInFrames={animationTimings.quote.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene8/01_名言.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.source.startTime} durationInFrames={animationTimings.source.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene8/02_出处.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.outro.startTime} durationInFrames={animationTimings.outro.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene8/03_结语.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
