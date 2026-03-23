import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引出现象：网络环境令人血压升高
const SCENE_DURATION = 154 + 113 + 129 + 144 + 231 + 211 + 144;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={154}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_1.png")} enterEffect="breathe" content={[{"text": "最近你有没有这种感觉：", "startFrame": 0, "durationFrames": 57, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "上网刷新闻、看评论区，", "startFrame": 56, "durationFrames": 57, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "血压能瞬间飙升？", "startFrame": 112, "durationFrames": 42, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={154} />
            </Sequence>
            <Sequence from={154} durationInFrames={113}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_2.png")} enterEffect="breathe" content={[{"text": "明明一个挺简单的事儿，", "startFrame": 0, "durationFrames": 57, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "评论区却吵成了一锅粥。", "startFrame": 56, "durationFrames": 57, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={113} />
            </Sequence>
            <Sequence from={267} durationInFrames={129}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_3.png")} enterEffect="breathe" content={[{"text": "你拿证据跟他讲道理，", "startFrame": 0, "durationFrames": 52, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "他反手甩给你一个地摊文学链接；", "startFrame": 51, "durationFrames": 77, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={129} />
            </Sequence>
            <Sequence from={396} durationInFrames={144}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_4.png")} enterEffect="breathe" content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 42, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "结果发现对方只看他想看的，", "startFrame": 41, "durationFrames": 67, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "只听他想听的。", "startFrame": 107, "durationFrames": 36, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={144} />
            </Sequence>
            <Sequence from={540} durationInFrames={231}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_5.png")} enterEffect="breathe" content={[{"text": "最气人的是，", "startFrame": 0, "durationFrames": 31, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "你发现不管你怎么自证清白，", "startFrame": 30, "durationFrames": 67, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "对方总能从你的话里抠出几个字来", "startFrame": 97, "durationFrames": 83, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "证明你“屁股歪了”。", "startFrame": 179, "durationFrames": 52, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={231} />
            </Sequence>
            <Sequence from={771} durationInFrames={211}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_6.png")} enterEffect="breathe" content={[{"text": "这种“鸡同讲讲、秀才遇上兵”的无力感，", "startFrame": 0, "durationFrames": 98, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "是不是让你觉得现在的互联网环境简直没法待了？", "startFrame": 97, "durationFrames": 113, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={211} />
            </Sequence>
            <Sequence from={982} durationInFrames={144}>
                <BWCenterFocus imageSrc={staticFile("images/test/1_7.png")} enterEffect="breathe" content={[{"text": "大家好像不再是为了真相在讨论，", "startFrame": 0, "durationFrames": 77, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "而是在为了“输赢”在搏命。", "startFrame": 76, "durationFrames": 67, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={144} />
            </Sequence>
            <Audio src={staticFile("/audio/test/1/1.mp3")} />
        </AbsoluteFill>
    );
};
