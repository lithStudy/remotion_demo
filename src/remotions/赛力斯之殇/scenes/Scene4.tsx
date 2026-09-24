import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWPanelGrid, BWSplitCompare, BWTextFocus, BWTimeline } from "../../../components";

// 剖析：五界稀释
const SCENE_DURATION = 46 + 120 + 117 + 291 + 86 + 194 + 287 + 121 + 249;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={46}>
                <BWTextFocus content={[{"text": "更憋屈的还在后面。", "startFrame": 0, "durationFrames": 46}]} totalDurationFrames={46} coreSentence={[{"text": "更憋屈的还在后面。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={46} durationInFrames={120}>
                <BWCauseChain content={[{"text": "问界帮鸿蒙智行把招牌打响之后，", "startFrame": 0, "durationFrames": 77}, {"text": "华为开始铺五界。", "startFrame": 76, "durationFrames": 44}]} totalDurationFrames={120} layout={"horizontal"} nodes={[{ label: "问界打响招牌", imageSrc: staticFile("images/赛力斯之殇/scene_4_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "华为铺五界", imageSrc: staticFile("images/赛力斯之殇/scene_4_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={166} durationInFrames={117}>
                <BWPanelGrid content={[{"text": "智界、", "startFrame": 0, "durationFrames": 19}, {"text": "享界、", "startFrame": 18, "durationFrames": 24}, {"text": "尊界、", "startFrame": 42, "durationFrames": 20}, {"text": "尚界，", "startFrame": 62, "durationFrames": 20}, {"text": "一起上桌。", "startFrame": 81, "durationFrames": 35}]} totalDurationFrames={117} panels={[{ src: staticFile("images/赛力斯之殇/scene_4_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/赛力斯之殇/scene_4_3_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/赛力斯之殇/scene_4_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/赛力斯之殇/scene_4_3_img3.png"), showFrom: 3, enterEffect: "slideBottom" }, { src: staticFile("images/赛力斯之殇/scene_4_3_img4.png"), showFrom: 4, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={283} durationInFrames={291}>
                <BWTimeline content={[{"text": "问界销量占比，", "startFrame": 0, "durationFrames": 40}, {"text": "从2024年大约87%，", "startFrame": 39, "durationFrames": 79}, {"text": "掉到2025年70%出头，", "startFrame": 117, "durationFrames": 80}, {"text": "再到2026年上半年大约67%。", "startFrame": 197, "durationFrames": 93}]} totalDurationFrames={291} images={[{ src: staticFile("images/赛力斯之殇/scene_4_4_img0.png"), enterEffect: "fadeIn", textIndex: 0, label: "占比" }, { src: staticFile("images/赛力斯之殇/scene_4_4_img1.png"), enterEffect: "zoomIn", textIndex: 1, label: "2024" }, { src: staticFile("images/赛力斯之殇/scene_4_4_img2.png"), enterEffect: "slideLeft", textIndex: 2, label: "2025" }, { src: staticFile("images/赛力斯之殇/scene_4_4_img3.png"), enterEffect: "slideLeft", textIndex: 3, label: "2026H1" }]} />
            </Sequence>
            <Sequence from={574} durationInFrames={86}>
                <BWSplitCompare content={[{"text": "招牌是你打的。", "startFrame": 0, "durationFrames": 45}, {"text": "流量开始分给别人。", "startFrame": 44, "durationFrames": 41}]} totalDurationFrames={86} leftSrc={staticFile("images/赛力斯之殇/scene_4_5_left.png")} rightSrc={staticFile("images/赛力斯之殇/scene_4_5_right.png")} leftLabel={"招牌你打"} rightLabel={"流量被分"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={660} durationInFrames={194}>
                <BWPanelGrid content={[{"text": "尊界去冲百万豪车。", "startFrame": 0, "durationFrames": 48}, {"text": "智界去抢年轻科技。", "startFrame": 48, "durationFrames": 53}, {"text": "享界去打行政豪华。", "startFrame": 100, "durationFrames": 47}, {"text": "尚界去卷大众市场。", "startFrame": 147, "durationFrames": 47}]} totalDurationFrames={194} panels={[{ src: staticFile("images/赛力斯之殇/scene_4_6_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/赛力斯之殇/scene_4_6_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/赛力斯之殇/scene_4_6_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/赛力斯之殇/scene_4_6_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={854} durationInFrames={287}>
                <BWBeatSequence content={[{"text": "赛力斯呢？面对被稀释的市场，", "startFrame": 0, "durationFrames": 75}, {"text": "还一样要交高额渠道费。", "startFrame": 74, "durationFrames": 52}, {"text": "还在被消费者叫「华为车」。", "startFrame": 125, "durationFrames": 63}, {"text": "一边利润被抽走。", "startFrame": 187, "durationFrames": 46}, {"text": "一边独特性也被稀释。", "startFrame": 233, "durationFrames": 54}]} totalDurationFrames={287} stages={[{ imageSrc: staticFile("images/赛力斯之殇/scene_4_7_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/赛力斯之殇/scene_4_7_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/赛力斯之殇/scene_4_7_img2.png"), enterEffect: "slideLeft", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/赛力斯之殇/scene_4_7_img3.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1141} durationInFrames={121}>
                <BWTextFocus content={[{"text": "到最后，", "startFrame": 0, "durationFrames": 18}, {"text": "赛力斯既没有实打实利润，", "startFrame": 17, "durationFrames": 53}, {"text": "又没有了自己的品牌灵魂。", "startFrame": 69, "durationFrames": 51}]} totalDurationFrames={121} coreSentence={[{"text": "到最后，", "showFrom": 0, "endFrom": 0}, {"text": "赛力斯既没有实打实利润，", "showFrom": 1, "endFrom": 1}, {"text": "又没有了自己的品牌灵魂。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "品牌灵魂", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1262} durationInFrames={249}>
                <BWSplitCompare content={[{"text": "做问界之前，", "startFrame": 0, "durationFrames": 31}, {"text": "好歹大家还知道他是东风小康，", "startFrame": 30, "durationFrames": 70}, {"text": "传统面包神车。", "startFrame": 100, "durationFrames": 43}, {"text": "做问界之后，", "startFrame": 143, "durationFrames": 32}, {"text": "大家只知华为，不知小康了。", "startFrame": 175, "durationFrames": 74}]} totalDurationFrames={249} leftSrc={staticFile("images/赛力斯之殇/scene_4_9_left.png")} rightSrc={staticFile("images/赛力斯之殇/scene_4_9_right.png")} leftLabel={"东风小康"} rightLabel={"华为车"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/赛力斯之殇/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
