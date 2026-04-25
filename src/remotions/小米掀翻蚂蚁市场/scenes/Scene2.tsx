import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWPeerInduct } from "../../../components";

// 蚂蚁市场
const SCENE_DURATION = 115 + 171;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={115}>
                <BWConceptCard content={[{"text": "以前的中国小家电市场，", "startFrame": 0, "durationFrames": 53}, {"text": "经济学上叫“蚂蚁市场”。", "startFrame": 52, "durationFrames": 63}]} totalDurationFrames={115} imageSrc={staticFile("images/小米掀翻蚂蚁市场/scene_2_1.png")} conceptName={"蚂蚁市场"} anchors={[]} />
            </Sequence>
            <Sequence from={115} durationInFrames={171}>
                <BWPeerInduct content={[{"text": "门槛极低，", "startFrame": 0, "durationFrames": 32}, {"text": "山寨横行，", "startFrame": 31, "durationFrames": 32}, {"text": "劣币驱逐良币，", "startFrame": 63, "durationFrames": 42}, {"text": "消费者的痛点，", "startFrame": 104, "durationFrames": 35}, {"text": "根本没人管。", "startFrame": 139, "durationFrames": 31}]} totalDurationFrames={171} premises={[{ imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_2_2_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_2_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_2_2_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} conclusion={{ imageSrc: staticFile("images/小米掀翻蚂蚁市场/scene_2_2.png"), enterEffect: "zoomIn", showFrom: 3, tone: "alert" }} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米掀翻蚂蚁市场/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
