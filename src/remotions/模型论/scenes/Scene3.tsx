import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWDosAndDonts, BWMagnifyingGlass, BWTextFocus, BWTimeline } from "../../../components";

// 剖析·真正的大模型
const SCENE_DURATION = 140 + 387 + 124 + 231 + 144 + 482;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={140}>
                <BWTextFocus content={[{"text": "那么哪些是AI呢？", "startFrame": 0, "durationFrames": 46}, {"text": "大语言模型、", "startFrame": 45, "durationFrames": 31}, {"text": "AI大模型、", "startFrame": 76, "durationFrames": 32}, {"text": "还有“大模型”。", "startFrame": 108, "durationFrames": 32}]} totalDurationFrames={140} coreSentence={[{"text": "大语言模型", "showFrom": 1}, {"text": "AI大模型", "showFrom": 2}, {"text": "大模型", "showFrom": 3}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={140} durationInFrames={387}>
                <BWTimeline content={[{"text": "大语言模型，是面向开发者的描述，", "startFrame": 0, "durationFrames": 89}, {"text": "说明他的底层原理是文本预测。", "startFrame": 88, "durationFrames": 76}, {"text": "AI大模型，是面向使用者的描述，", "startFrame": 163, "durationFrames": 79}, {"text": "说明他的智能程度。", "startFrame": 242, "durationFrames": 42}, {"text": "大模型，是对以上两者的简称，", "startFrame": 284, "durationFrames": 70}, {"text": "是习惯用语。", "startFrame": 353, "durationFrames": 33}]} totalDurationFrames={387} images={[{ src: staticFile("images/模型论/scene_3_2_img0.png"), enterEffect: "slideLeft", textIndex: 0, label: "大语言模型" }, { src: staticFile("images/模型论/scene_3_2_img1.png"), enterEffect: "fadeIn", textIndex: 2, label: "AI大模型" }, { src: staticFile("images/模型论/scene_3_2_img2.png"), enterEffect: "slideLeft", textIndex: 4, label: "大模型" }]} anchors={[]} />
            </Sequence>
            <Sequence from={527} durationInFrames={124}>
                <BWMagnifyingGlass content={[{"text": "但不管怎么命名，", "startFrame": 0, "durationFrames": 34}, {"text": "他们都被冠以“大”字，", "startFrame": 33, "durationFrames": 45}, {"text": "这个字非常的重要，", "startFrame": 78, "durationFrames": 45}]} totalDurationFrames={124} anchors={[{"text": "大", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={651} durationInFrames={231}>
                <BWCauseChain content={[{"text": "因为模型之所以智能，", "startFrame": 0, "durationFrames": 47}, {"text": "完全是因为其参数量巨大，", "startFrame": 46, "durationFrames": 67}, {"text": "参数量就像生物的神经元数量，", "startFrame": 113, "durationFrames": 72}, {"text": "决定了智能的上限。", "startFrame": 185, "durationFrames": 45}]} totalDurationFrames={231} layout={"horizontal"} nodes={[{ label: "参数量巨大", imageSrc: staticFile("images/模型论/scene_3_4_img0.png"), showFrom: 1 }, { label: "智能上限", imageSrc: staticFile("images/模型论/scene_3_4_img1.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={882} durationInFrames={144}>
                <BWDosAndDonts content={[{"text": "神经元数量不够你就是一只草履虫，", "startFrame": 0, "durationFrames": 81}, {"text": "神经元数量够了你才是人。", "startFrame": 80, "durationFrames": 63}]} totalDurationFrames={144} left={{label: "❌ 参数量小", src: staticFile("images/模型论/scene_3_5_left.png"), showFrom: 0 }} right={{label: "✅ 参数量大", src: staticFile("images/模型论/scene_3_5_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={1026} durationInFrames={482}>
                <BWCaseBreakdown content={[{"text": "有人会问那“小模型”又是什么呢？", "startFrame": 0, "durationFrames": 72}, {"text": "在AI的语境下，", "startFrame": 71, "durationFrames": 42}, {"text": "小模型依然指的是大语言模型，", "startFrame": 113, "durationFrames": 84}, {"text": "只是参数量相对小一点，", "startFrame": 197, "durationFrames": 56}, {"text": "注意，只是“相对”小，", "startFrame": 252, "durationFrames": 51}, {"text": "也就是人和狗的区别，", "startFrame": 302, "durationFrames": 51}, {"text": "但相对草履虫这种非智能体来说，", "startFrame": 353, "durationFrames": 79}, {"text": "参数量依然巨大。", "startFrame": 431, "durationFrames": 50}]} totalDurationFrames={482} title={"小模型"} imageSrc={staticFile("images/模型论/scene_3_6.png")} phases={[{"phaseLabel": "依然是大语言模型", "showFrom": 2}, {"phaseLabel": "参数量相对一般的模型小", "showFrom": 3}, {"phaseLabel": "参数量依然巨大", "showFrom": 7}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
