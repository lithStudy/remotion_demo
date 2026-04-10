import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 举例：剧毒鸡汤
const SCENE_DURATION = 112 + 170 + 167 + 155 + 201 + 167 + 183;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 21}, {"text": "幸存者偏差的“剧毒鸡汤”随处可见：", "startFrame": 20, "durationFrames": 91}]} totalDurationFrames={112} imageSrc={staticFile("images/test/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={112} durationInFrames={170}>
                <BWCenterFocus content={[{"text": "理财圈的“大神”：", "startFrame": 0, "durationFrames": 45}, {"text": "你看到某博主晒出翻倍的收益单，", "startFrame": 44, "durationFrames": 76}, {"text": "就觉得跟着他能发财。", "startFrame": 119, "durationFrames": 50}]} totalDurationFrames={170} imageSrc={staticFile("images/test/scene_3_2.png")} enterEffect="breathe" anchors={[{"text": "理财圈", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": null}, {"text": "收益", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={282} durationInFrames={167}>
                <BWCognitiveShift content={[{"text": "你没看到的是，", "startFrame": 0, "durationFrames": 31}, {"text": "他背后还有十个亏到销号的马甲，", "startFrame": 30, "durationFrames": 71}, {"text": "只是那个中奖的号恰好被你刷到了。", "startFrame": 101, "durationFrames": 66}]} totalDurationFrames={167} notText={"收益会翻倍"} butText={"多数会亏损"} butSrc={staticFile("images/test/scene_3_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={449} durationInFrames={155}>
                <BWCenterFocus content={[{"text": "长寿老人的“秘诀”：", "startFrame": 0, "durationFrames": 41}, {"text": "某个百岁老人每天抽烟喝酒，", "startFrame": 40, "durationFrames": 63}, {"text": "大家就觉得养生没用。", "startFrame": 102, "durationFrames": 53}]} totalDurationFrames={155} imageSrc={staticFile("images/test/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={604} durationInFrames={201}>
                <BWCognitiveShift content={[{"text": "其实那只是因为他基因逆天，", "startFrame": 0, "durationFrames": 70}, {"text": "而那些学他抽烟喝酒的人，", "startFrame": 69, "durationFrames": 56}, {"text": "大多没活到能接受采访的年纪。", "startFrame": 125, "durationFrames": 76}]} totalDurationFrames={201} notText={"基因逆天"} butText={"没活到那年纪"} butSrc={staticFile("images/test/scene_3_5.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={805} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "职场上的“特例”：", "startFrame": 0, "durationFrames": 41}, {"text": "公司里有个老员工从不加班也能升职，", "startFrame": 40, "durationFrames": 84}, {"text": "你觉得也能效仿。", "startFrame": 124, "durationFrames": 43}]} totalDurationFrames={167} imageSrc={staticFile("images/test/scene_3_6.png")} enterEffect="slideBottom" anchors={[{"text": "特例", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "不加班", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={972} durationInFrames={183}>
                <BWCognitiveShift content={[{"text": "却不知道他可能是某个大客户的亲侄子，", "startFrame": 0, "durationFrames": 1}, {"text": "或者是掌握了某种你根本无法复制的核心资源。", "startFrame": 0, "durationFrames": 862}]} totalDurationFrames={183} notText={"普通老员工"} butText={"客户的亲戚"} butSrc={staticFile("images/test/scene_3_7.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/test/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
