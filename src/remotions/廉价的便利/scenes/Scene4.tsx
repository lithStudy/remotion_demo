import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWDosAndDonts, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析：廉价人力的连锁恶果
const SCENE_DURATION = 132 + 98 + 79 + 124 + 154 + 118 + 67 + 233 + 192 + 197;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={132}>
                <BWCenterFocus content={[{"text": "你可能觉得，", "startFrame": 0, "durationFrames": 21}, {"text": "我在办公室吹空调，", "startFrame": 20, "durationFrames": 45}, {"text": "这跟我有什么关系？？", "startFrame": 65, "durationFrames": 34}, {"text": " 关系大了。", "startFrame": 98, "durationFrames": 33}]} totalDurationFrames={132} imageSrc={staticFile("images/廉价的便利/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "关系大了", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={132} durationInFrames={98}>
                <BWTextFocus content={[{"text": "人力便宜这个逻辑，", "startFrame": 0, "durationFrames": 38}, {"text": "已经打通了全社会每一个角落。", "startFrame": 37, "durationFrames": 61}]} totalDurationFrames={98} coreSentence={[{"text": "人力便宜这个逻辑，", "showFrom": 0, "endFrom": 0}, {"text": "已经打通了全社会每一个角落。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "人力便宜", "color": "red"}, {"coreSentenceAnchor": "全社会每一个角落", "color": "red"}]} />
            </Sequence>
            <Sequence from={230} durationInFrames={79}>
                <BWConceptCard content={[{"text": "廉价的人力，", "startFrame": 0, "durationFrames": 33}, {"text": "首先会阻碍创新。", "startFrame": 32, "durationFrames": 46}]} totalDurationFrames={79} imageSrc={staticFile("images/廉价的便利/scene_4_3.png")} conceptName={"廉价人力"} />
            </Sequence>
            <Sequence from={309} durationInFrames={124}>
                <BWDosAndDonts content={[{"text": "当你只需要花一点点钱就能坐轿子的时候，", "startFrame": 0, "durationFrames": 81}, {"text": "你就不会想着造车。", "startFrame": 80, "durationFrames": 43}]} totalDurationFrames={124} left={{label: "坐轿子就行", src: staticFile("images/廉价的便利/scene_4_4_left.png"), showFrom: 0 }} right={{label: "不会造车", src: staticFile("images/廉价的便利/scene_4_4_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={433} durationInFrames={154}>
                <BWDosAndDonts content={[{"text": "当你只需要花一点点钱就能让人扇扇子的时候，", "startFrame": 0, "durationFrames": 96}, {"text": "你就不会想着造电风扇。", "startFrame": 96, "durationFrames": 58}]} totalDurationFrames={154} left={{label: "扇扇子就行", src: staticFile("images/廉价的便利/scene_4_5_left.png"), showFrom: 0 }} right={{label: "不会造电风扇", src: staticFile("images/廉价的便利/scene_4_5_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={587} durationInFrames={118}>
                <BWTextFocus content={[{"text": "创新很耗时，", "startFrame": 0, "durationFrames": 36}, {"text": "创新很贵，", "startFrame": 36, "durationFrames": 32}, {"text": "而你，", "startFrame": 67, "durationFrames": 18}, {"text": "很便宜。", "startFrame": 85, "durationFrames": 33}]} totalDurationFrames={118} coreSentence={[{"text": "创新很耗时，", "showFrom": 0}, {"text": "创新很贵，", "showFrom": 1}, {"text": "而你，很便宜。", "showFrom": 2, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "很便宜", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={705} durationInFrames={67}>
                <BWConceptCard content={[{"text": "廉价的人力，", "startFrame": 0, "durationFrames": 31}, {"text": "还会制造内卷。", "startFrame": 30, "durationFrames": 36}]} totalDurationFrames={67} imageSrc={staticFile("images/廉价的便利/scene_4_7.png")} conceptName={"内卷"} anchors={[]} />
            </Sequence>
            <Sequence from={772} durationInFrames={233}>
                <BWCauseChain content={[{"text": "企业习惯用低人力成本赚钱，", "startFrame": 0, "durationFrames": 74}, {"text": "打工人工资就上不去。", "startFrame": 73, "durationFrames": 55}, {"text": "大家兜里没钱，", "startFrame": 128, "durationFrames": 32}, {"text": "只能消费降级，", "startFrame": 159, "durationFrames": 34}, {"text": "追求更便宜的东西。", "startFrame": 193, "durationFrames": 40}]} totalDurationFrames={233} layout={"horizontal"} nodes={[{ label: "低人力成本", imageSrc: staticFile("images/廉价的便利/scene_4_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "工资上不去", imageSrc: staticFile("images/廉价的便利/scene_4_8_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "消费降级", imageSrc: staticFile("images/廉价的便利/scene_4_8_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "追求便宜", imageSrc: staticFile("images/廉价的便利/scene_4_8_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1005} durationInFrames={192}>
                <BWCauseChain content={[{"text": "企业为了提供更低的价格，", "startFrame": 0, "durationFrames": 55}, {"text": "就只能继续压榨打工人。", "startFrame": 54, "durationFrames": 59}, {"text": "这就形成了循环，", "startFrame": 112, "durationFrames": 42}, {"text": "也就造就了内卷。", "startFrame": 154, "durationFrames": 38}]} totalDurationFrames={192} layout={"horizontal"} nodes={[{ label: "低价压力", imageSrc: staticFile("images/廉价的便利/scene_4_9_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "压榨工人", imageSrc: staticFile("images/廉价的便利/scene_4_9_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "恶性循环", imageSrc: staticFile("images/廉价的便利/scene_4_9_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "内卷结局", imageSrc: staticFile("images/廉价的便利/scene_4_9_img3.png"), showFrom: 3, enterEffect: "breathe" }]} anchors={[{"text": "循环", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "内卷", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1197} durationInFrames={197}>
                <BWSplitCompare content={[{"text": "我们每个人，", "startFrame": 0, "durationFrames": 39}, {"text": "既是享受廉价便利的消费者，", "startFrame": 38, "durationFrames": 63}, {"text": "又是被死死压榨的打工人。", "startFrame": 100, "durationFrames": 60}, {"text": "逃不掉。", "startFrame": 159, "durationFrames": 37}]} totalDurationFrames={197} leftSrc={staticFile("images/廉价的便利/scene_4_10_left.png")} rightSrc={staticFile("images/廉价的便利/scene_4_10_right.png")} leftLabel={"消费者"} rightLabel={"打工人"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
