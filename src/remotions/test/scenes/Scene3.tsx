import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 概念引入：确认偏误
const SCENE_DURATION = 262 + 146 + 359 + 204 + 257 + 180 + 175 + 219;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={262}>
                <BWConceptCard imageSrc={staticFile("images/test/3_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，", "startFrame": 0, "durationFrames": 102, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "叫作**“确认偏误”**", "startFrame": 101, "durationFrames": 64, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "（Confirmation Bias）。", "startFrame": 164, "durationFrames": 97, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={262} />
            </Sequence>
            <Sequence from={262} durationInFrames={146}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_2.png")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 34, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "确认偏误就像是我们大脑自带的一副“有色滤镜”。", "startFrame": 33, "durationFrames": 112, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={146} />
            </Sequence>
            <Sequence from={408} durationInFrames={359}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_3.png")} enterEffect="breathe" content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 78, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 77, "durationFrames": 73, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "**第一，是“自动美颜”**，", "startFrame": 150, "durationFrames": 73, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "凡是能证明我正确的信息，", "startFrame": 222, "durationFrames": 59, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "哪怕漏洞百出，我们也觉得是真理；", "startFrame": 281, "durationFrames": 78, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={359} />
            </Sequence>
            <Sequence from={767} durationInFrames={204}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_4.png")} enterEffect="breathe" content={[{"text": "**第二，是“一键拉黑”**，", "startFrame": 0, "durationFrames": 73, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "凡是反驳我们的证据，", "startFrame": 72, "durationFrames": 49, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "哪怕铁证如山，我们也觉得那是造谣。", "startFrame": 121, "durationFrames": 83, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={204} />
            </Sequence>
            <Sequence from={971} durationInFrames={257}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_5.png")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 73, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 72, "durationFrames": 54, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "男朋友迟到那是“有个性”，", "startFrame": 126, "durationFrames": 64, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 189, "durationFrames": 68, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={257} />
            </Sequence>
            <Sequence from={1228} durationInFrames={180}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_6.png")} enterEffect="breathe" content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 0, "durationFrames": 78, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "她也能脑补出那是", "startFrame": 77, "durationFrames": 44, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“坏女人在勾引我男人”。", "startFrame": 121, "durationFrames": 59, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={180} />
            </Sequence>
            <Sequence from={1408} durationInFrames={175}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_7.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 64, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "大脑只会疯狂寻找能支持", "startFrame": 63, "durationFrames": 59, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“我没看错人”的证据。", "startFrame": 121, "durationFrames": 54, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={175} />
            </Sequence>
            <Sequence from={1583} durationInFrames={219}>
                <BWCenterFocus imageSrc={staticFile("images/test/3_8.png")} enterEffect="breathe" content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 39, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 38, "durationFrames": 68, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "而是在玩一场名为", "startFrame": 106, "durationFrames": 44, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“证明我是对的”的心理游戏。", "startFrame": 150, "durationFrames": 68, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={219} />
            </Sequence>
            <Audio src={staticFile("/audio/test/3/3.mp3")} />
        </AbsoluteFill>
    );
};
