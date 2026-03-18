import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { z } from "zod";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";
import { Scene5, calculateScene5Duration } from "./scenes/Scene5";
import { Scene6, calculateScene6Duration } from "./scenes/Scene6";

export const StatisticTest1Schema = z.object({});

const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration(), component: Scene1, label: "开场：冰淇淋与溺水" },
    { name: "scene2", duration: calculateScene2Duration(), component: Scene2, label: "案例一：成功CEO与早起" },
    { name: "scene3", duration: calculateScene3Duration(), component: Scene3, label: "案例二：长寿老人与烟酒" },
    { name: "scene4", duration: calculateScene4Duration(), component: Scene4, label: "案例三：相亲与“割韭菜”" },
    { name: "scene5", duration: calculateScene5Duration(), component: Scene5, label: "原理与总结" },
    { name: "scene6", duration: calculateScene6Duration(), component: Scene6, label: "结尾：思考题" },
];

const TRANSITION_DURATION = 15;

export const TOTAL_DURATION_STATISTIC_TEST_1 =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

const ProgressBar: React.FC = () => {
    const frame = useCurrentFrame();
    
    let currentStart = 0;
    const segments = sceneConfigs.map((c, i) => {
        const isLast = i === sceneConfigs.length - 1;
        const segmentDuration = isLast ? c.duration : c.duration - TRANSITION_DURATION;
        
        const segment = { start: currentStart, duration: segmentDuration };
        currentStart += segmentDuration;
        return segment;
    });

    const activeIndex = segments.findIndex(seg => frame >= seg.start && frame < seg.start + seg.duration);
    const validActiveIndex = activeIndex !== -1 ? activeIndex : segments.length - 1;
    const activeLabel = sceneConfigs[validActiveIndex]?.label || "";

    return (
        <div style={{
            position: "absolute", top: 40, left: 40, right: 40,
            display: "flex", flexDirection: "column", gap: 16, zIndex: 100
        }}>
            <div style={{ display: "flex", gap: 8, height: 8 }}>
                {segments.map((seg, i) => {
                    const progress = Math.max(0, Math.min(1, (frame - seg.start) / seg.duration));
                    return (
                        <div key={i} style={{
                            flex: 1, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: 4, overflow: "hidden"
                        }}>
                            <div style={{
                                width: `${progress * 100}%`, height: "100%", backgroundColor: "rgba(255, 255, 255, 0.9)"
                            }} />
                        </div>
                    );
                })}
            </div>
            
            <div style={{
                fontSize: 32,
                fontWeight: 700,
                color: "rgba(255, 255, 255, 0.95)",
                textAlign: "left",
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                padding: "4px 12px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: 8,
                alignSelf: "flex-start",
                backdropFilter: "blur(4px)"
            }}>
                {activeLabel}
            </div>
        </div>
    );
};

export const StatisticTest1: React.FC<z.infer<typeof StatisticTest1Schema>> = () => {
    return (
        <AbsoluteFill>
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
            <ProgressBar />
        </AbsoluteFill>
    );
};
