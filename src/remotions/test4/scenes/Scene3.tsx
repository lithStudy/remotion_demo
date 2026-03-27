import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWMultiImage, BWTextFocus } from "../../../components";

// 心理学概念：确认偏误的解释
const SCENE_DURATION = 117 + 66 + 314 + 124 + 79 + 91 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWConceptCard imageSrc={staticFile("大脑中过滤器的卡通图")} conceptName={"确认偏误"} content={[{"text": "在心理学上，这种现象有一个", "startFrame": 0, "durationFrames": 30}, {"text": "著名的核心概念，叫作", "startFrame": 30, "durationFrames": 30}, {"text": "“确认偏误”（Confirmation Bias）。", "startFrame": 60, "durationFrames": 57}]} anchors={[]} totalDurationFrames={117} />
            </Sequence>
            <Sequence from={117} durationInFrames={66}>
                <BWCenterFocus imageSrc={staticFile("大脑内部结构，有光线透过滤镜")} enterEffect="breathe" content={[{"text": "简单通俗地说，确认偏误就像是我们大脑自带的一副“有色滤镜”。", "startFrame": 0, "durationFrames": 66}]} anchors={[]} totalDurationFrames={66} />
            </Sequence>
            <Sequence from={183} durationInFrames={314}>
                <BWMultiImage groups={[{"image": {"src": "一键拉黑的简笔画图标", "textIndex": 0}, "anchor": {"text": "一键拉黑", "audioEffect": "impact_thud"}}, {"image": {"src": "一键拉黑的简笔画图标", "textIndex": 1}, "anchor": {"text": "一键拉黑", "audioEffect": "impact_thud"}}, {"image": {"src": "自动美颜的简笔画图标", "textIndex": 2}, "anchor": {"text": "自动美颜", "audioEffect": "ping"}}, {"image": {"src": "一键拉黑的简笔画图标", "textIndex": 3}, "anchor": {"text": "一键拉黑", "audioEffect": "impact_thud"}}, {"image": {"src": "一键拉黑的简笔画图标", "textIndex": 4}, "anchor": {"text": "一键拉黑", "audioEffect": "impact_thud"}}]} content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33}, {"text": "**第一，是“自动美颜”，**", "startFrame": 68, "durationFrames": 33}, {"text": "凡是能证明我正确的信息，", "startFrame": 101, "durationFrames": 30}, {"text": "哪怕漏洞百出，", "startFrame": 131, "durationFrames": 30}, {"text": "我们也觉得是真理；", "startFrame": 161, "durationFrames": 30}, {"text": "**第二，是“一键拉黑”，**", "startFrame": 191, "durationFrames": 33}, {"text": "凡是反驳我们的证据，", "startFrame": 224, "durationFrames": 30}, {"text": "哪怕铁证如山，", "startFrame": 254, "durationFrames": 30}, {"text": "我们也觉得那是造谣。", "startFrame": 284, "durationFrames": 30}]} totalDurationFrames={314} />
            </Sequence>
            <Sequence from={497} durationInFrames={124}>
                <BWCenterFocus imageSrc={staticFile("一对情侣甜蜜约会的场景，男生在说甜言蜜语")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30}, {"text": "男朋友迟到那是“有个性”，", "startFrame": 63, "durationFrames": 30}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 93, "durationFrames": 31}]} anchors={[]} totalDurationFrames={124} />
            </Sequence>
            <Sequence from={621} durationInFrames={79}>
                <BWCenterFocus imageSrc={staticFile("闺蜜拿着一叠照片给一个女生看，女生捂着脸")} enterEffect="breathe" content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 0, "durationFrames": 35}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 35, "durationFrames": 44}]} anchors={[]} totalDurationFrames={79} />
            </Sequence>
            <Sequence from={700} durationInFrames={91}>
                <BWCenterFocus imageSrc={staticFile("混乱的大脑思考的抽象概念图")} enterEffect="breathe" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑只会疯狂寻找", "startFrame": 30, "durationFrames": 30}, {"text": "能支持“我没看错人”的证据。", "startFrame": 60, "durationFrames": 31}]} anchors={[]} totalDurationFrames={91} />
            </Sequence>
            <Sequence from={791} durationInFrames={126}>
                <BWTextFocus content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 61, "durationFrames": 35}, {"text": "的心理游戏。", "startFrame": 96, "durationFrames": 30}]} anchors={[]} totalDurationFrames={126} />
            </Sequence>

        </AbsoluteFill>
    );
};
