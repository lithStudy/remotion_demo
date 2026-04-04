import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 理论解释：确认偏误的概念
const SCENE_DURATION = 232 + 213 + 142;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={232}>
                <BWConceptCard content={[{"text": "翻开行为经济学的书你会发现。", "startFrame": 0, "durationFrames": 64}, {"text": "这种套路叫作确认偏误。", "startFrame": 63, "durationFrames": 78}, {"text": "通俗点说就是只看自己想看的。", "startFrame": 140, "durationFrames": 91}]} totalDurationFrames={232} imageSrc={staticFile("images/认知偏见_确认偏误/scene_3_2.png")} conceptName={"确认偏误"} anchors={[]} />
            </Sequence>
            <Sequence from={232} durationInFrames={213}>
                <BWCenterFocus content={[{"text": "这就像是我们戴着一副有色眼镜。", "startFrame": 0, "durationFrames": 64}, {"text": "只去搜寻和记忆符合既有信念的信息。", "startFrame": 63, "durationFrames": 91}, {"text": "而对反面证据视而不见。", "startFrame": 153, "durationFrames": 59}]} totalDurationFrames={213} imageSrc={staticFile("images/认知偏见_确认偏误/scene_3_4.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={445} durationInFrames={142}>
                <BWCenterFocus content={[{"text": "哪怕真相就硬生生地摆在眼前。", "startFrame": 0, "durationFrames": 66}, {"text": "我们也会本能地去贬低它忽略它。", "startFrame": 65, "durationFrames": 77}]} totalDurationFrames={142} imageSrc={staticFile("images/认知偏见_确认偏误/scene_3_7.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
