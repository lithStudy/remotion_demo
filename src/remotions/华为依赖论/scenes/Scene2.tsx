import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDataTable, BWQuoteCitation } from "../../../components";

// 剖析：通信网络并非华为独建
const SCENE_DURATION = 350 + 167 + 274 + 132;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={350}>
                <BWQuoteCitation content={[{"text": "网上总有人说，", "startFrame": 0, "durationFrames": 34}, {"text": "你只要用手机，", "startFrame": 33, "durationFrames": 38}, {"text": "就是在用华为基站。", "startFrame": 70, "durationFrames": 39}, {"text": "好像中国的通信网络是华为一个人建的。", "startFrame": 108, "durationFrames": 102}, {"text": "但凡你去翻过任何一轮运营商的集采公告，", "startFrame": 210, "durationFrames": 89}, {"text": "你就知道这话有多离谱。", "startFrame": 298, "durationFrames": 51}]} totalDurationFrames={350} quoteDisplayText={"你只要用手机，就在用华为基站。"} showFrom={1} quoteSource={"智选用户"} />
            </Sequence>
            <Sequence from={350} durationInFrames={167}>
                <BWCenterFocus content={[{"text": "中国移动2023到2024年搞了一轮41亿元的5G基站集采。", "startFrame": 0, "durationFrames": 167}]} totalDurationFrames={167} imageSrc={staticFile("images/华为依赖论/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={517} durationInFrames={274}>
                <BWDataTable content={[{"text": "结果是什么？", "startFrame": 0, "durationFrames": 26}, {"text": "华为拿大概50%，", "startFrame": 25, "durationFrames": 60}, {"text": "中兴拿23%到37%，", "startFrame": 85, "durationFrames": 71}, {"text": "剩下的，由爱立信、", "startFrame": 156, "durationFrames": 45}, {"text": "诺基亚上海贝尔、", "startFrame": 200, "durationFrames": 35}, {"text": "大唐移动瓜分。", "startFrame": 235, "durationFrames": 39}]} totalDurationFrames={274} title={"5G基站集采份额"} columns={["厂商", "份额"]} rows={[{"cells": ["华为", "大概50%"], "showFrom": 1}, {"cells": ["中兴", "23%~37%"], "showFrom": 2}, {"cells": ["爱立信", "部分"], "showFrom": 3}, {"cells": ["诺基亚上海贝尔", "部分"], "showFrom": 4}, {"cells": ["大唐移动", "部分"], "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={791} durationInFrames={132}>
                <BWCognitiveShift content={[{"text": "这不是华为\"施舍\"给别人的一点份额，", "startFrame": 0, "durationFrames": 65}, {"text": "而是运营商主动设计的分配制度。", "startFrame": 64, "durationFrames": 68}]} totalDurationFrames={132} notText={"华为施舍份额"} butText={"运营商主动设计"} butSrc={staticFile("images/华为依赖论/scene_2_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
