import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWSplitCompare } from "../../../components";

// 双标
const SCENE_DURATION = 156 + 156 + 166 + 358 + 216;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={156}>
                <BWCenterFocus content={[{"text": "那些成天嘲笑它是组装厂的人，", "startFrame": 0, "durationFrames": 86}, {"text": "陷入了极度双标的技术洁癖。", "startFrame": 85, "durationFrames": 71}]} totalDurationFrames={156} imageSrc={staticFile("images/小米核心技术/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "双标", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={156} durationInFrames={156}>
                <BWSplitCompare content={[{"text": "对国外巨头采购硬件视而不见。", "startFrame": 0, "durationFrames": 78}, {"text": "对自己人却抱着莫须有的耻辱感。", "startFrame": 77, "durationFrames": 79}]} totalDurationFrames={156} leftSrc={staticFile("images/小米核心技术/scene_4_2_left.png")} rightSrc={staticFile("images/小米核心技术/scene_4_2_right.png")} leftLabel={"对国外"} rightLabel={"对自己人"} />
            </Sequence>
            <Sequence from={312} durationInFrames={166}>
                <BWSplitCompare content={[{"text": "对账本上的百亿研发视而不见。", "startFrame": 0, "durationFrames": 77}, {"text": "却对十年前的陈词滥调倒背如流。", "startFrame": 76, "durationFrames": 90}]} totalDurationFrames={166} leftSrc={staticFile("images/小米核心技术/scene_4_3_left.png")} rightSrc={staticFile("images/小米核心技术/scene_4_3_right.png")} leftLabel={"百亿研发"} rightLabel={"陈旧偏见"} />
            </Sequence>
            <Sequence from={478} durationInFrames={358}>
                <BWBeatSequence content={[{"text": "可是你想过没有？", "startFrame": 0, "durationFrames": 43}, {"text": "没有这样像鲶鱼一样的企业在前面撕咬。", "startFrame": 42, "durationFrames": 83}, {"text": "逼着产业链把成本打到地板价。", "startFrame": 125, "durationFrames": 86}, {"text": "你今天买一部好用的智能设备，", "startFrame": 210, "durationFrames": 74}, {"text": "至少还要多掏一半的冤枉钱。", "startFrame": 283, "durationFrames": 75}]} totalDurationFrames={358} stages={[{ imageSrc: staticFile("images/小米核心技术/scene_4_4_img0.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/小米核心技术/scene_4_4_img1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 2 }, { imageSrc: staticFile("images/小米核心技术/scene_4_4_img2.png"), enterEffect: "zoomIn", tone: "alert", showFrom: 3 }]} />
            </Sequence>
            <Sequence from={836} durationInFrames={216}>
                <BWCenterFocus content={[{"text": "键盘侠享受别人打下的价格底线，", "startFrame": 0, "durationFrames": 80}, {"text": "却在鄙视那个把底线砸穿的人。", "startFrame": 79, "durationFrames": 71}, {"text": "这就叫吃水还要骂挖井的人。", "startFrame": 150, "durationFrames": 65}]} totalDurationFrames={216} imageSrc={staticFile("images/小米核心技术/scene_4_6.png")} enterEffect="fadeIn" anchors={[{"text": "吃水骂井", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米核心技术/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
