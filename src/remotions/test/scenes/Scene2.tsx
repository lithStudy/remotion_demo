import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 剖析：幸存者偏差
const SCENE_DURATION = 80 + 44 + 148 + 35 + 60 + 118 + 70 + 128 + 65 + 112;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={80}>
                <BWCenterFocus content={[{"text": "我们总是容易被这种传奇故事深深打动，", "startFrame": 0, "durationFrames": 40}, {"text": "觉得只要复制他们的套路就能逆天改命。", "startFrame": 40, "durationFrames": 40}]} totalDurationFrames={80} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "逆天改命", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={80} durationInFrames={44}>
                <BWCognitiveShift content={[{"text": "但其实你正在被一种隐秘的“沉默”所欺骗。", "startFrame": 0, "durationFrames": 44}]} totalDurationFrames={44} notText={"被沉默欺骗"} butText={"被真相指引"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={124} durationInFrames={148}>
                <BWCognitiveShift content={[{"text": "这不是因为你见识短浅，", "startFrame": 0, "durationFrames": 30}, {"text": "而是因为这个社会只允许胜利者站在聚光灯下大声喧哗，", "startFrame": 30, "durationFrames": 55}, {"text": "而失败者的哀鸣，", "startFrame": 85, "durationFrames": 30}, {"text": "早就被掩盖在时代的废墟之下了。", "startFrame": 115, "durationFrames": 33}]} totalDurationFrames={148} notText={"你见识短浅"} butText={"社会只允许胜利"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={272} durationInFrames={35}>
                <BWConceptCard content={[{"text": "这在逻辑学中叫做“幸存者偏差”：", "startFrame": 0, "durationFrames": 35}]} totalDurationFrames={35} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"幸存者偏差"} anchors={[]} />
            </Sequence>
            <Sequence from={307} durationInFrames={60}>
                <BWTextFocus content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 30}, {"text": "就是死人永远不会说话。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={"简单来说，就是死人永远不会说话。"} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={367} durationInFrames={118}>
                <BWCognitiveShift content={[{"text": "我们在总结成功规律时，", "startFrame": 0, "durationFrames": 30}, {"text": "总是习惯性地盯着那些“活下来”的样本，", "startFrame": 30, "durationFrames": 42}, {"text": "却完全忽略了背后庞大到令人绝望的“分母”。", "startFrame": 72, "durationFrames": 46}]} totalDurationFrames={118} notText={"活下来样本"} butText={"庞大分母"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={485} durationInFrames={70}>
                <BWCenterFocus content={[{"text": "那个辍学大佬的成功，", "startFrame": 0, "durationFrames": 30}, {"text": "背后可能是万中无一的运气或时代红利。", "startFrame": 30, "durationFrames": 40}]} totalDurationFrames={70} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "辍学大佬", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "时代红利", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={555} durationInFrames={128}>
                <BWCognitiveShift content={[{"text": "但他绝不会在访谈里告诉你，", "startFrame": 0, "durationFrames": 30}, {"text": "还有十万个和他一样毅然辍学的人，", "startFrame": 30, "durationFrames": 35}, {"text": "此刻正消失在茫茫人海，", "startFrame": 65, "durationFrames": 30}, {"text": "在流水线上日复一日地消磨青春。", "startFrame": 95, "durationFrames": 33}]} totalDurationFrames={128} notText={"成功者访谈"} butText={"沉默的大多数"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={683} durationInFrames={65}>
                <BWCognitiveShift content={[{"text": "你只看到了飞上天的风口猪，", "startFrame": 0, "durationFrames": 30}, {"text": "却没看到摔死在风口下的尸山血海。", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} notText={"风口猪"} butText={"尸山血海"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={748} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "这就好比你在医院门口采访，", "startFrame": 0, "durationFrames": 30}, {"text": "得到的结论永远是“这家医院医术高超”，", "startFrame": 30, "durationFrames": 42}, {"text": "因为治不好的病人根本没机会走出大门。", "startFrame": 72, "durationFrames": 40}]} totalDurationFrames={112} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
