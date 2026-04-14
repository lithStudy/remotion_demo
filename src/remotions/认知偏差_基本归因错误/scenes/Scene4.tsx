import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMethodStack } from "../../../components";

// 召唤：两招破局
const SCENE_DURATION = 30 + 60 + 183 + 60 + 60 + 120;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "记住两招。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} imageSrc={staticFile("两个卡通小人握手的简笔画")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={30} durationInFrames={60}>
                <BWMethodStack content={[{"text": "第一招，", "startFrame": 0, "durationFrames": 30}, {"text": "强制外因替代。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} title={"强制外因替代"} imageSrc={staticFile("一个人感到愤怒，另一个人正在经历困难的场景")} notes={[{"text": "第一招", "showFrom": 0}, {"text": "强制外因替代", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={183}>
                <BWCenterFocus content={[{"text": "当你被对方的行为刺痛时，", "startFrame": 0, "durationFrames": 30}, {"text": "立刻在心里默念：", "startFrame": 30, "durationFrames": 30}, {"text": "他可能正经历着我不知道的危机。", "startFrame": 60, "durationFrames": 33}, {"text": "比如，", "startFrame": 93, "durationFrames": 30}, {"text": "他刚才收到了裁员通知，", "startFrame": 123, "durationFrames": 30}, {"text": "或者他刚和家里大吵一架。", "startFrame": 153, "durationFrames": 30}]} totalDurationFrames={183} imageSrc={staticFile("一个人感到悲伤，被箭刺中的卡通形象")} enterEffect="fadeIn" anchors={[{"text": "刺痛", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "危机", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "裁员通知", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={273} durationInFrames={60}>
                <BWCognitiveShift content={[{"text": "用“处境”代替“人品”，", "startFrame": 0, "durationFrames": 30}, {"text": "你的怒火瞬间就会熄灭。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} notText={"人品"} butText={"处境"} butSrc={staticFile("人站在泥泞的道路上")} notContentIndex={0} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={333} durationInFrames={60}>
                <BWMethodStack content={[{"text": "第二招，", "startFrame": 0, "durationFrames": 30}, {"text": "课题分离。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} title={"课题分离"} imageSrc={staticFile("两个人之间划清界限，各自处理自己的事情的示意图")} notes={[{"text": "他的情绪与你无关", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={393} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "他的情绪是他的环境产物，", "startFrame": 0, "durationFrames": 30}, {"text": "与你无关。", "startFrame": 30, "durationFrames": 30}, {"text": "你只需要观察，", "startFrame": 60, "durationFrames": 30}, {"text": "不需要负责。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("情绪波动的人的简笔画")} enterEffect="fadeIn" anchors={[{"text": "课题分离", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
