import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift } from "../../../components";

// 反转：最后三公里的人腿代价
const SCENE_DURATION = 245 + 186;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={245}>
                <BWBeatSequence content={[{"text": "对了一半。", "startFrame": 0, "durationFrames": 34}, {"text": "基建确实把物流成本砸下来了。", "startFrame": 33, "durationFrames": 74}, {"text": "可算法再牛，", "startFrame": 106, "durationFrames": 32}, {"text": "也爬不上六楼。", "startFrame": 138, "durationFrames": 30}, {"text": "最后三公里，", "startFrame": 167, "durationFrames": 30}, {"text": "永远靠两条人腿在跑。", "startFrame": 197, "durationFrames": 47}]} totalDurationFrames={245} stages={[{ imageSrc: staticFile("images/廉价的便利/scene_2_1_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/廉价的便利/scene_2_1_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/廉价的便利/scene_2_1_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={245} durationInFrames={186}>
                <BWCognitiveShift content={[{"text": "真正撑起这极致便利的，", "startFrame": 0, "durationFrames": 58}, {"text": "不是钢筋水泥，", "startFrame": 57, "durationFrames": 39}, {"text": "而是极其廉价的人力，", "startFrame": 96, "durationFrames": 48}, {"text": "和不要命的汗水。", "startFrame": 144, "durationFrames": 42}]} totalDurationFrames={186} notText={"钢筋水泥"} butText={"廉价人力与拼命汗水"} butSrc={staticFile("images/廉价的便利/scene_2_2.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
