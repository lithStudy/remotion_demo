import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWPeerInduct, BWSplitCompare, BWTextFocus } from "../../../components";

// 引入·人性与监管
const SCENE_DURATION = 88 + 102 + 111 + 195 + 213 + 221;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={88}>
                <BWTextFocus content={[{"text": "泡药杨梅刚过去，", "startFrame": 0, "durationFrames": 40}, {"text": "泡甲醛白菜又来了。", "startFrame": 39, "durationFrames": 48}]} totalDurationFrames={88} coreSentence={[{"text": "泡药杨梅刚过去，", "showFrom": 0, "endFrom": 0}, {"text": "泡甲醛白菜又来了。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "泡药杨梅", "color": "#EF4444"}, {"coreSentenceAnchor": "泡甲醛白菜", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={88} durationInFrames={102}>
                <BWSplitCompare content={[{"text": "有人说果农太黑心，", "startFrame": 0, "durationFrames": 51}, {"text": "有人说资本家太黑心。", "startFrame": 50, "durationFrames": 51}]} totalDurationFrames={102} leftSrc={staticFile("images/食品安全/scene_1_2_left.png")} rightSrc={staticFile("images/食品安全/scene_1_2_right.png")} leftLabel={"果农黑心"} rightLabel={"资本黑心"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={190} durationInFrames={111}>
                <BWTextFocus content={[{"text": "但我要说，", "startFrame": 0, "durationFrames": 19}, {"text": "追根溯源，", "startFrame": 18, "durationFrames": 30}, {"text": "一切食品问题，", "startFrame": 48, "durationFrames": 32}, {"text": "都是监管问题。", "startFrame": 79, "durationFrames": 31}]} totalDurationFrames={111} coreSentence={[{"text": "追根溯源，", "showFrom": 1, "endFrom": 1}, {"text": "一切食品问题，", "showFrom": 2}, {"text": "都是监管问题。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "监管问题", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={301} durationInFrames={195}>
                <BWConceptCard content={[{"text": "我一直认为，", "startFrame": 0, "durationFrames": 27}, {"text": "只要是分析有人参与的问题，", "startFrame": 26, "durationFrames": 54}, {"text": "就必须要考虑一个点：", "startFrame": 79, "durationFrames": 41}, {"text": "人性是自私的，", "startFrame": 120, "durationFrames": 40}, {"text": "人性是趋利的。", "startFrame": 159, "durationFrames": 36}]} totalDurationFrames={195} imageSrc={staticFile("images/食品安全/scene_1_4.png")} conceptName={"人性趋利"} anchors={[]} />
            </Sequence>
            <Sequence from={496} durationInFrames={213}>
                <BWCauseChain content={[{"text": "没有什么有利于自己的事情，", "startFrame": 0, "durationFrames": 59}, {"text": "人类是做不出来的。", "startFrame": 58, "durationFrames": 34}, {"text": "无论哪行哪业，", "startFrame": 92, "durationFrames": 35}, {"text": "你都不能指望靠人的道德，来自我约束。", "startFrame": 127, "durationFrames": 86}]} totalDurationFrames={213} layout={"horizontal"} nodes={[{ label: "趋利本能", imageSrc: staticFile("images/食品安全/scene_1_5_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "道德约束", imageSrc: staticFile("images/食品安全/scene_1_5_img1.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={709} durationInFrames={221}>
                <BWPeerInduct content={[{"text": "所以我们把监督的权利让渡给市监局，", "startFrame": 0, "durationFrames": 84}, {"text": "把税收的一部分提供给市监局，", "startFrame": 84, "durationFrames": 75}, {"text": "就是为了让第三方来监督人性。", "startFrame": 158, "durationFrames": 75}]} totalDurationFrames={221} premises={[{ imageSrc: staticFile("images/食品安全/scene_1_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/食品安全/scene_1_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/食品安全/scene_1_6.png"), showFrom: 2, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "监督人性", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
