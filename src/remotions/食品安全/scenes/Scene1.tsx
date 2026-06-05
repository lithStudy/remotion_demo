import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入·人性与监管
const SCENE_DURATION = 94 + 149 + 210 + 214 + 238;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "有人说果农太黑心，", "startFrame": 0, "durationFrames": 47}, {"text": "有人说资本家太黑心。", "startFrame": 46, "durationFrames": 47}]} totalDurationFrames={94} imageSrc={staticFile("images/食品安全/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={94} durationInFrames={149}>
                <BWTextFocus content={[{"text": "但我要说，", "startFrame": 0, "durationFrames": 44}, {"text": "追根溯源，", "startFrame": 43, "durationFrames": 31}, {"text": "一切食品问题，", "startFrame": 74, "durationFrames": 36}, {"text": "都是监管问题。", "startFrame": 110, "durationFrames": 39}]} totalDurationFrames={149} coreSentence={[{"text": "追根溯源，", "showFrom": 1, "endFrom": 1}, {"text": "一切食品问题，", "showFrom": 2}, {"text": "都是监管问题。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "监管问题", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={243} durationInFrames={210}>
                <BWConceptCard content={[{"text": "我一直认为，", "startFrame": 0, "durationFrames": 34}, {"text": "只要是分析有人参与的问题，", "startFrame": 33, "durationFrames": 60}, {"text": "就必须要考虑一个点：", "startFrame": 93, "durationFrames": 43}, {"text": "人性是自私的，", "startFrame": 136, "durationFrames": 39}, {"text": "人性是趋利的。", "startFrame": 174, "durationFrames": 35}]} totalDurationFrames={210} imageSrc={staticFile("images/食品安全/scene_1_3.png")} conceptName={"人性趋利"} anchors={[]} />
            </Sequence>
            <Sequence from={453} durationInFrames={214}>
                <BWCauseChain content={[{"text": "没有什么有利于自己的事情，", "startFrame": 0, "durationFrames": 51}, {"text": "人类是做不出来的。", "startFrame": 50, "durationFrames": 35}, {"text": "无论哪行哪业，", "startFrame": 84, "durationFrames": 35}, {"text": "你都不能指望靠人的道德，来自我约束。", "startFrame": 119, "durationFrames": 94}]} totalDurationFrames={214} layout={"horizontal"} nodes={[{ label: "趋利本能", imageSrc: staticFile("images/食品安全/scene_1_4_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "道德约束", imageSrc: staticFile("images/食品安全/scene_1_4_img1.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={667} durationInFrames={238}>
                <BWPeerInduct content={[{"text": "所以我们把监督的权利让渡给市监局，", "startFrame": 0, "durationFrames": 88}, {"text": "把税收的一部分提供给市监局，", "startFrame": 87, "durationFrames": 75}, {"text": "就是为了让第三方来监督人性。", "startFrame": 162, "durationFrames": 75}]} totalDurationFrames={238} premises={[{ imageSrc: staticFile("images/食品安全/scene_1_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/食品安全/scene_1_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/食品安全/scene_1_5.png"), showFrom: 2, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "监督人性", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
