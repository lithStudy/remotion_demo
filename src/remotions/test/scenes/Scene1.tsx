import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble } from "../../../components";

// 痛点场景共鸣
const SCENE_DURATION = 66 + 262 + 152;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={66}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "最近你有没有这种感觉：上网刷新闻、看评论区，血压能瞬间飙升？", "startFrame": 0, "durationFrames": 66, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={66} />
            </Sequence>
            <Sequence from={66} durationInFrames={262}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "明明一个挺简单的事儿，评论区却吵成了一锅粥。你拿证据跟他讲道理，他反手甩给你一个地摊文学链接；你试图保持客观，结果发现对方只看他想看的，只听他想听的。最气人的是，你发现不管你怎么自证清白，对方总能从你的话里抠出几个字来证明你“屁股歪了”。", "startFrame": 0, "durationFrames": 262, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={262} />
            </Sequence>
            <Sequence from={328} durationInFrames={152}>
                <BWChatBubble imageSrc={staticFile("images/template/scene1_1.png")} content={[{"text": "这种“鸡同讲讲、秀才遇上兵”的无力感，是不是让你觉得现在的互联网环境简直没法待了？大家好像不再是为了真相在讨论，而是在为了“输赢”在搏命。", "startFrame": 0, "durationFrames": 152, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={152} />
            </Sequence>

        </AbsoluteFill>
    );
};
