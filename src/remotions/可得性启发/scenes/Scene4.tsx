import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 防御锦囊
const SCENE_DURATION = 261 + 169 + 226 + 140;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={261}>
                <BWCenterFocus content={[{"text": "在这个信息过载、", "startFrame": 0, "durationFrames": 32}, {"text": "真相碎片化的时代，", "startFrame": 31, "durationFrames": 41}, {"text": "我准备了三个极其简单的防御锦囊，", "startFrame": 72, "durationFrames": 78}, {"text": "下次再遇到这种“认知冲击”，", "startFrame": 149, "durationFrames": 58}, {"text": "请在心里默问自己：", "startFrame": 207, "durationFrames": 54}]} totalDurationFrames={261} imageSrc={staticFile("images/可得性启发6/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "信息过载", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "认知冲击", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={261} durationInFrames={169}>
                <BWCenterFocus content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "正因为这件事是“新闻”，", "startFrame": 17, "durationFrames": 48}, {"text": "所以它在现实中大概率是极少数的个案吗？", "startFrame": 65, "durationFrames": 103}]} totalDurationFrames={169} imageSrc={staticFile("images/可得性启发6/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "新闻", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "极少数", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={430} durationInFrames={226}>
                <BWSplitCompare content={[{"text": "第二，", "startFrame": 0, "durationFrames": 11}, {"text": "我的这个观点，", "startFrame": 10, "durationFrames": 43}, {"text": "是来自大样本的统计数据，", "startFrame": 53, "durationFrames": 65}, {"text": "还是仅仅来自昨天刷到的那段高赞视频？", "startFrame": 117, "durationFrames": 108}]} totalDurationFrames={226} leftSrc={staticFile("images/可得性启发6/scene_4_3_left.png")} rightSrc={staticFile("images/可得性启发6/scene_4_3_right.png")} leftLabel={"统计数据"} rightLabel={"高赞视频"} anchors={[]} />
            </Sequence>
            <Sequence from={656} durationInFrames={140}>
                <BWCenterFocus content={[{"text": "第三，", "startFrame": 0, "durationFrames": 19}, {"text": "如果我换一个关键词搜索，", "startFrame": 18, "durationFrames": 55}, {"text": "是不是能看到完全相反的一面？", "startFrame": 73, "durationFrames": 67}]} totalDurationFrames={140} imageSrc={staticFile("images/可得性启发6/scene_4_4.png")} enterEffect="fadeIn" anchors={[{"text": "关键词搜索", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}, {"text": "相反一面", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/可得性启发6/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
