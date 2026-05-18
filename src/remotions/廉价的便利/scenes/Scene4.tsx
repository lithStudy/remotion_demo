import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析：内卷死循环
const SCENE_DURATION = 90 + 30 + 61 + 82 + 120 + 60 + 90 + 210 + 90 + 30;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "你可能觉得，", "startFrame": 0, "durationFrames": 30}, {"text": "我在办公室吹空调，", "startFrame": 30, "durationFrames": 30}, {"text": "这跟我有什么关系？", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={30}>
                <BWTextFocus content={[{"text": "关系大了。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["关系大了。"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={61}>
                <BWConceptCard content={[{"text": "人力便宜这个逻辑，", "startFrame": 0, "durationFrames": 30}, {"text": "已经打通了全社会每一个角落。", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"人力便宜"} anchors={[]} />
            </Sequence>
            <Sequence from={181} durationInFrames={82}>
                <BWCenterFocus content={[{"text": "老板为什么宁愿招三个应届生996试错，", "startFrame": 0, "durationFrames": 42}, {"text": "也不肯砸钱搞真正能提效的软件和研发？", "startFrame": 42, "durationFrames": 40}]} totalDurationFrames={82} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "996试错", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={263} durationInFrames={120}>
                <BWSplitCompare content={[{"text": "因为软件贵，", "startFrame": 0, "durationFrames": 30}, {"text": "研发有风险。", "startFrame": 30, "durationFrames": 30}, {"text": "而你，", "startFrame": 60, "durationFrames": 30}, {"text": "很便宜。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"软件研发"} rightLabel={"便宜人力"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={383} durationInFrames={60}>
                <BWSplitCompare content={[{"text": "人力试错的成本，", "startFrame": 0, "durationFrames": 30}, {"text": "远远低于技术创新。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"人力试错"} rightLabel={"技术创新"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={443} durationInFrames={90}>
                <BWCauseChain content={[{"text": "于是就形成了这个死循环。", "startFrame": 0, "durationFrames": 30}, {"text": "企业习惯用低人力成本赚钱，", "startFrame": 30, "durationFrames": 30}, {"text": "打工人工资就上不去。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} layout={"horizontal"} nodes={[{ label: "低价用人", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "工资停滞", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "fadeIn" }, { label: "死循环", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={533} durationInFrames={210}>
                <BWCauseChain content={[{"text": "大家兜里没钱，", "startFrame": 0, "durationFrames": 30}, {"text": "只能消费降级，", "startFrame": 30, "durationFrames": 30}, {"text": "追求更便宜的东西。", "startFrame": 60, "durationFrames": 30}, {"text": "企业为了提供更低的价格，", "startFrame": 90, "durationFrames": 30}, {"text": "只能继续压榨打工人。", "startFrame": 120, "durationFrames": 30}, {"text": "这就形成了循环，", "startFrame": 150, "durationFrames": 30}, {"text": "这就造就了内卷。", "startFrame": 180, "durationFrames": 30}]} totalDurationFrames={210} layout={"horizontal"} nodes={[{ label: "没钱", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "消费降级", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "压榨劳动力", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 4, enterEffect: "slideBottom" }, { label: "恶性循环", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 5, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={743} durationInFrames={90}>
                <BWSplitCompare content={[{"text": "我们每个人，", "startFrame": 0, "durationFrames": 30}, {"text": "既是享受廉价便利的消费者，", "startFrame": 30, "durationFrames": 30}, {"text": "又是被死死压榨的打工人。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"消费者"} rightLabel={"打工人"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={833} durationInFrames={30}>
                <BWTextFocus content={[{"text": "逃不掉。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["逃不掉。"]} coreSentenceAnchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
