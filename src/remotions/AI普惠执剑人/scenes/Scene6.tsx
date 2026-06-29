import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWSplitCompare, BWTextFocus } from "../../../components";

// 反垄断
const SCENE_DURATION = 155 + 264 + 123 + 116 + 68;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={155}>
                <BWTextFocus content={[{"text": "这不是普通的开源。", "startFrame": 0, "durationFrames": 54}, {"text": "这是把一颗抵御 AI 垄断的子弹，", "startFrame": 53, "durationFrames": 69}, {"text": "发到每个人手里。", "startFrame": 122, "durationFrames": 33}]} totalDurationFrames={155} coreSentence={[{"text": "这不是普通的开源。", "showFrom": 0}, {"text": "这是把一颗抵御 AI 垄断的子弹，", "showFrom": 1}, {"text": "发到每个人手里。", "showFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={155} durationInFrames={264}>
                <BWSplitCompare content={[{"text": "过去，AI 像一座高墙，", "startFrame": 0, "durationFrames": 59}, {"text": "墙里是 OpenAI、Google、Anthropic 这些巨头，", "startFrame": 58, "durationFrames": 106}, {"text": "墙外则是中小企业、普通开发者、创业者。", "startFrame": 164, "durationFrames": 99}]} totalDurationFrames={264} leftSrc={staticFile("images/AI普惠执剑人/scene_6_2_left.png")} rightSrc={staticFile("images/AI普惠执剑人/scene_6_2_right.png")} leftLabel={"墙内巨头"} rightLabel={"墙外普通人"} leftShowFrom={2} rightShowFrom={6} anchors={[]} />
            </Sequence>
            <Sequence from={419} durationInFrames={123}>
                <BWCognitiveShift content={[{"text": "墙外的人不是没有AI创新的想法。", "startFrame": 0, "durationFrames": 75}, {"text": "他们只是付不起算力税。", "startFrame": 74, "durationFrames": 49}]} totalDurationFrames={123} notText={"没有AI创新想法"} butText={"付不起算力税"} butSrc={staticFile("images/AI普惠执剑人/scene_6_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={542} durationInFrames={116}>
                <BWCognitiveShift content={[{"text": "他们不是没有AI使用的场景。", "startFrame": 0, "durationFrames": 59}, {"text": "他们只是买不起最强模型。", "startFrame": 58, "durationFrames": 57}]} totalDurationFrames={116} notText={"没有AI使用的场景"} butText={"买不起最强模型"} butSrc={staticFile("images/AI普惠执剑人/scene_6_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={658} durationInFrames={68}>
                <BWCenterFocus content={[{"text": "DeepSeek 把这堵墙，", "startFrame": 0, "durationFrames": 38}, {"text": "砸开了一个洞。", "startFrame": 37, "durationFrames": 31}]} totalDurationFrames={68} imageSrc={staticFile("images/AI普惠执剑人/scene_6_5.png")} enterEffect="zoomIn" anchors={[{"text": "砸开", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
