import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { LandscapeCoverPoster } from "../../components";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_认知偏见_锚定效应,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./anchoringConstants";

/**
 * 横竖屏共用的版心内容：封面 + 场景过渡（不含全局 BGM 与外层 scale/壳）
 */
export const AnchoringBiasMainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={COVER_DURATION_FRAMES}>
            <LandscapeCoverPoster
                title="锚定效应"
                subtitle="第一印象是怎么操控你的判断的？"
                themeColor="#2563EB"
                badge="认识自我 · 理性思考"
                seriesLabel="认知心理学"
                seriesLabelEn="COGNITIVE PSYCHOLOGY"
                methodologySteps={["觉察", "归因", "调整"]}
                methodologyStepsEn="OBSERVE · ATTRIBUTE · ADJUST"
            />
        </Sequence>
        <Sequence from={COVER_DURATION_FRAMES} durationInFrames={MAIN_DURATION_认知偏见_锚定效应}>
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
        </Sequence>
    </>
);
