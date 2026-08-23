import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWTextFocus, BWTreeDiagram } from "../../../components";

// 剖析：道德许可与错位
const SCENE_DURATION = 363 + 152 + 88 + 261 + 337 + 195 + 267 + 76 + 247 + 124 + 249 + 135;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={363}>
                <BWCaseBreakdown content={[{"text": "但更讽刺的是，", "startFrame": 0, "durationFrames": 34}, {"text": "有些人从来不觉得自己有问题。", "startFrame": 33, "durationFrames": 63}, {"text": "他们觉得自己在\"捍卫大义\"。", "startFrame": 96, "durationFrames": 59}, {"text": "你问他，为什么国家要进口日本车？", "startFrame": 154, "durationFrames": 77}, {"text": "他不知道。", "startFrame": 231, "durationFrames": 27}, {"text": "为什么国家要让外国人在中国办厂？", "startFrame": 257, "durationFrames": 75}, {"text": "他也说不出来。", "startFrame": 331, "durationFrames": 31}]} totalDurationFrames={363} title={"正义幻觉"} imageSrc={staticFile("images/爱国先爱同胞/scene_3_1.png")} phases={[{"phaseLabel": "自我辩护", "showFrom": 1}, {"phaseLabel": "捍卫大义", "showFrom": 2}, {"phaseLabel": "答不上来", "showFrom": 6}]} />
            </Sequence>
            <Sequence from={363} durationInFrames={152}>
                <BWPanelGrid content={[{"text": "但他可以理直气壮地砸同胞的车、", "startFrame": 0, "durationFrames": 75}, {"text": "骂同胞的选择、", "startFrame": 74, "durationFrames": 37}, {"text": "审判同胞的生活。", "startFrame": 110, "durationFrames": 42}]} totalDurationFrames={152} panels={[{ src: staticFile("images/爱国先爱同胞/scene_3_2_img0.png"), showFrom: 0, enterEffect: "slideBottom" }, { src: staticFile("images/爱国先爱同胞/scene_3_2_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/爱国先爱同胞/scene_3_2_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={515} durationInFrames={88}>
                <BWCognitiveShift content={[{"text": "他们爱的不是国，", "startFrame": 0, "durationFrames": 32}, {"text": "是那个\"我很爱国\"的身份标签。", "startFrame": 31, "durationFrames": 56}]} totalDurationFrames={88} notText={"爱的是国"} butText={"爱国标签"} butSrc={staticFile("images/爱国先爱同胞/scene_3_3.png")} notContentIndex={0} butContentIndex={1} />
            </Sequence>
            <Sequence from={603} durationInFrames={261}>
                <BWConceptCard content={[{"text": "因为有了这个标签，", "startFrame": 0, "durationFrames": 39}, {"text": "他就可以站在道德制高点上，", "startFrame": 38, "durationFrames": 58}, {"text": "对任何一个普通人指手画脚。", "startFrame": 96, "durationFrames": 56}, {"text": "这种心理机制，", "startFrame": 151, "durationFrames": 33}, {"text": "心理学上叫\"道德许可效应\"。", "startFrame": 183, "durationFrames": 77}]} totalDurationFrames={261} imageSrc={staticFile("images/爱国先爱同胞/scene_3_4.png")} conceptName={"道德许可效应"} />
            </Sequence>
            <Sequence from={864} durationInFrames={337}>
                <BWCauseChain content={[{"text": "当一个人给自己贴上\"爱国者\"的标签，", "startFrame": 0, "durationFrames": 77}, {"text": "他就觉得自己获得了某种道德特权。", "startFrame": 76, "durationFrames": 76}, {"text": "他可以心安理得地伤害那些他们自认为\"不够爱国\"的人，", "startFrame": 152, "durationFrames": 94}, {"text": "因为在他眼里，", "startFrame": 245, "durationFrames": 32}, {"text": "那些人是\"敌人\"，", "startFrame": 277, "durationFrames": 33}, {"text": "不是\"同胞\"。", "startFrame": 310, "durationFrames": 27}]} totalDurationFrames={337} layout={"horizontal"} nodes={[{ label: "贴标签", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "道德特权", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "伤害他人", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "视作敌人", imageSrc: staticFile("images/爱国先爱同胞/scene_3_5_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={1201} durationInFrames={195}>
                <BWCenterFocus content={[{"text": "他把复杂的社会议题简化成非黑即白的站队游戏，", "startFrame": 0, "durationFrames": 100}, {"text": "把活生生的人简化成\"爱国\"和\"不爱国\"两类。", "startFrame": 99, "durationFrames": 96}]} totalDurationFrames={195} imageSrc={staticFile("images/爱国先爱同胞/scene_3_6.png")} enterEffect="fadeIn" anchors={[{"text": "站队游戏", "showFrom": 0, "color": "#EF4444", "anim": "spring"}]} />
            </Sequence>
            <Sequence from={1396} durationInFrames={267}>
                <BWCauseChain content={[{"text": "这种简化让他获得了一种虚假的掌控感。", "startFrame": 0, "durationFrames": 86}, {"text": "他不需要思考，", "startFrame": 85, "durationFrames": 34}, {"text": "不需要判断，", "startFrame": 118, "durationFrames": 28}, {"text": "只需要跟着喊口号，", "startFrame": 146, "durationFrames": 43}, {"text": "就能获得一种\"我是好人\"的自我安慰。", "startFrame": 188, "durationFrames": 78}]} totalDurationFrames={267} layout={"horizontal"} nodes={[{ label: "虚假掌控", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "省略思考", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "跟喊口号", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "自我安慰", imageSrc: staticFile("images/爱国先爱同胞/scene_3_7_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Sequence from={1663} durationInFrames={76}>
                <BWTreeDiagram content={[{"text": "这就是问题的第一层：", "startFrame": 0, "durationFrames": 42}, {"text": "道德错位。", "startFrame": 41, "durationFrames": 34}]} totalDurationFrames={76} root={{ label: "伪爱国", showFrom: 0, children: [{ label: "道德错位", showFrom: 1 }] }} />
            </Sequence>
            <Sequence from={1739} durationInFrames={247}>
                <BWCognitiveShift content={[{"text": "他们把\"爱国大义高于一切\"当成免罪金牌，", "startFrame": 0, "durationFrames": 92}, {"text": "可国家从来不是一句悬在空中的口号，", "startFrame": 91, "durationFrames": 77}, {"text": "而是由一个个具体的人组成的生活共同体。", "startFrame": 168, "durationFrames": 79}]} totalDurationFrames={247} notText={"悬空的口号"} butText={"生活共同体"} butSrc={staticFile("images/爱国先爱同胞/scene_3_9.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={1986} durationInFrames={124}>
                <BWMagnifyingGlass content={[{"text": "爱一个国家，", "startFrame": 0, "durationFrames": 26}, {"text": "首先应该尊重身边同胞的生命、", "startFrame": 25, "durationFrames": 67}, {"text": "财产和尊严。", "startFrame": 91, "durationFrames": 32}]} totalDurationFrames={124} anchors={[{"text": "生命、财产和尊严", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={2110} durationInFrames={249}>
                <BWCognitiveShift content={[{"text": "你一边高喊爱国，", "startFrame": 0, "durationFrames": 40}, {"text": "一边羞辱、伤害、牺牲同胞，", "startFrame": 39, "durationFrames": 72}, {"text": "本质上不是在维护谁，", "startFrame": 111, "durationFrames": 51}, {"text": "而是在破坏", "startFrame": 161, "durationFrames": 31}, {"text": "公共信任与共同体认同。", "startFrame": 192, "durationFrames": 57}]} totalDurationFrames={249} notText={"维护谁"} butText={"破坏公共信任"} butSrc={staticFile("images/爱国先爱同胞/scene_3_11.png")} notContentIndex={2} butContentIndex={4} />
            </Sequence>
            <Sequence from={2359} durationInFrames={135}>
                <BWTextFocus content={[{"text": "没有信任，", "startFrame": 0, "durationFrames": 26}, {"text": "秩序就只剩恐惧；", "startFrame": 25, "durationFrames": 44}, {"text": "没有认同，", "startFrame": 68, "durationFrames": 27}, {"text": "团结就只剩口号。", "startFrame": 94, "durationFrames": 40}]} totalDurationFrames={135} coreSentence={[{"text": "没有信任，秩序就只剩恐惧；", "showFrom": 0}, {"text": "没有认同，团结就只剩口号。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "信任", "color": "#EF4444"}, {"coreSentenceAnchor": "认同", "color": "#EF4444"}, {"coreSentenceAnchor": "恐惧", "color": "#EF4444"}, {"coreSentenceAnchor": "口号", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
