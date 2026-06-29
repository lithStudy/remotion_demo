import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWQuoteCitation } from "../../../components";

// 反思
const SCENE_DURATION = 88 + 159 + 122 + 171 + 414;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={88}>
                <BWCognitiveShift content={[{"text": "但是也不能否认，", "startFrame": 0, "durationFrames": 35}, {"text": "小米SU7有几个特点。", "startFrame": 34, "durationFrames": 53}]} totalDurationFrames={88} notText={"否认优点"} butText={"有几个特点"} butSrc={staticFile("images/小米事故论/scene_3_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={88} durationInFrames={159}>
                <BWPanelGrid content={[{"text": "第一，", "startFrame": 0, "durationFrames": 19}, {"text": "车主年轻。", "startFrame": 18, "durationFrames": 29}, {"text": "第二，", "startFrame": 47, "durationFrames": 12}, {"text": "性能强。", "startFrame": 59, "durationFrames": 30}, {"text": "第三，", "startFrame": 88, "durationFrames": 19}, {"text": "交付初期新手多。", "startFrame": 107, "durationFrames": 52}]} totalDurationFrames={159} panels={[{ src: staticFile("images/小米事故论/scene_3_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/小米事故论/scene_3_2_img1.png"), showFrom: 2 }, { src: staticFile("images/小米事故论/scene_3_2_img2.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={247} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "这几个因素叠在一起，", "startFrame": 0, "durationFrames": 47}, {"text": "确实是相对更容易出现事故的情况。", "startFrame": 46, "durationFrames": 75}]} totalDurationFrames={122} imageSrc={staticFile("images/小米事故论/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={369} durationInFrames={171}>
                <BWCognitiveShift content={[{"text": "但这不是小米车本身的问题，", "startFrame": 0, "durationFrames": 59}, {"text": "车只是工具，", "startFrame": 58, "durationFrames": 38}, {"text": "它如何被使用是工具无法决定的。", "startFrame": 96, "durationFrames": 75}]} totalDurationFrames={171} notText={"车本身的问题"} butText={"只是工具"} butSrc={staticFile("images/小米事故论/scene_3_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={540} durationInFrames={414}>
                <BWQuoteCitation content={[{"text": "J.D. Power，", "startFrame": 0, "durationFrames": 29}, {"text": "著名的第三方消费者洞察机构。", "startFrame": 28, "durationFrames": 69}, {"text": "在它的2025年研究报告中，", "startFrame": 97, "durationFrames": 69}, {"text": "小米SU7拿到过，", "startFrame": 165, "durationFrames": 47}, {"text": "大型纯电动细分市场，", "startFrame": 212, "durationFrames": 55}, {"text": "新车质量排名最高。", "startFrame": 267, "durationFrames": 47}, {"text": "这也侧面印证了小米车的质量并不存在问题。", "startFrame": 313, "durationFrames": 101}]} totalDurationFrames={414} quoteSource={"J.D. Power 2025年研究报告"} quoteDisplayText={"小米SU7，大型纯电动细分市场，新车质量排名最高。"} showFrom={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
