import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 深夜刷屏的焦虑
const SCENE_DURATION = 95 + 232 + 278;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={95}>
                <BWCenterFocus content={[{"text": "深夜十一点半，", "startFrame": 0, "durationFrames": 38}, {"text": "你习惯性地往下划着屏幕。", "startFrame": 37, "durationFrames": 58}]} totalDurationFrames={95} imageSrc={staticFile("images/样本偏差/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "深夜", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={95} durationInFrames={232}>
                <BWCenterFocus content={[{"text": "满眼看过去，", "startFrame": 0, "durationFrames": 39}, {"text": "都是二十多岁就背着爱马仕开着保时捷的年轻人，", "startFrame": 38, "durationFrames": 93}, {"text": "要不就是刚毕业就拿下大厂百万年薪的职场精英。", "startFrame": 130, "durationFrames": 101}]} totalDurationFrames={232} imageSrc={staticFile("images/样本偏差/scene_1_2.png")} enterEffect="slideBottom" anchors={[{"text": "爱马仕、保时捷", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "百万年薪", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={327} durationInFrames={278}>
                <BWCenterFocus content={[{"text": "你转头看看自己身上那件洗得微微褪色的起球睡衣，", "startFrame": 0, "durationFrames": 116}, {"text": "再看看下个月又要还的账单，", "startFrame": 115, "durationFrames": 68}, {"text": "心里突然涌起一阵让人窒息的巨大失败感。", "startFrame": 183, "durationFrames": 95}]} totalDurationFrames={278} imageSrc={staticFile("images/样本偏差/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "失败感", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/样本偏差/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
