import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 揭示本质：算法利用大脑Bug
const SCENE_DURATION = 149 + 187 + 145 + 196 + 61 + 154 + 163 + 108;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_2_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 80, "audioEffect": "ping"}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 79, "durationFrames": 70, "audioEffect": null}]} anchors={[]} totalDurationFrames={149} />
            </Sequence>
            <Sequence from={149} durationInFrames={187}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_2_2.png")} enterEffect="zoomIn" content={[{"text": "咱们得认清一个现实：我们的大脑在进化过程中，", "startFrame": 0, "durationFrames": 103, "audioEffect": "ping"}, {"text": "保留了一个极其隐蔽的“底层Bug”，", "startFrame": 102, "durationFrames": 84, "audioEffect": null}]} anchors={[]} totalDurationFrames={187} />
            </Sequence>
            <Sequence from={336} durationInFrames={145}>
                <BWConceptCard imageSrc={staticFile("images/test3/scene_2_3.png")} conceptName={"算法囚笼"} content={[{"text": "而现在的互联网算法,", "startFrame": 0, "durationFrames": 47, "audioEffect": "ping"}, {"text": "正精准地利用这个Bug把我们关进信息囚笼。", "startFrame": 46, "durationFrames": 98, "audioEffect": null}]} anchors={[]} totalDurationFrames={145} />
            </Sequence>
            <Sequence from={481} durationInFrames={196}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_2_4.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 66, "audioEffect": "ping"}, {"text": "会不断推送你认同的观点。", "startFrame": 65, "durationFrames": 56, "audioEffect": "ping"}, {"text": "久而久之，我们就像被喂食的宠物，", "startFrame": 121, "durationFrames": 75, "audioEffect": null}]} anchors={[{"text": "多刷半小时", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}, {"text": "喂食", "showFrom": 2, "color": "#EF4444", "anim": "spring"}]} totalDurationFrames={196} />
            </Sequence>
            <Sequence from={677} durationInFrames={61}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_2_5.png")} enterEffect="fadeIn" content={[{"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 0, "durationFrames": 61, "audioEffect": null}]} anchors={[]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={738} durationInFrames={154}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_2_6.png")} enterEffect="fadeIn" content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 66, "audioEffect": "ping"}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 65, "durationFrames": 89, "audioEffect": null}]} anchors={[{"text": "生存威胁", "showFrom": 1, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={154} />
            </Sequence>
            <Sequence from={892} durationInFrames={163}>
                <BWCognitiveShift notText={"拒绝真相"} butText={"保护自我"} butSrc={staticFile("images/test3/scene_2_7.png")} content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 47, "audioEffect": "ping"}, {"text": "我们是在保护那个脆弱的、", "startFrame": 46, "durationFrames": 56, "audioEffect": "ping"}, {"text": "被算法喂养出来的“自我”。", "startFrame": 102, "durationFrames": 61, "audioEffect": null}]} anchors={[]} totalDurationFrames={163} />
            </Sequence>
            <Sequence from={1055} durationInFrames={108}>
                <BWTextFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 38, "audioEffect": "ping"}, {"text": "我们每个人都是被操纵的受害者。", "startFrame": 37, "durationFrames": 70, "audioEffect": null}]} anchors={[{"text": "受害者", "showFrom": 0, "color": "red"}]} totalDurationFrames={108} />
            </Sequence>
            <Audio src={staticFile("/audio/test3/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
