import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 揭示本质：算法操纵与信息囚笼
const SCENE_DURATION = 70 + 88 + 90 + 61 + 65 + 73 + 90 + 63;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 37, "audioEffect": "ping"}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 37, "durationFrames": 33, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={88}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" content={[{"text": "咱们得认清一个现实：我们的大脑在进化过程中，", "startFrame": 0, "durationFrames": 48, "audioEffect": "ping"}, {"text": "保留了一个极其隐蔽的“底层Bug”，", "startFrame": 48, "durationFrames": 40, "audioEffect": null}]} anchors={[]} totalDurationFrames={88} />
            </Sequence>
            <Sequence from={158} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "而现在的互联网算法，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "正精准地利用这个Bug", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "把我们关进信息囚笼。", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={248} durationInFrames={61}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 31, "audioEffect": "ping"}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={309} durationInFrames={65}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "久而久之，我们就像被喂食的宠物，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 35, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={65} />
            </Sequence>
            <Sequence from={374} durationInFrames={73}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 31, "audioEffect": "ping"}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 31, "durationFrames": 42, "audioEffect": null}]} anchors={[]} totalDurationFrames={73} />
            </Sequence>
            <Sequence from={447} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们是在保护那个脆弱的、", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "被算法喂养出来的“自我”。", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={537} durationInFrames={63}>
                <BWTextFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们每个人都是被操纵的受害者。", "startFrame": 30, "durationFrames": 33, "audioEffect": null}]} anchors={[]} totalDurationFrames={63} />
            </Sequence>

        </AbsoluteFill>
    );
};
