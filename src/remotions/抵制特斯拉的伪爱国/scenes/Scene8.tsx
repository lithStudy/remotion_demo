import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWQuoteCitation } from "../../../components";

// 剖析·宁德时代崛起
const SCENE_DURATION = 105 + 138 + 294;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={105}>
                <BWConceptCard content={[{"text": "还有宁德时代。", "startFrame": 0, "durationFrames": 35}, {"text": "中国人引以为傲的电池巨头。", "startFrame": 34, "durationFrames": 70}]} totalDurationFrames={105} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_8_1.png")} conceptName={"宁德时代"} />
            </Sequence>
            <Sequence from={105} durationInFrames={138}>
                <BWQuoteCitation content={[{"text": "但你知道吗？", "startFrame": 0, "durationFrames": 28}, {"text": "宁德时代的崛起，特斯拉是最大的推手之一。", "startFrame": 27, "durationFrames": 111}]} totalDurationFrames={138} quoteSource={"行业分析"} showFrom={1} />
            </Sequence>
            <Sequence from={243} durationInFrames={294}>
                <BWCauseChain content={[{"text": "特斯拉的入局，", "startFrame": 0, "durationFrames": 36}, {"text": "直接拉动了中国储能电池产能。", "startFrame": 36, "durationFrames": 75}, {"text": "今天中国占全球68%的储能电池产能。", "startFrame": 110, "durationFrames": 98}, {"text": "拿到这个国际话语权，特斯拉功不可没。", "startFrame": 207, "durationFrames": 86}]} totalDurationFrames={294} layout={"horizontal"} nodes={[{ label: "特斯拉入局", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_8_3_img0.png"), showFrom: 0 }, { label: "拉动产能", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_8_3_img1.png"), showFrom: 1 }, { label: "国际话语权", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_8_3_img2.png"), showFrom: 3 }]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
