import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 可得性启发
const SCENE_DURATION = 67 + 138 + 138 + 101 + 72 + 40;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWConceptCard content={[{"text": "学术界给这种大脑的错觉起了个名字。", "startFrame": 0, "durationFrames": 37}, {"text": "叫做可得性启发。", "startFrame": 37, "durationFrames": 30}]} totalDurationFrames={67} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"可得性启发"} anchors={[]} />
            </Sequence>
            <Sequence from={67} durationInFrames={138}>
                <BWCognitiveShift content={[{"text": "说白了就是大脑在极度偷懒。", "startFrame": 0, "durationFrames": 30}, {"text": "我们在判断一件事情发生的概率时。", "startFrame": 30, "durationFrames": 35}, {"text": "往往不去看枯燥真实的统计数据。", "startFrame": 65, "durationFrames": 33}, {"text": "而是看这件事在脑子里想起来有多容易。", "startFrame": 98, "durationFrames": 40}]} totalDurationFrames={138} notText={"看统计数据"} butText={"脑子里想容易"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={205} durationInFrames={138}>
                <BWCenterFocus content={[{"text": "因为空难极其惨烈且被疯狂报道。", "startFrame": 0, "durationFrames": 33}, {"text": "所以它在你的记忆库里特别鲜活。", "startFrame": 33, "durationFrames": 33}, {"text": "你的大脑一秒钟就能调取恐怖画面。", "startFrame": 66, "durationFrames": 35}, {"text": "于是立刻得出坐飞机随时会掉的结论。", "startFrame": 101, "durationFrames": 37}]} totalDurationFrames={138} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "空难", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "记忆鲜活", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}, {"text": "恐怖画面", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": null}, {"text": "坠机结论", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={343} durationInFrames={101}>
                <BWCognitiveShift content={[{"text": "但事实上车祸的死亡人数要多得多。", "startFrame": 0, "durationFrames": 35}, {"text": "只因为车祸太常见上不了头条。", "startFrame": 35, "durationFrames": 31}, {"text": "你的大脑就自动忽略了它的危险性。", "startFrame": 66, "durationFrames": 35}]} totalDurationFrames={101} notText={"车祸死亡人数少"} butText={"车祸死亡人数多"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={444} durationInFrames={72}>
                <BWCognitiveShift content={[{"text": "同理凶杀案频发让你觉得治安极差。", "startFrame": 0, "durationFrames": 35}, {"text": "却没想过慢性病才是真正的隐形杀手。", "startFrame": 35, "durationFrames": 37}]} totalDurationFrames={72} notText={"治安极差"} butText={"慢性病是杀手"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={516} durationInFrames={40}>
                <BWTextFocus content={[{"text": "就像靠新闻联播来判断天气注定会出错。", "startFrame": 0, "durationFrames": 40}]} totalDurationFrames={40} coreSentence={"就像靠新闻联播来判断天气注定会出错。"} coreSentenceAnchors={[{"coreSentenceAnchor": "新闻联播", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
