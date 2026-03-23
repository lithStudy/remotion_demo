import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWMultiImage, BWTextFocus } from "../../../components";

// 心理学概念：确认偏误
const SCENE_DURATION = 108 + 95 + 68 + 92 + 89 + 63 + 59 + 79 + 78 + 96;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={108}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，叫作", "startFrame": 0, "durationFrames": 51, "anchor": "确认偏误", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "“确认偏误”（Confirmation Bias）。", "startFrame": 51, "durationFrames": 57, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={108} />
            </Sequence>
            <Sequence from={108} durationInFrames={95}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "确认偏误就像是我们大脑自带的一副", "startFrame": 30, "durationFrames": 35, "anchor": "确认偏误", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "“有色滤镜”。", "startFrame": 65, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={95} />
            </Sequence>
            <Sequence from={203} durationInFrames={68}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "当我们先入为主地相信一个观点时，我们的脑子会自动开启两个功能：", "startFrame": 0, "durationFrames": 68, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={68} />
            </Sequence>
            <Sequence from={271} durationInFrames={92}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第一，是“自动美颜”，", "startFrame": 0, "durationFrames": 30, "anchor": "自动美颜", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "凡是能证明我正确的信息，哪怕漏洞百出，我们也觉得是真理；", "startFrame": 30, "durationFrames": 62, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={92} />
            </Sequence>
            <Sequence from={363} durationInFrames={89}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第二，是“一键拉黑”，", "startFrame": 0, "durationFrames": 30, "anchor": "一键拉黑", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "凡是反驳我们的证据，哪怕铁证如山，我们也觉得那是造谣。", "startFrame": 30, "durationFrames": 59, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={89} />
            </Sequence>
            <Sequence from={452} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33, "anchor": "热恋", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={63} />
            </Sequence>
            <Sequence from={515} durationInFrames={59}>
                <BWMultiImage images={[{ src: staticFile("images/template/scene1_1.png"), position: "top", enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), position: "bottom", enterEffect: "slideBottom" }]} content={[{"text": "男朋友迟到那是“有个性”，男朋友不洗澡那是“纯爷们”。", "startFrame": 0, "durationFrames": 59, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={59} />
            </Sequence>
            <Sequence from={574} durationInFrames={79}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 0, "durationFrames": 79, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={79} />
            </Sequence>
            <Sequence from={653} durationInFrames={78}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30, "anchor": "不重要", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "大脑只会疯狂寻找能支持“我没看错人”的证据。", "startFrame": 30, "durationFrames": 48, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={78} />
            </Sequence>
            <Sequence from={731} durationInFrames={96}>
                <BWTextFocus content={[{"text": "在互联网讨论中，很多人其实并不是在寻找真理，", "startFrame": 0, "durationFrames": 48, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "而是在玩一场名为“证明我是对的”的心理游戏。", "startFrame": 48, "durationFrames": 48, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={96} />
            </Sequence>

        </AbsoluteFill>
    );
};
