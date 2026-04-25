import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWTextFocus } from "../../../components";

// 引入
const SCENE_DURATION = 45 + 312 + 208 + 244 + 185;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={45}>
                <BWTextFocus content={[{"text": "给我一个买电车的理由！", "startFrame": 0, "durationFrames": 45}]} totalDurationFrames={45} coreSentence={["给我一个买电车的理由！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "买电车", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={45} durationInFrames={312}>
                <BWCenterFocus content={[{"text": "想必你一定在一个电车事故的短视频中看到过这样的评论。", "startFrame": 0, "durationFrames": 127}, {"text": "这种事故现场的短视频，", "startFrame": 126, "durationFrames": 54}, {"text": "往往只有最惨烈的那几秒：", "startFrame": 179, "durationFrames": 61}, {"text": "火光冲天、车体变形。", "startFrame": 240, "durationFrames": 72}]} totalDurationFrames={312} imageSrc={staticFile("images/碎片认知/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "惨烈的那几秒", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={357} durationInFrames={208}>
                <BWCauseChain content={[{"text": "但它没有拍下的是：", "startFrame": 0, "durationFrames": 43}, {"text": "司机是否连续驾驶了十几个小时？", "startFrame": 42, "durationFrames": 81}, {"text": "路口是否突然窜出了一辆逆行的电动车？", "startFrame": 123, "durationFrames": 85}]} totalDurationFrames={208} layout={"horizontal"} nodes={[{ label: "疲劳驾驶", imageSrc: staticFile("images/碎片认知/scene_1_3_img0.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "突发情况", imageSrc: staticFile("images/碎片认知/scene_1_3_img1.png"), showFrom: 2, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={565} durationInFrames={244}>
                <BWConceptCard content={[{"text": "在传统的图文时代，", "startFrame": 0, "durationFrames": 44}, {"text": "新闻报道会试图还原事件的“语境”—", "startFrame": 43, "durationFrames": 86}, {"text": "时间、地点、人物、", "startFrame": 128, "durationFrames": 57}, {"text": "起因、经过、结果。", "startFrame": 185, "durationFrames": 58}]} totalDurationFrames={244} imageSrc={staticFile("images/碎片认知/scene_1_4.png")} conceptName={"语境"} anchors={[]} />
            </Sequence>
            <Sequence from={809} durationInFrames={185}>
                <BWCenterFocus content={[{"text": "但在短视频时代，", "startFrame": 0, "durationFrames": 40}, {"text": "语境被粗暴地剥离了。", "startFrame": 39, "durationFrames": 54}, {"text": "我们看到的，", "startFrame": 92, "durationFrames": 30}, {"text": "永远是被剪裁过的“高潮”。", "startFrame": 122, "durationFrames": 63}]} totalDurationFrames={185} imageSrc={staticFile("images/碎片认知/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "高潮", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/碎片认知/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
