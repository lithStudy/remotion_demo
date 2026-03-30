import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 防御锦囊
const SCENE_DURATION = 92 + 200 + 151 + 176;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWCenterFocus content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}, {"text": "给你两个极低门槛的防御锦囊：", "startFrame": 61, "durationFrames": 31}]} totalDurationFrames={92} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={200}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "警惕“情绪画面”。", "startFrame": 30, "durationFrames": 30}, {"text": "下次再被某条新闻吓住或者气到的时候，", "startFrame": 60, "durationFrames": 40}, {"text": "在心里默问自己一句话：", "startFrame": 100, "durationFrames": 30}, {"text": "“这件事是因为普遍发生我才看到，", "startFrame": 130, "durationFrames": 35}, {"text": "还是因为它足够离奇才上了热搜？”", "startFrame": 165, "durationFrames": 35}]} totalDurationFrames={200} title={"警惕情绪画面"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "识别情绪刺激", "showFrom": 1}, {"text": "追问是否只是离奇个案", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={292} durationInFrames={151}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "用数据对抗直觉。", "startFrame": 30, "durationFrames": 30}, {"text": "当大脑告诉你“这很危险”时，", "startFrame": 60, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 91, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 121, "durationFrames": 30}]} totalDurationFrames={151} title={"数据对抗直觉"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "搜集真实数据", "showFrom": 3}, {"text": "让数字接管情绪", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={443} durationInFrames={176}>
                <BWCenterFocus content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，", "startFrame": 0, "durationFrames": 44}, {"text": "学会把“眼见为实”升级为“数据为实”。", "startFrame": 44, "durationFrames": 42}, {"text": "做自己大脑的主人，", "startFrame": 86, "durationFrames": 30}, {"text": "不当流量的提线木偶，", "startFrame": 116, "durationFrames": 30}, {"text": "就是咱们最高级的自我保护。", "startFrame": 146, "durationFrames": 30}]} totalDurationFrames={176} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
