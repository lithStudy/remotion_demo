import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWQuoteCitation } from "../../../components";

// 反转：廉价人力真相
const SCENE_DURATION = 60 + 150 + 61 + 120 + 120;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "很多人张口就来，", "startFrame": 0, "durationFrames": 30}, {"text": "自豪得不行。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={60} durationInFrames={150}>
                <BWQuoteCitation content={[{"text": "“这一切，", "startFrame": 0, "durationFrames": 30}, {"text": "都因为咱们基建牛逼！", "startFrame": 30, "durationFrames": 30}, {"text": "高铁、", "startFrame": 60, "durationFrames": 30}, {"text": "5G，", "startFrame": 90, "durationFrames": 30}, {"text": "世界第一！”", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} quoteSource={"网友锐评"} quoteDisplayText={"“这一切，都因为咱们基建牛逼！高铁、5G，世界第一！”"} anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "对了一半。", "startFrame": 0, "durationFrames": 30}, {"text": "基建确实把物流成本砸下来了。", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={271} durationInFrames={120}>
                <BWBeatSequence content={[{"text": "可算法再牛，", "startFrame": 0, "durationFrames": 30}, {"text": "也爬不上六楼。", "startFrame": 30, "durationFrames": 30}, {"text": "最后三公里，", "startFrame": 60, "durationFrames": 30}, {"text": "永远靠两条人腿在跑。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={391} durationInFrames={120}>
                <BWCognitiveShift content={[{"text": "真正撑起这极致便利的，", "startFrame": 0, "durationFrames": 30}, {"text": "不是钢筋水泥，", "startFrame": 30, "durationFrames": 30}, {"text": "而是极其廉价的人，", "startFrame": 60, "durationFrames": 30}, {"text": "和不要命的汗水。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} notText={"钢筋水泥"} butText={"廉价的人和不要命的汗水"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
