import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMultiImage } from "../../../components";

// 提供防御锦囊：警惕情绪画面，用数据对抗直觉
const SCENE_DURATION = 61 + 31 + 164 + 121;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "既然知道了大脑的这个Bug，", "startFrame": 0, "durationFrames": 31}, {"text": "咱们以后该怎么保护自己？", "startFrame": 31, "durationFrames": 30}]} anchors={[{"text": "大脑", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "Bug", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={61} durationInFrames={31}>
                <BWMultiImage content={[{"text": "给你两个极低门槛的防御锦囊：", "startFrame": 0, "durationFrames": 31}]} groups={[{"image": {"src": "两个打开的宝箱，里面是卷轴和金币"}, "anchor": {"text": "防御锦囊"}}]} images={[{ src: staticFile("images/template/scene1_1.png") }]} anchors={[]} totalDurationFrames={31} />
            </Sequence>
            <Sequence from={92} durationInFrames={164}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第一，警惕“情绪画面”。", "startFrame": 0, "durationFrames": 30}, {"text": "下次再被某条新闻吓住或者气到的时候，", "startFrame": 30, "durationFrames": 40}, {"text": "在心里默问自己一句话：“这件事是因为普遍发生我才看到，", "startFrame": 70, "durationFrames": 59}, {"text": "还是因为它足够离奇才上了热搜？”", "startFrame": 129, "durationFrames": 35}]} anchors={[]} totalDurationFrames={164} />
            </Sequence>
            <Sequence from={256} durationInFrames={121}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "第二，用数据对抗直觉。", "startFrame": 0, "durationFrames": 30}, {"text": "当大脑告诉你“这很危险”时，", "startFrame": 30, "durationFrames": 31}, {"text": "随手搜一下真实的统计概率，", "startFrame": 61, "durationFrames": 30}, {"text": "让理性的数字接管情绪。", "startFrame": 91, "durationFrames": 30}]} anchors={[]} totalDurationFrames={121} />
            </Sequence>

        </AbsoluteFill>
    );
};
