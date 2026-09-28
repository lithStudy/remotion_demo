import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWConceptCard, BWHubRadiate, BWMagnifyingGlass, BWPeerInduct, BWSplitCompare } from "../../../components";

// 剖析·目的倒置与权责不等
const SCENE_DURATION = 77 + 92 + 171 + 94 + 280 + 221 + 213 + 129 + 253 + 149 + 133;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={77}>
                <BWConceptCard content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "目的与手段的彻底倒置。", "startFrame": 17, "durationFrames": 59}]} totalDurationFrames={77} imageSrc={staticFile("images/宏大叙事论/scene_3_1.png")} conceptName={"目的与手段倒置"} />
            </Sequence>
            <Sequence from={77} durationInFrames={92}>
                <BWMagnifyingGlass content={[{"text": "社会、集体、国家，", "startFrame": 0, "durationFrames": 53}, {"text": "发展的终极目的是什么？", "startFrame": 52, "durationFrames": 40}]} totalDurationFrames={92} anchors={[{"text": "终极目的", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={169} durationInFrames={171}>
                <BWHubRadiate content={[{"text": "是为了每一个具体的人，", "startFrame": 0, "durationFrames": 43}, {"text": "能活得更有尊严、更幸福。", "startFrame": 42, "durationFrames": 55}, {"text": "人才是目的，", "startFrame": 97, "durationFrames": 32}, {"text": "发展只是手段。", "startFrame": 128, "durationFrames": 42}]} totalDurationFrames={171} hub={{ imageSrc: staticFile("images/宏大叙事论/scene_3_3.png"), enterEffect: "zoomIn", showFrom: 0 }} rays={[{ imageSrc: staticFile("images/宏大叙事论/scene_3_3_img0.png"), enterEffect: "slideLeft", showFrom: 2 }, { imageSrc: staticFile("images/宏大叙事论/scene_3_3_img1.png"), enterEffect: "slideBottom", showFrom: 3 }]} />
            </Sequence>
            <Sequence from={340} durationInFrames={94}>
                <BWCenterFocus content={[{"text": "但宏大叙事第一步，", "startFrame": 0, "durationFrames": 45}, {"text": "就是把这个关系偷偷掉包。", "startFrame": 44, "durationFrames": 49}]} totalDurationFrames={94} />
            </Sequence>
            <Sequence from={434} durationInFrames={280}>
                <BWCauseChain content={[{"text": "它把集体和抽象的概念捧成唯一的“目的”，", "startFrame": 0, "durationFrames": 104}, {"text": "把每一个有血有肉、有痛感的人，", "startFrame": 103, "durationFrames": 75}, {"text": "降格成了实现这个抽象蓝图的“燃料”与“代价”。", "startFrame": 177, "durationFrames": 102}]} totalDurationFrames={280} layout={"horizontal"} nodes={[{ label: "抽象成目的", imageSrc: staticFile("images/宏大叙事论/scene_3_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "具体的人", imageSrc: staticFile("images/宏大叙事论/scene_3_5_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "燃料与代价", imageSrc: staticFile("images/宏大叙事论/scene_3_5_img2.png"), showFrom: 2, enterEffect: "zoomIn" }]} />
            </Sequence>
            <Sequence from={714} durationInFrames={221}>
                <BWCognitiveShift content={[{"text": "当个体的幸福不再是目的，", "startFrame": 0, "durationFrames": 54}, {"text": "而变成了损耗品。", "startFrame": 53, "durationFrames": 43}, {"text": "你的痛苦就不再是痛苦，", "startFrame": 96, "durationFrames": 56}, {"text": "只是机器运转时磨掉的一层皮。", "startFrame": 151, "durationFrames": 69}]} totalDurationFrames={221} notText={"目的"} butText={"损耗品"} butSrc={staticFile("images/宏大叙事论/scene_3_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={935} durationInFrames={213}>
                <BWConceptCard content={[{"text": "宏大叙事的第二个问题，", "startFrame": 0, "durationFrames": 50}, {"text": "是权责利的极度不对等。", "startFrame": 49, "durationFrames": 54}, {"text": "在这个宏大游戏里，", "startFrame": 102, "durationFrames": 42}, {"text": "利益和代价的分配是完全脱节的。", "startFrame": 143, "durationFrames": 69}]} totalDurationFrames={213} imageSrc={staticFile("images/宏大叙事论/scene_3_7.png")} conceptName={"权责利失衡"} />
            </Sequence>
            <Sequence from={1148} durationInFrames={129}>
                <BWCenterFocus content={[{"text": "推行宏大叙事的人，", "startFrame": 0, "durationFrames": 42}, {"text": "独占了抽象的成就、政绩与话语权；", "startFrame": 41, "durationFrames": 88}]} totalDurationFrames={129} imageSrc={staticFile("images/宏大叙事论/scene_3_8.png")} enterEffect="fadeIn" anchors={[{"text": "独占", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={1277} durationInFrames={253}>
                <BWPeerInduct content={[{"text": "而为了这个“宏大”所付出的具体痛苦、", "startFrame": 0, "durationFrames": 78}, {"text": "经济损失，", "startFrame": 77, "durationFrames": 32}, {"text": "甚至生命代价，", "startFrame": 109, "durationFrames": 40}, {"text": "被100%外部化，", "startFrame": 148, "durationFrames": 44}, {"text": "推给了毫无话语权的普通个体。", "startFrame": 192, "durationFrames": 61}]} totalDurationFrames={253} premises={[{ imageSrc: staticFile("images/宏大叙事论/scene_3_9_img0.png"), enterEffect: "fadeIn", showFrom: 0 }, { imageSrc: staticFile("images/宏大叙事论/scene_3_9_img1.png"), enterEffect: "slideBottom", showFrom: 1 }, { imageSrc: staticFile("images/宏大叙事论/scene_3_9_img2.png"), enterEffect: "breathe", showFrom: 2 }]} conclusion={{ imageSrc: staticFile("images/宏大叙事论/scene_3_9.png"), enterEffect: "zoomIn", showFrom: 4, tone: "alert" }} />
            </Sequence>
            <Sequence from={1530} durationInFrames={149}>
                <BWSplitCompare content={[{"text": "掌权者高高在上收割红利，", "startFrame": 0, "durationFrames": 71}, {"text": "底层个体在泥泞里独自买单。", "startFrame": 70, "durationFrames": 78}]} totalDurationFrames={149} leftSrc={staticFile("images/宏大叙事论/scene_3_10_left.png")} rightSrc={staticFile("images/宏大叙事论/scene_3_10_right.png")} leftLabel={"掌权者"} rightLabel={"底层个体"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={1679} durationInFrames={133}>
                <BWCognitiveShift content={[{"text": "这根本不是什么同舟共济，", "startFrame": 0, "durationFrames": 56}, {"text": "这是一场披着崇高外衣的利益掠夺。", "startFrame": 55, "durationFrames": 77}]} totalDurationFrames={133} notText={"同舟共济"} butText={"披着崇高外衣的利益掠夺"} butSrc={staticFile("images/宏大叙事论/scene_3_11.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/宏大叙事论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
