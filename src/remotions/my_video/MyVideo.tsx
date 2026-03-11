import React from "react";
import { AbsoluteFill } from "remotion";
import { z } from "zod";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { Scene1, calculateScene1Duration } from "./scenes/Scene1";
import { Scene2, calculateScene2Duration } from "./scenes/Scene2";
import { Scene3, calculateScene3Duration } from "./scenes/Scene3";
import { Scene4, calculateScene4Duration } from "./scenes/Scene4";
import { Scene5, calculateScene5Duration } from "./scenes/Scene5";
import { Scene6, calculateScene6Duration } from "./scenes/Scene6";
import { Scene7, calculateScene7Duration } from "./scenes/Scene7";
import { Scene8, calculateScene8Duration } from "./scenes/Scene8";

export const MyVideoSchema = z.object({});

const sceneConfigs = [
    { name: "scene1", duration: calculateScene1Duration(), component: Scene1 },
    { name: "scene2", duration: calculateScene2Duration(), component: Scene2 },
    { name: "scene3", duration: calculateScene3Duration(), component: Scene3 },
    { name: "scene4", duration: calculateScene4Duration(), component: Scene4 },
    { name: "scene5", duration: calculateScene5Duration(), component: Scene5 },
    { name: "scene6", duration: calculateScene6Duration(), component: Scene6 },
    { name: "scene7", duration: calculateScene7Duration(), component: Scene7 },
    { name: "scene8", duration: calculateScene8Duration(), component: Scene8 },
];

const TRANSITION_DURATION = 15;

export const TOTAL_DURATION_MY_VIDEO =
    sceneConfigs.reduce((total, c) => total + c.duration, 0) -
    (sceneConfigs.length - 1) * TRANSITION_DURATION;

export const MyVideo: React.FC<z.infer<typeof MyVideoSchema>> = () => {
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
        </AbsoluteFill>
    );
};
