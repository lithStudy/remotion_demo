import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid } from "../../../components";

// 引入：人际内耗
const SCENE_DURATION = 190 + 327 + 81;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "别再自我折磨了，", "startFrame": 0, "durationFrames": 41}, {"text": "那些让你心烦意乱的“人际难题”，", "startFrame": 40, "durationFrames": 60}, {"text": "90% 都是因为你大脑的一个进化 Bug。", "startFrame": 100, "durationFrames": 90}]} totalDurationFrames={190} imageSrc={staticFile("images/认知偏差_基本归因错误/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "人际难题", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "进化Bug", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={190} durationInFrames={327}>
                <BWPanelGrid content={[{"text": "你看，", "startFrame": 0, "durationFrames": 18}, {"text": "同事回消息晚了，", "startFrame": 17, "durationFrames": 44}, {"text": "你就觉得他在轻视你。", "startFrame": 61, "durationFrames": 48}, {"text": "领导开会没点你名，", "startFrame": 109, "durationFrames": 52}, {"text": "你就觉得他在针对你。", "startFrame": 160, "durationFrames": 52}, {"text": "伴侣进门拉着脸，", "startFrame": 211, "durationFrames": 42}, {"text": "你就开始反思自己是不是又说错话了。", "startFrame": 253, "durationFrames": 74}]} totalDurationFrames={327} panels={[{ src: staticFile("images/认知偏差_基本归因错误/scene_1_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏差_基本归因错误/scene_1_2_img1.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/认知偏差_基本归因错误/scene_1_2_img2.png"), showFrom: 5, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={517} durationInFrames={81}>
                <BWCenterFocus content={[{"text": "这种精神内耗，", "startFrame": 0, "durationFrames": 39}, {"text": "是不是快把你榨干了？", "startFrame": 38, "durationFrames": 43}]} totalDurationFrames={81} imageSrc={staticFile("images/认知偏差_基本归因错误/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "精神内耗", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_基本归因错误/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
