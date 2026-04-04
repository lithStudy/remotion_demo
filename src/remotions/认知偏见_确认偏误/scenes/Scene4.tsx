import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 案例分析：热搜反转与主观认知
const SCENE_DURATION = 135 + 233 + 210;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={135}>
                <BWCenterFocus content={[{"text": "这就解释了为什么热搜反转前。", "startFrame": 0, "durationFrames": 60}, {"text": "那么多人会言之凿凿地站队。", "startFrame": 60, "durationFrames": 75}]} totalDurationFrames={135} imageSrc={staticFile("images/认知偏见_确认偏误/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "热搜反转", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "言之凿凿", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={135} durationInFrames={233}>
                <BWCenterFocus content={[{"text": "这就像在漆黑的房间里打手电筒。", "startFrame": 0, "durationFrames": 74}, {"text": "你只会照亮你早就相信的那个角落。", "startFrame": 73, "durationFrames": 76}, {"text": "至于剩下的广阔空间你根本不在乎。", "startFrame": 148, "durationFrames": 84}]} totalDurationFrames={233} imageSrc={staticFile("images/认知偏见_确认偏误/scene_4_3.png")} enterEffect="breathe" />
            </Sequence>
            <Sequence from={368} durationInFrames={210}>
                <BWTextFocus content={[{"text": "当你讨厌一个人时连他的呼吸都是错的。", "startFrame": 0, "durationFrames": 86}, {"text": "因为我们其实根本不需要客观真相。", "startFrame": 85, "durationFrames": 65}, {"text": "我们只需要被迎合被肯定。", "startFrame": 149, "durationFrames": 60}]} totalDurationFrames={210} coreSentence={"我们需要的不是客观真相，而是被肯定"} coreSentenceAnchors={[{"coreSentenceAnchor": "客观真相", "color": "#000000"}, {"coreSentenceAnchor": "被肯定", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_确认偏误/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
