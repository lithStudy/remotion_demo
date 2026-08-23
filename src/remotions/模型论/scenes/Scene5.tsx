import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWKpiHero, BWMagnifyingGlass, BWQuoteCitation, BWSplitCompare } from "../../../components";

// 剖析·2020分水岭
const SCENE_DURATION = 86 + 269 + 217 + 154 + 387 + 285;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={86}>
                <BWMagnifyingGlass content={[{"text": "但是我可以告诉你至少一个分辨的标准：", "startFrame": 0, "durationFrames": 86}]} totalDurationFrames={86} anchors={[{"text": "分辨的标准", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={86} durationInFrames={269}>
                <BWKpiHero content={[{"text": "如果这个所谓的模型是2020年之前出现的，", "startFrame": 0, "durationFrames": 95}, {"text": "那他就一定是非智能的固定程序。", "startFrame": 94, "durationFrames": 63}, {"text": "因为在2020年之前，", "startFrame": 156, "durationFrames": 55}, {"text": "GPT-3还没有出现。", "startFrame": 211, "durationFrames": 57}]} totalDurationFrames={269} value={2020} suffix={"年之前"} label={"GPT-3出现"} useGrouping={false} anchors={[]} />
            </Sequence>
            <Sequence from={355} durationInFrames={217}>
                <BWCauseChain content={[{"text": "是GPT-3的出现验证了大力真的可以出奇迹，", "startFrame": 0, "durationFrames": 114}, {"text": "堆参数真的有用，", "startFrame": 113, "durationFrames": 44}, {"text": "才有了大模型这个概念的出现。", "startFrame": 157, "durationFrames": 60}]} totalDurationFrames={217} layout={"horizontal"} nodes={[{ label: "GPT-3 出现", imageSrc: staticFile("images/模型论/scene_5_3_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { label: "大力出奇迹", imageSrc: staticFile("images/模型论/scene_5_3_img1.png"), showFrom: 1, enterEffect: "breathe" }, { label: "大模型概念", imageSrc: staticFile("images/模型论/scene_5_3_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={572} durationInFrames={154}>
                <BWQuoteCitation content={[{"text": "有人要问了，", "startFrame": 0, "durationFrames": 27}, {"text": "难道就没有其他公司之前就在做了吗？", "startFrame": 26, "durationFrames": 69}, {"text": "还真没有，", "startFrame": 94, "durationFrames": 26}, {"text": "因为成本问题。", "startFrame": 119, "durationFrames": 34}]} totalDurationFrames={154} quoteSource={"有人问"} quoteDisplayText={"难道就没有其他公司之前就在做了吗？"} showFrom={1} anchors={[{"text": "成本问题", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={726} durationInFrames={387}>
                <BWKpiHero content={[{"text": "OpenAI从成立到研发GPT-3的过程中，", "startFrame": 0, "durationFrames": 103}, {"text": "总计花费了3500万美元+ ，", "startFrame": 102, "durationFrames": 61}, {"text": "历时4年，", "startFrame": 162, "durationFrames": 14}, {"text": "而这个过程是没有产生任何收益的，", "startFrame": 175, "durationFrames": 106}, {"text": "甚至连研究到底有没有价值，也是不知道的。", "startFrame": 281, "durationFrames": 106}]} totalDurationFrames={387} blocks={[{"value": 3500, "suffix": "万美元+", "label": "研发花费", "showFrom": 1, "useGrouping": true}, {"value": 4, "suffix": "年", "label": "研发耗时", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={1113} durationInFrames={285}>
                <BWSplitCompare content={[{"text": "除了OpenAI这样一家没有盈利目标的公司外，", "startFrame": 0, "durationFrames": 93}, {"text": "没有任何一家公司，", "startFrame": 92, "durationFrames": 41}, {"text": "能花4年的时间，", "startFrame": 133, "durationFrames": 40}, {"text": "烧几千万美元的钱，", "startFrame": 172, "durationFrames": 50}, {"text": "来做一件不一定有结果的事情。", "startFrame": 221, "durationFrames": 63}]} totalDurationFrames={285} leftSrc={staticFile("images/模型论/scene_5_6_left.png")} rightSrc={staticFile("images/模型论/scene_5_6_right.png")} leftLabel={"OpenAI"} rightLabel={"其他公司"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/模型论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
