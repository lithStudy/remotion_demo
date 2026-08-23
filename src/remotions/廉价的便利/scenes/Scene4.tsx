import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWConceptCard, BWDosAndDonts, BWSplitCompare, BWTextFocus } from "../../../components";

// 剖析：廉价人力的连锁恶果
const SCENE_DURATION = 136 + 97 + 88 + 126 + 136 + 104 + 63 + 231 + 183 + 193;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={136}>
                <BWCenterFocus content={[{"text": "你可能觉得，", "startFrame": 0, "durationFrames": 26}, {"text": "我在办公室吹空调，", "startFrame": 25, "durationFrames": 47}, {"text": "这跟我有什么关系？？", "startFrame": 72, "durationFrames": 37}, {"text": " 关系大了。", "startFrame": 108, "durationFrames": 27}]} totalDurationFrames={136} imageSrc={staticFile("images/廉价的便利/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "关系大了", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={136} durationInFrames={97}>
                <BWTextFocus content={[{"text": "人力便宜这个逻辑，", "startFrame": 0, "durationFrames": 41}, {"text": "已经打通了全社会每一个角落。", "startFrame": 40, "durationFrames": 57}]} totalDurationFrames={97} coreSentence={[{"text": "人力便宜这个逻辑，", "showFrom": 0, "endFrom": 0}, {"text": "已经打通了全社会每一个角落。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "人力便宜", "color": "red"}, {"coreSentenceAnchor": "全社会每一个角落", "color": "red"}]} />
            </Sequence>
            <Sequence from={233} durationInFrames={88}>
                <BWConceptCard content={[{"text": "廉价的人力，", "startFrame": 0, "durationFrames": 33}, {"text": "首先会阻碍创新。", "startFrame": 32, "durationFrames": 55}]} totalDurationFrames={88} imageSrc={staticFile("images/廉价的便利/scene_4_3.png")} conceptName={"廉价人力"} />
            </Sequence>
            <Sequence from={321} durationInFrames={126}>
                <BWDosAndDonts content={[{"text": "当你只需要花一点点钱就能坐轿子的时候，", "startFrame": 0, "durationFrames": 84}, {"text": "你就不会想着造车。", "startFrame": 84, "durationFrames": 42}]} totalDurationFrames={126} left={{label: "坐轿子就行", src: staticFile("images/廉价的便利/scene_4_4_left.png"), showFrom: 0 }} right={{label: "不会造车", src: staticFile("images/廉价的便利/scene_4_4_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={447} durationInFrames={136}>
                <BWDosAndDonts content={[{"text": "当你只需要花一点点钱就能让人扇扇子的时候，", "startFrame": 0, "durationFrames": 90}, {"text": "你就不会想着造电风扇。", "startFrame": 89, "durationFrames": 47}]} totalDurationFrames={136} left={{label: "扇扇子就行", src: staticFile("images/廉价的便利/scene_4_5_left.png"), showFrom: 0 }} right={{label: "不会造电风扇", src: staticFile("images/廉价的便利/scene_4_5_right.png"), showFrom: 1 }} />
            </Sequence>
            <Sequence from={583} durationInFrames={104}>
                <BWTextFocus content={[{"text": "创新很耗时，", "startFrame": 0, "durationFrames": 33}, {"text": "创新很贵，", "startFrame": 32, "durationFrames": 27}, {"text": "而你，", "startFrame": 58, "durationFrames": 18}, {"text": "很便宜。", "startFrame": 76, "durationFrames": 28}]} totalDurationFrames={104} coreSentence={[{"text": "创新很耗时，", "showFrom": 0}, {"text": "创新很贵，", "showFrom": 1}, {"text": "而你，很便宜。", "showFrom": 2, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "很便宜", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={687} durationInFrames={63}>
                <BWConceptCard content={[{"text": "廉价的人力，", "startFrame": 0, "durationFrames": 31}, {"text": "还会制造内卷。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("images/廉价的便利/scene_4_7.png")} conceptName={"内卷"} anchors={[]} />
            </Sequence>
            <Sequence from={750} durationInFrames={231}>
                <BWCauseChain content={[{"text": "企业习惯用低人力成本赚钱，", "startFrame": 0, "durationFrames": 69}, {"text": "打工人工资就上不去。", "startFrame": 68, "durationFrames": 50}, {"text": "大家兜里没钱，", "startFrame": 117, "durationFrames": 33}, {"text": "只能消费降级，", "startFrame": 150, "durationFrames": 38}, {"text": "追求更便宜的东西。", "startFrame": 187, "durationFrames": 43}]} totalDurationFrames={231} layout={"horizontal"} nodes={[{ label: "低人力成本", imageSrc: staticFile("images/廉价的便利/scene_4_8_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "工资上不去", imageSrc: staticFile("images/廉价的便利/scene_4_8_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { label: "消费降级", imageSrc: staticFile("images/廉价的便利/scene_4_8_img2.png"), showFrom: 3, enterEffect: "fadeIn" }, { label: "追求便宜", imageSrc: staticFile("images/廉价的便利/scene_4_8_img3.png"), showFrom: 4, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={981} durationInFrames={183}>
                <BWCauseChain content={[{"text": "企业为了提供更低的价格，", "startFrame": 0, "durationFrames": 54}, {"text": "就只能继续压榨打工人。", "startFrame": 53, "durationFrames": 52}, {"text": "这就形成了循环，", "startFrame": 104, "durationFrames": 42}, {"text": "也就造就了内卷。", "startFrame": 146, "durationFrames": 36}]} totalDurationFrames={183} layout={"horizontal"} nodes={[{ label: "低价压力", imageSrc: staticFile("images/廉价的便利/scene_4_9_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "压榨工人", imageSrc: staticFile("images/廉价的便利/scene_4_9_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "恶性循环", imageSrc: staticFile("images/廉价的便利/scene_4_9_img2.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "内卷结局", imageSrc: staticFile("images/廉价的便利/scene_4_9_img3.png"), showFrom: 3, enterEffect: "breathe" }]} anchors={[{"text": "循环", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "内卷", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1164} durationInFrames={193}>
                <BWSplitCompare content={[{"text": "我们每个人，", "startFrame": 0, "durationFrames": 35}, {"text": "既是享受廉价便利的消费者，", "startFrame": 34, "durationFrames": 65}, {"text": "又是被死死压榨的打工人。", "startFrame": 99, "durationFrames": 57}, {"text": "逃不掉。", "startFrame": 155, "durationFrames": 38}]} totalDurationFrames={193} leftSrc={staticFile("images/廉价的便利/scene_4_10_left.png")} rightSrc={staticFile("images/廉价的便利/scene_4_10_right.png")} leftLabel={"消费者"} rightLabel={"打工人"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/廉价的便利/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
