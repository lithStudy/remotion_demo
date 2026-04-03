import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 喝药痊愈的错觉
const SCENE_DURATION = 351 + 268 + 139 + 226 + 354 + 146;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={351}>
                <BWCenterFocus content={[{"text": "你捏着鼻子灌下一大碗苦涩发黑的汤药，", "startFrame": 0, "durationFrames": 96}, {"text": "忍受着胃里的翻江倒海。", "startFrame": 96, "durationFrames": 63}, {"text": "三天后病终于好了，", "startFrame": 158, "durationFrames": 70}, {"text": "你立刻在朋友圈发了条长文，", "startFrame": 228, "durationFrames": 58}, {"text": "感慨老祖宗的智慧就是牛", "startFrame": 285, "durationFrames": 65}]} totalDurationFrames={351} imageSrc={staticFile("images/相关不等于因果/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "老祖宗的智慧", "showFrom": 4, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={351} durationInFrames={268}>
                <BWCenterFocus content={[{"text": "但你根本看不见，", "startFrame": 0, "durationFrames": 38}, {"text": "在你昏睡发汗的时候，", "startFrame": 37, "durationFrames": 48}, {"text": "你体内那套强大的免疫系统，", "startFrame": 85, "durationFrames": 69}, {"text": "是如何不眠不休地疯狂搏杀，", "startFrame": 153, "durationFrames": 64}, {"text": "才帮你夺回了健康的阵地。", "startFrame": 216, "durationFrames": 51}]} totalDurationFrames={268} imageSrc={staticFile("images/相关不等于因果/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "免疫系统", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={619} durationInFrames={139}>
                <BWTextFocus content={[{"text": "我们所有人，", "startFrame": 0, "durationFrames": 29}, {"text": "都极其容易掉进这种看似相关的因果错觉里。", "startFrame": 28, "durationFrames": 111}]} totalDurationFrames={139} coreSentence={"我们容易掉进看似相关的因果错觉里"} coreSentenceAnchors={[{"coreSentenceAnchor": "看似相关", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={758} durationInFrames={226}>
                <BWCognitiveShift content={[{"text": "千万不要觉得这是因为我们缺乏常识，", "startFrame": 0, "durationFrames": 78}, {"text": "这其实是人类大脑在几百万年进化中，", "startFrame": 77, "durationFrames": 75}, {"text": "死死烙印在基因里的补丁缺陷。", "startFrame": 151, "durationFrames": 75}]} totalDurationFrames={226} notText={"缺乏常识"} butText={"基因的补丁缺陷"} butSrc={staticFile("images/相关不等于因果/scene_1_4.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={984} durationInFrames={354}>
                <BWCenterFocus content={[{"text": "在远古时代，", "startFrame": 0, "durationFrames": 34}, {"text": "草丛一动哪怕只是一阵风，", "startFrame": 33, "durationFrames": 71}, {"text": "我们的大脑也被设定为必须马上联想到老虎，", "startFrame": 104, "durationFrames": 98}, {"text": "因为只有强行把先后发生的事情建立因果联系，", "startFrame": 201, "durationFrames": 98}, {"text": "我们的祖先才能保命。", "startFrame": 298, "durationFrames": 55}]} totalDurationFrames={354} imageSrc={staticFile("images/相关不等于因果/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "远古时代", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "草丛一动", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "联想老虎", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}, {"text": "保命", "showFrom": 4, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1338} durationInFrames={146}>
                <BWTextFocus content={[{"text": "但在复杂的现代社会，", "startFrame": 0, "durationFrames": 48}, {"text": "这种生存本能反而成了被别人收割的镰刀。", "startFrame": 48, "durationFrames": 98}]} totalDurationFrames={146} coreSentence={"生存本能成了被收割的镰刀"} coreSentenceAnchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/相关不等于因果/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
