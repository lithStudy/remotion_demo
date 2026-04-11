import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { StaticCover } from "../../components";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_认知偏见_可得性启发,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./认知偏见可得性启发Constants";

/** 横竖屏共用正文：封面 + 场景过渡（无全局 BGM、无外层 scale/壳） */
export const 认知偏见可得性启发MainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={COVER_DURATION_FRAMES}>
            <StaticCover
                title="可得性启发"
                    subtitle="美国很危险，到处被枪击！"
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
