import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWPanelGrid } from "../../../components";

// 剖析：安全在于选择
const SCENE_DURATION = 186 + 154;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={186}>
                <BWCognitiveShift content={[{"text": "中国通信网络的安全，", "startFrame": 0, "durationFrames": 48}, {"text": "从来不取决于某一家公司有多强。", "startFrame": 48, "durationFrames": 72}, {"text": "它取决于运营商有没有选择。", "startFrame": 119, "durationFrames": 67}]} totalDurationFrames={186} notText={"一家公司多强"} butText={"运营商有选择"} butSrc={staticFile("images/华为依赖论/scene_7_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={186} durationInFrames={154}>
                <BWPanelGrid content={[{"text": "中兴、", "startFrame": 0, "durationFrames": 21}, {"text": "大唐、", "startFrame": 20, "durationFrames": 17}, {"text": "爱立信、", "startFrame": 37, "durationFrames": 19}, {"text": "诺基亚，", "startFrame": 55, "durationFrames": 18}, {"text": "它们的存在，", "startFrame": 73, "durationFrames": 28}, {"text": "就是运营商手里最大的底牌。", "startFrame": 100, "durationFrames": 54}]} totalDurationFrames={154} panels={[{ src: staticFile("images/华为依赖论/scene_7_2_img0.png"), showFrom: 0 }, { src: staticFile("images/华为依赖论/scene_7_2_img1.png"), showFrom: 1 }, { src: staticFile("images/华为依赖论/scene_7_2_img2.png"), showFrom: 2 }, { src: staticFile("images/华为依赖论/scene_7_2_img3.png"), showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
