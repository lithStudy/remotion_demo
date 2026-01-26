import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    FadeInText,
    ChatBubble,
    HighlightText,
} from "../components";

/**
 * P3: 案例一 - 情感滑坡（家庭版）
 * 画面：家庭对话场景
 * 
 * 时间范围：330-480帧 (5秒)
 */
export const Case1Scene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleOpacity = spring({
        frame,
        fps,
        config: { damping: 100 },
    });

    const analysisOpacity = spring({
        frame: frame - 80,
        fps,
        config: { damping: 100 },
    });

    const responseOpacity = spring({
        frame: frame - 110,
        fps,
        config: { damping: 100 },
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #FFF5F5 0%, #FED7E2 100%)",
                padding: 60,
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* 标题 */}
            <div
                style={{
                    opacity: titleOpacity,
                    fontSize: 48,
                    fontWeight: "bold",
                    color: COLORS.text,
                    marginBottom: 30,
                    textAlign: "center",
                }}
            >
                📋 案例一：情感滑坡（家庭版）
            </div>

            {/* 对话区域 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 30 }}>
                <ChatBubble
                    content="妈，我不想喝这碗鸡汤，太油了。"
                    side="left"
                    color="#2C7A7B"
                    backgroundColor="#B2F5EA"
                    delay={15}
                />
                <ChatBubble
                    content="你现在长大了，嫌弃妈妈做的饭难吃了是吧？嫌弃这个家了是吧？"
                    side="right"
                    color="#C53030"
                    backgroundColor="#FED7D7"
                    delay={45}
                    style={{ fontWeight: "bold" }}
                />
            </div>

            {/* 谬误剖析 */}
            <div
                style={{
                    opacity: analysisOpacity,
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderRadius: 20,
                    padding: "20px 30px",
                    marginBottom: 20,
                    border: `3px solid ${COLORS.attack}`,
                }}
            >
                <div style={{ fontSize: 24, color: COLORS.attack, fontWeight: "bold", marginBottom: 10 }}>
                    🔍 谬误剖析：
                </div>
                <div style={{ fontSize: 26, color: COLORS.text, lineHeight: 1.6 }}>
                    观点"<HighlightText delay={85} highlightColor={COLORS.highlightDefend}>汤太油</HighlightText>"
                    被歪曲为"<HighlightText delay={90} highlightColor={COLORS.highlightAttack}>嫌弃妈妈</HighlightText>"
                    和"<HighlightText delay={95} highlightColor={COLORS.highlightAttack}>嫌弃家</HighlightText>"。
                    妈妈在攻击"不孝"这个稻草人。
                </div>
            </div>

            {/* 回应实例 */}
            <div
                style={{
                    opacity: responseOpacity,
                    backgroundColor: COLORS.defend,
                    borderRadius: 20,
                    padding: "20px 30px",
                    boxShadow: "0 4px 20px rgba(56, 178, 172, 0.3)",
                }}
            >
                <div style={{ fontSize: 24, color: "white", fontWeight: "bold", marginBottom: 10 }}>
                    🛡️ 回应实例：
                </div>
                <div style={{ fontSize: 26, color: "white", fontStyle: "italic", lineHeight: 1.6 }}>
                    "妈，我说的是'汤太油'，不是'你做饭难吃'，更不是'嫌弃家'。请针对'油'这个问题讨论。"
                </div>
            </div>
        </AbsoluteFill>
    );
};
