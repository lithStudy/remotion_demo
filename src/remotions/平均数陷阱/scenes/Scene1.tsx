import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWChatBubble, BWTextFocus } from "../../../components";

// 热搜引发的自卑
const SCENE_DURATION = 202 + 256 + 85 + 226 + 146 + 291;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={202}>
                <BWCenterFocus content={[{"text": "一条加粗飘红的热搜直接弹到你眼前：", "startFrame": 0, "durationFrames": 94}, {"text": "人均可支配收入又突破了几万美元大关。", "startFrame": 93, "durationFrames": 108}]} totalDurationFrames={202} imageSrc={staticFile("images/平均数陷阱/scene_1_1.png")} enterEffect="slideBottom" anchors={[{"text": "热搜", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "人均10万", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={202} durationInFrames={256}>
                <BWChatBubble content={[{"text": "你沉默着点开手机银行查了查仅剩的余额，", "startFrame": 0, "durationFrames": 98}, {"text": "苦笑着在评论区敲下一行字:", "startFrame": 97, "durationFrames": 75}, {"text": "对不起大家，", "startFrame": 171, "durationFrames": 27}, {"text": "我又一次把大腿都给拖断了。", "startFrame": 197, "durationFrames": 58}]} totalDurationFrames={256} bubbleText={"对不起大家，我又一次把大腿都给拖断了。"} showFrom={2} imageSrc={staticFile("images/平均数陷阱/scene_1_2.png")} />
            </Sequence>
            <Sequence from={458} durationInFrames={85}>
                <BWTextFocus content={[{"text": "请马上停止这种毫无意义的自责与内疚。", "startFrame": 0, "durationFrames": 85}]} totalDurationFrames={85} coreSentence={"请马上停止自责与内疚"} coreSentenceAnchors={[{"coreSentenceAnchor": "自责与内疚", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={543} durationInFrames={226}>
                <BWBeatSequence content={[{"text": "我们已经无数次，", "startFrame": 0, "durationFrames": 42}, {"text": "在宏大的平均数面前感到深深的自卑，", "startFrame": 41, "durationFrames": 80}, {"text": "但最冷酷的真相是，", "startFrame": 121, "durationFrames": 46}, {"text": "你从来都没有拖过谁的后腿。", "startFrame": 166, "durationFrames": 59}]} totalDurationFrames={226} stages={[{ imageSrc: staticFile("images/平均数陷阱/scene_1_4_None.png"), enterEffect: "zoomIn", showFrom: 0 }, { imageSrc: staticFile("images/平均数陷阱/scene_2_5.png"), enterEffect: "zoomIn", showFrom: 2 }]} />
            </Sequence>
            <Sequence from={769} durationInFrames={146}>
                <BWCenterFocus content={[{"text": "我们所有人，", "startFrame": 0, "durationFrames": 36}, {"text": "都只是被一种极其狡猾的数学障眼法给彻底蒙蔽了。", "startFrame": 36, "durationFrames": 110}]} totalDurationFrames={146} imageSrc={staticFile("images/平均数陷阱/scene_1_5.png")} enterEffect="zoomIn" anchors={[{"text": "数学障眼法", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={915} durationInFrames={291}>
                <BWCenterFocus content={[{"text": "这种障眼法唯一的作用，", "startFrame": 0, "durationFrames": 54}, {"text": "就是用纸面上的虚假繁荣粉饰太平，", "startFrame": 53, "durationFrames": 90}, {"text": "顺便轻飘飘地，", "startFrame": 142, "durationFrames": 39}, {"text": "抹除了千千万万个普通人最真实的生存重量。", "startFrame": 181, "durationFrames": 110}]} totalDurationFrames={291} imageSrc={staticFile("images/平均数陷阱/scene_1_6.png")} enterEffect="fadeIn" anchors={[{"text": "粉饰太平", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "抹除生存重量", "showFrom": 3, "color": "#000000", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/平均数陷阱/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
