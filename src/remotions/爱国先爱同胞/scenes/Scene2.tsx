import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift } from "../../../components";

// 举证：更多受伤的普通人
const SCENE_DURATION = 48 + 333 + 185 + 117;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={48}>
                <BWCenterFocus content={[{"text": "这不是个例。", "startFrame": 0, "durationFrames": 48}]} totalDurationFrames={48} imageSrc={staticFile("images/爱国先爱同胞/scene_2_1.png")} enterEffect="zoomIn" anchors={[]} />
            </Sequence>
            <Sequence from={48} durationInFrames={333}>
                <BWBeatSequence content={[{"text": "最近，很多小米车被攻击。", "startFrame": 0, "durationFrames": 66}, {"text": "有人划的是漆，", "startFrame": 65, "durationFrames": 39}, {"text": "有人扎的是胎；", "startFrame": 103, "durationFrames": 41}, {"text": "还有人连面都不露，只在评论区里诅咒：", "startFrame": 144, "durationFrames": 87}, {"text": "绿化带见，撞死你就不舔了，智商鉴定车。", "startFrame": 230, "durationFrames": 103}]} totalDurationFrames={333} stages={[{ imageSrc: staticFile("images/爱国先爱同胞/scene_2_2_img0.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/爱国先爱同胞/scene_2_2_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/爱国先爱同胞/scene_2_2_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={381} durationInFrames={185}>
                <BWCognitiveShift content={[{"text": "提车时高高兴兴发一条视频，", "startFrame": 0, "durationFrames": 68}, {"text": "底下等着她的不是祝福，", "startFrame": 67, "durationFrames": 47}, {"text": "是车祸现场的照片和恶毒的问候。", "startFrame": 114, "durationFrames": 70}]} totalDurationFrames={185} notText={"祝福"} butText={"车祸图与恶评"} butSrc={staticFile("images/爱国先爱同胞/scene_2_3.png")} notContentIndex={1} butContentIndex={2} />
            </Sequence>
            <Sequence from={566} durationInFrames={117}>
                <BWCenterFocus content={[{"text": "她做错了什么？", "startFrame": 0, "durationFrames": 34}, {"text": "她只是用自己挣的钱，买了一辆国产车。", "startFrame": 33, "durationFrames": 83}]} totalDurationFrames={117} imageSrc={staticFile("images/爱国先爱同胞/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "国产车", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
