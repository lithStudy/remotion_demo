import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWTextFocus } from "../../../components";

// 流水车厂铁打华为
const SCENE_DURATION = 120 + 115;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "哦，", "startFrame": 0, "durationFrames": 30}, {"text": "对了。", "startFrame": 30, "durationFrames": 30}, {"text": "冲着含华量买问界的车主，", "startFrame": 60, "durationFrames": 30}, {"text": "不要灰心。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("一辆问界汽车停在展示台上，车头正对镜头，背景是简洁的科技感展厅，柔和的顶光打在车身")} enterEffect="fadeIn" anchors={[{"text": "含华量", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={120} durationInFrames={90}>
                <BWTextFocus content={[{"text": "流水的车厂，", "startFrame": 0, "durationFrames": 30}, {"text": "铁打的华为。", "startFrame": 30, "durationFrames": 30}, {"text": "你们还有的选哦。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} coreSentence={[{"text": "流水的车厂，铁打的华为。", "showFrom": 0, "endFrom": 1}, {"text": "你们还有的选哦。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "铁打的华为", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={210} durationInFrames={25}>
                <Freeze frame={89}>
                    <BWTextFocus content={[{"text": "流水的车厂，", "startFrame": 0, "durationFrames": 30}, {"text": "铁打的华为。", "startFrame": 30, "durationFrames": 30}, {"text": "你们还有的选哦。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} coreSentence={[{"text": "流水的车厂，铁打的华为。", "showFrom": 0, "endFrom": 1}, {"text": "你们还有的选哦。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "铁打的华为", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>

        </AbsoluteFill>
    );
};
