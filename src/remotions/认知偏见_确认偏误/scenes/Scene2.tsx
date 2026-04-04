import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTimeline } from "../../../components";

// 揭示本质：大脑的认知偏误
const SCENE_DURATION = 219 + 142 + 278;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={219}>
                <BWCenterFocus content={[{"text": "我们总以为自己有一双慧眼。", "startFrame": 0, "durationFrames": 63}, {"text": "能看透互联网上的蝇营狗狗。", "startFrame": 62, "durationFrames": 73}, {"text": "但其实我们都被自己的大脑骗了。", "startFrame": 134, "durationFrames": 84}]} totalDurationFrames={219} imageSrc={staticFile("images/认知偏见_确认偏误/scene_2_1.png")} enterEffect="slideBottom" anchors={[{"text": "一双慧眼", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "大脑骗了", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={219} durationInFrames={142}>
                <BWCognitiveShift content={[{"text": "这不是因为我们缺乏判断力。", "startFrame": 0, "durationFrames": 59}, {"text": "而是大脑为了偷懒留下的进化漏洞。", "startFrame": 58, "durationFrames": 83}]} totalDurationFrames={142} notText={"缺乏判断力"} butText={"大脑为了偷懒"} butSrc={staticFile("images/认知偏见_确认偏误/scene_2_2.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={361} durationInFrames={278}>
                <BWTimeline content={[{"text": "各大平台早就把这个漏洞玩明白了。", "startFrame": 0, "durationFrames": 75}, {"text": "他们精准投喂你爱看的观点。", "startFrame": 74, "durationFrames": 70}, {"text": "把你圈养在舒适的茧房里。", "startFrame": 144, "durationFrames": 61}, {"text": "让你误以为全世界都和你想的一样。", "startFrame": 204, "durationFrames": 73}]} totalDurationFrames={278} images={[{ src: staticFile("images/认知偏见_确认偏误/scene_2_3_img0.png"), position: "left", enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("images/认知偏见_确认偏误/scene_2_3_img1.png"), position: "center", enterEffect: "fadeIn", textIndex: 1 }, { src: staticFile("images/认知偏见_确认偏误/scene_2_3_img2.png"), position: "right", enterEffect: "slideLeft", textIndex: 2 }]} anchors={[{"text": "大脑漏洞", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "投喂观点", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "信息茧房", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
