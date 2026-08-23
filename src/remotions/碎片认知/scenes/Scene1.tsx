import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 引入
const SCENE_DURATION = 48 + 294 + 207 + 257 + 196;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={48}>
                <BWTextFocus content={[{"text": "给我一个买电车的理由！", "startFrame": 0, "durationFrames": 48}]} totalDurationFrames={48} coreSentence={["给我一个买电车的理由！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "买电车", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={48} durationInFrames={294}>
                <BWCenterFocus content={[{"text": "想必你一定在一个电车事故的短视频中看到过这样的评论。", "startFrame": 0, "durationFrames": 118}, {"text": "这种事故现场的短视频，", "startFrame": 117, "durationFrames": 52}, {"text": "往往只有最惨烈的那几秒：", "startFrame": 168, "durationFrames": 56}, {"text": "火光冲天、车体变形。", "startFrame": 224, "durationFrames": 70}]} totalDurationFrames={294} imageSrc={staticFile("images/碎片认知/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "惨烈的那几秒", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={342} durationInFrames={207}>
                <BWCauseChain content={[{"text": "但它没有拍下的是：", "startFrame": 0, "durationFrames": 39}, {"text": "司机是否连续驾驶了十几个小时？", "startFrame": 38, "durationFrames": 75}, {"text": "路口是否突然窜出了一辆逆行的电动车？", "startFrame": 112, "durationFrames": 94}]} totalDurationFrames={207} layout={"horizontal"} nodes={[{ label: "疲劳驾驶", imageSrc: staticFile("images/碎片认知/scene_1_3_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "突发情况", imageSrc: staticFile("images/碎片认知/scene_1_3_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={549} durationInFrames={257}>
                <BWConceptCard content={[{"text": "在传统的图文时代，", "startFrame": 0, "durationFrames": 46}, {"text": "新闻报道会试图还原事件的“语境”—", "startFrame": 45, "durationFrames": 95}, {"text": "时间、地点、人物、", "startFrame": 140, "durationFrames": 57}, {"text": "起因、经过、结果。", "startFrame": 197, "durationFrames": 60}]} totalDurationFrames={257} imageSrc={staticFile("images/碎片认知/scene_1_4.png")} conceptName={"语境"} anchors={[]} />
            </Sequence>
            <Sequence from={806} durationInFrames={196}>
                <BWCenterFocus content={[{"text": "但在短视频时代，", "startFrame": 0, "durationFrames": 44}, {"text": "语境被粗暴地剥离了。", "startFrame": 43, "durationFrames": 63}, {"text": "我们看到的，", "startFrame": 105, "durationFrames": 33}, {"text": "永远是被剪裁过的“高潮”。", "startFrame": 138, "durationFrames": 57}]} totalDurationFrames={196} imageSrc={staticFile("images/碎片认知/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "高潮", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/碎片认知/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
