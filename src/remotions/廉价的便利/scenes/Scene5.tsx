import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWMagnifyingGlass, BWPanelGrid, BWQuoteCitation, BWTextFocus, BWTimeline } from "../../../components";

// 反思：低端产业陷阱
const SCENE_DURATION = 120 + 30 + 157 + 91 + 70 + 63 + 241;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWQuoteCitation content={[{"text": "这时候肯定有人跳出来说，", "startFrame": 0, "durationFrames": 30}, {"text": "\n“国家底子薄，", "startFrame": 30, "durationFrames": 30}, {"text": "还在升级，", "startFrame": 60, "durationFrames": 30}, {"text": "先苦一苦嘛。”", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} quoteSource={"跳出来的人"} quoteDisplayText={"国家底子薄，还在升级，先苦一苦嘛。"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={30}>
                <BWTextFocus content={[{"text": "父辈已经苦过了。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["父辈已经苦过了。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={150} durationInFrames={157}>
                <BWTimeline content={[{"text": "三四十年前，", "startFrame": 0, "durationFrames": 30}, {"text": "一穷二白，", "startFrame": 30, "durationFrames": 30}, {"text": "靠便宜劳动力给全世界代工，", "startFrame": 60, "durationFrames": 30}, {"text": "那是无奈求生。", "startFrame": 90, "durationFrames": 30}, {"text": "\n今天我们已经是世界第二大经济体了。", "startFrame": 120, "durationFrames": 37}]} totalDurationFrames={157} images={[{ src: staticFile("images/template/scene1_1.png"), enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("images/template/scene1_1.png"), enterEffect: "fadeIn", textIndex: 1 }, { src: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn", textIndex: 2 }, { src: staticFile("images/template/scene1_1.png"), enterEffect: "fadeIn", textIndex: 3 }, { src: staticFile("images/template/scene1_1.png"), enterEffect: "slideLeft", textIndex: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={307} durationInFrames={91}>
                <BWMagnifyingGlass content={[{"text": "如果几十年发展下来，", "startFrame": 0, "durationFrames": 30}, {"text": "\n我们最骄傲的核心竞争力，", "startFrame": 30, "durationFrames": 30}, {"text": "\n居然还是“中国人实在太便宜”", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} anchors={[{"text": "中国人实在太便宜", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={398} durationInFrames={70}>
                <BWBeatSequence content={[{"text": "那就不是苦一苦的问题了。", "startFrame": 0, "durationFrames": 30}, {"text": "\n这是我们还深深卡在低端产业链的铁证。", "startFrame": 30, "durationFrames": 40}]} totalDurationFrames={70} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={468} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "一个国家真正发达的标志，", "startFrame": 0, "durationFrames": 30}, {"text": "\n从来不是你能多便宜地使唤别人。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={531} durationInFrames={241}>
                <BWPanelGrid content={[{"text": "而是，", "startFrame": 0, "durationFrames": 30}, {"text": "\n一个普通的送货员、", "startFrame": 30, "durationFrames": 30}, {"text": "\n一个电工、", "startFrame": 60, "durationFrames": 30}, {"text": "\n一个文员，", "startFrame": 90, "durationFrames": 30}, {"text": "\n付出每天8小时的正常劳动，", "startFrame": 120, "durationFrames": 30}, {"text": "\n就能换来体面的收入，", "startFrame": 150, "durationFrames": 30}, {"text": "\n养得起家，", "startFrame": 180, "durationFrames": 30}, {"text": "\n拥有作为人的基本尊严和双休。", "startFrame": 210, "durationFrames": 31}]} totalDurationFrames={241} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 7, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
