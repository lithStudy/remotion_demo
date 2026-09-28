import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWMagnifyingGlass, BWQuoteCitation } from "../../../components";

// 引入·被大局观堵嘴
const SCENE_DURATION = 119 + 210 + 218 + 67;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={119}>
                <BWQuoteCitation content={[{"text": "“你这人怎么一点大局观都没有？”", "startFrame": 0, "durationFrames": 65}, {"text": "这种话，", "startFrame": 64, "durationFrames": 26}, {"text": "你一定听到过。", "startFrame": 89, "durationFrames": 30}]} totalDurationFrames={119} quoteDisplayText={"你这人怎么一点大局观都没有？"} quoteSource={"常见道德绑架话术"} showFrom={0} />
            </Sequence>
            <Sequence from={119} durationInFrames={210}>
                <BWCauseChain content={[{"text": "只要你争取自己的合法权益的时候，", "startFrame": 0, "durationFrames": 64}, {"text": "就会有一群人用大局观的话术，", "startFrame": 63, "durationFrames": 70}, {"text": "瞬间把你淹没，", "startFrame": 133, "durationFrames": 44}, {"text": "逼你闭嘴。", "startFrame": 176, "durationFrames": 34}]} totalDurationFrames={210} layout={"horizontal"} nodes={[{ label: "争取权益", imageSrc: staticFile("images/宏大叙事论/scene_1_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "大局话术", imageSrc: staticFile("images/宏大叙事论/scene_1_2_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "逼你闭嘴", imageSrc: staticFile("images/宏大叙事论/scene_1_2_img2.png"), showFrom: 3, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={329} durationInFrames={218}>
                <BWCognitiveShift content={[{"text": "他讲大局观，并不是在请你参与建设大局。", "startFrame": 0, "durationFrames": 94}, {"text": "他是在用一套精心设计的语言机制，", "startFrame": 93, "durationFrames": 70}, {"text": "剥夺你作为“人”的合法性。", "startFrame": 163, "durationFrames": 54}]} totalDurationFrames={218} notText={"请你参与建设"} butText={"语言机制"} butSrc={staticFile("images/宏大叙事论/scene_1_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={547} durationInFrames={67}>
                <BWMagnifyingGlass content={[{"text": "这套机制，", "startFrame": 0, "durationFrames": 27}, {"text": "叫宏大叙事。", "startFrame": 26, "durationFrames": 41}]} totalDurationFrames={67} anchors={[{"text": "宏大叙事", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/宏大叙事论/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
