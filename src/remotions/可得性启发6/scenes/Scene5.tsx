import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMultiImage, BWTextFocus } from "../../../components";

// 总结与呼吁
const SCENE_DURATION = 89 + 90 + 35;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={89}>
                <BWCenterFocus content={[{"text": "在这个充满套路的时代，", "startFrame": 0, "durationFrames": 30}, {"text": "别让几分钟的短视频定义了你对几万公里外世界的全部想象。", "startFrame": 30, "durationFrames": 59}]} totalDurationFrames={89} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "套路", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={89} durationInFrames={90}>
                <BWMultiImage content={[{"text": "保持怀疑，", "startFrame": 0, "durationFrames": 30}, {"text": "保持理性，", "startFrame": 30, "durationFrames": 30}, {"text": "做自己大脑的主人，", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} groups={[{"textIndex": 0, "image": {"src": "问号简笔画"}, "anchor": {"text": "保持怀疑", "audioEffect": "ping"}}, {"textIndex": 1, "image": {"src": "大脑简笔画"}, "anchor": {"text": "保持理性", "audioEffect": "ping"}}, {"textIndex": 2, "image": {"src": "皇冠简笔画"}, "anchor": {"text": "大脑的主人", "audioEffect": "impact_thud"}}]} anchors={[]} />
            </Sequence>
            <Sequence from={179} durationInFrames={35}>
                <BWTextFocus content={[{"text": "就是我们普通人最高级的自我保护。", "startFrame": 0, "durationFrames": 35}]} totalDurationFrames={35} coreSentence={"普通人最高级的自我保护"} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
