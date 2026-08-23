import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown } from "../../../components";

// 剖析：廉价人力的具体画像
const SCENE_DURATION = 215 + 255 + 276;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={215}>
                <BWCaseBreakdown content={[{"text": "看看你身边这些画面。", "startFrame": 0, "durationFrames": 48}, {"text": "流水线上的阿姨，", "startFrame": 48, "durationFrames": 41}, {"text": "一天干12个小时。", "startFrame": 88, "durationFrames": 44}, {"text": "组装一个小商品，", "startFrame": 131, "durationFrames": 43}, {"text": "才赚几厘钱。", "startFrame": 174, "durationFrames": 41}]} totalDurationFrames={215} title={"流水线工人"} imageSrc={staticFile("images/廉价的便利/scene_3_2.png")} phases={[{"phaseLabel": "流水线", "showFrom": 1}, {"phaseLabel": "12小时", "showFrom": 2}, {"phaseLabel": "几厘报酬", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={215} durationInFrames={255}>
                <BWCaseBreakdown content={[{"text": "暴雨夜里，", "startFrame": 0, "durationFrames": 36}, {"text": "外卖小哥骑着电动车狂奔。", "startFrame": 36, "durationFrames": 56}, {"text": "一单只赚三五块，", "startFrame": 91, "durationFrames": 39}, {"text": "为了准时送达，", "startFrame": 129, "durationFrames": 31}, {"text": "他们闯红灯、逆行、爬楼梯，", "startFrame": 159, "durationFrames": 64}, {"text": "汗水混着雨水。", "startFrame": 223, "durationFrames": 32}]} totalDurationFrames={255} title={"外卖员"} imageSrc={staticFile("images/廉价的便利/scene_3_4.png")} phases={[{"phaseLabel": "暴雨夜，狂奔送", "showFrom": 0}, {"phaseLabel": "一单三五块", "showFrom": 2}, {"phaseLabel": "不惜闯红灯", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={470} durationInFrames={276}>
                <BWCaseBreakdown content={[{"text": "半夜一点，", "startFrame": 0, "durationFrames": 19}, {"text": "客服秒回你。", "startFrame": 18, "durationFrames": 33}, {"text": "态度好到甩欧美几条街。", "startFrame": 51, "durationFrames": 59}, {"text": "背后呢？", "startFrame": 110, "durationFrames": 21}, {"text": "三四千底薪的年轻人，", "startFrame": 130, "durationFrames": 47}, {"text": "背着回复速度的KPI，", "startFrame": 177, "durationFrames": 54}, {"text": "连上厕所都要掐表。", "startFrame": 231, "durationFrames": 45}]} totalDurationFrames={276} title={"深夜客服"} imageSrc={staticFile("images/廉价的便利/scene_3_8.png")} phases={[{"phaseLabel": "深夜秒回", "showFrom": 0}, {"phaseLabel": "三四千底薪", "showFrom": 4}, {"phaseLabel": "KPI压迫", "showFrom": 5}]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
