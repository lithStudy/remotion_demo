import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析·注水创新
const SCENE_DURATION = 86 + 196 + 236 + 51 + 73 + 202 + 220 + 102 + 251 + 73 + 72;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWConceptCard content={[{"text": "先说最不要脸的一类：", "startFrame": 0, "durationFrames": 47}, {"text": "把常识当发明。", "startFrame": 46, "durationFrames": 39}]} totalDurationFrames={86} imageSrc={staticFile("images/华为专利论/scene_2_1.png")} conceptName={"常识当发明"} anchors={[]} />
            </Sequence>
            <Sequence from={86} durationInFrames={196}>
                <BWCenterFocus content={[{"text": "你打开手机，", "startFrame": 0, "durationFrames": 29}, {"text": "图标会动吧？", "startFrame": 28, "durationFrames": 29}, {"text": "会放大、会淡入淡出吧？", "startFrame": 57, "durationFrames": 68}, {"text": "这在程序员眼里，", "startFrame": 124, "durationFrames": 36}, {"text": "有专业名字。", "startFrame": 160, "durationFrames": 35}]} totalDurationFrames={196} imageSrc={staticFile("images/华为专利论/scene_2_2.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={282} durationInFrames={236}>
                <BWSplitCompare content={[{"text": "分层渲染。", "startFrame": 0, "durationFrames": 38}, {"text": "透明度渐变。", "startFrame": 37, "durationFrames": 43}, {"text": "翻成白话就是：", "startFrame": 79, "durationFrames": 41}, {"text": "把图片分几层动，", "startFrame": 120, "durationFrames": 57}, {"text": "让它慢慢变亮、变暗。", "startFrame": 176, "durationFrames": 59}]} totalDurationFrames={236} leftSrc={staticFile("images/华为专利论/scene_2_3_left.png")} rightSrc={staticFile("images/华为专利论/scene_2_3_right.png")} leftLabel={"分层渲染"} rightLabel={"透明度渐变"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={518} durationInFrames={51}>
                <BWTextFocus content={[{"text": "这是十年前的入门课。", "startFrame": 0, "durationFrames": 51}]} totalDurationFrames={51} coreSentence={["这是十年前的入门课。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={569} durationInFrames={73}>
                <BWCenterFocus content={[{"text": "可华为偏要把这些拆开申请专利。", "startFrame": 0, "durationFrames": 73}]} totalDurationFrames={73} imageSrc={staticFile("images/华为专利论/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "拆开", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={642} durationInFrames={202}>
                <BWPanelGrid content={[{"text": "图标前景放大一层，", "startFrame": 0, "durationFrames": 54}, {"text": "算一件。", "startFrame": 53, "durationFrames": 33}, {"text": "背景再放大一层，", "startFrame": 86, "durationFrames": 46}, {"text": "又是一件。", "startFrame": 132, "durationFrames": 27}, {"text": "淡入淡出，", "startFrame": 158, "durationFrames": 30}, {"text": "再一件。", "startFrame": 188, "durationFrames": 14}]} totalDurationFrames={202} panels={[{ src: staticFile("images/华为专利论/scene_2_7_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_2_7_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_2_7_img2.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={844} durationInFrames={220}>
                <BWPanelGrid content={[{"text": "弹簧动画，", "startFrame": 0, "durationFrames": 24}, {"text": "再一件。", "startFrame": 24, "durationFrames": 24}, {"text": "手机上的开机动画，", "startFrame": 47, "durationFrames": 43}, {"text": "一件。", "startFrame": 90, "durationFrames": 18}, {"text": "车载多屏拼接放同一段动画，", "startFrame": 108, "durationFrames": 81}, {"text": "又一件。", "startFrame": 189, "durationFrames": 31}]} totalDurationFrames={220} panels={[{ src: staticFile("images/华为专利论/scene_2_8_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_2_8_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_2_8_img2.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1064} durationInFrames={102}>
                <BWMagnifyingGlass content={[{"text": "同一个“开机画面”，", "startFrame": 0, "durationFrames": 44}, {"text": "硬拆成几十上百个专利。", "startFrame": 43, "durationFrames": 58}]} totalDurationFrames={102} anchors={[{"text": "几十上百个专利", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1166} durationInFrames={251}>
                <BWPanelGrid content={[{"text": "这就像有人，把本来的进屋动作，拆成了不同的技术。", "startFrame": 0, "durationFrames": 111}, {"text": "“推门”是一件；", "startFrame": 110, "durationFrames": 43}, {"text": "“抬脚”是一件；", "startFrame": 153, "durationFrames": 46}, {"text": "“放脚”又是一件。", "startFrame": 198, "durationFrames": 52}]} totalDurationFrames={251} panels={[{ src: staticFile("images/华为专利论/scene_2_10_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_2_10_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1417} durationInFrames={73}>
                <BWTextFocus content={[{"text": "你回家进门，", "startFrame": 0, "durationFrames": 31}, {"text": "理论上要交三次钱。", "startFrame": 30, "durationFrames": 42}]} totalDurationFrames={73} coreSentence={[{"text": "你回家进门，", "showFrom": 0, "endFrom": 0}, {"text": "理论上要交三次钱。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "交三次钱", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1490} durationInFrames={72}>
                <BWCognitiveShift content={[{"text": "这是在创新吗？", "startFrame": 0, "durationFrames": 38}, {"text": "这是在注水。", "startFrame": 37, "durationFrames": 35}]} totalDurationFrames={72} notText={"创新"} butText={"注水"} butSrc={staticFile("images/华为专利论/scene_2_12.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
