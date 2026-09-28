import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWHubRadiate, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 百万处理器协作
const SCENE_DURATION = 63 + 324 + 130 + 315 + 70;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={63}>
                <BWMagnifyingGlass content={[{"text": "华为的Peerium，", "startFrame": 0, "durationFrames": 40}, {"text": "做了什么？", "startFrame": 39, "durationFrames": 23}]} totalDurationFrames={63} anchors={[{"text": "Peerium", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={63} durationInFrames={324}>
                <BWPanelGrid content={[{"text": "嵌套并行。", "startFrame": 0, "durationFrames": 42}, {"text": "统一内存寻址。", "startFrame": 41, "durationFrames": 44}, {"text": "平等互联。", "startFrame": 85, "durationFrames": 38}, {"text": "说人话。", "startFrame": 122, "durationFrames": 29}, {"text": "就是把计算任务分层。", "startFrame": 150, "durationFrames": 55}, {"text": "把分散的内存统一编址。", "startFrame": 205, "durationFrames": 65}, {"text": "再用灵衢高速互联。", "startFrame": 269, "durationFrames": 55}]} totalDurationFrames={324} panels={[{ src: staticFile("images/冯诺依曼突破论/scene_3_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/冯诺依曼突破论/scene_3_2_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/冯诺依曼突破论/scene_3_2_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={387} durationInFrames={130}>
                <BWCognitiveShift content={[{"text": "让百万处理器，", "startFrame": 0, "durationFrames": 40}, {"text": "别各自为战。", "startFrame": 39, "durationFrames": 35}, {"text": "而要像一台机器那样协作。", "startFrame": 74, "durationFrames": 56}]} totalDurationFrames={130} notText={"各自为战"} butText={"如一台机器协作"} butSrc={staticFile("images/冯诺依曼突破论/scene_3_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={517} durationInFrames={315}>
                <BWHubRadiate content={[{"text": "这有没有价值？", "startFrame": 0, "durationFrames": 32}, {"text": "当然有。", "startFrame": 31, "durationFrames": 20}, {"text": "人工智能集群越大。", "startFrame": 51, "durationFrames": 62}, {"text": "通信和同步越容易拖后腿。", "startFrame": 112, "durationFrames": 73}, {"text": "Peerium就是要把路修宽。", "startFrame": 184, "durationFrames": 47}, {"text": "把地址统一。", "startFrame": 231, "durationFrames": 35}, {"text": "把调度重新设计。", "startFrame": 266, "durationFrames": 48}]} totalDurationFrames={315} hub={{ imageSrc: staticFile("images/冯诺依曼突破论/scene_3_4.png"), enterEffect: "zoomIn", showFrom: 0 }} rays={[{ imageSrc: staticFile("images/冯诺依曼突破论/scene_3_4_img0.png"), enterEffect: "zoomIn", showFrom: 4 }, { imageSrc: staticFile("images/冯诺依曼突破论/scene_3_4_img1.png"), enterEffect: "zoomIn", showFrom: 5 }, { imageSrc: staticFile("images/冯诺依曼突破论/scene_3_4_img2.png"), enterEffect: "zoomIn", showFrom: 6 }]} />
            </Sequence>
            <Sequence from={832} durationInFrames={70}>
                <BWTextFocus content={[{"text": "做成了，", "startFrame": 0, "durationFrames": 22}, {"text": "就是重要的工程进步。", "startFrame": 21, "durationFrames": 48}]} totalDurationFrames={70} coreSentence={[{"text": "做成了，", "showFrom": 0}, {"text": "就是重要的工程进步。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "重要的工程进步", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
