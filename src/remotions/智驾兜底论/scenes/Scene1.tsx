import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 质疑
const SCENE_DURATION = 57 + 60 + 162 + 75 + 72 + 147;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={57}>
                <BWTextFocus content={[{"text": "华为智驾兜底了！", "startFrame": 0, "durationFrames": 57}]} totalDurationFrames={57} coreSentence={[{"text": "华为智驾兜底了！", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "兜底了", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={57} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "这几天真是铺天盖地的营销号。", "startFrame": 0, "durationFrames": 60}]} totalDurationFrames={60} imageSrc={staticFile("images/智驾兜底论/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={117} durationInFrames={162}>
                <BWQuoteCitation content={[{"text": "看过的智慧人群纷纷夸赞。", "startFrame": 0, "durationFrames": 62}, {"text": "华为真有担当。", "startFrame": 61, "durationFrames": 56}, {"text": "智驾终于安全了。", "startFrame": 116, "durationFrames": 45}]} totalDurationFrames={162} quoteDisplayText={"华为真有担当。智驾终于安全了。"} quoteSource={"网络热议"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={279} durationInFrames={75}>
                <BWCognitiveShift content={[{"text": "我知道你很激动，", "startFrame": 0, "durationFrames": 35}, {"text": "但是你先别激动。", "startFrame": 34, "durationFrames": 40}]} totalDurationFrames={75} notText={"你很激动"} butText={"先别激动"} butSrc={staticFile("images/智驾兜底论/scene_1_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={354} durationInFrames={72}>
                <BWBeatSequence content={[{"text": "官方公告里，", "startFrame": 0, "durationFrames": 30}, {"text": "根本没有“兜底”这两个字。", "startFrame": 29, "durationFrames": 43}]} totalDurationFrames={72} stages={[{ imageSrc: staticFile("images/智驾兜底论/scene_1_5_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/智驾兜底论/scene_1_5_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={426} durationInFrames={147}>
                <BWCauseChain content={[{"text": "按这些哄蒙系营销号一贯的作风，", "startFrame": 0, "durationFrames": 71}, {"text": "我们必须保持怀疑态度。", "startFrame": 70, "durationFrames": 45}, {"text": "真的是兜底吗？", "startFrame": 115, "durationFrames": 32}]} totalDurationFrames={147} layout={"horizontal"} nodes={[{ label: "营销号作风", imageSrc: staticFile("images/智驾兜底论/scene_1_6_img0.png"), showFrom: 0, enterEffect: "slideBottom" }, { label: "保持怀疑", imageSrc: staticFile("images/智驾兜底论/scene_1_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "真是兜底？", imageSrc: staticFile("images/智驾兜底论/scene_1_6_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾兜底论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
