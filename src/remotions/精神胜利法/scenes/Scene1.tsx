import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChatBubble, BWHubRadiate, BWQuoteCitation } from "../../../components";

// 差距面前先找补
const SCENE_DURATION = 142 + 102 + 95 + 250 + 123;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={142}>
                <BWQuoteCitation content={[{"text": "“这东西，", "startFrame": 0, "durationFrames": 26}, {"text": "我们老祖宗几千年前就有了。”", "startFrame": 25, "durationFrames": 63}, {"text": "这句话，", "startFrame": 88, "durationFrames": 27}, {"text": "你一定见过。", "startFrame": 114, "durationFrames": 28}]} totalDurationFrames={142} quoteDisplayText={"这东西，我们老祖宗几千年前就有了。"} quoteSource={"常见找补话术"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={142} durationInFrames={102}>
                <BWChatBubble content={[{"text": "芯片差距怎么追赶？", "startFrame": 0, "durationFrames": 57}, {"text": "我们有四大发明。", "startFrame": 56, "durationFrames": 45}]} totalDurationFrames={102} bubbles={[{ bubbleText: "芯片差距怎么追赶？", showFrom: 0, align: "left" }, { bubbleText: "我们有四大发明。", showFrom: 1, align: "right" }]} anchors={[]} />
            </Sequence>
            <Sequence from={244} durationInFrames={95}>
                <BWChatBubble content={[{"text": "火箭差距怎么弥补？", "startFrame": 0, "durationFrames": 50}, {"text": "我们有《天工开物》。", "startFrame": 49, "durationFrames": 45}]} totalDurationFrames={95} bubbles={[{ bubbleText: "火箭差距怎么弥补？", showFrom: 0, align: "left" }, { bubbleText: "我们有《天工开物》。", showFrom: 1, align: "right" }]} anchors={[]} />
            </Sequence>
            <Sequence from={339} durationInFrames={250}>
                <BWHubRadiate content={[{"text": "有一些人，", "startFrame": 0, "durationFrames": 27}, {"text": "在面对差距和不足的时候，", "startFrame": 26, "durationFrames": 60}, {"text": "第一反应不会是思考差距是如何造成的，", "startFrame": 86, "durationFrames": 87}, {"text": "也不会去思考不足该怎样弥补，", "startFrame": 172, "durationFrames": 78}]} totalDurationFrames={250} hub={{ imageSrc: staticFile("images/精神胜利法/scene_1_4.png"), showFrom: 0, enterEffect: "zoomIn" }} rays={[{ imageSrc: staticFile("images/精神胜利法/scene_1_4_img0.png"), showFrom: 2, enterEffect: "fadeIn" }, { imageSrc: staticFile("images/精神胜利法/scene_1_4_img1.png"), showFrom: 3, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={589} durationInFrames={123}>
                <BWCenterFocus content={[{"text": "他们的第一反应，", "startFrame": 0, "durationFrames": 30}, {"text": "是想办法让自己从其他地方获得胜利。", "startFrame": 29, "durationFrames": 93}]} totalDurationFrames={123} imageSrc={staticFile("images/精神胜利法/scene_1_5.png")} enterEffect="fadeIn" anchors={[{"text": "从其他地方获得胜利", "showFrom": 1, "color": "#EF4444", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/精神胜利法/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
