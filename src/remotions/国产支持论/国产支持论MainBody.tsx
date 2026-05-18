import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { LandscapeCoverPoster } from "../../components";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_国产支持论,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./国产支持论Constants";

/** 横竖屏共用正文：封面 + 场景过渡（无全局 BGM、无外层 scale/壳） */
export const 国产支持论MainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={COVER_DURATION_FRAMES}>
            <LandscapeCoverPoster
                title="国产支持论"
                    subtitle="你早已是国产崛起的「隐形股东」"
                    themeColor="#059669"
                    badge="深度解读 · 理性思考"
                    seriesLabel="社会热点深读"
                    seriesLabelEn="SOCIAL DEEP DIVE"
                    methodologySteps={["争议", "数据", "结论"]}
                    methodologyStepsEn="DEBATE · DATA · VERDICT"
            />
        </Sequence>
        <Sequence from={COVER_DURATION_FRAMES} durationInFrames={MAIN_DURATION_国产支持论}>
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
