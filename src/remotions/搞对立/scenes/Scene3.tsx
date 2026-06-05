import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWConceptCard, BWTextFocus } from "../../../components";

// 升华：不惧对立的健康社会
const SCENE_DURATION = 86 + 185 + 204;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWTextFocus content={[{"text": "一个健康的社会，", "startFrame": 0, "durationFrames": 42}, {"text": "不应该害怕对立。", "startFrame": 41, "durationFrames": 44}]} totalDurationFrames={86} coreSentence={["一个健康的社会，", "不应该害怕对立。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "害怕对立", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={86} durationInFrames={185}>
                <BWConceptCard content={[{"text": "真正的共识，", "startFrame": 0, "durationFrames": 36}, {"text": "是在无数次激烈的对立、碰撞和辩论中，", "startFrame": 36, "durationFrames": 92}, {"text": "最终筛选出来的公约数。", "startFrame": 127, "durationFrames": 57}]} totalDurationFrames={185} imageSrc={staticFile("images/搞对立/scene_3_2.png")} conceptName={"真正的共识"} anchors={[]} />
            </Sequence>
            <Sequence from={271} durationInFrames={204}>
                <BWCauseChain content={[{"text": "如果所有的不同意见都被定义为“搞对立”，", "startFrame": 0, "durationFrames": 81}, {"text": "那么剩下的只会是千篇一律的废话和死水微澜的平庸。", "startFrame": 80, "durationFrames": 123}]} totalDurationFrames={204} layout={"horizontal"} nodes={[{ label: "打压异见", imageSrc: staticFile("images/搞对立/scene_3_3_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "产出平庸", imageSrc: staticFile("images/搞对立/scene_3_3_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/搞对立/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
