import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle, BWCenterFocus, BWKpiHero } from "../../../components";

// 揭示本质：算法与大脑BUG导致信息茧房
const SCENE_DURATION = 70 + 172 + 61 + 81 + 87 + 78 + 63;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，更不能怪我们普通人爱钻牛角尖。", "startFrame": 0, "durationFrames": 70, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={172}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "咱们得认清一个现实：我们的大脑在进化过程中，", "startFrame": 0, "durationFrames": 48, "anchor": "现实", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": "保留了一个极其隐蔽的", "startFrame": 48, "durationFrames": 30, "anchor": "底层Bug", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "“底层Bug”，而现在的互联网算法，正精准地利用这个Bug", "startFrame": 78, "durationFrames": 64, "anchor": "信息囚笼", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "把我们关进信息囚笼。", "startFrame": 142, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={172} />
            </Sequence>
            <Sequence from={242} durationInFrames={61}>
                <BWKpiHero value={30} suffix={"分钟"} headline={"平台目的"} content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 31, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={303} durationInFrames={81}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "久而久之，我们就像被喂食的宠物，眼中只剩下一片", "startFrame": 0, "durationFrames": 51, "anchor": "喂食", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "虚假的繁荣。", "startFrame": 51, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={81} />
            </Sequence>
            <Sequence from={384} durationInFrames={87}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "所以，当我们遇到不同声音时，大脑会本能地把它当成一种", "startFrame": 0, "durationFrames": 57, "anchor": "不同声音", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": "“生存威胁”。", "startFrame": 57, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={87} />
            </Sequence>
            <Sequence from={471} durationInFrames={78}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "我们不是在拒绝真相，我们是在保护那个脆弱的、", "startFrame": 0, "durationFrames": 48, "anchor": "脆弱", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "被算法喂养出来的“自我”。", "startFrame": 48, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={78} />
            </Sequence>
            <Sequence from={549} durationInFrames={63}>
                <BWAlertStyle imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" content={[{"text": "在这种机制面前，我们每个人都是", "startFrame": 0, "durationFrames": 33, "anchor": "受害者", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "被操纵的受害者。", "startFrame": 33, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
