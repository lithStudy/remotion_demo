import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：U型锁事件
const SCENE_DURATION = 104 + 264 + 287;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={104}>
                <BWTextFocus content={[{"text": "有些人打着爱国的旗号，", "startFrame": 0, "durationFrames": 51}, {"text": "却在干着伤害同胞的勾当。", "startFrame": 50, "durationFrames": 54}]} totalDurationFrames={104} coreSentence={[{"text": "打着爱国旗号", "showFrom": 0}, {"text": "伤害同胞", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "伤害同胞", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={104} durationInFrames={264}>
                <BWCenterFocus content={[{"text": "2012年，", "startFrame": 0, "durationFrames": 33}, {"text": "西安街头。", "startFrame": 32, "durationFrames": 31}, {"text": "有人因为别人开日系车，", "startFrame": 63, "durationFrames": 52}, {"text": "就用U型锁砸伤了车主，", "startFrame": 114, "durationFrames": 58}, {"text": "导致车主重伤瘫痪，", "startFrame": 172, "durationFrames": 50}, {"text": "砸人者被判十年。", "startFrame": 221, "durationFrames": 43}]} totalDurationFrames={264} imageSrc={staticFile("images/爱国先爱同胞/scene_1_2.png")} enterEffect="zoomIn" anchors={[{"text": "重伤瘫痪", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={368} durationInFrames={287}>
                <BWPeerInduct content={[{"text": "受害者的妻子，从此一个人扛起整个家。", "startFrame": 0, "durationFrames": 94}, {"text": "她撑起家庭的生计，", "startFrame": 93, "durationFrames": 42}, {"text": "还要每天照顾瘫痪的丈夫。", "startFrame": 135, "durationFrames": 57}, {"text": "她做错了什么？", "startFrame": 192, "durationFrames": 33}, {"text": "她只是嫁给了一个开日本车的男人。", "startFrame": 224, "durationFrames": 62}]} totalDurationFrames={287} premises={[{ imageSrc: staticFile("images/爱国先爱同胞/scene_1_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/爱国先爱同胞/scene_1_3_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { imageSrc: staticFile("images/爱国先爱同胞/scene_1_3_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} conclusion={{ imageSrc: staticFile("images/爱国先爱同胞/scene_1_3.png"), showFrom: 3, enterEffect: "zoomIn", tone: "alert" }} anchors={[{"text": "做错了什么", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
