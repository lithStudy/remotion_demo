import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare, BWTextFocus, BWTimeline } from "../../../components";

// 偏见分析
const SCENE_DURATION = 216 + 141 + 165 + 117 + 102 + 262;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={216}>
                <BWCenterFocus content={[{"text": "这种先入为主的偏见真不能全怪我们，", "startFrame": 0, "durationFrames": 86}, {"text": "因为我们的大脑在几万年的进化中，", "startFrame": 85, "durationFrames": 74}, {"text": "留下了一个致命的底层Bug。", "startFrame": 158, "durationFrames": 58}]} totalDurationFrames={216} imageSrc={staticFile("images/可得性启发6/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "底层Bug", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={216} durationInFrames={141}>
                <BWCenterFocus content={[{"text": "你要知道，", "startFrame": 0, "durationFrames": 21}, {"text": "现在的短视频算法和媒体博主，", "startFrame": 20, "durationFrames": 66}, {"text": "比你想象中更懂人性。", "startFrame": 86, "durationFrames": 55}]} totalDurationFrames={141} imageSrc={staticFile("images/可得性启发6/scene_2_2.png")} enterEffect="fadeIn" anchors={[{"text": "短视频算法", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "更懂人性", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={357} durationInFrames={165}>
                <BWSplitCompare content={[{"text": "他们深知1，", "startFrame": 0, "durationFrames": 29}, {"text": "比起平淡的日常，", "startFrame": 28, "durationFrames": 38}, {"text": "血淋淋的镜头和极端的冲突才是个流量抓手。", "startFrame": 65, "durationFrames": 99}]} totalDurationFrames={165} leftSrc={staticFile("images/可得性启发6/scene_2_3_left.png")} rightSrc={staticFile("images/可得性启发6/scene_2_3_right.png")} leftLabel={"平淡日常"} rightLabel={"极端冲突"} />
            </Sequence>
            <Sequence from={522} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "容易上当、", "startFrame": 0, "durationFrames": 23}, {"text": "情绪失控，", "startFrame": 22, "durationFrames": 29}, {"text": "其实是人类大脑的生存本能。", "startFrame": 51, "durationFrames": 66}]} totalDurationFrames={117} imageSrc={staticFile("images/可得性启发6/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "生存本能", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={639} durationInFrames={102}>
                <BWTextFocus content={[{"text": "我们被拉入了一个精心设计的“幸存者偏差”陷阱：", "startFrame": 0, "durationFrames": 102}]} totalDurationFrames={102} coreSentence={"精心设计的“幸存者偏差”陷阱"} coreSentenceAnchors={[{"coreSentenceAnchor": "幸存者偏差", "color": "red"}]} />
            </Sequence>
            <Sequence from={741} durationInFrames={262}>
                <BWTimeline content={[{"text": "媒体只负责喂养那些最离奇、", "startFrame": 0, "durationFrames": 74}, {"text": "最刺激的碎片，", "startFrame": 73, "durationFrames": 39}, {"text": "而我们的大脑则会自动接管剩下的逻辑，", "startFrame": 111, "durationFrames": 88}, {"text": "完成一次以偏概全的误判。", "startFrame": 198, "durationFrames": 63}]} totalDurationFrames={262} images={[{ src: staticFile("images/可得性启发6/scene_2_6_left.png"), position: "left", startFrame: 0, enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("images/可得性启发6/scene_2_6_center.png"), position: "center", startFrame: 60, enterEffect: "zoomIn", textIndex: 2 }, { src: staticFile("images/可得性启发6/scene_2_6_right.png"), position: "right", startFrame: 100, enterEffect: "fadeIn", textIndex: 3 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/可得性启发6/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
