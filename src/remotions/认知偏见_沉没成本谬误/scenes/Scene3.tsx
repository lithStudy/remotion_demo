import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus } from "../../../components";

// 案例剖析
const SCENE_DURATION = 137 + 398 + 408 + 270;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={137}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 27}, {"text": "这种被“沉没成本”反噬的剧毒陷阱随处可见：", "startFrame": 26, "durationFrames": 111}]} totalDurationFrames={137} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_3_1.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={137} durationInFrames={398}>
                <BWCaseBreakdown content={[{"text": "你明明知道对方是个不靠谱的渣渣，", "startFrame": 0, "durationFrames": 71}, {"text": "每次相处都让你痛不欲生，", "startFrame": 70, "durationFrames": 62}, {"text": "但你觉得“我都为他付出了三年青春，现在退出岂不是全白费了？”", "startFrame": 132, "durationFrames": 158}, {"text": "结果就是用下一个三年，", "startFrame": 289, "durationFrames": 63}, {"text": "去为错误的三年买单。", "startFrame": 351, "durationFrames": 47}]} totalDurationFrames={398} title={"内耗感情"} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_3_2.png")} phases={[{"phaseLabel": "表面个案", "showFrom": 0}, {"phaseLabel": "痛苦事实", "showFrom": 1}, {"phaseLabel": "沉没心态", "showFrom": 2}, {"phaseLabel": "后果", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={535} durationInFrames={408}>
                <BWCaseBreakdown content={[{"text": "每天加班到凌晨，", "startFrame": 0, "durationFrames": 44}, {"text": "工资不涨大饼狂飞，", "startFrame": 43, "durationFrames": 51}, {"text": "你天天都在心里骂娘，", "startFrame": 93, "durationFrames": 58}, {"text": "却安慰自己“都在这家公司熬了五年了，现在辞职太亏”。", "startFrame": 151, "durationFrames": 135}, {"text": "你没看到的是，", "startFrame": 285, "durationFrames": 32}, {"text": "那点干瘪的资历早就变成了拴着你的铁链。", "startFrame": 317, "durationFrames": 90}]} totalDurationFrames={408} title={"鸡肋工作"} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_3_3.png")} phases={[{"phaseLabel": "表面个案", "showFrom": 0}, {"phaseLabel": "痛苦事实", "showFrom": 2}, {"phaseLabel": "沉没心态", "showFrom": 3}, {"phaseLabel": "后果", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={943} durationInFrames={270}>
                <BWCaseBreakdown content={[{"text": "花了几万块报了个毫无干货的培训班，", "startFrame": 0, "durationFrames": 74}, {"text": "明知被割了韭菜，", "startFrame": 73, "durationFrames": 41}, {"text": "却还要每天花几个小时去听废话，", "startFrame": 113, "durationFrames": 77}, {"text": "只因“学费都交了，不学完对不起自己”。", "startFrame": 189, "durationFrames": 80}]} totalDurationFrames={270} title={"韭菜项目"} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_3_4.png")} phases={[{"phaseLabel": "表面个案", "showFrom": 0}, {"phaseLabel": "痛苦事实", "showFrom": 1}, {"phaseLabel": "困局加深", "showFrom": 2}, {"phaseLabel": "沉没心态", "showFrom": 3}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_沉没成本谬误/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
