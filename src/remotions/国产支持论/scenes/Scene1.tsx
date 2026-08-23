import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：畸形绑架
const SCENE_DURATION = 150 + 81 + 219;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWTextFocus content={[{"text": "不要再被网上的键盘侠道德绑架了，", "startFrame": 0, "durationFrames": 69}, {"text": "支持国产，", "startFrame": 68, "durationFrames": 27}, {"text": "根本不需要你去当那个冤大头。", "startFrame": 94, "durationFrames": 55}]} totalDurationFrames={150} coreSentence={[{"text": "不要再被网上的键盘侠道德绑架了，", "showFrom": 0, "endFrom": 0}, {"text": "支持国产，", "showFrom": 1}, {"text": "根本不需要你去当那个冤大头。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "道德绑架", "color": "#EF4444"}, {"coreSentenceAnchor": "冤大头", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={150} durationInFrames={81}>
                <BWCenterFocus content={[{"text": "现在网上的风气，", "startFrame": 0, "durationFrames": 43}, {"text": "真的太畸形了。", "startFrame": 42, "durationFrames": 39}]} totalDurationFrames={81} imageSrc={staticFile("images/国产支持论/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "畸形", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={231} durationInFrames={219}>
                <BWPeerInduct content={[{"text": "只要你不买某牌手机，", "startFrame": 0, "durationFrames": 51}, {"text": "只要你不开某牌汽车，", "startFrame": 50, "durationFrames": 48}, {"text": "一顶大帽子就扣下来了：", "startFrame": 98, "durationFrames": 51}, {"text": "你不支持国产！", "startFrame": 148, "durationFrames": 38}, {"text": "你不够爱国！", "startFrame": 185, "durationFrames": 33}]} totalDurationFrames={219} premises={[{ imageSrc: staticFile("images/国产支持论/scene_1_3_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/国产支持论/scene_1_3_img1.png"), enterEffect: "slideBottom", showFrom: 1 }]} conclusion={{ imageSrc: staticFile("images/国产支持论/scene_1_3.png"), enterEffect: "zoomIn", showFrom: 2, tone: "alert" }} />
            </Sequence>
            <Audio src={staticFile("/audio/国产支持论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
