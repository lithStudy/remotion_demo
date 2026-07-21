import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWTextFocus, BWTreeDiagram } from "../../../components";

// 剖析：道德许可与错位
const SCENE_DURATION = 352 + 142 + 85 + 260 + 324 + 221 + 259 + 77 + 263 + 122 + 244 + 114;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={352}>
                <BWCaseBreakdown content={[{"text": "但更讽刺的是，", "startFrame": 0, "durationFrames": 35}, {"text": "这帮人从来不觉得自己有问题。", "startFrame": 34, "durationFrames": 60}, {"text": "他们觉得自己在\"捍卫大义\"。", "startFrame": 94, "durationFrames": 50}, {"text": "你问他，为什么国家要进口日本车？", "startFrame": 144, "durationFrames": 71}, {"text": "他不知道。", "startFrame": 215, "durationFrames": 26}, {"text": "为什么国家要让外国人在中国办厂？", "startFrame": 240, "durationFrames": 79}, {"text": "他也说不出来。", "startFrame": 318, "durationFrames": 33}]} totalDurationFrames={352} title={"正义幻觉"} imageSrc={staticFile("images/爱国先爱同胞/scene_3_1.png")} phases={[{"phaseLabel": "自我辩护", "showFrom": 1}, {"phaseLabel": "捍卫大义", "showFrom": 2}, {"phaseLabel": "答不上来", "showFrom": 6}]} />
            </Sequence>
            <Sequence from={352} durationInFrames={142}>
                <BWPanelGrid content={[{"text": "但他可以理直气壮地砸同胞的车、", "startFrame": 0, "durationFrames": 70}, {"text": "骂同胞的选择、", "startFrame": 69, "durationFrames": 33}, {"text": "审判同胞的生活。", "startFrame": 102, "durationFrames": 39}]} totalDurationFrames={142} panels={[{ src: staticFile("images/爱国先爱同胞/scene_3_2_img0.png"), showFrom: 0, enterEffect: "slideBottom" }, { src: staticFile("images/爱国先爱同胞/scene_3_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/爱国先爱同胞/scene_3_2_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={494} durationInFrames={85}>
                <BWCognitiveShift content={[{"text": "他们爱的不是国，", "startFrame": 0, "durationFrames": 32}, {"text": "是那个\"我很爱国\"的身份标签。", "startFrame": 31, "durationFrames": 53}]} totalDurationFrames={85} notText={"爱的是国"} butText={"爱国标签"} butSrc={staticFile("images/爱国先爱同胞/scene_3_3.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={579} durationInFrames={260}>
                <BWConceptCard content={[{"text": "因为有了这个标签，", "startFrame": 0, "durationFrames": 33}, {"text": "他就可以站在道德制高点上，", "startFrame": 32, "durationFrames": 62}, {"text": "对任何一个普通人指手画脚。", "startFrame": 93, "durationFrames": 55}, {"text": "这种心理机制，", "startFrame": 148, "durationFrames": 38}, {"text": "心理学上叫\"道德许可效应\"。", "startFrame": 185, "durationFrames": 75}]} totalDurationFrames={260} imageSrc={staticFile("images/爱国先爱同胞/scene_3_4.png")} conceptName={"道德许可效应"} />
            </Sequence>
            <Sequence from={839} durationInFrames={324}>
                <BWCauseChain content={[{"text": "当一个人给自己贴上\"爱国者\"的标签，", "startFrame": 0, "durationFrames": 77}, {"text": "他就觉得自己获得了某种道德特权。", "startFrame": 76, "durationFrames": 74}, {"text": "他可以心安理得地伤害那些\"不够爱国\"的人，", "startFrame": 149, "durationFrames": 79}, {"text": "因为在他眼里，", "startFrame": 228, "durationFrames": 34}, {"text": "那些人是\"敌人\"，", "startFrame": 262, "durationFrames": 34}, {"text": "不是\"同胞\"。", "startFrame": 296, "durationFrames": 28}]} totalDurationFrames={324} layout={"horizontal"} nodes={[{ label: "贴标签", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "道德特权", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "伤害他人", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "视作敌人", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={1163} durationInFrames={221}>
                <BWCenterFocus content={[{"text": "他把复杂的社会议题简化成非黑即白的站队游戏，", "startFrame": 0, "durationFrames": 123}, {"text": "把活生生的人简化成\"爱国\"和\"不爱国\"两类。", "startFrame": 122, "durationFrames": 98}]} totalDurationFrames={221} imageSrc={staticFile("images/爱国先爱同胞/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "站队游戏", "showFrom": 0, "color": "#EF4444", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={1384} durationInFrames={259}>
                <BWCauseChain content={[{"text": "这种简化让他获得了一种虚假的掌控感。", "startFrame": 0, "durationFrames": 88}, {"text": "他不需要思考，", "startFrame": 87, "durationFrames": 31}, {"text": "不需要判断，", "startFrame": 117, "durationFrames": 24}, {"text": "只需要跟着喊口号，", "startFrame": 141, "durationFrames": 45}, {"text": "就能获得一种\"我是好人\"的自我安慰。", "startFrame": 186, "durationFrames": 73}]} totalDurationFrames={259} layout={"horizontal"} nodes={[{ label: "虚假掌控", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "省略思考", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "跟喊口号", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "自我安慰", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={1643} durationInFrames={77}>
                <BWTreeDiagram content={[{"text": "这就是问题的第一层：", "startFrame": 0, "durationFrames": 42}, {"text": "道德错位。", "startFrame": 41, "durationFrames": 35}]} totalDurationFrames={77} root={{ label: "伪爱国", showFrom: 0, children: [{ label: "道德错位", showFrom: 1 }] }} />
            </Sequence>
            <Sequence from={1720} durationInFrames={263}>
                <BWCognitiveShift content={[{"text": "他们把\"爱国大义高于一切\"当成免罪金牌，", "startFrame": 0, "durationFrames": 97}, {"text": "可国家从来不是一句悬在空中的口号，", "startFrame": 96, "durationFrames": 79}, {"text": "而是由一个个具体的人组成的生活共同体。", "startFrame": 174, "durationFrames": 89}]} totalDurationFrames={263} notText={"悬空的口号"} butText={"生活共同体"} butSrc={staticFile("images/爱国先爱同胞/scene_3_9.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={1983} durationInFrames={122}>
                <BWMagnifyingGlass content={[{"text": "爱一个国家，", "startFrame": 0, "durationFrames": 26}, {"text": "首先应该尊重身边同胞的生命、", "startFrame": 25, "durationFrames": 63}, {"text": "财产和尊严。", "startFrame": 87, "durationFrames": 35}]} totalDurationFrames={122} anchors={[{"text": "生命、财产和尊严", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2105} durationInFrames={244}>
                <BWCognitiveShift content={[{"text": "你一边高喊爱国，", "startFrame": 0, "durationFrames": 36}, {"text": "一边羞辱、伤害、牺牲同胞，", "startFrame": 36, "durationFrames": 69}, {"text": "本质上不是在维护谁，", "startFrame": 104, "durationFrames": 47}, {"text": "而是在破坏", "startFrame": 151, "durationFrames": 36}, {"text": "公共信任与共同体认同。", "startFrame": 187, "durationFrames": 56}]} totalDurationFrames={244} notText={"维护谁"} butText={"破坏公共信任"} butSrc={staticFile("images/爱国先爱同胞/scene_3_11.png")} notContentIndex={2} butContentIndex={4} />
            </Sequence>
            <Sequence from={2349} durationInFrames={114}>
                <BWTextFocus content={[{"text": "没有信任，", "startFrame": 0, "durationFrames": 20}, {"text": "秩序就只剩恐惧；", "startFrame": 19, "durationFrames": 36}, {"text": "没有认同，", "startFrame": 55, "durationFrames": 18}, {"text": "团结就只剩口号。", "startFrame": 73, "durationFrames": 41}]} totalDurationFrames={114} coreSentence={[{"text": "没有信任，秩序就只剩恐惧；", "showFrom": 0}, {"text": "没有认同，团结就只剩口号。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "信任", "color": "#EF4444"}, {"coreSentenceAnchor": "认同", "color": "#EF4444"}, {"coreSentenceAnchor": "恐惧", "color": "#EF4444"}, {"coreSentenceAnchor": "口号", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
