import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 现象
const SCENE_DURATION = 175 + 101;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={175}>
                <BWCenterFocus content={[{"text": "所以你发现没有？", "startFrame": 0, "durationFrames": 42}, {"text": "那些越是平庸、越是无知的人，", "startFrame": 41, "durationFrames": 65}, {"text": "反而自带一种“排山倒海般的自信”。", "startFrame": 105, "durationFrames": 69}]} totalDurationFrames={175} imageSrc={staticFile("images/认知偏见_达克效应/scene_3_1.png")} enterEffect="fadeIn" anchors={[{"text": "平庸/无知", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "排山倒海般的自信", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={175} durationInFrames={101}>
                <BWCenterFocus content={[{"text": "因为在他那点可怜的认知里，", "startFrame": 0, "durationFrames": 55}, {"text": "他已经是世界之王了。", "startFrame": 54, "durationFrames": 46}]} totalDurationFrames={101} imageSrc={staticFile("images/认知偏见_达克效应/scene_3_3.png")} enterEffect="fadeIn" anchors={[{"text": "世界之王", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_达克效应/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
