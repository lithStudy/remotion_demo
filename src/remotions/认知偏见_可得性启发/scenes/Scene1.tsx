import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift } from "../../../components";

// 空难新闻与避险心态
const SCENE_DURATION = 126 + 61 + 70 + 67 + 67 + 64;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={126}>
                <BWCenterFocus content={[{"text": "盯着那条空难上热搜的弹窗新闻。", "startFrame": 0, "durationFrames": 33}, {"text": "你默默取消了下周的特价机票。", "startFrame": 33, "durationFrames": 31}, {"text": "转身去抢了一张昂贵的高铁票。", "startFrame": 64, "durationFrames": 31}, {"text": "心里想着还是在地上跑更安全。", "startFrame": 95, "durationFrames": 31}]} totalDurationFrames={126} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "空难", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "高铁票", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "更安全", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={126} durationInFrames={61}>
                <BWBeatSequence content={[{"text": "这种宁可折腾也要避险的心态。", "startFrame": 0, "durationFrames": 31}, {"text": "是不是让你觉得非常踏实。", "startFrame": 31, "durationFrames": 30}]} totalDurationFrames={61} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={187} durationInFrames={70}>
                <BWCognitiveShift content={[{"text": "我们总以为这是出于谨慎的理性选择。", "startFrame": 0, "durationFrames": 37}, {"text": "但其实我们又被恐惧情绪劫持了。", "startFrame": 37, "durationFrames": 33}]} totalDurationFrames={70} notText={"理性选择"} butText={"恐惧劫持"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={257} durationInFrames={67}>
                <BWCognitiveShift content={[{"text": "这不是因为我们胆小怕事。", "startFrame": 0, "durationFrames": 30}, {"text": "而是原始基因刻在骨子里的生存本能。", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} notText={"胆小怕事"} butText={"基因本能"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={324} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "在这个流量为王的焦躁时代。", "startFrame": 0, "durationFrames": 30}, {"text": "媒体最喜欢放大的就是罕见极端事件。", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "流量为王", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "极端事件", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={391} durationInFrames={64}>
                <BWCenterFocus content={[{"text": "这些新闻像病毒一样霸占屏幕。", "startFrame": 0, "durationFrames": 31}, {"text": "让我们误以为这个世界极度危险。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={64} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "信息茧房", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
