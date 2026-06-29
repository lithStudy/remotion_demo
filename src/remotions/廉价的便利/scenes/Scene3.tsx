import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCenterFocus, BWCognitiveShift, BWMagnifyingGlass, BWSplitCompare } from "../../../components";

// 剖析：廉价人力阻碍创新
const SCENE_DURATION = 120 + 61 + 82 + 120 + 60 + 72 + 76 + 120;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWBeatSequence content={[{"text": "你可能觉得，", "startFrame": 0, "durationFrames": 30}, {"text": "\n我在办公室吹空调，", "startFrame": 30, "durationFrames": 30}, {"text": "\n这跟我有什么关系？", "startFrame": 60, "durationFrames": 30}, {"text": "\n关系大了。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom" }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom" }]} anchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={61}>
                <BWCenterFocus content={[{"text": "人力便宜这个逻辑，", "startFrame": 0, "durationFrames": 30}, {"text": "\n已经打通了全社会每一个角落。", "startFrame": 30, "durationFrames": 31}]} totalDurationFrames={61} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "人力便宜", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={181} durationInFrames={82}>
                <BWCenterFocus content={[{"text": "老板为什么宁愿招三个应届生996试错，", "startFrame": 0, "durationFrames": 42}, {"text": "\n也不肯砸钱搞真正能提效的软件和研发？", "startFrame": 42, "durationFrames": 40}]} totalDurationFrames={82} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "软件研发", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={263} durationInFrames={120}>
                <BWCognitiveShift content={[{"text": "因为软件贵，", "startFrame": 0, "durationFrames": 30}, {"text": "研发有风险。", "startFrame": 30, "durationFrames": 30}, {"text": "\n而你，", "startFrame": 60, "durationFrames": 30}, {"text": "很便宜。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} notText={"软件贵研发风险"} butText={"你很便宜"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={383} durationInFrames={60}>
                <BWMagnifyingGlass content={[{"text": "廉价的人力，", "startFrame": 0, "durationFrames": 30}, {"text": "首先会阻碍创新。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} anchors={[{"text": "阻碍创新", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={443} durationInFrames={72}>
                <BWCenterFocus content={[{"text": "当你只需要花一点点钱就能坐轿子的时候，", "startFrame": 0, "durationFrames": 42}, {"text": "\n你就不会想着造车。", "startFrame": 42, "durationFrames": 30}]} totalDurationFrames={72} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={515} durationInFrames={76}>
                <BWCenterFocus content={[{"text": "当你只需要花一点点钱就能让人扇扇子的时候，", "startFrame": 0, "durationFrames": 46}, {"text": "\n你就不会想着造电风扇。", "startFrame": 46, "durationFrames": 30}]} totalDurationFrames={76} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "扇扇子", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": null}, {"text": "电风扇", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={591} durationInFrames={120}>
                <BWSplitCompare content={[{"text": "创新很耗时，", "startFrame": 0, "durationFrames": 30}, {"text": "创新很贵，", "startFrame": 30, "durationFrames": 30}, {"text": "而你，", "startFrame": 60, "durationFrames": 30}, {"text": "很便宜。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"创新"} rightLabel={"廉价人力"} leftShowFrom={0} rightShowFrom={2} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
