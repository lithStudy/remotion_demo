import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWStepList } from "../../../components";

// 给出方案：防御锦囊
const SCENE_DURATION = 92 + 60 + 140 + 60 + 91;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWCenterFocus content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}, {"text": "给你两个极低门槛的防御锦囊：", "startFrame": 61, "durationFrames": 31}]} totalDurationFrames={92} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={60}>
                <BWStepList content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "警惕“情绪画面”。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} anchors={[]} />
            </Sequence>
            <Sequence from={152} durationInFrames={140}>
                <BWCognitiveShift content={[{"text": "下次再被某条新闻吓住或者气到的时候，", "startFrame": 0, "durationFrames": 40}, {"text": "在心里默问自己一句话：", "startFrame": 40, "durationFrames": 30}, {"text": "“这件事是因为普遍发生我才看到，", "startFrame": 70, "durationFrames": 35}, {"text": "还是因为它足够离奇才上了热搜？”", "startFrame": 105, "durationFrames": 35}]} totalDurationFrames={140} notText={"普遍发生"} butText={"足够离奇"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={292} durationInFrames={60}>
                <BWStepList content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "用数据对抗直觉。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} anchors={[]} />
            </Sequence>
            <Sequence from={352} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "当大脑告诉你“这很危险”时，", "startFrame": 0, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 31, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
