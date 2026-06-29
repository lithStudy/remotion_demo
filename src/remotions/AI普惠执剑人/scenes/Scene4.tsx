import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWKpiHero, BWPanelGrid, BWTextFocus } from "../../../components";

// 开源
const SCENE_DURATION = 120 + 139 + 214 + 48 + 131 + 251;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "但梁文锋真正让我佩服的，", "startFrame": 0, "durationFrames": 55}, {"text": "还不是技术。", "startFrame": 54, "durationFrames": 35}, {"text": "是他开源。", "startFrame": 89, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("images/AI普惠执剑人/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={139}>
                <BWPanelGrid content={[{"text": "模型权重开源。", "startFrame": 0, "durationFrames": 53}, {"text": "训练方法开源。", "startFrame": 52, "durationFrames": 43}, {"text": "关键技术开源。", "startFrame": 94, "durationFrames": 44}]} totalDurationFrames={139} panels={[{ src: staticFile("images/AI普惠执剑人/scene_4_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/AI普惠执剑人/scene_4_3_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/AI普惠执剑人/scene_4_3_img2.png"), showFrom: 2, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={259} durationInFrames={214}>
                <BWCenterFocus content={[{"text": "生怕小公司用不起大型模型，", "startFrame": 0, "durationFrames": 66}, {"text": "甚至贴心的提供了轻量级蒸馏模型。", "startFrame": 65, "durationFrames": 81}, {"text": "让一台消费级显卡也能跑起来。", "startFrame": 145, "durationFrames": 68}]} totalDurationFrames={214} imageSrc={staticFile("images/AI普惠执剑人/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "蒸馏模型", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={473} durationInFrames={48}>
                <BWTextFocus content={[{"text": "这件事有多反常识？", "startFrame": 0, "durationFrames": 48}]} totalDurationFrames={48} coreSentence={[{"text": "这件事有多反常识？", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={521} durationInFrames={131}>
                <BWKpiHero content={[{"text": "你要知道，", "startFrame": 0, "durationFrames": 21}, {"text": "光是模型的研发和训练，", "startFrame": 20, "durationFrames": 57}, {"text": "就需要花费了上百亿美元。", "startFrame": 77, "durationFrames": 54}]} totalDurationFrames={131} value={100} suffix={"+亿美元"} label={"模型研发训练"} useGrouping={false} decimalPlaces={0} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={652} durationInFrames={251}>
                <BWBeatSequence content={[{"text": "这些东西如果放在闭源公司手里，", "startFrame": 0, "durationFrames": 63}, {"text": "就是估值，", "startFrame": 62, "durationFrames": 28}, {"text": "就是护城河，", "startFrame": 89, "durationFrames": 29}, {"text": "就是生态入口。", "startFrame": 117, "durationFrames": 36}, {"text": "就是上千亿美元商业版图的底层资产。", "startFrame": 153, "durationFrames": 97}]} totalDurationFrames={251} stages={[{ imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img2.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_4_10_img3.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
