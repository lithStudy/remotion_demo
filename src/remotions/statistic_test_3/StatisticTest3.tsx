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

export const StatisticTest3Schema = z.object({});

const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration(), component: Scene1, label: "开场：质疑“有图有真相”" },
    { name: "scene2", duration: calculateScene2Duration(), component: Scene2, label: "理财大师的收益率陷阱" },
    { name: "scene3", duration: calculateScene3Duration(), component: Scene3, label: "数据可视化陷阱：相亲照的秘密" },
    { name: "scene4", duration: calculateScene4Duration(), component: Scene4, label: "提防被操纵的情绪" },
    { name: "scene5", duration: calculateScene5Duration(), component: Scene5, label: "结尾：反思与提问" },
];

const TRANSITION_DURATION = 15;

export const TOTAL_DURATION_STATISTIC_TEST_3 =
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

export const StatisticTest3: React.FC<z.infer<typeof StatisticTest3Schema>> = () => {
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
