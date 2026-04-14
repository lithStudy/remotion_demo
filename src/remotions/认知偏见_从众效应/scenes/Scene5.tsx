import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 反转：绝地反击
const SCENE_DURATION = 271 + 174;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={271}>
                <BWCenterFocus content={[{"text": "在这个习惯了把“随大流”当做标准答案的时代，", "startFrame": 0, "durationFrames": 86}, {"text": "一旦你交出了思考的权利，", "startFrame": 85, "durationFrames": 62}, {"text": "再穷其一生拼命挣扎，", "startFrame": 146, "durationFrames": 64}, {"text": " 也不过是别人剧本里的龙套。", "startFrame": 209, "durationFrames": 62}]} totalDurationFrames={271} imageSrc={staticFile("images/认知偏见_从众效应/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "交出思考权", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "龙套", "showFrom": 3, "color": "#EF4444", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={271} durationInFrames={174}>
                <BWTextFocus content={[{"text": "守住你清醒的大脑，", "startFrame": 0, "durationFrames": 45}, {"text": "做一个安静且笃定的异类，", "startFrame": 44, "durationFrames": 65}, {"text": "你才真正夺回了人生的方向盘", "startFrame": 109, "durationFrames": 65}]} totalDurationFrames={174} coreSentence={["守住你清醒的大脑", "你才真正夺回了人生的方向盘。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "清醒的大脑", "color": "#EF4444"}, {"coreSentenceAnchor": "人生的方向盘", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_从众效应/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
