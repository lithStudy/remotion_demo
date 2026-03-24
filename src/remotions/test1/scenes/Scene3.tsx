import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWMultiImage, BWTextFocus } from "../../../components";

// 解释概念：确认偏误及其表现
const SCENE_DURATION = 108 + 91 + 260 + 203 + 78 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={108}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，叫作", "startFrame": 0, "durationFrames": 51, "audioEffect": "ping"}, {"text": "“确认偏误”（Confirmation Bias）。", "startFrame": 51, "durationFrames": 57, "audioEffect": null}]} anchors={[]} totalDurationFrames={108} />
            </Sequence>
            <Sequence from={108} durationInFrames={91}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "确认偏误就像是我们", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "大脑自带的一副“有色滤镜”。", "startFrame": 60, "durationFrames": 31, "audioEffect": null}]} anchors={[]} totalDurationFrames={91} />
            </Sequence>
            <Sequence from={199} durationInFrames={260}>
                <BWMultiImage images={[{ src: staticFile("images/template/scene1_1.png"), textIndex: 2 }, { src: staticFile("images/template/scene1_1.png"), textIndex: 5 }]} content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33, "audioEffect": "ping"}, {"text": "第一，是“自动美颜”，", "startFrame": 68, "durationFrames": 30, "audioEffect": "woosh"}, {"text": "凡是能证明我正确的信息，", "startFrame": 98, "durationFrames": 30, "audioEffect": "ping"}, {"text": "哪怕漏洞百出，我们也觉得是真理；", "startFrame": 128, "durationFrames": 35, "audioEffect": "ping"}, {"text": "第二，是“一键拉黑”，", "startFrame": 163, "durationFrames": 30, "audioEffect": "woosh"}, {"text": "凡是反驳我们的证据，", "startFrame": 193, "durationFrames": 30, "audioEffect": "ping"}, {"text": "哪怕铁证如山，我们也觉得那是造谣。", "startFrame": 223, "durationFrames": 37, "audioEffect": null}]} anchors={[]} totalDurationFrames={260} />
            </Sequence>
            <Sequence from={459} durationInFrames={203}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33, "audioEffect": "ping"}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30, "audioEffect": "ping"}, {"text": "男朋友迟到那是“有个性”，", "startFrame": 63, "durationFrames": 30, "audioEffect": "ping"}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 93, "durationFrames": 31, "audioEffect": "ping"}, {"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 124, "durationFrames": 35, "audioEffect": "ping"}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 159, "durationFrames": 44, "audioEffect": null}]} anchors={[]} totalDurationFrames={203} />
            </Sequence>
            <Sequence from={662} durationInFrames={78}>
                <BWTextFocus content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "大脑只会疯狂寻找能支持“我没看错人”的证据。", "startFrame": 30, "durationFrames": 48, "audioEffect": null}]} anchors={[]} totalDurationFrames={78} />
            </Sequence>
            <Sequence from={740} durationInFrames={126}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31, "audioEffect": "ping"}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 61, "durationFrames": 35, "audioEffect": "ping"}, {"text": "的心理游戏。", "startFrame": 96, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={126} />
            </Sequence>

        </AbsoluteFill>
    );
};
