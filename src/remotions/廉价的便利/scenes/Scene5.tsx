import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid, BWTextFocus } from "../../../components";

// 召唤：别再为廉价便利沾沾自喜
const SCENE_DURATION = 115 + 341 + 79 + 103 + 173;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={115}>
                <BWCenterFocus content={[{"text": "一个国家真正发达的标志，", "startFrame": 0, "durationFrames": 52}, {"text": "从来不是你能多便宜地使唤别人。", "startFrame": 51, "durationFrames": 63}]} totalDurationFrames={115} imageSrc={staticFile("images/廉价的便利/scene_5_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={115} durationInFrames={341}>
                <BWPanelGrid content={[{"text": "而是，", "startFrame": 0, "durationFrames": 18}, {"text": "一个送货员、", "startFrame": 17, "durationFrames": 33}, {"text": "一个清洁工、", "startFrame": 50, "durationFrames": 28}, {"text": "一个小文员，", "startFrame": 77, "durationFrames": 34}, {"text": "付出每天8小时的正常劳动，", "startFrame": 111, "durationFrames": 62}, {"text": "就能换来体面的收入，", "startFrame": 172, "durationFrames": 51}, {"text": "养得起家，", "startFrame": 222, "durationFrames": 29}, {"text": "拥有作为人的基本生活时间和娱乐时间。", "startFrame": 250, "durationFrames": 90}]} totalDurationFrames={341} panels={[{ src: staticFile("images/廉价的便利/scene_5_2_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/廉价的便利/scene_5_2_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/廉价的便利/scene_5_2_img2.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={456} durationInFrames={79}>
                <BWTextFocus content={[{"text": "别再为“廉价的便利”沾沾自喜了。", "startFrame": 0, "durationFrames": 79}]} totalDurationFrames={79} coreSentence={[{"text": "别再为“廉价的便利”", "showFrom": 0}, {"text": "沾沾自喜", "showFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "廉价的便利", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={535} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "你以为你只是在享受别人被压榨换来的便宜，", "startFrame": 0, "durationFrames": 103}]} totalDurationFrames={103} imageSrc={staticFile("images/廉价的便利/scene_5_5.png")} enterEffect="fadeIn" anchors={[{"text": "压榨", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={638} durationInFrames={173}>
                <BWTextFocus content={[{"text": "其实在这个巨大的齿轮里，", "startFrame": 0, "durationFrames": 65}, {"text": "迟早有一天，", "startFrame": 64, "durationFrames": 36}, {"text": "你也会成为别人享受便利的代价。", "startFrame": 100, "durationFrames": 73}]} totalDurationFrames={173} coreSentence={[{"text": "其实在这个巨大的齿轮里，", "showFrom": 0, "endFrom": 0}, {"text": "迟早有一天，", "showFrom": 1, "endFrom": 1}, {"text": "你也会成为别人享受便利的代价。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
