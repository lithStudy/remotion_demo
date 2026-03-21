import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble, BWDosAndDonts } from "../../../components";

// 痛点场景共鸣
const SCENE_DURATION = 120 + 210 + 270 + 180 + 120;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "最近你有没有", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "这种感觉：上网", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "刷新闻、看评论区，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "血压能瞬间飙升？", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={120} durationInFrames={210}>
                <BWDosAndDonts leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} dontLabel={"❌ 别这样"} doLabel={"✅ 正确做法"} content={[{"text": "明明一个挺简单的", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "事儿，评论区却", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "吵成了一锅粥。", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "你拿证据跟他", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "讲道理，他反手", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "甩给你一个", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "地摊文学链接；", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={210} />
            </Sequence>
            <Sequence from={330} durationInFrames={270}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "你试图保持客观，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "结果发现对方只看", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "他想看的，只听他", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "想听的。最气人的是，", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "你发现不管你怎么", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "自证清白，对方总能", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "从你的话里抠出", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "几个字来", "startFrame": 210, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "证明你“屁股歪了”。", "startFrame": 240, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={270} />
            </Sequence>
            <Sequence from={600} durationInFrames={180}>
                <BWChatBubble imageSrc={staticFile("images/template/scene1_1.png")} content={[{"text": "这种“鸡同鸭讲、", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "秀才遇上兵”的", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "无力感，是不是", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "让你觉得现在的", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "互联网环境简直", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "没法待了？", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={180} />
            </Sequence>
            <Sequence from={780} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "大家好像不再是为了", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "真相在讨论，而是在", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "为了“输赢”", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "在搏命。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>

        </AbsoluteFill>
    );
};
