import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus, BWTimeline } from "../../../components";

// 华为又突破冯架构
const SCENE_DURATION = 98 + 284 + 50;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={98}>
                <BWTextFocus content={[{"text": "留给华为突破的世纪发明，", "startFrame": 0, "durationFrames": 59}, {"text": "真的不多了。", "startFrame": 58, "durationFrames": 39}]} totalDurationFrames={98} coreSentence={[{"text": "留给华为突破的世纪发明，", "showFrom": 0}, {"text": "真的不多了。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "世纪发明", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={98} durationInFrames={284}>
                <BWTimeline content={[{"text": "继，光子芯片突破光刻机限制，", "startFrame": 0, "durationFrames": 84}, {"text": "三进制突破二进制限制，", "startFrame": 84, "durationFrames": 58}, {"text": "韬定律突破芯片极限之后，", "startFrame": 141, "durationFrames": 63}, {"text": "这次，", "startFrame": 204, "durationFrames": 22}, {"text": "他们又突破冯·诺依曼架构了！", "startFrame": 225, "durationFrames": 58}]} totalDurationFrames={284} images={[{ src: staticFile("images/冯诺依曼突破论/scene_1_2_img0.png"), enterEffect: "slideLeft", textIndex: 0, label: "光子芯片", startFrame: 0 }, { src: staticFile("images/冯诺依曼突破论/scene_1_2_img1.png"), enterEffect: "fadeIn", textIndex: 1, label: "三进制", startFrame: 30 }, { src: staticFile("images/冯诺依曼突破论/scene_1_2_img2.png"), enterEffect: "zoomIn", textIndex: 2, label: "韬定律", startFrame: 60 }, { src: staticFile("images/冯诺依曼突破论/scene_1_2_img3.png"), enterEffect: "breathe", textIndex: 4, label: "冯·诺依曼架构", startFrame: 90 }]} />
            </Sequence>
            <Sequence from={382} durationInFrames={50}>
                <BWTextFocus content={[{"text": "先别急着沸腾。", "startFrame": 0, "durationFrames": 50}]} totalDurationFrames={50} coreSentence={[{"text": "先别急着沸腾。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
