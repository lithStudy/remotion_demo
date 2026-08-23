import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWKpiHero, BWTextFocus, BWTimeline } from "../../../components";

// 反转·农夫与蛇的掠夺
const SCENE_DURATION = 155 + 152 + 149 + 68 + 281 + 99 + 223;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={155}>
                <BWCenterFocus content={[{"text": "但是，最讽刺的一幕正在发生", "startFrame": 0, "durationFrames": 71}, {"text": "某些巨头，", "startFrame": 70, "durationFrames": 32}, {"text": "正在上演“农夫与蛇”的故事。", "startFrame": 102, "durationFrames": 53}]} totalDurationFrames={155} imageSrc={staticFile("images/开源精神/scene_7_1.png")} enterEffect="fadeIn" anchors={[{"text": "农夫与蛇", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={155} durationInFrames={152}>
                <BWKpiHero content={[{"text": "他们利用全球 11 亿次 的年度开源贡献，", "startFrame": 0, "durationFrames": 103}, {"text": "像海绵一样吸取养分。", "startFrame": 102, "durationFrames": 49}]} totalDurationFrames={152} value={11} prefix={"全球 "} suffix={"亿次"} label={"年度开源贡献"} />
            </Sequence>
            <Sequence from={307} durationInFrames={149}>
                <BWBeatSequence content={[{"text": "等自己长肥了，", "startFrame": 0, "durationFrames": 34}, {"text": "却反手给代码加上锁，", "startFrame": 33, "durationFrames": 58}, {"text": "宣称这是“自主研发”。", "startFrame": 91, "durationFrames": 57}]} totalDurationFrames={149} stages={[{ imageSrc: staticFile("images/开源精神/scene_7_3_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/开源精神/scene_7_3_img1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/开源精神/scene_7_3_img2.png"), enterEffect: "zoomIn", tone: "alert" }]} />
            </Sequence>
            <Sequence from={456} durationInFrames={68}>
                <BWCognitiveShift content={[{"text": "这不叫竞争，", "startFrame": 0, "durationFrames": 33}, {"text": "这叫掠夺。", "startFrame": 32, "durationFrames": 35}]} totalDurationFrames={68} notText={"竞争"} butText={"掠夺"} butSrc={staticFile("images/开源精神/scene_7_4.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={524} durationInFrames={281}>
                <BWBeatSequence content={[{"text": "如果没有开源的底座，", "startFrame": 0, "durationFrames": 47}, {"text": "这些大厂甚至连科技的门都摸不着。", "startFrame": 46, "durationFrames": 73}, {"text": "现在他们却想在公用水井口修收费站，", "startFrame": 119, "durationFrames": 82}, {"text": "还要宣布这口井是他们家祖传的。", "startFrame": 201, "durationFrames": 80}]} totalDurationFrames={281} stages={[{ imageSrc: staticFile("images/开源精神/scene_7_5_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/开源精神/scene_7_5_img1.png"), enterEffect: "slideLeft", tone: "alert" }, { imageSrc: staticFile("images/开源精神/scene_7_5_img2.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/开源精神/scene_7_5_img3.png"), enterEffect: "zoomIn", tone: "alert" }]} />
            </Sequence>
            <Sequence from={805} durationInFrames={99}>
                <BWTextFocus content={[{"text": "这种行为，", "startFrame": 0, "durationFrames": 27}, {"text": "正在摧毁人类协作的底层信任。", "startFrame": 26, "durationFrames": 72}]} totalDurationFrames={99} coreSentence={["这种行为，", "正在摧毁人类协作的底层信任。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "摧毁人类协作的底层信任", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={904} durationInFrames={223}>
                <BWTimeline content={[{"text": "一旦开源精神消失，", "startFrame": 0, "durationFrames": 44}, {"text": "我们将退回“科技中世纪”。", "startFrame": 43, "durationFrames": 53}, {"text": "每个人都要重新去发明轮子，", "startFrame": 96, "durationFrames": 56}, {"text": "每个人都要支付昂贵的“技术智商税”。", "startFrame": 152, "durationFrames": 71}]} totalDurationFrames={223} images={[{ src: staticFile("images/开源精神/scene_7_7_img0.png"), enterEffect: "fadeIn", textIndex: 0 }, { src: staticFile("images/开源精神/scene_7_7_img1.png"), enterEffect: "fadeIn", textIndex: 2 }, { src: staticFile("images/开源精神/scene_7_7_img2.png"), enterEffect: "fadeIn", textIndex: 3 }]} />
            </Sequence>
            <Audio src={staticFile("/audio/开源精神/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
