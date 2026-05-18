import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDataTable, BWQuoteCitation } from "../../../components";

// 剖析：通信网络并非华为独建
const SCENE_DURATION = 347 + 166 + 321 + 167;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={347}>
                <BWQuoteCitation content={[{"text": "网上总有人说，", "startFrame": 0, "durationFrames": 33}, {"text": "你只要用手机，", "startFrame": 32, "durationFrames": 33}, {"text": "就是在用华为基站。", "startFrame": 65, "durationFrames": 46}, {"text": "好像中国的通信网络是华为一个人建的。", "startFrame": 111, "durationFrames": 89}, {"text": "但凡你去翻过任何一轮运营商的集采公告，", "startFrame": 199, "durationFrames": 95}, {"text": "你就知道这话有多离谱。", "startFrame": 294, "durationFrames": 53}]} totalDurationFrames={347} quoteDisplayText={"你只要用手机，就在用华为基站。"} showFrom={1} quoteSource={"智选用户"} />
            </Sequence>
            <Sequence from={347} durationInFrames={166}>
                <BWCenterFocus content={[{"text": "中国移动2023到2024年搞了一轮41亿元的5G基站集采。", "startFrame": 0, "durationFrames": 166}]} totalDurationFrames={166} imageSrc={staticFile("images/华为依赖论/scene_2_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={513} durationInFrames={321}>
                <BWDataTable content={[{"text": "结果是什么？", "startFrame": 0, "durationFrames": 29}, {"text": "华为拿大概50%，", "startFrame": 28, "durationFrames": 67}, {"text": "中兴拿23%到37%，", "startFrame": 95, "durationFrames": 84}, {"text": "剩下的，由爱立信、", "startFrame": 179, "durationFrames": 52}, {"text": "诺基亚上海贝尔、", "startFrame": 230, "durationFrames": 45}, {"text": "大唐移动瓜分。", "startFrame": 275, "durationFrames": 45}]} totalDurationFrames={321} title={"5G基站集采份额"} columns={["厂商", "份额"]} rows={[{"cells": ["华为", "大概50%"], "showFrom": 1}, {"cells": ["中兴", "23%~37%"], "showFrom": 2}, {"cells": ["爱立信", "部分"], "showFrom": 3}, {"cells": ["诺基亚上海贝尔", "部分"], "showFrom": 4}, {"cells": ["大唐移动", "部分"], "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={834} durationInFrames={167}>
                <BWCognitiveShift content={[{"text": "这不是华为\"施舍\"给别人的一点份额，", "startFrame": 0, "durationFrames": 77}, {"text": "而是运营商主动设计的分配制度。", "startFrame": 76, "durationFrames": 90}]} totalDurationFrames={167} notText={"华为施舍份额"} butText={"运营商主动设计"} butSrc={staticFile("images/华为依赖论/scene_2_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为依赖论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
