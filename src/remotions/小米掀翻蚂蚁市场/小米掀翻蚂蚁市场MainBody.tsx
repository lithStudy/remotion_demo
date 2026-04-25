import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { LandscapeCoverPoster } from "../../components";
import {
    COVER_DURATION_FRAMES,
    MAIN_DURATION_小米掀翻蚂蚁市场,
    sceneConfigs,
    TRANSITION_DURATION,
} from "./小米掀翻蚂蚁市场Constants";

/** 横竖屏共用正文：封面 + 场景过渡（无全局 BGM、无外层 scale/壳） */
export const 小米掀翻蚂蚁市场MainBody: React.FC = () => (
    <>
        <Sequence durationInFrames={COVER_DURATION_FRAMES}>
            <LandscapeCoverPoster
                title="小米掀翻蚂蚁市场"
                    subtitle="当年山寨横行的充电宝去哪了？一条鲶鱼把小家电行业全搅了！"
                    themeColor="#2563EB"
                    badge="认识自我 · 理性思考"
                    seriesLabel="科技热点深读"
                    seriesLabelEn="TECH DEEP DIVE"
                    methodologySteps={["觉察", "归因", "调整"]}
                    methodologyStepsEn="TECH DEEP DIVE"
            />
        </Sequence>
        <Sequence from={COVER_DURATION_FRAMES} durationInFrames={MAIN_DURATION_小米掀翻蚂蚁市场}>
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
