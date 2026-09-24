import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWQuoteCitation } from "../../../components";

// 引入：时间质检谬误
const SCENE_DURATION = 84 + 220 + 123 + 116;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={84}>
                <BWQuoteCitation content={[{"text": "“这东西要是没用，", "startFrame": 0, "durationFrames": 36}, {"text": "能流传几千年？”", "startFrame": 35, "durationFrames": 48}]} totalDurationFrames={84} quoteDisplayText={"这东西要是没用，能流传几千年？"} quoteSource={"民间俗语"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={84} durationInFrames={220}>
                <BWCenterFocus content={[{"text": "每当你质疑一个传统，", "startFrame": 0, "durationFrames": 48}, {"text": "总有人拿这句话堵你的嘴", "startFrame": 48, "durationFrames": 52}, {"text": "就好像时间是个质检员，", "startFrame": 99, "durationFrames": 55}, {"text": "能流传下来的，", "startFrame": 153, "durationFrames": 35}, {"text": "就一定是好东西。", "startFrame": 188, "durationFrames": 31}]} totalDurationFrames={220} imageSrc={staticFile("images/千年传承论/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={304} durationInFrames={123}>
                <BWCognitiveShift content={[{"text": "但实际上，", "startFrame": 0, "durationFrames": 28}, {"text": "能经过时间考验的，", "startFrame": 27, "durationFrames": 44}, {"text": "不只是精华，", "startFrame": 70, "durationFrames": 29}, {"text": "还有糟粕。", "startFrame": 99, "durationFrames": 24}]} totalDurationFrames={123} notText={"只有精华"} butText={"还有糟粕"} butSrc={staticFile("images/千年传承论/scene_1_3.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={427} durationInFrames={116}>
                <BWMagnifyingGlass content={[{"text": "而糟粕之所以能传得下来，", "startFrame": 0, "durationFrames": 54}, {"text": "通常是两类机制在起作用。", "startFrame": 53, "durationFrames": 62}]} totalDurationFrames={116} anchors={[{"text": "两类机制", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/千年传承论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
