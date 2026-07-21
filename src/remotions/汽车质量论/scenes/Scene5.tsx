import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 举证：拆车用料透视镜
const SCENE_DURATION = 122 + 60 + 162 + 70 + 196;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={122}>
                <BWConceptCard content={[{"text": "直播拆车就更狠了。", "startFrame": 0, "durationFrames": 51}, {"text": "小米SU7，", "startFrame": 50, "durationFrames": 30}, {"text": "欢迎任何人拆。", "startFrame": 79, "durationFrames": 42}]} totalDurationFrames={122} imageSrc={staticFile("images/汽车质量论/scene_5_1.png")} conceptName={"直播拆车"} anchors={[]} />
            </Sequence>
            <Sequence from={122} durationInFrames={60}>
                <BWSplitCompare content={[{"text": "官方拆，", "startFrame": 0, "durationFrames": 26}, {"text": "个人博主拆，", "startFrame": 25, "durationFrames": 35}]} totalDurationFrames={60} leftSrc={staticFile("images/汽车质量论/scene_5_2_left.png")} rightSrc={staticFile("images/汽车质量论/scene_5_2_right.png")} leftLabel={"官方拆"} rightLabel={"博主拆"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={182} durationInFrames={162}>
                <BWPanelGrid content={[{"text": "轮毂电机、", "startFrame": 0, "durationFrames": 30}, {"text": "CTC电池、", "startFrame": 29, "durationFrames": 32}, {"text": "防撞梁厚度、", "startFrame": 61, "durationFrames": 35}, {"text": "细节用料。", "startFrame": 95, "durationFrames": 24}, {"text": "件件摆上台面。", "startFrame": 119, "durationFrames": 42}]} totalDurationFrames={162} panels={[{ src: staticFile("images/汽车质量论/scene_5_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/汽车质量论/scene_5_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/汽车质量论/scene_5_3_img2.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/汽车质量论/scene_5_3_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={344} durationInFrames={70}>
                <BWTextFocus content={[{"text": "经得起拆，", "startFrame": 0, "durationFrames": 30}, {"text": "才敢让人拆。", "startFrame": 29, "durationFrames": 41}]} totalDurationFrames={70} coreSentence={[{"text": "经得起拆，", "showFrom": 0}, {"text": "才敢让人拆。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "经得起拆", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={414} durationInFrames={196}>
                <BWSplitCompare content={[{"text": "界车呢？", "startFrame": 0, "durationFrames": 22}, {"text": "官方不给拆，", "startFrame": 21, "durationFrames": 33}, {"text": "博主想拆？", "startFrame": 54, "durationFrames": 31}, {"text": "不允许。", "startFrame": 85, "durationFrames": 31}, {"text": "为什么？", "startFrame": 115, "durationFrames": 27}, {"text": "咱也不敢说，", "startFrame": 141, "durationFrames": 27}, {"text": "咱也不敢问。", "startFrame": 168, "durationFrames": 27}]} totalDurationFrames={196} leftSrc={staticFile("images/汽车质量论/scene_5_5_left.png")} rightSrc={staticFile("images/汽车质量论/scene_5_5_right.png")} leftLabel={"官方不直播"} rightLabel={"博主不允许"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/汽车质量论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
