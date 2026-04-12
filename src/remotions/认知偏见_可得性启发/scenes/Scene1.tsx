import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引入·空难焦虑与避险
const SCENE_DURATION = 159 + 301;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={159}>
                <BWCenterFocus content={[{"text": "盯着那条空难上热搜的弹窗新闻，", "startFrame": 0, "durationFrames": 78}, {"text": "你默默把下周的航班改成了高铁。", "startFrame": 77, "durationFrames": 81}]} totalDurationFrames={159} imageSrc={staticFile("images/认知偏见_可得性启发/scene_1_1.png")} enterEffect="breathe" anchors={[{"text": "空难", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={159} durationInFrames={301}>
                <BWCenterFocus content={[{"text": "明知路上要多耗大半天、", "startFrame": 0, "durationFrames": 58}, {"text": "换乘也更折腾，", "startFrame": 57, "durationFrames": 43}, {"text": "心里却觉得还是在地上跑更安全。", "startFrame": 100, "durationFrames": 71}, {"text": "这种宁可多花时间也要避险的心态，", "startFrame": 171, "durationFrames": 79}, {"text": "是不是让你觉得非常踏实。", "startFrame": 249, "durationFrames": 51}]} totalDurationFrames={301} imageSrc={staticFile("images/认知偏见_可得性启发/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "折腾", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "避险心态", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
