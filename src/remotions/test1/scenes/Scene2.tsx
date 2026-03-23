import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWAlertStyle, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 揭示根源：大脑“底层Bug”与算法的利用
const SCENE_DURATION = 70 + 30 + 90 + 90 + 61 + 90 + 73 + 90 + 63;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 37, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 37, "durationFrames": 33, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={30}>
                <BWTextFocus content={[{"text": "咱们得认清一个现实：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={100} durationInFrames={90}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"大脑底层Bug"} content={[{"text": "我们的大脑在进化过程中，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "保留了一个极其隐蔽的", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“底层Bug”，", "startFrame": 60, "durationFrames": 30, "anchor": "底层Bug", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={190} durationInFrames={90}>
                <BWMagnifyingGlass content={[{"text": "而现在的互联网算法，", "startFrame": 0, "durationFrames": 30, "anchor": "互联网算法", "anchorColor": "#111111", "anchorAnim": null, "audioEffect": "ping"}, {"text": "正精准地利用这个Bug", "startFrame": 30, "durationFrames": 30, "anchor": "Bug", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "把我们关进信息囚笼。", "startFrame": 60, "durationFrames": 30, "anchor": "信息囚笼", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={280} durationInFrames={61}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时,", "startFrame": 0, "durationFrames": 31, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={341} durationInFrames={90}>
                <BWAlertStyle imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "久而久之，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "我们就像被喂食的宠物，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={431} durationInFrames={73}>
                <BWMagnifyingGlass content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 31, "anchor": "不同声音", "anchorColor": "#111111", "anchorAnim": null, "audioEffect": "ping"}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 31, "durationFrames": 42, "anchor": "生存威胁", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={73} />
            </Sequence>
            <Sequence from={504} durationInFrames={90}>
                <BWCognitiveShift notText={"在拒绝真相"} butText={"在保护那个脆弱的、被算法喂养出来的“自我”。"} notSrc={"一个人捂住耳朵或闭着眼睛，回避外界"} butSrc={"一个人用双手小心呵护着一个由屏幕像素组成的、闪烁不定的透明人偶"} notContentIndex={0} butContentIndex={1} content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 30, "anchor": "拒绝真相", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "我们是在保护那个脆弱的、", "startFrame": 30, "durationFrames": 30, "anchor": "脆弱", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "ping"}, {"text": "被算法喂养出来的“自我”。", "startFrame": 60, "durationFrames": 30, "anchor": "自我", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={594} durationInFrames={63}>
                <BWTextFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "我们每个人都是被操纵的受害者。", "startFrame": 30, "durationFrames": 33, "anchor": "被操纵的受害者", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
