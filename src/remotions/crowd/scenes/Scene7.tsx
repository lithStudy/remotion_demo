import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Audio, Sequence, staticFile } from "remotion";
import { SpringText, AutoHighlightText } from "../../../components";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
    applyAudioDurations,
    applyHighlightDelays,
    type AudioMap,
} from "../../../utils";
import audioMapData from './audio-map.json';

const audioMap = audioMapData as AudioMap;

const baseConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: null, audioId: "scene7_1" },
    { name: "shield_person", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "title" },
    { name: "arrows", delayBefore: 0, delayAfter: 0, durationInFrames: 40, preName: "shield_person" },

    // Item 1
    { name: "item1", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "title", audioId: "scene7_2" }, // Title: 让子弹飞
    {
        name: "item1_content", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "item1", audioId: "scene7_3",
        highlight: ["延迟3小时再表态", "智商才能占领高地"]
    },

    // Item 2
    { name: "item2", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "item1_content", audioId: "scene7_4" }, // Title: 警惕绝对化
    {
        name: "item2_content", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "item2", audioId: "scene7_5",
        highlight: ["肯定、绝对、全是、必须"]
    },

    // Item 3
    { name: "item3", delayBefore: 0, delayAfter: 0, durationInFrames: 30, preName: "item2_content", audioId: "scene7_6" }, // Title: 寻找反对
    {
        name: "item3_content", delayBefore: 10, delayAfter: 0, durationInFrames: 30, preName: "item3", audioId: "scene7_7",
        highlight: ["兼听则明，偏信则暗"]
    },

];

// 应用音频时长
// 应用音频时长
const configsWithAudio = applyAudioDurations(baseConfigs, audioMap, 30);
const animationConfigs = applyHighlightDelays(configsWithAudio, audioMap, 30);

export const calculateScene7Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap);
};

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

const PersonWithShield: React.FC<{
    x: number;
    y: number;
    opacity: number;
    frame: number;
}> = ({ x, y, opacity, frame }) => {
    // 喝茶动画
    // 手臂动作：把杯子举到嘴边
    // 周期性动作，比如每 120 帧喝一次
    const cycle = frame % 120;
    const armRotate = interpolate(
        cycle,
        [0, 20, 50, 80],
        [0, -45, -45, 0], // 举起，保持，放下
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <g transform={`translate(${x}, ${y}) scale(1.5)`} style={{ opacity }}>
            {/* 身体 */}
            <path d="M -20 80 L -20 0 Q 0 -5 20 0 L 20 80 Z" fill="#64748b" />

            {/* 头 */}
            <circle cx={0} cy={-25} r={20} fill="#94a3b8" />

            {/* 眼睛 (闭眼享受/冷静) */}
            <path d="M -8 -25 Q -4 -22 0 -25" stroke="#1e293b" strokeWidth={2} fill="none" />
            <path d="M 4 -25 Q 8 -22 12 -25" stroke="#1e293b" strokeWidth={2} fill="none" />

            {/* 左手 (拿盾牌的手) - 简单的线条 */}
            <path d="M -20 20 L -50 40" stroke="#64748b" strokeWidth={8} strokeLinecap="round" />

            {/* 右手 (拿茶杯) */}
            <g transform="translate(20, 20)">
                <g transform={`rotate(${armRotate})`}>
                    <path d="M 0 0 L 20 20" stroke="#64748b" strokeWidth={8} strokeLinecap="round" />
                    {/* 茶杯 */}
                    <g transform="translate(20, 20) rotate(-10)">
                        <rect x={-5} y={-10} width={14} height={16} rx={2} fill="#e2e8f0" />
                        <path d="M 9 -6 Q 14 -6 14 0 Q 14 6 9 6" stroke="#e2e8f0" strokeWidth={2} fill="none" />
                        {/* 热气 */}
                        <path d="M 0 -15 Q 5 -20 0 -25" stroke="white" strokeWidth={1} opacity={0.5}>
                            <animate attributeName="d" values="M 0 -15 Q 5 -20 0 -25; M 0 -18 Q -5 -23 0 -28; M 0 -15 Q 5 -20 0 -25" dur="2s" repeatCount="indefinite" />
                        </path>
                    </g>
                </g>
            </g>

            {/* 盾牌 (在最前面) */}
            <g transform="translate(-60, 0)">
                <path
                    d="M -30 -50 L 30 -50 L 30 10 Q 0 60 -30 10 Z"
                    fill="#3b82f6"
                    stroke="#60a5fa"
                    strokeWidth={4}
                />
                <path
                    d="M 0 -40 L 0 45"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth={20}
                />
                <circle cx={0} cy={-10} r={12} fill="#1d4ed8" />
                <path d="M -8 -10 L 0 -2 L 8 -18" stroke="white" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
    );
};

const Arrow: React.FC<{
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    delay: number;
    frame: number;
}> = ({ startX, startY, endX, endY, delay, frame }) => {
    const progress = interpolate(
        frame,
        [delay, delay + 15],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const currentX = interpolate(progress, [0, 1], [startX, endX]);
    const currentY = interpolate(progress, [0, 1], [startY, endY]);

    // 撞击后消失或掉落
    const opacity = interpolate(
        frame,
        [delay + 15, delay + 25],
        [1, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    if (progress === 0) return null;

    return (
        <g transform={`translate(${currentX}, ${currentY}) rotate(180)`} opacity={opacity}>
            <line x1={0} y1={0} x2={40} y2={0} stroke="#ef4444" strokeWidth={3} />
            <path d="M 0 0 L 10 -5 L 10 5 Z" fill="#ef4444" />
        </g>
    );
};

const StrategyItem: React.FC<{
    title: string;
    content: React.ReactNode;
    index: number;
    delay: number;
    frame: number;
}> = ({ title, content, index, delay, frame }) => {
    const opacity = interpolate(
        frame,
        [delay, delay + 20],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const translateY = interpolate(
        frame,
        [delay, delay + 20],
        [30, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <div
            style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                marginBottom: 40,
                display: "flex",
                alignItems: "flex-start",
                padding: "24px",
                background: "rgba(30, 41, 59, 0.6)",
                borderRadius: 16,
                border: "1px solid rgba(52, 211, 153, 0.2)",
            }}
        >
            <div
                style={{
                    minWidth: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 20,
                    marginTop: 4,
                    flexShrink: 0,
                    boxShadow: "0 0 10px rgba(16, 185, 129, 0.4)",
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </div>
            <div>
                <div style={{ fontSize: 32, fontWeight: "bold", color: "#34d399", marginBottom: 8 }}>
                    {title}
                </div>
                <div style={{ fontSize: 26, color: "#e2e8f0", lineHeight: 1.5 }}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export const Scene7: React.FC = () => {
    const frame = useCurrentFrame();
    const configsWithAudio = useMemo(() => applyAudioDurations(baseConfigs, audioMapData as AudioMap, 30), []);
    const configsWithHighlights = useMemo(() => applyHighlightDelays(configsWithAudio, audioMapData as AudioMap, 30), [configsWithAudio]);
    const timings = useMemo(() => calculateAnimationTimings(configsWithHighlights), [configsWithHighlights]);
    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 盾牌人出现
    const shieldOpacity = interpolate(
        frame,
        [timings.shield_person.startTime, timings.shield_person.startTime + 20],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 从左侧滑入到中间
    const shieldX = interpolate(
        frame,
        [timings.shield_person.startTime, timings.shield_person.startTime + 20],
        [200, 480],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <AbsoluteFill style={{ background: BACKGROUND }}>
            {/* Audio Playback */}
            {/* Audio Playback */}
            {baseConfigs.map((config) => {
                if (!config.audioId || !audioMap[config.audioId]) return null;
                return (
                    <Sequence
                        key={config.name}
                        from={animationTimings[config.name].startTime}
                        durationInFrames={animationTimings[config.name].durationInFrames}
                    >
                        <Audio src={staticFile(audioMap[config.audioId].file)} />
                    </Sequence>
                );
            })}

            {/* 标题 */}
            <div style={{ position: "absolute", top: 60, width: "100%", textAlign: "center", zIndex: 10 }}>
                <SpringText delay={timings.title.startTime}>
                    <div style={{ fontSize: 60, fontWeight: "bold", color: "#fff", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                        如何避免成为“乌合之众”？
                    </div>
                </SpringText>
            </div>

            {/* 中间视觉区 */}
            <div style={{ position: "absolute", top: 180, left: 0, width: "100%", height: 400, overflow: "visible" }}>
                <svg width="100%" height="100%" viewBox="0 0 960 400" style={{ overflow: "visible" }}>
                    {/* 飞来的子弹/箭头 */}
                    <Arrow
                        startX={900}
                        startY={200}
                        endX={shieldX + 60} // 打在盾牌上
                        endY={200}
                        delay={timings.arrows.startTime}
                        frame={frame}
                    />
                    <Arrow
                        startX={950}
                        startY={150}
                        endX={shieldX + 60}
                        endY={190}
                        delay={timings.arrows.startTime + 5}
                        frame={frame}
                    />
                    <Arrow
                        startX={920}
                        startY={250}
                        endX={shieldX + 60}
                        endY={210}
                        delay={timings.arrows.startTime + 10}
                        frame={frame}
                    />

                    {/* 盾牌人 */}
                    <PersonWithShield
                        x={shieldX}
                        y={200}
                        opacity={shieldOpacity}
                        frame={frame}
                    />
                </svg>
            </div>

            {/* 下方文字内容区 */}
            <div
                style={{
                    position: "absolute",
                    top: 600,
                    left: 80,
                    right: 80,
                    bottom: 40,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                }}
            >
                <StrategyItem
                    index={0}
                    title="让子弹飞一会儿"
                    content={
                        <AutoHighlightText
                            text={audioMap['scene7_3'].text}
                            highlights={baseConfigs.find(c => c.name === 'item1_content')?.highlight || []}
                            highlightTimings={timings.item1_content.highlightAbsoluteTimes || []}
                            baseDelay={0}
                            highlightColors="rgba(52, 211, 153, 0.5)"
                            style={{ margin: "0 2px" }}
                        />
                    }
                    delay={timings.item1.startTime}
                    frame={frame}
                />
                <StrategyItem
                    index={1}
                    title="警惕“绝对化”词汇"
                    content={
                        <AutoHighlightText
                            text={audioMap['scene7_5'].text}
                            highlights={baseConfigs.find(c => c.name === 'item2_content')?.highlight || []}
                            highlightTimings={timings.item2_content.highlightAbsoluteTimes || []}
                            baseDelay={0}
                            highlightColors="rgba(239, 68, 68, 0.5)"
                            style={{ margin: "0 2px" }}
                        />
                    }
                    delay={timings.item2.startTime}
                    frame={frame}
                />
                <StrategyItem
                    index={2}
                    title="寻找反对声音"
                    content={
                        <AutoHighlightText
                            text={audioMap['scene7_7'].text}
                            highlights={baseConfigs.find(c => c.name === 'item3_content')?.highlight || []}
                            highlightTimings={timings.item3_content.highlightAbsoluteTimes || []}
                            baseDelay={0}
                            highlightColors="rgba(52, 211, 153, 0.5)"
                            style={{ margin: "0 2px" }}
                        />
                    }
                    delay={timings.item3.startTime}
                    frame={frame}
                />
            </div>
        </AbsoluteFill>
    );
};
