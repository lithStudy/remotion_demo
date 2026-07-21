import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWTextFocus, BWTimeline } from "../../../components";

// 召唤：追问领先本质
const SCENE_DURATION = 330 + 107 + 94 + 108;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={330}>
                <BWTimeline content={[{"text": "纽北赛不是炫技，", "startFrame": 0, "durationFrames": 41}, {"text": "是性能与操控的照妖镜。", "startFrame": 40, "durationFrames": 62}, {"text": "耐力赛不是表演，", "startFrame": 101, "durationFrames": 38}, {"text": "是三电的试金石。", "startFrame": 138, "durationFrames": 45}, {"text": "直播不是作秀，", "startFrame": 183, "durationFrames": 33}, {"text": "是续航的聚光灯。", "startFrame": 215, "durationFrames": 36}, {"text": "拆车不是破坏，", "startFrame": 251, "durationFrames": 39}, {"text": "是用料的透视镜。", "startFrame": 290, "durationFrames": 40}]} totalDurationFrames={330} images={[{ src: staticFile("images/汽车质量论/scene_6_1_img0.png"), enterEffect: "slideLeft", textIndex: 0, label: "性能照妖镜" }, { src: staticFile("images/汽车质量论/scene_6_1_img1.png"), enterEffect: "fadeIn", textIndex: 2, label: "三电试金石" }, { src: staticFile("images/汽车质量论/scene_6_1_img2.png"), enterEffect: "slideLeft", textIndex: 4, label: "续航聚光灯" }, { src: staticFile("images/汽车质量论/scene_6_1_img3.png"), enterEffect: "fadeIn", textIndex: 6, label: "用料透视镜" }]} anchors={[]} />
            </Sequence>
            <Sequence from={330} durationInFrames={107}>
                <BWCauseChain content={[{"text": "界车可以选择不上赛道，", "startFrame": 0, "durationFrames": 51}, {"text": "不许拆车，", "startFrame": 50, "durationFrames": 27}, {"text": "不给直播。", "startFrame": 76, "durationFrames": 31}]} totalDurationFrames={107} layout={"horizontal"} nodes={[{ label: "不上赛道", imageSrc: staticFile("images/汽车质量论/scene_6_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "不许拆车", imageSrc: staticFile("images/汽车质量论/scene_6_3_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "不给直播", imageSrc: staticFile("images/汽车质量论/scene_6_3_img2.png"), showFrom: 2, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={437} durationInFrames={94}>
                <BWTextFocus content={[{"text": "但你们，作为消费者，", "startFrame": 0, "durationFrames": 52}, {"text": "难道真的不要问一句吗，", "startFrame": 51, "durationFrames": 43}]} totalDurationFrames={94} coreSentence={[{"text": "但你们，作为消费者，", "showFrom": 0}, {"text": "难道真的不要问一句吗，", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "消费者", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={531} durationInFrames={108}>
                <BWTextFocus content={[{"text": "遥遥领先，到底领先在哪里？", "startFrame": 0, "durationFrames": 68}, {"text": "就靠一张嘴，是吗？", "startFrame": 67, "durationFrames": 40}]} totalDurationFrames={108} coreSentence={[{"text": "遥遥领先，到底领先在哪里？", "showFrom": 0}, {"text": "就靠一张嘴，是吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}, {"coreSentenceAnchor": "一张嘴", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
