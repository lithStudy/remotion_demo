import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    StaggeredList,
    HighlightText,
} from "../components";

/**
 * P2: 策略场景 - 复读机矫正法
 * 画面：录音笔，按下"重放"键
 * 
 * 时间范围：150-330帧 (6秒)
 */
export const StrategyScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleOpacity = spring({
        frame,
        fps,
        config: { damping: 100 },
    });

    const coreOpacity = spring({
        frame: frame - 20,
        fps,
        config: { damping: 100 },
    });

    const goldenOpacity = spring({
        frame: frame - 120,
        fps,
        config: { damping: 100 },
    });

    const steps = [
        <div style={{
            fontSize: 36,
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
            fontSize: 36,
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
            fontSize: 36,
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
                <div style={{ fontSize: 48 }}>🎙️</div>
                <div>
                    <div
                        style={{
                            fontSize: 56,
                            fontWeight: "bold",
                            color: "#3498DB",
                            textShadow: "0 2px 10px rgba(52,152,219,0.5)",
                        }}
                    >
                        复读机矫正法
                    </div>
                    <div style={{ fontSize: 24, color: "#95A5A6", marginTop: 5 }}>
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
                <div style={{ fontSize: 28, color: "white", display: "flex", alignItems: "center", gap: 10 }}>
                    💡 <strong>核心心法：</strong>
                    <span style={{ color: "#F1C40F" }}>不要去保卫稻草人，要直接指出他在歪曲。</span>
                </div>
            </div>

            {/* 三步法 */}
            <div style={{ marginBottom: 30 }}>
                <StaggeredList
                    items={steps}
                    startFrame={40}
                    staggerDelay={25}
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
                <div style={{ fontSize: 22, color: "white", marginBottom: 10 }}>
                    🎯 万能金句：
                </div>
                <div style={{ fontSize: 28, color: "white", fontStyle: "italic", lineHeight: 1.5 }}>
                    "我从未说过<span style={{ color: "#FED7D7" }}>[他嘴里的观点]</span>，
                    我的原话是<span style={{ color: "#C6F6D5" }}>[你的观点]</span>，
                    请不要塞话到我嘴里。"
                </div>
            </div>
        </AbsoluteFill>
    );
};
