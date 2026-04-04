import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 解决方案：打破认知陷阱
const SCENE_DURATION = 179 + 221 + 149 + 130 + 121;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={179}>
                <BWCenterFocus content={[{"text": "要想跳出这个被精心编织的逻辑陷阱。", "startFrame": 0, "durationFrames": 98}, {"text": "你需要立刻给自己装上防身武器。", "startFrame": 97, "durationFrames": 82}]} totalDurationFrames={179} imageSrc={staticFile("images/认知偏见_确认偏误/scene_5_1.png")} enterEffect="zoomIn" anchors={[{"text": "逻辑陷阱", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "防身武器", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={179} durationInFrames={221}>
                <BWMethodStack content={[{"text": "第一步是主动制造认知摩擦。", "startFrame": 0, "durationFrames": 84}, {"text": "去关注几个你平时很讨厌的博主。", "startFrame": 83, "durationFrames": 77}, {"text": "看看他们是怎么看待问题的。", "startFrame": 160, "durationFrames": 60}]} totalDurationFrames={221} title={"主动制造认知摩擦"} imageSrc={staticFile("images/认知偏见_确认偏误/scene_5_2.png")} notes={[{"text": "关注平时讨厌的博主", "showFrom": 1}, {"text": "看他们如何看问题", "showFrom": 2}]} />
            </Sequence>
            <Sequence from={400} durationInFrames={149}>
                <BWMethodStack content={[{"text": "第二步是假设真相完全相反。", "startFrame": 0, "durationFrames": 81}, {"text": "会有什么样的证据支持它。", "startFrame": 80, "durationFrames": 68}]} totalDurationFrames={149} title={"寻找相反证据"} imageSrc={staticFile("images/认知偏见_确认偏误/scene_5_3.png")} notes={[{"text": "假设真相完全相反", "showFrom": 0}, {"text": "会有什么样的证据支持它。", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={549} durationInFrames={130}>
                <BWTextFocus content={[{"text": "当你开始学着和不同的声音共处。", "startFrame": 0, "durationFrames": 71}, {"text": "你就拿回了独立思考的权力。", "startFrame": 70, "durationFrames": 59}]} totalDurationFrames={130} coreSentence={"和不同的声音共处，你就拿回了独立思考的权力。"} coreSentenceAnchors={[{"coreSentenceAnchor": "不同的声音", "color": "#EF4444"}, {"coreSentenceAnchor": "独立思考", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={679} durationInFrames={121}>
                <BWTextFocus content={[{"text": "理性从来不是永远正确。", "startFrame": 0, "durationFrames": 51}, {"text": "而是敢于亲手打碎自己的滤镜。", "startFrame": 50, "durationFrames": 70}]} totalDurationFrames={121} coreSentence={"理性不是永远正确，而是敢于亲手打碎自己的滤镜"} coreSentenceAnchors={[{"coreSentenceAnchor": "打碎自己的滤镜", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
