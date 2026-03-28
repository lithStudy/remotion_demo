import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMultiImage, BWTextFocus } from "../../../components";

// 防御锦囊
const SCENE_DURATION = 88 + 161 + 108 + 156;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={88}>
                <BWMultiImage content={[{"text": "既然知道了大脑的这个Bug，咱们以后该怎么保护自己？给你两个极低门槛的防御锦囊：", "startFrame": 0, "durationFrames": 88}]} groups={[{"image": {"src": "大脑简笔画图标"}, "anchor": {"text": "大脑Bug"}}, {"image": {"src": "盾牌简笔画图标"}, "anchor": {"text": "防御锦囊"}}]} images={[{ src: staticFile("images/template/scene1_1.png"), textIndex: 0 }, { src: staticFile("images/template/scene1_1.png"), textIndex: 0 }]} anchors={[{"text": "大脑Bug", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": null}, {"text": "防御锦囊", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": null}]} totalDurationFrames={88} />
            </Sequence>
            <Sequence from={88} durationInFrames={161}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第一，警惕“情绪画面”。下次再被某条新闻吓住或者气到的时候，在心里默问自己一句话：“这件事是因为普遍发生我才看到，还是因为它足够离奇才上了热搜？”", "startFrame": 0, "durationFrames": 161}]} anchors={[]} totalDurationFrames={161} />
            </Sequence>
            <Sequence from={249} durationInFrames={108}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第二，用数据对抗直觉。当大脑告诉你“这很危险”时，随手搜一下真实的统计概率，让理性的数字接管情绪。", "startFrame": 0, "durationFrames": 108}]} anchors={[]} totalDurationFrames={108} />
            </Sequence>
            <Sequence from={357} durationInFrames={156}>
                <BWTextFocus content={[{"text": "在这个满屏都是情绪诱导和流量套路的时代，学会把“眼见为实”升级为“数据为实”。做自己大脑的主人，不当流量的提线木偶，就是咱们最高级的自我保护。", "startFrame": 0, "durationFrames": 156}]} coreSentence={"学会把“眼见为实”升级为“数据为实”"} anchors={[]} totalDurationFrames={156} />
            </Sequence>

        </AbsoluteFill>
    );
};
