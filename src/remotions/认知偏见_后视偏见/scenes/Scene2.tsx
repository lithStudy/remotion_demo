import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 命名：心理学概念
const SCENE_DURATION = 127 + 322 + 126;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={127}>
                <BWConceptCard content={[{"text": "这在心理学中叫做“后视偏见”：", "startFrame": 0, "durationFrames": 33}, {"text": "当一件事情的结果已经发生，", "startFrame": 33, "durationFrames": 30}, {"text": "我们会自动且无意识地重构记忆，", "startFrame": 63, "durationFrames": 33}, {"text": "认为自己早就能准确预见结果。", "startFrame": 96, "durationFrames": 31}]} totalDurationFrames={127} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"后视偏见"} anchors={[]} />
            </Sequence>
            <Sequence from={127} durationInFrames={322}>
                <BWCenterFocus content={[{"text": "那个已经发生的结果就是一个“确定性的滤镜”，", "startFrame": 0, "durationFrames": 48}, {"text": "它会自动过滤掉之前所有干扰你的信息。", "startFrame": 48, "durationFrames": 40}, {"text": "一旦结果出来了，", "startFrame": 88, "durationFrames": 30}, {"text": "你会觉得逻辑链条铁证如山，", "startFrame": 118, "durationFrames": 30}, {"text": "仿佛当初只有这一条路可走。", "startFrame": 148, "durationFrames": 30}, {"text": "哪怕在事情发生前，", "startFrame": 178, "durationFrames": 30}, {"text": "你面对海量矛盾的信息时根本不敢下注，", "startFrame": 208, "durationFrames": 40}, {"text": "但在事后，", "startFrame": 248, "durationFrames": 30}, {"text": "你依然会觉得那些走错路的人“蠢得可笑”。", "startFrame": 278, "durationFrames": 44}]} totalDurationFrames={322} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "后视偏见", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "确定性滤镜", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "自我欺骗", "showFrom": 8, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={449} durationInFrames={126}>
                <BWCenterFocus content={[{"text": "这就好比看着已经拼好的迷宫图纸，", "startFrame": 0, "durationFrames": 35}, {"text": "你觉得自己一眼就能看到出口。", "startFrame": 35, "durationFrames": 31}, {"text": "我们自以为的未雨绸缪，", "startFrame": 66, "durationFrames": 30}, {"text": "其实全是复盘时的自我欺骗。", "startFrame": 96, "durationFrames": 30}]} totalDurationFrames={126} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "迷宫图纸", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "自我欺骗", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
