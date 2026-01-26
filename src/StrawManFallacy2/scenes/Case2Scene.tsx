import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    ChatBubble,
    HighlightText,
} from "../components";

/**
 * P4: 案例二 - 极端化推演
 * 画面：网络讨论场景
 * 
 * 时间范围：480-630帧 (5秒)
 */
export const Case2Scene: React.FC = () => {
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
                background: "linear-gradient(135deg, #EBF8FF 0%, #BEE3F8 100%)",
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
                💬 案例二：极端化推演
            </div>

            {/* 对话区域 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 30 }}>
                <ChatBubble
                    content="我觉得这款游戏的角色设计有点过于暴露，不适合未成年人。"
                    side="left"
                    color="#2C5282"
                    backgroundColor="#BEE3F8"
                    delay={15}
                />
                <ChatBubble
                    content="笑死，大清亡了！你是不是想让所有女性都裹上黑袍你才满意？"
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
                    backgroundColor: "rgba(255,255,255,0.95)",
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
                    "<HighlightText delay={85} highlightColor={COLORS.highlightDefend}>过于暴露</HighlightText>"
                    被歪曲为"<HighlightText delay={90} highlightColor={COLORS.highlightAttack}>封建保守</HighlightText>"
                    和"<HighlightText delay={95} highlightColor={COLORS.highlightAttack}>强迫裹黑袍</HighlightText>"。
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
                    "我提议的是'分级'或'适度调整'，不是'全面封建化'。请不要把温和的建议极端化。"
                </div>
            </div>
        </AbsoluteFill>
    );
};
