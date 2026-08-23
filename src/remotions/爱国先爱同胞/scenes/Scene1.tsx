import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：U型锁事件
const SCENE_DURATION = 102 + 254 + 296;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={102}>
                <BWTextFocus content={[{"text": "有些人打着爱国的旗号，", "startFrame": 0, "durationFrames": 52}, {"text": "却在干着伤害同胞的勾当。", "startFrame": 51, "durationFrames": 50}]} totalDurationFrames={102} coreSentence={[{"text": "打着爱国旗号", "showFrom": 0}, {"text": "伤害同胞", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "伤害同胞", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={102} durationInFrames={254}>
                <BWCenterFocus content={[{"text": "2012年，", "startFrame": 0, "durationFrames": 30}, {"text": "西安街头。", "startFrame": 29, "durationFrames": 33}, {"text": "有人因为别人开日系车，", "startFrame": 62, "durationFrames": 50}, {"text": "就用U型锁砸伤了车主，", "startFrame": 111, "durationFrames": 53}, {"text": "导致车主重伤瘫痪，", "startFrame": 163, "durationFrames": 48}, {"text": "砸人者被判十年。", "startFrame": 211, "durationFrames": 42}]} totalDurationFrames={254} imageSrc={staticFile("images/爱国先爱同胞/scene_1_2.png")} enterEffect="zoomIn" anchors={[{"text": "重伤瘫痪", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={356} durationInFrames={296}>
                <BWPeerInduct content={[{"text": "受害者的妻子，从此一个人扛起整个家。", "startFrame": 0, "durationFrames": 102}, {"text": "她撑起家庭的生计，", "startFrame": 101, "durationFrames": 45}, {"text": "还要每天照顾瘫痪的丈夫。", "startFrame": 146, "durationFrames": 54}, {"text": "她做错了什么？", "startFrame": 199, "durationFrames": 33}, {"text": "她只是嫁给了一个开日本车的男人。", "startFrame": 232, "durationFrames": 63}]} totalDurationFrames={296} premises={[{ imageSrc: staticFile("images/爱国先爱同胞/scene_1_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/爱国先爱同胞/scene_1_3_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { imageSrc: staticFile("images/爱国先爱同胞/scene_1_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/爱国先爱同胞/scene_1_3.png"), showFrom: 3, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "做错了什么", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
