import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 命名：心理学概念
const SCENE_DURATION = 127 + 88 + 90 + 144 + 66 + 60;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={127}>
                <BWConceptCard content={[{"text": "这在心理学中叫做“后视偏见”：", "startFrame": 0, "durationFrames": 33}, {"text": "当一件事情的结果已经发生，", "startFrame": 33, "durationFrames": 30}, {"text": "我们会自动且无意识地重构记忆，", "startFrame": 63, "durationFrames": 33}, {"text": "认为自己早就能准确预见结果。", "startFrame": 96, "durationFrames": 31}]} totalDurationFrames={127} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"后视偏见"} anchors={[]} />
            </Sequence>
            <Sequence from={127} durationInFrames={88}>
                <BWCenterFocus content={[{"text": "那个已经发生的结果就是一个“确定性的滤镜”，", "startFrame": 0, "durationFrames": 48}, {"text": "它会自动过滤掉之前所有干扰你的信息。", "startFrame": 48, "durationFrames": 40}]} totalDurationFrames={88} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "确定性滤镜", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={215} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "一旦结果出来了，", "startFrame": 0, "durationFrames": 30}, {"text": "你会觉得逻辑链条铁证如山，", "startFrame": 30, "durationFrames": 30}, {"text": "仿佛当初只有这一条路可走。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "铁证如山", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={305} durationInFrames={144}>
                <BWCognitiveShift content={[{"text": "哪怕在事情发生前，", "startFrame": 0, "durationFrames": 30}, {"text": "你面对海量矛盾的信息时根本不敢下注，", "startFrame": 30, "durationFrames": 40}, {"text": "但在事后，", "startFrame": 70, "durationFrames": 30}, {"text": "你依然会觉得那些走错路的人“蠢得可笑”。", "startFrame": 100, "durationFrames": 44}]} totalDurationFrames={144} notText={"不敢下注"} butText={"蠢得可笑"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={449} durationInFrames={66}>
                <BWCenterFocus content={[{"text": "这就好比看着已经拼好的迷宫图纸，", "startFrame": 0, "durationFrames": 35}, {"text": "你觉得自己一眼就能看到出口。", "startFrame": 35, "durationFrames": 31}]} totalDurationFrames={66} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "迷宫图纸", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "看到出口", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={515} durationInFrames={60}>
                <BWTextFocus content={[{"text": "我们自以为的未雨绸缪，", "startFrame": 0, "durationFrames": 30}, {"text": "其实全是复盘时的自我欺骗。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={"我们自以为的未雨绸缪，全是自我欺骗"} coreSentenceAnchors={[{"coreSentenceAnchor": "未雨绸缪", "color": "#EF4444"}, {"coreSentenceAnchor": "自我欺骗", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
