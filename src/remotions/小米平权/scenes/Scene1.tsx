import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWQuoteCitation } from "../../../components";

// 引入：小米与廉价的真相
const SCENE_DURATION = 58 + 155;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={58}>
                <BWCenterFocus content={[{"text": "全网嘲笑小米“廉价”。", "startFrame": 0, "durationFrames": 58}]} totalDurationFrames={58} imageSrc={staticFile("images/小米平权/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "廉价", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={58} durationInFrames={155}>
                <BWQuoteCitation content={[{"text": "有没有人想过——", "startFrame": 0, "durationFrames": 41}, {"text": "是谁，", "startFrame": 40, "durationFrames": 23}, {"text": "在希望你觉得买得起好东西是一件丢脸的事？", "startFrame": 63, "durationFrames": 91}]} totalDurationFrames={155} quoteSource={"思考"} quoteDisplayText={"买得起好东西是一件丢脸的事吗？"} showFrom={1} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
