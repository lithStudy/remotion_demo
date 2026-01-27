import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    StaggeredList,
    HighlightText,
} from "../../../components";
import { AnimationConfig, calculateAnimationTimings, calculateSceneDuration } from "../../../utils";

/**
 * 动画配置：统一的数据结构
 * - name: 动画名称
 * - delayBefore: 在前一个动画结束后的延迟帧数
 * - delayAfter: 当前动画结束后的延迟帧数（用于下一个动画）
 * - durationInFrames: 动画持续帧数
 * - preName: 前一个动画的名称，null 表示这是第一个动画
 * 
 * 修改这里的值即可调整动画时序，后续动画会自动调整延迟时间
 */
const animationConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 20, preName: null },           // 标题动画
    { name: "core", delayBefore: 30, delayAfter: 0, durationInFrames: 20, preName: "title" },        // 核心心法
    { name: "steps", delayBefore: 30, delayAfter: 0, durationInFrames: 100, preName: "core" },        // 三步法（交错列表）
    { name: "golden", delayBefore: 30, delayAfter: 100, durationInFrames: 20, preName: "steps" },    // 万能金句
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateStrategySceneDuration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * P2: 策略场景 - 复读机矫正法
 * 画面：录音笔，按下"重放"键
 * 
 * 时间范围：由主场景配置决定
 */
export const StrategyScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 计算所有动画的延迟时间和配置信息
    const animationTimings = calculateAnimationTimings(animationConfigs);

    const titleOpacity = spring({
        frame: frame - animationTimings.title.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.title.durationInFrames,
    });

    const coreOpacity = spring({
        frame: frame - animationTimings.core.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.core.durationInFrames,
    });

    const goldenOpacity = spring({
        frame: frame - animationTimings.golden.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.golden.durationInFrames,
    });

    const steps = [
        <div style={{
            fontSize: 50,
            color: COLORS.text,
            backgroundColor: "white",
            padding: "18px 30px",
            borderRadius: 15,
            borderLeft: `6px solid #E53E3E`,
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
        }}>
            <span style={{ color: "#E53E3E", fontWeight: "bold" }}>1. 暂停：</span>
            不要顺着他的歪曲逻辑辩解
        </div>,
        <div style={{
            fontSize: 50,
            color: COLORS.text,
            backgroundColor: "white",
            padding: "18px 30px",
            borderRadius: 15,
            borderLeft: `6px solid #F6AD55`,
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
        }}>
            <span style={{ color: "#DD6B20", fontWeight: "bold" }}>2. 澄清：</span>
            重申你的原话
        </div>,
        <div style={{
            fontSize: 50,
            color: COLORS.text,
            backgroundColor: "white",
            padding: "18px 30px",
            borderRadius: 15,
            borderLeft: `6px solid ${COLORS.defend}`,
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
        }}>
            <span style={{ color: COLORS.defend, fontWeight: "bold" }}>3. 指控：</span>
            直接点破他在捏造观点
        </div>,
    ];

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
                padding: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* 标题 */}
            <div
                style={{
                    opacity: titleOpacity,
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                    marginBottom: 30,
                }}
            >
                <div style={{ fontSize: 67 }}>🎙️</div>
                <div>
                    <div
                        style={{
                            fontSize: 78,
                            fontWeight: "bold",
                            color: "#3498DB",
                            textShadow: "0 2px 10px rgba(52,152,219,0.5)",
                        }}
                    >
                        复读机矫正法
                    </div>
                    <div style={{ fontSize: 34, color: "#95A5A6", marginTop: 5 }}>
                        The Record Replay
                    </div>
                </div>
            </div>

            {/* 核心心法 */}
            <div
                style={{
                    opacity: coreOpacity,
                    backgroundColor: "rgba(52,152,219,0.2)",
                    borderRadius: 20,
                    padding: "20px 35px",
                    marginBottom: 30,
                    border: "2px solid #3498DB",
                }}
            >
                <div style={{ fontSize: 40, color: "white", display: "flex", alignItems: "center", gap: 10 }}>
                    💡 <strong>核心心法：</strong>
                    <span style={{ color: "#F1C40F" }}>不要去保卫稻草人，要直接指出他在歪曲。</span>
                </div>
            </div>

            {/* 三步法 */}
            <div style={{ marginBottom: 30 }}>
                <StaggeredList
                    items={steps}
                    startFrame={animationTimings.steps.startTime}
                    staggerDelay={50}
                />
            </div>

            {/* 万能金句 */}
            <div
                style={{
                    opacity: goldenOpacity,
                    backgroundColor: "#27AE60",
                    borderRadius: 20,
                    padding: "25px 40px",
                    boxShadow: "0 4px 20px rgba(39,174,96,0.4)",
                    maxWidth: 1100,
                }}
            >
                <div style={{ fontSize: 31, color: "white", marginBottom: 10 }}>
                    🎯 万能金句：
                </div>
                <div style={{ fontSize: 40, color: "white", fontStyle: "italic", lineHeight: 1.5 }}>
                    "我从未说过<span style={{ color: "#FED7D7" }}>[他嘴里的观点]</span>，
                    我的原话是<span style={{ color: "#C6F6D5" }}>[你的观点]</span>，
                    请不要塞话到我嘴里。"
                </div>
            </div>
        </AbsoluteFill>
    );
};
