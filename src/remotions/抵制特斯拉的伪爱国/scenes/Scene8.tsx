import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWQuoteCitation } from "../../../components";

// 剖析·宁德时代崛起
const SCENE_DURATION = 113 + 125 + 309;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={113}>
                <BWConceptCard content={[{"text": "还有宁德时代。", "startFrame": 0, "durationFrames": 51}, {"text": "中国人引以为傲的电池巨头。", "startFrame": 50, "durationFrames": 63}]} totalDurationFrames={113} imageSrc={staticFile("images/抵制特斯拉的伪爱国/scene_8_1.png")} conceptName={"宁德时代"} />
            </Sequence>
            <Sequence from={113} durationInFrames={125}>
                <BWQuoteCitation content={[{"text": "但你知道吗？", "startFrame": 0, "durationFrames": 23}, {"text": "宁德时代的崛起，特斯拉是最大的推手之一。", "startFrame": 22, "durationFrames": 103}]} totalDurationFrames={125} quoteSource={"行业分析"} showFrom={1} />
            </Sequence>
            <Sequence from={238} durationInFrames={309}>
                <BWCauseChain content={[{"text": "特斯拉的入局，", "startFrame": 0, "durationFrames": 33}, {"text": "直接拉动了中国储能电池产能。", "startFrame": 32, "durationFrames": 67}, {"text": "今天中国占全球68%的储能电池产能。", "startFrame": 99, "durationFrames": 123}, {"text": "拿到这个国际话语权，特斯拉功不可没。", "startFrame": 222, "durationFrames": 86}]} totalDurationFrames={309} layout={"horizontal"} nodes={[{ label: "特斯拉入局", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_8_3_img0.png"), showFrom: 0 }, { label: "拉动产能", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_8_3_img1.png"), showFrom: 1 }, { label: "国际话语权", imageSrc: staticFile("images/抵制特斯拉的伪爱国/scene_8_3_img2.png"), showFrom: 3 }]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_8/scene_8.mp3")} />
        </AbsoluteFill>
    );
};
