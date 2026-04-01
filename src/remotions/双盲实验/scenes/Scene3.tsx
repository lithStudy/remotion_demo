import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMultiImage, BWTextFocus } from "../../../components";

// 防御性思维
const SCENE_DURATION = 106 + 100 + 97 + 60 + 60 + 95;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={106}>
                <BWCenterFocus content={[{"text": "为了保护我们自己的钱包和智商，", "startFrame": 0, "durationFrames": 33}, {"text": "下次再面对那些吹得天花乱坠的偏方时，", "startFrame": 33, "durationFrames": 40}, {"text": "我们可以试着装上两件防御武装。", "startFrame": 73, "durationFrames": 33}]} totalDurationFrames={106} imageSrc={staticFile("一个人思考，同时被金钱和问号包围的抽象概念图")} enterEffect="fadeIn" anchors={[{"text": "智商", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "偏方", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={106} durationInFrames={100}>
                <BWMultiImage content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "永远多问一句：", "startFrame": 30, "durationFrames": 30}, {"text": "有没有大规模的双盲对照实验数据支撑？", "startFrame": 60, "durationFrames": 40}]} totalDurationFrames={100} groups={[{"textIndex": 0, "image": {"src": "数字1的图标"}}, {"textIndex": 1, "image": {"src": "问号简笔画图标"}, "anchor": {"text": "多问一句", "audioEffect": "ping"}}, {"textIndex": 2, "image": {"src": "双盲实验示意图"}, "anchor": {"text": "双盲实验", "audioEffect": "impact_thud"}}]} anchors={[]} />
            </Sequence>
            <Sequence from={206} durationInFrames={97}>
                <BWCognitiveShift content={[{"text": "如果对方只跟你讲我二叔吃了效果好，", "startFrame": 0, "durationFrames": 37}, {"text": "那这本质上只是个故事，", "startFrame": 37, "durationFrames": 30}, {"text": "不是证据。", "startFrame": 67, "durationFrames": 30}]} totalDurationFrames={97} notText={"只是个故事"} butText={"不是证据"} butSrc={staticFile("显微镜下观察实验数据")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={303} durationInFrames={60}>
                <BWMultiImage content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "学会区分相关性与因果关系。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} groups={[{"textIndex": 0, "image": {"src": "数字2"}}, {"textIndex": 1, "image": {"src": "相关性与因果关系的图示"}, "anchor": {"text": "因果关系", "audioEffect": "ping"}}]} anchors={[]} />
            </Sequence>
            <Sequence from={363} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "感冒好了是因为吃药，", "startFrame": 0, "durationFrames": 30}, {"text": "还是因为熬过了那个周期？", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("一个人正在思考的简笔画")} enterEffect="fadeIn" anchors={[{"text": "因果关系", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={423} durationInFrames={95}>
                <BWTextFocus content={[{"text": "这种逻辑上的审视，", "startFrame": 0, "durationFrames": 30}, {"text": "是我们在这个充满信息迷雾的时代，", "startFrame": 30, "durationFrames": 35}, {"text": "最基础的自保手段。", "startFrame": 65, "durationFrames": 30}]} totalDurationFrames={95} coreSentence={"逻辑审视，是时代自保手段"} coreSentenceAnchors={[{"coreSentenceAnchor": "逻辑审视", "color": "#000000"}, {"coreSentenceAnchor": "自保手段", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
