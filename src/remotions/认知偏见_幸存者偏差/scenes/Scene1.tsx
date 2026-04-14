import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引入：读书无用论
const SCENE_DURATION = 287 + 176 + 147;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={287}>
                <BWCenterFocus content={[{"text": "看着那个初中辍学创业、", "startFrame": 0, "durationFrames": 59}, {"text": "如今身价过亿的专访，", "startFrame": 58, "durationFrames": 50}, {"text": "你默默放下了手里正在啃的专业书，", "startFrame": 108, "durationFrames": 77}, {"text": "脑子里冒出一个念头：", "startFrame": 184, "durationFrames": 53}, {"text": "也许读书真的没用。", "startFrame": 236, "durationFrames": 51}]} totalDurationFrames={287} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "辍学创业", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "身家过亿", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "读书没用", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={287} durationInFrames={176}>
                <BWCenterFocus content={[{"text": "那些在讲台上侃侃而谈的商业大佬，", "startFrame": 0, "durationFrames": 74}, {"text": "似乎都在用亲身经历印证“草根逆袭”的神话。", "startFrame": 73, "durationFrames": 103}]} totalDurationFrames={176} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "草根逆袭", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={463} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "这种极具诱惑力的成功捷径，", "startFrame": 0, "durationFrames": 59}, {"text": "是不是让你瞬间觉得手里的书不香了？", "startFrame": 58, "durationFrames": 88}]} totalDurationFrames={147} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "成功捷径", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_幸存者偏差/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
