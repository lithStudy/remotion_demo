import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 防御性思维
const SCENE_DURATION = 225 + 299 + 190 + 163;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={225}>
                <BWCenterFocus content={[{"text": "为了保护我们自己的钱包和智商，", "startFrame": 0, "durationFrames": 59}, {"text": "下次再面对那些吹得天花乱坠的偏方时，", "startFrame": 58, "durationFrames": 88}, {"text": "我们可以试着装上两件防御武装。", "startFrame": 146, "durationFrames": 79}]} totalDurationFrames={225} imageSrc={staticFile("images/双盲实验/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "保护智商", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "防范偏方", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={225} durationInFrames={299}>
                <BWMethodStack content={[{"text": "第一，永远多问一句：", "startFrame": 0, "durationFrames": 58}, {"text": "有没有大规模的双盲对照实验数据支撑？", "startFrame": 57, "durationFrames": 93}, {"text": "如果对方只跟你讲我二叔吃了效果好，", "startFrame": 150, "durationFrames": 76}, {"text": "那这本质上只是个故事，不是证据。", "startFrame": 225, "durationFrames": 74}]} totalDurationFrames={299} title={"双盲对照"} imageSrc={staticFile("images/双盲实验/scene_3_2.png")} notes={[{"text": "双盲数据", "showFrom": 1}, {"text": "个例不是证据", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={524} durationInFrames={190}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 14}, {"text": "学会区分相关性与因果关系。", "startFrame": 13, "durationFrames": 79}, {"text": "感冒好了是因为吃药，", "startFrame": 91, "durationFrames": 43}, {"text": "还是因为熬过了那个周期？", "startFrame": 134, "durationFrames": 56}]} totalDurationFrames={190} title={"区分相关与因果"} imageSrc={staticFile("images/双盲实验/scene_3_3.png")} notes={[{"text": "先后出现不等于必然因果", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={714} durationInFrames={163}>
                <BWTextFocus content={[{"text": "这种逻辑上的审视，", "startFrame": 0, "durationFrames": 44}, {"text": "是我们在这个充满信息迷雾的时代，", "startFrame": 43, "durationFrames": 70}, {"text": "最基础的自保手段。", "startFrame": 113, "durationFrames": 50}]} totalDurationFrames={163} coreSentence={["逻辑审视，是时代自保手段"]} coreSentenceAnchors={[{"coreSentenceAnchor": "逻辑审视", "color": "#000000"}, {"coreSentenceAnchor": "自保手段", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/双盲实验/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
