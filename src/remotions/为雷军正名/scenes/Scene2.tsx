import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 剖析：饥饿营销的真相
const SCENE_DURATION = 88 + 190 + 303 + 129 + 213;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={88}>
                <BWConceptCard content={[{"text": "咱们先聊聊被骂得最惨的“饥饿营销”。", "startFrame": 0, "durationFrames": 88}]} totalDurationFrames={88} imageSrc={staticFile("images/为雷军正名/scene_2_1.png")} conceptName={"饥饿营销"} />
            </Sequence>
            <Sequence from={88} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "很多人真以为，", "startFrame": 0, "durationFrames": 44}, {"text": "当年的小米是故意压着货不卖，", "startFrame": 43, "durationFrames": 77}, {"text": "就为了看大家定闹钟抢？", "startFrame": 120, "durationFrames": 70}]} totalDurationFrames={190} imageSrc={staticFile("images/为雷军正名/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={303}>
                <BWCaseBreakdown content={[{"text": "朋友们，", "startFrame": 0, "durationFrames": 21}, {"text": "十多年前的小米，", "startFrame": 20, "durationFrames": 43}, {"text": "只是个名不见经传的初创公司。", "startFrame": 63, "durationFrames": 77}, {"text": "他们拿不到顶级供应商的产能，", "startFrame": 139, "durationFrames": 74}, {"text": "没有苹果那种几百亿砸出来的供应链话语权。", "startFrame": 212, "durationFrames": 91}]} totalDurationFrames={303} title={"小米初创链弱势"} imageSrc={staticFile("images/为雷军正名/scene_2_3.png")} phases={[{"phaseLabel": "历史主体", "showFrom": 1}, {"phaseLabel": "产能跟不上", "showFrom": 3}, {"phaseLabel": "没有话语权", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={581} durationInFrames={129}>
                <BWCauseChain content={[{"text": "没钱、", "startFrame": 0, "durationFrames": 22}, {"text": "没产能、", "startFrame": 21, "durationFrames": 29}, {"text": "供应链爬坡慢，", "startFrame": 50, "durationFrames": 39}, {"text": "这就是现实。", "startFrame": 88, "durationFrames": 41}]} totalDurationFrames={129} layout={"horizontal"} nodes={[{ label: "缺钱", imageSrc: staticFile("images/为雷军正名/scene_2_4_img0.png"), showFrom: 0 }, { label: "缺产能", imageSrc: staticFile("images/为雷军正名/scene_2_4_img1.png"), showFrom: 1 }, { label: "爬坡慢", imageSrc: staticFile("images/为雷军正名/scene_2_4_img2.png"), showFrom: 2 }, { label: "落现实", imageSrc: staticFile("images/为雷军正名/scene_2_4_img3.png"), showFrom: 3 }]} />
            </Sequence>
            <Sequence from={710} durationInFrames={213}>
                <BWCognitiveShift content={[{"text": "与其说那是精于算计的“饥饿营销”，", "startFrame": 0, "durationFrames": 70}, {"text": "不如说那是一个创业公司，", "startFrame": 69, "durationFrames": 62}, {"text": "在巨头夹击下为了活下去的狼狈挣扎。", "startFrame": 130, "durationFrames": 82}]} totalDurationFrames={213} notText={"精于算计的饥饿营销"} butText={"创业公司狼狈求生"} butSrc={staticFile("images/为雷军正名/scene_2_5.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/为雷军正名/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
