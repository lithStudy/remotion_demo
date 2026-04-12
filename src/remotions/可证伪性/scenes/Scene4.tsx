import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMethodStack, BWTextFocus } from "../../../components";

// 防御锦囊：如何避免被忽悠
const SCENE_DURATION = 155 + 175 + 161 + 122 + 177 + 128 + 136 + 135;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={155}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 19}, {"text": "下次当你再听到那些神乎其神的理论时，", "startFrame": 18, "durationFrames": 79}, {"text": "我送你三个防御锦囊。", "startFrame": 97, "durationFrames": 58}]} totalDurationFrames={155} imageSrc={staticFile("images/可证伪性/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "防御锦囊", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={155} durationInFrames={175}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "看它有没有边界。", "startFrame": 17, "durationFrames": 38}, {"text": "一个包治百病、", "startFrame": 54, "durationFrames": 35}, {"text": "对谁都管用的东西，", "startFrame": 89, "durationFrames": 40}, {"text": "往往对谁都没用。", "startFrame": 128, "durationFrames": 46}]} totalDurationFrames={175} title={"辨别理论边界"} imageSrc={staticFile("images/可证伪性/scene_4_2.png")} notes={[{"text": "看它有没有边界", "showFrom": 1}, {"text": "包治百病往往没用", "showFrom": 2}, {"text": "对谁都管用往往没用", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={330} durationInFrames={161}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 15}, {"text": "问它一个问题：", "startFrame": 14, "durationFrames": 36}, {"text": "如果这个方法失效了，", "startFrame": 50, "durationFrames": 46}, {"text": "你能接受是因为你的理论错了吗？", "startFrame": 96, "durationFrames": 65}]} totalDurationFrames={161} title={"反思理论"} imageSrc={staticFile("images/可证伪性/scene_4_3.png")} notes={[{"text": "如果方法失效", "showFrom": 2}, {"text": "能否接受理论错误", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={491} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "如果对方只会找借口说是你操作不当，", "startFrame": 0, "durationFrames": 77}, {"text": "那就赶紧转身离开。", "startFrame": 76, "durationFrames": 45}]} totalDurationFrames={122} imageSrc={staticFile("images/可证伪性/scene_4_4.png")} enterEffect="slideLeft" anchors={[{"text": "找借口", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "转身离开", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={613} durationInFrames={177}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 21}, {"text": "分清情怀和事实。", "startFrame": 20, "durationFrames": 54}, {"text": "我们可以尊重文化传统，", "startFrame": 74, "durationFrames": 56}, {"text": "但不能用情怀代替实证。", "startFrame": 129, "durationFrames": 47}]} totalDurationFrames={177} title={"分清情怀事实"} imageSrc={staticFile("images/可证伪性/scene_4_5.png")} notes={[{"text": "尊重文化传统", "showFrom": 2}, {"text": "用实证代替情怀", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={790} durationInFrames={128}>
                <BWCognitiveShift content={[{"text": "我们要的是能解决问题的武器，", "startFrame": 0, "durationFrames": 67}, {"text": "而不是一个永远叫不醒的幻觉。", "startFrame": 66, "durationFrames": 62}]} totalDurationFrames={128} notText={"解决问题的"} butText={"叫不醒的"} butSrc={staticFile("images/可证伪性/scene_4_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={918} durationInFrames={136}>
                <BWCognitiveShift content={[{"text": "科学的尊严不在于它从不犯错，", "startFrame": 0, "durationFrames": 79}, {"text": "而在于它敢于承认错误。", "startFrame": 78, "durationFrames": 57}]} totalDurationFrames={136} notText={"从不犯错"} butText={"敢于承认错误"} butSrc={staticFile("images/可证伪性/scene_4_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1054} durationInFrames={135}>
                <BWTextFocus content={[{"text": "做一个清醒的普通人，", "startFrame": 0, "durationFrames": 46}, {"text": "就是从学会质疑那些“永远正确”的鬼话开始。", "startFrame": 45, "durationFrames": 89}]} totalDurationFrames={135} coreSentence={["做一个清醒的普通人，从学会质疑开始"]} coreSentenceAnchors={[{"coreSentenceAnchor": "质疑", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/可证伪性/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
