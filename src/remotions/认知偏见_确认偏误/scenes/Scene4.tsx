import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 案例分析：热搜反转与主观认知
const SCENE_DURATION = 61 + 103 + 65;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "这就解释了为什么热搜反转前。", "startFrame": 0, "durationFrames": 31}, {"text": "那么多人会言之凿凿地站队。", "startFrame": 31, "durationFrames": 30}]} totalDurationFrames={61} imageSrc={staticFile("很多人在黑暗中争论的抽象示意图")} enterEffect="fadeIn" anchors={[{"text": "热搜反转", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "言之凿凿", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={61} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "这就像在漆黑的房间里打手电筒。", "startFrame": 0, "durationFrames": 33}, {"text": "你只会照亮你早就相信的那个角落。", "startFrame": 33, "durationFrames": 35}, {"text": "至于剩下的广阔空间你根本不在乎。", "startFrame": 68, "durationFrames": 35}]} totalDurationFrames={103} imageSrc={staticFile("一个人在黑暗房间里拿着手电筒照亮角落的场景")} enterEffect="breathe" />
            </Sequence>
            <Sequence from={164} durationInFrames={65}>
                <BWTextFocus content={[{"text": "当你讨厌一个人时连他的呼吸都是错的。", "startFrame": 0, "durationFrames": 40}, {"text": "因为我们其实根本不需要客观真相。", "startFrame": 0, "durationFrames": 35}, {"text": "我们只需要被迎合被肯定。", "startFrame": 35, "durationFrames": 30}]} totalDurationFrames={65} coreSentence={"我们需要的不是客观真相，而是被肯定"} coreSentenceAnchors={[{"coreSentenceAnchor": "客观真相", "color": "#000000"}, {"coreSentenceAnchor": "被肯定", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
