import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWPanelGrid } from "../../../components";

// 反思：真正发达的标准
const SCENE_DURATION = 63 + 150 + 100;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={63}>
                <BWCenterFocus content={[{"text": "一个国家真正发达的标志，", "startFrame": 0, "durationFrames": 30}, {"text": "从来不是你能多便宜地使唤别人。", "startFrame": 30, "durationFrames": 33}]} totalDurationFrames={63} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" anchors={[{"text": "发达的标志", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={63} durationInFrames={150}>
                <BWPanelGrid content={[{"text": "而是，", "startFrame": 0, "durationFrames": 30}, {"text": "一个普通的送货员、", "startFrame": 30, "durationFrames": 30}, {"text": "一个电工、", "startFrame": 60, "durationFrames": 30}, {"text": "一个文员，", "startFrame": 90, "durationFrames": 30}, {"text": "付出每天8小时的正常劳动，", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "slideLeft" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "slideBottom" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 4, enterEffect: "zoomIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={213} durationInFrames={100}>
                <BWCenterFocus content={[{"text": "就能换来体面的收入，", "startFrame": 0, "durationFrames": 30}, {"text": "养得起家，", "startFrame": 30, "durationFrames": 30}, {"text": "拥有作为人的基本生活时间和娱乐时间。", "startFrame": 60, "durationFrames": 40}]} totalDurationFrames={100} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "体面的收入", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
