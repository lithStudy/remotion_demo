import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 揭示原因：算法与大脑Bug
const SCENE_DURATION = 70 + 190 + 61 + 65 + 73 + 90 + 90;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus content={[{"text": "其实，这事儿真不全怪咱们修养不够，", "startFrame": 0, "durationFrames": 37}, {"text": "更不能怪我们普通人爱钻牛角尖。", "startFrame": 37, "durationFrames": 33}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={190}>
                <BWCenterFocus content={[{"text": "咱们得认清一个现实：", "startFrame": 0, "durationFrames": 30}, {"text": "我们的大脑在进化过程中，", "startFrame": 30, "durationFrames": 30}, {"text": "保留了一个极其隐蔽的“底层Bug”，", "startFrame": 60, "durationFrames": 40}, {"text": "而现在的互联网算法，", "startFrame": 100, "durationFrames": 30}, {"text": "正精准地利用这个Bug", "startFrame": 130, "durationFrames": 30}, {"text": "把我们关进信息囚笼。", "startFrame": 160, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "底层Bug", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "信息囚笼", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={190} />
            </Sequence>
            <Sequence from={260} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "那些平台为了让你多刷半小时，", "startFrame": 0, "durationFrames": 31}, {"text": "会不断推送你认同的观点。", "startFrame": 31, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={61} />
            </Sequence>
            <Sequence from={321} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "久而久之，我们就像被喂食的宠物，", "startFrame": 0, "durationFrames": 35}, {"text": "眼中只剩下一片虚假的繁荣。", "startFrame": 35, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={65} />
            </Sequence>
            <Sequence from={386} durationInFrames={73}>
                <BWCenterFocus content={[{"text": "所以，当我们遇到不同声音时，", "startFrame": 0, "durationFrames": 31}, {"text": "大脑会本能地把它当成一种“生存威胁”。", "startFrame": 31, "durationFrames": 42}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={73} />
            </Sequence>
            <Sequence from={459} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "我们不是在拒绝真相，", "startFrame": 0, "durationFrames": 30}, {"text": "我们是在保护那个脆弱的、", "startFrame": 30, "durationFrames": 30}, {"text": "被算法喂养出来的“自我”。", "startFrame": 60, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={549} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "在这种机制面前，", "startFrame": 0, "durationFrames": 30}, {"text": "我们每个人都是", "startFrame": 30, "durationFrames": 30}, {"text": "被操纵的受害者。", "startFrame": 60, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
