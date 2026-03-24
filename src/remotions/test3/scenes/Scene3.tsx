import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWMultiImage, BWSplitCompare } from "../../../components";

// 心理学解释：确认偏误的概念
const SCENE_DURATION = 133 + 81 + 128 + 90 + 30 + 90 + 57 + 30 + 60 + 79 + 90 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={133}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，", "startFrame": 0, "durationFrames": 46, "audioEffect": "ping"}, {"text": "叫作", "startFrame": 46, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“确认偏误”（Confirmation Bias）。", "startFrame": 76, "durationFrames": 57, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={133} />
            </Sequence>
            <Sequence from={133} durationInFrames={81}>
                <BWMagnifyingGlass content={[{"text": "简单通俗地说，确认偏误就像是我们大脑自带的一副", "startFrame": 0, "durationFrames": 51, "audioEffect": "ping"}, {"text": "“有色滤镜”。", "startFrame": 51, "durationFrames": 30, "audioEffect": null}]} anchors={[{"text": "确认偏误", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={81} />
            </Sequence>
            <Sequence from={214} durationInFrames={128}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"先入为主"} rightLabel={"自动美颜"} content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33, "audioEffect": "ping"}, {"text": "第一，是“自动美颜”，", "startFrame": 68, "durationFrames": 30, "audioEffect": null}, {"text": "", "startFrame": 98, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={128} />
            </Sequence>
            <Sequence from={342} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "凡是能证明我正确的信息，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "哪怕漏洞百出，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们也觉得是真理；", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[{"text": "真理", "showFrom": 2, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={432} durationInFrames={30}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"兼听"} rightLabel={"偏信"} content={[{"text": "第二，是“一键拉黑”，", "startFrame": 0, "durationFrames": 30, "audioEffect": "impact_thud"}]} anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={462} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "凡是反驳我们的证据，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "哪怕铁证如山，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们也觉得那是造谣。", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={552} durationInFrames={57}>
                <BWMultiImage images={[{ src: staticFile("images/template/scene1_1.png"), position: "left" }, { src: staticFile("images/template/scene1_1.png"), position: "right" }]} content={[{"text": "这就像是一个正在热恋中的姑娘，她觉得男朋友哪儿都好。", "startFrame": 0, "durationFrames": 57, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={57} />
            </Sequence>
            <Sequence from={609} durationInFrames={30}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "男朋友迟到那是“有个性”，", "startFrame": 0, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={639} durationInFrames={60}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "男朋友不洗澡那是", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“纯爷们”。", "startFrame": 30, "durationFrames": 30, "audioEffect": null}]} anchors={[{"text": "纯爷们", "showFrom": 1, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={60} />
            </Sequence>
            <Sequence from={699} durationInFrames={79}>
                <BWCognitiveShift notText={"闺蜜证据"} butText={"脑补勾引"} notSrc={"闺蜜展示一叠照片"} butSrc={"一个女人诱惑一个男人"} content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 35, "durationFrames": 44, "audioEffect": null}]} anchors={[]} totalDurationFrames={79} />
            </Sequence>
            <Sequence from={778} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "大脑只会疯狂寻找能支持", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“我没看错人”的证据。", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[{"text": "不重要", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={868} durationInFrames={126}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"争论"} rightLabel={"求真"} content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31, "audioEffect": "ping"}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 61, "durationFrames": 35, "audioEffect": "ping"}, {"text": "心理游戏。", "startFrame": 96, "durationFrames": 30, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={126} />
            </Sequence>

        </AbsoluteFill>
    );
};
