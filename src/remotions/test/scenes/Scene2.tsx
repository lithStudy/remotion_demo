import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 原因剖析：大脑Bug与算法囚笼
const SCENE_DURATION = 154 + 193 + 154 + 125 + 140 + 159 + 169 + 111;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={154}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 82, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 81, "durationFrames": 73, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={154} />
            </Sequence>
            <Sequence from={154} durationInFrames={193}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_2.png")} enterEffect="breathe" content={[{"text": "咱们得认清一个现实：", "startFrame": 0, "durationFrames": 49, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们的大脑在进化过程中，", "startFrame": 48, "durationFrames": 58, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "保留了一个极其隐蔽的“底层Bug”。", "startFrame": 105, "durationFrames": 87, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={193} />
            </Sequence>
            <Sequence from={347} durationInFrames={154}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_3.png")} enterEffect="breathe" content={[{"text": "而现在的互联网算法，", "startFrame": 0, "durationFrames": 49, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "正精准地利用这个Bug", "startFrame": 48, "durationFrames": 58, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "把我们关进信息囚笼。", "startFrame": 105, "durationFrames": 49, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={154} />
            </Sequence>
            <Sequence from={501} durationInFrames={125}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_4.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 68, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "会不断推送你认同的观点。", "startFrame": 67, "durationFrames": 58, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={125} />
            </Sequence>
            <Sequence from={626} durationInFrames={140}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_5.png")} enterEffect="breathe" content={[{"text": "久而久之，我们就像被喂食的宠物，", "startFrame": 0, "durationFrames": 77, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 76, "durationFrames": 63, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={140} />
            </Sequence>
            <Sequence from={766} durationInFrames={159}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_6.png")} enterEffect="breathe" content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 68, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 67, "durationFrames": 92, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={159} />
            </Sequence>
            <Sequence from={925} durationInFrames={169}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_7.png")} enterEffect="breathe" content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 49, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们是在保护那个脆弱的、", "startFrame": 48, "durationFrames": 58, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "被算法喂养出来的“自我”。", "startFrame": 105, "durationFrames": 63, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={169} />
            </Sequence>
            <Sequence from={1094} durationInFrames={111}>
                <BWCenterFocus imageSrc={staticFile("images/test/2_8.png")} enterEffect="breathe" content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 39, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们每个人都是被操纵的受害者。", "startFrame": 38, "durationFrames": 73, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={111} />
            </Sequence>
            <Audio src={staticFile("/audio/test/2/2.mp3")} />
        </AbsoluteFill>
    );
};
