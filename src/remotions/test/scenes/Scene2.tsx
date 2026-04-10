import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 剖析：幸存者偏差
const SCENE_DURATION = 165 + 105 + 298 + 91 + 94 + 242 + 146 + 269 + 126 + 221;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={165}>
                <BWCenterFocus content={[{"text": "我们总是容易被这种传奇故事深深打动，", "startFrame": 0, "durationFrames": 78}, {"text": "觉得只要复制他们的套路就能逆天改命。", "startFrame": 77, "durationFrames": 88}]} totalDurationFrames={165} imageSrc={staticFile("images/test/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "逆天改命", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={165} durationInFrames={105}>
                <BWCognitiveShift content={[{"text": "但其实你正在被一种隐秘的“沉默”所欺骗。", "startFrame": 0, "durationFrames": 105}]} totalDurationFrames={105} notText={"被沉默欺骗"} butText={"被真相指引"} butSrc={staticFile("images/test/scene_2_2.png")} notContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={270} durationInFrames={298}>
                <BWCognitiveShift content={[{"text": "这不是因为你见识短浅，", "startFrame": 0, "durationFrames": 54}, {"text": "而是因为这个社会只允许胜利者站在聚光灯下大声喧哗，", "startFrame": 53, "durationFrames": 136}, {"text": "而失败者的哀鸣，", "startFrame": 188, "durationFrames": 40}, {"text": "早就被掩盖在时代的废墟之下了。", "startFrame": 228, "durationFrames": 70}]} totalDurationFrames={298} notText={"你见识短浅"} butText={"社会只允许胜利"} butSrc={staticFile("images/test/scene_2_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={568} durationInFrames={91}>
                <BWConceptCard content={[{"text": "这在逻辑学中叫做“幸存者偏差”：", "startFrame": 0, "durationFrames": 91}]} totalDurationFrames={91} imageSrc={staticFile("images/test/scene_2_4.png")} conceptName={"幸存者偏差"} anchors={[]} />
            </Sequence>
            <Sequence from={659} durationInFrames={94}>
                <BWTextFocus content={[{"text": "简单来说，", "startFrame": 0, "durationFrames": 31}, {"text": "就是死人永远不会说话。", "startFrame": 30, "durationFrames": 64}]} totalDurationFrames={94} coreSentence={"简单来说，就是死人永远不会说话。"} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={753} durationInFrames={242}>
                <BWCognitiveShift content={[{"text": "我们在总结成功规律时，", "startFrame": 0, "durationFrames": 55}, {"text": "总是习惯性地盯着那些“活下来”的样本，", "startFrame": 54, "durationFrames": 81}, {"text": "却完全忽略了背后庞大到令人绝望的“分母”。", "startFrame": 135, "durationFrames": 106}]} totalDurationFrames={242} notText={"活下来样本"} butText={"庞大分母"} butSrc={staticFile("images/test/scene_2_6.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={995} durationInFrames={146}>
                <BWCenterFocus content={[{"text": "那个辍学大佬的成功，", "startFrame": 0, "durationFrames": 46}, {"text": "背后可能是万中无一的运气或时代红利。", "startFrame": 45, "durationFrames": 100}]} totalDurationFrames={146} imageSrc={staticFile("images/test/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "辍学大佬", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "时代红利", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1141} durationInFrames={269}>
                <BWCognitiveShift content={[{"text": "但他绝不会在访谈里告诉你，", "startFrame": 0, "durationFrames": 53}, {"text": "还有十万个和他一样毅然辍学的人，", "startFrame": 52, "durationFrames": 69}, {"text": "此刻正消失在茫茫人海，", "startFrame": 121, "durationFrames": 65}, {"text": "在流水线上日复一日地消磨青春。", "startFrame": 185, "durationFrames": 83}]} totalDurationFrames={269} notText={"成功者访谈"} butText={"沉默的大多数"} butSrc={staticFile("images/test/scene_2_8.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1410} durationInFrames={126}>
                <BWCognitiveShift content={[{"text": "你只看到了飞上天的风口猪，", "startFrame": 0, "durationFrames": 57}, {"text": "却没看到摔死在风口下的尸山血海。", "startFrame": 56, "durationFrames": 70}]} totalDurationFrames={126} notText={"风口猪"} butText={"尸山血海"} butSrc={staticFile("images/test/scene_2_9.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={1536} durationInFrames={221}>
                <BWCenterFocus content={[{"text": "这就好比你在医院门口采访，", "startFrame": 0, "durationFrames": 59}, {"text": "得到的结论永远是“这家医院医术高超”，", "startFrame": 58, "durationFrames": 82}, {"text": "因为治不好的病人根本没机会走出大门。", "startFrame": 140, "durationFrames": 80}]} totalDurationFrames={221} imageSrc={staticFile("images/test/scene_2_10.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/test/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
