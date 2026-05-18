import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWTextFocus } from "../../../components";

// 剖析：无赖的三重真相
const SCENE_DURATION = 63 + 120 + 123 + 146 + 60 + 78 + 100 + 181 + 30 + 123 + 140 + 137 + 120;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={63}>
                <BWConceptCard content={[{"text": "“搞对立”这个词，", "startFrame": 0, "durationFrames": 30}, {"text": "最无赖的地方在于它的定义模糊。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"搞对立"} anchors={[]} />
            </Sequence>
            <Sequence from={63} durationInFrames={120}>
                <BWBeatSequence content={[{"text": "在法律和公德里，", "startFrame": 0, "durationFrames": 30}, {"text": "造谣有事实标准，", "startFrame": 30, "durationFrames": 30}, {"text": "辱骂有言辞标准。", "startFrame": 60, "durationFrames": 30}, {"text": "但什么是对立？", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={183} durationInFrames={123}>
                <BWPanelGrid content={[{"text": "你说“老板应该给加班费”，", "startFrame": 0, "durationFrames": 30}, {"text": "有人说你煽动劳资对立；", "startFrame": 30, "durationFrames": 30}, {"text": "你说“女性不该在职场被歧视”，", "startFrame": 60, "durationFrames": 33}, {"text": "有人说你制造性别对立。", "startFrame": 93, "durationFrames": 30}]} totalDurationFrames={123} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={306} durationInFrames={146}>
                <BWBeatSequence content={[{"text": "发现了吗？", "startFrame": 0, "durationFrames": 30}, {"text": "只要你提出的观点触及了某个群体的既得利益，", "startFrame": 30, "durationFrames": 46}, {"text": "或者是撕开了社会本来就存在的伤口，", "startFrame": 76, "durationFrames": 37}, {"text": "这个词就会像回旋镖一样飞向你。", "startFrame": 113, "durationFrames": 33}]} totalDurationFrames={146} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={452} durationInFrames={60}>
                <BWCognitiveShift content={[{"text": "它不解决矛盾，", "startFrame": 0, "durationFrames": 30}, {"text": "它只解决那个指出矛盾的人。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} notText={"解决矛盾"} butText={"解决指出矛盾的人"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={512} durationInFrames={78}>
                <BWConceptCard content={[{"text": "这个词的第二个无赖之处，", "startFrame": 0, "durationFrames": 30}, {"text": "是它卑劣地混淆了“呈现矛盾”与“制造矛盾”。", "startFrame": 30, "durationFrames": 48}]} totalDurationFrames={78} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"呈现矛盾与制造矛盾"} anchors={[]} />
            </Sequence>
            <Sequence from={590} durationInFrames={100}>
                <BWBeatSequence content={[{"text": "矛盾是本来就存在的，", "startFrame": 0, "durationFrames": 30}, {"text": "就像脓疮长在身上。", "startFrame": 30, "durationFrames": 30}, {"text": "博主的言论只是那把划开脓疮的柳叶刀。", "startFrame": 60, "durationFrames": 40}]} totalDurationFrames={100} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={690} durationInFrames={181}>
                <BWBeatSequence content={[{"text": "现在的逻辑却是：", "startFrame": 0, "durationFrames": 30}, {"text": "你不划开，", "startFrame": 30, "durationFrames": 30}, {"text": "这病就不存在；", "startFrame": 60, "durationFrames": 30}, {"text": "你一旦划开了，", "startFrame": 90, "durationFrames": 30}, {"text": "脓血流出来了，", "startFrame": 120, "durationFrames": 30}, {"text": "你就是那个“制造伤口”的人。", "startFrame": 150, "durationFrames": 31}]} totalDurationFrames={181} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={871} durationInFrames={30}>
                <BWTextFocus content={[{"text": "这不就是掩耳盗铃吗？", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["这不就是掩耳盗铃吗？"]} coreSentenceAnchors={[{"coreSentenceAnchor": "掩耳盗铃", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={901} durationInFrames={123}>
                <BWBeatSequence content={[{"text": "他们不怪矛盾本身，", "startFrame": 0, "durationFrames": 30}, {"text": "反而怪那个把灯照进黑暗里的人，", "startFrame": 30, "durationFrames": 33}, {"text": "嫌灯光太刺眼，", "startFrame": 63, "durationFrames": 30}, {"text": "嫌阴影太难看。", "startFrame": 93, "durationFrames": 30}]} totalDurationFrames={123} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "fadeIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1024} durationInFrames={140}>
                <BWBeatSequence content={[{"text": "为什么“搞对立”三个字这么好用？", "startFrame": 0, "durationFrames": 35}, {"text": "因为它是一种情绪化的降维打击。", "startFrame": 35, "durationFrames": 33}, {"text": "一旦给你扣上这顶帽子，", "startFrame": 68, "durationFrames": 30}, {"text": "就意味着剥夺了你进行理性辩论的正当性。", "startFrame": 98, "durationFrames": 42}]} totalDurationFrames={140} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn", tone: "alert" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1164} durationInFrames={137}>
                <BWMagnifyingGlass content={[{"text": "无论你的数据多详实、", "startFrame": 0, "durationFrames": 30}, {"text": "逻辑多严密，", "startFrame": 30, "durationFrames": 30}, {"text": "只要对方抛出“你在搞对立”，", "startFrame": 60, "durationFrames": 31}, {"text": "你就瞬间从一个“讨论者”变成了“破坏者”。", "startFrame": 91, "durationFrames": 46}]} totalDurationFrames={137} anchors={[{"text": "破坏者", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1301} durationInFrames={120}>
                <BWCognitiveShift content={[{"text": "它不需要讲理，", "startFrame": 0, "durationFrames": 30}, {"text": "它只需要讲“和谐”—", "startFrame": 30, "durationFrames": 30}, {"text": "一种维持表面平静、", "startFrame": 60, "durationFrames": 30}, {"text": "实则扼杀讨论的虚伪和谐。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} notText={"讲理"} butText={"讲“和谐”"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
