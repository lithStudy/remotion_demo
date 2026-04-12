import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 防御动作
const SCENE_DURATION = 161 + 251 + 209 + 174 + 214;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={161}>
                <BWCenterFocus content={[{"text": "想要彻底打破这种毒药般的精神内耗，", "startFrame": 0, "durationFrames": 82}, {"text": "请给自己配备两个防御动作。", "startFrame": 81, "durationFrames": 79}]} totalDurationFrames={161} imageSrc={staticFile("images/样本偏差/scene_4_1.png")} enterEffect="slideBottom" anchors={[{"text": "精神内耗", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "防御动作", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={161} durationInFrames={251}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 21}, {"text": "主动去国家统计局的官网看看真实的国民收入基座，", "startFrame": 20, "durationFrames": 123}, {"text": "去亲手找回那个被互联网隐藏起来的庞大分母。", "startFrame": 142, "durationFrames": 108}]} totalDurationFrames={251} title={"了解数据真相"} imageSrc={staticFile("images/样本偏差/scene_4_2.png")} notes={[{"text": "查看官方数据", "showFrom": 1}, {"text": "找回真实认知", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={412} durationInFrames={209}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 19}, {"text": "永远要在心里默念，", "startFrame": 18, "durationFrames": 51}, {"text": "算法售卖的是你的眼球和焦虑，", "startFrame": 68, "durationFrames": 86}, {"text": "而不是客观世界的真相。", "startFrame": 153, "durationFrames": 55}]} totalDurationFrames={209} title={"默念算法与真相"} imageSrc={staticFile("images/样本偏差/scene_4_3.png")} notes={[{"text": "默念算法在搞事", "showFrom": 1}, {"text": "而非客观世界真相", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={621} durationInFrames={174}>
                <BWCenterFocus content={[{"text": "绝不要用别人精心修饰过、", "startFrame": 0, "durationFrames": 54}, {"text": "甚至造假的分子，", "startFrame": 53, "durationFrames": 44}, {"text": "来丈量你真实且多维的人生。", "startFrame": 97, "durationFrames": 77}]} totalDurationFrames={174} imageSrc={staticFile("images/样本偏差/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "精心修饰", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "造假", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "丈量人生", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={795} durationInFrames={214}>
                <BWTextFocus content={[{"text": "真正的清醒，", "startFrame": 0, "durationFrames": 33}, {"text": "是踏实地踩在自己泥泞但坚固的生活坐标上，", "startFrame": 32, "durationFrames": 105}, {"text": "拒绝为虚假的统计学幻影买单。", "startFrame": 137, "durationFrames": 77}]} totalDurationFrames={214} coreSentence={["拒绝为虚假的统计学幻影买单"]} coreSentenceAnchors={[{"coreSentenceAnchor": "统计学幻影", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/样本偏差/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
