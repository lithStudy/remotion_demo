import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWChatBubble, BWCognitiveShift, BWKpiHero, BWMethodStack, BWPanelGrid, BWPunchCaption, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 反转·谁在邀功
const SCENE_DURATION = 103 + 248 + 208 + 90 + 218 + 125 + 142 + 136 + 247 + 86 + 210 + 112 + 118 + 137;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWKpiHero content={[{"text": "903亿的纳税总额，", "startFrame": 0, "durationFrames": 60}, {"text": "也许不是假的。", "startFrame": 60, "durationFrames": 43}]} totalDurationFrames={103} value={903} suffix={"亿"} label={"纳税总额"} useGrouping={false} decimalPlaces={0} anchors={[]} />
            </Sequence>
            <Sequence from={103} durationInFrames={248}>
                <BWSplitCompare content={[{"text": "但有些人故意混淆统计口径，", "startFrame": 0, "durationFrames": 73}, {"text": "把消费者贡献的税收算作华为的，", "startFrame": 72, "durationFrames": 77}, {"text": "把员工的个税也算作华为的，", "startFrame": 148, "durationFrames": 67}, {"text": "这就是不要脸了。", "startFrame": 214, "durationFrames": 33}]} totalDurationFrames={248} leftSrc={staticFile("images/华为纳税论/scene_3_2_left.png")} rightSrc={staticFile("images/华为纳税论/scene_3_2_right.png")} leftLabel={"消费纳税"} rightLabel={"员工个税"} leftShowFrom={1} rightShowFrom={2} anchors={[{"text": "不要脸", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={351} durationInFrames={208}>
                <BWSplitCompare content={[{"text": "更不要脸的是，有的人，", "startFrame": 0, "durationFrames": 50}, {"text": "一边把消费者交的税算成华为的奉献，", "startFrame": 49, "durationFrames": 71}, {"text": "一边绝口不提华为年报里还挂着政府补助——", "startFrame": 120, "durationFrames": 88}]} totalDurationFrames={208} leftSrc={staticFile("images/华为纳税论/scene_3_3_left.png")} rightSrc={staticFile("images/华为纳税论/scene_3_3_right.png")} leftLabel={"税算奉献"} rightLabel={"年报补助"} leftShowFrom={1} rightShowFrom={2} anchors={[{"text": "更不要脸", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud", "showFrom": 0}]} />
            </Sequence>
            <Sequence from={559} durationInFrames={90}>
                <BWKpiHero content={[{"text": "二零二零年计入损益的，", "startFrame": 0, "durationFrames": 51}, {"text": "将近二十八亿。", "startFrame": 50, "durationFrames": 40}]} totalDurationFrames={90} value={28} suffix={"亿"} label={"政府补助"} useGrouping={false} decimalPlaces={0} anchors={[]} />
            </Sequence>
            <Sequence from={649} durationInFrames={218}>
                <BWTextFocus content={[{"text": "消费者的账单拿去邀功，", "startFrame": 0, "durationFrames": 65}, {"text": "自己口袋里的补助倒是分毫不提。", "startFrame": 64, "durationFrames": 77}, {"text": "某些营销高手确实遥遥领先。", "startFrame": 140, "durationFrames": 77}]} totalDurationFrames={218} coreSentence={[{"text": "消费者的账单拿去邀功，", "showFrom": 0, "endFrom": 2}, {"text": "自己口袋里的补助倒是分毫不提。", "showFrom": 1, "endFrom": 2}, {"text": "某些营销高手确实遥遥领先。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "遥遥领先", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={867} durationInFrames={125}>
                <BWChatBubble content={[{"text": "还有人会说，", "startFrame": 0, "durationFrames": 29}, {"text": "钱毕竟是华为交的。", "startFrame": 28, "durationFrames": 47}, {"text": "这难道不算贡献吗？", "startFrame": 74, "durationFrames": 51}]} totalDurationFrames={125} bubbles={[{ bubbleText: "钱毕竟是华为交的。这难道不算贡献吗？", showFrom: 0, align: "left" }]} anchors={[]} />
            </Sequence>
            <Sequence from={992} durationInFrames={142}>
                <BWMethodStack content={[{"text": "当然算。", "startFrame": 0, "durationFrames": 30}, {"text": "依法申报，", "startFrame": 29, "durationFrames": 26}, {"text": "准确核算，", "startFrame": 54, "durationFrames": 28}, {"text": "按时缴纳，", "startFrame": 81, "durationFrames": 27}, {"text": "都是企业的责任。", "startFrame": 108, "durationFrames": 34}]} totalDurationFrames={142} title={"纳税是企业的本分"} imageSrc={staticFile("images/华为纳税论/scene_3_4.png")} notes={[{"text": "依法申报", "showFrom": 1}, {"text": "准确核算", "showFrom": 2}, {"text": "按时缴纳", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={1134} durationInFrames={136}>
                <BWPanelGrid content={[{"text": "华为创造交易，", "startFrame": 0, "durationFrames": 40}, {"text": "创造利润，", "startFrame": 39, "durationFrames": 26}, {"text": "创造就业，", "startFrame": 64, "durationFrames": 27}, {"text": "当然也创造税源。", "startFrame": 90, "durationFrames": 46}]} totalDurationFrames={136} panels={[{ src: staticFile("images/华为纳税论/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为纳税论/scene_3_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为纳税论/scene_3_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为纳税论/scene_3_5_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={1270} durationInFrames={247}>
                <BWCognitiveShift content={[{"text": "但创造税源，", "startFrame": 0, "durationFrames": 31}, {"text": "并不等于承担税负。", "startFrame": 30, "durationFrames": 46}, {"text": "如果企业把增值税，", "startFrame": 76, "durationFrames": 40}, {"text": "都算成自己的奉献，", "startFrame": 115, "durationFrames": 44}, {"text": "那消费者算什么？", "startFrame": 159, "durationFrames": 36}, {"text": "一个没有名字的付款码吗？", "startFrame": 194, "durationFrames": 53}]} totalDurationFrames={247} notText={"承担税负"} butText={"创造税源"} butSrc={staticFile("images/华为纳税论/scene_3_6.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={1517} durationInFrames={86}>
                <BWPunchCaption content={[{"text": "更荒唐的是，", "startFrame": 0, "durationFrames": 36}, {"text": "这种口径常被拿来拉踩。", "startFrame": 35, "durationFrames": 50}]} totalDurationFrames={86} punches={[{"text": "更荒唐的是", "showFrom": 0, "enterEffect": "snap", "tone": "calm"}, {"text": "口径拉踩", "showFrom": 1, "enterEffect": "shake", "tone": "alert"}]} anchors={[{"text": "口径拉踩", "color": "#EF4444", "anim": "popIn", "audioEffect": "ping", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={1603} durationInFrames={210}>
                <BWStatCompare content={[{"text": "讲华为的时候就用纳税总额算出千亿。", "startFrame": 0, "durationFrames": 94}, {"text": "讲别家的时候就只提企业所得税，", "startFrame": 93, "durationFrames": 79}, {"text": "纳税几十亿。", "startFrame": 172, "durationFrames": 38}]} totalDurationFrames={210} bars={[{"label": "华为", "value": 1000, "showFrom": 0}, {"label": "别家", "value": 40, "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={1813} durationInFrames={112}>
                <BWTextFocus content={[{"text": "结论就成了：", "startFrame": 0, "durationFrames": 31}, {"text": "华为更爱国。", "startFrame": 30, "durationFrames": 38}, {"text": "别家没有贡献。", "startFrame": 67, "durationFrames": 44}]} totalDurationFrames={112} coreSentence={[{"text": "华为更爱国。", "showFrom": 1, "endFrom": 2}, {"text": "别家没有贡献。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "更爱国", "color": "#EF4444"}, {"coreSentenceAnchor": "没有贡献", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1925} durationInFrames={118}>
                <BWTextFocus content={[{"text": "把消费者的账单，", "startFrame": 0, "durationFrames": 38}, {"text": "铸成企业邀功的勋章。", "startFrame": 37, "durationFrames": 52}, {"text": "就是不要脸。", "startFrame": 88, "durationFrames": 30}]} totalDurationFrames={118} coreSentence={[{"text": "把消费者的账单，", "showFrom": 0, "endFrom": 2}, {"text": "铸成企业邀功的勋章。", "showFrom": 1, "endFrom": 2}, {"text": "就是不要脸。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不要脸", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2043} durationInFrames={112}>
                <BWTextFocus content={[{"text": "用不同的尺子，", "startFrame": 0, "durationFrames": 38}, {"text": "量出想要的结论。", "startFrame": 37, "durationFrames": 40}, {"text": "就是不要脸。", "startFrame": 76, "durationFrames": 36}]} totalDurationFrames={112} coreSentence={[{"text": "用不同的尺子，", "showFrom": 0, "endFrom": 2}, {"text": "量出想要的结论。", "showFrom": 1, "endFrom": 2}, {"text": "就是不要脸。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不要脸", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={2155} durationInFrames={25}>
                <Freeze frame={111}>
                    <BWTextFocus content={[{"text": "用不同的尺子，", "startFrame": 0, "durationFrames": 38}, {"text": "量出想要的结论。", "startFrame": 37, "durationFrames": 40}, {"text": "就是不要脸。", "startFrame": 76, "durationFrames": 36}]} totalDurationFrames={112} coreSentence={[{"text": "用不同的尺子，", "showFrom": 0, "endFrom": 2}, {"text": "量出想要的结论。", "showFrom": 1, "endFrom": 2}, {"text": "就是不要脸。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不要脸", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/华为纳税论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
