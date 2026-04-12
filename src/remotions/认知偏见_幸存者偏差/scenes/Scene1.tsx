import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引入：读书无用论
const SCENE_DURATION = 155 + 81 + 67;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={155}>
                <BWCenterFocus content={[{"text": "看着那个初中辍学创业、", "startFrame": 0, "durationFrames": 30}, {"text": "如今身价过亿的专访，", "startFrame": 30, "durationFrames": 30}, {"text": "你默默放下了手里正在啃的专业书，", "startFrame": 60, "durationFrames": 35}, {"text": "脑子里冒出一个念头：", "startFrame": 95, "durationFrames": 30}, {"text": "也许读书真的没用。", "startFrame": 125, "durationFrames": 30}]} totalDurationFrames={155} imageSrc={staticFile("一个年轻人看着电脑屏幕，屏幕上显示着创业成功人士的采访")} enterEffect="fadeIn" anchors={[{"text": "辍学创业", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "身家过亿", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "读书没用", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={155} durationInFrames={81}>
                <BWCenterFocus content={[{"text": "那些在讲台上侃侃而谈的商业大佬，", "startFrame": 0, "durationFrames": 35}, {"text": "似乎都在用亲身经历印证“草根逆袭”的神话。", "startFrame": 35, "durationFrames": 46}]} totalDurationFrames={81} imageSrc={staticFile("商业大佬在台上演讲的场景，观众席模糊")} enterEffect="fadeIn" anchors={[{"text": "草根逆袭", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={236} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "这种极具诱惑力的成功捷径，", "startFrame": 0, "durationFrames": 30}, {"text": "是不是让你瞬间觉得手里的书不香了？", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} imageSrc={staticFile("一个人看着成功人士的采访，思考人生的场景")} enterEffect="fadeIn" anchors={[{"text": "成功捷径", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
