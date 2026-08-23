import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWPeerInduct } from "../../../components";

// 剖析·规则锋利
const SCENE_DURATION = 260 + 134 + 187 + 169;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={260}>
                <BWPeerInduct content={[{"text": "一间破房子，", "startFrame": 0, "durationFrames": 33}, {"text": "它挡不住风。", "startFrame": 32, "durationFrames": 39}, {"text": "挡不住雨。", "startFrame": 70, "durationFrames": 32}, {"text": "挡不住寒冷和贫穷。", "startFrame": 102, "durationFrames": 43}, {"text": "但它偏偏能挡住这个世界上最强的人。国王。", "startFrame": 144, "durationFrames": 115}]} totalDurationFrames={260} premises={[{ imageSrc: staticFile("images/权利的边界/scene_2_2_img0.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/权利的边界/scene_2_2_img1.png"), enterEffect: "slideBottom", showFrom: 2 }, { imageSrc: staticFile("images/权利的边界/scene_2_2_img2.png"), enterEffect: "slideBottom", showFrom: 3 }]} conclusion={{ imageSrc: staticFile("images/权利的边界/scene_2_2.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} />
            </Sequence>
            <Sequence from={260} durationInFrames={134}>
                <BWCognitiveShift content={[{"text": "但这里真正强的，", "startFrame": 0, "durationFrames": 45}, {"text": "从来不是那堵墙。", "startFrame": 44, "durationFrames": 41}, {"text": "而是墙背后的规则。", "startFrame": 85, "durationFrames": 48}]} totalDurationFrames={134} notText={"那堵墙"} butText={"墙背后的规则"} butSrc={staticFile("images/权利的边界/scene_2_4.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={394} durationInFrames={187}>
                <BWPanelGrid content={[{"text": "风能进，", "startFrame": 0, "durationFrames": 24}, {"text": "是自然的力量。", "startFrame": 24, "durationFrames": 33}, {"text": "雨能进，", "startFrame": 56, "durationFrames": 25}, {"text": "是贫穷的现实。", "startFrame": 80, "durationFrames": 38}, {"text": "国王不能进，", "startFrame": 118, "durationFrames": 26}, {"text": "是权利的边界。", "startFrame": 143, "durationFrames": 43}]} totalDurationFrames={187} panels={[{ src: staticFile("images/权利的边界/scene_2_5_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { src: staticFile("images/权利的边界/scene_2_5_img1.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/权利的边界/scene_2_5_img2.png"), showFrom: 4, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={581} durationInFrames={169}>
                <BWCenterFocus content={[{"text": "这就是这句话的锋利之处。", "startFrame": 0, "durationFrames": 53}, {"text": "它把一个社会最底层的文明标准，", "startFrame": 52, "durationFrames": 63}, {"text": "压缩进了一间破房子里。", "startFrame": 114, "durationFrames": 54}]} totalDurationFrames={169} imageSrc={staticFile("images/权利的边界/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "文明标准", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利的边界/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
