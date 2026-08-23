import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入·人性与监管
const SCENE_DURATION = 106 + 126 + 190 + 210 + 229;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={106}>
                <BWCenterFocus content={[{"text": "有人说果农太黑心，", "startFrame": 0, "durationFrames": 47}, {"text": "有人说资本家太黑心。", "startFrame": 46, "durationFrames": 59}]} totalDurationFrames={106} imageSrc={staticFile("images/食品安全/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={106} durationInFrames={126}>
                <BWTextFocus content={[{"text": "但我要说，", "startFrame": 0, "durationFrames": 24}, {"text": "追根溯源，", "startFrame": 24, "durationFrames": 33}, {"text": "一切食品问题，", "startFrame": 56, "durationFrames": 40}, {"text": "都是监管问题。", "startFrame": 96, "durationFrames": 30}]} totalDurationFrames={126} coreSentence={[{"text": "追根溯源，", "showFrom": 1, "endFrom": 1}, {"text": "一切食品问题，", "showFrom": 2}, {"text": "都是监管问题。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "监管问题", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={232} durationInFrames={190}>
                <BWConceptCard content={[{"text": "我一直认为，", "startFrame": 0, "durationFrames": 27}, {"text": "只要是分析有人参与的问题，", "startFrame": 26, "durationFrames": 52}, {"text": "就必须要考虑一个点：", "startFrame": 77, "durationFrames": 38}, {"text": "人性是自私的，", "startFrame": 114, "durationFrames": 41}, {"text": "人性是趋利的。", "startFrame": 154, "durationFrames": 35}]} totalDurationFrames={190} imageSrc={staticFile("images/食品安全/scene_1_3.png")} conceptName={"人性趋利"} anchors={[]} />
            </Sequence>
            <Sequence from={422} durationInFrames={210}>
                <BWCauseChain content={[{"text": "没有什么有利于自己的事情，", "startFrame": 0, "durationFrames": 50}, {"text": "人类是做不出来的。", "startFrame": 49, "durationFrames": 38}, {"text": "无论哪行哪业，", "startFrame": 87, "durationFrames": 42}, {"text": "你都不能指望靠人的道德，来自我约束。", "startFrame": 128, "durationFrames": 82}]} totalDurationFrames={210} layout={"horizontal"} nodes={[{ label: "趋利本能", imageSrc: staticFile("images/食品安全/scene_1_4_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "道德约束", imageSrc: staticFile("images/食品安全/scene_1_4_img1.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={632} durationInFrames={229}>
                <BWPeerInduct content={[{"text": "所以我们把监督的权利让渡给市监局，", "startFrame": 0, "durationFrames": 83}, {"text": "把税收的一部分提供给市监局，", "startFrame": 82, "durationFrames": 1}, {"text": "就是为了让第三方来监督人性。", "startFrame": 0, "durationFrames": 574}]} totalDurationFrames={229} premises={[{ imageSrc: staticFile("images/食品安全/scene_1_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/食品安全/scene_1_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/食品安全/scene_1_5.png"), showFrom: 2, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "监督人性", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
