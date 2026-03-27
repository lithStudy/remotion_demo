import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWMultiImage, BWTextFocus } from "../../../components";

// 解释概念：确认偏误
const SCENE_DURATION = 93 + 120 + 308 + 63 + 61 + 79 + 78 + 109;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={93}>
                <BWConceptCard content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "这种现象有一个著名的核心概念，", "startFrame": 30, "durationFrames": 33}, {"text": "叫作“确认偏误”。", "startFrame": 63, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"确认偏误"} anchors={[{"text": "确认偏误", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={93} />
            </Sequence>
            <Sequence from={93} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30}, {"text": "确认偏误就像是", "startFrame": 30, "durationFrames": 30}, {"text": "我们大脑自带的", "startFrame": 60, "durationFrames": 30}, {"text": "一副“有色滤镜”。", "startFrame": 90, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={213} durationInFrames={308}>
                <BWMultiImage content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33}, {"text": "第一，是“自动美颜”，", "startFrame": 68, "durationFrames": 30}, {"text": "凡是能证明我正确的信息，", "startFrame": 98, "durationFrames": 30}, {"text": "哪怕漏洞百出，", "startFrame": 128, "durationFrames": 30}, {"text": "我们也觉得是真理；", "startFrame": 158, "durationFrames": 30}, {"text": "第二，是“一键拉黑”，", "startFrame": 188, "durationFrames": 30}, {"text": "凡是反驳我们的证据，", "startFrame": 218, "durationFrames": 30}, {"text": "哪怕铁证如山，", "startFrame": 248, "durationFrames": 30}, {"text": "我们也觉得那是造谣。", "startFrame": 278, "durationFrames": 30}]} groups={[{"image": {"src": "美颜滤镜简笔画图标", "textIndex": 2}, "anchor": {"text": "自动美颜", "audioEffect": "ping"}}, {"image": {"src": "垃圾桶简笔画图标", "textIndex": 6}, "anchor": {"text": "一键拉黑", "audioEffect": "ping"}}]} images={[{ src: staticFile("images/template/scene1_1.png"), textIndex: 2 }, { src: staticFile("images/template/scene1_1.png"), textIndex: 6 }]} anchors={[{"text": "自动美颜", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "一键拉黑", "showFrom": 6, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} totalDurationFrames={308} />
            </Sequence>
            <Sequence from={521} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={63} />
            </Sequence>
            <Sequence from={584} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "男朋友迟到那是“有个性”，", "startFrame": 0, "durationFrames": 30}, {"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 30, "durationFrames": 31}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={645} durationInFrames={79}>
                <BWCenterFocus content={[{"text": "哪怕闺蜜拿出一叠男方劈腿的证据，", "startFrame": 0, "durationFrames": 35}, {"text": "她也能脑补出那是“坏女人在勾引我男人”。", "startFrame": 35, "durationFrames": 44}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={79} />
            </Sequence>
            <Sequence from={724} durationInFrames={78}>
                <BWCenterFocus content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑只会疯狂寻找能支持“我没看错人”的证据。", "startFrame": 30, "durationFrames": 48}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={78} />
            </Sequence>
            <Sequence from={802} durationInFrames={109}>
                <BWTextFocus content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31}, {"text": "而是在玩一场名为“证明我是对的”的心理游戏。", "startFrame": 61, "durationFrames": 48}]} coreSentence={"很多人在玩“证明我是对的”心理游戏。"} anchors={[{"text": "心理游戏", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={109} />
            </Sequence>

        </AbsoluteFill>
    );
};
