import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWQuoteCitation, BWTextFocus } from "../../../components";

// 召唤·重罚与重奖
const SCENE_DURATION = 101 + 177 + 129 + 329 + 72 + 229 + 111 + 112;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={101}>
                <BWQuoteCitation content={[{"text": "有人说市监局人太少了，", "startFrame": 0, "durationFrames": 57}, {"text": "管不了那么大的市场。", "startFrame": 56, "durationFrames": 44}]} totalDurationFrames={101} quoteDisplayText={"市监局人太少了，管不了那么大的市场。"} quoteSource={"常见说法"} anchors={[]} />
            </Sequence>
            <Sequence from={101} durationInFrames={177}>
                <BWCenterFocus content={[{"text": "那么我想问你，", "startFrame": 0, "durationFrames": 35}, {"text": "交警人少不少？全国的司机多不多？", "startFrame": 34, "durationFrames": 86}, {"text": "为什么交警就能管住酒驾？", "startFrame": 119, "durationFrames": 57}]} totalDurationFrames={177} imageSrc={staticFile("images/食品安全/scene_3_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={278} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "管住食品安全，", "startFrame": 0, "durationFrames": 38}, {"text": "其实并不需要多高的人力成本，", "startFrame": 37, "durationFrames": 59}, {"text": "我有两策：", "startFrame": 96, "durationFrames": 33}]} totalDurationFrames={129} imageSrc={staticFile("images/食品安全/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={407} durationInFrames={329}>
                <BWMethodStack content={[{"text": "1.重罚。", "startFrame": 0, "durationFrames": 40}, {"text": "只需要你对一级市场进行抽检，", "startFrame": 39, "durationFrames": 68}, {"text": "抽到有问题的就重罚。", "startFrame": 106, "durationFrames": 47}, {"text": "怎么叫重罚？", "startFrame": 153, "durationFrames": 28}, {"text": "万倍赔偿，", "startFrame": 181, "durationFrames": 35}, {"text": "吊销销售许可，", "startFrame": 216, "durationFrames": 45}, {"text": "永不允许进入销售市场。", "startFrame": 261, "durationFrames": 67}]} totalDurationFrames={329} title={"重罚策略"} imageSrc={staticFile("images/食品安全/scene_3_4.png")} notes={[{"text": "仅需抽检，降低监管成本", "showFrom": 1}, {"text": "发现问题即重罚，形成强力威慑", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={736} durationInFrames={72}>
                <BWTextFocus content={[{"text": "抓一两个典型看还有没有敢这么干？", "startFrame": 0, "durationFrames": 72}]} totalDurationFrames={72} coreSentence={[{"text": "抓一两个典型看还有没有敢这么干？", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "典型", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={808} durationInFrames={229}>
                <BWMethodStack content={[{"text": "2.重奖。", "startFrame": 0, "durationFrames": 45}, {"text": "让百姓监督，", "startFrame": 44, "durationFrames": 37}, {"text": "在保证隐私安全的前提下，", "startFrame": 80, "durationFrames": 56}, {"text": "让百姓举报，", "startFrame": 136, "durationFrames": 31}, {"text": "发现一例奖励一例。", "startFrame": 166, "durationFrames": 62}]} totalDurationFrames={229} title={"重奖举报机制"} imageSrc={staticFile("images/食品安全/scene_3_7.png")} notes={[{"text": "让群众成为监管力量", "showFrom": 1}, {"text": "举报有奖，激励全民监督", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1037} durationInFrames={111}>
                <BWTextFocus content={[{"text": "自然会有茫茫多的职业打假人和自媒体来帮你监管。", "startFrame": 0, "durationFrames": 111}]} totalDurationFrames={111} coreSentence={[{"text": "自然会有茫茫多的", "showFrom": 0}, {"text": "职业打假人和自媒体来帮你监管。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "职业打假人", "color": "#EF4444"}, {"coreSentenceAnchor": "自媒体", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1148} durationInFrames={112}>
                <BWTextFocus content={[{"text": "所以，为什么不做？", "startFrame": 0, "durationFrames": 55}, {"text": "谁能告诉我，这很难吗？", "startFrame": 54, "durationFrames": 57}]} totalDurationFrames={112} coreSentence={[{"text": "所以，为什么不做？", "showFrom": 0, "endFrom": 0}, {"text": "谁能告诉我，这很难吗？", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "为什么不做", "color": "#EF4444"}, {"coreSentenceAnchor": "这很难吗", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
