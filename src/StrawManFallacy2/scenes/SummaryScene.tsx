import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    FadeInText,
    StaggeredList,
} from "../components";

/**
 * P6: 总结场景
 * 画面：稻草人散架
 * 
 * 时间范围：780-960帧 (6秒)
 */
export const SummaryScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleOpacity = spring({
        frame,
        fps,
        config: { damping: 100 },
    });

    const previewOpacity = spring({
        frame: frame - 130,
        fps,
        config: { damping: 100 },
    });

    const summaryItems = [
        <div style={{
            fontSize: 36,
            color: COLORS.text,
            backgroundColor: "white",
            padding: "18px 30px",
            borderRadius: 15,
            borderLeft: `6px solid ${COLORS.defend}`,
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            gap: 15,
        }}>
            <span style={{ fontSize: 28 }}>✅</span>
            仔细听对方的原话，不要脑补
        </div>,
        <div style={{
            fontSize: 36,
            color: COLORS.text,
            backgroundColor: "white",
            padding: "18px 30px",
            borderRadius: 15,
            borderLeft: `6px solid ${COLORS.defend}`,
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            gap: 15,
        }}>
            <span style={{ fontSize: 28 }}>✅</span>
            受到歪曲时，第一时间纠正原话
        </div>,
        <div style={{
            fontSize: 36,
            color: COLORS.text,
            backgroundColor: "white",
            padding: "18px 30px",
            borderRadius: 15,
            borderLeft: `6px solid ${COLORS.attack}`,
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            gap: 15,
        }}>
            <span style={{ fontSize: 28 }}>✅</span>
            打败稻草人不算英雄
        </div>,
    ];

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #F7F9FC 0%, #E2E8F0 100%)",
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
                    marginBottom: 40,
                }}
            >
                <div style={{ fontSize: 56 }}>📝</div>
                <div
                    style={{
                        fontSize: 56,
                        fontWeight: "bold",
                        color: COLORS.text,
                    }}
                >
                    本期总结
                </div>
            </div>

            {/* 散架的稻草人描述 */}
            <FadeInText
                delay={10}
                style={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 15,
                    padding: "15px 30px",
                    marginBottom: 30,
                    fontSize: 24,
                    color: "#718096",
                }}
            >
                🌾 画面：稻草人散架倒塌
            </FadeInText>

            {/* 总结列表 */}
            <div style={{ marginBottom: 40, width: "100%", maxWidth: 800 }}>
                <StaggeredList
                    items={summaryItems}
                    startFrame={30}
                    staggerDelay={25}
                />
            </div>

            {/* 下期预告 */}
            <div
                style={{
                    opacity: previewOpacity,
                    backgroundColor: "#667eea",
                    borderRadius: 20,
                    padding: "25px 40px",
                    boxShadow: "0 4px 20px rgba(102, 126, 234, 0.4)",
                    maxWidth: 900,
                }}
            >
                <div style={{ fontSize: 28, color: "white", display: "flex", alignItems: "center", gap: 15 }}>
                    <span style={{ fontSize: 32 }}>👋</span>
                    <div>
                        <strong>下期预告：</strong>
                        <span style={{ color: "#F1C40F" }}>滑坡谬误</span>
                        ——为什么"少壮不努力"不一定"老大徒伤悲"？
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};
