import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWSplitCompare, BWTextFocus } from "../../../components";

// 命名：心理学概念
const SCENE_DURATION = 267 + 168 + 185 + 259 + 111;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={267}>
                <BWConceptCard content={[{"text": "这在心理学中叫做“后视偏见”：", "startFrame": 0, "durationFrames": 77}, {"text": "当一件事情的结果已经发生，", "startFrame": 76, "durationFrames": 53}, {"text": "我们会自动且无意识地重构记忆，", "startFrame": 128, "durationFrames": 74}, {"text": "认为自己早就能准确预见结果。", "startFrame": 201, "durationFrames": 65}]} totalDurationFrames={267} imageSrc={staticFile("images/认知偏见_后视偏见/scene_2_1.png")} conceptName={"后视偏见"} anchors={[]} />
            </Sequence>
            <Sequence from={267} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "那个已经发生的结果就是一个“确定性的滤镜”，", "startFrame": 0, "durationFrames": 90}, {"text": "它会自动过滤掉之前所有干扰你的信息。", "startFrame": 89, "durationFrames": 79}]} totalDurationFrames={168} imageSrc={staticFile("images/认知偏见_后视偏见/scene_2_2.png")} enterEffect="fadeIn" anchors={[{"text": "确定性滤镜", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={435} durationInFrames={185}>
                <BWCenterFocus content={[{"text": "一旦结果出来了，", "startFrame": 0, "durationFrames": 36}, {"text": "你会觉得逻辑链条铁证如山，", "startFrame": 36, "durationFrames": 84}, {"text": "仿佛当初只有这一条路可走。", "startFrame": 120, "durationFrames": 65}]} totalDurationFrames={185} imageSrc={staticFile("images/认知偏见_后视偏见/scene_2_3.png")} enterEffect="slideBottom" anchors={[{"text": "铁证如山", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={620} durationInFrames={259}>
                <BWSplitCompare content={[{"text": "哪怕在事情发生前，", "startFrame": 0, "durationFrames": 46}, {"text": "你面对海量矛盾的信息时根本不敢下注，", "startFrame": 45, "durationFrames": 91}, {"text": "但在事后，", "startFrame": 136, "durationFrames": 28}, {"text": "你依然会觉得那些走错路的人“蠢得可笑”。", "startFrame": 163, "durationFrames": 95}]} totalDurationFrames={259} leftSrc={staticFile("images/认知偏见_后视偏见/scene_2_4_left.png")} rightSrc={staticFile("images/认知偏见_后视偏见/scene_2_4_right.png")} leftLabel={"事前迷茫"} rightLabel={"事后笃定"} />
            </Sequence>
            <Sequence from={879} durationInFrames={111}>
                <BWTextFocus content={[{"text": "我们自以为的未雨绸缪，", "startFrame": 0, "durationFrames": 46}, {"text": "其实全是复盘时的自我欺骗。", "startFrame": 45, "durationFrames": 65}]} totalDurationFrames={111} coreSentence={["我们自以为的未雨绸缪，全是自我欺骗"]} coreSentenceAnchors={[{"coreSentenceAnchor": "未雨绸缪", "color": "#EF4444"}, {"coreSentenceAnchor": "自我欺骗", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_后视偏见/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
