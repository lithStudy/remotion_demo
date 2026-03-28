import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMultiImage } from "../../../components";

// 提供防御策略
const SCENE_DURATION = 61 + 31 + 30 + 140 + 30 + 91;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "Bug", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={61} durationInFrames={31}>
                <BWMultiImage content={[{"text": "给你两个极低门槛的防御锦囊：", "startFrame": 0, "durationFrames": 31}]} groups={[{"image": {"src": "锦囊妙计简笔画图标1", "textIndex": 0}, "anchor": {"text": "防御锦囊", "audioEffect": "ping"}}, {"image": {"src": "锦囊妙计简笔画图标2", "textIndex": 0}}]} images={[{ src: staticFile("images/template/scene1_1.png"), textIndex: 0 }, { src: staticFile("images/template/scene1_1.png"), textIndex: 0 }]} anchors={[{"text": "防御锦囊", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} totalDurationFrames={31} />
            </Sequence>
            <Sequence from={92} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "第一，警惕“情绪画面”。", "startFrame": 0, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={122} durationInFrames={140}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "下次再被某条新闻吓住或者气到的时候，", "startFrame": 0, "durationFrames": 40}, {"text": "在心里默问自己一句话：“这件事是", "startFrame": 40, "durationFrames": 35}, {"text": "因为普遍发生我才看到，还是因为它", "startFrame": 75, "durationFrames": 35}, {"text": "足够离奇才上了热搜？”", "startFrame": 110, "durationFrames": 30}]} anchors={[]} totalDurationFrames={140} />
            </Sequence>
            <Sequence from={262} durationInFrames={30}>
                <BWCenterFocus content={[{"text": "第二，用数据对抗直觉。", "startFrame": 0, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={292} durationInFrames={91}>
                <BWCenterFocus content={[{"text": "当大脑告诉你“这很危险”时，", "startFrame": 0, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 31, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 61, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "这很危险", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "统计概率", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "数字", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": null}]} totalDurationFrames={91} />
            </Sequence>

        </AbsoluteFill>
    );
};
