import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 防御锦囊
const SCENE_DURATION = 156 + 102 + 130 + 91;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={156}>
                <BWCenterFocus content={[{"text": "在这个信息过载、", "startFrame": 0, "durationFrames": 30}, {"text": "真相碎片化的时代，", "startFrame": 30, "durationFrames": 30}, {"text": "我准备了三个极其简单的防御锦囊，", "startFrame": 60, "durationFrames": 35}, {"text": "下次再遇到这种“认知冲击”，", "startFrame": 95, "durationFrames": 31}, {"text": "请在心里默问自己：", "startFrame": 126, "durationFrames": 30}]} totalDurationFrames={156} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "信息过载", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "认知冲击", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={156} durationInFrames={102}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "正因为这件事是“新闻”，", "startFrame": 30, "durationFrames": 30}, {"text": "所以它在现实中大概率是极少数的个案吗？", "startFrame": 60, "durationFrames": 42}]} totalDurationFrames={102} title={"新闻个案陷阱"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "新闻不等于普遍", "showFrom": 1}, {"text": "多数是极少数的个案", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={258} durationInFrames={130}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "我的这个观点，", "startFrame": 30, "durationFrames": 30}, {"text": "是来自大样本的统计数据，", "startFrame": 60, "durationFrames": 30}, {"text": "还是仅仅来自昨天刷到的那段高赞视频？", "startFrame": 90, "durationFrames": 40}]} totalDurationFrames={130} title={"反思信息来源"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "数据or个例？", "showFrom": 1}, {"text": "统计数据 vs 高赞视频", "showFrom": 2}, {"text": "来源要可靠", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={388} durationInFrames={91}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 30}, {"text": "如果我换一个关键词搜索，", "startFrame": 30, "durationFrames": 30}, {"text": "是不是能看到完全相反的一面？", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} title={"反向搜索验证"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "尝试不同关键词", "showFrom": 1}, {"text": "看到不同侧面", "showFrom": 2}]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
