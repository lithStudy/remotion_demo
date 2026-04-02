import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 防御动作
const SCENE_DURATION = 67 + 127 + 121 + 90 + 105;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "想要彻底打破这种毒药般的精神内耗，", "startFrame": 0, "durationFrames": 37}, {"text": "请给自己配备两个防御动作。", "startFrame": 37, "durationFrames": 30}]} totalDurationFrames={67} imageSrc={staticFile("大脑被乌云笼罩的简笔画")} enterEffect="slideBottom" anchors={[{"text": "精神内耗", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "防御动作", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={67} durationInFrames={127}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "主动去国家统计局的官网看看真实的国民收入基座，", "startFrame": 30, "durationFrames": 51}, {"text": "去亲手找回那个被互联网隐藏起来的庞大分母。", "startFrame": 81, "durationFrames": 46}]} totalDurationFrames={127} title={"了解数据真相"} imageSrc={staticFile("一个人在电脑前浏览国家统计局官网，认真研究数据的场景")} notes={[{"text": "查看官方数据", "showFrom": 1}, {"text": "找回真实认知", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={194} durationInFrames={121}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "永远要在心里默念，", "startFrame": 30, "durationFrames": 30}, {"text": "算法售卖的是你的眼球和焦虑，", "startFrame": 60, "durationFrames": 31}, {"text": "而不是客观世界的真相。", "startFrame": 91, "durationFrames": 30}]} totalDurationFrames={121} title={"默念算法与真相"} imageSrc={staticFile("手机屏幕信息流与焦虑表情，远景为阳光穿透云层照亮开阔地面的对比简笔画")} notes={[{"text": "默念算法在搞事", "showFrom": 1}, {"text": "而非客观世界真相", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={315} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "绝不要用别人精心修饰过、", "startFrame": 0, "durationFrames": 30}, {"text": "甚至造假的分子，", "startFrame": 30, "durationFrames": 30}, {"text": "来丈量你真实且多维的人生。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("手被许多线缠绕着，象征着被控制和束缚")} enterEffect="fadeIn" anchors={[{"text": "精心修饰", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "造假", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "丈量人生", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={405} durationInFrames={105}>
                <BWTextFocus content={[{"text": "真正的清醒，", "startFrame": 0, "durationFrames": 30}, {"text": "是踏实地踩在自己泥泞但坚固的生活坐标上，", "startFrame": 30, "durationFrames": 44}, {"text": "拒绝为虚假的统计学幻影买单。", "startFrame": 74, "durationFrames": 31}]} totalDurationFrames={105} coreSentence={"拒绝为虚假的统计学幻影买单"} coreSentenceAnchors={[{"coreSentenceAnchor": "统计学幻影", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
