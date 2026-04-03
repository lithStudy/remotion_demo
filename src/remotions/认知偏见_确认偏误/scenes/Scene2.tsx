import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTimeline } from "../../../components";

// 揭示本质：大脑的认知偏误
const SCENE_DURATION = 93 + 65 + 130;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={93}>
                <BWCenterFocus content={[{"text": "我们总以为自己有一双慧眼。", "startFrame": 0, "durationFrames": 30}, {"text": "能看透互联网上的蝇营狗狗。", "startFrame": 30, "durationFrames": 30}, {"text": "但其实我们都被自己的大脑骗了。", "startFrame": 60, "durationFrames": 33}]} totalDurationFrames={93} imageSrc={staticFile("人们被放大的大脑控制的抽象概念图")} enterEffect="slideBottom" anchors={[{"text": "一双慧眼", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "大脑骗了", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={93} durationInFrames={65}>
                <BWCognitiveShift content={[{"text": "这不是因为我们缺乏判断力。", "startFrame": 0, "durationFrames": 30}, {"text": "而是大脑为了偷懒留下的进化漏洞。", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} notText={"缺乏判断力"} butText={"大脑为了偷懒"} butSrc={staticFile("人脑进行简化计算的抽象示意")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={158} durationInFrames={130}>
                <BWTimeline content={[{"text": "各大平台早就把这个漏洞玩明白了。", "startFrame": 0, "durationFrames": 35}, {"text": "他们精准投喂你爱看的观点。", "startFrame": 35, "durationFrames": 30}, {"text": "把你圈养在舒适的茧房里。", "startFrame": 65, "durationFrames": 30}, {"text": "让你误以为全世界都和你想的一样。", "startFrame": 95, "durationFrames": 35}]} totalDurationFrames={130} images={[{ src: staticFile("社交媒体与算法控制的抽象界面示意"), position: "left", enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("个性化推荐与信息流投喂界面示意"), position: "center", enterEffect: "fadeIn", textIndex: 1 }, { src: staticFile("信息茧房与回声室空间的抽象示意"), position: "right", enterEffect: "slideLeft", textIndex: 2 }]} anchors={[{"text": "大脑漏洞", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "投喂观点", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "信息茧房", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
