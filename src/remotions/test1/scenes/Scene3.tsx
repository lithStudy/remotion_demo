import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWSplitCompare } from "../../../components";

// 核心概念：确认偏误的解释与案例
const SCENE_DURATION = 148 + 102 + 68 + 120 + 120 + 63 + 30 + 31 + 120 + 90 + 126;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWConceptCard imageSrc={staticFile("大脑图标，附带筛选器/滤网，示意信息过滤")} conceptName={"确认偏误"} content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "这种现象有一个著名的核心概念，", "startFrame": 30, "durationFrames": 33, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "叫作", "startFrame": 63, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“确认偏误”（Confirmation Bias）", "startFrame": 93, "durationFrames": 55, "anchor": "确认偏误", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}]} totalDurationFrames={148} />
            </Sequence>
            <Sequence from={148} durationInFrames={102}>
                <BWCenterFocus imageSrc={staticFile("大脑戴着一副有色眼镜的图标")} enterEffect="breathe" content={[{"text": "简单通俗地说，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "确认偏误", "startFrame": 30, "durationFrames": 30, "anchor": "确认偏误", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": "就像是我们大脑自带的一副“有色滤镜”。", "startFrame": 60, "durationFrames": 42, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={102} />
            </Sequence>
            <Sequence from={250} durationInFrames={68}>
                <BWCenterFocus imageSrc={staticFile("大脑内部工作的抽象图标")} enterEffect="breathe" content={[{"text": "当我们先入为主地相信一个观点时，", "startFrame": 0, "durationFrames": 35, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "我们的脑子会自动开启两个功能：", "startFrame": 35, "durationFrames": 33, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={68} />
            </Sequence>
            <Sequence from={318} durationInFrames={120}>
                <BWSplitCompare leftSrc={staticFile("面部美颜相机界面图标")} rightSrc={staticFile("带斜杠的禁止图标或删除图标")} leftLabel={"自动美颜"} rightLabel={"一键拉黑"} content={[{"text": "第一，是“自动美颜”，", "startFrame": 0, "durationFrames": 30, "anchor": "自动美颜", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "凡是能证明我正确的信息，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "哪怕漏洞百出，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "我们也觉得是真理；", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={438} durationInFrames={120}>
                <BWSplitCompare leftSrc={staticFile("一堆堆叠整齐的文件、图表和数据报告，象征着确凿的证据")} rightSrc={staticFile("一只手点击手机屏幕上的一个删除或屏蔽按钮，代表着拒绝或否认")} leftLabel={"确凿证据"} rightLabel={"直接否认"} content={[{"text": "第二，是“一键拉黑”，", "startFrame": 0, "durationFrames": 30, "anchor": "一键拉黑", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "凡是反驳我们的证据，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "哪怕铁证如山，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "我们也觉得那是造谣。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={558} durationInFrames={63}>
                <BWCenterFocus imageSrc={staticFile("一个女孩眼中充满爱意的卡通形象")} enterEffect="breathe" content={[{"text": "这就像是一个正在热恋中的姑娘，", "startFrame": 0, "durationFrames": 33, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "她觉得男朋友哪儿都好。", "startFrame": 33, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={63} />
            </Sequence>
            <Sequence from={621} durationInFrames={30}>
                <BWCenterFocus imageSrc={staticFile("情侣简笔画图标")} enterEffect="breathe" content={[{"text": "男朋友迟到那是“有个性”，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={651} durationInFrames={31}>
                <BWCenterFocus imageSrc={staticFile("一个女孩面带微笑，头顶飘着爱心气泡，看着身旁略显邋遢的男朋友的卡通插画。")} enterEffect="breathe" content={[{"text": "男朋友不洗澡那是“纯爷们”。", "startFrame": 0, "durationFrames": 31, "anchor": "纯爷们", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "ping"}]} totalDurationFrames={31} />
            </Sequence>
            <Sequence from={682} durationInFrames={120}>
                <BWCognitiveShift notText={"男方劈腿的证据"} butText={"坏女人在勾引我男人"} notSrc={"闺蜜拿着手机，屏幕显示男友与另一女子亲密合照，女孩不愿相信地捂住耳朵"} butSrc={"女孩脑中幻想，一个妖艳女子主动缠绕男友，男友显得无辜又无奈"} notContentIndex={1} butContentIndex={3} content={[{"text": "哪怕闺蜜拿出一叠", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "男方劈腿的证据，", "startFrame": 30, "durationFrames": 30, "anchor": "劈腿证据", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "她也能脑补出那是", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“坏女人在勾引我男人”。", "startFrame": 90, "durationFrames": 30, "anchor": "坏女人勾引", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={802} durationInFrames={90}>
                <BWAlertStyle imageSrc={staticFile("大脑带着有色眼镜的图标")} enterEffect="slideBottom" content={[{"text": "这时候，事实已经不重要了，", "startFrame": 0, "durationFrames": 30, "anchor": "事实已经不重要了", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "大脑只会疯狂寻找能支持", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“我没看错人”的证据。", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={892} durationInFrames={126}>
                <BWCognitiveShift notText={"寻找真理"} butText={"证明我是对的心理游戏"} notSrc={"一个人在迷宫中，努力寻找出口，表情困惑"} butSrc={"一个玩家在棋盘上得意地看着胜利，其他人一脸无奈"} notContentIndex={1} butContentIndex={2} content={[{"text": "在互联网讨论中，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "很多人其实并不是在寻找真理，", "startFrame": 30, "durationFrames": 31, "anchor": "寻找真理", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "而是在玩一场名为“证明我是对的”", "startFrame": 61, "durationFrames": 35, "anchor": "证明我是对的", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "的心理游戏。", "startFrame": 96, "durationFrames": 30, "anchor": "心理游戏", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={126} />
            </Sequence>

        </AbsoluteFill>
    );
};
