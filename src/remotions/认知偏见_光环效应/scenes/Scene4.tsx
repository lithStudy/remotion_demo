import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：对抗光环效应的策略
const SCENE_DURATION = 57 + 187 + 189 + 157;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={57}>
                <BWCenterFocus content={[{"text": "那怎么避免？", "startFrame": 0, "durationFrames": 22}, {"text": "记住两个动作。", "startFrame": 21, "durationFrames": 35}]} totalDurationFrames={57} imageSrc={staticFile("images/认知偏见_光环效应/scene_4_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={57} durationInFrames={187}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 16}, {"text": "先看观点，", "startFrame": 15, "durationFrames": 32}, {"text": "再看头衔。", "startFrame": 46, "durationFrames": 32}, {"text": "不要因为对方是专家，", "startFrame": 78, "durationFrames": 45}, {"text": "就跳过判断内容本身。", "startFrame": 123, "durationFrames": 64}]} totalDurationFrames={187} title={"避免信息茧房"} imageSrc={staticFile("images/认知偏见_光环效应/scene_4_2.png")} notes={[{"text": "先看观点", "showFrom": 1}, {"text": "再看头衔", "showFrom": 2}, {"text": "独立判断内容", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={244} durationInFrames={189}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 16}, {"text": "遇到任何权威背书，", "startFrame": 15, "durationFrames": 45}, {"text": "都多问一句：", "startFrame": 60, "durationFrames": 36}, {"text": "如果把他的身份拿掉，", "startFrame": 96, "durationFrames": 45}, {"text": "这句话我还会信吗？", "startFrame": 140, "durationFrames": 49}]} totalDurationFrames={189} title={"拿掉身份滤镜"} imageSrc={staticFile("images/认知偏见_光环效应/scene_4_3.png")} notes={[{"text": "不盲从权威", "showFrom": 1}, {"text": "观点本身是否站得住脚？", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={433} durationInFrames={157}>
                <BWTextFocus content={[{"text": "很多时候，", "startFrame": 0, "durationFrames": 24}, {"text": "你不是输给了谎言，", "startFrame": 24, "durationFrames": 44}, {"text": "你只是输给了那种“他看起来很专业”的感觉", "startFrame": 67, "durationFrames": 89}]} totalDurationFrames={157} coreSentence={["你不是输给了谎言", "你只是输给了", "“他看起来很专业”的感觉"]} coreSentenceAnchors={[{"coreSentenceAnchor": "输给了谎言", "color": "#EF4444"}, {"coreSentenceAnchor": "他看起来很专业", "color": "#CA8A04"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_光环效应/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
