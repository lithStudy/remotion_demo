import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPanelGrid, BWQuoteCitation } from "../../../components";

// 反思
const SCENE_DURATION = 82 + 170 + 122 + 164 + 413;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={82}>
                <BWCognitiveShift content={[{"text": "但是也不能否认，", "startFrame": 0, "durationFrames": 38}, {"text": "小米SU7有几个特点。", "startFrame": 37, "durationFrames": 45}]} totalDurationFrames={82} notText={"否认优点"} butText={"有几个特点"} butSrc={staticFile("images/小米事故论/scene_3_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={82} durationInFrames={170}>
                <BWPanelGrid content={[{"text": "第一，", "startFrame": 0, "durationFrames": 15}, {"text": "车主年轻。", "startFrame": 14, "durationFrames": 31}, {"text": "第二，", "startFrame": 45, "durationFrames": 17}, {"text": "性能强。", "startFrame": 61, "durationFrames": 32}, {"text": "第三，", "startFrame": 93, "durationFrames": 19}, {"text": "交付初期新手多。", "startFrame": 111, "durationFrames": 58}]} totalDurationFrames={170} panels={[{ src: staticFile("images/小米事故论/scene_3_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/小米事故论/scene_3_2_img1.png"), showFrom: 2 }, { src: staticFile("images/小米事故论/scene_3_2_img2.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={252} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "这几个因素叠在一起，", "startFrame": 0, "durationFrames": 48}, {"text": "确实是相对更容易出现事故的情况。", "startFrame": 48, "durationFrames": 74}]} totalDurationFrames={122} imageSrc={staticFile("images/小米事故论/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={374} durationInFrames={164}>
                <BWCognitiveShift content={[{"text": "但这不是小米车本身的问题，", "startFrame": 0, "durationFrames": 56}, {"text": "车只是工具，", "startFrame": 55, "durationFrames": 39}, {"text": "它如何被使用是工具无法决定的。", "startFrame": 93, "durationFrames": 71}]} totalDurationFrames={164} notText={"车本身的问题"} butText={"只是工具"} butSrc={staticFile("images/小米事故论/scene_3_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={538} durationInFrames={413}>
                <BWQuoteCitation content={[{"text": "J.D. Power，", "startFrame": 0, "durationFrames": 27}, {"text": "著名的第三方消费者洞察机构。", "startFrame": 26, "durationFrames": 77}, {"text": "在它的2025年研究报告中，", "startFrame": 102, "durationFrames": 63}, {"text": "小米SU7拿到过，", "startFrame": 164, "durationFrames": 43}, {"text": "大型纯电动细分市场，", "startFrame": 207, "durationFrames": 57}, {"text": "新车质量排名最高。", "startFrame": 264, "durationFrames": 49}, {"text": "这也侧面印证了小米车的质量并不存在问题。", "startFrame": 312, "durationFrames": 101}]} totalDurationFrames={413} quoteSource={"J.D. Power 2025年研究报告"} quoteDisplayText={"小米SU7，大型纯电动细分市场，新车质量排名最高。"} showFrom={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米事故论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
