import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    FadeInText,
    TypewriterText,
} from "../components";

/**
 * P1: 标题场景 - 概念引入
 * 画面：骑士攻击稻草人，真正对手在旁边懵逼
 * 
 * 时间范围：0-150帧 (5秒)
 */
export const TitleScene: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleScale = spring({
        frame,
        fps,
        config: { damping: 80 },
    });

    const subtitleOpacity = spring({
        frame: frame - 30,
        fps,
        config: { damping: 100 },
    });

    const conceptOpacity = spring({
        frame: frame - 60,
        fps,
        config: { damping: 100 },
    });

    const exampleOpacity = spring({
        frame: frame - 100,
        fps,
        config: { damping: 100 },
    });

    return (
        <AbsoluteFill
            style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: 60,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* 主标题 */}
            <div
                style={{
                    transform: `scale(${titleScale})`,
                    textAlign: "center",
                    marginBottom: 20,
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "0 4px 30px rgba(0,0,0,0.3)",
                    }}
                >
                    逻辑谬误05：稻草人谬误
                </div>
                <div
                    style={{
                        fontSize: 36,
                        color: "rgba(255,255,255,0.8)",
                        marginTop: 10,
                    }}
                >
                    <TypewriterText text="Straw Man Fallacy" delay={20} charFrames={2} />
                </div>
            </div>

            {/* 漫画场景描述 */}
            <FadeInText
                delay={25}
                style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: 20,
                    padding: "20px 40px",
                    marginBottom: 30,
                }}
            >
                <div style={{ fontSize: 28, color: "white", textAlign: "center" }}>
                    🗡️ 画面：骑士对着稻草人疯狂输出，真正的对手在旁边一脸懵逼
                </div>
                <div style={{ fontSize: 32, color: "#FFD700", fontWeight: "bold", marginTop: 10, textAlign: "center" }}>
                    "你赢了，但这关我什么事？"
                </div>
            </FadeInText>

            {/* 副标题 */}
            <div
                style={{
                    opacity: subtitleOpacity,
                    fontSize: 36,
                    color: "#F1C40F",
                    fontWeight: "bold",
                    marginBottom: 30,
                }}
            >
                为什么他们总是在反驳我没说过的话？
            </div>

            {/* 概念解析 */}
            <div
                style={{
                    opacity: conceptOpacity,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    borderRadius: 20,
                    padding: "25px 40px",
                    maxWidth: 1000,
                }}
            >
                <div style={{ fontSize: 24, color: "white", marginBottom: 10 }}>
                    💡 <strong>概念解析：</strong>
                </div>
                <div style={{ fontSize: 26, color: "white", lineHeight: 1.7 }}>
                    对方<span style={{ color: "#E74C3C" }}>歪曲你的观点</span>（树立稻草人），
                    然后攻击这个歪曲后的观点。看起来他赢了，其实他打败的只是幻觉。
                </div>
            </div>

            {/* 典型话术 */}
            <div
                style={{
                    opacity: exampleOpacity,
                    marginTop: 25,
                    fontSize: 26,
                    color: "#FED7D7",
                }}
            >
                ❌ 典型话术："你觉得明朝不好，那你是想赞美清朝咯？"
            </div>
        </AbsoluteFill>
    );
};
