import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 命名·可得性启发
const SCENE_DURATION = 134 + 310;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={134}>
                <BWConceptCard content={[{"text": "学术界给这种大脑的错觉起了个名字。", "startFrame": 0, "durationFrames": 79}, {"text": "叫做可得性启发。", "startFrame": 78, "durationFrames": 55}]} totalDurationFrames={134} imageSrc={staticFile("images/认知偏见_可得性启发/scene_3_1.png")} conceptName={"可得性启发"} anchors={[]} />
            </Sequence>
            <Sequence from={134} durationInFrames={310}>
                <BWCenterFocus content={[{"text": "说白了就是大脑在极度偷懒。", "startFrame": 0, "durationFrames": 75}, {"text": "我们在判断一件事情发生的概率时。", "startFrame": 74, "durationFrames": 67}, {"text": "往往不去看枯燥真实的统计数据。", "startFrame": 140, "durationFrames": 82}, {"text": "而是看这件事在脑子里想起来有多容易。", "startFrame": 222, "durationFrames": 88}]} totalDurationFrames={310} imageSrc={staticFile("images/认知偏见_可得性启发/scene_3_2.png")} enterEffect="fadeIn" anchors={[{"text": "极度偷懒", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "不看统计数据", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "想起来有多容易", "showFrom": 3, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
