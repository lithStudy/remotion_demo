import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 引入：读书无用论
const SCENE_DURATION = 304 + 180 + 131;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={304}>
                <BWCenterFocus content={[{"text": "看着那个初中辍学创业、", "startFrame": 0, "durationFrames": 58}, {"text": "如今身价过亿的专访，", "startFrame": 57, "durationFrames": 54}, {"text": "你默默放下了手里正在啃的专业书，", "startFrame": 111, "durationFrames": 84}, {"text": "脑子里冒出一个念头：", "startFrame": 195, "durationFrames": 56}, {"text": "也许读书真的无用。", "startFrame": 250, "durationFrames": 53}]} totalDurationFrames={304} imageSrc={staticFile("images/test/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "辍学创业", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "读书无用", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={304} durationInFrames={180}>
                <BWCenterFocus content={[{"text": "那些在讲台上侃侃而谈的商业大佬，", "startFrame": 0, "durationFrames": 75}, {"text": "似乎都在用亲身经历印证“草根逆袭”的神话。", "startFrame": 74, "durationFrames": 106}]} totalDurationFrames={180} imageSrc={staticFile("images/test/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "草根逆袭", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={484} durationInFrames={131}>
                <BWCognitiveShift content={[{"text": "这种极具诱惑力的成功捷径，", "startFrame": 0, "durationFrames": 59}, {"text": "是不是让你瞬间觉得手里的书不香了？", "startFrame": 58, "durationFrames": 72}]} totalDurationFrames={131} notText={"读书有用"} butText={"成功捷径"} butSrc={staticFile("images/test/scene_1_3.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/test/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
