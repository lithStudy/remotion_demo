import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { LandscapeCoverPoster } from "../../components";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_开源精神,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./开源精神Constants";

/** 横竖屏共用正文：封面 + 场景过渡（无全局 BGM、无外层 scale/壳） */
export const 开源精神MainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={COVER_DURATION_FRAMES}>
            <LandscapeCoverPoster
                title="开源精神"
                    subtitle="当商业选择收割，是开源精神给了平民对抗垄断的“最后一颗子弹”"
                    themeColor="#FF6900"
                    badge="深度解读 · 数据与事实"
                    seriesLabel="科技热点深读"
                    seriesLabelEn="TECH DEEP DIVE"
                    methodologySteps={["争议", "数据", "结论"]}
                    methodologyStepsEn="DEBATE · DATA · VERDICT"
            />
        </Sequence>
        <Sequence from={COVER_DURATION_FRAMES} durationInFrames={MAIN_DURATION_开源精神}>
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
