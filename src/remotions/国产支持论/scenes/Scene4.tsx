import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 反转：关税壁垒的隐性代价
const SCENE_DURATION = 176 + 268 + 197 + 189;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={176}>
                <BWCenterFocus content={[{"text": "而且，", "startFrame": 0, "durationFrames": 22}, {"text": "除了真金白银的补贴，", "startFrame": 21, "durationFrames": 47}, {"text": "你其实还在用另一种隐秘的方式，", "startFrame": 68, "durationFrames": 63}, {"text": "为国产品牌撑腰。", "startFrame": 130, "durationFrames": 45}]} totalDurationFrames={176} imageSrc={staticFile("images/国产支持论/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={176} durationInFrames={268}>
                <BWBeatSequence content={[{"text": "为了给本土企业，", "startFrame": 0, "durationFrames": 47}, {"text": "留出喘息和发育的空间。", "startFrame": 46, "durationFrames": 55}, {"text": "国家通过加征关税，", "startFrame": 101, "durationFrames": 47}, {"text": "通过各种进口限制，", "startFrame": 148, "durationFrames": 42}, {"text": "强行拦住了那些强势的外国产品。", "startFrame": 189, "durationFrames": 78}]} totalDurationFrames={268} stages={[{ imageSrc: staticFile("images/国产支持论/scene_4_2_img0.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/国产支持论/scene_4_2_img1.png"), enterEffect: "slideLeft", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/国产支持论/scene_4_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 4 }]} />
            </Sequence>
            <Sequence from={444} durationInFrames={197}>
                <BWMethodStack content={[{"text": "但这种保护的代价是什么？", "startFrame": 0, "durationFrames": 55}, {"text": "是你买进口货更贵了。", "startFrame": 54, "durationFrames": 50}, {"text": "是你只能忍受国内某些粗制滥造的作品。", "startFrame": 103, "durationFrames": 93}]} totalDurationFrames={197} title={"保护的代价"} imageSrc={staticFile("images/国产支持论/scene_4_3.png")} notes={[{"text": "进口货更贵", "showFrom": 1}, {"text": "忍劣质国货", "showFrom": 2}]} />
            </Sequence>
            <Sequence from={641} durationInFrames={189}>
                <BWTextFocus content={[{"text": "你多掏的每一分钱，忍受的每一次不良体验，", "startFrame": 0, "durationFrames": 106}, {"text": "其实都是在给国产企业争取追赶的时间。", "startFrame": 105, "durationFrames": 84}]} totalDurationFrames={189} coreSentence={[{"text": "你多掏的每一分钱，", "showFrom": 0, "endFrom": 0}, {"text": "给国产企业争取追赶的时间。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "追赶的时间", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/国产支持论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
