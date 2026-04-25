import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWTextFocus, BWTimeline } from "../../../components";

// 命名：科技平权
const SCENE_DURATION = 89 + 226 + 260 + 69;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={89}>
                <BWCenterFocus content={[{"text": "“廉价”这两个字，", "startFrame": 0, "durationFrames": 39}, {"text": "从来不是产品的问题。", "startFrame": 39, "durationFrames": 50}]} totalDurationFrames={89} imageSrc={staticFile("images/小米平权/scene_6_1.png")} enterEffect="fadeIn" anchors={[{"text": "产品问题", "showFrom": 1, "color": "#000000", "anim": "slideUp"}]} />
            </Sequence>
            <Sequence from={89} durationInFrames={226}>
                <BWCauseChain content={[{"text": "它是一套精心设计的话语武器，", "startFrame": 0, "durationFrames": 71}, {"text": "让你嫌弃自己买得起的东西，", "startFrame": 70, "durationFrames": 68}, {"text": "让你继续心甘情愿被高溢价收割。", "startFrame": 138, "durationFrames": 88}]} totalDurationFrames={226} layout={"horizontal"} nodes={[{ label: "话语武器", imageSrc: staticFile("images/小米平权/scene_6_2_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { label: "嫌弃自身", imageSrc: staticFile("images/小米平权/scene_6_2_img1.png"), showFrom: 1, enterEffect: "zoomIn" }, { label: "高溢价收割", imageSrc: staticFile("images/小米平权/scene_6_2_img2.png"), showFrom: 2, enterEffect: "slideBottom" }]} />
            </Sequence>
            <Sequence from={315} durationInFrames={260}>
                <BWTimeline content={[{"text": "而小米做的，", "startFrame": 0, "durationFrames": 36}, {"text": "恰恰相反。", "startFrame": 36, "durationFrames": 43}, {"text": "它用极致的克制，", "startFrame": 78, "durationFrames": 41}, {"text": "把科技从少数人的奢侈品，", "startFrame": 118, "durationFrames": 66}, {"text": "变成了每个普通人都能享有的权利。", "startFrame": 184, "durationFrames": 76}]} totalDurationFrames={260} images={[{ src: staticFile("images/小米平权/scene_6_4_img0.png"), position: "left", enterEffect: "slideLeft", textIndex: 0 }, { src: staticFile("images/小米平权/scene_6_4_img1.png"), position: "center", enterEffect: "fadeIn", textIndex: 2 }, { src: staticFile("images/小米平权/scene_6_4_img2.png"), position: "right", enterEffect: "zoomIn", textIndex: 4 }]} />
            </Sequence>
            <Sequence from={575} durationInFrames={69}>
                <BWTextFocus content={[{"text": "这，", "startFrame": 0, "durationFrames": 16}, {"text": "才是真正的科技平权。", "startFrame": 15, "durationFrames": 54}]} totalDurationFrames={69} coreSentence={["这，才是真正的科技平权。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "科技平权", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米平权/scene_6/scene_6.mp3")} />
        </AbsoluteFill>
    );
};
