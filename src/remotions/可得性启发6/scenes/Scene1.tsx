import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 先入为主的偏见
const SCENE_DURATION = 123 + 159 + 120 + 125;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "你明明没有去过美国，", "startFrame": 0, "durationFrames": 30}, {"text": "但提起美国你就会觉得美国很乱、", "startFrame": 30, "durationFrames": 33}, {"text": "人民很苦。", "startFrame": 63, "durationFrames": 30}, {"text": "你有没有这样的瞬间？", "startFrame": 93, "durationFrames": 30}]} totalDurationFrames={123} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "美国", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={123} durationInFrames={159}>
                <BWCenterFocus content={[{"text": "就比如刚刷到一条关于西雅图流浪汉或者芝加哥枪击案的短视频，", "startFrame": 0, "durationFrames": 64}, {"text": "你下意识地就会在评论区敲下一句：", "startFrame": 64, "durationFrames": 35}, {"text": "“这地方真不是人待的，", "startFrame": 99, "durationFrames": 30}, {"text": "还是家里安全。”", "startFrame": 129, "durationFrames": 30}]} totalDurationFrames={159} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "西雅图", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "芝加哥", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "安全", "showFrom": 3, "color": "#000000", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={282} durationInFrames={120}>
                <BWCognitiveShift content={[{"text": "你不是那种盲目排外的愤青，", "startFrame": 0, "durationFrames": 30}, {"text": "也不是缺乏判断力的键盘侠，", "startFrame": 30, "durationFrames": 30}, {"text": "你只是太善良、", "startFrame": 60, "durationFrames": 30}, {"text": "太容易感同身受了。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} notText={"盲目排外的愤青"} butText={"太善良、太容易感同身受"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={402} durationInFrames={125}>
                <BWCognitiveShift content={[{"text": "你明明是出于对平静生活的珍惜和对混乱的本能恐惧，", "startFrame": 0, "durationFrames": 53}, {"text": "可你的认知坐标系，", "startFrame": 53, "durationFrames": 30}, {"text": "却在不知不觉中被算法和流量悄悄置换了。", "startFrame": 83, "durationFrames": 42}]} totalDurationFrames={125} notText={"对平静生活的珍惜和对混乱的本能恐惧"} butText={"被算法和流量悄悄置换"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
