import React from "react";
import { AbsoluteFill, Audio, interpolate, staticFile, Sequence, useCurrentFrame } from "remotion";
import { z } from "zod";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { StaticCover } from "../../components";
import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";
import { Scene5, calculateScene5Duration } from "./scenes/Scene5";

export const 认知偏见可得性启发Schema = z.object({});

const TRANSITION_DURATION = 15;
const SCENE_END_PADDING = 20;

const COVER_DURATION_FRAMES = 5;

const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration() + SCENE_END_PADDING, component: Scene1, label: "引入·空难焦虑与避险" },
    { name: "scene2", duration: calculateScene2Duration() + SCENE_END_PADDING, component: Scene2, label: "剖析·恐惧劫持与本能" },
    { name: "scene3", duration: calculateScene3Duration() + SCENE_END_PADDING, component: Scene3, label: "命名·可得性启发" },
    { name: "scene4", duration: calculateScene4Duration() + SCENE_END_PADDING, component: Scene4, label: "反转·车祸与慢性病" },
    { name: "scene5", duration: calculateScene5Duration() + SCENE_END_PADDING, component: Scene5, label: "召唤·数据与降级" },
];

const MAIN_DURATION_认知偏见_可得性启发 =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const TOTAL_DURATION_认知偏见_可得性启发 =
    COVER_DURATION_FRAMES + MAIN_DURATION_认知偏见_可得性启发;

const ProgressBar: React.FC = () => {
    const frame = useCurrentFrame();
    if (frame < COVER_DURATION_FRAMES) {
        return null;
    }
    const contentFrame = frame - COVER_DURATION_FRAMES;

    let currentStart = 0;
    const segments = sceneConfigs.map((c, i) => {
        const isLast = i === sceneConfigs.length - 1;
        const segmentDuration = isLast ? c.duration : c.duration - TRANSITION_DURATION;

        const segment = { start: currentStart, duration: segmentDuration };
        currentStart += segmentDuration;
        return segment;
    });

    const activeIndex = segments.findIndex(seg => contentFrame >= seg.start && contentFrame < seg.start + seg.duration);
    const validActiveIndex = activeIndex !== -1 ? activeIndex : segments.length - 1;
    const activeLabel = sceneConfigs[validActiveIndex]?.label || "";

    return (
        <div style={{
            position: "absolute", top: 40, left: 40, right: 40,
            display: "flex", flexDirection: "column", gap: 16, zIndex: 100
        }}>
            <div style={{ display: "flex", gap: 8, height: 8 }}>
                {segments.map((seg, i) => {
                    const progress = Math.max(0, Math.min(1, (contentFrame - seg.start) / seg.duration));
                    const isActive = i === validActiveIndex;
                    return (
                        <div key={i} style={{
                            flex: 1,
                            backgroundColor: isActive ? "rgba(34, 43, 69, 0.18)" : "rgba(34, 43, 69, 0.1)",
                            borderRadius: 999,
                            overflow: "hidden",
                            border: isActive ? "1px solid rgba(34, 43, 69, 0.32)" : "1px solid rgba(34, 43, 69, 0.2)",
                            boxShadow: isActive
                                ? "0 3px 10px rgba(31, 41, 55, 0.12)"
                                : "0 1px 4px rgba(31, 41, 55, 0.08)",
                        }}>
                            <div style={{
                                width: `${progress * 100}%`,
                                height: "100%",
                                background: isActive
                                    ? "linear-gradient(90deg, rgba(29, 78, 216, 0.95), rgba(56, 189, 248, 0.92))"
                                    : "rgba(30, 41, 59, 0.72)",
                                boxShadow: isActive ? "0 0 12px rgba(37, 99, 235, 0.35)" : "none",
                            }} />
                        </div>
                    );
                })}
            </div>

            <div style={{
                fontSize: 30,
                fontWeight: 700,
                fontFamily: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Source Han Sans SC", sans-serif',
                letterSpacing: 0.4,
                color: "rgba(17, 24, 39, 0.95)",
                textAlign: "left",
                textShadow: "0 1px 2px rgba(255,255,255,0.45)",
                padding: "6px 14px",
                backgroundColor: "rgba(255, 255, 255, 0.58)",
                border: "1px solid rgba(17, 24, 39, 0.12)",
                borderRadius: 10,
                alignSelf: "flex-start",
                backdropFilter: "blur(6px)",
                boxShadow: "0 6px 20px rgba(15, 23, 42, 0.12)",
            }}>
                {activeLabel}
            </div>
        </div>
    );
};

export const 认知偏见可得性启发: React.FC<z.infer<typeof 认知偏见可得性启发Schema>> = () => {
    const frame = useCurrentFrame();
    const bgShiftX = interpolate(frame % 240, [0, 120, 240], [-4, 4, -4], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const bgShiftY = interpolate(frame % 180, [0, 90, 180], [-3, 3, -3], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });
    const bgBreathOpacity = interpolate(frame % 150, [0, 75, 150], [0.22, 0.34, 0.22], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    return (
        <AbsoluteFill>
            <Audio
                src={staticFile("audio/effects/Seven_Measured_Breaths.mp3")}
                loop
                volume={0.22}
                name="Background music"
            />
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    background: "linear-gradient(135deg, #fffdf7 0%, #f7fbff 52%, #f6fff8 100%)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: "-6%",
                    pointerEvents: "none",
                    opacity: bgBreathOpacity,
                    transform: `translate(${bgShiftX}px, ${bgShiftY}px)`,
                    background:
                        "radial-gradient(circle at 20% 30%, rgba(255, 225, 170, 0.42), transparent 36%), radial-gradient(circle at 78% 64%, rgba(174, 222, 255, 0.35), transparent 40%), radial-gradient(circle at 52% 80%, rgba(191, 255, 208, 0.26), transparent 42%)",
                }}
            />
            <Sequence durationInFrames={COVER_DURATION_FRAMES}>
                <StaticCover
                    title="认知偏见_可得性启发"
                    subtitle="空难新闻让你改签高铁？别装了，你的大脑正在被收割"
                    coverDurationInFrames={COVER_DURATION_FRAMES}
                    themeColor="#2563EB"
                    badge="认识自我 · 理性思考"
                    seriesLabel="认知心理学"
                    seriesLabelEn="COGNITIVE PSYCHOLOGY"
                    methodologySteps={["觉察", "归因", "调整"]}
                    methodologyStepsEn="OBSERVE · ATTRIBUTE · ADJUST"
                />
            </Sequence>
            <Sequence from={COVER_DURATION_FRAMES} durationInFrames={MAIN_DURATION_认知偏见_可得性启发}>
                <AbsoluteFill>
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "10%",
                            minHeight: 48,
                            backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                    />
                    <TransitionSeries>
                        {sceneConfigs.map((config, index) => {
                            const SceneComp = config.component;
                            const isLast = index === sceneConfigs.length - 1;
                            return (
                                <React.Fragment key={config.name}>
                                    <TransitionSeries.Sequence durationInFrames={config.duration}>
                                        <SceneComp />
                                    </TransitionSeries.Sequence>
                                    {!isLast && (
                                        <TransitionSeries.Transition
                                            timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
                                            presentation={fade()}
                                        />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </TransitionSeries>
                </AbsoluteFill>
            </Sequence>
            <ProgressBar />
        </AbsoluteFill>
    );
};
