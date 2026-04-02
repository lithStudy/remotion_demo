import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 统计学上的偏差
const SCENE_DURATION = 81 + 112 + 46 + 146 + 63 + 127;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={81}>
                <BWConceptCard content={[{"text": "在社会统计学上，", "startFrame": 0, "durationFrames": 30}, {"text": "这种残忍的错觉叫做样本代表性缺失和幸存者偏差。", "startFrame": 30, "durationFrames": 51}]} totalDurationFrames={81} imageSrc={staticFile("认知偏差简笔画图标")} conceptName={"样本代表性缺失和幸存者偏差"} anchors={[]} />
            </Sequence>
            <Sequence from={81} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "你必须明白一个硬核真相，", "startFrame": 0, "durationFrames": 30}, {"text": "想要了解一个群体的真实面貌，", "startFrame": 30, "durationFrames": 31}, {"text": "你抽样出来的样本必须是整体社会的完美微缩模型。", "startFrame": 61, "durationFrames": 51}]} totalDurationFrames={112} imageSrc={staticFile("人们围在一起讨论统计数据的简笔画")} enterEffect="fadeIn" anchors={[{"text": "硬核真相", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "真实面貌", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}, {"text": "微缩模型", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={193} durationInFrames={46}>
                <BWCenterFocus content={[{"text": "但社交媒体的展示机制从来就不是随机抽样的。", "startFrame": 0, "durationFrames": 46}]} totalDurationFrames={46} imageSrc={staticFile("社交媒体信息流的界面")} enterEffect="fadeIn" anchors={[{"text": "随机抽样", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={239} durationInFrames={146}>
                <BWCenterFocus content={[{"text": "那些每天起早贪黑挤着沙丁鱼罐头般的地铁、", "startFrame": 0, "durationFrames": 44}, {"text": "吃着十几块钱路边摊、", "startFrame": 44, "durationFrames": 30}, {"text": "为了几千块全勤奖精打细算的沉默大多数，", "startFrame": 74, "durationFrames": 42}, {"text": "他们根本没有精力去发帖。", "startFrame": 116, "durationFrames": 30}]} totalDurationFrames={146} imageSrc={staticFile("拥挤的地铁车厢，人们疲惫不堪的表情")} enterEffect="slideBottom" anchors={[{"text": "社畜", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={385} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "就算发了，", "startFrame": 0, "durationFrames": 30}, {"text": "也会被算法极其无情地沉入海底。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("无情的算法将信息沉入海底的抽象概念图")} enterEffect="fadeIn" anchors={[{"text": "算法", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "沉入海底", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={448} durationInFrames={127}>
                <BWCognitiveShift content={[{"text": "你每天所看到的，", "startFrame": 0, "durationFrames": 30}, {"text": "压根不是生活的常态，", "startFrame": 30, "durationFrames": 30}, {"text": "而是一场经过极度滤镜过滤、", "startFrame": 60, "durationFrames": 30}, {"text": "甚至靠拼单伪造出来的极端财富展览。", "startFrame": 90, "durationFrames": 37}]} totalDurationFrames={127} notText={"生活的常态"} butText={"财富展览"} butSrc={staticFile("极度奢华的晚宴场景")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
