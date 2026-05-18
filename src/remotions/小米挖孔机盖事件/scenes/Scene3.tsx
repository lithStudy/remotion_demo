import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 剖析：0.002升力与价值错位
const SCENE_DURATION = 233 + 273 + 123 + 104;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={233}>
                <BWCenterFocus content={[{"text": "而为了证明自己没撒谎，", "startFrame": 0, "durationFrames": 48}, {"text": "小米搬出了中汽研的报告。", "startFrame": 48, "durationFrames": 66}, {"text": "说这个设计能让前轴升力降低 0.002。", "startFrame": 113, "durationFrames": 119}]} totalDurationFrames={233} imageSrc={staticFile("images/小米挖孔机盖事件/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "0.002", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={233} durationInFrames={273}>
                <BWCenterFocus content={[{"text": "朋友们，", "startFrame": 0, "durationFrames": 26}, {"text": "听听这个数字，", "startFrame": 25, "durationFrames": 35}, {"text": "0.002。", "startFrame": 60, "durationFrames": 44}, {"text": "在专业的赛车工程里，", "startFrame": 103, "durationFrames": 48}, {"text": "这种量级的波动，", "startFrame": 151, "durationFrames": 40}, {"text": "甚至不如你那天穿什么颜色的内裤影响大。", "startFrame": 190, "durationFrames": 82}]} totalDurationFrames={273} imageSrc={staticFile("images/小米挖孔机盖事件/scene_3_2.png")} enterEffect="zoomIn" anchors={[{"text": "0.002", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={506} durationInFrames={123}>
                <BWMagnifyingGlass content={[{"text": "花 4 万多块钱，", "startFrame": 0, "durationFrames": 36}, {"text": "就换来一个传感器都快捕捉不到的增益？", "startFrame": 36, "durationFrames": 87}]} totalDurationFrames={123} anchors={[{"text": "捕捉不到的增益", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={629} durationInFrames={104}>
                <BWTextFocus content={[{"text": "这种价值不对等，", "startFrame": 0, "durationFrames": 39}, {"text": "才是让车主最愤怒的火种。", "startFrame": 38, "durationFrames": 65}]} totalDurationFrames={104} coreSentence={["这种价值不对等，", "才是让车主最愤怒的火种。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "最愤怒的火种", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米挖孔机盖事件/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
