import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWPanelGrid } from "../../../components";

// 名在华为锅在车企
const SCENE_DURATION = 45 + 231 + 149 + 79 + 114;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={45}>
                <BWConceptCard content={[{"text": "再看制造质量。", "startFrame": 0, "durationFrames": 45}]} totalDurationFrames={45} imageSrc={staticFile("images/华为造车论/scene_4_1.png")} conceptName={"制造质量"} anchors={[]} />
            </Sequence>
            <Sequence from={45} durationInFrames={231}>
                <BWPanelGrid content={[{"text": "冲压、焊接、", "startFrame": 0, "durationFrames": 35}, {"text": "涂装、总装，", "startFrame": 34, "durationFrames": 30}, {"text": "装配一致性、", "startFrame": 64, "durationFrames": 31}, {"text": "零件批次和长期耐久，", "startFrame": 94, "durationFrames": 58}, {"text": "都是落在合作车企的工厂和供应链。", "startFrame": 152, "durationFrames": 78}]} totalDurationFrames={231} panels={[{ src: staticFile("images/华为造车论/scene_4_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为造车论/scene_4_2_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { src: staticFile("images/华为造车论/scene_4_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为造车论/scene_4_2_img3.png"), showFrom: 3, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={276} durationInFrames={149}>
                <BWCognitiveShift content={[{"text": "车辆合格证上的生产者，", "startFrame": 0, "durationFrames": 51}, {"text": "并不是华为，", "startFrame": 50, "durationFrames": 28}, {"text": "而是赛力斯、", "startFrame": 77, "durationFrames": 29}, {"text": "奇瑞、", "startFrame": 105, "durationFrames": 14}, {"text": "北汽等车企。", "startFrame": 118, "durationFrames": 30}]} totalDurationFrames={149} notText={"华为"} butText={"赛力斯、奇瑞、北汽等车企"} butSrc={staticFile("images/华为造车论/scene_4_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={425} durationInFrames={79}>
                <BWCauseChain content={[{"text": "真出现缺陷，", "startFrame": 0, "durationFrames": 31}, {"text": "负责召回的也是它们。", "startFrame": 30, "durationFrames": 48}]} totalDurationFrames={79} layout={"horizontal"} nodes={[{ label: "缺陷出现", imageSrc: staticFile("images/华为造车论/scene_4_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "召回启动", imageSrc: staticFile("images/华为造车论/scene_4_4_img1.png"), showFrom: 1, enterEffect: "slideLeft" }]} anchors={[{"text": "车企负责", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={504} durationInFrames={114}>
                <BWDosAndDonts content={[{"text": "发布台上讲的是华为，", "startFrame": 0, "durationFrames": 55}, {"text": "合格证上写的却是车企。", "startFrame": 54, "durationFrames": 59}]} totalDurationFrames={114} left={{label: "❌ 发布台话术", src: staticFile("images/华为造车论/scene_4_5_left.png"), showFrom: 0 }} right={{label: "✅ 合格证主体", src: staticFile("images/华为造车论/scene_4_5_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为造车论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
