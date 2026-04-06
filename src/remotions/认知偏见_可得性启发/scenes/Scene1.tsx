import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 引入·空难焦虑与避险
const SCENE_DURATION = 33 + 191;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={33}>
                <BWCenterFocus content={[{"text": "盯着那条空难上热搜的弹窗新闻。", "startFrame": 0, "durationFrames": 33}]} totalDurationFrames={33} imageSrc={staticFile("一条手机弹窗新闻推送空难事故")} enterEffect="breathe" anchors={[{"text": "空难", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={33} durationInFrames={191}>
                <BWCenterFocus content={[{"text": "你默默把下周的航班改成了高铁。", "startFrame": 0, "durationFrames": 33}, {"text": "明知路上要多耗大半天、", "startFrame": 33, "durationFrames": 30}, {"text": "换乘也更折腾。", "startFrame": 63, "durationFrames": 30}, {"text": "心里却觉得还是在地上跑更安全。", "startFrame": 93, "durationFrames": 33}, {"text": "这种宁可多花时间也要避险的心态。", "startFrame": 126, "durationFrames": 35}, {"text": "是不是让你觉得非常踏实。", "startFrame": 161, "durationFrames": 30}]} totalDurationFrames={191} imageSrc={staticFile("一个人修改航班票的简笔画")} enterEffect="fadeIn" anchors={[{"text": "避险心态", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
