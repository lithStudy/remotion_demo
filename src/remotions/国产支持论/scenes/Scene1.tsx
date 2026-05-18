import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPeerInduct, BWTextFocus } from "../../../components";

// 引入：畸形绑架
const SCENE_DURATION = 150 + 82 + 216;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWTextFocus content={[{"text": "不要再被网上的键盘侠道德绑架了，", "startFrame": 0, "durationFrames": 66}, {"text": "支持国产，", "startFrame": 65, "durationFrames": 27}, {"text": "根本不需要你去当那个冤大头。", "startFrame": 91, "durationFrames": 58}]} totalDurationFrames={150} coreSentence={[{"text": "不要再被网上的键盘侠道德绑架了，", "showFrom": 0, "endFrom": 0}, {"text": "支持国产，", "showFrom": 1}, {"text": "根本不需要你去当那个冤大头。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "道德绑架", "color": "#EF4444"}, {"coreSentenceAnchor": "冤大头", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={150} durationInFrames={82}>
                <BWCenterFocus content={[{"text": "现在网上的风气，", "startFrame": 0, "durationFrames": 41}, {"text": "真的太畸形了。", "startFrame": 40, "durationFrames": 42}]} totalDurationFrames={82} imageSrc={staticFile("images/国产支持论/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "畸形", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={232} durationInFrames={216}>
                <BWPeerInduct content={[{"text": "只要你不买某牌手机，", "startFrame": 0, "durationFrames": 48}, {"text": "只要你不开某牌汽车，", "startFrame": 48, "durationFrames": 46}, {"text": "一顶大帽子就扣下来了：", "startFrame": 93, "durationFrames": 50}, {"text": "你不支持国产！", "startFrame": 142, "durationFrames": 40}, {"text": "你不够爱国！", "startFrame": 182, "durationFrames": 34}]} totalDurationFrames={216} premises={[{ imageSrc: staticFile("images/国产支持论/scene_1_3_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/国产支持论/scene_1_3_img1.png"), enterEffect: "slideBottom", showFrom: 1 }]} conclusion={{ imageSrc: staticFile("images/国产支持论/scene_1_3.png"), enterEffect: "zoomIn", showFrom: 2, tone: "alert" }} />
            </Sequence>
            <Audio src={staticFile("/audio/国产支持论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
