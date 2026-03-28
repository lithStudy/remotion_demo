import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWStepList, BWTextFocus } from "../../../components";

// 提供防御方法
const SCENE_DURATION = 92 + 210 + 121 + 128;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}, {"text": "给你两个极低门槛的防御锦囊：", "startFrame": 61, "durationFrames": 31}]} anchors={[{"text": "Bug", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={92} />
            </Sequence>
            <Sequence from={92} durationInFrames={210}>
                <BWStepList content={[{"text": "第一，警惕“情绪画面”。", "startFrame": 0, "durationFrames": 30}, {"text": "下次再被某条新闻吓住", "startFrame": 30, "durationFrames": 30}, {"text": "或者气到的时候，", "startFrame": 60, "durationFrames": 30}, {"text": "在心里默问自己一句话：", "startFrame": 90, "durationFrames": 30}, {"text": "“这件事是因为普遍发生", "startFrame": 120, "durationFrames": 30}, {"text": "我才看到，还是因为它", "startFrame": 150, "durationFrames": 30}, {"text": "足够离奇才上了热搜？”", "startFrame": 180, "durationFrames": 30}]} anchors={[{"text": "情绪画面", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={210} />
            </Sequence>
            <Sequence from={302} durationInFrames={121}>
                <BWStepList content={[{"text": "第二，用数据对抗直觉。", "startFrame": 0, "durationFrames": 30}, {"text": "当大脑告诉你“这很危险”时，", "startFrame": 30, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 61, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 91, "durationFrames": 30}]} anchors={[{"text": "数据", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "直觉", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "危险", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "统计概率", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": null}]} totalDurationFrames={121} />
            </Sequence>
            <Sequence from={423} durationInFrames={128}>
                <BWTextFocus content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，", "startFrame": 0, "durationFrames": 44}, {"text": "学会把“眼见为实”升级为“数据为实”。", "startFrame": 44, "durationFrames": 42}, {"text": "做自己大脑的主人，不当流量的提线木偶，", "startFrame": 86, "durationFrames": 42}]} coreSentence={"学会把“眼见为实”升级为“数据为实”"} anchors={[{"text": "数据为实", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} totalDurationFrames={128} />
            </Sequence>

        </AbsoluteFill>
    );
};
