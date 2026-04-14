import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 理论解释：确认偏误的概念
const SCENE_DURATION = 245 + 237 + 145;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={245}>
                <BWConceptCard content={[{"text": "翻开行为经济学的书你会发现。", "startFrame": 0, "durationFrames": 63}, {"text": "这种套路叫作确认偏误。", "startFrame": 62, "durationFrames": 93}, {"text": "通俗点说就是只看自己想看的。", "startFrame": 154, "durationFrames": 90}]} totalDurationFrames={245} imageSrc={staticFile("images/认知偏见_确认偏误/scene_3_2.png")} conceptName={"确认偏误"} anchors={[]} />
            </Sequence>
            <Sequence from={245} durationInFrames={237}>
                <BWCenterFocus content={[{"text": "这就像是我们戴着一副有色眼镜。", "startFrame": 0, "durationFrames": 76}, {"text": "只去搜寻和记忆符合既有信念的信息。", "startFrame": 75, "durationFrames": 98}, {"text": "而对反面证据视而不见。", "startFrame": 172, "durationFrames": 65}]} totalDurationFrames={237} imageSrc={staticFile("images/认知偏见_确认偏误/scene_3_4.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={482} durationInFrames={145}>
                <BWCenterFocus content={[{"text": "哪怕真相就硬生生地摆在眼前。", "startFrame": 0, "durationFrames": 70}, {"text": "我们也会本能地去贬低它忽略它。", "startFrame": 69, "durationFrames": 76}]} totalDurationFrames={145} imageSrc={staticFile("images/认知偏见_确认偏误/scene_3_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
