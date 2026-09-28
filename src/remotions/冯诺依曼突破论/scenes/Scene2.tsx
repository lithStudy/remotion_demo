import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard } from "../../../components";

// 冯诺依曼核心
const SCENE_DURATION = 115 + 270;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={115}>
                <BWConceptCard content={[{"text": "什么叫冯·诺依曼架构？", "startFrame": 0, "durationFrames": 51}, {"text": "它的核心，", "startFrame": 50, "durationFrames": 26}, {"text": "是存储程序。", "startFrame": 75, "durationFrames": 40}]} totalDurationFrames={115} imageSrc={staticFile("images/冯诺依曼突破论/scene_2_1.png")} conceptName={"存储程序"} />
            </Sequence>
            <Sequence from={115} durationInFrames={270}>
                <BWCauseChain content={[{"text": "程序和数据，都放进存储器。", "startFrame": 0, "durationFrames": 69}, {"text": "处理器读取指令。", "startFrame": 68, "durationFrames": 51}, {"text": "再按照指令处理数据。", "startFrame": 118, "durationFrames": 53}, {"text": "凡是遵循这种处理逻辑的，都是冯诺依曼体制。", "startFrame": 171, "durationFrames": 99}]} totalDurationFrames={270} layout={"horizontal"} nodes={[{ label: "存储程序", imageSrc: staticFile("images/冯诺依曼突破论/scene_2_2_img0.png"), showFrom: 0 }, { label: "读取指令", imageSrc: staticFile("images/冯诺依曼突破论/scene_2_2_img1.png"), showFrom: 1 }, { label: "执行处理", imageSrc: staticFile("images/冯诺依曼突破论/scene_2_2_img2.png"), showFrom: 2 }]} anchors={[{"text": "冯诺依曼体制", "showFrom": 3, "color": "#000000", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
