import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift } from "../../../components";

// 举证：更多受伤的普通人
const SCENE_DURATION = 52 + 332 + 203 + 118;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={52}>
                <BWCenterFocus content={[{"text": "这不是个例。", "startFrame": 0, "durationFrames": 52}]} totalDurationFrames={52} imageSrc={staticFile("images/爱国先爱同胞/scene_2_1.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={52} durationInFrames={332}>
                <BWBeatSequence content={[{"text": "最近，很多小米车被攻击。", "startFrame": 0, "durationFrames": 69}, {"text": "有人划的是漆，", "startFrame": 68, "durationFrames": 39}, {"text": "有人扎的是胎；", "startFrame": 106, "durationFrames": 35}, {"text": "还有人连面都不露，只在评论区里诅咒：", "startFrame": 141, "durationFrames": 86}, {"text": "绿化带见，希望明天还能见到你，智商鉴定车。", "startFrame": 226, "durationFrames": 105}]} totalDurationFrames={332} stages={[{ imageSrc: staticFile("images/爱国先爱同胞/scene_2_2_img0.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/爱国先爱同胞/scene_2_2_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/爱国先爱同胞/scene_2_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={384} durationInFrames={203}>
                <BWCognitiveShift content={[{"text": "提车时高高兴兴发一条视频，", "startFrame": 0, "durationFrames": 72}, {"text": "底下等着她的不是祝福，", "startFrame": 72, "durationFrames": 57}, {"text": "是车祸现场的照片和恶毒的问候。", "startFrame": 128, "durationFrames": 74}]} totalDurationFrames={203} notText={"祝福"} butText={"车祸图与恶评"} butSrc={staticFile("images/爱国先爱同胞/scene_2_3.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={587} durationInFrames={118}>
                <BWCenterFocus content={[{"text": "她做错了什么？", "startFrame": 0, "durationFrames": 34}, {"text": "她只是用自己挣的钱，买了一辆国产车。", "startFrame": 33, "durationFrames": 85}]} totalDurationFrames={118} imageSrc={staticFile("images/爱国先爱同胞/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "国产车", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
