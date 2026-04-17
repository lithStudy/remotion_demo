import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 反转：技术洁癖双标
const SCENE_DURATION = 61 + 64 + 64 + 101 + 61 + 94;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "那些成天嘲笑它是组装厂的人，", "startFrame": 0, "durationFrames": 31}, {"text": "\n陷入了极度双标的技术洁癖。", "startFrame": 31, "durationFrames": 30}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "双标", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "洁癖", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={61} durationInFrames={64}>
                <BWCognitiveShift content={[{"text": "对国外巨头采购硬件视而不见。", "startFrame": 0, "durationFrames": 31}, {"text": "\n对自己人却抱着莫须有的耻辱感。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={64} notText={"国外巨头"} butText={"自己人"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={125} durationInFrames={64}>
                <BWCognitiveShift content={[{"text": "对账本上的百亿研发视而不见。", "startFrame": 0, "durationFrames": 31}, {"text": "\n却对十年前的陈词滥调倒背如流。", "startFrame": 31, "durationFrames": 33}]} totalDurationFrames={64} notText={"百亿研发"} butText={"十年陈词滥调"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={189} durationInFrames={101}>
                <BWCenterFocus content={[{"text": "可是你想过没有？", "startFrame": 0, "durationFrames": 30}, {"text": "\n没有这样像鲶鱼一样的企业在前面撕咬。", "startFrame": 30, "durationFrames": 40}, {"text": "\n逼着产业链把成本打到地板价。", "startFrame": 70, "durationFrames": 31}]} totalDurationFrames={101} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "鲶鱼效应", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "地板价", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={290} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "你今天买一部好用的智能设备，", "startFrame": 0, "durationFrames": 31}, {"text": "\n至少还要多掏一半的冤枉钱。", "startFrame": 31, "durationFrames": 30}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "冤枉钱", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={351} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "键盘侠享受别人打下的价格底线，", "startFrame": 0, "durationFrames": 33}, {"text": "\n却在鄙视那个把底线砸穿的人。", "startFrame": 33, "durationFrames": 31}, {"text": "\n这就叫吃水还要骂挖井的人。", "startFrame": 64, "durationFrames": 30}]} totalDurationFrames={94} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "价格底线", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "砸穿底线", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "吃水骂井", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
