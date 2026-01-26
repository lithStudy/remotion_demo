import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    ChatBubble,
    HighlightText,
} from "../components";

/**
 * P5: 案例三 - 立场绑架（忠诚度测试）
 * 画面：网络舆论场
 * 
 * 时间范围：630-780帧 (5秒)
 */
export const Case3Scene: React.FC = () => {
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
                background: "linear-gradient(135deg, #FEFCBF 0%, #FAF089 100%)",
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
                🌐 案例三：立场绑架（忠诚度测试）
            </div>

            {/* 对话区域 */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 30 }}>
                <ChatBubble
                    content="这方面国外确实做得好，我们应该学习。"
                    side="left"
                    color="#2C5282"
                    backgroundColor="#BEE3F8"
                    delay={15}
                />
                <ChatBubble
                    content="太平洋没加盖，不喜欢可以游过去啊！跪久了站不起来了？"
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
                    "<HighlightText delay={85} highlightColor={COLORS.highlightDefend}>承认差距</HighlightText>"
                    被歪曲为"<HighlightText delay={90} highlightColor={COLORS.highlightAttack}>崇洋媚外</HighlightText>"
                    和"<HighlightText delay={95} highlightColor={COLORS.highlightAttack}>嫌弃祖国</HighlightText>"。
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
                    "指出差距是为了追赶，盲目自大才是害了国家。正视不足，才是真正有自信的表现。"
                </div>
            </div>
        </AbsoluteFill>
    );
};
