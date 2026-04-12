import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { LandscapeCoverPoster } from "../../components";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_认知偏见_幸存者偏差,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./认知偏见幸存者偏差Constants";

/** 横竖屏共用正文：封面 + 场景过渡（无全局 BGM、无外层 scale/壳） */
export const 认知偏见幸存者偏差MainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={COVER_DURATION_FRAMES}>
            <LandscapeCoverPoster
                title="幸存者偏差"
                    subtitle="读书有个屁用！"
                    themeColor="#2563EB"
                    badge="认识自我 · 理性思考"
                    seriesLabel="认知心理学"
                    seriesLabelEn="COGNITIVE PSYCHOLOGY"
                    methodologySteps={["觉察", "归因", "调整"]}
                    methodologyStepsEn="OBSERVE · ATTRIBUTE · ADJUST"
            />
        </Sequence>
        <Sequence from={COVER_DURATION_FRAMES} durationInFrames={MAIN_DURATION_认知偏见_幸存者偏差}>
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
