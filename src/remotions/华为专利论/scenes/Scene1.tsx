import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWKpiHero } from "../../../components";

// 引入·专利丛林
const SCENE_DURATION = 138 + 81 + 121 + 62 + 112 + 146 + 247 + 128 + 118;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={138}>
                <BWKpiHero content={[{"text": "华为拥有全球专利数量超过15万件。", "startFrame": 0, "durationFrames": 107}, {"text": "全球第一。", "startFrame": 106, "durationFrames": 31}]} totalDurationFrames={138} blocks={[{"value": 15, "suffix": "+万件", "label": "全球专利数量", "showFrom": 0, "useGrouping": true}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={138} durationInFrames={81}>
                <BWKpiHero content={[{"text": "每年光收许可费，", "startFrame": 0, "durationFrames": 41}, {"text": "就六亿多美元。", "startFrame": 40, "durationFrames": 41}]} totalDurationFrames={81} blocks={[{"value": 6, "suffix": " +亿美元", "label": "许可费", "useGrouping": true, "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={219} durationInFrames={121}>
                <BWCenterFocus content={[{"text": "你听到这些数字，", "startFrame": 0, "durationFrames": 40}, {"text": "第一反应是什么？", "startFrame": 39, "durationFrames": 32}, {"text": "厉害？", "startFrame": 70, "durationFrames": 24}, {"text": "民族骄傲？", "startFrame": 94, "durationFrames": 27}]} totalDurationFrames={121} imageSrc={staticFile("images/华为专利论/scene_1_4.png")} enterEffect="fadeIn" anchors={[{"text": "厉害", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "民族骄傲", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={340} durationInFrames={62}>
                <BWCenterFocus content={[{"text": "我今天要告诉你另一件事。", "startFrame": 0, "durationFrames": 62}]} totalDurationFrames={62} imageSrc={staticFile("images/华为专利论/scene_1_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={402} durationInFrames={112}>
                <BWCognitiveShift content={[{"text": "这里面，", "startFrame": 0, "durationFrames": 19}, {"text": "有相当大一块，", "startFrame": 18, "durationFrames": 36}, {"text": "不是技术，", "startFrame": 54, "durationFrames": 27}, {"text": "是法律地雷。", "startFrame": 80, "durationFrames": 31}]} totalDurationFrames={112} notText={"技术"} butText={"法律地雷"} butSrc={staticFile("images/华为专利论/scene_1_6.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={514} durationInFrames={146}>
                <BWConceptCard content={[{"text": "名字就叫—", "startFrame": 0, "durationFrames": 39}, {"text": "专利丛林。", "startFrame": 38, "durationFrames": 47}, {"text": "什么叫专利丛林？", "startFrame": 85, "durationFrames": 42}, {"text": "打个比方。", "startFrame": 126, "durationFrames": 20}]} totalDurationFrames={146} imageSrc={staticFile("images/华为专利论/scene_1_7.png")} conceptName={"专利丛林"} anchors={[]} />
            </Sequence>
            <Sequence from={660} durationInFrames={247}>
                <BWBeatSequence content={[{"text": "你住的小区，", "startFrame": 0, "durationFrames": 28}, {"text": "本来一条路就能回家。", "startFrame": 27, "durationFrames": 51}, {"text": "突然有人宣布：", "startFrame": 77, "durationFrames": 34}, {"text": "你左脚踩的这块砖，", "startFrame": 111, "durationFrames": 44}, {"text": "归我。", "startFrame": 154, "durationFrames": 20}, {"text": "你右脚踩的那块砖，", "startFrame": 174, "durationFrames": 45}, {"text": "也归我。", "startFrame": 218, "durationFrames": 28}]} totalDurationFrames={247} stages={[{ imageSrc: staticFile("images/华为专利论/scene_1_9_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/华为专利论/scene_1_9_img1.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }, { imageSrc: staticFile("images/华为专利论/scene_1_9_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 5 }]} anchors={[]} />
            </Sequence>
            <Sequence from={907} durationInFrames={128}>
                <BWCenterFocus content={[{"text": "跨门槛三步，", "startFrame": 0, "durationFrames": 31}, {"text": "每一步都要交钱。", "startFrame": 30, "durationFrames": 39}, {"text": "你不交？", "startFrame": 68, "durationFrames": 26}, {"text": "告你侵权。", "startFrame": 93, "durationFrames": 34}]} totalDurationFrames={128} imageSrc={staticFile("images/华为专利论/scene_1_10.png")} enterEffect="fadeIn" anchors={[{"text": "交钱", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "告你侵权", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1035} durationInFrames={118}>
                <BWCognitiveShift content={[{"text": "更恶心的是，", "startFrame": 0, "durationFrames": 34}, {"text": "他们根本不想修路。", "startFrame": 33, "durationFrames": 36}, {"text": "他们只想让你走不了。", "startFrame": 69, "durationFrames": 49}]} totalDurationFrames={118} notText={"修路"} butText={"让你走不了"} butSrc={staticFile("images/华为专利论/scene_1_11.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
