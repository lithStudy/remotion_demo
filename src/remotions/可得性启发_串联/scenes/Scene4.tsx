import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMultiImage, BWTextFocus } from "../../../components";

// 提供防御方法
const SCENE_DURATION = 61 + 31 + 60 + 140 + 60 + 91 + 86 + 90;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={61} durationInFrames={31}>
                <BWMultiImage content={[{"text": "给你两个极低门槛的防御锦囊：", "startFrame": 0, "durationFrames": 31}]} totalDurationFrames={31} groups={[{"textIndex": 0, "image": {"src": "防御盾牌的卡通图标"}, "anchor": {"text": "防御锦囊", "color": "#000000", "anim": "highlight", "audioEffect": "ping"}}, {"textIndex": 0, "image": {"src": "礼物盒卡通图标"}}]} anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "警惕“情绪画面”。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={152} durationInFrames={140}>
                <BWCognitiveShift content={[{"text": "下次再被某条新闻吓住或者气到的时候，", "startFrame": 0, "durationFrames": 40}, {"text": "在心里默问自己一句话：", "startFrame": 40, "durationFrames": 30}, {"text": "“这件事是因为普遍发生我才看到，", "startFrame": 70, "durationFrames": 35}, {"text": "还是因为它足够离奇才上了热搜？”", "startFrame": 105, "durationFrames": 35}]} totalDurationFrames={140} notText={"普遍发生我才看到"} butText={"足够离奇才上了热搜"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={292} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "用数据对抗直觉。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[]} />
            </Sequence>
            <Sequence from={352} durationInFrames={91}>
                <BWCognitiveShift content={[{"text": "当大脑告诉你“这很危险”时，", "startFrame": 0, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 31, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} notText={"这很危险"} butText={"真实的统计概率"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={443} durationInFrames={86}>
                <BWCognitiveShift content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，", "startFrame": 0, "durationFrames": 44}, {"text": "学会把“眼见为实”升级为“数据为实”。", "startFrame": 44, "durationFrames": 42}]} totalDurationFrames={86} notText={"眼见为实"} butText={"数据为实"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={529} durationInFrames={90}>
                <BWTextFocus content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30}, {"text": "不当流量的提线木偶，", "startFrame": 30, "durationFrames": 30}, {"text": "就是咱们最高级的自我保护。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} coreSentence={"做自己大脑的主人，不当流量的提线木偶"} anchors={[{"text": "大脑的主人", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "提线木偶", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
