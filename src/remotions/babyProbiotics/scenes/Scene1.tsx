import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Sequence, Audio, staticFile } from "remotion";
import {
    TypewriterText,
    Stamp,
    FadeInText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration, applyAudioDurations, AudioMap } from "../../../utils";
import audioMapData from "./audio-map.json";

const audioMap = audioMapData as AudioMap;

/**
 * 动画配置：Scene1 - 开场
 * 主标题 + 副标题 + 标签印章
 */
const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 10, durationInFrames: 92, preName: null, audioId: "scene1_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 30, durationInFrames: 144, preName: "title", audioId: "scene1_2" },
    { name: "stamp", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "title" },
];

// 应用音频时长
const animationConfigs = applyAudioDurations(baseConfigs, audioMap, 30);

/**
 * 计算场景总时长
 */
export const calculateScene1Duration = (): number => {
    return calculateSceneDuration(animationConfigs, audioMap, 30);
};

/**
 * Scene1: 开场
 */
export const Scene1: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 主标题弹性缩放
    const titleScale = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 80 },
        durationInFrames: 30,
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #E8F5F3 0%, #F0FFF4 50%, #FFF5F5 100%)",
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
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background: "rgba(56, 178, 172, 0.1)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: -150,
                    left: -150,
                    width: 500,
                    height: 500,
                    borderRadius: "50%",
                    background: "rgba(72, 187, 120, 0.08)",
                }}
            />

            {/* 印章效果 - 右上角 */}
            <div
                style={{
                    position: "absolute",
                    top: 60,
                    right: 60,
                }}
            >
                <Stamp
                    text="育儿知识"
                    delay={animationTimings.stamp.startTime}
                    style={{
                        fontSize: 28,
                        padding: "10px 20px",
                        borderColor: "#38B2AC",
                        color: "#38B2AC",
                    }}
                />
            </div>

            {/* 主标题区域 */}
            <div
                style={{
                    transform: `scale(${titleScale})`,
                    textAlign: "center",
                    marginBottom: 40,
                }}
            >
                {/* 主 emoji */}
                <div style={{ fontSize: 120, marginBottom: 20 }}>🍼</div>

                {/* 主标题 */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: "bold",
                        color: "#2D3748",
                        textShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        lineHeight: 1.3,
                    }}
                >
                    宝宝益生菌
                    <br />
                    <span style={{ color: "#38B2AC" }}>真的有用吗？</span>
                </div>
            </div>

            {/* 副标题 */}
            <FadeInText
                delay={animationTimings.subtitle.startTime}
                duration={20}
                style={{
                    fontSize: 36,
                    color: "#E53E3E",
                    fontWeight: 500,
                    textAlign: "center",
                    backgroundColor: "rgba(254, 215, 215, 0.8)",
                    padding: "15px 30px",
                    borderRadius: 15,
                }}
            >
                <TypewriterText
                    text="别再被商家忽悠了，90%的家长都选错了！"
                    delay={animationTimings.subtitle.startTime}
                    durationInFrames={animationTimings.subtitle.durationInFrames - 20}
                    showCursor={true}
                />
            </FadeInText>

            {/* 标签 */}
            <div
                style={{
                    position: "absolute",
                    bottom: 80,
                    display: "flex",
                    gap: 15,
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {["育儿知识", "益生菌", "宝宝健康", "科学育儿"].map((tag, i) => (
                    <FadeInText
                        key={tag}
                        delay={animationTimings.subtitle.startTime + 30 + i * 10}
                        duration={15}
                        style={{
                            fontSize: 24,
                            color: "#718096",
                            backgroundColor: "rgba(255,255,255,0.9)",
                            padding: "8px 20px",
                            borderRadius: 20,
                            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                        }}
                    >
                        #{tag}
                    </FadeInText>
                ))}
            </div>

            {/* 音频 */}
            <Sequence from={animationTimings.title.startTime} durationInFrames={animationTimings.title.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene1/01_主标题.mp3")} />
            </Sequence>
            <Sequence from={animationTimings.subtitle.startTime} durationInFrames={animationTimings.subtitle.durationInFrames}>
                <Audio src={staticFile("audio/babyProbiotics/scene1/02_副标题.mp3")} />
            </Sequence>
        </AbsoluteFill>
    );
};
