import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWKpiHero } from "../../../components";

// 引入·专利丛林
const SCENE_DURATION = 129 + 92 + 115 + 58 + 121 + 134 + 268 + 143 + 118;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={129}>
                <BWKpiHero content={[{"text": "华为拥有全球专利数量超过15万件。", "startFrame": 0, "durationFrames": 95}, {"text": "全球第一。", "startFrame": 94, "durationFrames": 34}]} totalDurationFrames={129} blocks={[{"value": 15, "suffix": "+万件", "label": "全球专利数量", "showFrom": 0, "useGrouping": true}]} countDuration={28} anchors={[]} />
            </Sequence>
            <Sequence from={129} durationInFrames={92}>
                <BWKpiHero content={[{"text": "每年光收许可费，", "startFrame": 0, "durationFrames": 44}, {"text": "就六亿多美元。", "startFrame": 43, "durationFrames": 48}]} totalDurationFrames={92} blocks={[{"value": 6, "suffix": " +亿美元", "label": "许可费", "useGrouping": true, "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={221} durationInFrames={115}>
                <BWCenterFocus content={[{"text": "你听到这些数字，", "startFrame": 0, "durationFrames": 36}, {"text": "第一反应是什么？", "startFrame": 36, "durationFrames": 35}, {"text": "厉害？", "startFrame": 70, "durationFrames": 17}, {"text": "民族骄傲？", "startFrame": 87, "durationFrames": 28}]} totalDurationFrames={115} imageSrc={staticFile("images/华为专利论/scene_1_4.png")} enterEffect="fadeIn" anchors={[{"text": "厉害", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "民族骄傲", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={336} durationInFrames={58}>
                <BWCenterFocus content={[{"text": "我今天要告诉你另一件事。", "startFrame": 0, "durationFrames": 58}]} totalDurationFrames={58} imageSrc={staticFile("images/华为专利论/scene_1_5.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={394} durationInFrames={121}>
                <BWCognitiveShift content={[{"text": "这里面，", "startFrame": 0, "durationFrames": 22}, {"text": "有相当大一块，", "startFrame": 21, "durationFrames": 38}, {"text": "不是技术，", "startFrame": 58, "durationFrames": 22}, {"text": "是法律地雷。", "startFrame": 80, "durationFrames": 40}]} totalDurationFrames={121} notText={"技术"} butText={"法律地雷"} butSrc={staticFile("images/华为专利论/scene_1_6.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={515} durationInFrames={134}>
                <BWConceptCard content={[{"text": "名字就叫—", "startFrame": 0, "durationFrames": 27}, {"text": "专利丛林。", "startFrame": 26, "durationFrames": 44}, {"text": "什么叫专利丛林？", "startFrame": 69, "durationFrames": 44}, {"text": "打个比方。", "startFrame": 113, "durationFrames": 21}]} totalDurationFrames={134} imageSrc={staticFile("images/华为专利论/scene_1_7.png")} conceptName={"专利丛林"} anchors={[]} />
            </Sequence>
            <Sequence from={649} durationInFrames={268}>
                <BWBeatSequence content={[{"text": "你住的小区，", "startFrame": 0, "durationFrames": 30}, {"text": "本来一条路就能回家。", "startFrame": 29, "durationFrames": 47}, {"text": "突然有人宣布：", "startFrame": 76, "durationFrames": 35}, {"text": "你左脚踩的这块砖，", "startFrame": 111, "durationFrames": 46}, {"text": "归我。", "startFrame": 157, "durationFrames": 30}, {"text": "你右脚踩的那块砖，", "startFrame": 186, "durationFrames": 47}, {"text": "也归我。", "startFrame": 233, "durationFrames": 34}]} totalDurationFrames={268} stages={[{ imageSrc: staticFile("images/华为专利论/scene_1_9_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/华为专利论/scene_1_9_img1.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }, { imageSrc: staticFile("images/华为专利论/scene_1_9_img2.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 5 }]} anchors={[]} />
            </Sequence>
            <Sequence from={917} durationInFrames={143}>
                <BWCenterFocus content={[{"text": "跨门槛三步，", "startFrame": 0, "durationFrames": 36}, {"text": "每一步都要交钱。", "startFrame": 36, "durationFrames": 44}, {"text": "你不交？", "startFrame": 79, "durationFrames": 28}, {"text": "告你侵权。", "startFrame": 106, "durationFrames": 36}]} totalDurationFrames={143} imageSrc={staticFile("images/华为专利论/scene_1_10.png")} enterEffect="fadeIn" anchors={[{"text": "交钱", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "告你侵权", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1060} durationInFrames={118}>
                <BWCognitiveShift content={[{"text": "更恶心的是，", "startFrame": 0, "durationFrames": 34}, {"text": "他们根本不想修路。", "startFrame": 33, "durationFrames": 43}, {"text": "他们只想让你走不了。", "startFrame": 76, "durationFrames": 42}]} totalDurationFrames={118} notText={"修路"} butText={"让你走不了"} butSrc={staticFile("images/华为专利论/scene_1_11.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
