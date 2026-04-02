import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 大脑的底层BUG
const SCENE_DURATION = 185 + 112 + 95;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={185}>
                <BWCenterFocus content={[{"text": "我们普通人之所以经常被各种神药、", "startFrame": 0, "durationFrames": 35}, {"text": "偏方或者所谓的大师收割，", "startFrame": 35, "durationFrames": 30}, {"text": "真的不是因为我们不够聪明，", "startFrame": 65, "durationFrames": 30}, {"text": "而是因为我们的大脑天生就有一个底层Bug：", "startFrame": 95, "durationFrames": 46}, {"text": "极度渴望给结果找一个立竿见影的因果关系。", "startFrame": 141, "durationFrames": 44}]} totalDurationFrames={185} imageSrc={staticFile("被线操控的木偶")} enterEffect="breathe" anchors={[{"text": "底层Bug", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "因果关系", "showFrom": 4, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={185} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "算法正是利用了这种认知本能，", "startFrame": 0, "durationFrames": 31}, {"text": "每天在信息茧房里给我们投喂无数个我吃了这个药、", "startFrame": 31, "durationFrames": 51}, {"text": "身体变好了的孤例。", "startFrame": 82, "durationFrames": 30}]} totalDurationFrames={112} imageSrc={staticFile("算法利用人类认知偏差的示意图")} enterEffect="breathe" anchors={[{"text": "认知本能", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "信息茧房", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={297} durationInFrames={95}>
                <BWTextFocus content={[{"text": "在这种单向的叙事围猎下，", "startFrame": 0, "durationFrames": 30}, {"text": "我们很难察觉，", "startFrame": 30, "durationFrames": 30}, {"text": "自己其实正处于一种智力上的盲区。", "startFrame": 60, "durationFrames": 35}]} totalDurationFrames={95} coreSentence={"我们正处于一种智力上的盲区"} coreSentenceAnchors={[{"coreSentenceAnchor": "智力上的盲区", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
