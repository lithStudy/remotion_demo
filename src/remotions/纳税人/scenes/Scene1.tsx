import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWPanelGrid, BWTextFocus } from "../../../components";

// 引入：白嫖认知错觉
const SCENE_DURATION = 138 + 474 + 224;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWTextFocus content={[{"text": "明明你每天都在交钱,", "startFrame": 0, "durationFrames": 53}, {"text": "为什么却还是觉得，", "startFrame": 52, "durationFrames": 39}, {"text": "自己在白嫖国家的福利？", "startFrame": 90, "durationFrames": 47}]} totalDurationFrames={138} coreSentence={[{"text": "明明你每天都在交钱", "showFrom": 0, "endFrom": 2}, {"text": "为什么却还是觉得，", "showFrom": 1, "endFrom": 2}, {"text": "自己在白嫖国家的福利？", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "交钱", "color": "#EF4444"}, {"coreSentenceAnchor": "白嫖", "color": "#EF4444"}, {"coreSentenceAnchor": "福利", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={138} durationInFrames={474}>
                <BWCauseChain content={[{"text": "很多人觉得，", "startFrame": 0, "durationFrames": 40}, {"text": "自己从来没有主动交过税，", "startFrame": 39, "durationFrames": 53}, {"text": "没有给国家做过贡献，", "startFrame": 91, "durationFrames": 51}, {"text": "自己享受的一切福利都是占了便宜。", "startFrame": 141, "durationFrames": 75}, {"text": "于是，", "startFrame": 216, "durationFrames": 17}, {"text": "在公共事务面前，", "startFrame": 232, "durationFrames": 42}, {"text": "他们自觉站到了边缘。", "startFrame": 273, "durationFrames": 48}, {"text": "不敢提诉求，", "startFrame": 321, "durationFrames": 32}, {"text": "也不敢谈权利。", "startFrame": 353, "durationFrames": 33}, {"text": "但这，", "startFrame": 386, "durationFrames": 22}, {"text": "其实是一个天大的认知错觉。", "startFrame": 408, "durationFrames": 66}]} totalDurationFrames={474} layout={"horizontal"} nodes={[{ label: "从未交税", imageSrc: staticFile("images/纳税人/scene_1_2_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "白占福利", imageSrc: staticFile("images/纳税人/scene_1_2_img1.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "站到边缘", imageSrc: staticFile("images/纳税人/scene_1_2_img2.png"), showFrom: 6, enterEffect: "fadeIn" }, { label: "不敢发声", imageSrc: staticFile("images/纳税人/scene_1_2_img3.png"), showFrom: 7, enterEffect: "fadeIn" }]} anchors={[{"text": "认知错觉", "showFrom": 10, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={612} durationInFrames={224}>
                <BWPanelGrid content={[{"text": "我必须告诉你，", "startFrame": 0, "durationFrames": 39}, {"text": "不管你是学生、", "startFrame": 38, "durationFrames": 36}, {"text": "退休老人、", "startFrame": 74, "durationFrames": 24}, {"text": "自由职业者，", "startFrame": 98, "durationFrames": 29}, {"text": "甚至是无业游民，", "startFrame": 126, "durationFrames": 44}, {"text": "每天，", "startFrame": 170, "durationFrames": 21}, {"text": "你都在交税。", "startFrame": 190, "durationFrames": 33}]} totalDurationFrames={224} panels={[{ src: staticFile("images/纳税人/scene_1_4_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/纳税人/scene_1_4_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/纳税人/scene_1_4_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/纳税人/scene_1_4_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[{"text": "交税", "showFrom": 6, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
