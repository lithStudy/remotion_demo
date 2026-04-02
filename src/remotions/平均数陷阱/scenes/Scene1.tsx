import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWChatBubble, BWTextFocus } from "../../../components";

// 热搜引发的自卑
const SCENE_DURATION = 209 + 282 + 88 + 233 + 149 + 287;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={209}>
                <BWCenterFocus content={[{"text": "一条加粗飘红的热搜直接弹到你眼前：", "startFrame": 0, "durationFrames": 100}, {"text": "人均可支配收入又突破了几万美元大关。", "startFrame": 99, "durationFrames": 110}]} totalDurationFrames={209} imageSrc={staticFile("images/平均数陷阱/scene_1_1.png")} enterEffect="slideBottom" anchors={[{"text": "热搜", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "人均10万", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={209} durationInFrames={282}>
                <BWChatBubble content={[{"text": "你沉默着点开手机银行查了查仅剩的余额，", "startFrame": 0, "durationFrames": 106}, {"text": "苦笑着在评论区敲下一行字:", "startFrame": 105, "durationFrames": 81}, {"text": "对不起大家，", "startFrame": 186, "durationFrames": 31}, {"text": "我又一次把大腿都给拖断了。", "startFrame": 217, "durationFrames": 65}]} totalDurationFrames={282} bubbleText={"对不起大家，我又一次把大腿都给拖断了。"} showFrom={2} imageSrc={staticFile("images/平均数陷阱/scene_1_2.png")} />
            </Sequence>
            <Sequence from={491} durationInFrames={88}>
                <BWTextFocus content={[{"text": "请马上停止这种毫无意义的自责与内疚。", "startFrame": 0, "durationFrames": 88}]} totalDurationFrames={88} coreSentence={"请马上停止自责与内疚"} coreSentenceAnchors={[{"coreSentenceAnchor": "自责与内疚", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={579} durationInFrames={233}>
                <BWBeatSequence content={[{"text": "我们已经无数次，", "startFrame": 0, "durationFrames": 39}, {"text": "在宏大的平均数面前感到深深的自卑，", "startFrame": 38, "durationFrames": 82}, {"text": "但最冷酷的真相是，", "startFrame": 120, "durationFrames": 47}, {"text": "你从来都没有拖过谁的后腿。", "startFrame": 166, "durationFrames": 66}]} totalDurationFrames={233} stages={[{ imageSrc: staticFile("images/平均数陷阱/scene_1_4_None.png"), enterEffect: "zoomIn", showFrom: 0 }, { imageSrc: staticFile("images/平均数陷阱/scene_2_5.png"), enterEffect: "zoomIn", showFrom: 2 }]} />
            </Sequence>
            <Sequence from={812} durationInFrames={149}>
                <BWCenterFocus content={[{"text": "我们所有人，", "startFrame": 0, "durationFrames": 38}, {"text": "都只是被一种极其狡猾的数学障眼法给彻底蒙蔽了。", "startFrame": 37, "durationFrames": 112}]} totalDurationFrames={149} imageSrc={staticFile("images/平均数陷阱/scene_1_5.png")} enterEffect="zoomIn" anchors={[{"text": "数学障眼法", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={961} durationInFrames={287}>
                <BWCenterFocus content={[{"text": "这种障眼法唯一的作用，", "startFrame": 0, "durationFrames": 52}, {"text": "就是用纸面上的虚假繁荣粉饰太平，", "startFrame": 51, "durationFrames": 84}, {"text": "顺便轻飘飘地，", "startFrame": 135, "durationFrames": 39}, {"text": "抹除了千千万万个普通人最真实的生存重量。", "startFrame": 173, "durationFrames": 114}]} totalDurationFrames={287} imageSrc={staticFile("images/平均数陷阱/scene_1_6.png")} enterEffect="fadeIn" anchors={[{"text": "粉饰太平", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "抹除生存重量", "showFrom": 3, "color": "#000000", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/平均数陷阱/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
