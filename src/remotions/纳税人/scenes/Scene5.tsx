import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：重构身份认知
const SCENE_DURATION = 135 + 331 + 387 + 123 + 142;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={135}>
                <BWTextFocus content={[{"text": "现在，", "startFrame": 0, "durationFrames": 18}, {"text": "把腰杆给我挺直了！", "startFrame": 17, "durationFrames": 45}, {"text": "从今天起，", "startFrame": 62, "durationFrames": 27}, {"text": "彻底重构你的身份认知。", "startFrame": 88, "durationFrames": 47}]} totalDurationFrames={135} coreSentence={[{"text": "现在，把腰杆给我挺直了！", "showFrom": 0, "endFrom": 3}, {"text": "从今天起，彻底重构你的身份认知。", "showFrom": 2, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "挺直", "color": "#EF4444"}, {"coreSentenceAnchor": "重构", "color": "#EF4444"}, {"coreSentenceAnchor": "身份认知", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={135} durationInFrames={331}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 16}, {"text": "理直气壮地去享受社会福利。", "startFrame": 15, "durationFrames": 65}, {"text": "你看到的每一座高架桥，", "startFrame": 79, "durationFrames": 47}, {"text": "你走过的每一段柏油路。", "startFrame": 126, "durationFrames": 49}, {"text": "都有你掏出的真金白银。", "startFrame": 175, "durationFrames": 57}, {"text": "你不是在受人恩惠，", "startFrame": 231, "durationFrames": 41}, {"text": "你是在享受自己的投资回报。", "startFrame": 272, "durationFrames": 58}]} totalDurationFrames={331} title={"纳税就是投资"} imageSrc={staticFile("images/纳税人/scene_5_2.png")} notes={[{"text": "你已预付了成本", "showFrom": 1}, {"text": "每一分税都算数", "showFrom": 4}, {"text": "你不是负担，是股东", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={466} durationInFrames={387}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 16}, {"text": "唤醒你的主人翁意识。", "startFrame": 15, "durationFrames": 55}, {"text": "当你遇到不合理的现象，", "startFrame": 69, "durationFrames": 48}, {"text": "当你的合法权益受到侵害，", "startFrame": 117, "durationFrames": 51}, {"text": "大胆地说出来，", "startFrame": 168, "durationFrames": 31}, {"text": "勇敢地去争取。", "startFrame": 198, "durationFrames": 35}, {"text": "你有绝对的资格。", "startFrame": 232, "durationFrames": 35}, {"text": "你不仅有资格享受福利，", "startFrame": 267, "durationFrames": 53}, {"text": "你更有资格参与决定每一个政策。", "startFrame": 320, "durationFrames": 67}]} totalDurationFrames={387} title={"主人翁意识"} imageSrc={staticFile("images/纳税人/scene_5_3.png")} notes={[{"text": "识别不合理现象", "showFrom": 2}, {"text": "勇敢捍卫权益", "showFrom": 4}, {"text": "参与政策制定", "showFrom": 8}]} anchors={[]} />
            </Sequence>
            <Sequence from={853} durationInFrames={123}>
                <BWTextFocus content={[{"text": "记住。", "startFrame": 0, "durationFrames": 24}, {"text": "每一次微小的消费。", "startFrame": 24, "durationFrames": 47}, {"text": "都在进行光荣的纳税。", "startFrame": 70, "durationFrames": 52}]} totalDurationFrames={123} coreSentence={[{"text": "每一次微小的消费。", "showFrom": 0}, {"text": "都在进行光荣的纳税。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "消费", "color": "#EF4444"}, {"coreSentenceAnchor": "光荣的纳税", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={976} durationInFrames={142}>
                <BWTextFocus content={[{"text": "你根本不是什么国家的负担。", "startFrame": 0, "durationFrames": 59}, {"text": "你，", "startFrame": 58, "durationFrames": 7}, {"text": "就是建设这个国家的，", "startFrame": 65, "durationFrames": 36}, {"text": "隐形金主！", "startFrame": 101, "durationFrames": 40}]} totalDurationFrames={142} coreSentence={[{"text": "你根本不是什么国家的负担。", "showFrom": 0, "endFrom": 3}, {"text": "你，就是建设这个国家的，", "showFrom": 1, "endFrom": 3}, {"text": "隐形金主！", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "国家的负担", "color": "#6B7280"}, {"coreSentenceAnchor": "隐形金主", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
