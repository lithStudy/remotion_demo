import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import {
    COLORS,
    SpringText,
    FadeInText,
    StaggeredList,
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
    { name: "preview", delayBefore: 30, delayAfter: 0, durationInFrames: 20, preName: "title" },     // 散架的稻草人描述
    { name: "summaryItems", delayBefore: 30, delayAfter: 0, durationInFrames: 100, preName: "preview" },  // 总结列表（交错列表）
    { name: "nextPreview", delayBefore: 30, delayAfter: 100, durationInFrames: 20, preName: "summaryItems" },  // 下期预告
];

/**
 * 计算场景总时长：最后一个动画的结束时间
 * 结束时间 = 起始时间 + 持续时间 + delayAfter
 */
export const calculateSummarySceneDuration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

/**
 * P6: 总结场景
 * 画面：稻草人散架
 * 
 * 时间范围：由主场景配置决定
 */
export const SummaryScene: React.FC = () => {
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

    const previewOpacity = spring({
        frame: frame - animationTimings.nextPreview.startTime,
        fps,
        config: { damping: 100 },
        durationInFrames: animationTimings.nextPreview.durationInFrames,
    });

    const summaryItems = [
        <div style={{
            fontSize: 50,
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
            <span style={{ fontSize: 40 }}>✅</span>
            仔细听对方的原话，不要脑补
        </div>,
        <div style={{
            fontSize: 50,
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
            <span style={{ fontSize: 40 }}>✅</span>
            受到歪曲时，第一时间纠正原话
        </div>,
        <div style={{
            fontSize: 50,
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
            <span style={{ fontSize: 40 }}>✅</span>
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
                <div style={{ fontSize: 78 }}>📝</div>
                <div
                    style={{
                        fontSize: 78,
                        fontWeight: "bold",
                        color: COLORS.text,
                    }}
                >
                    本期总结
                </div>
            </div>

            {/* 散架的稻草人描述 */}
            <FadeInText
                delay={animationTimings.preview.startTime}
                duration={animationTimings.preview.durationInFrames}
                style={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderRadius: 15,
                    padding: "15px 30px",
                    marginBottom: 30,
                    fontSize: 34,
                    color: "#718096",
                }}
            >
                🌾 画面：稻草人散架倒塌
            </FadeInText>

            {/* 总结列表 */}
            <div style={{ marginBottom: 40, width: "100%", maxWidth: 800 }}>
                <StaggeredList
                    items={summaryItems}
                    startFrame={animationTimings.summaryItems.startTime}
                    staggerDelay={32}
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
                <div style={{ fontSize: 40, color: "white", display: "flex", alignItems: "center", gap: 15 }}>
                    <span style={{ fontSize: 45 }}>👋</span>
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
