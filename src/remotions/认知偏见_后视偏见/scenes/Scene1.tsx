import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWQuoteCitation } from "../../../components";

// 引入：后视偏见
const SCENE_DURATION = 90 + 97 + 68 + 70 + 40 + 71 + 110;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "看着满屏绿油油的暴跌基金，", "startFrame": 0, "durationFrames": 30}, {"text": "你叹了口气，", "startFrame": 30, "durationFrames": 30}, {"text": "默默退出了交易软件。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "暴跌基金", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={90} durationInFrames={97}>
                <BWQuoteCitation content={[{"text": "然后跟朋友抱怨说：", "startFrame": 0, "durationFrames": 30}, {"text": "“我早就知道会跌，", "startFrame": 30, "durationFrames": 30}, {"text": "昨天那个政策一出我就觉得不对劲。”", "startFrame": 60, "durationFrames": 37}]} totalDurationFrames={97} quoteSource={"朋友"} anchors={[]} />
            </Sequence>
            <Sequence from={187} durationInFrames={68}>
                <BWCenterFocus content={[{"text": "这种“事后诸葛亮”式的先见之明，", "startFrame": 0, "durationFrames": 35}, {"text": "是不是让你心里稍微好受了一点？", "startFrame": 35, "durationFrames": 33}]} totalDurationFrames={68} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "事后诸葛亮", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={255} durationInFrames={70}>
                <BWCenterFocus content={[{"text": "我们总喜欢在尘埃落定后指点江山，", "startFrame": 0, "durationFrames": 35}, {"text": "觉得自己有一眼看透本质的超能力。", "startFrame": 35, "durationFrames": 35}]} totalDurationFrames={70} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "指点江山", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "超能力", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={325} durationInFrames={40}>
                <BWCognitiveShift content={[{"text": "但其实这只是一种自我安慰的虚假繁荣。", "startFrame": 0, "durationFrames": 40}]} totalDurationFrames={40} notText={"自我安慰"} butText={"虚假繁荣"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={0} anchors={[]} />
            </Sequence>
            <Sequence from={365} durationInFrames={71}>
                <BWCognitiveShift content={[{"text": "这不是因为我们真的料事如神，", "startFrame": 0, "durationFrames": 31}, {"text": "而是我们的大脑根本无法忍受不确定性。", "startFrame": 31, "durationFrames": 40}]} totalDurationFrames={71} notText={"料事如神"} butText={"无法忍受不确定性"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={436} durationInFrames={110}>
                <BWCenterFocus content={[{"text": "为了在混乱的宇宙中找回一点安全感，", "startFrame": 0, "durationFrames": 37}, {"text": "大脑强行编造了完美的因果关系，", "startFrame": 37, "durationFrames": 33}, {"text": "让我们误以为一切悲剧都是可以避免的。", "startFrame": 70, "durationFrames": 40}]} totalDurationFrames={110} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "安全感", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "因果关系", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "自我安慰", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
