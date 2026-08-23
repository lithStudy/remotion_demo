import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWChatBubble, BWCognitiveShift, BWKpiHero, BWMethodStack, BWPanelGrid, BWPunchCaption, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 反转·谁在邀功
const SCENE_DURATION = 92 + 234 + 120 + 144 + 144 + 268 + 94 + 228 + 120 + 120 + 125;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={92}>
                <BWKpiHero content={[{"text": "903亿的纳税总额，", "startFrame": 0, "durationFrames": 54}, {"text": "也许不是假的。", "startFrame": 53, "durationFrames": 39}]} totalDurationFrames={92} value={903} suffix={"亿"} label={"纳税总额"} useGrouping={false} decimalPlaces={0} anchors={[]} />
            </Sequence>
            <Sequence from={92} durationInFrames={234}>
                <BWSplitCompare content={[{"text": "但有些人故意混淆统计口径，", "startFrame": 0, "durationFrames": 73}, {"text": "把消费者贡献的税收算作华为的，", "startFrame": 72, "durationFrames": 71}, {"text": "把员工的个税也算作华为的，", "startFrame": 142, "durationFrames": 60}, {"text": "这就是不要脸了。", "startFrame": 202, "durationFrames": 31}]} totalDurationFrames={234} leftSrc={staticFile("images/华为纳税论/scene_3_2_left.png")} rightSrc={staticFile("images/华为纳税论/scene_3_2_right.png")} leftLabel={"消费纳税"} rightLabel={"员工个税"} leftShowFrom={1} rightShowFrom={2} anchors={[{"text": "不要脸", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={326} durationInFrames={120}>
                <BWChatBubble content={[{"text": "还有人会说，", "startFrame": 0, "durationFrames": 26}, {"text": "钱毕竟是华为交的。", "startFrame": 25, "durationFrames": 47}, {"text": "这难道不算贡献吗？", "startFrame": 72, "durationFrames": 48}]} totalDurationFrames={120} bubbles={[{ bubbleText: "钱毕竟是华为交的。这难道不算贡献吗？", showFrom: 0, align: "left" }]} anchors={[]} />
            </Sequence>
            <Sequence from={446} durationInFrames={144}>
                <BWMethodStack content={[{"text": "当然算。", "startFrame": 0, "durationFrames": 26}, {"text": "依法申报，", "startFrame": 25, "durationFrames": 29}, {"text": "准确核算，", "startFrame": 53, "durationFrames": 26}, {"text": "按时缴纳，", "startFrame": 78, "durationFrames": 28}, {"text": "都是企业的责任。", "startFrame": 105, "durationFrames": 38}]} totalDurationFrames={144} title={"纳税是企业的本分"} imageSrc={staticFile("images/华为纳税论/scene_3_4.png")} notes={[{"text": "依法申报", "showFrom": 1}, {"text": "准确核算", "showFrom": 2}, {"text": "按时缴纳", "showFrom": 3}]} />
            </Sequence>
            <Sequence from={590} durationInFrames={144}>
                <BWPanelGrid content={[{"text": "华为创造交易，", "startFrame": 0, "durationFrames": 51}, {"text": "创造利润，", "startFrame": 50, "durationFrames": 28}, {"text": "创造就业，", "startFrame": 77, "durationFrames": 28}, {"text": "当然也创造税源。", "startFrame": 104, "durationFrames": 39}]} totalDurationFrames={144} panels={[{ src: staticFile("images/华为纳税论/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("images/华为纳税论/scene_3_5_img1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/华为纳税论/scene_3_5_img2.png"), showFrom: 2, enterEffect: "fadeIn" }, { src: staticFile("images/华为纳税论/scene_3_5_img3.png"), showFrom: 3, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={734} durationInFrames={268}>
                <BWCognitiveShift content={[{"text": "但创造税源，", "startFrame": 0, "durationFrames": 40}, {"text": "并不等于承担税负。", "startFrame": 39, "durationFrames": 52}, {"text": "如果企业把增值税，", "startFrame": 90, "durationFrames": 43}, {"text": "都算成自己的奉献，", "startFrame": 133, "durationFrames": 45}, {"text": "那消费者算什么？", "startFrame": 177, "durationFrames": 40}, {"text": "一个没有名字的付款码吗？", "startFrame": 217, "durationFrames": 51}]} totalDurationFrames={268} notText={"承担税负"} butText={"创造税源"} butSrc={staticFile("images/华为纳税论/scene_3_6.png")} notContentIndex={1} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={1002} durationInFrames={94}>
                <BWPunchCaption content={[{"text": "更荒唐的是，", "startFrame": 0, "durationFrames": 34}, {"text": "这种口径常被拿来拉踩。", "startFrame": 33, "durationFrames": 60}]} totalDurationFrames={94} punches={[{"text": "更荒唐的是", "showFrom": 0, "enterEffect": "snap", "tone": "calm"}, {"text": "口径拉踩", "showFrom": 1, "enterEffect": "shake", "tone": "alert"}]} anchors={[{"text": "口径拉踩", "color": "#EF4444", "anim": "popIn", "audioEffect": "ping", "showFrom": 1}]} />
            </Sequence>
            <Sequence from={1096} durationInFrames={228}>
                <BWStatCompare content={[{"text": "讲华为的时候就用纳税总额算出千亿。", "startFrame": 0, "durationFrames": 103}, {"text": "讲别家的时候就只提企业所得税，", "startFrame": 102, "durationFrames": 82}, {"text": "纳税几十亿。", "startFrame": 184, "durationFrames": 44}]} totalDurationFrames={228} bars={[{"label": "华为", "value": 1000, "showFrom": 0}, {"label": "别家", "value": 40, "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={1324} durationInFrames={120}>
                <BWTextFocus content={[{"text": "结论就成了：", "startFrame": 0, "durationFrames": 31}, {"text": "华为更爱国。", "startFrame": 30, "durationFrames": 47}, {"text": "别家没有贡献。", "startFrame": 77, "durationFrames": 43}]} totalDurationFrames={120} coreSentence={[{"text": "华为更爱国。", "showFrom": 1, "endFrom": 2}, {"text": "别家没有贡献。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "更爱国", "color": "#EF4444"}, {"coreSentenceAnchor": "没有贡献", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1444} durationInFrames={120}>
                <BWTextFocus content={[{"text": "把消费者的账单，", "startFrame": 0, "durationFrames": 38}, {"text": "铸成企业邀功的勋章。", "startFrame": 37, "durationFrames": 53}, {"text": "就是不要脸。", "startFrame": 89, "durationFrames": 30}]} totalDurationFrames={120} coreSentence={[{"text": "把消费者的账单，", "showFrom": 0, "endFrom": 2}, {"text": "铸成企业邀功的勋章。", "showFrom": 1, "endFrom": 2}, {"text": "就是不要脸。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不要脸", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1564} durationInFrames={100}>
                <BWTextFocus content={[{"text": "用不同的尺子，", "startFrame": 0, "durationFrames": 35}, {"text": "量出想要的结论。", "startFrame": 34, "durationFrames": 39}, {"text": "就是不要脸。", "startFrame": 73, "durationFrames": 27}]} totalDurationFrames={100} coreSentence={[{"text": "用不同的尺子，", "showFrom": 0, "endFrom": 2}, {"text": "量出想要的结论。", "showFrom": 1, "endFrom": 2}, {"text": "就是不要脸。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不要脸", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1664} durationInFrames={25}>
                <Freeze frame={99}>
                    <BWTextFocus content={[{"text": "用不同的尺子，", "startFrame": 0, "durationFrames": 35}, {"text": "量出想要的结论。", "startFrame": 34, "durationFrames": 39}, {"text": "就是不要脸。", "startFrame": 73, "durationFrames": 27}]} totalDurationFrames={100} coreSentence={[{"text": "用不同的尺子，", "showFrom": 0, "endFrom": 2}, {"text": "量出想要的结论。", "showFrom": 1, "endFrom": 2}, {"text": "就是不要脸。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "不要脸", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/华为纳税论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
