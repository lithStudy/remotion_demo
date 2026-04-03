import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 解决方案：打破认知陷阱
const SCENE_DURATION = 70 + 93 + 64 + 63 + 61;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus content={[{"text": "要想跳出这个被精心编织的逻辑陷阱。", "startFrame": 0, "durationFrames": 37}, {"text": "你需要立刻给自己装上防身武器。", "startFrame": 37, "durationFrames": 33}]} totalDurationFrames={70} imageSrc={staticFile("一个迷宫的鸟瞰图")} enterEffect="zoomIn" anchors={[{"text": "逻辑陷阱", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "防身武器", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={70} durationInFrames={93}>
                <BWCenterFocus content={[{"text": "第一步是主动制造认知摩擦。", "startFrame": 0, "durationFrames": 30}, {"text": "去关注几个你平时很讨厌的博主。", "startFrame": 30, "durationFrames": 33}, {"text": "看看他们是怎么看待问题的。", "startFrame": 63, "durationFrames": 30}]} totalDurationFrames={93} imageSrc={staticFile("人们一起讨论问题的场景")} enterEffect="slideBottom" anchors={[{"text": "认知摩擦", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={163} durationInFrames={64}>
                <BWCenterFocus content={[{"text": "第二步是假设真相完全相反。", "startFrame": 0, "durationFrames": 31}, {"text": "会有什么样的证据支持它。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={64} imageSrc={staticFile("一个人深呼吸的场景")} enterEffect="fadeIn" anchors={[{"text": "寻找相反证据", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={227} durationInFrames={63}>
                <BWTextFocus content={[{"text": "当你开始学着和不同的声音共处。", "startFrame": 0, "durationFrames": 33}, {"text": "你就拿回了独立思考的权力。", "startFrame": 33, "durationFrames": 30}]} totalDurationFrames={63} coreSentence={"和不同的声音共处，你就拿回了独立思考的权力。"} coreSentenceAnchors={[{"coreSentenceAnchor": "独立思考", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={290} durationInFrames={61}>
                <BWTextFocus content={[{"text": "理性从来不是永远正确。", "startFrame": 0, "durationFrames": 30}, {"text": "而是敢于亲手打碎自己的滤镜。", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} coreSentence={"理性不是永远正确，而是敢于亲手打碎自己的滤镜"} coreSentenceAnchors={[{"coreSentenceAnchor": "打碎自己的滤镜", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
