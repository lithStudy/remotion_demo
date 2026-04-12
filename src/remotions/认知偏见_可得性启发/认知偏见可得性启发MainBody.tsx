import React from "react";
import { AbsoluteFill } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_认知偏见_可得性启发,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./认知偏见可得性启发Constants";

/** 横竖屏共用正文（无封面、无全局 BGM） */
export const 认知偏见可得性启发MainBody: React.FC = () => (
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
    </AbsoluteFill>
);
