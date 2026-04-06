import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引入·空难焦虑与避险
const SCENE_DURATION = 199 + 330;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={199}>
                <BWCenterFocus content={[{"text": "盯着那条空难上热搜的弹窗新闻。", "startFrame": 0, "durationFrames": 101}, {"text": "你默默把下周的航班改成了高铁。", "startFrame": 100, "durationFrames": 99}]} totalDurationFrames={199} imageSrc={staticFile("images/认知偏见_可得性启发/scene_1_1.png")} enterEffect="breathe" anchors={[{"text": "空难", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={199} durationInFrames={330}>
                <BWCenterFocus content={[{"text": "明知路上要多耗大半天、", "startFrame": 0, "durationFrames": 53}, {"text": "换乘也更折腾。", "startFrame": 52, "durationFrames": 56}, {"text": "心里却觉得还是在地上跑更安全。", "startFrame": 107, "durationFrames": 86}, {"text": "这种宁可多花时间也要避险的心态。", "startFrame": 193, "durationFrames": 80}, {"text": "是不是让你觉得非常踏实。", "startFrame": 272, "durationFrames": 58}]} totalDurationFrames={330} imageSrc={staticFile("images/认知偏见_可得性启发/scene_1_2.png")} enterEffect="fadeIn" anchors={[{"text": "折腾", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "避险心态", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
