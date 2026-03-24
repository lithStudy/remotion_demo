import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 揭示本质：算法利用大脑Bug
const SCENE_DURATION = 70 + 88 + 76 + 96 + 30 + 73 + 90 + 63;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 37, "audioEffect": "ping"}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 37, "durationFrames": 33, "audioEffect": null}]} anchors={[]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={88}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" content={[{"text": "咱们得认清一个现实：我们的大脑在进化过程中，", "startFrame": 0, "durationFrames": 48, "audioEffect": "ping"}, {"text": "保留了一个极其隐蔽的“底层Bug”，", "startFrame": 48, "durationFrames": 40, "audioEffect": null}]} anchors={[]} totalDurationFrames={88} />
            </Sequence>
            <Sequence from={158} durationInFrames={76}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"算法囚笼"} content={[{"text": "而现在的互联网算法,", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "正精准地利用这个Bug把我们关进信息囚笼。", "startFrame": 30, "durationFrames": 46, "audioEffect": null}]} anchors={[]} totalDurationFrames={76} />
            </Sequence>
            <Sequence from={234} durationInFrames={96}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 31, "audioEffect": "ping"}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30, "audioEffect": "ping"}, {"text": "久而久之，我们就像被喂食的宠物，", "startFrame": 61, "durationFrames": 35, "audioEffect": null}]} anchors={[{"text": "多刷半小时", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}, {"text": "喂食", "showFrom": 2, "color": "#EF4444", "anim": "spring"}]} totalDurationFrames={96} />
            </Sequence>
            <Sequence from={330} durationInFrames={30}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 0, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={360} durationInFrames={73}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 31, "audioEffect": "ping"}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 31, "durationFrames": 42, "audioEffect": null}]} anchors={[{"text": "生存威胁", "showFrom": 1, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={73} />
            </Sequence>
            <Sequence from={433} durationInFrames={90}>
                <BWCognitiveShift notText={"拒绝真相"} butText={"保护自我"} notSrc={"捂住眼睛的手"} butSrc={"婴儿在摇篮里"} content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们是在保护那个脆弱的、", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "被算法喂养出来的“自我”。", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={523} durationInFrames={63}>
                <BWTextFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们每个人都是被操纵的受害者。", "startFrame": 30, "durationFrames": 33, "audioEffect": null}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
