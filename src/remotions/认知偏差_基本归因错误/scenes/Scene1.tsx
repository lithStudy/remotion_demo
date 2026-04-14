import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid } from "../../../components";

// 引入：人际内耗
const SCENE_DURATION = 111 + 217 + 60;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={111}>
                <BWCenterFocus content={[{"text": "别再自我折磨了，", "startFrame": 0, "durationFrames": 30}, {"text": "那些让你心烦意乱的“人际难题”，", "startFrame": 30, "durationFrames": 35}, {"text": "90% 都是因为你大脑的一个进化 Bug。", "startFrame": 65, "durationFrames": 46}]} totalDurationFrames={111} imageSrc={staticFile("一个大脑思考问题的卡通图")} enterEffect="fadeIn" anchors={[{"text": "人际难题", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "进化Bug", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={111} durationInFrames={217}>
                <BWPanelGrid content={[{"text": "你看，", "startFrame": 0, "durationFrames": 30}, {"text": "同事回消息晚了，", "startFrame": 30, "durationFrames": 30}, {"text": "你就觉得他在轻视你。", "startFrame": 60, "durationFrames": 30}, {"text": "领导开会没点你名，", "startFrame": 90, "durationFrames": 30}, {"text": "你就觉得他在针对你。", "startFrame": 120, "durationFrames": 30}, {"text": "伴侣进门拉着脸，", "startFrame": 150, "durationFrames": 30}, {"text": "你就开始反思自己是不是又说错话了。", "startFrame": 180, "durationFrames": 37}]} totalDurationFrames={217} panels={[{ src: staticFile("同事皱眉的简笔画"), showFrom: 0, enterEffect: "fadeIn" }, { src: staticFile("领导讲话，员工低头的简笔画"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("伴侣背对，女生哭泣的简笔画"), showFrom: 5, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={328} durationInFrames={60}>
                <BWCenterFocus content={[{"text": "这种精神内耗，", "startFrame": 0, "durationFrames": 30}, {"text": "是不是快把你榨干了？", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} imageSrc={staticFile("一个面容憔悴的人，被无形的力量榨取能量，逐渐干瘪")} enterEffect="fadeIn" anchors={[{"text": "精神内耗", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
