import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入·豆包仙人
const SCENE_DURATION = 173 + 72 + 88 + 69 + 162 + 102 + 160;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={173}>
                <BWCenterFocus content={[{"text": "你身边一定有这样的人。", "startFrame": 0, "durationFrames": 52}, {"text": "争论到一半，", "startFrame": 51, "durationFrames": 31}, {"text": "他掏出手机一顿操作，", "startFrame": 81, "durationFrames": 47}, {"text": "然后把屏幕递给你。", "startFrame": 128, "durationFrames": 45}]} totalDurationFrames={173} imageSrc={staticFile("images/豆包仙人论/scene_1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={173} durationInFrames={72}>
                <BWQuoteCitation content={[{"text": "你看，豆包都说了，我说的没错吧。", "startFrame": 0, "durationFrames": 72}]} totalDurationFrames={72} quoteDisplayText={"你看，豆包都说了，我说的没错吧。"} quoteSource={"豆包仙人"} anchors={[]} />
            </Sequence>
            <Sequence from={245} durationInFrames={88}>
                <BWTextFocus content={[{"text": "于是争论结束了。", "startFrame": 0, "durationFrames": 39}, {"text": "豆包说的，", "startFrame": 38, "durationFrames": 22}, {"text": "就是答案。", "startFrame": 59, "durationFrames": 28}]} totalDurationFrames={88} coreSentence={[{"text": "于是争论结束了。", "showFrom": 0, "endFrom": 0}, {"text": "豆包说的，就是答案。", "showFrom": 1, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "就是答案", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={333} durationInFrames={69}>
                <BWConceptCard content={[{"text": "这类人，", "startFrame": 0, "durationFrames": 27}, {"text": "我们姑且叫他豆包仙人。", "startFrame": 26, "durationFrames": 43}]} totalDurationFrames={69} imageSrc={staticFile("images/豆包仙人论/scene_1_4.png")} conceptName={"豆包仙人"} anchors={[]} />
            </Sequence>
            <Sequence from={402} durationInFrames={162}>
                <BWCauseChain content={[{"text": "豆包仙人的逻辑很简单：", "startFrame": 0, "durationFrames": 51}, {"text": "我有疑问，", "startFrame": 50, "durationFrames": 27}, {"text": "豆包给我解答；", "startFrame": 76, "durationFrames": 37}, {"text": "豆包支持我，", "startFrame": 112, "durationFrames": 29}, {"text": "我就对了。", "startFrame": 140, "durationFrames": 21}]} totalDurationFrames={162} layout={"horizontal"} nodes={[{ label: "提出疑问", imageSrc: staticFile("images/豆包仙人论/scene_1_5_img0.png"), showFrom: 1 }, { label: "豆包解答", imageSrc: staticFile("images/豆包仙人论/scene_1_5_img1.png"), showFrom: 2 }, { label: "获得支持", imageSrc: staticFile("images/豆包仙人论/scene_1_5_img2.png"), showFrom: 3 }, { label: "结论正确", imageSrc: staticFile("images/豆包仙人论/scene_1_5_img3.png"), showFrom: 4 }]} anchors={[]} />
            </Sequence>
            <Sequence from={564} durationInFrames={102}>
                <BWCognitiveShift content={[{"text": "他不是在用AI查资料，", "startFrame": 0, "durationFrames": 46}, {"text": "他是在用AI给自己盖章。", "startFrame": 45, "durationFrames": 56}]} totalDurationFrames={102} notText={"用AI查资料"} butText={"给自己盖章"} butSrc={staticFile("images/豆包仙人论/scene_1_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={666} durationInFrames={160}>
                <BWMagnifyingGlass content={[{"text": "但他可能从来没想过一个问题：", "startFrame": 0, "durationFrames": 56}, {"text": "豆包给出的，", "startFrame": 55, "durationFrames": 33}, {"text": "是真相，还是你想听的答案？", "startFrame": 88, "durationFrames": 72}]} totalDurationFrames={160} anchors={[{"text": "你想听的答案", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/豆包仙人论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
