import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 底层Bug与流量陷阱
const SCENE_DURATION = 103 + 91 + 104 + 90 + 181;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "这种先入为主的偏见真不能全怪我们，", "startFrame": 0, "durationFrames": 37}, {"text": "因为我们的大脑在几万年的进化中，", "startFrame": 37, "durationFrames": 35}, {"text": "留下了一个致命的底层Bug。", "startFrame": 72, "durationFrames": 31}]} totalDurationFrames={103} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "先入为主", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "底层Bug", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={103} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "你要知道，", "startFrame": 0, "durationFrames": 30}, {"text": "现在的短视频算法和媒体博主，", "startFrame": 30, "durationFrames": 31}, {"text": "比你想象中更懂人性。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "短视频算法", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={194} durationInFrames={104}>
                <BWCenterFocus content={[{"text": "他们深知，", "startFrame": 0, "durationFrames": 30}, {"text": "比起平淡的日常，", "startFrame": 30, "durationFrames": 30}, {"text": "血淋淋的镜头和极端的冲突才是个流量抓手。", "startFrame": 60, "durationFrames": 44}]} totalDurationFrames={104} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "流量抓手", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={298} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "容易上当、", "startFrame": 0, "durationFrames": 30}, {"text": "情绪失控，", "startFrame": 30, "durationFrames": 30}, {"text": "其实是人类大脑的生存本能。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "生存本能", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={388} durationInFrames={181}>
                <BWConceptCard content={[{"text": "我们被拉入了一个精心设计的“幸存者偏差”陷阱：", "startFrame": 0, "durationFrames": 51}, {"text": "媒体只负责喂养那些最离奇、", "startFrame": 51, "durationFrames": 30}, {"text": "最刺激的碎片，", "startFrame": 81, "durationFrames": 30}, {"text": "而我们的大脑则会自动接管剩下的逻辑，", "startFrame": 111, "durationFrames": 40}, {"text": "完成一次以偏概全的误判。", "startFrame": 151, "durationFrames": 30}]} totalDurationFrames={181} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"幸存者偏差"} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
