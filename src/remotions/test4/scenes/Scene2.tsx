import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 揭示本质：算法与大脑Bug
const SCENE_DURATION = 70 + 183 + 126 + 73 + 90 + 90;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCognitiveShift notText={"修养不够"} butText={"爱钻牛角尖"} content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 37}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 37, "durationFrames": 33}]} anchors={[]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={183}>
                <BWMagnifyingGlass content={[{"text": "咱们得认清一个现实：", "startFrame": 0, "durationFrames": 30}, {"text": "我们的大脑在进化过程中，", "startFrame": 30, "durationFrames": 30}, {"text": "保留了一个极其隐蔽的“", "startFrame": 60, "durationFrames": 30}, {"text": "底层Bug”，而现在的互", "startFrame": 90, "durationFrames": 30}, {"text": "联网算法，正精准地利用", "startFrame": 120, "durationFrames": 30}, {"text": "这个Bug把我们关进信息囚笼。", "startFrame": 150, "durationFrames": 33}]} anchors={[{"text": "底层Bug", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "联网算法", "showFrom": 4, "color": "#000000", "anim": "highlight", "audioEffect": null}]} totalDurationFrames={183} />
            </Sequence>
            <Sequence from={253} durationInFrames={126}>
                <BWCenterFocus imageSrc={staticFile("手机上推送短视频的界面")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 31}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30}, {"text": "久而久之，我们就像被喂食的宠物，", "startFrame": 61, "durationFrames": 35}, {"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 96, "durationFrames": 30}]} anchors={[{"text": "虚假的繁荣", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={126} />
            </Sequence>
            <Sequence from={379} durationInFrames={73}>
                <BWCenterFocus imageSrc={staticFile("大脑面对迎面而来的冲击波")} enterEffect="zoomIn" content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 31}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 31, "durationFrames": 42}]} anchors={[]} totalDurationFrames={73} />
            </Sequence>
            <Sequence from={452} durationInFrames={90}>
                <BWCognitiveShift notText={"拒绝真相"} butText={"保护自我"} butSrc={staticFile("一个婴儿被包裹在算法代码中")} content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 30}, {"text": "我们是在保护那个脆弱的、", "startFrame": 30, "durationFrames": 30}, {"text": "被算法喂养出来的“自我”。", "startFrame": 60, "durationFrames": 30}]} anchors={[{"text": "保护自我", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "算法喂养", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={542} durationInFrames={90}>
                <BWTextFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30}, {"text": "我们每个人都是", "startFrame": 30, "durationFrames": 30}, {"text": "被操纵的受害者。", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
