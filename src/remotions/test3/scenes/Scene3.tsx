import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWMultiImage, BWSplitCompare } from "../../../components";

// 心理学解释：确认偏误的概念
const SCENE_DURATION = 223 + 138 + 187 + 125 + 49 + 121 + 116 + 58 + 67 + 161 + 161 + 196;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={223}>
                <BWConceptCard imageSrc={staticFile("images/test3/scene_3_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，", "startFrame": 0, "durationFrames": 94, "audioEffect": "ping"}, {"text": "叫作", "startFrame": 93, "durationFrames": 14, "audioEffect": "ping"}, {"text": "“确认偏误”（Confirmation Bias）。", "startFrame": 106, "durationFrames": 116, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={223} />
            </Sequence>
            <Sequence from={223} durationInFrames={138}>
                <BWMagnifyingGlass content={[{"text": "简单通俗地说，确认偏误就像是我们大脑自带的一副", "startFrame": 0, "durationFrames": 107, "audioEffect": "ping"}, {"text": "“有色滤镜”。", "startFrame": 106, "durationFrames": 32, "audioEffect": null}]} anchors={[{"text": "确认偏误", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={138} />
            </Sequence>
            <Sequence from={361} durationInFrames={187}>
                <BWSplitCompare leftSrc={staticFile("images/test3/scene_3_3_left.png")} rightSrc={staticFile("images/test3/scene_3_3_right.png")} leftLabel={"先入为主"} rightLabel={"自动美颜"} content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 72, "audioEffect": "ping"}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 71, "durationFrames": 67, "audioEffect": "ping"}, {"text": "第一，是“自动美颜”，", "startFrame": 137, "durationFrames": 49, "audioEffect": null}, {"text": "", "startFrame": 186, "durationFrames": 1, "audioEffect": null}]} anchors={[]} totalDurationFrames={187} />
            </Sequence>
            <Sequence from={548} durationInFrames={125}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_3_4.png")} enterEffect="breathe" content={[{"text": "凡是能证明我正确的信息，", "startFrame": 0, "durationFrames": 54, "audioEffect": "ping"}, {"text": "哪怕漏洞百出，", "startFrame": 53, "durationFrames": 32, "audioEffect": "ping"}, {"text": "我们也觉得是真理；", "startFrame": 84, "durationFrames": 41, "audioEffect": null}]} anchors={[{"text": "真理", "showFrom": 2, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={125} />
            </Sequence>
            <Sequence from={673} durationInFrames={49}>
                <BWSplitCompare leftSrc={staticFile("images/test3/scene_3_5_left.png")} rightSrc={staticFile("images/test3/scene_3_5_right.png")} leftLabel={"兼听"} rightLabel={"偏信"} content={[{"text": "第二，是“一键拉黑”，", "startFrame": 0, "durationFrames": 49, "audioEffect": "impact_thud"}]} anchors={[]} totalDurationFrames={49} />
            </Sequence>
            <Sequence from={722} durationInFrames={121}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_3_6.png")} enterEffect="fadeIn" content={[{"text": "凡是反驳我们的证据，", "startFrame": 0, "durationFrames": 45, "audioEffect": "ping"}, {"text": "哪怕铁证如山，", "startFrame": 44, "durationFrames": 32, "audioEffect": "ping"}, {"text": "我们也觉得那是造谣。", "startFrame": 75, "durationFrames": 45, "audioEffect": null}]} anchors={[]} totalDurationFrames={121} />
            </Sequence>
            <Sequence from={843} durationInFrames={116}>
                <BWMultiImage images={[{ src: staticFile("images/test3/scene_3_7_left.png"), position: "left" }, { src: staticFile("images/test3/scene_3_7_right.png"), position: "right" }]} content={[{"text": "这就像是一个正在热恋中的姑娘，她觉得男朋友哪儿都好。", "startFrame": 0, "durationFrames": 116, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={116} />
            </Sequence>
            <Sequence from={959} durationInFrames={58}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_3_8.png")} enterEffect="breathe" content={[{"text": "男朋友迟到那是“有个性”，", "startFrame": 0, "durationFrames": 58, "audioEffect": null}]} anchors={[]} totalDurationFrames={58} />
            </Sequence>
            <Sequence from={1017} durationInFrames={67}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_3_9.png")} enterEffect="breathe" content={[{"text": "男朋友不洗澡那是", "startFrame": 0, "durationFrames": 41, "audioEffect": "ping"}, {"text": "“纯爷们”。", "startFrame": 40, "durationFrames": 27, "audioEffect": null}]} anchors={[{"text": "纯爷们", "showFrom": 1, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={67} />
            </Sequence>
            <Sequence from={1084} durationInFrames={161}>
                <BWCognitiveShift notText={"闺蜜证据"} butText={"脑补勾引"} notSrc={"images/test3/scene_3_10.png"} butSrc={"images/test3/scene_3_10.png"} content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 0, "durationFrames": 72, "audioEffect": "ping"}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 71, "durationFrames": 89, "audioEffect": null}]} anchors={[]} totalDurationFrames={161} />
            </Sequence>
            <Sequence from={1245} durationInFrames={161}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_3_11.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 58, "audioEffect": "ping"}, {"text": "大脑只会疯狂寻找能支持", "startFrame": 57, "durationFrames": 54, "audioEffect": "ping"}, {"text": "“我没看错人”的证据。", "startFrame": 111, "durationFrames": 49, "audioEffect": null}]} anchors={[{"text": "不重要", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={161} />
            </Sequence>
            <Sequence from={1406} durationInFrames={196}>
                <BWSplitCompare leftSrc={staticFile("images/test3/scene_3_12_left.png")} rightSrc={staticFile("images/test3/scene_3_12_right.png")} leftLabel={"争论"} rightLabel={"求真"} content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 36, "audioEffect": "ping"}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 35, "durationFrames": 63, "audioEffect": "ping"}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 97, "durationFrames": 76, "audioEffect": "ping"}, {"text": "心理游戏。", "startFrame": 173, "durationFrames": 23, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={196} />
            </Sequence>
            <Audio src={staticFile("/audio/test3/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
