import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWPanelGrid, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析·注水创新
const SCENE_DURATION = 87 + 192 + 246 + 53 + 79 + 212 + 206 + 94 + 223 + 77 + 65;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={87}>
                <BWConceptCard content={[{"text": "先说最不要脸的一类：", "startFrame": 0, "durationFrames": 45}, {"text": "把常识当发明。", "startFrame": 44, "durationFrames": 42}]} totalDurationFrames={87} imageSrc={staticFile("images/华为专利论/scene_2_1.png")} conceptName={"常识当发明"} anchors={[]} />
            </Sequence>
            <Sequence from={87} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "你打开手机，", "startFrame": 0, "durationFrames": 30}, {"text": "图标会动吧？", "startFrame": 29, "durationFrames": 27}, {"text": "会放大、会淡入淡出吧？", "startFrame": 56, "durationFrames": 69}, {"text": "这在程序员眼里，", "startFrame": 124, "durationFrames": 35}, {"text": "有专业名字。", "startFrame": 159, "durationFrames": 33}]} totalDurationFrames={192} imageSrc={staticFile("images/华为专利论/scene_2_2.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={279} durationInFrames={246}>
                <BWSplitCompare content={[{"text": "分层渲染。", "startFrame": 0, "durationFrames": 51}, {"text": "透明度渐变。", "startFrame": 50, "durationFrames": 42}, {"text": "翻成白话就是：", "startFrame": 91, "durationFrames": 38}, {"text": "把图片分几层动，", "startFrame": 128, "durationFrames": 62}, {"text": "让它慢慢变亮、变暗。", "startFrame": 189, "durationFrames": 56}]} totalDurationFrames={246} leftSrc={staticFile("images/华为专利论/scene_2_3_left.png")} rightSrc={staticFile("images/华为专利论/scene_2_3_right.png")} leftLabel={"分层渲染"} rightLabel={"透明度渐变"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={525} durationInFrames={53}>
                <BWTextFocus content={[{"text": "这是十年前的入门课。", "startFrame": 0, "durationFrames": 53}]} totalDurationFrames={53} coreSentence={["这是十年前的入门课。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={578} durationInFrames={79}>
                <BWCenterFocus content={[{"text": "可华为偏要把这些拆开申请专利。", "startFrame": 0, "durationFrames": 79}]} totalDurationFrames={79} imageSrc={staticFile("images/华为专利论/scene_2_6.png")} enterEffect="fadeIn" anchors={[{"text": "拆开", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={657} durationInFrames={212}>
                <BWPanelGrid content={[{"text": "图标前景放大一层，", "startFrame": 0, "durationFrames": 47}, {"text": "算一件。", "startFrame": 46, "durationFrames": 24}, {"text": "背景再放大一层，", "startFrame": 70, "durationFrames": 45}, {"text": "又是一件。", "startFrame": 115, "durationFrames": 28}, {"text": "淡入淡出，", "startFrame": 143, "durationFrames": 34}, {"text": "再一件。", "startFrame": 177, "durationFrames": 34}]} totalDurationFrames={212} panels={[{ src: staticFile("images/华为专利论/scene_2_7_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_2_7_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_2_7_img2.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={869} durationInFrames={206}>
                <BWPanelGrid content={[{"text": "弹簧动画，", "startFrame": 0, "durationFrames": 32}, {"text": "再一件。", "startFrame": 31, "durationFrames": 23}, {"text": "手机上的开机动画，", "startFrame": 54, "durationFrames": 45}, {"text": "一件。", "startFrame": 99, "durationFrames": 20}, {"text": "车载多屏拼接放同一段动画，", "startFrame": 119, "durationFrames": 65}, {"text": "又一件。", "startFrame": 183, "durationFrames": 22}]} totalDurationFrames={206} panels={[{ src: staticFile("images/华为专利论/scene_2_8_img0.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/华为专利论/scene_2_8_img1.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_2_8_img2.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1075} durationInFrames={94}>
                <BWMagnifyingGlass content={[{"text": "同一个“开机画面”，", "startFrame": 0, "durationFrames": 38}, {"text": "硬拆成几十上百个专利。", "startFrame": 37, "durationFrames": 56}]} totalDurationFrames={94} anchors={[{"text": "几十上百个专利", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1169} durationInFrames={223}>
                <BWPanelGrid content={[{"text": "这就像有人，把本来的进屋动作，拆成了不同的技术。", "startFrame": 0, "durationFrames": 111}, {"text": "“推门”是一件；", "startFrame": 110, "durationFrames": 33}, {"text": "“抬脚”是一件；", "startFrame": 143, "durationFrames": 32}, {"text": "“放脚”又是一件。", "startFrame": 174, "durationFrames": 49}]} totalDurationFrames={223} panels={[{ src: staticFile("images/华为专利论/scene_2_10_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为专利论/scene_2_10_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1392} durationInFrames={77}>
                <BWTextFocus content={[{"text": "你回家进门，", "startFrame": 0, "durationFrames": 32}, {"text": "理论上要交三次钱。", "startFrame": 31, "durationFrames": 46}]} totalDurationFrames={77} coreSentence={[{"text": "你回家进门，", "showFrom": 0, "endFrom": 0}, {"text": "理论上要交三次钱。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "交三次钱", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1469} durationInFrames={65}>
                <BWCognitiveShift content={[{"text": "这是在创新吗？", "startFrame": 0, "durationFrames": 32}, {"text": "这是在注水。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={65} notText={"创新"} butText={"注水"} butSrc={staticFile("images/华为专利论/scene_2_12.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为专利论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
