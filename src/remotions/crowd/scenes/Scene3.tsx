import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, useVideoConfig, random, spring, Audio, Sequence, staticFile } from "remotion";
import { FadeInText, SpringText, AutoHighlightText } from "../../../components";
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
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: null, audioId: "scene3_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: "title", audioId: "scene3_2" },
    { name: "figure", delayBefore: 0, delayAfter: 0, durationInFrames: 28, preName: "subtitle" },

    // 表现部分 "表现"
    { name: "performance", delayBefore: 0, delayAfter: 0, durationInFrames: 15, preName: "subtitle", audioId: "scene3_3" }, // 15帧淡入完成
    // 表现部分 "热搜一出..."
    {
        name: "performanceText", delayBefore: 5, delayAfter: 0, durationInFrames: 1, preName: "performance", audioId: "scene3_4",
        highlight: ["疯狂站队", "网暴", "虽迟但到", "死刑起步", "反转", "一哄而散"]
    },

    // 原理部分 "原理" - 依赖 performanceText (第一段读完)
    { name: "principle", delayBefore: 0, delayAfter: 0, durationInFrames: 40, preName: "performanceText", audioId: "scene3_5" }, // 原理部分整体出现
    // 原理部分 "群体只接受..."
    {
        name: "principleText", delayBefore: 0, delayAfter: 0, durationInFrames: 1, preName: "principle", audioId: "scene3_6",
        highlight: ["简单的暗示", "现实与幻觉", "情绪煽动"]
    },
];

// 应用音频时长和高亮延迟
const configsWithAudio = applyAudioDurations(baseConfigs, audioMap, 30);
const animationConfigs = applyHighlightDelays(configsWithAudio, audioMap, 30);

export const calculateScene3Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap);
};

/** 与 Crowd 过渡时长一致，前若干帧不抢戏，避免与 Scene2 结尾重叠 */
const TRANSITION_OFFSET = 15;

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

/** 网格背景 */
const CyberGrid: React.FC<{ frame: number; opacity: number }> = ({ frame, opacity }) => {
    const offset = (frame * 0.5) % 40;
    return (
        <svg width="100%" height="100%" style={{ position: "absolute", opacity }}>
            <defs>
                <pattern id="grid" x="0" y={offset} width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.1)" strokeWidth="1" />
                </pattern>
                <radialGradient id="gridMask" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="80%" stopColor="white" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" mask="url(#mask-layer)" />
            <mask id="mask-layer">
                <rect width="100%" height="100%" fill="url(#gridMask)" />
            </mask>
        </svg>
    );
};

/** 用户节点 (吃瓜群众) */
const UserNode: React.FC<{
    x: number;
    y: number;
    delay: number;
    baseFrame: number;
    frame: number;
    state: "standing" | "violence" | "scatter";
    color: string;
    fps: number;
}> = ({ x, y, delay, baseFrame, frame, state, color, fps }) => {
    const startFrame = baseFrame + delay;
    const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 0.8], { extrapolateRight: "clamp" });
    const scale = spring({ frame: frame - startFrame, fps, config: { damping: 12 } });

    // 站队/网暴时轻微震动
    const shakeX = state === "violence" ? Math.sin(frame * 0.8) * 3 : 0;
    const shakeY = state === "violence" ? Math.cos(frame * 0.9) * 3 : 0;

    // 散去时的动画
    const scatterOffset = state === "scatter" ? interpolate(frame, [baseFrame + 150, baseFrame + 200], [0, 500], { extrapolateRight: "clamp" }) : 0;
    const scatterDirX = x > 480 ? 1 : -1;
    const scatterDirY = y > 640 ? 1 : -1;

    const currentX = x + shakeX + scatterOffset * scatterDirX;
    const currentY = y + shakeY + scatterOffset * scatterDirY;

    // 攻击光束
    const showBeam = state === "violence";
    const beamOpacity = showBeam ? interpolate(Math.sin(frame * 0.5), [-1, 1], [0.3, 0.8]) : 0;

    return (
        <g transform={`translate(${currentX}, ${currentY}) scale(${scale})`} style={{ opacity }}>
            {showBeam && (
                <line
                    x1={0} y1={0}
                    x2={480 - x} y2={640 - y} // 指向中心 (480, 640)
                    stroke="#ef4444"
                    strokeWidth={1}
                    opacity={beamOpacity}
                    strokeDasharray="4 4"
                />
            )}
            <circle r={6} fill={state === "violence" ? "#ef4444" : color} />
        </g>
    );
};

/** 中心事件 (手机屏幕/热搜) */
const CenterDevice: React.FC<{ frame: number; opacity: number; isReversed: boolean }> = ({ frame, opacity, isReversed }) => {
    const floatY = Math.sin(frame * 0.05) * 10;

    return (
        <g transform={`translate(480, ${640 + floatY})`} style={{ opacity }}>
            {/* 光晕 */}
            <circle r={80} fill={isReversed ? "#22c55e" : "#ef4444"} opacity={0.2} filter="blur(20px)" />

            {/* 手机框 */}
            <rect x={-30} y={-50} width={60} height={100} rx={8} fill="#0f172a" stroke="#334155" strokeWidth={2} />

            {/* 屏幕内容 */}
            <rect x={-26} y={-46} width={52} height={92} rx={6} fill={isReversed ? "#14532d" : "#450a0a"} opacity={0.8} />

            {/* 模拟信息流 */}
            <g transform="translate(-20, -30)">
                <rect width={40} height={4} rx={2} fill={isReversed ? "#4ade80" : "#f87171"} opacity={0.8} />
                <rect y={10} width={30} height={4} rx={2} fill="rgba(255,255,255,0.3)" />
                <rect y={20} width={35} height={4} rx={2} fill="rgba(255,255,255,0.3)" />
                <rect y={30} width={25} height={4} rx={2} fill="rgba(255,255,255,0.3)" />
            </g>

            {/* 警告图标 / 反转图标 */}
            <g transform="translate(0, 20)">
                {isReversed ? (
                    <path d="M -10 0 L -3 7 L 10 -7" stroke="#4ade80" strokeWidth={3} fill="none" />
                ) : (
                    <path d="M -8 -8 L 8 8 M 8 -8 L -8 8" stroke="#f87171" strokeWidth={3} />
                )}
            </g>
        </g>
    );
};





export const Scene3: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    // 计算所有动画的时序
    const timings = useMemo(
        () => calculateAnimationTimings(animationConfigs),
        []
    );

    const cardInStart =
        timings.subtitle.startTime + timings.subtitle.durationInFrames + 18 + TRANSITION_OFFSET;
    const cardInDuration = 26;

    // 表现部分出现的时间（延后 TRANSITION_OFFSET，避免与 Scene2 过渡重叠）
    const performanceStart = timings.performance.startTime + TRANSITION_OFFSET;
    // 原理部分出现的时间（也就是表现部分上移的时间）
    const principleStart = timings.principle.startTime + TRANSITION_OFFSET;

    // 计算间隔高度动画：从有高度（使内容居中）变为0（上移）
    const spacerHeight = interpolate(
        frame,
        [principleStart, principleStart + 20],
        [60, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 表现部分的不透明度
    const performanceOpacity = interpolate(
        frame,
        [performanceStart, performanceStart + 15],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 原理部分展开高度动画
    const principleMaxHeight = interpolate(
        frame,
        [principleStart, principleStart + 20],
        [0, 400],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 原理部分的不透明度
    const principleOpacity = interpolate(
        frame,
        [principleStart + 10, principleStart + 25],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 生成随机用户节点
    const users = useMemo(() => {
        return new Array(40).fill(0).map((_, i) => {
            const angle = random(i) * Math.PI * 2;
            const dist = 150 + random(i + 100) * 250;
            return {
                x: 480 + Math.cos(angle) * dist,
                y: 640 + Math.sin(angle) * dist,
                delay: random(i + 200) * 30, // 0-30帧随机延迟
                color: i % 2 === 0 ? "#38bdf8" : "#818cf8", // 蓝色系
            };
        });
    }, []);

    // 动画状态判断
    // Performance Highlights
    const tPerfText = timings.performanceText;
    const perfHighlights = tPerfText.highlightAbsoluteTimes || [];

    // UserNode 动画依赖这些时间点
    const crazyStart = (perfHighlights[0] ?? 0) + TRANSITION_OFFSET;
    const violenceStart = (perfHighlights[1] ?? 0) + TRANSITION_OFFSET;

    const reversalStart = (perfHighlights[4] ?? 0) + TRANSITION_OFFSET;
    const scatterStart = (perfHighlights[5] ?? 0) + TRANSITION_OFFSET;


    const isViolence = frame >= violenceStart && frame < reversalStart;
    const isReversed = frame >= reversalStart;
    const isScatter = frame >= scatterStart;

    const userState = isScatter ? "scatter" : (isViolence ? "violence" : "standing");

    // 插画区域淡入
    const figureOpacity = interpolate(
        frame,
        [timings.figure.startTime + TRANSITION_OFFSET, timings.figure.startTime + TRANSITION_OFFSET + 20],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
        <AbsoluteFill
            style={{
                background: BACKGROUND,
            }}
        >
            {/* Audio Playback */}
            {baseConfigs.map((config) => {
                if (!config.audioId || !audioMap[config.audioId]) return null;
                return (
                    <Sequence
                        key={config.name}
                        from={timings[config.name].startTime + TRANSITION_OFFSET}
                        durationInFrames={timings[config.name].durationInFrames}
                    >
                        <Audio src={staticFile(audioMap[config.audioId].file)} />
                    </Sequence>
                );
            })}

            {/* 标题区 */}
            <div
                style={{
                    position: "absolute",
                    top: 56,
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 10,
                }}
            >
                <SpringText delay={timings.title.startTime + TRANSITION_OFFSET}>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            color: "#fff",
                            letterSpacing: "0.08em",
                            lineHeight: 1.1,
                            textShadow: "0 2px 24px rgba(0,0,0,0.6), 0 0 40px rgba(255,220,150,0.15)",
                        }}
                    >
                        网络吃瓜
                    </div>
                </SpringText>
                <FadeInText
                    delay={timings.subtitle.startTime + TRANSITION_OFFSET}
                    duration={12}
                >
                    <div
                        style={{
                            width: 48,
                            height: 3,
                            borderRadius: 2,
                            background: "linear-gradient(90deg, transparent, rgba(255,220,150,0.9), transparent)",
                            marginTop: 14,
                        }}
                    />
                </FadeInText>
                <FadeInText
                    delay={timings.subtitle.startTime + TRANSITION_OFFSET}
                    duration={timings.subtitle.durationInFrames}
                >
                    <div
                        style={{
                            marginTop: 12,
                            fontSize: 32,
                            fontWeight: 500,
                            color: "rgba(255,255,255,0.9)",
                            letterSpacing: "0.12em",
                            textShadow: "0 1px 12px rgba(0,0,0,0.5)",
                        }}
                    >
                        网络正义的狂欢
                    </div>
                </FadeInText>
            </div>

            {/* SVG 动画内容替代原图片 */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: -100,
                    width: "100%",
                    height: "100%",
                    opacity: figureOpacity,
                }}
            >
                <CyberGrid frame={frame} opacity={0.6} />

                <svg width="100%" height="100%" viewBox="0 0 960 1280">
                    <CenterDevice frame={frame} opacity={1} isReversed={isReversed} />

                    {users.map((u, i) => (
                        <UserNode
                            key={i}
                            x={u.x}
                            y={u.y}
                            delay={u.delay}
                            baseFrame={crazyStart}
                            frame={frame}
                            state={userState}
                            color={u.color}
                            fps={fps}
                        />
                    ))}
                </svg>
            </div>

            {/* 底部文案卡片 */}
            <div
                style={{
                    position: "absolute",
                    bottom: 56,
                    left: 48,
                    right: 48,
                    zIndex: 10,
                    maxWidth: 864,
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        background: "rgba(15, 23, 42, 0.88)",
                        borderRadius: 20,
                        padding: "28px 36px 32px",
                        border: "1px solid rgba(255, 220, 150, 0.2)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                        opacity: interpolate(
                            frame,
                            [cardInStart, cardInStart + cardInDuration],
                            [0, 1],
                            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                        ),
                        transform: `translateY(${interpolate(
                            frame,
                            [cardInStart, cardInStart + cardInDuration],
                            [28, 0],
                            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
                        )}px)`,
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {/* 顶部占位，用于初始居中，后续收起 */}
                        <div style={{ height: spacerHeight }} />

                        {/* 表现部分 */}
                        <div style={{ opacity: performanceOpacity }}>
                            <div
                                style={{
                                    fontSize: 20,
                                    fontWeight: 700,
                                    color: "rgba(255, 220, 150, 0.98)",
                                    letterSpacing: "0.2em",
                                    marginBottom: 12,
                                    textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                                }}
                            >
                                表现
                            </div>
                            <div
                                style={{
                                    fontSize: 34,
                                    lineHeight: 1.75,
                                    color: "rgba(255, 255, 255, 0.92)",
                                    textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                                }}
                            >
                                <AutoHighlightText
                                    text={audioMap['scene3_4'].text}
                                    highlights={baseConfigs.find(c => c.name === 'performanceText')?.highlight || []}
                                    highlightTimings={perfHighlights}
                                    baseDelay={TRANSITION_OFFSET}
                                    highlightColors="rgba(220, 38, 38, 0.6)"
                                    style={{ margin: "0 2px" }}
                                />
                            </div>
                        </div>

                        {/* 底部占位，用于初始居中，后续收起 */}
                        <div style={{ height: spacerHeight }} />

                        {/* 原理部分 */}
                        <div style={{ opacity: principleOpacity, maxHeight: principleMaxHeight, overflow: "hidden" }}>
                            <div
                                style={{
                                    marginTop: 24, // 增加一点间距
                                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                                    paddingTop: 24,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "rgba(255, 220, 150, 0.98)",
                                        letterSpacing: "0.2em",
                                        marginBottom: 12,
                                        textShadow: "0 1px 4px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    原理
                                </div>
                                <div
                                    style={{
                                        fontSize: 34,
                                        lineHeight: 1.75,
                                        color: "rgba(255, 255, 255, 0.92)",
                                        textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                                    }}
                                >
                                    <AutoHighlightText
                                        text={audioMap['scene3_6'].text}
                                        highlights={baseConfigs.find(c => c.name === 'principleText')?.highlight || []}
                                        highlightTimings={timings.principleText.highlightAbsoluteTimes || []}
                                        baseDelay={TRANSITION_OFFSET}
                                        highlightColors={[
                                            "rgba(49, 179, 240, 0.5)",
                                            "rgba(248, 244, 15, 0.63)",
                                            "rgba(14, 165, 233, 0.5)"
                                        ]}
                                        style={{ margin: "0 2px" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AbsoluteFill>
    );
};
