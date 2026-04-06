import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 召唤·数据与降级
const SCENE_DURATION = 73 + 101 + 64 + 65;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={73}>
                <BWCenterFocus content={[{"text": "面对这种被媒体和本能双重扭曲的现实。", "startFrame": 0, "durationFrames": 40}, {"text": "我们该如何保护自己的判断力呢。", "startFrame": 40, "durationFrames": 33}]} totalDurationFrames={73} imageSrc={staticFile("一个人思考的简笔画")} enterEffect="fadeIn" anchors={[{"text": "双重扭曲", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "判断力", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={73} durationInFrames={101}>
                <BWMethodStack content={[{"text": "第一步是学会做无情的数据信徒。", "startFrame": 0, "durationFrames": 33}, {"text": "做重大决策前先查阅真实的统计数据。", "startFrame": 33, "durationFrames": 37}, {"text": "而不是凭感觉和热搜来拍脑袋。", "startFrame": 70, "durationFrames": 31}]} totalDurationFrames={101} title={"数据信徒"} imageSrc={staticFile("一个人戴着眼镜，专注地看着电脑屏幕上的统计图表")} notes={[{"text": "查阅统计数据", "showFrom": 1}, {"text": "对抗滚烫的恐慌", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Sequence from={174} durationInFrames={64}>
                <BWMethodStack content={[{"text": "第二步是给你的新闻消费降级。", "startFrame": 0, "durationFrames": 31}, {"text": "减少对突发灾难新闻的过度关注。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={64} title={"消费降级"} imageSrc={staticFile("一个人关掉手机上各种新闻app的推送，回归平静生活")} notes={[{"text": "减少对灾难新闻的关注", "showFrom": 1}]} anchors={[]} />
            </Sequence>
            <Sequence from={238} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "当你用冰冷的数据对抗滚烫的恐慌。", "startFrame": 0, "durationFrames": 35}, {"text": "你才能真正看清世界的全貌。", "startFrame": 35, "durationFrames": 30}]} totalDurationFrames={65} imageSrc={staticFile("一个人用放大镜观察数据图表的场景")} enterEffect="fadeIn" anchors={[{"text": "冰冷数据", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "滚烫恐慌", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "看清全貌", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "woosh"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
