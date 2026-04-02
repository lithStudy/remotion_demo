import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 大脑的底层BUG
const SCENE_DURATION = 386 + 225 + 173;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={386}>
                <BWCenterFocus content={[{"text": "我们普通人之所以经常被各种神药、", "startFrame": 0, "durationFrames": 68}, {"text": "偏方或者所谓的大师收割，", "startFrame": 67, "durationFrames": 62}, {"text": "真的不是因为我们不够聪明，", "startFrame": 128, "durationFrames": 55}, {"text": "而是因为我们的大脑天生就有一个底层Bug：", "startFrame": 183, "durationFrames": 102}, {"text": "极度渴望给结果找一个立竿见影的因果关系。", "startFrame": 284, "durationFrames": 101}]} totalDurationFrames={386} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_2_1.png")} enterEffect="breathe" anchors={[{"text": "底层Bug", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "因果关系", "showFrom": 4, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={386} durationInFrames={225}>
                <BWCenterFocus content={[{"text": "算法正是利用了这种认知本能，", "startFrame": 0, "durationFrames": 66}, {"text": "每天在信息茧房里给我们投喂无数个我吃了这个药、", "startFrame": 65, "durationFrames": 112}, {"text": "身体变好了的孤例。", "startFrame": 176, "durationFrames": 48}]} totalDurationFrames={225} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_2_2.png")} enterEffect="breathe" anchors={[{"text": "认知本能", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "信息茧房", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={611} durationInFrames={173}>
                <BWTextFocus content={[{"text": "在这种单向的叙事围猎下，", "startFrame": 0, "durationFrames": 53}, {"text": "我们很难察觉，", "startFrame": 52, "durationFrames": 42}, {"text": "自己其实正处于一种智力上的盲区。", "startFrame": 93, "durationFrames": 79}]} totalDurationFrames={173} coreSentence={"我们正处于一种智力上的盲区"} coreSentenceAnchors={[{"coreSentenceAnchor": "智力上的盲区", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/统计素养之相关不等于因果/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
