import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSplitCompare, BWTextFocus } from "../../../components";

// 反转：身份错位的荒诞
const SCENE_DURATION = 327 + 74;

export const calculateScene10Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene10: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={327}>
                <BWSplitCompare content={[{"text": "最后说个更讽刺的事。", "startFrame": 0, "durationFrames": 51}, {"text": "中兴是有国家资本参股的企业，", "startFrame": 50, "durationFrames": 70}, {"text": "华为是纯粹的民营企业。", "startFrame": 120, "durationFrames": 53}, {"text": "不知道从什么时候起，", "startFrame": 172, "durationFrames": 41}, {"text": "很多人眼里，", "startFrame": 213, "durationFrames": 31}, {"text": "华为反倒比中兴更像国家的代言人了。", "startFrame": 243, "durationFrames": 83}]} totalDurationFrames={327} leftSrc={staticFile("images/华为依赖论/scene_10_1_left.png")} rightSrc={staticFile("images/华为依赖论/scene_10_1_right.png")} leftLabel={"中兴-国有参股"} rightLabel={"华为-民营企业"} leftShowFrom={1} rightShowFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={327} durationInFrames={74}>
                <BWTextFocus content={[{"text": "你品品，", "startFrame": 0, "durationFrames": 27}, {"text": "这事本身就够荒诞的。", "startFrame": 26, "durationFrames": 48}]} totalDurationFrames={74} coreSentence={["你品品，", "这事本身就够荒诞的。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "荒诞", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_10/scene_10.mp3")} />
        </AbsoluteFill>
    );
};
