import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 幸存者偏差的陷阱
const SCENE_DURATION = 91 + 61 + 63 + 121 + 147;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "明明昨天还咳得撕心裂肺，", "startFrame": 0, "durationFrames": 30}, {"text": "今天喝了那碗苦得要命的汤药，", "startFrame": 30, "durationFrames": 31}, {"text": "症状竟然真减轻了。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} imageSrc={staticFile("一个人咳嗽难受的表情")} enterEffect="fadeIn" anchors={[{"text": "撕心裂肺", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={91} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "于是我们赶紧发个朋友圈，", "startFrame": 0, "durationFrames": 30}, {"text": "感慨一句老祖宗的东西就是神！", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} imageSrc={staticFile("一群人围在一起，兴高采烈地分享朋友圈截图")} enterEffect="zoomIn" anchors={[{"text": "老祖宗", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={152} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "但很多时候，", "startFrame": 0, "durationFrames": 30}, {"text": "你可能是掉进了一个温柔的陷阱：", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("一个卡通人物掉入一个粉红色的漩涡的简笔画")} enterEffect="slideBottom" anchors={[{"text": "温柔陷阱", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={215} durationInFrames={121}>
                <BWCognitiveShift content={[{"text": "我们习惯于把好转的功劳，", "startFrame": 0, "durationFrames": 30}, {"text": "全部归结于那碗刚刚喝下的水，", "startFrame": 30, "durationFrames": 31}, {"text": "却忽略了一个最扎心的事实—", "startFrame": 61, "durationFrames": 60}]} totalDurationFrames={121} notText={"归结于药"} butText={"自我修复"} butSrc={staticFile("人体细胞自我修复的微观景象")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={336} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "即便你这一天只是躺平、", "startFrame": 0, "durationFrames": 30}, {"text": "喝白开水，", "startFrame": 30, "durationFrames": 30}, {"text": "甚至什么都不做，", "startFrame": 60, "durationFrames": 30}, {"text": "你的身体本就会开启那套演化了数百万年的自我修复程序。", "startFrame": 90, "durationFrames": 57}]} totalDurationFrames={147} imageSrc={staticFile("躺在床上的人，喝水的杯子，不做事情的双手")} enterEffect="fadeIn" anchors={[{"text": "自我修复", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
