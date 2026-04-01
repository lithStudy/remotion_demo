import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 先入为主的偏见
const SCENE_DURATION = 499 + 224 + 278;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={499}>
                <BWCenterFocus content={[{"text": "你明明没有去过美国，", "startFrame": 0, "durationFrames": 50}, {"text": "但提起美国你就会觉得美国很乱、", "startFrame": 49, "durationFrames": 66}, {"text": "人民很苦。", "startFrame": 114, "durationFrames": 41}, {"text": "你有没有这样的瞬间？", "startFrame": 154, "durationFrames": 46}, {"text": "就比如刚刷到一条关于西雅图流浪汉或者芝加哥枪击案的短视频，", "startFrame": 200, "durationFrames": 146}, {"text": "你下意识地就会在评论区敲下一句：", "startFrame": 345, "durationFrames": 66}, {"text": "“这地方真不是人待的，", "startFrame": 411, "durationFrames": 53}, {"text": "还是家里安全。”", "startFrame": 463, "durationFrames": 35}]} totalDurationFrames={499} imageSrc={staticFile("images/可得性启发6/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "美国", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "西雅图流浪汉", "showFrom": 4, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "芝加哥枪击案", "showFrom": 4, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={499} durationInFrames={224}>
                <BWCognitiveShift content={[{"text": "你不是那种盲目排外的愤青，", "startFrame": 0, "durationFrames": 65}, {"text": "也不是缺乏判断力的键盘侠，", "startFrame": 64, "durationFrames": 67}, {"text": "你只是太善良、", "startFrame": 130, "durationFrames": 39}, {"text": "太容易感同身受了。", "startFrame": 169, "durationFrames": 55}]} totalDurationFrames={224} notText={"盲目排外的愤青"} butText={"善良、易感同身受"} butSrc={staticFile("images/可得性启发6/scene_1_2.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={723} durationInFrames={278}>
                <BWCenterFocus content={[{"text": "你明明是出于对平静生活的珍惜和对混乱的本能恐惧，", "startFrame": 0, "durationFrames": 124}, {"text": "可你的认知坐标系，", "startFrame": 123, "durationFrames": 51}, {"text": "却在不知不觉中被算法和流量悄悄置换了。", "startFrame": 173, "durationFrames": 105}]} totalDurationFrames={278} imageSrc={staticFile("images/可得性启发6/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "认知坐标系", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "算法", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "流量", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/可得性启发6/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
