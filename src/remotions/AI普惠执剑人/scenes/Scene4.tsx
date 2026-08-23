import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWKpiHero, BWPanelGrid, BWTextFocus } from "../../../components";

// 开源
const SCENE_DURATION = 107 + 146 + 213 + 49 + 139 + 246;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={107}>
                <BWCenterFocus content={[{"text": "但梁文锋真正让我佩服的，", "startFrame": 0, "durationFrames": 50}, {"text": "还不是技术。", "startFrame": 49, "durationFrames": 31}, {"text": "是他开源。", "startFrame": 79, "durationFrames": 27}]} totalDurationFrames={107} imageSrc={staticFile("images/AI普惠执剑人/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={107} durationInFrames={146}>
                <BWPanelGrid content={[{"text": "模型权重开源。", "startFrame": 0, "durationFrames": 53}, {"text": "训练方法开源。", "startFrame": 52, "durationFrames": 48}, {"text": "关键技术开源。", "startFrame": 100, "durationFrames": 46}]} totalDurationFrames={146} panels={[{ src: staticFile("images/AI普惠执剑人/scene_4_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/AI普惠执剑人/scene_4_3_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/AI普惠执剑人/scene_4_3_img2.png"), showFrom: 2, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={253} durationInFrames={213}>
                <BWCenterFocus content={[{"text": "生怕小公司用不起大型模型，", "startFrame": 0, "durationFrames": 64}, {"text": "甚至贴心的提供了轻量级蒸馏模型。", "startFrame": 63, "durationFrames": 79}, {"text": "让一台消费级显卡也能跑起来。", "startFrame": 141, "durationFrames": 71}]} totalDurationFrames={213} imageSrc={staticFile("images/AI普惠执剑人/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "蒸馏模型", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={466} durationInFrames={49}>
                <BWTextFocus content={[{"text": "这件事有多反常识？", "startFrame": 0, "durationFrames": 49}]} totalDurationFrames={49} coreSentence={[{"text": "这件事有多反常识？", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={515} durationInFrames={139}>
                <BWKpiHero content={[{"text": "你要知道，", "startFrame": 0, "durationFrames": 23}, {"text": "光是模型的研发和训练，", "startFrame": 22, "durationFrames": 59}, {"text": "就需要花费了上百亿美元。", "startFrame": 81, "durationFrames": 57}]} totalDurationFrames={139} value={100} suffix={"+亿美元"} label={"模型研发训练"} useGrouping={false} decimalPlaces={0} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={654} durationInFrames={246}>
                <BWBeatSequence content={[{"text": "这些东西如果放在闭源公司手里，", "startFrame": 0, "durationFrames": 59}, {"text": "就是估值，", "startFrame": 58, "durationFrames": 24}, {"text": "就是护城河，", "startFrame": 82, "durationFrames": 29}, {"text": "就是生态入口。", "startFrame": 111, "durationFrames": 33}, {"text": "就是上千亿美元商业版图的底层资产。", "startFrame": 143, "durationFrames": 102}]} totalDurationFrames={246} stages={[{ imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img2.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img3.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
