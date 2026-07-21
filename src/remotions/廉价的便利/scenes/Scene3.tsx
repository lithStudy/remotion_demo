import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown } from "../../../components";

// 剖析：廉价人力的具体画像
const SCENE_DURATION = 220 + 273 + 262;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={220}>
                <BWCaseBreakdown content={[{"text": "看看你身边这些画面。", "startFrame": 0, "durationFrames": 48}, {"text": "流水线上的阿姨，", "startFrame": 48, "durationFrames": 44}, {"text": "一天干12个小时。", "startFrame": 91, "durationFrames": 46}, {"text": "组装一个小商品，", "startFrame": 137, "durationFrames": 42}, {"text": "才赚几厘钱。", "startFrame": 178, "durationFrames": 42}]} totalDurationFrames={220} title={"流水线工人"} imageSrc={staticFile("images/廉价的便利/scene_3_2.png")} phases={[{"phaseLabel": "流水线", "showFrom": 1}, {"phaseLabel": "12小时", "showFrom": 2}, {"phaseLabel": "几厘报酬", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={220} durationInFrames={273}>
                <BWCaseBreakdown content={[{"text": "暴雨夜里，", "startFrame": 0, "durationFrames": 30}, {"text": "外卖小哥骑着电动车狂奔。", "startFrame": 29, "durationFrames": 57}, {"text": "一单只赚三五块，", "startFrame": 86, "durationFrames": 42}, {"text": "为了准时送达，", "startFrame": 127, "durationFrames": 35}, {"text": "他们闯红灯、逆行、爬楼梯，", "startFrame": 162, "durationFrames": 79}, {"text": "汗水混着雨水。", "startFrame": 240, "durationFrames": 32}]} totalDurationFrames={273} title={"外卖员"} imageSrc={staticFile("images/廉价的便利/scene_3_4.png")} phases={[{"phaseLabel": "暴雨夜，狂奔送", "showFrom": 0}, {"phaseLabel": "一单三五块", "showFrom": 2}, {"phaseLabel": "不惜闯红灯", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={493} durationInFrames={262}>
                <BWCaseBreakdown content={[{"text": "半夜一点，", "startFrame": 0, "durationFrames": 24}, {"text": "客服秒回你。", "startFrame": 24, "durationFrames": 35}, {"text": "态度好到甩欧美几条街。", "startFrame": 58, "durationFrames": 52}, {"text": "背后呢？", "startFrame": 110, "durationFrames": 19}, {"text": "三四千底薪的年轻人，", "startFrame": 128, "durationFrames": 43}, {"text": "背着回复速度的KPI，", "startFrame": 171, "durationFrames": 44}, {"text": "连上厕所都要掐表。", "startFrame": 214, "durationFrames": 47}]} totalDurationFrames={262} title={"深夜客服"} imageSrc={staticFile("images/廉价的便利/scene_3_8.png")} phases={[{"phaseLabel": "深夜秒回", "showFrom": 0}, {"phaseLabel": "三四千底薪", "showFrom": 4}, {"phaseLabel": "KPI压迫", "showFrom": 5}]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
