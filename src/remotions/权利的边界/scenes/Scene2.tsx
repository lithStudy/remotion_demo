import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWPeerInduct } from "../../../components";

// 剖析·规则锋利
const SCENE_DURATION = 265 + 131 + 190 + 168;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={265}>
                <BWPeerInduct content={[{"text": "一间破房子，", "startFrame": 0, "durationFrames": 42}, {"text": "它挡不住风。", "startFrame": 41, "durationFrames": 31}, {"text": "挡不住雨。", "startFrame": 72, "durationFrames": 33}, {"text": "挡不住寒冷和贫穷。", "startFrame": 104, "durationFrames": 43}, {"text": "但它偏偏能挡住这个世界上最强的人。国王。", "startFrame": 147, "durationFrames": 117}]} totalDurationFrames={265} premises={[{ imageSrc: staticFile("images/权利的边界/scene_2_2_img0.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/权利的边界/scene_2_2_img1.png"), enterEffect: "slideBottom", showFrom: 2 }, { imageSrc: staticFile("images/权利的边界/scene_2_2_img2.png"), enterEffect: "slideBottom", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("images/权利的边界/scene_2_2.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} />
            </Sequence>
            <Sequence from={265} durationInFrames={131}>
                <BWCognitiveShift content={[{"text": "但这里真正强的，", "startFrame": 0, "durationFrames": 47}, {"text": "从来不是那堵墙。", "startFrame": 46, "durationFrames": 39}, {"text": "而是墙背后的规则。", "startFrame": 85, "durationFrames": 45}]} totalDurationFrames={131} notText={"那堵墙"} butText={"墙背后的规则"} butSrc={staticFile("images/权利的边界/scene_2_4.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={396} durationInFrames={190}>
                <BWPanelGrid content={[{"text": "风能进，", "startFrame": 0, "durationFrames": 27}, {"text": "是自然的力量。", "startFrame": 26, "durationFrames": 39}, {"text": "雨能进，", "startFrame": 64, "durationFrames": 22}, {"text": "是贫穷的现实。", "startFrame": 86, "durationFrames": 39}, {"text": "国王不能进，", "startFrame": 124, "durationFrames": 27}, {"text": "是权利的边界。", "startFrame": 150, "durationFrames": 40}]} totalDurationFrames={190} panels={[{ src: staticFile("images/权利的边界/scene_2_5_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { src: staticFile("images/权利的边界/scene_2_5_img1.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/权利的边界/scene_2_5_img2.png"), showFrom: 4, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={586} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "这就是这句话的锋利之处。", "startFrame": 0, "durationFrames": 53}, {"text": "它把一个社会最底层的文明标准，", "startFrame": 52, "durationFrames": 65}, {"text": "压缩进了一间破房子里。", "startFrame": 116, "durationFrames": 52}]} totalDurationFrames={168} imageSrc={staticFile("images/权利的边界/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "文明标准", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
