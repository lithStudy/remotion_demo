import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare } from "../../../components";

// 引入
const SCENE_DURATION = 198 + 188 + 209;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={198}>
                <BWCenterFocus content={[{"text": "你的大脑其实是个“骗子”。", "startFrame": 0, "durationFrames": 59}, {"text": "它为了让你活得开心，", "startFrame": 58, "durationFrames": 46}, {"text": "每天都在编造关于“成功”和“失败”的剧本。", "startFrame": 104, "durationFrames": 93}]} totalDurationFrames={198} imageSrc={staticFile("images/认知偏差_自利偏差/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "骗子", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "成功 VS 失败", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={198} durationInFrames={188}>
                <BWSplitCompare content={[{"text": "你赚了钱，是因为自己“眼光毒、胆子大”。", "startFrame": 0, "durationFrames": 96}, {"text": "你亏了钱，是因为“行情烂、运气背”。", "startFrame": 96, "durationFrames": 92}]} totalDurationFrames={188} leftSrc={staticFile("images/认知偏差_自利偏差/scene_1_2_left.png")} rightSrc={staticFile("images/认知偏差_自利偏差/scene_1_2_right.png")} leftLabel={"眼光毒、胆子大"} rightLabel={"行情烂、运气背"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={386} durationInFrames={209}>
                <BWSplitCompare content={[{"text": "你上班没迟到是因为自己起得早，很守时；", "startFrame": 0, "durationFrames": 96}, {"text": "上班迟到，", "startFrame": 96, "durationFrames": 28}, {"text": "则是因为“堵车、闹钟坏了、生活不易”；", "startFrame": 123, "durationFrames": 86}]} totalDurationFrames={209} leftSrc={staticFile("images/认知偏差_自利偏差/scene_1_3_left.png")} rightSrc={staticFile("images/认知偏差_自利偏差/scene_1_3_right.png")} leftLabel={"很守时"} rightLabel={"堵车、闹钟坏了"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_自利偏差/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
