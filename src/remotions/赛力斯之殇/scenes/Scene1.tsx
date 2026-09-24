import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWConceptCard, BWTextFocus } from "../../../components";

// 引入：华为税
const SCENE_DURATION = 135 + 257 + 163;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={135}>
                <BWTextFocus content={[{"text": "华为不是赛力斯的救世主。", "startFrame": 0, "durationFrames": 59}, {"text": "对赛力斯来说，", "startFrame": 58, "durationFrames": 31}, {"text": "华为更像一只吸血鬼。", "startFrame": 89, "durationFrames": 46}]} totalDurationFrames={135} coreSentence={[{"text": "华为不是赛力斯的救世主。", "showFrom": 0, "endFrom": 1}, {"text": "对赛力斯来说，", "showFrom": 1, "endFrom": 1}, {"text": "华为更像一只吸血鬼。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "吸血鬼", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={135} durationInFrames={257}>
                <BWCaseBreakdown content={[{"text": "问界车卖的不错。", "startFrame": 0, "durationFrames": 42}, {"text": "热搜全是华为光环。", "startFrame": 41, "durationFrames": 58}, {"text": "可赛力斯的老板打开财报，", "startFrame": 99, "durationFrames": 52}, {"text": "手心却要发凉。", "startFrame": 150, "durationFrames": 37}, {"text": "车卖的越多，", "startFrame": 186, "durationFrames": 31}, {"text": "钱亏得越多。", "startFrame": 217, "durationFrames": 40}]} totalDurationFrames={257} title={"问界利润悖论"} imageSrc={staticFile("images/赛力斯之殇/scene_1_2.png")} phases={[{"phaseLabel": "表面繁荣", "showFrom": 0}, {"phaseLabel": "光环假象", "showFrom": 1}, {"phaseLabel": "财报反转", "showFrom": 2}, {"phaseLabel": "悖论收束", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={392} durationInFrames={163}>
                <BWConceptCard content={[{"text": "利润像被一根看不见的管子，", "startFrame": 0, "durationFrames": 55}, {"text": "悄悄抽走。", "startFrame": 54, "durationFrames": 32}, {"text": "这根管子叫什么？", "startFrame": 86, "durationFrames": 35}, {"text": "有人叫它「华为税」。", "startFrame": 121, "durationFrames": 42}]} totalDurationFrames={163} imageSrc={staticFile("images/赛力斯之殇/scene_1_3.png")} conceptName={"华为税"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/赛力斯之殇/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
