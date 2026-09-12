import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWMethodStack, BWQuoteCitation, BWTextFocus } from "../../../components";

// 召唤·重罚与重奖
const SCENE_DURATION = 106 + 175 + 130 + 324 + 77 + 212 + 103 + 122;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={106}>
                <BWQuoteCitation content={[{"text": "有人说市监局人太少了，", "startFrame": 0, "durationFrames": 59}, {"text": "管不了那么大的市场。", "startFrame": 58, "durationFrames": 47}]} totalDurationFrames={106} quoteDisplayText={"市监局人太少了，管不了那么大的市场。"} quoteSource={"常见说法"} anchors={[]} />
            </Sequence>
            <Sequence from={106} durationInFrames={175}>
                <BWCenterFocus content={[{"text": "那么我想问你，", "startFrame": 0, "durationFrames": 34}, {"text": "交警人少不少？全国的司机多不多？", "startFrame": 33, "durationFrames": 78}, {"text": "为什么交警就能管住酒驾？", "startFrame": 111, "durationFrames": 64}]} totalDurationFrames={175} imageSrc={staticFile("images/食品安全/scene_3_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={281} durationInFrames={130}>
                <BWCenterFocus content={[{"text": "管住食品安全，", "startFrame": 0, "durationFrames": 40}, {"text": "其实并不需要多高的人力成本，", "startFrame": 39, "durationFrames": 59}, {"text": "我有两策：", "startFrame": 98, "durationFrames": 32}]} totalDurationFrames={130} imageSrc={staticFile("images/食品安全/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={411} durationInFrames={324}>
                <BWMethodStack content={[{"text": "1.重罚。", "startFrame": 0, "durationFrames": 47}, {"text": "只需要你对一级市场进行抽检，", "startFrame": 46, "durationFrames": 60}, {"text": "抽到有问题的就重罚。", "startFrame": 106, "durationFrames": 56}, {"text": "怎么叫重罚？", "startFrame": 162, "durationFrames": 42}, {"text": "万倍赔偿，", "startFrame": 203, "durationFrames": 33}, {"text": "吊销销售许可，", "startFrame": 236, "durationFrames": 40}, {"text": "永不允许进入销售市场。", "startFrame": 275, "durationFrames": 48}]} totalDurationFrames={324} title={"重罚策略"} imageSrc={staticFile("images/食品安全/scene_3_4.png")} notes={[{"text": "仅需抽检，降低监管成本", "showFrom": 1}, {"text": "发现问题即重罚，形成强力威慑", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={735} durationInFrames={77}>
                <BWTextFocus content={[{"text": "抓一两个典型看还有没有敢这么干？", "startFrame": 0, "durationFrames": 77}]} totalDurationFrames={77} coreSentence={[{"text": "抓一两个典型看还有没有敢这么干？", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "典型", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={812} durationInFrames={212}>
                <BWMethodStack content={[{"text": "2.重奖。", "startFrame": 0, "durationFrames": 37}, {"text": "让百姓监督，", "startFrame": 36, "durationFrames": 36}, {"text": "在保证隐私安全的前提下，", "startFrame": 72, "durationFrames": 59}, {"text": "让百姓举报，", "startFrame": 130, "durationFrames": 29}, {"text": "发现一例奖励一例。", "startFrame": 159, "durationFrames": 53}]} totalDurationFrames={212} title={"重奖举报机制"} imageSrc={staticFile("images/食品安全/scene_3_7.png")} notes={[{"text": "让群众成为监管力量", "showFrom": 1}, {"text": "举报有奖，激励全民监督", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1024} durationInFrames={103}>
                <BWTextFocus content={[{"text": "自然会有茫茫多的职业打假人和自媒体来帮你监管。", "startFrame": 0, "durationFrames": 103}]} totalDurationFrames={103} coreSentence={[{"text": "自然会有茫茫多的", "showFrom": 0}, {"text": "职业打假人和自媒体来帮你监管。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "职业打假人", "color": "#EF4444"}, {"coreSentenceAnchor": "自媒体", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1127} durationInFrames={97}>
                <BWTextFocus content={[{"text": "所以，为什么不做？", "startFrame": 0, "durationFrames": 47}, {"text": "谁能告诉我，这很难吗？", "startFrame": 46, "durationFrames": 50}]} totalDurationFrames={97} coreSentence={[{"text": "所以，为什么不做？", "showFrom": 0, "endFrom": 0}, {"text": "谁能告诉我，这很难吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "为什么不做", "color": "#EF4444"}, {"coreSentenceAnchor": "这很难吗", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1224} durationInFrames={25}>
                <Freeze frame={96}>
                    <BWTextFocus content={[{"text": "所以，为什么不做？", "startFrame": 0, "durationFrames": 47}, {"text": "谁能告诉我，这很难吗？", "startFrame": 46, "durationFrames": 50}]} totalDurationFrames={97} coreSentence={[{"text": "所以，为什么不做？", "showFrom": 0, "endFrom": 0}, {"text": "谁能告诉我，这很难吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "为什么不做", "color": "#EF4444"}, {"coreSentenceAnchor": "这很难吗", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
