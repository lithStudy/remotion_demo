import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTimeline } from "../../../components";

// 剖析·决策层瓶颈
const SCENE_DURATION = 153 + 192 + 456 + 215 + 181 + 220;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={153}>
                <BWCognitiveShift content={[{"text": "现在智驾的瓶颈，", "startFrame": 0, "durationFrames": 42}, {"text": "不在于看不到路况。", "startFrame": 41, "durationFrames": 44}, {"text": "而是不知道怎么根据路况做决策。", "startFrame": 85, "durationFrames": 68}]} totalDurationFrames={153} notText={"看不到路况"} butText={"不知如何决策"} butSrc={staticFile("images/智驾论之瓶颈/scene_2_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={153} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "因为就现在的智驾来看，", "startFrame": 0, "durationFrames": 55}, {"text": "即使是在光线好的情况下能开好车，", "startFrame": 54, "durationFrames": 81}, {"text": "就已经是长远目标了。", "startFrame": 135, "durationFrames": 57}]} totalDurationFrames={192} imageSrc={staticFile("images/智驾论之瓶颈/scene_2_2.png")} anchors={[]} />
            </Sequence>
            <Sequence from={345} durationInFrames={456}>
                <BWTimeline content={[{"text": "盘山公路上，", "startFrame": 0, "durationFrames": 33}, {"text": "某些智驾跑一半路就接管33次。", "startFrame": 32, "durationFrames": 83}, {"text": "这是看不清路的问题吗？", "startFrame": 115, "durationFrames": 41}, {"text": "大马路上，", "startFrame": 155, "durationFrames": 44}, {"text": "某些智驾专爱往橙色上撞。", "startFrame": 199, "durationFrames": 62}, {"text": "这是看不清路的问题吗？", "startFrame": 261, "durationFrames": 41}, {"text": "限宽墩间，", "startFrame": 301, "durationFrames": 51}, {"text": "某些智驾就是过不去，", "startFrame": 351, "durationFrames": 55}, {"text": "这是看不清路的问题吗？", "startFrame": 406, "durationFrames": 50}]} totalDurationFrames={456} images={[{ src: staticFile("images/智驾论之瓶颈/scene_2_3_img0.png"), enterEffect: "slideLeft", textIndex: 0, label: "盘山公路" }, { src: staticFile("images/智驾论之瓶颈/scene_2_3_img1.png"), enterEffect: "fadeIn", textIndex: 3, label: "大马路" }, { src: staticFile("images/智驾论之瓶颈/scene_2_3_img2.png"), enterEffect: "zoomIn", textIndex: 6, label: "限宽墩" }]} />
            </Sequence>
            <Sequence from={801} durationInFrames={215}>
                <BWCognitiveShift content={[{"text": "不是。", "startFrame": 0, "durationFrames": 17}, {"text": "光天化日，", "startFrame": 16, "durationFrames": 32}, {"text": "朗朗乾坤，", "startFrame": 48, "durationFrames": 29}, {"text": "摄像头把路拍得清清楚楚。", "startFrame": 76, "durationFrames": 57}, {"text": "问题是，", "startFrame": 133, "durationFrames": 29}, {"text": "系统不知道该怎么处理。", "startFrame": 161, "durationFrames": 54}]} totalDurationFrames={215} notText={"看不清路况"} butText={"不会做决策"} butSrc={staticFile("images/智驾论之瓶颈/scene_2_6.png")} notContentIndex={0} butContentIndex={5} anchors={[]} />
            </Sequence>
            <Sequence from={1016} durationInFrames={181}>
                <BWCognitiveShift content={[{"text": "盘山公路的33次接管，", "startFrame": 0, "durationFrames": 60}, {"text": "暴露的不是感知层的分辨率问题。", "startFrame": 60, "durationFrames": 69}, {"text": "而是决策层的逻辑漏洞。", "startFrame": 128, "durationFrames": 53}]} totalDurationFrames={181} notText={"感知层分辨率"} butText={"决策层逻辑漏洞"} butSrc={staticFile("images/智驾论之瓶颈/scene_2_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1197} durationInFrames={220}>
                <BWCognitiveShift content={[{"text": "往橙色物体猛撞，", "startFrame": 0, "durationFrames": 46}, {"text": "暴露的不是雷达缺失导致的漏检。", "startFrame": 45, "durationFrames": 76}, {"text": "而是神经网络对“橙色”这个特征的错误泛化。", "startFrame": 121, "durationFrames": 98}]} totalDurationFrames={220} notText={"雷达缺失漏检"} butText={"橙色特征误泛化"} butSrc={staticFile("images/智驾论之瓶颈/scene_2_8.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之瓶颈/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
