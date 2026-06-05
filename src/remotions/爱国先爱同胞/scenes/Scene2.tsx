import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWChatBubble, BWCognitiveShift } from "../../../components";

// 举证：更多受伤的普通人
const SCENE_DURATION = 351 + 212 + 204 + 338 + 197 + 113;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={351}>
                <BWCenterFocus content={[{"text": "这不是个例。", "startFrame": 0, "durationFrames": 48}, {"text": "2024 年，山西一条高速上，", "startFrame": 48, "durationFrames": 78}, {"text": "一辆新能源汽车撞上护栏，着火了，", "startFrame": 125, "durationFrames": 91}, {"text": "车里三个人没能出来。", "startFrame": 216, "durationFrames": 45}, {"text": "家属在网上只问了一句：到底怎么回事？", "startFrame": 260, "durationFrames": 90}]} totalDurationFrames={351} imageSrc={staticFile("images/爱国先爱同胞/scene_2_2.png")} enterEffect="zoomIn" anchors={[{"text": "三个人没能出来", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={351} durationInFrames={212}>
                <BWChatBubble content={[{"text": "接下来她收到的不是答案，", "startFrame": 0, "durationFrames": 55}, {"text": "是铺天盖地的骂声——", "startFrame": 54, "durationFrames": 50}, {"text": "骂她抹黑民族品牌，", "startFrame": 103, "durationFrames": 51}, {"text": "骂她带节奏，", "startFrame": 153, "durationFrames": 31}, {"text": "骂她不爱国。", "startFrame": 184, "durationFrames": 28}]} totalDurationFrames={212} bubbles={[{ bubbleText: "抹黑民族品牌", showFrom: 2, align: "right" }, { bubbleText: "带节奏", showFrom: 3, align: "right" }, { bubbleText: "不爱国", showFrom: 4, align: "right" }]} />
            </Sequence>
            <Sequence from={563} durationInFrames={204}>
                <BWCenterFocus content={[{"text": "她失去了丈夫和孩子，", "startFrame": 0, "durationFrames": 48}, {"text": "还要在镜头外承受陌生人的审判。", "startFrame": 48, "durationFrames": 72}, {"text": "她做错了什么？", "startFrame": 120, "durationFrames": 36}, {"text": "她只是想要一个真相。", "startFrame": 156, "durationFrames": 48}]} totalDurationFrames={204} imageSrc={staticFile("images/爱国先爱同胞/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "陌生人的审判", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={767} durationInFrames={338}>
                <BWBeatSequence content={[{"text": "还有最近，很多小米车被攻击。", "startFrame": 0, "durationFrames": 75}, {"text": "有人划的是漆，", "startFrame": 74, "durationFrames": 38}, {"text": "有人扎的是胎；", "startFrame": 111, "durationFrames": 35}, {"text": "还有人连面都不露，只在评论区里诅咒：", "startFrame": 146, "durationFrames": 88}, {"text": "绿化带见，撞死你就不舔了，智商鉴定车。", "startFrame": 233, "durationFrames": 104}]} totalDurationFrames={338} stages={[{ imageSrc: staticFile("images/爱国先爱同胞/scene_2_5_img0.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/爱国先爱同胞/scene_2_5_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/爱国先爱同胞/scene_2_5_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={1105} durationInFrames={197}>
                <BWCognitiveShift content={[{"text": "提车时高高兴兴发一条视频，", "startFrame": 0, "durationFrames": 65}, {"text": "底下等着她的不是祝福，", "startFrame": 64, "durationFrames": 54}, {"text": "是车祸现场的照片和恶毒的问候。", "startFrame": 117, "durationFrames": 79}]} totalDurationFrames={197} notText={"祝福"} butText={"车祸图与恶评"} butSrc={staticFile("images/爱国先爱同胞/scene_2_6.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1302} durationInFrames={113}>
                <BWCenterFocus content={[{"text": "她做错了什么？", "startFrame": 0, "durationFrames": 34}, {"text": "她只是用自己挣的钱，买了一辆国产车。", "startFrame": 33, "durationFrames": 79}]} totalDurationFrames={113} imageSrc={staticFile("images/爱国先爱同胞/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "买了一辆国产车", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/爱国先爱同胞/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
