import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 召唤：呼唤科技红利
const SCENE_DURATION = 63 + 315;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "市场上从来不缺卖贵的东西。", "startFrame": 0, "durationFrames": 63}]} totalDurationFrames={63} imageSrc={staticFile("images/小米平权/scene_7_1.png")} enterEffect="fadeIn" anchors={[{"text": "昂贵", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={63} durationInFrames={315}>
                <BWTextFocus content={[{"text": "真正稀缺的，", "startFrame": 0, "durationFrames": 33}, {"text": "是愿意把科技红利让渡给普通人的公司。", "startFrame": 32, "durationFrames": 85}, {"text": "让更多人买得起好科技、", "startFrame": 116, "durationFrames": 54}, {"text": "用得上好科技，", "startFrame": 170, "durationFrames": 40}, {"text": "这比制造一堆高端崇拜，", "startFrame": 209, "durationFrames": 55}, {"text": "难得多，", "startFrame": 264, "durationFrames": 18}, {"text": "也贵重得多。", "startFrame": 281, "durationFrames": 33}]} totalDurationFrames={315} coreSentence={["让更多人买得起、用得上好科技", "比制造一堆高端崇拜贵重得多"]} coreSentenceAnchors={[{"coreSentenceAnchor": "买得起、用得上", "color": "#EF4444"}, {"coreSentenceAnchor": "贵重得多", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
