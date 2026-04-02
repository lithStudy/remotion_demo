import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 统计学上的偏差
const SCENE_DURATION = 146 + 249 + 100 + 310 + 103 + 256;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={146}>
                <BWConceptCard content={[{"text": "在社会统计学上，", "startFrame": 0, "durationFrames": 47}, {"text": "这种残忍的错觉叫做样本代表性缺失", "startFrame": 46, "durationFrames": 99}]} totalDurationFrames={146} imageSrc={staticFile("images/样本偏差/scene_3_1.png")} conceptName={"样本代表性缺失"} anchors={[]} />
            </Sequence>
            <Sequence from={146} durationInFrames={249}>
                <BWCenterFocus content={[{"text": "你必须明白一个硬核真相，", "startFrame": 0, "durationFrames": 63}, {"text": "想要了解一个群体的真实面貌，", "startFrame": 62, "durationFrames": 70}, {"text": "你抽样出来的样本必须是整体社会的完美微缩模型。", "startFrame": 131, "durationFrames": 117}]} totalDurationFrames={249} imageSrc={staticFile("images/样本偏差/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "硬核真相", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "真实面貌", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}, {"text": "微缩模型", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={395} durationInFrames={100}>
                <BWCenterFocus content={[{"text": "但社交媒体的展示机制从来就不是随机抽样的。", "startFrame": 0, "durationFrames": 100}]} totalDurationFrames={100} imageSrc={staticFile("images/样本偏差/scene_3_3.png")} enterEffect="fadeIn" anchors={[{"text": "并非随机抽样", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={495} durationInFrames={310}>
                <BWCenterFocus content={[{"text": "那些每天起早贪黑挤着沙丁鱼罐头般的地铁、", "startFrame": 0, "durationFrames": 95}, {"text": "吃着十几块钱路边摊、", "startFrame": 94, "durationFrames": 52}, {"text": "为了几千块全勤奖精打细算的沉默大多数，", "startFrame": 146, "durationFrames": 107}, {"text": "他们根本没有精力去发帖。", "startFrame": 253, "durationFrames": 57}]} totalDurationFrames={310} imageSrc={staticFile("images/样本偏差/scene_3_4.png")} enterEffect="slideBottom" anchors={[{"text": "社畜", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={805} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "就算发了，", "startFrame": 0, "durationFrames": 29}, {"text": "也会被算法极其无情地沉入海底。", "startFrame": 28, "durationFrames": 74}]} totalDurationFrames={103} imageSrc={staticFile("images/样本偏差/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "算法", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "沉入海底", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={908} durationInFrames={256}>
                <BWCognitiveShift content={[{"text": "你每天所看到的，", "startFrame": 0, "durationFrames": 41}, {"text": "压根不是生活的常态，", "startFrame": 40, "durationFrames": 62}, {"text": "而是一场经过极度滤镜过滤、", "startFrame": 101, "durationFrames": 68}, {"text": "甚至靠拼单伪造出来的极端财富展览。", "startFrame": 169, "durationFrames": 87}]} totalDurationFrames={256} notText={"生活的常态"} butText={"财富展览"} butSrc={staticFile("images/样本偏差/scene_3_6.png")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/样本偏差/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
