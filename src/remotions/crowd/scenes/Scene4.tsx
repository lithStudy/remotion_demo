import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig, Audio, Sequence, staticFile } from "remotion";
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
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: null, audioId: "scene4_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: "title", audioId: "scene4_2" },
    { name: "queue", delayBefore: 0, delayAfter: 0, durationInFrames: 90, preName: "subtitle" },
    { name: "contagion", delayBefore: 20, delayAfter: 0, durationInFrames: 28, preName: "queue" },

    // 表现部分 "表现"
    { name: "performance", delayBefore: 0, delayAfter: 0, durationInFrames: 15, preName: "subtitle", audioId: "scene4_4" },
    // 表现部分 "其实你并不渴..."
    {
        name: "performanceText", delayBefore: 0, delayAfter: 0, durationInFrames: 1, preName: "performance", audioId: "scene4_5",
        highlight: ["几百人在排队", "终于喝到了"]
    },

    // 原理部分 "原理" - 依赖 performanceText (第一段读完)
    { name: "principle", delayBefore: 0, delayAfter: 0, durationInFrames: 40, preName: "performanceText", audioId: "scene4_6" },
    // 原理部分 "传染性..."
    {
        name: "principleText", delayBefore: 0, delayAfter: 20, durationInFrames: 1, preName: "principle", audioId: "scene4_7",
        highlight: ["传染性", "病毒一样传播", "大家都在做，肯定是对的"]
    },
];

// 应用音频时长
// 应用音频时长
const configsWithAudio = applyAudioDurations(baseConfigs, audioMap, 30);
const animationConfigs = applyHighlightDelays(configsWithAudio, audioMap, 30);

export const calculateScene4Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap);
};

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

/** 排队的人形：增强版，支持移动入场 */
const QueuePerson: React.FC<{
    x: number;
    y: number;
    startX?: number;
    startY?: number;
    delay?: number;
    frame: number;
    baseAppearFrame: number;
    index: number;
    color: string;
}> = ({ x, y, startX, startY, delay = 0, frame, baseAppearFrame, index, color }) => {
    // 实际开始动作的时间
    const startFrame = baseAppearFrame + delay;

    // 是否是移动入场的人物
    const isMoving = startX !== undefined || startY !== undefined;

    // 出现/透明度动画
    const opacity = interpolate(
        frame,
        [startFrame, startFrame + 18],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 位置插值
    const moveDuration = 45; // 移动耗时
    const progress = interpolate(
        frame,
        [startFrame, startFrame + moveDuration],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 如果没有 startX/Y，就使用固定的 x/y
    const currentX = isMoving && startX !== undefined
        ? interpolate(progress, [0, 1], [startX, x])
        : x;
    const currentY = isMoving && startY !== undefined
        ? interpolate(progress, [0, 1], [startY, y])
        : y;

    // 摆动动画：移动时摆动幅度大（模拟走路），到位后幅度小（模拟站立）
    const isWalking = progress < 1 && isMoving;
    const swayBase = isWalking ? Math.sin(frame * 0.4) * 4 : Math.sin((frame * 0.12 + index * 4) * 0.06) * 1.5;

    // 手机微光：只有到位停下后才看手机
    const phoneLightOpacity = !isWalking
        ? 0.4 + 0.1 * Math.sin(frame * 0.2 + index)
        : 0;

    // 手臂动作：走路时摆臂，停下时看手机
    const armRotate = isWalking ? Math.sin(frame * 0.4) * 20 : -15;

    return (
        <g
            transform={`translate(${currentX + swayBase}, ${currentY})`}
            style={{ opacity }}
        >
            {/* 身体 */}
            <path
                d="M -16 10 Q 0 8 16 10 L 14 60 L -14 60 Z"
                fill={color}
                stroke="#1e293b"
                strokeWidth={1}
            />
            {/* 头 */}
            <circle cx={0} cy={-24} r={16} fill="#334155" />

            {/* 手机屏幕微光 (仅在站立时显示) */}
            {!isWalking && (
                <>
                    <defs>
                        <radialGradient id={`phoneGlow-${index}`} cx="0.5" cy="0.5" r="0.5">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity={phoneLightOpacity} />
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx={4} cy={-20} r={10} fill={`url(#phoneGlow-${index})`} />
                </>
            )}

            {/* 手臂 */}
            <g transform={`rotate(${armRotate} 0 10)`}>
                {/* 手臂形状 */}
                <path d="M -8 15 Q -12 25 0 20 L 4 14" fill="none" stroke="#475569" strokeWidth={3} strokeLinecap="round" opacity={isWalking ? 1 : 0} />

                {/* 站立看手机时的手臂+手机 */}
                {!isWalking && (
                    <>
                        <path d="M -8 15 Q -12 25 0 20 L 4 14" fill="none" stroke="#475569" strokeWidth={3} strokeLinecap="round" />
                        <rect x={2} y={8} width={10} height={16} rx={2} fill="#0f172a" transform="rotate(0 7 16)" />
                        <rect x={3} y={10} width={8} height={12} rx={1} fill="#93c5fd" transform="rotate(0 7 16)" opacity={0.8} />
                    </>
                )}

                {/* 走路时的简单手臂 */}
                {isWalking && (
                    <path d="M 0 10 L 0 35" stroke="#475569" strokeWidth={4} strokeLinecap="round" />
                )}
            </g>
        </g>
    );
};

/** 传染性图标：增强版，更像病毒 */
const ContagionIcon: React.FC<{ cx: number; cy: number; size: number; frame: number; opacity: number }> = ({
    cx,
    cy,
    size,
    frame,
    opacity,
}) => {
    const pulse = 1 + 0.05 * Math.sin(frame * 0.15);
    const rotate = frame * 0.5;

    // 生成病毒突触
    const spikes = 8;
    const spikePaths: string[] = [];
    for (let i = 0; i < spikes; i++) {
        const angle = (i * 360) / spikes;
        const rad = (angle * Math.PI) / 180;
        const innerR = size * 0.4;
        const outerR = size * 0.8;
        const x1 = cx + innerR * Math.cos(rad);
        const y1 = cy + innerR * Math.sin(rad);
        const x2 = cx + outerR * Math.cos(rad);
        const y2 = cy + outerR * Math.sin(rad);
        spikePaths.push(`M ${x1} ${y1} L ${x2} ${y2}`);
    }

    return (
        <svg width={size * 2} height={size * 2} viewBox={`${cx - size} ${cy - size} ${size * 2} ${size * 2}`} style={{ opacity }}>
            <g transform={`rotate(${rotate} ${cx} ${cy}) scale(${pulse})`} style={{ transformOrigin: `${cx}px ${cy}px` }}>
                {/* 核心 */}
                <circle cx={cx} cy={cy} r={size * 0.4} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={2} />
                <circle cx={cx} cy={cy} r={size * 0.25} fill="#60a5fa" opacity={0.6} />

                {/* 突触 */}
                {spikePaths.map((d, i) => (
                    <g key={i}>
                        <path d={d} stroke="#3b82f6" strokeWidth={3} strokeLinecap="round" />
                        <circle cx={cx + size * 0.8 * Math.cos((i * 360 / spikes) * Math.PI / 180)}
                            cy={cy + size * 0.8 * Math.sin((i * 360 / spikes) * Math.PI / 180)}
                            r={size * 0.12} fill="#93c5fd" />
                    </g>
                ))}
            </g>
        </svg>
    );
};

export const Scene4: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const configsWithAudio = useMemo(() => applyAudioDurations(baseConfigs, audioMapData as AudioMap, 30), []);
    const configsWithHighlights = useMemo(() => applyHighlightDelays(configsWithAudio, audioMapData as AudioMap, 30), [configsWithAudio]);
    const timings = useMemo(() => calculateAnimationTimings(configsWithHighlights), [configsWithHighlights]);
    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 奶茶店进场弹簧动画
    const shopEntrance = spring({
        frame: frame - timings.queue.startTime,
        fps,
        config: {
            damping: 12, // 较小的阻尼产生弹性
            stiffness: 100,
        },
        durationInFrames: 30,
        delay: 0,
    });

    // 从右侧 400px 处滑入到 0
    const shopTranslateX = interpolate(shopEntrance, [0, 1], [400, 0]);

    const queueOpacity = interpolate(
        frame,
        [timings.queue.startTime, timings.queue.startTime + 15],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const contagionOpacity = interpolate(
        frame,
        [timings.contagion.startTime, timings.contagion.startTime + timings.contagion.durationInFrames],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 底部卡片动画
    // 表现部分出现的时间
    const performanceStart = timings.performance.startTime;
    // 原理部分出现的时间（也就是表现部分上移的时间）
    const principleStart = timings.principle.startTime;

    const cardInStart = performanceStart - 20; // 在表现文字出现前一点进入
    const cardInDuration = 26;

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
        [principleStart + 10, principleStart + 25], // 稍微延迟一点出现，等上移开始
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const persons = [
        // 初始已经在排队的人 (右侧靠近店铺)
        { x: 400, y: 580, color: "#1e293b", delay: 0 },
        { x: 470, y: 575, color: "#475569", delay: 4 },
        { x: 540, y: 582, color: "#334155", delay: 8 },
        { x: 610, y: 578, color: "#1e293b", delay: 12 },

        // 后来加入的人 (从左侧走入)
        { x: 330, y: 580, startX: -50, startY: 600, delay: 20, color: "#475569" },
        { x: 260, y: 582, startX: -80, startY: 560, delay: 35, color: "#334155" },
        { x: 190, y: 575, startX: -60, startY: 620, delay: 55, color: "#475569" },
        { x: 120, y: 580, startX: -100, startY: 580, delay: 75, color: "#334155" },
    ];

    return (
        <AbsoluteFill
            style={{
                background: BACKGROUND,
            }}
        >
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
                <SpringText delay={timings.title.startTime}>
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
                        消费跟风
                    </div>
                </SpringText>
                <FadeInText delay={timings.subtitle.startTime} duration={12}>
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
                    delay={timings.subtitle.startTime}
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
                        排队2小时的奶茶
                    </div>
                </FadeInText>
            </div>

            {/* 中部：排队人群 + 网红奶茶店 + 传染性概念 */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                }}
            >
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 960 1280"
                    fill="none"
                    style={{ display: "block" }}
                >
                    {/* 网红奶茶店：增强霓虹感 + 弹性滑入 */}
                    <g transform={`translate(${shopTranslateX}, 0)`}>
                        {/* 店铺背景 */}
                        <defs>
                            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* 地面/人行道：侧视剖面 */}
                        <g opacity={queueOpacity}>
                            <rect x={0} y={640} width={960} height={300} fill="#020617" opacity={0.9} />
                            <line x1={0} y1={640} x2={960} y2={640} stroke="#475569" strokeWidth={3} />
                        </g>

                        {/* 店铺主体 (扁平侧视图) - 延伸到底部 */}
                        <rect
                            x={660}
                            y={380}
                            width={300}
                            height={260}
                            fill="#0f172a"
                            stroke="#1e293b"
                            strokeWidth={0}
                        />
                        {/* 顶部招牌背景 */}
                        <rect
                            x={660}
                            y={340}
                            width={300}
                            height={60}
                            fill="#1e293b"
                        />

                        {/* 霓虹招牌文字 */}
                        <text
                            x={810}
                            y={380}
                            textAnchor="middle"
                            fill="#ffb700"
                            fontSize={36}
                            fontWeight="800"
                            style={{ letterSpacing: "0.15em", filter: "url(#neonGlow)" }}
                        >
                            网红奶茶
                        </text>

                        {/* 橱窗/门面区域 */}
                        <rect
                            x={690}
                            y={420}
                            width={240}
                            height={160}
                            fill="#1e293b"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            filter="url(#neonGlow)"
                            opacity={0.8}
                        />
                        <rect
                            x={695}
                            y={425}
                            width={230}
                            height={150}
                            fill="#0f172a"
                            opacity={0.6}
                        />

                        {/* 奶茶杯装饰 (扁平化) */}
                        <g transform="translate(740, 490)">
                            <path d="M 0 0 L 24 0 L 20 36 L 4 36 Z" fill="#fcd34d" opacity={0.6} />
                            <circle cx={12} cy={-2} r={3} fill="#333" />
                            <line x1={12} y1={-2} x2={18} y2={-12} stroke="#fcd34d" strokeWidth={2} />
                        </g>
                        <g transform="translate(800, 490)">
                            <path d="M 0 0 L 24 0 L 20 36 L 4 36 Z" fill="#f87171" opacity={0.6} />
                            <line x1={12} y1={-2} x2={6} y2={-12} stroke="#f87171" strokeWidth={2} />
                        </g>

                        {/* 排队提示牌 (扁平悬挂) */}
                        <g transform="translate(670, 440)">
                            <rect x={0} y={0} width={28} height={90} fill="#334155" rx={2} />
                            <text x={14} y={40} textAnchor="middle" fill="#fff" fontSize={14} writingMode="tb" style={{ letterSpacing: "2px" }}>排队入口</text>
                        </g>
                    </g>

                    {/* 排队人群 */}
                    {persons.map((p, i) => (
                        <QueuePerson
                            key={i}
                            x={p.x}
                            y={p.y}
                            startX={p.startX}
                            startY={p.startY}
                            delay={p.delay}
                            frame={frame}
                            baseAppearFrame={timings.queue.startTime}
                            index={i}
                            color={p.color}
                        />
                    ))}
                </svg>
            </div>

            {/* 传染性：发光文字 + 图标 + 箭头指向人群 */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 100,
                    top: 380,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    zIndex: 5,
                    opacity: contagionOpacity,
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <ContagionIcon cx={24} cy={24} size={24} frame={frame} opacity={1} />
                    <div
                        style={{
                            fontSize: 42,
                            fontWeight: 700,
                            color: "#93c5fd",
                            letterSpacing: "0.2em",
                            textShadow: "0 0 24px rgba(59, 130, 246, 0.8), 0 0 48px rgba(96, 165, 250, 0.4)",
                        }}
                    >
                        传染性
                    </div>
                </div>
                <div
                    style={{
                        marginTop: 12,
                        fontSize: 28,
                        color: "rgba(255,255,255,0.88)",
                        letterSpacing: "0.08em",
                        textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                    }}
                >
                    大家都在做，肯定是对的
                </div>
                {/* 箭头指向下方人群 */}
            </div>

            {/* 底部文案卡片：分段弹性入场 */}
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
                                    text={audioMap['scene4_5'].text}
                                    highlights={baseConfigs.find(c => c.name === 'performanceText')?.highlight || []}
                                    highlightTimings={timings.performanceText.highlightAbsoluteTimes || []}
                                    baseDelay={0}
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
                                    marginTop: 24,
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
                                        text={audioMap['scene4_7'].text}
                                        highlights={baseConfigs.find(c => c.name === 'principleText')?.highlight || []}
                                        highlightTimings={timings.principleText.highlightAbsoluteTimes || []}
                                        baseDelay={0}
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
