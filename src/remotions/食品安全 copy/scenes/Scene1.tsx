import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWPeerInduct, BWSplitCompare, BWTextFocus } from "../../../components";

// 引入·人性与监管
const SCENE_DURATION = 94 + 105 + 118 + 203 + 216 + 245;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={94}>
                <BWTextFocus content={[{"text": "泡药杨梅刚过去，", "startFrame": 0, "durationFrames": 44}, {"text": "泡甲醛白菜又来了。", "startFrame": 43, "durationFrames": 51}]} totalDurationFrames={94} coreSentence={[{"text": "泡药杨梅刚过去，", "showFrom": 0, "endFrom": 0}, {"text": "泡甲醛白菜又来了。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "泡药杨梅", "color": "#EF4444"}, {"coreSentenceAnchor": "泡甲醛白菜", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={94} durationInFrames={105}>
                <BWSplitCompare content={[{"text": "有人说果农太黑心，", "startFrame": 0, "durationFrames": 54}, {"text": "有人说资本家太黑心。", "startFrame": 53, "durationFrames": 52}]} totalDurationFrames={105} leftSrc={staticFile("images/食品安全/scene_1_2_left.png")} rightSrc={staticFile("images/食品安全/scene_1_2_right.png")} leftLabel={"果农黑心"} rightLabel={"资本黑心"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={199} durationInFrames={118}>
                <BWTextFocus content={[{"text": "但我要说，", "startFrame": 0, "durationFrames": 24}, {"text": "追根溯源，", "startFrame": 24, "durationFrames": 29}, {"text": "一切食品问题，", "startFrame": 52, "durationFrames": 33}, {"text": "都是监管问题。", "startFrame": 85, "durationFrames": 33}]} totalDurationFrames={118} coreSentence={[{"text": "追根溯源，", "showFrom": 1, "endFrom": 1}, {"text": "一切食品问题，", "showFrom": 2}, {"text": "都是监管问题。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "监管问题", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={317} durationInFrames={203}>
                <BWConceptCard content={[{"text": "我一直认为，", "startFrame": 0, "durationFrames": 30}, {"text": "只要是分析有人参与的问题，", "startFrame": 29, "durationFrames": 57}, {"text": "就必须要考虑一个点：", "startFrame": 86, "durationFrames": 42}, {"text": "人性是自私的，", "startFrame": 127, "durationFrames": 39}, {"text": "人性是趋利的。", "startFrame": 165, "durationFrames": 37}]} totalDurationFrames={203} imageSrc={staticFile("images/食品安全/scene_1_4.png")} conceptName={"人性趋利"} anchors={[]} />
            </Sequence>
            <Sequence from={520} durationInFrames={216}>
                <BWCauseChain content={[{"text": "没有什么有利于自己的事情，", "startFrame": 0, "durationFrames": 47}, {"text": "人类是做不出来的。", "startFrame": 46, "durationFrames": 38}, {"text": "无论哪行哪业，", "startFrame": 84, "durationFrames": 42}, {"text": "你都不能指望靠人的道德，来自我约束。", "startFrame": 125, "durationFrames": 90}]} totalDurationFrames={216} layout={"horizontal"} nodes={[{ label: "趋利本能", imageSrc: staticFile("images/食品安全/scene_1_5_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "道德约束", imageSrc: staticFile("images/食品安全/scene_1_5_img1.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={736} durationInFrames={245}>
                <BWPeerInduct content={[{"text": "所以我们把监督的权利让渡给市监局，", "startFrame": 0, "durationFrames": 96}, {"text": "把税收的一部分提供给市监局，", "startFrame": 96, "durationFrames": 96}, {"text": "就是为了让第三方来监督人性。", "startFrame": 190, "durationFrames": 100}]} totalDurationFrames={245} premises={[{ imageSrc: staticFile("images/食品安全/scene_1_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/食品安全/scene_1_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/食品安全/scene_1_6.png"), showFrom: 2, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "监督人性", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
