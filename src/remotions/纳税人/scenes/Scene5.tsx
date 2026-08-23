import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：重构身份认知
const SCENE_DURATION = 143 + 356 + 415 + 118 + 147;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={143}>
                <BWTextFocus content={[{"text": "现在，", "startFrame": 0, "durationFrames": 24}, {"text": "把腰杆给我挺直了！", "startFrame": 24, "durationFrames": 45}, {"text": "从今天起，", "startFrame": 68, "durationFrames": 27}, {"text": "彻底重构你的身份认知。", "startFrame": 94, "durationFrames": 48}]} totalDurationFrames={143} coreSentence={[{"text": "现在，把腰杆给我挺直了！", "showFrom": 0, "endFrom": 3}, {"text": "从今天起，彻底重构你的身份认知。", "showFrom": 2, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "挺直", "color": "#EF4444"}, {"coreSentenceAnchor": "重构", "color": "#EF4444"}, {"coreSentenceAnchor": "身份认知", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={143} durationInFrames={356}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 22}, {"text": "理直气壮地去享受社会福利。", "startFrame": 21, "durationFrames": 64}, {"text": "你看到的每一座高架桥，", "startFrame": 85, "durationFrames": 58}, {"text": "你走过的每一段柏油路。", "startFrame": 142, "durationFrames": 52}, {"text": "都有你掏出的真金白银。", "startFrame": 194, "durationFrames": 60}, {"text": "你不是在受人恩惠，", "startFrame": 254, "durationFrames": 47}, {"text": "你是在享受自己的投资回报。", "startFrame": 301, "durationFrames": 55}]} totalDurationFrames={356} title={"纳税就是投资"} imageSrc={staticFile("images/纳税人/scene_5_2.png")} notes={[{"text": "你已预付了成本", "showFrom": 1}, {"text": "每一分税都算数", "showFrom": 4}, {"text": "你不是负担，是股东", "showFrom": 6}]} anchors={[]} />
            </Sequence>
            <Sequence from={499} durationInFrames={415}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 17}, {"text": "唤醒你的主人翁意识。", "startFrame": 16, "durationFrames": 58}, {"text": "当你遇到不合理的现象，", "startFrame": 74, "durationFrames": 54}, {"text": "当你的合法权益受到侵害，", "startFrame": 127, "durationFrames": 57}, {"text": "大胆地说出来，", "startFrame": 184, "durationFrames": 32}, {"text": "勇敢地去争取。", "startFrame": 216, "durationFrames": 38}, {"text": "你有绝对的资格。", "startFrame": 253, "durationFrames": 42}, {"text": "你不仅有资格享受福利，", "startFrame": 294, "durationFrames": 52}, {"text": "你更有资格参与决定每一个政策。", "startFrame": 346, "durationFrames": 69}]} totalDurationFrames={415} title={"主人翁意识"} imageSrc={staticFile("images/纳税人/scene_5_3.png")} notes={[{"text": "识别不合理现象", "showFrom": 2}, {"text": "勇敢捍卫权益", "showFrom": 4}, {"text": "参与政策制定", "showFrom": 8}]} anchors={[]} />
            </Sequence>
            <Sequence from={914} durationInFrames={118}>
                <BWTextFocus content={[{"text": "记住。", "startFrame": 0, "durationFrames": 21}, {"text": "每一次微小的消费。", "startFrame": 20, "durationFrames": 47}, {"text": "都在进行光荣的纳税。", "startFrame": 67, "durationFrames": 51}]} totalDurationFrames={118} coreSentence={[{"text": "每一次微小的消费。", "showFrom": 0}, {"text": "都在进行光荣的纳税。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "消费", "color": "#EF4444"}, {"coreSentenceAnchor": "光荣的纳税", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1032} durationInFrames={147}>
                <BWTextFocus content={[{"text": "你根本不是什么国家的负担。", "startFrame": 0, "durationFrames": 57}, {"text": "你，", "startFrame": 56, "durationFrames": 14}, {"text": "就是建设这个国家的，", "startFrame": 69, "durationFrames": 44}, {"text": "隐形金主！", "startFrame": 113, "durationFrames": 34}]} totalDurationFrames={147} coreSentence={[{"text": "你根本不是什么国家的负担。", "showFrom": 0, "endFrom": 3}, {"text": "你，就是建设这个国家的，", "showFrom": 1, "endFrom": 3}, {"text": "隐形金主！", "showFrom": 3, "endFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "国家的负担", "color": "#6B7280"}, {"coreSentenceAnchor": "隐形金主", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/纳税人/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
