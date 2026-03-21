import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass } from "../../../components";

// 幕后解密与共同受害者设定
const SCENE_DURATION = 120 + 30 + 240 + 210 + 240 + 90;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "怪咱们修养不够，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "更不能怪我们", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "普通人爱钻牛角尖。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={120} durationInFrames={30}>
                <BWMagnifyingGlass content={[{"text": "咱们得认清一个现实：", "startFrame": 0, "durationFrames": 30, "anchor": "认清一个现实", "anchorColor": "#276749", "audioEffect": "ping"}]} totalDurationFrames={30} />
            </Sequence>
            <Sequence from={150} durationInFrames={240}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "我们的大脑在进化", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "过程中，保留了一", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "个极其隐蔽的", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“底层Bug”，而现在", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "的互联网算法，正", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "精准地利用这个Bug", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "把我们关进", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "信息囚笼。", "startFrame": 210, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={240} />
            </Sequence>
            <Sequence from={390} durationInFrames={210}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "多刷半小时，会不断", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "推送你认同的观点。", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "久而久之，我们就像", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "被喂食的宠物，眼中", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "只剩下一片", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "虚假的繁荣。", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={210} />
            </Sequence>
            <Sequence from={600} durationInFrames={240}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "所以，当我们遇到", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "不同声音时，大脑会", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "本能地把它当成一种", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“生存威胁”。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们不是在拒绝真相，", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们是在保护那个", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "脆弱的、被算法", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "喂养出来的“自我”。", "startFrame": 210, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={240} />
            </Sequence>
            <Sequence from={840} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我们每个人都是", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "被操纵的受害者。", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
