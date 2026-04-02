import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMethodStack, BWTextFocus } from "../../../components";

// 防御偏方的武装
const SCENE_DURATION = 225 + 140 + 154 + 93 + 90 + 163;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={225}>
                <BWCenterFocus content={[{"text": "为了保护我们自己的钱包和智商，", "startFrame": 0, "durationFrames": 59}, {"text": "下次再面对那些吹得天花乱坠的偏方时，", "startFrame": 58, "durationFrames": 83}, {"text": "我们可以试着装上两件防御武装。", "startFrame": 141, "durationFrames": 83}]} totalDurationFrames={225} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "防御武装", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={225} durationInFrames={140}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 16}, {"text": "永远多问一句：", "startFrame": 15, "durationFrames": 38}, {"text": "有没有大规模的双盲对照实验数据支撑？", "startFrame": 52, "durationFrames": 88}]} totalDurationFrames={140} title={"多问一句"} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_5_2.png")} notes={[{"text": "有没有大规模双盲实验？", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={365} durationInFrames={154}>
                <BWCognitiveShift content={[{"text": "如果对方只跟你讲我二叔吃了效果好，", "startFrame": 0, "durationFrames": 74}, {"text": "那这本质上只是个故事，", "startFrame": 73, "durationFrames": 55}, {"text": "不是证据。", "startFrame": 127, "durationFrames": 27}]} totalDurationFrames={154} notText={"只是个故事"} butText={"不是证据"} butSrc={staticFile("images/统计素养之相关不等于因果/scene_5_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={519} durationInFrames={93}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 14}, {"text": "学会区分相关性与因果关系。", "startFrame": 13, "durationFrames": 80}]} totalDurationFrames={93} title={"区分相关与因果"} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_5_4.png")} notes={[{"text": "避免错误归因", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={612} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "感冒好了是因为吃药，", "startFrame": 0, "durationFrames": 45}, {"text": "还是因为熬过了那个周期？", "startFrame": 44, "durationFrames": 45}]} totalDurationFrames={90} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_5_5.png")} enterEffect="zoomIn" anchors={[{"text": "因果关系", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={702} durationInFrames={163}>
                <BWTextFocus content={[{"text": "这种逻辑上的审视，", "startFrame": 0, "durationFrames": 41}, {"text": "是我们在这个充满信息迷雾的时代，", "startFrame": 40, "durationFrames": 71}, {"text": "最基础的自保手段。", "startFrame": 111, "durationFrames": 52}]} totalDurationFrames={163} coreSentence={"逻辑审视，是自保手段"} coreSentenceAnchors={[{"coreSentenceAnchor": "逻辑审视"}, {"coreSentenceAnchor": "自保手段"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/统计素养之相关不等于因果/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
