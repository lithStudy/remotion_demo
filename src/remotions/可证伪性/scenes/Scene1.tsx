import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 引出现象：不可证伪的逻辑陷阱
const SCENE_DURATION = 459 + 155 + 183 + 281;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={459}>
                <BWCenterFocus content={[{"text": "今天我们讲讲什么才是真正的科学，", "startFrame": 0, "durationFrames": 76}, {"text": "你有没有过这样的瞬间？", "startFrame": 75, "durationFrames": 52}, {"text": "就比如你生了一场小病，", "startFrame": 126, "durationFrames": 47}, {"text": "找了某个偏方或者大师，", "startFrame": 173, "durationFrames": 51}, {"text": "结果病没好，", "startFrame": 223, "durationFrames": 35}, {"text": "对方却语重心长地对你说，", "startFrame": 258, "durationFrames": 53}, {"text": "没效果是因为你心不诚，", "startFrame": 310, "durationFrames": 53}, {"text": "或者你体质太特殊，", "startFrame": 363, "durationFrames": 39}, {"text": "再或者是你吃药的时机不对。", "startFrame": 401, "durationFrames": 58}]} totalDurationFrames={459} imageSrc={staticFile("images/可证伪性/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "科学", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "偏方", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}, {"text": "心不诚", "showFrom": 6, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "体质特殊", "showFrom": 7, "color": "#EF4444", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={459} durationInFrames={155}>
                <BWCenterFocus content={[{"text": "你明明是抱着解决问题的初衷去的，", "startFrame": 0, "durationFrames": 77}, {"text": "可到头来，", "startFrame": 76, "durationFrames": 28}, {"text": "所有的锅都得你一个人背。", "startFrame": 103, "durationFrames": 52}]} totalDurationFrames={155} imageSrc={staticFile("images/可证伪性/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "死循环", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={614} durationInFrames={183}>
                <BWCenterFocus content={[{"text": "你发现这事儿陷入了一个死循环：", "startFrame": 0, "durationFrames": 70}, {"text": "只要有效就是他的功劳，", "startFrame": 69, "durationFrames": 56}, {"text": "只要没效就是你的问题。", "startFrame": 125, "durationFrames": 58}]} totalDurationFrames={183} imageSrc={staticFile("images/可证伪性/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "死循环", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={797} durationInFrames={281}>
                <BWConceptCard content={[{"text": "这种“永远立于不败之地”的话术，", "startFrame": 0, "durationFrames": 66}, {"text": "从来不是因为对方掌握了真理，", "startFrame": 65, "durationFrames": 62}, {"text": "你也不是什么倒霉蛋，", "startFrame": 126, "durationFrames": 40}, {"text": "你只是被一种叫做“不可证伪”的逻辑陷阱给绕进去了。", "startFrame": 165, "durationFrames": 115}]} totalDurationFrames={281} imageSrc={staticFile("images/可证伪性/scene_1_4.png")} conceptName={"不可证伪的逻辑陷阱"} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/可证伪性/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
