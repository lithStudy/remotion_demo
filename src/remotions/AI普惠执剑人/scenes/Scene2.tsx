import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWPanelGrid } from "../../../components";

// 研发
const SCENE_DURATION = 242 + 126 + 129;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={242}>
                <BWCenterFocus content={[{"text": "纵观Deepseek从V1到V4的迭代。", "startFrame": 0, "durationFrames": 92}, {"text": "梁文锋从来没有用过什么高大上的名词来包装。", "startFrame": 91, "durationFrames": 89}, {"text": "从来没有遥遥领先式的喊话。", "startFrame": 180, "durationFrames": 62}]} totalDurationFrames={242} imageSrc={staticFile("images/AI普惠执剑人/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={242} durationInFrames={126}>
                <BWBeatSequence content={[{"text": "只是勤勤恳恳的做研发，", "startFrame": 0, "durationFrames": 51}, {"text": "然后突然有一天，", "startFrame": 50, "durationFrames": 34}, {"text": "拿出来一堆硬技术。", "startFrame": 84, "durationFrames": 42}]} totalDurationFrames={126} stages={[{ imageSrc: staticFile("images/AI普惠执剑人/scene_2_3_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/AI普惠执剑人/scene_2_3_img1.png"), enterEffect: "zoomIn", tone: "alert" }]} anchors={[]} />
            </Sequence>
            <Sequence from={368} durationInFrames={129}>
                <BWPanelGrid content={[{"text": "详实的论文，", "startFrame": 0, "durationFrames": 36}, {"text": "牛逼的数据，", "startFrame": 36, "durationFrames": 32}, {"text": "经得起检验的AI模型。", "startFrame": 67, "durationFrames": 61}]} totalDurationFrames={129} panels={[{ src: staticFile("images/AI普惠执剑人/scene_2_4_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/AI普惠执剑人/scene_2_4_img1.png"), showFrom: 1, enterEffect: "slideBottom" }, { src: staticFile("images/AI普惠执剑人/scene_2_4_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/AI普惠执剑人/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
