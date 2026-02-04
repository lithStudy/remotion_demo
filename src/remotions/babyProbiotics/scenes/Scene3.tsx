import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from "remotion";
import {
    TypewriterContent,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene3 - 宝宝需要补充吗
 * 标题 + 副标题 + 真相 + 误区
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 5, durationInFrames: 80, preName: null, audioId: "scene3_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 5, durationInFrames: 81, preName: "title", audioId: "scene3_2" },
    { name: "truthLabel", delayBefore: 0, delayAfter: 5, durationInFrames: 48, preName: "subtitle", audioId: "scene3_3" },
    { name: "truthContent", delayBefore: 0, delayAfter: 10, durationInFrames: 403, preName: "truthLabel", audioId: "scene3_4" },
    { name: "mistakeLabel", delayBefore: 0, delayAfter: 5, durationInFrames: 47, preName: "truthContent", audioId: "scene3_5" },
    { name: "mistakeContent", delayBefore: 0, delayAfter: 30, durationInFrames: 294, preName: "mistakeLabel" },
];

const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene3Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene3: 宝宝需要补充益生菌吗
 */
export const Scene3: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);

    const titleOpacity = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    const subtitleOpacity = spring({
        frame: frame - animationTimings.subtitle.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    const truthOpacity = spring({
        frame: frame - animationTimings.truthLabel.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    const mistakeOpacity = spring({
        frame: frame - animationTimings.mistakeLabel.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: 20,
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(180deg, #F0FFF4 0%, #E6FFFA 100%)",
                padding: 50,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* 标题 */}
            <div
                style={{
                    opacity: titleOpacity,
                    textAlign: "center",
                    marginBottom: 15,
                }}
            >
                <div style={{ fontSize: 70, marginBottom: 10 }}>🤔</div>
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: "bold",
                        color: "#2D3748",
                    }}
                >
                    宝宝需要补充益生菌吗？
                </div>
            </div>

            {/* 副标题 */}
            <div
                style={{
                    opacity: subtitleOpacity,
                    textAlign: "center",
                    marginBottom: 30,
                }}
            >
                <div
                    style={{
                        fontSize: 32,
                        color: "#E53E3E",
                        fontWeight: 600,
                        display: "inline-block",
                        backgroundColor: "rgba(254, 215, 215, 0.8)",
                        padding: "8px 25px",
                        borderRadius: 20,
                    }}
                >
                    不是所有宝宝都需要
                </div>
            </div>

            {/* 真相卡片 */}
            <div
                style={{
                    opacity: truthOpacity,
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 30,
                    marginBottom: 20,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                    borderLeft: "6px solid #48BB78",
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#48BB78",
                        marginBottom: 15,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <span style={{ fontSize: 32 }}>✅</span>
                    真相
                </div>
                <div
                    style={{
                        fontSize: 30,
                        color: "#2D3748",
                        lineHeight: 1.7,
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.truthContent.startTime}
                        durationInFrames={animationTimings.truthContent.durationInFrames - 20}
                        showCursor={true}
                    >
                        <HighlightText delay={animationTimings.truthContent.startTime + 5} highlightColor="#C6F6D5">健康的宝宝</HighlightText>
                        ，肠道菌群是平衡的，
                        <HighlightText delay={animationTimings.truthContent.startTime + 40} highlightColor="#B2F5EA">不需要额外补充</HighlightText>
                        。但如果宝宝
                        <HighlightText delay={animationTimings.truthContent.startTime + 80} highlightColor="#FED7D7">腹泻</HighlightText>
                        、
                        <HighlightText delay={animationTimings.truthContent.startTime + 95} highlightColor="#FED7D7">便秘</HighlightText>
                        、
                        <HighlightText delay={animationTimings.truthContent.startTime + 110} highlightColor="#FEEBC8">吃了抗生素</HighlightText>
                        ，或者经常
                        <HighlightText delay={animationTimings.truthContent.startTime + 140} highlightColor="#FED7D7">胀气</HighlightText>
                        ，这时候
                        <HighlightText delay={animationTimings.truthContent.startTime + 170} highlightColor="#E9D8FD">益生菌才派上用场</HighlightText>
                        。
                    </TypewriterContent>
                </div>
            </div>

            {/* 误区卡片 */}
            <div
                style={{
                    opacity: mistakeOpacity,
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 30,
                    boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
                    borderLeft: "6px solid #E53E3E",
                }}
            >
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: "bold",
                        color: "#E53E3E",
                        marginBottom: 15,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <span style={{ fontSize: 32 }}>⚠️</span>
                    误区
                </div>
                <div
                    style={{
                        fontSize: 30,
                        color: "#2D3748",
                        lineHeight: 1.7,
                    }}
                >
                    <TypewriterContent
                        delay={animationTimings.mistakeContent.startTime}
                        durationInFrames={animationTimings.mistakeContent.durationInFrames - 20}
                        showCursor={true}
                    >
                        很多家长以为益生菌是「
                        <HighlightText delay={animationTimings.mistakeContent.startTime + 20} highlightColor="#FED7D7">补品</HighlightText>
                        」，多吃多健康。其实
                        <HighlightText delay={animationTimings.mistakeContent.startTime + 60} highlightColor="#FEEBC8">盲目补充</HighlightText>
                        ，反而可能
                        <HighlightText delay={animationTimings.mistakeContent.startTime + 100} highlightColor="#FED7D7">打乱肠道平衡</HighlightText>
                        ，
                        <HighlightText delay={animationTimings.mistakeContent.startTime + 130} highlightColor="#E53E3E" style={{ color: 'white' }}>适得其反</HighlightText>
                        。
                    </TypewriterContent>
                </div>
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.title.startTime} durationInFrames={animationTimings.title.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene3/01_标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.subtitle.startTime} durationInFrames={animationTimings.subtitle.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene3/02_副标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.truthLabel.startTime} durationInFrames={animationTimings.truthLabel.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene3/03_小标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.truthContent.startTime} durationInFrames={animationTimings.truthContent.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene3/04_正文.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.mistakeLabel.startTime} durationInFrames={animationTimings.mistakeLabel.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene3/05_小标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.mistakeContent.startTime} durationInFrames={animationTimings.mistakeContent.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene3/06_正文.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
