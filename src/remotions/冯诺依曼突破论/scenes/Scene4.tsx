import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWPanelGrid } from "../../../components";

// 工程进步非突破
const SCENE_DURATION = 112 + 167 + 88 + 191;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWDosAndDonts content={[{"text": "可工程进步。", "startFrame": 0, "durationFrames": 34}, {"text": "等于突破冯·诺依曼架构吗？", "startFrame": 33, "durationFrames": 56}, {"text": "不等于。", "startFrame": 89, "durationFrames": 23}]} totalDurationFrames={112} left={{label: "❌ 误区", src: staticFile("images/冯诺依曼突破论/scene_4_1_left.png"), showFrom: 0 }} right={{label: "✅ 实际", src: staticFile("images/冯诺依曼突破论/scene_4_1_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={112} durationInFrames={167}>
                <BWPanelGrid content={[{"text": "它没有抛弃存储程序。", "startFrame": 0, "durationFrames": 51}, {"text": "没有取消指令和数据。", "startFrame": 50, "durationFrames": 48}, {"text": "也没有创造全新的计算范式。", "startFrame": 98, "durationFrames": 69}]} totalDurationFrames={167} panels={[{ src: staticFile("images/冯诺依曼突破论/scene_4_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/冯诺依曼突破论/scene_4_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/冯诺依曼突破论/scene_4_2_img2.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={279} durationInFrames={88}>
                <BWCenterFocus content={[{"text": "它只是把大量处理器。", "startFrame": 0, "durationFrames": 43}, {"text": "组织得更加紧密。", "startFrame": 42, "durationFrames": 45}]} totalDurationFrames={88} imageSrc={staticFile("images/冯诺依曼突破论/scene_4_3.png")} enterEffect="zoomIn" anchors={[{"text": "组织规模", "showFrom": 3, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={367} durationInFrames={191}>
                <BWDosAndDonts content={[{"text": "就像公司从十人扩张到十万人。", "startFrame": 0, "durationFrames": 77}, {"text": "组织规模确实扩大了。", "startFrame": 76, "durationFrames": 52}, {"text": "但依然还是公司这种组织形式，", "startFrame": 127, "durationFrames": 64}]} totalDurationFrames={191} left={{label: "❌ 常见误解", src: staticFile("images/冯诺依曼突破论/scene_4_4_left.png"), showFrom: 0 }} right={{label: "✅ 正确理解", src: staticFile("images/冯诺依曼突破论/scene_4_4_right.png"), showFrom: 2 }} />
            </Sequence>
            <Audio src={staticFile("/audio/冯诺依曼突破论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
