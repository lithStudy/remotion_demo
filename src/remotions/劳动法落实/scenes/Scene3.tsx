import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWConceptCard, BWPanelGrid, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 论证：消费时间被抽走
const SCENE_DURATION = 190 + 81 + 88 + 95 + 149 + 126 + 382 + 157 + 84;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={190}>
                <BWConceptCard content={[{"text": "接下来我们看内需，", "startFrame": 0, "durationFrames": 42}, {"text": "有人说我们产能过剩了，", "startFrame": 41, "durationFrames": 47}, {"text": "很多东西生产出来烂在仓库里，", "startFrame": 88, "durationFrames": 70}, {"text": "但我告诉你，", "startFrame": 158, "durationFrames": 32}]} totalDurationFrames={190} imageSrc={staticFile("images/劳动法落实/scene_3_1.png")} conceptName={"内需不足"} anchors={[]} />
            </Sequence>
            <Sequence from={190} durationInFrames={81}>
                <BWTextFocus content={[{"text": "从来没有什么产能过剩，", "startFrame": 0, "durationFrames": 53}, {"text": "只有内需不足。", "startFrame": 52, "durationFrames": 28}]} totalDurationFrames={81} coreSentence={[{"text": "从来没有什么产能过剩，", "showFrom": 0}, {"text": "只有内需不足。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "内需不足", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={271} durationInFrames={88}>
                <BWSplitCompare content={[{"text": "人既是生产者，", "startFrame": 0, "durationFrames": 42}, {"text": "同时也是消费者。", "startFrame": 41, "durationFrames": 46}]} totalDurationFrames={88} leftSrc={staticFile("images/劳动法落实/scene_3_3_left.png")} rightSrc={staticFile("images/劳动法落实/scene_3_3_right.png")} leftLabel={"生产者"} rightLabel={"消费者"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={359} durationInFrames={95}>
                <BWCauseChain content={[{"text": "你把生产时间拉满，", "startFrame": 0, "durationFrames": 45}, {"text": "消费时间就被榨干。", "startFrame": 44, "durationFrames": 50}]} totalDurationFrames={95} layout={"horizontal"} nodes={[{ label: "生产时间拉满", imageSrc: staticFile("images/劳动法落实/scene_3_4_img0.png"), showFrom: 0 }, { label: "消费时间被榨干", imageSrc: staticFile("images/劳动法落实/scene_3_4_img1.png"), showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={454} durationInFrames={149}>
                <BWBeatSequence content={[{"text": "一个人每天上班十二小时，", "startFrame": 0, "durationFrames": 58}, {"text": "通勤一两个小时，", "startFrame": 57, "durationFrames": 42}, {"text": "回到家只想躺着。", "startFrame": 99, "durationFrames": 50}]} totalDurationFrames={149} stages={[{ imageSrc: staticFile("images/劳动法落实/scene_3_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/劳动法落实/scene_3_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/劳动法落实/scene_3_5_img2.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={603} durationInFrames={126}>
                <BWPanelGrid content={[{"text": "电影谁去看？", "startFrame": 0, "durationFrames": 33}, {"text": "旅游谁去玩？", "startFrame": 32, "durationFrames": 32}, {"text": "餐厅谁去吃？", "startFrame": 64, "durationFrames": 31}, {"text": "商场谁去逛？", "startFrame": 94, "durationFrames": 31}]} totalDurationFrames={126} panels={[{ src: staticFile("images/劳动法落实/scene_3_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_3_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_3_6_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_3_6_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={729} durationInFrames={382}>
                <BWStatCompare content={[{"text": "社科院2017年，", "startFrame": 0, "durationFrames": 45}, {"text": "有过一组调查。", "startFrame": 44, "durationFrames": 41}, {"text": "除掉工作和睡觉，", "startFrame": 85, "durationFrames": 44}, {"text": "中国人每天休闲，", "startFrame": 128, "durationFrames": 40}, {"text": "平均只有2.27小时。", "startFrame": 168, "durationFrames": 71}, {"text": "美国、德国、英国，", "startFrame": 238, "durationFrames": 44}, {"text": "大约是5小时。", "startFrame": 281, "durationFrames": 36}, {"text": "深圳更惨。", "startFrame": 317, "durationFrames": 29}, {"text": "不到2小时。", "startFrame": 346, "durationFrames": 36}]} totalDurationFrames={382} bars={[{"label": "中国", "value": 2.27, "showFrom": 4}, {"label": "美/德/英国", "value": 5, "showFrom": 5}, {"label": "深圳", "value": 1.9, "showFrom": 7}]} anchors={[]} />
            </Sequence>
            <Sequence from={1111} durationInFrames={157}>
                <BWBeatSequence content={[{"text": "国家要扩大内需。", "startFrame": 0, "durationFrames": 50}, {"text": "996却在系统性抽走一个社会的消费时间。", "startFrame": 49, "durationFrames": 108}]} totalDurationFrames={157} stages={[{ imageSrc: staticFile("images/劳动法落实/scene_3_8_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/劳动法落实/scene_3_8_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1268} durationInFrames={84}>
                <BWTextFocus content={[{"text": "消费没了时间，", "startFrame": 0, "durationFrames": 42}, {"text": "内需就只剩口号。", "startFrame": 41, "durationFrames": 42}]} totalDurationFrames={84} coreSentence={[{"text": "消费没了时间，", "showFrom": 0}, {"text": "内需就只剩口号。", "showFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
