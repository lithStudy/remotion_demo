import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWMethodStack, BWQuoteCitation, BWTextFocus } from "../../../components";

// 召唤·重罚与重奖
const SCENE_DURATION = 95 + 168 + 122 + 312 + 70 + 192 + 103 + 177;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={95}>
                <BWQuoteCitation content={[{"text": "有人说市监局人太少了，", "startFrame": 0, "durationFrames": 54}, {"text": "管不了那么大的市场。", "startFrame": 53, "durationFrames": 42}]} totalDurationFrames={95} quoteDisplayText={"市监局人太少了，管不了那么大的市场。"} quoteSource={"常见说法"} anchors={[]} />
            </Sequence>
            <Sequence from={95} durationInFrames={168}>
                <BWCenterFocus content={[{"text": "那么我想问你，", "startFrame": 0, "durationFrames": 31}, {"text": "交警人少不少？全国的司机多不多？", "startFrame": 30, "durationFrames": 79}, {"text": "为什么交警就能管住酒驾？", "startFrame": 108, "durationFrames": 59}]} totalDurationFrames={168} imageSrc={staticFile("images/食品安全/scene_3_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={263} durationInFrames={122}>
                <BWCenterFocus content={[{"text": "管住食品安全，", "startFrame": 0, "durationFrames": 39}, {"text": "其实并不需要多高的人力成本，", "startFrame": 38, "durationFrames": 59}, {"text": "我有两策：", "startFrame": 97, "durationFrames": 24}]} totalDurationFrames={122} imageSrc={staticFile("images/食品安全/scene_3_3.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={385} durationInFrames={312}>
                <BWMethodStack content={[{"text": "1.重罚。", "startFrame": 0, "durationFrames": 38}, {"text": "只需要你对一级市场进行抽检，", "startFrame": 37, "durationFrames": 65}, {"text": "抽到有问题的就重罚。", "startFrame": 101, "durationFrames": 44}, {"text": "怎么叫重罚？", "startFrame": 145, "durationFrames": 35}, {"text": "万倍赔偿，", "startFrame": 180, "durationFrames": 30}, {"text": "吊销销售许可，", "startFrame": 209, "durationFrames": 43}, {"text": "永不允许进入销售市场。", "startFrame": 252, "durationFrames": 60}]} totalDurationFrames={312} title={"重罚策略"} imageSrc={staticFile("images/食品安全/scene_3_4.png")} notes={[{"text": "仅需抽检，降低监管成本", "showFrom": 1}, {"text": "发现问题即重罚，形成强力威慑", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={697} durationInFrames={70}>
                <BWTextFocus content={[{"text": "抓一两个典型看还有没有敢这么干？", "startFrame": 0, "durationFrames": 70}]} totalDurationFrames={70} coreSentence={[{"text": "抓一两个典型看还有没有敢这么干？", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "典型", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={767} durationInFrames={192}>
                <BWMethodStack content={[{"text": "2.重奖。", "startFrame": 0, "durationFrames": 44}, {"text": "让百姓监督，", "startFrame": 43, "durationFrames": 34}, {"text": "在保证隐私安全的前提下，", "startFrame": 77, "durationFrames": 56}, {"text": "让百姓举报，", "startFrame": 133, "durationFrames": 31}, {"text": "发现一例奖励一例。", "startFrame": 163, "durationFrames": 28}]} totalDurationFrames={192} title={"重奖举报机制"} imageSrc={staticFile("images/食品安全/scene_3_7.png")} notes={[{"text": "让群众成为监管力量", "showFrom": 1}, {"text": "举报有奖，激励全民监督", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={959} durationInFrames={103}>
                <BWTextFocus content={[{"text": "自然会有茫茫多的职业打假人和自媒体来帮你监管。", "startFrame": 0, "durationFrames": 103}]} totalDurationFrames={103} coreSentence={[{"text": "自然会有茫茫多的", "showFrom": 0}, {"text": "职业打假人和自媒体来帮你监管。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "职业打假人", "color": "#EF4444"}, {"coreSentenceAnchor": "自媒体", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1062} durationInFrames={152}>
                <BWTextFocus content={[{"text": "所以，关键在把这两策执行到位。", "startFrame": 0, "durationFrames": 72}, {"text": "难的不是想清楚，是真正落地。", "startFrame": 72, "durationFrames": 80}]} totalDurationFrames={152} coreSentence={[{"text": "所以，关键在把这两策执行到位。", "showFrom": 0, "endFrom": 0}, {"text": "难的不是想清楚，是真正落地。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "执行到位", "color": "#EF4444"}, {"coreSentenceAnchor": "真正落地", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1214} durationInFrames={25}>
                <Freeze frame={151}>
                    <BWTextFocus content={[{"text": "所以，关键在把这两策执行到位。", "startFrame": 0, "durationFrames": 72}, {"text": "难的不是想清楚，是真正落地。", "startFrame": 72, "durationFrames": 80}]} totalDurationFrames={152} coreSentence={[{"text": "所以，关键在把这两策执行到位。", "showFrom": 0, "endFrom": 0}, {"text": "难的不是想清楚，是真正落地。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "执行到位", "color": "#EF4444"}, {"coreSentenceAnchor": "真正落地", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/食品安全/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
