import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCauseChain, BWConceptCard, BWPanelGrid, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 论证：消费时间被抽走
const SCENE_DURATION = 191 + 95 + 80 + 85 + 131 + 132 + 403 + 142 + 78;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={191}>
                <BWConceptCard content={[{"text": "接下来我们看内需，", "startFrame": 0, "durationFrames": 43}, {"text": "有人说我们产能过剩了，", "startFrame": 42, "durationFrames": 56}, {"text": "很多东西生产出来烂在仓库里，", "startFrame": 98, "durationFrames": 68}, {"text": "但我告诉你，", "startFrame": 165, "durationFrames": 26}]} totalDurationFrames={191} imageSrc={staticFile("images/劳动法落实/scene_3_1.png")} conceptName={"内需不足"} anchors={[]} />
            </Sequence>
            <Sequence from={191} durationInFrames={95}>
                <BWTextFocus content={[{"text": "从来没有什么产能过剩，", "startFrame": 0, "durationFrames": 53}, {"text": "只有内需不足。", "startFrame": 52, "durationFrames": 43}]} totalDurationFrames={95} coreSentence={[{"text": "从来没有什么产能过剩，", "showFrom": 0}, {"text": "只有内需不足。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "内需不足", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={286} durationInFrames={80}>
                <BWSplitCompare content={[{"text": "人既是生产者，", "startFrame": 0, "durationFrames": 36}, {"text": "同时也是消费者。", "startFrame": 36, "durationFrames": 44}]} totalDurationFrames={80} leftSrc={staticFile("images/劳动法落实/scene_3_3_left.png")} rightSrc={staticFile("images/劳动法落实/scene_3_3_right.png")} leftLabel={"生产者"} rightLabel={"消费者"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={366} durationInFrames={85}>
                <BWCauseChain content={[{"text": "你把生产时间拉满，", "startFrame": 0, "durationFrames": 40}, {"text": "消费时间就被榨干。", "startFrame": 39, "durationFrames": 45}]} totalDurationFrames={85} layout={"horizontal"} nodes={[{ label: "生产时间拉满", imageSrc: staticFile("images/劳动法落实/scene_3_4_img0.png"), showFrom: 0 }, { label: "消费时间被榨干", imageSrc: staticFile("images/劳动法落实/scene_3_4_img1.png"), showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={451} durationInFrames={131}>
                <BWBeatSequence content={[{"text": "一个人每天上班十二小时，", "startFrame": 0, "durationFrames": 56}, {"text": "通勤一两个小时，", "startFrame": 55, "durationFrames": 38}, {"text": "回到家只想躺着。", "startFrame": 92, "durationFrames": 38}]} totalDurationFrames={131} stages={[{ imageSrc: staticFile("images/劳动法落实/scene_3_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/劳动法落实/scene_3_5_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/劳动法落实/scene_3_5_img2.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={582} durationInFrames={132}>
                <BWPanelGrid content={[{"text": "电影谁去看？", "startFrame": 0, "durationFrames": 30}, {"text": "旅游谁去玩？", "startFrame": 29, "durationFrames": 35}, {"text": "餐厅谁去吃？", "startFrame": 64, "durationFrames": 32}, {"text": "商场谁去逛？", "startFrame": 96, "durationFrames": 36}]} totalDurationFrames={132} panels={[{ src: staticFile("images/劳动法落实/scene_3_6_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_3_6_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_3_6_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/劳动法落实/scene_3_6_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={714} durationInFrames={403}>
                <BWStatCompare content={[{"text": "社科院2017年，", "startFrame": 0, "durationFrames": 44}, {"text": "有过一组调查。", "startFrame": 43, "durationFrames": 41}, {"text": "除掉工作和睡觉，", "startFrame": 84, "durationFrames": 42}, {"text": "中国人每天休闲，", "startFrame": 125, "durationFrames": 41}, {"text": "平均只有2.27小时。", "startFrame": 165, "durationFrames": 67}, {"text": "美国、德国、英国，", "startFrame": 232, "durationFrames": 67}, {"text": "大约是5小时。", "startFrame": 298, "durationFrames": 40}, {"text": "深圳更惨。", "startFrame": 338, "durationFrames": 30}, {"text": "不到2小时。", "startFrame": 367, "durationFrames": 35}]} totalDurationFrames={403} bars={[{"label": "中国", "value": 2.27, "showFrom": 4}, {"label": "美/德/英国", "value": 5, "showFrom": 5}, {"label": "深圳", "value": 1.9, "showFrom": 7}]} anchors={[]} />
            </Sequence>
            <Sequence from={1117} durationInFrames={142}>
                <BWBeatSequence content={[{"text": "国家要扩大内需。", "startFrame": 0, "durationFrames": 46}, {"text": "996却在系统性抽走一个社会的消费时间。", "startFrame": 45, "durationFrames": 96}]} totalDurationFrames={142} stages={[{ imageSrc: staticFile("images/劳动法落实/scene_3_8_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/劳动法落实/scene_3_8_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1259} durationInFrames={78}>
                <BWTextFocus content={[{"text": "消费没了时间，", "startFrame": 0, "durationFrames": 39}, {"text": "内需就只剩口号。", "startFrame": 38, "durationFrames": 40}]} totalDurationFrames={78} coreSentence={[{"text": "消费没了时间，", "showFrom": 0}, {"text": "内需就只剩口号。", "showFrom": 1}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
