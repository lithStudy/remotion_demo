import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 解释概念：确认偏误
const SCENE_DURATION = 108 + 95 + 98 + 90 + 120 + 63 + 61 + 79 + 91 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={108}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个著名的核心概念，", "startFrame": 0, "durationFrames": 46}, {"text": "叫作“确认偏误”（Confirmation Bias）。", "startFrame": 46, "durationFrames": 62}]} anchors={[]} totalDurationFrames={108} />
            </Sequence>
            <Sequence from={108} durationInFrames={95}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30}, {"text": "确认偏误就像是我们大脑自带的一副", "startFrame": 30, "durationFrames": 35}, {"text": "“有色滤镜”。", "startFrame": 65, "durationFrames": 30}]} anchors={[]} totalDurationFrames={95} />
            </Sequence>
            <Sequence from={203} durationInFrames={98}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33}, {"text": "第一，是“自动美颜”，", "startFrame": 68, "durationFrames": 30}]} anchors={[]} totalDurationFrames={98} />
            </Sequence>
            <Sequence from={301} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "凡是能证明我正确的信息，", "startFrame": 0, "durationFrames": 30}, {"text": "哪怕漏洞百出，", "startFrame": 30, "durationFrames": 30}, {"text": "我们也觉得是真理；", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={391} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideLeft" content={[{"text": "第二，是“一键拉黑”，", "startFrame": 0, "durationFrames": 30}, {"text": "凡是反驳我们的证据，", "startFrame": 30, "durationFrames": 30}, {"text": "哪怕铁证如山，", "startFrame": 60, "durationFrames": 30}, {"text": "我们也觉得那是造谣。", "startFrame": 90, "durationFrames": 30}]} anchors={[{"text": "一键拉黑", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={511} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>
            <Sequence from={574} durationInFrames={61}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "男朋友迟到那是“有个性”，", "startFrame": 0, "durationFrames": 30}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 30, "durationFrames": 31}]} anchors={[]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={635} durationInFrames={79}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 0, "durationFrames": 35}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 35, "durationFrames": 44}]} anchors={[]} totalDurationFrames={79} />
            </Sequence>
            <Sequence from={714} durationInFrames={91}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑只会疯狂寻找", "startFrame": 30, "durationFrames": 30}, {"text": "能支持“我没看错人”的证据。", "startFrame": 60, "durationFrames": 31}]} anchors={[]} totalDurationFrames={91} />
            </Sequence>
            <Sequence from={805} durationInFrames={126}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 61, "durationFrames": 35}, {"text": "的心理游戏。", "startFrame": 96, "durationFrames": 30}]} anchors={[]} totalDurationFrames={126} />
            </Sequence>

        </AbsoluteFill>
    );
};
