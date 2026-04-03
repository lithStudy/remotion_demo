import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 理论解释：确认偏误的概念
const SCENE_DURATION = 92 + 107 + 64;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWConceptCard content={[{"text": "翻开行为经济学的书你会发现。", "startFrame": 0, "durationFrames": 31}, {"text": "这种套路叫作确认偏误。", "startFrame": 31, "durationFrames": 30}, {"text": "通俗点说就是只看自己想看的。", "startFrame": 61, "durationFrames": 31}]} totalDurationFrames={92} imageSrc={staticFile("戴着有色眼镜的眼睛图标")} conceptName={"确认偏误"} anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={107}>
                <BWCenterFocus content={[{"text": "这就像是我们戴着一副有色眼镜。", "startFrame": 0, "durationFrames": 33}, {"text": "只去搜寻和记忆符合既有信念的信息。", "startFrame": 33, "durationFrames": 37}, {"text": "而对反面证据视而不见。", "startFrame": 70, "durationFrames": 30}]} totalDurationFrames={107} imageSrc={staticFile("戴着有色眼镜的人的简笔画")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={199} durationInFrames={64}>
                <BWCenterFocus content={[{"text": "哪怕真相就硬生生地摆在眼前。", "startFrame": 0, "durationFrames": 31}, {"text": "我们也会本能地去贬低它忽略它。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={64} imageSrc={staticFile("一群人面对着屏幕，表情各异，有人皱眉，有人疑惑，有人不屑的简笔画")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
