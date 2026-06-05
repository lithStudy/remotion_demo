import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：U型锁事件
const SCENE_DURATION = 89 + 285 + 96 + 101 + 285;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={89}>
                <BWTextFocus content={[{"text": "爱国，", "startFrame": 0, "durationFrames": 22}, {"text": "不该变成伤害同胞的理由。", "startFrame": 21, "durationFrames": 67}]} totalDurationFrames={89} coreSentence={[{"text": "爱国，", "showFrom": 0}, {"text": "不该变成伤害同胞的理由。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "伤害同胞", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={89} durationInFrames={285}>
                <BWCenterFocus content={[{"text": "2012年，", "startFrame": 0, "durationFrames": 31}, {"text": "西安街头。", "startFrame": 30, "durationFrames": 39}, {"text": "有人举起U型锁，", "startFrame": 68, "durationFrames": 48}, {"text": "砸穿了一个开日系车同胞的颅骨。", "startFrame": 116, "durationFrames": 76}, {"text": "车主当场倒地，", "startFrame": 192, "durationFrames": 44}, {"text": "从此五级伤残。", "startFrame": 235, "durationFrames": 50}]} totalDurationFrames={285} imageSrc={staticFile("images/爱国先爱同胞/scene_1_2.png")} enterEffect="zoomIn" anchors={[{"text": "五级伤残", "showFrom": 5, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={374} durationInFrames={96}>
                <BWDosAndDonts content={[{"text": "砸人者判了十年，", "startFrame": 0, "durationFrames": 44}, {"text": "受害者瘫痪半辈子。", "startFrame": 43, "durationFrames": 53}]} totalDurationFrames={96} left={{label: "砸人者·十年", src: staticFile("images/爱国先爱同胞/scene_1_3_left.png"), showFrom: 0 }} right={{label: "受害者·瘫半生", src: staticFile("images/爱国先爱同胞/scene_1_3_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={470} durationInFrames={101}>
                <BWCognitiveShift content={[{"text": "这把锁砸的不是日本车，", "startFrame": 0, "durationFrames": 55}, {"text": "砸的是一个中国家庭。", "startFrame": 54, "durationFrames": 46}]} totalDurationFrames={101} notText={"日本车"} butText={"一个中国家庭"} butSrc={staticFile("images/爱国先爱同胞/scene_1_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={571} durationInFrames={285}>
                <BWPeerInduct content={[{"text": "受害者的妻子，从此一个人扛起整个家。", "startFrame": 0, "durationFrames": 88}, {"text": "她撑起家庭的生计，", "startFrame": 87, "durationFrames": 40}, {"text": "还要每天照顾伤残的丈夫。", "startFrame": 126, "durationFrames": 55}, {"text": "她做错了什么？", "startFrame": 181, "durationFrames": 40}, {"text": "她只是嫁给了一个开日本车的男人。", "startFrame": 220, "durationFrames": 65}]} totalDurationFrames={285} premises={[{ imageSrc: staticFile("images/爱国先爱同胞/scene_1_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/爱国先爱同胞/scene_1_5_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { imageSrc: staticFile("images/爱国先爱同胞/scene_1_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/爱国先爱同胞/scene_1_5.png"), showFrom: 4, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "做错了什么？", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
