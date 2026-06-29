import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入·破房子震撼
const SCENE_DURATION = 278 + 150 + 103 + 141 + 118 + 118 + 162 + 166;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={278}>
                <BWCenterFocus content={[{"text": "如果必须在人类历史的浩瀚星河中，", "startFrame": 0, "durationFrames": 68}, {"text": "选出一句最让我震撼、", "startFrame": 67, "durationFrames": 50}, {"text": "也最动心的话。", "startFrame": 116, "durationFrames": 39}, {"text": "在学生时代，", "startFrame": 154, "durationFrames": 33}, {"text": "我一定会毫不犹豫地诵出张载的横渠四句：", "startFrame": 187, "durationFrames": 90}]} totalDurationFrames={278} imageSrc={staticFile("images/权利的边界/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={150}>
                <BWQuoteCitation content={[{"text": "为天地立心，", "startFrame": 0, "durationFrames": 34}, {"text": "为生民立命，", "startFrame": 33, "durationFrames": 32}, {"text": "为往圣继绝学，", "startFrame": 65, "durationFrames": 42}, {"text": "为万世开太平。", "startFrame": 106, "durationFrames": 43}]} totalDurationFrames={150} quoteSource={"张载"} anchors={[]} />
            </Sequence>
            <Sequence from={428} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "那时的我，", "startFrame": 0, "durationFrames": 19}, {"text": "满眼都是宏大叙事，", "startFrame": 18, "durationFrames": 42}, {"text": "满心都是天下苍生。", "startFrame": 60, "durationFrames": 43}]} totalDurationFrames={103} imageSrc={staticFile("images/权利的边界/scene_1_4.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={531} durationInFrames={141}>
                <BWCenterFocus content={[{"text": "直到走进社会，经历了一些事情，", "startFrame": 0, "durationFrames": 69}, {"text": "然后突然有一天，", "startFrame": 68, "durationFrames": 34}, {"text": "我看到了另外一句话：", "startFrame": 102, "durationFrames": 39}]} totalDurationFrames={141} imageSrc={staticFile(" ")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={672} durationInFrames={118}>
                <BWQuoteCitation content={[{"text": "“我有一间破房子，", "startFrame": 0, "durationFrames": 50}, {"text": "风能进，", "startFrame": 49, "durationFrames": 20}, {"text": "雨能进，", "startFrame": 68, "durationFrames": 24}, {"text": "国王不能进。”", "startFrame": 92, "durationFrames": 26}]} totalDurationFrames={118} quoteDisplayText={"我有一间破房子，风能进，雨能进，国王不能进。"} quoteSource={"知乎"} anchors={[]} />
            </Sequence>
            <Sequence from={790} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "记忆里，", "startFrame": 0, "durationFrames": 24}, {"text": "那天的我凝视着屏幕，", "startFrame": 24, "durationFrames": 53}, {"text": "久久无法移开视线。", "startFrame": 76, "durationFrames": 42}]} totalDurationFrames={118} imageSrc={staticFile("images/权利的边界/scene_1_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={908} durationInFrames={162}>
                <BWCognitiveShift content={[{"text": "那不是一种被大风大浪席卷的冲击。", "startFrame": 0, "durationFrames": 78}, {"text": "而是一种锥心刺骨、", "startFrame": 77, "durationFrames": 44}, {"text": "前所未有的震撼。", "startFrame": 121, "durationFrames": 41}]} totalDurationFrames={162} notText={"大风大浪席卷的冲击"} butText={"锥心刺骨的震撼"} butSrc={staticFile("images/权利的边界/scene_1_8.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1070} durationInFrames={166}>
                <BWTextFocus content={[{"text": "在习惯于宏大叙事的世界面前，", "startFrame": 0, "durationFrames": 68}, {"text": "我从字里行间深刻感受到了“个体”的尊严。", "startFrame": 67, "durationFrames": 98}]} totalDurationFrames={166} coreSentence={[{"text": "在习惯于宏大叙事的世界面前，", "showFrom": 0, "endFrom": 0}, {"text": "我从字里行间深刻感受到了", "showFrom": 1}, {"text": "个体的尊严。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "个体", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
