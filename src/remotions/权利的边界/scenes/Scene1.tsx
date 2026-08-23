import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入·破房子震撼
const SCENE_DURATION = 269 + 151 + 98 + 142 + 138 + 123 + 167 + 161;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={269}>
                <BWCenterFocus content={[{"text": "如果必须在人类历史的浩瀚星河中，", "startFrame": 0, "durationFrames": 72}, {"text": "选出一句最让我震撼、", "startFrame": 72, "durationFrames": 47}, {"text": "也最动心的话。", "startFrame": 118, "durationFrames": 29}, {"text": "在学生时代，", "startFrame": 147, "durationFrames": 30}, {"text": "我一定会毫不犹豫地诵出张载的横渠四句：", "startFrame": 176, "durationFrames": 92}]} totalDurationFrames={269} imageSrc={staticFile("images/权利的边界/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={269} durationInFrames={151}>
                <BWQuoteCitation content={[{"text": "为天地立心，", "startFrame": 0, "durationFrames": 36}, {"text": "为生民立命，", "startFrame": 36, "durationFrames": 33}, {"text": "为往圣继绝学，", "startFrame": 68, "durationFrames": 42}, {"text": "为万世开太平。", "startFrame": 110, "durationFrames": 41}]} totalDurationFrames={151} quoteSource={"张载"} anchors={[]} />
            </Sequence>
            <Sequence from={420} durationInFrames={98}>
                <BWCenterFocus content={[{"text": "那时的我，", "startFrame": 0, "durationFrames": 20}, {"text": "满眼都是宏大叙事，", "startFrame": 19, "durationFrames": 38}, {"text": "满心都是天下苍生。", "startFrame": 56, "durationFrames": 41}]} totalDurationFrames={98} imageSrc={staticFile("images/权利的边界/scene_1_4.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={518} durationInFrames={142}>
                <BWCenterFocus content={[{"text": "直到走进社会，经历了一些事情，", "startFrame": 0, "durationFrames": 71}, {"text": "然后突然有一天，", "startFrame": 70, "durationFrames": 33}, {"text": "我看到了另外一句话：", "startFrame": 103, "durationFrames": 39}]} totalDurationFrames={142} imageSrc={staticFile("images/权利的边界/scene_1_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={660} durationInFrames={138}>
                <BWQuoteCitation content={[{"text": "“我有一间破房子，", "startFrame": 0, "durationFrames": 51}, {"text": "风能进，", "startFrame": 50, "durationFrames": 27}, {"text": "雨能进，", "startFrame": 76, "durationFrames": 29}, {"text": "国王不能进。”", "startFrame": 104, "durationFrames": 33}]} totalDurationFrames={138} quoteDisplayText={"我有一间破房子，风能进，雨能进，国王不能进。"} quoteSource={"知乎"} anchors={[]} />
            </Sequence>
            <Sequence from={798} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "记忆里，", "startFrame": 0, "durationFrames": 33}, {"text": "那天的我凝视着屏幕，", "startFrame": 32, "durationFrames": 50}, {"text": "久久无法移开视线。", "startFrame": 81, "durationFrames": 42}]} totalDurationFrames={123} imageSrc={staticFile("images/权利的边界/scene_1_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={921} durationInFrames={167}>
                <BWCognitiveShift content={[{"text": "那不是一种被大风大浪席卷的冲击。", "startFrame": 0, "durationFrames": 82}, {"text": "而是一种锥心刺骨、", "startFrame": 81, "durationFrames": 44}, {"text": "前所未有的震撼。", "startFrame": 125, "durationFrames": 41}]} totalDurationFrames={167} notText={"大风大浪席卷的冲击"} butText={"锥心刺骨的震撼"} butSrc={staticFile("images/权利的边界/scene_1_8.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1088} durationInFrames={161}>
                <BWTextFocus content={[{"text": "在习惯于宏大叙事的世界面前，", "startFrame": 0, "durationFrames": 68}, {"text": "我从字里行间深刻感受到了“个体”的尊严。", "startFrame": 67, "durationFrames": 94}]} totalDurationFrames={161} coreSentence={[{"text": "在习惯于宏大叙事的世界面前，", "showFrom": 0, "endFrom": 0}, {"text": "我从字里行间深刻感受到了", "showFrom": 1}, {"text": "个体的尊严。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "个体", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
