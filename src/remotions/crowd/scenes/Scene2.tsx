import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Audio, Sequence, staticFile } from "remotion";
import { FadeInText, SpringText, AutoHighlightText } from "../../../components";
import { useMemo } from "react";
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
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: null, audioId: "" },
    { name: "subtitle", delayBefore: 5, delayAfter: 0, durationInFrames: 22, preName: "title", audioId: "scene2_2" },

    // 图形动画
    { name: "leftFigure", delayBefore: 0, delayAfter: 0, durationInFrames: 25, preName: "subtitle" },
    { name: "arrow", delayBefore: 15, delayAfter: 0, durationInFrames: 20, preName: "leftFigure" },
    { name: "rightGroup", delayBefore: 0, delayAfter: 0, durationInFrames: 35, preName: "subtitle" },

    // 表现部分
    { name: "performance", delayBefore: 0, delayAfter: 0, durationInFrames: 15, preName: "subtitle" },

    // 原理部分 (等待图形动画稍微进行一会儿) - 对应 "概念解析"
    { name: "conceptTitle", delayBefore: 0, delayAfter: 0, durationInFrames: 40, preName: "subtitle", audioId: "scene2_3" },
    // 添加正文朗读
    {
        name: "principleText", delayBefore: 5, delayAfter: 0, durationInFrames: 1, preName: "conceptTitle", audioId: "scene2_4",
        highlight: [
            "个性消失，智力下降",
            "群体精神",
            "易怒、冲动",
            "没脑子，还觉得自己无所不能",
            "一个人是龙，一群人是虫"
        ]
    },
];

// 应用音频时长
// 应用音频时长
const configsWithAudio = applyAudioDurations(baseConfigs, audioMap, 30);
const animationConfigs = applyHighlightDelays(configsWithAudio, audioMap, 30);

export const calculateScene2Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap);
};

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

/** 金色 -> 群体火焰色 插值：0=金色(理性)，1=橙红(被同化) */
const lerpColor = (t: number, from: [number, number, number], to: [number, number, number]) => {
    const r = Math.round(from[0] * (1 - t) + to[0] * t);
    const g = Math.round(from[1] * (1 - t) + to[1] * t);
    const b = Math.round(from[2] * (1 - t) + to[2] * t);
    return `rgb(${r},${g},${b})`;
};

const GOLD_LIGHT: [number, number, number] = [255, 235, 59];
const GOLD_DARK: [number, number, number] = [255, 179, 0];
const BLUE_LIGHT: [number, number, number] = [100, 181, 246];
const BLUE_DARK: [number, number, number] = [33, 150, 243];
const CROWD_LIGHT: [number, number, number] = [255, 107, 53];
const CROWD_DARK: [number, number, number] = [229, 62, 62];

/** 与群体一致的人形：火焰头 + 身体（同一 path） */
const BODY_PATH = "M -14 28 L 14 28 L 12 75 L -12 75 Z";

type FlameType = "gold" | "blue";

/** 上方个体：与群体同形态（火焰头+身体），火焰先为金色或蓝色，向下移入群体过程中渐变为群体色 */
const TopIndividual: React.FC<{
    frame: number;
    start: number;
    duration: number;
    arrowStart: number;
    flameType: FlameType;
    offsetX: number;
}> = ({ frame, start, duration, arrowStart, flameType, offsetX }) => {
    const opacity = interpolate(frame, [start, start + duration], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    /* 移动：箭头出现后开始从上移向群体，约 90 帧内从 top 28% 移到 45% */
    const moveStart = arrowStart + 15;
    const moveDuration = 90;
    const moveProgress = interpolate(
        frame,
        [moveStart, moveStart + moveDuration],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const topPercent = 25 + moveProgress * (40 - 25);

    /* 移入过程中颜色从金色/蓝色变为群体火焰色 */
    const assimilationProgress = moveProgress;
    const [initialLight, initialDark] =
        flameType === "gold" ? [GOLD_LIGHT, GOLD_DARK] : [BLUE_LIGHT, BLUE_DARK];
    const flameOuter = lerpColor(assimilationProgress, initialDark, CROWD_DARK);
    const flameMid = lerpColor(assimilationProgress, initialLight, CROWD_LIGHT);
    const flameInner = lerpColor(
        assimilationProgress,
        flameType === "gold" ? [255, 235, 59] : [144, 202, 249],
        [255, 140, 66]
    );
    const flameHighlight = lerpColor(
        assimilationProgress,
        flameType === "gold" ? [255, 224, 130] : [187, 222, 251],
        [255, 224, 130]
    );

    const flicker = 1 + 0.15 * Math.sin((frame / 20) * Math.PI * 2);
    const sway = Math.sin((frame * 0.2 + offsetX) * 0.08) * 3;

    return (
        <div
            style={{
                position: "absolute",
                left: `calc(50% + ${offsetX}px)`,
                top: `${topPercent}%`,
                width: 56,
                height: 100,
                opacity,
                transform: `translate(-50%, 0) translateX(${sway}px)`,
            }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox="-20 -28 40 108"
                fill="none"
                style={{ display: "block" }}
            >
                <g transform={`scale(${flicker})`}>
                    <path
                        d="M 0 -20 Q 10 -28 14 -16 Q 20 -26 26 -10 Q 18 -14 10 4 Q 0 -6 0 -20"
                        fill={flameOuter}
                        stroke={flameOuter}
                        strokeWidth="1.5"
                        style={{ opacity: 0.9 }}
                    />
                    <path
                        d="M 0 -18 Q 8 -25 12 -15 Q 18 -22 22 -8 Q 16 -12 8 2 Q 0 -5 0 -18"
                        fill={flameMid}
                        stroke={flameMid}
                        strokeWidth="1"
                    />
                    <path
                        d="M 4 -12 Q 10 -18 12 -8 Q 8 -4 4 -12"
                        fill={flameInner}
                        opacity={0.85}
                    />
                    <ellipse cx="6" cy="-8" rx="4" ry="6" fill={flameHighlight} opacity={0.7} />
                </g>
                <path
                    d={BODY_PATH}
                    fill="#1e3a5f"
                    stroke="#0f172a"
                    strokeWidth="1.5"
                />
            </svg>
        </div>
    );
};


/** 单团火焰：多层 + 剧烈 flicker + 色相变化 */
const FlameHead: React.FC<{
    cx: number;
    cy: number;
    scale: number;
    frame: number;
    seed: number;
    appearFrame: number;
}> = ({ cx, cy, scale, frame, seed, appearFrame }) => {
    const flickerA = 1 + 0.22 * Math.sin((frame * 0.8 + seed * 7) * 0.15);
    const flickerB = 1 + 0.18 * Math.sin((frame * 0.6 + seed * 5 + 20) * 0.12);
    const sway = Math.sin((frame * 0.3 + seed * 3) * 0.1) * 4;
    const opacity = interpolate(frame, [appearFrame, appearFrame + 12], [0, 0.95], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const hueShift = Math.sin((frame * 0.2 + seed) * 0.1) * 8;

    return (
        <g
            transform={`translate(${cx + sway}, ${cy}) scale(${scale * flickerA})`}
            style={{ opacity }}
        >
            {/* 外焰 */}
            <path
                d="M 0 -20 Q 10 -28 14 -16 Q 20 -26 26 -10 Q 18 -14 10 4 Q 0 -6 0 -20"
                fill={`hsl(${25 + hueShift}, 85%, 55%)`}
                stroke="#C62828"
                strokeWidth="1.5"
                style={{ opacity: 0.9 }}
            />
            {/* 中焰 */}
            <g transform={`scale(${flickerB / flickerA})`}>
                <path
                    d="M 0 -18 Q 8 -25 12 -15 Q 18 -22 22 -8 Q 16 -12 8 2 Q 0 -5 0 -18"
                    fill="#FF6B35"
                    stroke="#E53E3E"
                    strokeWidth="1"
                />
                <path
                    d="M 4 -12 Q 10 -18 12 -8 Q 8 -4 4 -12"
                    fill="#FF8C42"
                    opacity={0.85 + 0.1 * Math.sin(frame * 0.5)}
                />
            </g>
            {/* 内焰高光 */}
            <ellipse cx="6" cy="-8" rx="4" ry="6" fill="#FFE082" opacity={0.6 + 0.2 * Math.sin(frame * 0.4 + seed)} />
        </g>
    );
};

/** 右侧群体：错峰出现、火焰多层、身体轻微摇摆 */
const RightGroup: React.FC<{ frame: number; start: number; duration: number }> = ({
    frame,
    start,
    duration,
}) => {
    const opacity = interpolate(frame, [start, start + Math.min(25, duration)], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    const figures: { x: number; y: number; scale: number; flameSeed: number }[] = [
        { x: 60, y: 50, scale: 1, flameSeed: 0 },
        { x: 130, y: 35, scale: 0.9, flameSeed: 3 },
        { x: 200, y: 55, scale: 0.85, flameSeed: 1 },
        { x: 260, y: 30, scale: 0.95, flameSeed: 5 },
        { x: 320, y: 50, scale: 0.88, flameSeed: 2 },
        { x: 380, y: 38, scale: 0.92, flameSeed: 4 },
        { x: 420, y: 60, scale: 0.8, flameSeed: 6 },
    ];

    return (
        <div
            style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                width: 480,
                height: 320,
                opacity,
                transform: "translateX(-50%)",
            }}
        >
            <svg width="100%" height="100%" viewBox="0 0 480 320" fill="none" style={{ display: "block" }}>
                {figures.map((fig, i) => {
                    const appearFrame = start + i * 5;
                    const bodySway = Math.sin((frame * 0.25 + i * 8) * 0.08) * 3;
                    const bodyOpacity = interpolate(frame, [appearFrame, appearFrame + 15], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                    });
                    return (
                        <g
                            key={i}
                            transform={`translate(${fig.x + bodySway}, ${fig.y})`}
                            style={{ opacity: bodyOpacity }}
                        >
                            <FlameHead
                                cx={0}
                                cy={0}
                                scale={fig.scale}
                                frame={frame}
                                seed={fig.flameSeed}
                                appearFrame={appearFrame}
                            />
                            <path
                                d={BODY_PATH}
                                fill="#1e3a5f"
                                stroke="#0f172a"
                                strokeWidth="1.5"
                            />
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

const SCENE2_FADE_OUT_START = 20; // 结尾多少帧开始淡出，与下一景过渡时减少重叠

export const Scene2: React.FC = () => {
    const frame = useCurrentFrame();
    const configsWithAudio = useMemo(() => applyAudioDurations(baseConfigs, audioMapData as AudioMap, 30), []);
    const configsWithHighlights = useMemo(() => applyHighlightDelays(configsWithAudio, audioMapData as AudioMap, 30), [configsWithAudio]);
    const timings = useMemo(() => calculateAnimationTimings(configsWithHighlights), [configsWithHighlights]);
    const animationTimings = calculateAnimationTimings(animationConfigs);
    const sceneDuration = calculateScene2Duration();

    // 表现部分出现的时间
    const performanceStart = timings.performance.startTime;
    // 原理部分出现的时间（也就是表现部分上移的时间）
    const principleStart = timings.conceptTitle.startTime;

    const cardInStart = performanceStart;
    const cardInDuration = 26;

    // 结尾淡出，避免与 Scene3 过渡时两景内容重叠
    const endFadeOut = interpolate(
        frame,
        [sceneDuration - SCENE2_FADE_OUT_START, sceneDuration],
        [1, 0.35],
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
                    opacity: endFadeOut,
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
                        乌合之众
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
                        群体中没有智者，只有情绪巨婴
                    </div>
                </FadeInText>
            </div>

            {/* 中部：上方智者(金+蓝) → 向下箭头 → 下方群体 */}
            <div style={{ opacity: endFadeOut }}>
                <TopIndividual
                    frame={frame}
                    start={timings.leftFigure.startTime}
                    duration={timings.leftFigure.durationInFrames}
                    arrowStart={timings.arrow.startTime}
                    flameType="gold"
                    offsetX={-48}
                />
                <TopIndividual
                    frame={frame}
                    start={timings.leftFigure.startTime}
                    duration={timings.leftFigure.durationInFrames}
                    arrowStart={timings.arrow.startTime}
                    flameType="blue"
                    offsetX={48}
                />
                <RightGroup
                    frame={frame}
                    start={timings.rightGroup.startTime}
                    duration={timings.rightGroup.durationInFrames}
                />
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
                    opacity: endFadeOut,
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


                        {/* 原理部分 */}
                        <div style={{ opacity: principleOpacity, maxHeight: principleMaxHeight, overflow: "hidden" }}>
                            <div
                                style={{
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
                                    概念解析
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
                                        text={audioMap['scene2_4'].text}
                                        highlights={baseConfigs.find(c => c.name === 'principleText')?.highlight || []}
                                        highlightTimings={timings.principleText.highlightAbsoluteTimes || []}
                                        baseDelay={0}
                                        highlightColors={[
                                            "rgba(49, 179, 240, 0.5)",
                                            "rgba(248, 244, 15, 0.63)",
                                            "rgba(220, 38, 38, 0.6)",
                                            "rgba(14, 165, 233, 0.5)",
                                            "rgba(255, 220, 150, 0.6)"
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
