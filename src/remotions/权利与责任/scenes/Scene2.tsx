import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWPanelGrid, BWQuoteCitation, BWTextFocus } from "../../../components";

// 反驳·执行歪了
const SCENE_DURATION = 143 + 230 + 108 + 116;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={143}>
                <BWQuoteCitation content={[{"text": "有人会说。", "startFrame": 0, "durationFrames": 33}, {"text": "上意是好的，", "startFrame": 32, "durationFrames": 31}, {"text": "只是下面执行歪了。", "startFrame": 63, "durationFrames": 42}, {"text": "这是最无耻的说法。", "startFrame": 104, "durationFrames": 38}]} totalDurationFrames={143} quoteDisplayText={"上意是好的。只是下面执行歪了。"} quoteSource={"常见托词"} showFrom={0} anchors={[]} />
            </Sequence>
            <Sequence from={143} durationInFrames={230}>
                <BWPanelGrid content={[{"text": "下面执行歪了。", "startFrame": 0, "durationFrames": 42}, {"text": "原因有很多。", "startFrame": 41, "durationFrames": 36}, {"text": "可能是上面没有清晰表达。", "startFrame": 77, "durationFrames": 59}, {"text": "可能是没有足够监管。", "startFrame": 135, "durationFrames": 48}, {"text": "可能是下面能力太差。", "startFrame": 183, "durationFrames": 46}]} totalDurationFrames={230} panels={[{ src: staticFile("images/权利与责任/scene_2_2_img0.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/权利与责任/scene_2_2_img1.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/权利与责任/scene_2_2_img2.png"), showFrom: 4, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={373} durationInFrames={108}>
                <BWTextFocus content={[{"text": "不管什么原因。", "startFrame": 0, "durationFrames": 35}, {"text": "执行歪了。", "startFrame": 34, "durationFrames": 33}, {"text": "就是上面失职。", "startFrame": 66, "durationFrames": 41}]} totalDurationFrames={108} coreSentence={[{"text": "不管什么原因。", "showFrom": 0, "endFrom": 0}, {"text": "执行歪了。", "showFrom": 1}, {"text": "就是上面失职。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "上面失职", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={481} durationInFrames={116}>
                <BWCauseChain content={[{"text": "你没有做好沟通。", "startFrame": 0, "durationFrames": 34}, {"text": "你没有做好监管。", "startFrame": 33, "durationFrames": 34}, {"text": "你没有选对人。", "startFrame": 67, "durationFrames": 48}]} totalDurationFrames={116} layout={"horizontal"} nodes={[{ label: "沟通失职", imageSrc: staticFile("images/权利与责任/scene_2_5_img0.png"), showFrom: 0, enterEffect: "breathe" }, { label: "监管失职", imageSrc: staticFile("images/权利与责任/scene_2_5_img1.png"), showFrom: 1, enterEffect: "breathe" }, { label: "选人失职", imageSrc: staticFile("images/权利与责任/scene_2_5_img2.png"), showFrom: 2, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/权利与责任/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
