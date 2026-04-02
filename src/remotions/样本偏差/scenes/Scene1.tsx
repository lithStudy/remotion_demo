import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 深夜刷屏的焦虑
const SCENE_DURATION = 60 + 126 + 123;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "深夜十一点半，", "startFrame": 0, "durationFrames": 30}, {"text": "你习惯性地往下划着屏幕。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("深夜，一个疲惫的人盯着屏幕，房间里只有屏幕的光亮")} enterEffect="fadeIn" anchors={[{"text": "深夜", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={60} durationInFrames={126}>
                <BWCenterFocus content={[{"text": "满眼看过去，", "startFrame": 0, "durationFrames": 30}, {"text": "都是二十多岁就背着爱马仕开着保时捷的年轻人，", "startFrame": 30, "durationFrames": 48}, {"text": "要不就是刚毕业就拿下大厂百万年薪的职场精英。", "startFrame": 78, "durationFrames": 48}]} totalDurationFrames={126} imageSrc={staticFile("一群焦虑的年轻人看着奢侈品和高薪工作的照片")} enterEffect="slideBottom" anchors={[{"text": "爱马仕", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "保时捷", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}, {"text": "百万年薪", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={186} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "你转头看看自己身上那件洗得微微褪色的起球睡衣，", "startFrame": 0, "durationFrames": 51}, {"text": "再看看下个月又要还的账单，", "startFrame": 51, "durationFrames": 30}, {"text": "心里突然涌起一阵让人窒息的巨大失败感。", "startFrame": 81, "durationFrames": 42}]} totalDurationFrames={123} imageSrc={staticFile("一个疲惫的年轻人看着账单")} enterEffect="fadeIn" anchors={[{"text": "失败感", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
