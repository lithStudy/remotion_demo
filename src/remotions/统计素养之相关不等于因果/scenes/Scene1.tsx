import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 幸存者偏差的陷阱
const SCENE_DURATION = 171 + 131 + 94 + 190 + 238;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={171}>
                <BWCenterFocus content={[{"text": "明明昨天还咳得撕心裂肺，", "startFrame": 0, "durationFrames": 62}, {"text": "今天喝了那碗苦得要命的汤药，", "startFrame": 61, "durationFrames": 59}, {"text": "症状竟然真减轻了。", "startFrame": 120, "durationFrames": 51}]} totalDurationFrames={171} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "撕心裂肺", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={171} durationInFrames={131}>
                <BWCenterFocus content={[{"text": "于是我们赶紧发个朋友圈，", "startFrame": 0, "durationFrames": 53}, {"text": "感慨一句老祖宗的东西就是神！", "startFrame": 52, "durationFrames": 79}]} totalDurationFrames={131} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_1_2.png")} enterEffect="zoomIn" anchors={[{"text": "老祖宗就是神~", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={302} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "但很多时候，", "startFrame": 0, "durationFrames": 30}, {"text": "你可能是掉进了一个温柔的陷阱：", "startFrame": 29, "durationFrames": 65}]} totalDurationFrames={94} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_1_3.png")} enterEffect="slideBottom" anchors={[{"text": "温柔陷阱", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={396} durationInFrames={190}>
                <BWCognitiveShift content={[{"text": "我们习惯于把好转的功劳，", "startFrame": 0, "durationFrames": 66}, {"text": "全部归结于那碗刚刚喝下的水，", "startFrame": 65, "durationFrames": 66}, {"text": "却忽略了一个最扎心的事实—", "startFrame": 130, "durationFrames": 59}]} totalDurationFrames={190} notText={"归结于药"} butText={"自我修复"} butSrc={staticFile("images/统计素养之相关不等于因果/scene_1_4.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={586} durationInFrames={238}>
                <BWCenterFocus content={[{"text": "即便你这一天只是躺平、", "startFrame": 0, "durationFrames": 50}, {"text": "喝白开水，", "startFrame": 49, "durationFrames": 24}, {"text": "甚至什么都不做，", "startFrame": 73, "durationFrames": 38}, {"text": "你的身体本就会开启那套演化了数百万年的自我修复程序。", "startFrame": 110, "durationFrames": 128}]} totalDurationFrames={238} imageSrc={staticFile("images/统计素养之相关不等于因果/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "自我修复", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/统计素养之相关不等于因果/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
