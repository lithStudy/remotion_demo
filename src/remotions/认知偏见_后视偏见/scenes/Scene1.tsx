import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation } from "../../../components";

// 引入：后视偏见
const SCENE_DURATION = 148 + 180 + 133 + 249 + 148 + 230;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={148}>
                <BWCenterFocus content={[{"text": "看着满屏绿油油的暴跌基金，", "startFrame": 0, "durationFrames": 71}, {"text": "你叹了口气，", "startFrame": 70, "durationFrames": 30}, {"text": "默默退出了交易软件。", "startFrame": 100, "durationFrames": 47}]} totalDurationFrames={148} imageSrc={staticFile("images/认知偏见_后视偏见/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "暴跌基金", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={148} durationInFrames={180}>
                <BWQuoteCitation content={[{"text": "然后跟朋友抱怨说：", "startFrame": 0, "durationFrames": 43}, {"text": "“我早就知道会跌，", "startFrame": 42, "durationFrames": 60}, {"text": "昨天那个政策一出我就觉得不对劲。”", "startFrame": 102, "durationFrames": 78}]} totalDurationFrames={180} quoteDisplayText={"“我早就知道会跌，昨天那个政策一出我就觉得不对劲。"} quoteSource={"诸葛亮"} anchors={[]} />
            </Sequence>
            <Sequence from={328} durationInFrames={133}>
                <BWCenterFocus content={[{"text": "这种“事后诸葛亮”式的先见之明，", "startFrame": 0, "durationFrames": 76}, {"text": "是不是让你心里稍微好受了一点？", "startFrame": 75, "durationFrames": 58}]} totalDurationFrames={133} imageSrc={staticFile("images/认知偏见_后视偏见/scene_1_3.png")} enterEffect="fadeIn" anchors={[{"text": "事后诸葛亮", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={461} durationInFrames={249}>
                <BWCenterFocus content={[{"text": "我们总喜欢在尘埃落定后指点江山，", "startFrame": 0, "durationFrames": 78}, {"text": "觉得自己有一眼看透本质的超能力。", "startFrame": 77, "durationFrames": 80}, {"text": "但其实这只是一种自我安慰的虚假繁荣。", "startFrame": 157, "durationFrames": 92}]} totalDurationFrames={249} imageSrc={staticFile("images/认知偏见_后视偏见/scene_1_4.png")} enterEffect="fadeIn" anchors={[{"text": "指点江山", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "自我安慰", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={710} durationInFrames={148}>
                <BWCognitiveShift content={[{"text": "这不是因为我们真的料事如神，", "startFrame": 0, "durationFrames": 62}, {"text": "而是我们的大脑根本无法忍受不确定性。", "startFrame": 61, "durationFrames": 87}]} totalDurationFrames={148} notText={"料事如神"} butText={"无法忍受不确定性"} butSrc={staticFile("images/认知偏见_后视偏见/scene_1_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={858} durationInFrames={230}>
                <BWCenterFocus content={[{"text": "为了在混乱的宇宙中找回一点安全感，", "startFrame": 0, "durationFrames": 72}, {"text": "大脑强行编造了完美的因果关系，", "startFrame": 72, "durationFrames": 71}, {"text": "让我们误以为一切悲剧都是可以避免的。", "startFrame": 142, "durationFrames": 87}]} totalDurationFrames={230} imageSrc={staticFile("images/认知偏见_后视偏见/scene_1_7.png")} enterEffect="fadeIn" anchors={[{"text": "为了安全感", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "编造因果关系", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "自我安慰", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_后视偏见/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
