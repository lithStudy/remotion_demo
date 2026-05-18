import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWKpiHero, BWTextFocus, BWTimeline } from "../../../components";

// 反转·农夫与蛇的掠夺
const SCENE_DURATION = 170 + 143 + 140 + 62 + 306 + 103 + 241;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={170}>
                <BWCenterFocus content={[{"text": "但是，最讽刺的一幕正在发生", "startFrame": 0, "durationFrames": 77}, {"text": "某些巨头，", "startFrame": 76, "durationFrames": 30}, {"text": "正在上演“农夫与蛇”的故事。", "startFrame": 105, "durationFrames": 64}]} totalDurationFrames={170} imageSrc={staticFile("images/开源精神/scene_7_1.png")} enterEffect="fadeIn" anchors={[{"text": "农夫与蛇", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={170} durationInFrames={143}>
                <BWKpiHero content={[{"text": "他们利用全球 11 亿次 的年度开源贡献，", "startFrame": 0, "durationFrames": 88}, {"text": "像海绵一样吸取养分。", "startFrame": 87, "durationFrames": 56}]} totalDurationFrames={143} value={11} prefix={"全球 "} suffix={"亿次"} label={"年度开源贡献"} />
            </Sequence>
            <Sequence from={313} durationInFrames={140}>
                <BWBeatSequence content={[{"text": "等自己长肥了，", "startFrame": 0, "durationFrames": 36}, {"text": "却反手给代码加上锁，", "startFrame": 36, "durationFrames": 51}, {"text": "宣称这是“自主研发”。", "startFrame": 86, "durationFrames": 54}]} totalDurationFrames={140} stages={[{ imageSrc: staticFile("images/开源精神/scene_7_3_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/开源精神/scene_7_3_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/开源精神/scene_7_3_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} />
            </Sequence>
            <Sequence from={453} durationInFrames={62}>
                <BWCognitiveShift content={[{"text": "这不叫竞争，", "startFrame": 0, "durationFrames": 31}, {"text": "这叫掠夺。", "startFrame": 30, "durationFrames": 32}]} totalDurationFrames={62} notText={"竞争"} butText={"掠夺"} butSrc={staticFile("images/开源精神/scene_7_4.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={515} durationInFrames={306}>
                <BWBeatSequence content={[{"text": "如果没有开源的底座，", "startFrame": 0, "durationFrames": 47}, {"text": "这些大厂甚至连科技的门都摸不着。", "startFrame": 46, "durationFrames": 86}, {"text": "现在他们却想在公用水井口修收费站，", "startFrame": 132, "durationFrames": 93}, {"text": "还要宣布这口井是他们家祖传的。", "startFrame": 224, "durationFrames": 81}]} totalDurationFrames={306} stages={[{ imageSrc: staticFile("images/开源精神/scene_7_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/开源精神/scene_7_5_img1.png"), enterEffect: "slideLeft", tone: "alert" }, { imageSrc: staticFile("images/开源精神/scene_7_5_img2.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/开源精神/scene_7_5_img3.png"), enterEffect: "zoomIn", tone: "alert" }]} />
            </Sequence>
            <Sequence from={821} durationInFrames={103}>
                <BWTextFocus content={[{"text": "这种行为，", "startFrame": 0, "durationFrames": 28}, {"text": "正在摧毁人类协作的底层信任。", "startFrame": 27, "durationFrames": 76}]} totalDurationFrames={103} coreSentence={["这种行为，正在摧毁人类协作的底层信任。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "摧毁人类协作的底层信任", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={924} durationInFrames={241}>
                <BWTimeline content={[{"text": "一旦开源精神消失，", "startFrame": 0, "durationFrames": 50}, {"text": "我们将退回“科技中世纪”。", "startFrame": 49, "durationFrames": 63}, {"text": "每个人都要重新去发明轮子，", "startFrame": 111, "durationFrames": 59}, {"text": "每个人都要支付昂贵的“技术智商税”。", "startFrame": 170, "durationFrames": 71}]} totalDurationFrames={241} images={[{ src: staticFile("images/开源精神/scene_7_7_img0.png"), enterEffect: "fadeIn", textIndex: 0 }, { src: staticFile("images/开源精神/scene_7_7_img1.png"), enterEffect: "fadeIn", textIndex: 2 }, { src: staticFile("images/开源精神/scene_7_7_img2.png"), enterEffect: "fadeIn", textIndex: 3 }]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
