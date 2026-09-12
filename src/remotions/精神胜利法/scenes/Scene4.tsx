import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWPanelGrid, BWTextFocus } from "../../../components";

// 文化自信被借壳
const SCENE_DURATION = 69 + 64 + 59 + 105 + 230 + 183 + 136;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={69}>
                <BWCauseChain content={[{"text": "自己的成就不够，", "startFrame": 0, "durationFrames": 36}, {"text": "就往前翻。", "startFrame": 36, "durationFrames": 33}]} totalDurationFrames={69} layout={"horizontal"} nodes={[{ label: "成就不够", imageSrc: staticFile("images/精神胜利法/scene_4_1_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "往前翻", imageSrc: staticFile("images/精神胜利法/scene_4_1_img1.png"), showFrom: 1, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={69} durationInFrames={64}>
                <BWCauseChain content={[{"text": "别人的成就太多，", "startFrame": 0, "durationFrames": 35}, {"text": "就往后删。", "startFrame": 34, "durationFrames": 29}]} totalDurationFrames={64} layout={"horizontal"} nodes={[{ label: "成就太多", imageSrc: staticFile("images/精神胜利法/scene_4_2_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { label: "往后删", imageSrc: staticFile("images/精神胜利法/scene_4_2_img1.png"), showFrom: 1, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={133} durationInFrames={59}>
                <BWTextFocus content={[{"text": "这两种人，", "startFrame": 0, "durationFrames": 24}, {"text": "都是鲁迅笔下的阿Q。", "startFrame": 24, "durationFrames": 35}]} totalDurationFrames={59} coreSentence={[{"text": "这两种人，", "showFrom": 0}, {"text": "都是鲁迅笔下的阿Q。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "阿Q", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={192} durationInFrames={105}>
                <BWTextFocus content={[{"text": "总能找到赢的心理安慰，", "startFrame": 0, "durationFrames": 54}, {"text": "此所谓输有输的赢法。", "startFrame": 53, "durationFrames": 52}]} totalDurationFrames={105} coreSentence={[{"text": "总能找到赢的心理安慰，", "showFrom": 0}, {"text": "此所谓输有输的赢法。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "输有输的赢法", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={297} durationInFrames={230}>
                <BWBeatSequence content={[{"text": "这套精神胜利法，", "startFrame": 0, "durationFrames": 40}, {"text": "如果这只是让人在网上高兴几分钟，", "startFrame": 39, "durationFrames": 66}, {"text": "也就罢了。", "startFrame": 104, "durationFrames": 24}, {"text": "真正危险的是，", "startFrame": 127, "durationFrames": 36}, {"text": "有些人会忘记差距还在。", "startFrame": 163, "durationFrames": 66}]} totalDurationFrames={230} stages={[{ imageSrc: staticFile("images/精神胜利法/scene_4_8_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 1 }, { imageSrc: staticFile("images/精神胜利法/scene_4_8_img1.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={527} durationInFrames={183}>
                <BWPanelGrid content={[{"text": "差距不再是差距，", "startFrame": 0, "durationFrames": 42}, {"text": "只是别人抢走了我们的功劳。", "startFrame": 41, "durationFrames": 55}, {"text": "落后也不再是落后，", "startFrame": 95, "durationFrames": 39}, {"text": "只是历史被西方改写。", "startFrame": 133, "durationFrames": 50}]} totalDurationFrames={183} panels={[{ src: staticFile("images/精神胜利法/scene_4_9_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/精神胜利法/scene_4_9_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/精神胜利法/scene_4_9_img2.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/精神胜利法/scene_4_9_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={710} durationInFrames={136}>
                <BWTextFocus content={[{"text": "到最后，", "startFrame": 0, "durationFrames": 19}, {"text": "我们失去的不只是对历史的判断。", "startFrame": 18, "durationFrames": 61}, {"text": "还有改造现实的能力。", "startFrame": 79, "durationFrames": 57}]} totalDurationFrames={136} coreSentence={[{"text": "我们失去的不只是对历史的判断。", "showFrom": 1}, {"text": "还有改造现实的能力。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "改造现实", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/精神胜利法/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
