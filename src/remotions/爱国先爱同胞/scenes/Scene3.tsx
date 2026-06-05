import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWTextFocus, BWTreeDiagram } from "../../../components";

// 剖析：道德许可与错位
const SCENE_DURATION = 330 + 138 + 108 + 260 + 331 + 212 + 283 + 88 + 261 + 113 + 269 + 148;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={330}>
                <BWCaseBreakdown content={[{"text": "但更讽刺的是，", "startFrame": 0, "durationFrames": 33}, {"text": "这些人从来不觉得自己有问题。", "startFrame": 32, "durationFrames": 55}, {"text": "他们觉得自己在“捍卫大义”。", "startFrame": 87, "durationFrames": 59}, {"text": "你问他，为什么国家要进口日本车？", "startFrame": 146, "durationFrames": 75}, {"text": "为什么国家要让外国人在中国办厂？", "startFrame": 220, "durationFrames": 75}, {"text": "他也说不出来。", "startFrame": 294, "durationFrames": 35}]} totalDurationFrames={330} title={"正义幻觉"} imageSrc={staticFile("images/爱国先爱同胞/scene_3_6.png")} phases={[{"phaseLabel": "自我辩护", "showFrom": 1}, {"phaseLabel": "国家进口", "showFrom": 3}, {"phaseLabel": "外国办厂", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={330} durationInFrames={138}>
                <BWPanelGrid content={[{"text": "但他可以理直气壮地砸同胞的车、", "startFrame": 0, "durationFrames": 64}, {"text": "骂同胞的选择、", "startFrame": 63, "durationFrames": 35}, {"text": "审判同胞的生活。", "startFrame": 98, "durationFrames": 40}]} totalDurationFrames={138} panels={[{ src: staticFile("images/爱国先爱同胞/scene_3_7_img0.png"), showFrom: 0, enterEffect: "slideBottom" }, { src: staticFile("images/爱国先爱同胞/scene_3_7_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/爱国先爱同胞/scene_3_7_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={468} durationInFrames={108}>
                <BWCognitiveShift content={[{"text": "他们爱的不是国，", "startFrame": 0, "durationFrames": 36}, {"text": "是那个“我很爱国”的身份标签。", "startFrame": 36, "durationFrames": 72}]} totalDurationFrames={108} notText={"爱的是国家"} butText={"爱的是“爱国标签”"} butSrc={staticFile("images/爱国先爱同胞/scene_3_8.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={576} durationInFrames={260}>
                <BWConceptCard content={[{"text": "因为有了这个标签，", "startFrame": 0, "durationFrames": 39}, {"text": "他就可以站在道德制高点上，", "startFrame": 38, "durationFrames": 62}, {"text": "对任何一个普通人指手画脚。", "startFrame": 99, "durationFrames": 59}, {"text": "这种心理机制，", "startFrame": 158, "durationFrames": 38}, {"text": "心理学上叫“道德许可效应”。", "startFrame": 195, "durationFrames": 65}]} totalDurationFrames={260} imageSrc={staticFile("images/爱国先爱同胞/scene_3_10.png")} conceptName={"道德许可效应"} anchors={[]} />
            </Sequence>
            <Sequence from={836} durationInFrames={331}>
                <BWCauseChain content={[{"text": "当一个人给自己贴上“爱国者”的标签，", "startFrame": 0, "durationFrames": 70}, {"text": "他就觉得自己获得了某种道德特权。", "startFrame": 69, "durationFrames": 70}, {"text": "他可以心安理得地伤害那些“不够爱国”的人，", "startFrame": 139, "durationFrames": 86}, {"text": "因为在他眼里，", "startFrame": 224, "durationFrames": 35}, {"text": "那些人是“敌人”，", "startFrame": 259, "durationFrames": 38}, {"text": "不是“同胞”。", "startFrame": 296, "durationFrames": 34}]} totalDurationFrames={331} layout={"horizontal"} nodes={[{ label: "自我标签化", imageSrc: staticFile("images/爱国先爱同胞/scene_3_11_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "道德特权", imageSrc: staticFile("images/爱国先爱同胞/scene_3_11_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "伤害他人", imageSrc: staticFile("images/爱国先爱同胞/scene_3_11_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "视作敌人", imageSrc: staticFile("images/爱国先爱同胞/scene_3_11_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1167} durationInFrames={212}>
                <BWCenterFocus content={[{"text": "他把复杂的社会议题简化成非黑即白的站队游戏，", "startFrame": 0, "durationFrames": 113}, {"text": "把活生生的人简化成“爱国”和“不爱国”两类。", "startFrame": 112, "durationFrames": 100}]} totalDurationFrames={212} imageSrc={staticFile("images/爱国先爱同胞/scene_3_12.png")} enterEffect="fadeIn" anchors={[{"text": "站队游戏", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1379} durationInFrames={283}>
                <BWCauseChain content={[{"text": "这种简化让他获得了一种虚假的掌控感。", "startFrame": 0, "durationFrames": 84}, {"text": "他不需要思考，", "startFrame": 83, "durationFrames": 33}, {"text": "不需要判断，", "startFrame": 116, "durationFrames": 30}, {"text": "只需要跟着喊口号，", "startFrame": 146, "durationFrames": 50}, {"text": "就能获得一种“我是好人”的自我安慰。", "startFrame": 195, "durationFrames": 88}]} totalDurationFrames={283} layout={"horizontal"} nodes={[{ label: "虚假掌控", imageSrc: staticFile("images/爱国先爱同胞/scene_3_13_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "省略思考", imageSrc: staticFile("images/爱国先爱同胞/scene_3_13_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "跟喊口号", imageSrc: staticFile("images/爱国先爱同胞/scene_3_13_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "自我安慰", imageSrc: staticFile("images/爱国先爱同胞/scene_3_13_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1662} durationInFrames={88}>
                <BWTreeDiagram content={[{"text": "这就是问题的第一层：", "startFrame": 0, "durationFrames": 53}, {"text": "道德错位。", "startFrame": 52, "durationFrames": 35}]} totalDurationFrames={88} root={{ label: "伪爱国", showFrom: 0, children: [{ label: "道德错位", showFrom: 1 }] }} anchors={[]} />
            </Sequence>
            <Sequence from={1750} durationInFrames={261}>
                <BWCognitiveShift content={[{"text": "他们把“爱国大义高于一切”当成免罪金牌，", "startFrame": 0, "durationFrames": 96}, {"text": "可国家从来不是一句悬在空中的口号，", "startFrame": 96, "durationFrames": 80}, {"text": "而是由一个个具体的人组成的生活共同体。", "startFrame": 175, "durationFrames": 85}]} totalDurationFrames={261} notText={"悬在空中的口号"} butText={"具体人组成的生活共同体"} butSrc={staticFile("images/爱国先爱同胞/scene_3_15.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={2011} durationInFrames={113}>
                <BWMagnifyingGlass content={[{"text": "爱一个国家，", "startFrame": 0, "durationFrames": 26}, {"text": "首先应该尊重身边同胞的生命、", "startFrame": 25, "durationFrames": 60}, {"text": "财产和尊严。", "startFrame": 85, "durationFrames": 28}]} totalDurationFrames={113} anchors={[{"text": "尊重身边同胞的生命", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2124} durationInFrames={269}>
                <BWCognitiveShift content={[{"text": "你一边高喊爱国，", "startFrame": 0, "durationFrames": 53}, {"text": "一边羞辱、伤害、牺牲同胞，", "startFrame": 52, "durationFrames": 79}, {"text": "本质上不是在维护谁，", "startFrame": 130, "durationFrames": 47}, {"text": "而是在破坏", "startFrame": 177, "durationFrames": 30}, {"text": "公共信任与共同体认同。", "startFrame": 207, "durationFrames": 62}]} totalDurationFrames={269} notText={"维护谁"} butText={"破坏公共信任与认同"} butSrc={staticFile("images/爱国先爱同胞/scene_3_17.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={2393} durationInFrames={148}>
                <BWTextFocus content={[{"text": "没有信任，", "startFrame": 0, "durationFrames": 28}, {"text": "秩序就只剩恐惧；", "startFrame": 27, "durationFrames": 52}, {"text": "没有认同，", "startFrame": 78, "durationFrames": 27}, {"text": "团结就只剩口号。", "startFrame": 104, "durationFrames": 43}]} totalDurationFrames={148} coreSentence={[{"text": "没有信任，秩序就只剩恐惧；", "showFrom": 0}, {"text": "没有认同，团结就只剩口号。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "信任", "color": "#EF4444"}, {"coreSentenceAnchor": "认同", "color": "#EF4444"}, {"coreSentenceAnchor": "恐惧", "color": "#EF4444"}, {"coreSentenceAnchor": "口号", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
