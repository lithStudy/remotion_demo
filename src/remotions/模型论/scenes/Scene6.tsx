import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 剖析·大语言模型本质
const SCENE_DURATION = 130 + 202 + 439;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={130}>
                <BWCenterFocus content={[{"text": "那2020年之后呢？", "startFrame": 0, "durationFrames": 56}, {"text": "确实会有货真价实的“工业大模型”，", "startFrame": 55, "durationFrames": 75}]} totalDurationFrames={130} imageSrc={staticFile("images/模型论/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "工业大模型", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={130} durationInFrames={202}>
                <BWCognitiveShift content={[{"text": "但这个大模型本质上还是“大语言模型”，", "startFrame": 0, "durationFrames": 81}, {"text": "只不过是在训练语料上，", "startFrame": 80, "durationFrames": 50}, {"text": "多加了一些特定工业领域的数据而已。", "startFrame": 129, "durationFrames": 72}]} totalDurationFrames={202} notText={"工业专用大模型"} butText={"大语言模型+工业语料"} butSrc={staticFile("images/模型论/scene_6_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={332} durationInFrames={439}>
                <BWTextFocus content={[{"text": "我们来总结一下，", "startFrame": 0, "durationFrames": 33}, {"text": "模型，等于固定的程序。", "startFrame": 32, "durationFrames": 66}, {"text": "工业模型，等于模型加工业数据。", "startFrame": 98, "durationFrames": 87}, {"text": "大语言模型等于AI模型等于大模型。", "startFrame": 184, "durationFrames": 86}, {"text": "工业大模型等于大语言模型加工业数据，", "startFrame": 269, "durationFrames": 88}, {"text": "或者工业大模型等于工业模型加改名。", "startFrame": 356, "durationFrames": 82}]} totalDurationFrames={439} coreSentence={[{"text": "模型 = 固定程序", "showFrom": 1}, {"text": "工业模型 = 模型 + 工业数据", "showFrom": 2}, {"text": "大语言模型 = AI模型 = 大模型", "showFrom": 3}, {"text": "工业大模型 = 大语言模型 + 工业数据", "showFrom": 4}, {"text": "工业大模型（假）= 工业模型 + 改名", "showFrom": 5}]} coreSentenceAnchors={[{"coreSentenceAnchor": "固定程序", "color": "#EF4444"}, {"coreSentenceAnchor": "AI模型", "color": "#EF4444"}, {"coreSentenceAnchor": "改名", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
