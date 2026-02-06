import React, { useMemo } from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Audio, Sequence, staticFile } from "remotion";
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
    { name: "title", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: null, audioId: "scene5_1" },
    { name: "subtitle", delayBefore: 0, delayAfter: 0, durationInFrames: 22, preName: "title", audioId: "scene5_2" },
    { name: "meeting", delayBefore: 0, delayAfter: 0, durationInFrames: 40, preName: "subtitle" }, // 会议场景出现

    // 表现部分 "表现"
    { name: "performance", delayBefore: 0, delayAfter: 0, durationInFrames: 15, preName: "subtitle", audioId: "scene5_3" },
    // 表现部分 "明明老板..."
    {
        name: "performanceText", delayBefore: 0, delayAfter: 0, durationInFrames: 1, preName: "performance", audioId: "scene5_4",
        highlight: ["没人敢反对", "别人没说话，我也不说", "其实我当时就觉得不行……"]
    },

    // 原理部分 "原理" - 依赖 performanceText (第一段读完)
    { name: "principle", delayBefore: 0, delayAfter: 0, durationInFrames: 40, preName: "performanceText", audioId: "scene5_5" },
    // 原理部分 "群体扼杀..."
    {
        name: "principleText", delayBefore: 0, delayAfter: 0, durationInFrames: 1, preName: "principle", audioId: "scene5_6",
        highlight: ["群体扼杀异议", "获得群体的归属感", "压抑正确的判断"]
    },
];

// 应用音频时长
// 应用音频时长
const configsWithAudio = applyAudioDurations(baseConfigs, audioMap, 30);
const animationConfigs = applyHighlightDelays(configsWithAudio, audioMap, 30);

export const calculateScene5Duration = (): number => {
    return calculateSceneDuration(baseConfigs, audioMapData as AudioMap);
};

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

/** 会议室人物 */
const MeetingPerson: React.FC<{
    x: number;
    y: number;
    isBoss?: boolean;
    isHesitant?: boolean; // 是否是犹豫的那个人
    frame: number;
    appearDelay: number;
}> = ({ x, y, isBoss = false, isHesitant = false, frame, appearDelay }) => {
    const opacity = interpolate(
        frame,
        [appearDelay, appearDelay + 15],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 老板动作：激情演讲（挥手）
    const bossHandWave = isBoss ? Math.sin(frame * 0.3) * 15 : 0;

    // 员工动作：鼓掌
    const clap = !isBoss && !isHesitant ? Math.abs(Math.sin(frame * 0.4)) * 5 : 0;

    // 犹豫者动作：举手又放下
    // 假设 hesitantStart 在 appearDelay 后 40 帧开始
    const hesitantStart = appearDelay + 40;
    const handRaise = isHesitant ? interpolate(
        frame,
        [hesitantStart, hesitantStart + 20, hesitantStart + 40, hesitantStart + 60],
        [0, -20, -20, 0], // 抬起，保持，放下
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    ) : 0;

    return (
        <g transform={`translate(${x}, ${y})`} style={{ opacity }}>
            {/* 身体 */}
            <path
                d={isBoss
                    ? "M -18 20 L -14 70 L 14 70 L 18 20 Z" // 站立
                    : "M -20 30 Q 0 25 20 30 L 20 60 L -20 60 Z" // 坐着
                }
                fill={isBoss ? "#3b82f6" : (isHesitant ? "#64748b" : "#475569")}
                stroke="#1e293b"
                strokeWidth={1}
            />

            {/* 头 */}
            <circle cx={0} cy={isBoss ? 0 : 10} r={14} fill={isBoss ? "#60a5fa" : "#94a3b8"} />

            {/* 老板的手臂 (挥舞) */}
            {isBoss && (
                <g transform={`rotate(${bossHandWave} 18 30)`}>
                    <path d="M 18 30 L 35 10" stroke="#3b82f6" strokeWidth={4} strokeLinecap="round" />
                    <circle cx={35} cy={10} r={4} fill="#60a5fa" />
                </g>
            )}

            {/* 老板的另一只手 (指屏幕) */}
            {isBoss && (
                <path d="M -18 30 L -40 20" stroke="#3b82f6" strokeWidth={4} strokeLinecap="round" />
            )}

            {/* 员工的手 (鼓掌) */}
            {!isBoss && !isHesitant && (
                <g transform={`translate(0, ${35})`}>
                    <circle cx={-5 + clap} cy={0} r={4} fill="#cbd5e1" />
                    <circle cx={5 - clap} cy={0} r={4} fill="#cbd5e1" />
                </g>
            )}

            {/* 犹豫者的手 (举起又放下) */}
            {isHesitant && (
                <g transform={`translate(15, 35)`}>
                    {/* 手臂 */}
                    <path
                        d={`M 0 0 L ${handRaise * 0.5} ${handRaise}`}
                        stroke="#64748b"
                        strokeWidth={3}
                        strokeLinecap="round"
                    />
                    <circle cx={handRaise * 0.5} cy={handRaise} r={4} fill="#cbd5e1" />
                </g>
            )}

            {/* 犹豫者的表情 (简单表示) */}
            {isHesitant && (
                <g transform="translate(0, 10)">
                    <circle cx={-4} cy={-2} r={1.5} fill="#1e293b" />
                    <circle cx={4} cy={-2} r={1.5} fill="#1e293b" />
                    <path d="M -4 4 Q 0 2 4 4" stroke="#1e293b" strokeWidth={1} fill="none" />
                    {/* 汗珠 */}
                    <circle cx={10} cy={-5} r={1.5} fill="#38bdf8" opacity={0.8} />
                </g>
            )}

        </g>
    );
};

const PPT: React.FC<{ x: number; y: number; scale: number; frame: number }> = ({ x, y, scale, frame }) => {
    // 错误闪烁
    const errorOpacity = interpolate(frame % 30, [0, 15, 30], [0.5, 1, 0.5]);

    return (
        <g transform={`translate(${x}, ${y}) scale(${scale})`}>
            {/* 支架 */}
            <rect x={-5} y={100} width={10} height={80} fill="#475569" />
            <rect x={-40} y={180} width={80} height={5} fill="#475569" />

            {/* 屏幕框 */}
            <rect x={-100} y={-70} width={200} height={150} fill="#1e293b" stroke="#94a3b8" strokeWidth={4} rx={4} />

            {/* 屏幕内容 */}
            <rect x={-95} y={-65} width={190} height={140} fill="#fff" />

            {/* PPT 内容：大坑 */}
            <text x={0} y={-30} textAnchor="middle" fontSize={24} fontWeight="bold" fill="#334155">PLAN A</text>

            {/* 明显的错误/大坑 */}
            <path d="M -60 10 L 60 10" stroke="#cbd5e1" strokeWidth={2} />
            <path d="M -60 30 L 60 30" stroke="#cbd5e1" strokeWidth={2} />

            {/* 红色大叉/漏洞 */}
            <g opacity={errorOpacity}>
                <path d="M -30 0 L 30 60" stroke="#ef4444" strokeWidth={8} strokeLinecap="round" />
                <path d="M 30 0 L -30 60" stroke="#ef4444" strokeWidth={8} strokeLinecap="round" />
            </g>

            <text x={0} y={80} textAnchor="middle" fontSize={14} fontWeight="bold" fill="#ef4444" opacity={errorOpacity}>CRITICAL ERROR</text>
        </g>
    );
}

export const Scene5: React.FC = () => {
    const frame = useCurrentFrame();
    const configsWithAudio = useMemo(() => applyAudioDurations(baseConfigs, audioMapData as AudioMap, 30), []);
    const configsWithHighlights = useMemo(() => applyHighlightDelays(configsWithAudio, audioMapData as AudioMap, 30), [configsWithAudio]);
    const timings = useMemo(() => calculateAnimationTimings(configsWithHighlights), [configsWithHighlights]);
    const animationTimings = calculateAnimationTimings(animationConfigs);

    // 场景入场
    const sceneOpacity = interpolate(
        frame,
        [timings.meeting.startTime, timings.meeting.startTime + 20],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 底部卡片动画
    const performanceStart = timings.performance.startTime;
    const principleStart = timings.principle.startTime;

    const cardInStart = performanceStart - 20;
    const cardInDuration = 26;

    const spacerHeight = interpolate(
        frame,
        [principleStart, principleStart + 20],
        [60, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const performanceOpacity = interpolate(
        frame,
        [performanceStart, performanceStart + 15],
        [0, 1],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const principleMaxHeight = interpolate(
        frame,
        [principleStart, principleStart + 20],
        [0, 400],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const principleOpacity = interpolate(
        frame,
        [principleStart + 10, principleStart + 25],
        [0, 1],
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
                        职场沉默
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
                        职场中的“国王新衣”
                    </div>
                </FadeInText>
            </div>

            {/* 中部动画区域 */}
            <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity }}>
                <svg width="100%" height="100%" viewBox="0 0 960 1280">
                    <g transform="translate(0, -150)">
                        {/* 背景墙面/地板 */}
                        <rect x={0} y={400} width={960} height={1500} fill="#1e293b" opacity={0.3} />
                        <line x1={0} y1={800} x2={960} y2={800} stroke="#334155" strokeWidth={2} />

                        {/* PPT 屏幕 */}
                        <PPT x={250} y={550} scale={1.2} frame={frame} />

                        {/* 老板 */}
                        <MeetingPerson
                            x={400}
                            y={680}
                            isBoss={true}
                            frame={frame}
                            appearDelay={timings.meeting.startTime}
                        />

                        {/* 会议桌 (长条) */}
                        <path d="M 100 800 L 860 800 L 900 950 L 60 950 Z" fill="#334155" stroke="#475569" strokeWidth={2} />

                        {/* 员工们 */}
                        <MeetingPerson x={200} y={850} frame={frame} appearDelay={timings.meeting.startTime + 5} />
                        <MeetingPerson x={350} y={850} frame={frame} appearDelay={timings.meeting.startTime + 10} />

                        {/* 犹豫的员工 */}
                        <MeetingPerson x={500} y={850} frame={frame} appearDelay={timings.meeting.startTime + 15} />

                        <MeetingPerson x={650} y={850} frame={frame} appearDelay={timings.meeting.startTime + 20} />
                        <MeetingPerson x={800} y={850} frame={frame} appearDelay={timings.meeting.startTime + 25} />
                    </g>
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
                                    text={audioMap['scene5_4'].text}
                                    highlights={baseConfigs.find(c => c.name === 'performanceText')?.highlight || []}
                                    highlightTimings={timings.performanceText.highlightAbsoluteTimes || []}
                                    baseDelay={0}
                                    highlightColors="rgba(220, 38, 38, 0.6)"
                                    style={{ margin: "0 2px" }}
                                />
                            </div>
                        </div>

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
                                        text={audioMap['scene5_6'].text}
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
