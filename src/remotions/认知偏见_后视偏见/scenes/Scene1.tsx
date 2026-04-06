import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引入：后视偏见
const SCENE_DURATION = 255 + 291;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={255}>
                <BWCenterFocus content={[{"text": "看着满屏绿油油的暴跌基金，", "startFrame": 0, "durationFrames": 30}, {"text": "你叹了口气，", "startFrame": 30, "durationFrames": 30}, {"text": "默默退出了交易软件。", "startFrame": 60, "durationFrames": 30}, {"text": "然后跟朋友抱怨说：", "startFrame": 90, "durationFrames": 30}, {"text": "“我早就知道会跌，", "startFrame": 120, "durationFrames": 30}, {"text": "昨天那个政策一出我就觉得不对劲。”", "startFrame": 150, "durationFrames": 37}, {"text": "这种“事后诸葛亮”式的先见之明，", "startFrame": 187, "durationFrames": 35}, {"text": "是不是让你心里稍微好受了一点？", "startFrame": 222, "durationFrames": 33}]} totalDurationFrames={255} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "事后诸葛亮", "showFrom": 6, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={255} durationInFrames={291}>
                <BWCenterFocus content={[{"text": "我们总喜欢在尘埃落定后指点江山，", "startFrame": 0, "durationFrames": 35}, {"text": "觉得自己有一眼看透本质的超能力。", "startFrame": 35, "durationFrames": 35}, {"text": "但其实这只是一种自我安慰的虚假繁荣。", "startFrame": 70, "durationFrames": 40}, {"text": "这不是因为我们真的料事如神，", "startFrame": 110, "durationFrames": 31}, {"text": "而是我们的大脑根本无法忍受不确定性。", "startFrame": 141, "durationFrames": 40}, {"text": "为了在混乱的宇宙中找回一点安全感，", "startFrame": 181, "durationFrames": 37}, {"text": "大脑强行编造了完美的因果关系，", "startFrame": 218, "durationFrames": 33}, {"text": "让我们误以为一切悲剧都是可以避免的。", "startFrame": 251, "durationFrames": 40}]} totalDurationFrames={291} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "自我安慰", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}, {"text": "不确定性", "showFrom": 4, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "因果关系", "showFrom": 6, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
