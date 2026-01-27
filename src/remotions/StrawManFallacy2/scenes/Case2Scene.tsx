import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    ChatBubble,
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
    { name: "chatBubble1", delayBefore: 30, delayAfter: 0, durationInFrames: 5, preName: "title" },     // 第一个聊天气泡
    { name: "chatBubble2", delayBefore: 45, delayAfter: 0, durationInFrames: 10, preName: "chatBubble1" },     // 第二个聊天气泡
    { name: "analysis", delayBefore: 15, delayAfter: 0, durationInFrames: 20, preName: "chatBubble2" },        // 谬误剖析区域
    { name: "highlight1", delayBefore: 5, delayAfter: 0, durationInFrames: 20, preName: "analysis" },   // 高亮1
    { name: "highlight2", delayBefore: 5, delayAfter: 0, durationInFrames: 20, preName: "highlight1" },   // 高亮2
    { name: "highlight3", delayBefore: 5, delayAfter: 0, durationInFrames: 20, preName: "highlight2" }, // 高亮3
    { name: "response", delayBefore: 0, delayAfter: 100, durationInFrames: 50, preName: "highlight3" },        // 回应实例
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateCase2SceneDuration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * P4: 案例二 - 极端化推演
 * 画面：网络讨论场景
 * 
 * 时间范围：由主场景配置决定
 */
export const Case2Scene: React.FC = () => {
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

    const analysisOpacity = spring({
        frame: frame - animationTimings.analysis.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.analysis.durationInFrames,
    });

    const responseOpacity = spring({
        frame: frame - animationTimings.response.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.response.durationInFrames,
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
                    fontSize: 67,
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
                    delay={animationTimings.chatBubble1.startTime}
                    durationInFrames={animationTimings.chatBubble1.durationInFrames}
                />
                <ChatBubble
                    content="笑死，大清亡了！你是不是想让所有女性都裹上黑袍你才满意？"
                    side="right"
                    color="#C53030"
                    backgroundColor="#FED7D7"
                    delay={animationTimings.chatBubble2.startTime}
                    durationInFrames={animationTimings.chatBubble2.durationInFrames}
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
                <div style={{ fontSize: 34, color: COLORS.attack, fontWeight: "bold", marginBottom: 10 }}>
                    🔍 谬误剖析：
                </div>
                <div style={{ fontSize: 36, color: COLORS.text, lineHeight: 1.6 }}>
                    "<HighlightText delay={animationTimings.highlight1.startTime} durationInFrames={animationTimings.highlight1.durationInFrames} highlightColor={COLORS.highlightDefend}>过于暴露</HighlightText>"
                    被歪曲为"<HighlightText delay={animationTimings.highlight2.startTime} durationInFrames={animationTimings.highlight2.durationInFrames} highlightColor={COLORS.highlightAttack}>封建保守</HighlightText>"
                    和"<HighlightText delay={animationTimings.highlight3.startTime} durationInFrames={animationTimings.highlight3.durationInFrames} highlightColor={COLORS.highlightAttack}>强迫裹黑袍</HighlightText>"。
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
                <div style={{ fontSize: 34, color: "white", fontWeight: "bold", marginBottom: 10 }}>
                    🛡️ 回应实例：
                </div>
                <div style={{ fontSize: 36, color: "white", fontStyle: "italic", lineHeight: 1.6 }}>
                    "我提议的是'分级'或'适度调整'，不是'全面封建化'。请不要把温和的建议极端化。"
                </div>
            </div>
        </AbsoluteFill>
    );
};
