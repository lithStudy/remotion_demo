import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWMethodStack, BWSplitCompare, BWTextFocus } from "../../../components";

// 伪史论的双标
const SCENE_DURATION = 117 + 157 + 305 + 237 + 91;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "但是这种借法有个问题：", "startFrame": 0, "durationFrames": 50}, {"text": "要是别人也有荣耀的历史，该怎么办呢？", "startFrame": 49, "durationFrames": 68}]} totalDurationFrames={117} imageSrc={staticFile("images/精神胜利法/scene_3_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={117} durationInFrames={157}>
                <BWDosAndDonts content={[{"text": "好办！", "startFrame": 0, "durationFrames": 26}, {"text": "那就让别人的文明失去来历，", "startFrame": 25, "durationFrames": 57}, {"text": "再让自己的文明，成为一切的源头。", "startFrame": 81, "durationFrames": 75}]} totalDurationFrames={157} left={{label: "剥夺来历", src: staticFile("images/精神胜利法/scene_3_2_left.png"), showFrom: 0 }} right={{label: "自称源头", src: staticFile("images/精神胜利法/scene_3_2_right.png"), showFrom: 1 }} anchors={[]} />
            </Sequence>
            <Sequence from={274} durationInFrames={305}>
                <BWMethodStack content={[{"text": "中文互联网上，", "startFrame": 0, "durationFrames": 36}, {"text": "管这叫“伪史论”。", "startFrame": 36, "durationFrames": 52}, {"text": "金字塔是近代用混凝土浇的。", "startFrame": 87, "durationFrames": 77}, {"text": "亚里士多德根本不存在。", "startFrame": 163, "durationFrames": 57}, {"text": "工业革命的技术，全抄自《永乐大典》。", "startFrame": 220, "durationFrames": 85}]} totalDurationFrames={305} title={"伪史论"} imageSrc={staticFile("images/精神胜利法/scene_3_3.png")} notes={[{"text": "金字塔混凝土浇筑", "showFrom": 2}, {"text": "亚里士多德不存在", "showFrom": 3}, {"text": "工业技术抄自永乐大典", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={579} durationInFrames={237}>
                <BWSplitCompare content={[{"text": "判断别人，", "startFrame": 0, "durationFrames": 29}, {"text": "一句\"看着不像真的\"，", "startFrame": 28, "durationFrames": 46}, {"text": "就能推翻几千年历史。", "startFrame": 74, "durationFrames": 49}, {"text": "判断自己，", "startFrame": 122, "durationFrames": 30}, {"text": "古书里一个模糊的词，", "startFrame": 152, "durationFrames": 47}, {"text": "就能包揽天下。", "startFrame": 199, "durationFrames": 38}]} totalDurationFrames={237} leftSrc={staticFile("images/精神胜利法/scene_3_4_left.png")} rightSrc={staticFile("images/精神胜利法/scene_3_4_right.png")} leftLabel={"无限怀疑"} rightLabel={"无限宽容"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={816} durationInFrames={91}>
                <BWTextFocus content={[{"text": "对别人，无限怀疑。", "startFrame": 0, "durationFrames": 46}, {"text": "对自己，无限宽容。", "startFrame": 45, "durationFrames": 45}]} totalDurationFrames={91} coreSentence={[{"text": "对别人，无限怀疑。", "showFrom": 0}, {"text": "对自己，无限宽容。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "无限怀疑", "color": "#EF4444"}, {"coreSentenceAnchor": "无限宽容", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/精神胜利法/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
