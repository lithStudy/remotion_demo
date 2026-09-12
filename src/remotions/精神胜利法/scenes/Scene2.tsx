import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWConceptCard, BWDosAndDonts, BWMagnifyingGlass } from "../../../components";

// 认知失调怎么来
const SCENE_DURATION = 120 + 334 + 58 + 83 + 163 + 111;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWConceptCard content={[{"text": "这背后，", "startFrame": 0, "durationFrames": 22}, {"text": "是一种很常见的心理机制：", "startFrame": 21, "durationFrames": 58}, {"text": "认知失调。", "startFrame": 79, "durationFrames": 41}]} totalDurationFrames={120} imageSrc={staticFile("images/精神胜利法/scene_2_1.png")} conceptName={"认知失调"} anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={334}>
                <BWDosAndDonts content={[{"text": "当我们的心理预期：“我们应该强大”，", "startFrame": 0, "durationFrames": 74}, {"text": "撞上真正的现实：“我们确实有差距”，", "startFrame": 73, "durationFrames": 90}, {"text": "两种认知互相打架", "startFrame": 162, "durationFrames": 41}, {"text": "人的自我价值就会受到威胁。", "startFrame": 202, "durationFrames": 63}, {"text": "这种不适会让大脑急着消除它。", "startFrame": 265, "durationFrames": 68}]} totalDurationFrames={334} left={{label: "❌ 应该强大", src: staticFile("images/精神胜利法/scene_2_2_left.png"), showFrom: 0 }} right={{label: "⚠️ 确有差距", src: staticFile("images/精神胜利法/scene_2_2_right.png"), showFrom: 1 }} anchors={[{"text": "自我价值受到威胁", "showFrom": 3, "color": "#EF4444", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={454} durationInFrames={58}>
                <BWCauseChain content={[{"text": "承认现实，", "startFrame": 0, "durationFrames": 30}, {"text": "太伤自尊。", "startFrame": 29, "durationFrames": 29}]} totalDurationFrames={58} layout={"horizontal"} nodes={[{ label: "承认现实", imageSrc: staticFile("images/精神胜利法/scene_2_3_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "伤自尊", imageSrc: staticFile("images/精神胜利法/scene_2_3_img1.png"), showFrom: 1, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={512} durationInFrames={83}>
                <BWCauseChain content={[{"text": "改变现实，", "startFrame": 0, "durationFrames": 28}, {"text": "又太慢、太难。", "startFrame": 27, "durationFrames": 56}]} totalDurationFrames={83} layout={"horizontal"} nodes={[{ label: "改变现实", imageSrc: staticFile("images/精神胜利法/scene_2_4_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "太慢太难", imageSrc: staticFile("images/精神胜利法/scene_2_4_img1.png"), showFrom: 1, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={595} durationInFrames={163}>
                <BWCognitiveShift content={[{"text": "于是，", "startFrame": 0, "durationFrames": 27}, {"text": "大脑会选择一条更轻松的路：", "startFrame": 26, "durationFrames": 58}, {"text": "不改变事实，", "startFrame": 84, "durationFrames": 30}, {"text": "只改变对事实的解释。", "startFrame": 113, "durationFrames": 50}]} totalDurationFrames={163} notText={"改变事实"} butText={"改变解释"} butSrc={staticFile("images/精神胜利法/scene_2_5.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={758} durationInFrames={111}>
                <BWMagnifyingGlass content={[{"text": "借祖先的荣光，", "startFrame": 0, "durationFrames": 36}, {"text": "就是一种给自己加分的最简单的方式。", "startFrame": 36, "durationFrames": 75}]} totalDurationFrames={111} anchors={[{"text": "给自己加分", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/精神胜利法/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
