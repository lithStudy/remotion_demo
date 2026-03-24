import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle, BWCenterFocus, BWChatBubble, BWCognitiveShift, BWConceptCard, BWTextFocus } from "../../../components";

// 对抗偏误的“防身武器”与智力觉醒
const SCENE_DURATION = 150 + 100 + 120 + 127 + 90 + 95 + 155 + 95;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWCenterFocus imageSrc={staticFile("一个人用盾牌抵御数字信息流的抽象插画")} enterEffect="breathe" content={[{"text": "为了不让自己变成", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "算法的傀儡，", "startFrame": 30, "durationFrames": 30, "anchor": "算法的傀儡", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "下次上网冲浪，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "我建议大家在心里", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "备好这把“防身武器”：", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={150} durationInFrames={100}>
                <BWConceptCard imageSrc={staticFile("带有相反箭头符号的搜索图标")} conceptName={"反向搜索法"} content={[{"text": "反向搜索法：", "startFrame": 0, "durationFrames": 30, "anchor": "反向搜索法", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": " 当你极其认同某个观点时，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 60, "durationFrames": 40, "anchor": "反对观点", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={100} />
            </Sequence>
            <Sequence from={250} durationInFrames={120}>
                <BWAlertStyle imageSrc={staticFile("倒计时炸弹的简笔画图标")} enterEffect="slideBottom" content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30, "anchor": "爽感", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "ping"}, {"text": "如果一段文字让你读完觉得", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“太解气了、说得太对了”，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "这时候一定要停下来。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={370} durationInFrames={127}>
                <BWCognitiveShift notText={"真相"} butText={"针对你“确认偏误”定制的诱饵"} notContentIndex={1} butContentIndex={2} content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 37, "anchor": "爽感", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "往往不是真相，", "startFrame": 37, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "而是针对你“确认偏误”", "startFrame": 67, "durationFrames": 30, "anchor": "确认偏误", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": "定制的诱饵。", "startFrame": 97, "durationFrames": 30, "anchor": "诱饵", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={127} />
            </Sequence>
            <Sequence from={497} durationInFrames={90}>
                <BWChatBubble imageSrc={staticFile("一个人陷入沉思的图标")} content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30, "anchor": "我是错的", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "会有什么证据能说服我？”", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={587} durationInFrames={95}>
                <BWAlertStyle imageSrc={staticFile("一个大脑被困在捕兽夹中的卡通图标")} enterEffect="zoomIn" content={[{"text": "如果你发现没有任何证据能说服我，", "startFrame": 0, "durationFrames": 35, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "那说明你已经掉进了", "startFrame": 35, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "偏见的陷阱。", "startFrame": 65, "durationFrames": 30, "anchor": "偏见的陷阱", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={95} />
            </Sequence>
            <Sequence from={682} durationInFrames={155}>
                <BWCognitiveShift notText={"一种软弱"} butText={"一个成年人最高级的智力觉醒"} notContentIndex={3} butContentIndex={4} content={[{"text": "兄弟姐妹们，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "在这个套路满天飞的时代，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "承认自己“可能错了”", "startFrame": 60, "durationFrames": 30, "anchor": "可能错了", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "ping"}, {"text": "并不是一种软弱，", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 120, "durationFrames": 35, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={155} />
            </Sequence>
            <Sequence from={837} durationInFrames={95}>
                <BWTextFocus content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30, "anchor": "大脑的主人", "anchorColor": "#EF4444", "anchorAnim": "slideUp", "audioEffect": "ping"}, {"text": "不被偏见裹挟，", "startFrame": 30, "durationFrames": 30, "anchor": "偏见", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "我们才能真正看清这个复杂的世界。", "startFrame": 60, "durationFrames": 35, "anchor": "真正看清", "anchorColor": "#EF4444", "anchorAnim": "slideUp", "audioEffect": "ping"}]} totalDurationFrames={95} />
            </Sequence>

        </AbsoluteFill>
    );
};
