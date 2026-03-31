import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble, BWConceptCard, BWMethodStack, BWSplitCompare } from "../../../components";

// 防御方法
const SCENE_DURATION = 61 + 31 + 60 + 140 + 60 + 91 + 86 + 90;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWChatBubble content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} anchors={[]} />
            </Sequence>
            <Sequence from={61} durationInFrames={31}>
                <BWCenterFocus content={[{"text": "给你两个极低门槛的防御锦囊：", "startFrame": 0, "durationFrames": 31}]} totalDurationFrames={31} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={60}>
                <BWConceptCard content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "警惕“情绪画面”。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"情绪画面"} anchors={[]} />
            </Sequence>
            <Sequence from={152} durationInFrames={140}>
                <BWMethodStack content={[{"text": "下次再被某条新闻吓住或者气到的时候，", "startFrame": 0, "durationFrames": 40}, {"text": "在心里默问自己一句话：", "startFrame": 40, "durationFrames": 30}, {"text": "“这件事是因为普遍发生我才看到，", "startFrame": 70, "durationFrames": 35}, {"text": "还是因为它足够离奇才上了热搜？”", "startFrame": 105, "durationFrames": 35}]} totalDurationFrames={140} title={"警惕情绪画面"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "识别情绪刺激", "showFrom": 0}, {"text": "追问是否离奇个案", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={292} durationInFrames={60}>
                <BWConceptCard content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "用数据对抗直觉。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"数据对抗直觉"} anchors={[]} />
            </Sequence>
            <Sequence from={352} durationInFrames={91}>
                <BWMethodStack content={[{"text": "当大脑告诉你“这很危险”时，", "startFrame": 0, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 31, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} title={"数据对抗直觉"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "搜一下统计概率", "showFrom": 1}, {"text": "让数字接管情绪", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={443} durationInFrames={86}>
                <BWSplitCompare content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，", "startFrame": 0, "durationFrames": 44}, {"text": "学会把“眼见为实”升级为“数据为实”。", "startFrame": 44, "durationFrames": 42}]} totalDurationFrames={86} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"眼见为实"} rightLabel={"数据为实"} anchors={[]} />
            </Sequence>
            <Sequence from={529} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30}, {"text": "不当流量的提线木偶，", "startFrame": 30, "durationFrames": 30}, {"text": "就是咱们最高级的自我保护。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
