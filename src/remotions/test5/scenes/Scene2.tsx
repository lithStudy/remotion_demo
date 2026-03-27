import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 剖析原因：算法与大脑的底层Bug
const SCENE_DURATION = 70 + 190 + 151 + 163 + 63;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 37}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 37, "durationFrames": 33}]} anchors={[]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={190}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "咱们得认清一个现实：", "startFrame": 0, "durationFrames": 30}, {"text": "我们的大脑在进化过程中，", "startFrame": 30, "durationFrames": 30}, {"text": "保留了一个极其隐蔽的“底层Bug”，", "startFrame": 60, "durationFrames": 40}, {"text": "而现在的互联网算法，", "startFrame": 100, "durationFrames": 30}, {"text": "正精准地利用这个Bug", "startFrame": 130, "durationFrames": 30}, {"text": "把我们关进信息囚笼。", "startFrame": 160, "durationFrames": 30}]} anchors={[{"text": "底层Bug", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "信息囚笼", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={190} />
            </Sequence>
            <Sequence from={260} durationInFrames={151}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 31}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30}, {"text": "久而久之，", "startFrame": 61, "durationFrames": 30}, {"text": "我们就像被喂食的宠物，", "startFrame": 91, "durationFrames": 30}, {"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 121, "durationFrames": 30}]} anchors={[]} totalDurationFrames={151} />
            </Sequence>
            <Sequence from={411} durationInFrames={163}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 31}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 31, "durationFrames": 42}, {"text": "我们不是在拒绝真相，", "startFrame": 73, "durationFrames": 30}, {"text": "我们是在保护那个脆弱的、", "startFrame": 103, "durationFrames": 30}, {"text": "被算法喂养出来的“自我”。", "startFrame": 133, "durationFrames": 30}]} anchors={[{"text": "生存威胁", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "自我", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} totalDurationFrames={163} />
            </Sequence>
            <Sequence from={574} durationInFrames={63}>
                <BWTextFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30}, {"text": "我们每个人都是被操纵的受害者。", "startFrame": 30, "durationFrames": 33}]} coreSentence={"我们每个人都是被操纵的受害者"} anchors={[]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
