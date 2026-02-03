import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, random } from "remotion";
import { FadeInText } from "../../../components/TextAnimations";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
} from "../../../utils";

const animationConfigs: AnimationConfig[] = [
    { name: "quote_part1", delayBefore: 20, delayAfter: 0, durationInFrames: 40, preName: null },
    { name: "quote_part2", delayBefore: 10, delayAfter: 0, durationInFrames: 40, preName: "quote_part1" },
    { name: "transition", delayBefore: 40, delayAfter: 0, durationInFrames: 30, preName: "quote_part2" },
    { name: "final_text", delayBefore: 10, delayAfter: 90, durationInFrames: 40, preName: "transition" },
];

export const calculateScene8Duration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

const BACKGROUND = "linear-gradient(180deg, #020617 0%, #0f172a 100%)";

// 孤独的星星/光点
const LonelyStar: React.FC<{ frame: number }> = ({ frame }) => {
    const opacity = interpolate(
        Math.sin(frame * 0.1),
        [-1, 1],
        [0.4, 1]
    );
    
    const scale = interpolate(
        Math.sin(frame * 0.1),
        [-1, 1],
        [0.8, 1.2]
    );

    return (
        <div
            style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                transform: "translate(-50%, -50%)",
            }}
        >
            {/* 光晕 */}
            <div
                style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#ef4444",
                    boxShadow: `
                        0 0 60px 30px rgba(220, 38, 38, 0.3),
                        0 0 100px 60px rgba(220, 38, 38, 0.1),
                        0 0 15px 4px rgba(255, 150, 150, 0.8)
                    `,
                    opacity,
                    transform: `scale(${scale})`,
                }}
            />
        </div>
    );
};

// 喧嚣的粒子背景
const NoiseParticles: React.FC<{ frame: number; opacity: number }> = ({ frame, opacity }) => {
    // 生成一些随机粒子
    const particles = Array.from({ length: 80 }).map((_, i) => {
        const seed = i;
        const x = random(seed) * 100; // %
        const y = random(seed + 100) * 100; // %
        const size = 2 + random(seed + 200) * 4;
        
        // 闪烁效果
        const blinkSpeed = 0.05 + random(seed + 300) * 0.1;
        const blinkOffset = random(seed + 400) * 100;
        const particleOpacity = interpolate(
            Math.sin(frame * blinkSpeed + blinkOffset),
            [-1, 1],
            [0.1, 0.8]
        );
        
        return (
            <div
                key={i}
                style={{
                    position: "absolute",
                    left: `${x}%`,
                    top: `${y}%`,
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.6)",
                    opacity: particleOpacity,
                    boxShadow: "0 0 4px rgba(255, 255, 255, 0.4)",
                }}
            />
        );
    });

    return (
        <AbsoluteFill style={{ opacity }}>
            {particles}
        </AbsoluteFill>
    );
};

export const Scene8: React.FC = () => {
    const frame = useCurrentFrame();
    const timings = calculateAnimationTimings(animationConfigs);

    // 引用语淡出
    const quoteOpacity = interpolate(
        frame,
        [timings.transition.startTime, timings.transition.startTime + 20],
        [1, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 结语出现
    const finalOpacity = interpolate(
        frame,
        [timings.final_text.startTime, timings.final_text.startTime + 30],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <AbsoluteFill style={{ background: BACKGROUND }}>
            <NoiseParticles frame={frame} opacity={1} />
            
            <LonelyStar frame={frame} />

            {/* 名言部分 */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: quoteOpacity,
                    padding: "0 80px",
                }}
            >
                <div style={{ height: 100 }} /> {/* 避开中间的星星 */}
                
                <FadeInText delay={timings.quote_part1.startTime}>
                    <div
                        style={{
                            fontSize: 32,
                            color: "rgba(255, 255, 255, 0.9)",
                            textAlign: "center",
                            lineHeight: 1.8,
                            marginBottom: 40,
                            fontStyle: "italic",
                        }}
                    >
                        “人一到群体中，智商就严重降低，为了获得认同，
                        <br />
                        个体愿意抛弃是非，用智商去换取那份让人备感安全的归属感。”
                    </div>
                </FadeInText>
                
                <FadeInText delay={timings.quote_part2.startTime}>
                    <div
                        style={{
                            fontSize: 24,
                            color: "rgba(148, 163, 184, 0.8)",
                            marginTop: 20,
                            textAlign: "right",
                            width: "100%",
                            paddingRight: 40,
                        }}
                    >
                        —— 勒庞《乌合之众》
                    </div>
                </FadeInText>
            </div>

            {/* 最终结语 */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: finalOpacity,
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: "bold",
                        color: "#fff",
                        textAlign: "center",
                        lineHeight: 1.6,
                        textShadow: "0 0 20px rgba(56, 189, 248, 0.5)",
                        letterSpacing: "0.1em",
                    }}
                >
                    在这个喧嚣的世界，
                    <br />
                    <span style={{ fontSize: 64, color: "#38bdf8" }}>保持孤独</span>
                    ，
                    <br />
                    是保持清醒的唯一方式。
                </div>
            </div>
        </AbsoluteFill>
    );
};
