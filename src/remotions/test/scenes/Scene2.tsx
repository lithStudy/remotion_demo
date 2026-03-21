import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMagnifyingGlass } from "../../../components";

// 幕后解密与共同受害者设定
const SCENE_DURATION = 70 + 156 + 121 + 200;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={70}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "其实，这事儿真不全怪咱们修养不够，更不能怪我们普通人爱钻牛角尖。", "startFrame": 0, "durationFrames": 70, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={70} durationInFrames={156}>
                <BWMagnifyingGlass content={[{"text": "咱们得认清一个现实：我们的大脑在进化过程中，保留了一个极其隐蔽的“底层Bug”，而现在的互联网算法，正精准地利用这个Bug把我们关进信息囚笼。", "startFrame": 0, "durationFrames": 156, "anchor": "底层Bug", "anchorColor": "#E53E3E", "audioEffect": "ping"}]} totalDurationFrames={156} />
            </Sequence>
            <Sequence from={226} durationInFrames={121}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "那些平台为了让你多刷半小时，会不断推送你认同的观点。久而久之，我们就像被喂食的宠物，眼中只剩下一片虚假的繁荣。", "startFrame": 0, "durationFrames": 121, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={121} />
            </Sequence>
            <Sequence from={347} durationInFrames={200}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "所以，当我们遇到不同声音时，大脑会本能地把它当成一种“生存威胁”。我们不是在拒绝真相，我们是在保护那个脆弱的、被算法喂养出来的“自我”。在这种机制面前，我们每个人都是被操纵的受害者。", "startFrame": 0, "durationFrames": 200, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={200} />
            </Sequence>

        </AbsoluteFill>
    );
};
