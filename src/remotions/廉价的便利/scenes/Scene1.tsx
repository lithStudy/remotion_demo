import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWBeatSequence, BWCognitiveShift, BWPanelGrid, BWQuoteCitation, BWTextFocus } from "../../../components";

// 引入：便利背后的廉价人力
const SCENE_DURATION = 30 + 150 + 210 + 30 + 151 + 120;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={30}>
                <BWTextFocus content={[{"text": "在中国生活实在太便利了！", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={["在中国生活实在太便利了！"]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={30} durationInFrames={150}>
                <BWPanelGrid content={[{"text": "9块9包邮的产品一大把，", "startFrame": 0, "durationFrames": 30}, {"text": "深更半夜点外卖，", "startFrame": 30, "durationFrames": 30}, {"text": "还能半小时就给送到了。", "startFrame": 60, "durationFrames": 30}, {"text": " 客服24小时在线，", "startFrame": 90, "durationFrames": 30}, {"text": "都是秒回。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} panels={[{ src: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "zoomIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "fadeIn" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "slideLeft" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "breathe" }, { src: staticFile("images/template/scene1_1.png"), showFrom: 4, enterEffect: "popIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={180} durationInFrames={210}>
                <BWQuoteCitation content={[{"text": "很多人张口就来，", "startFrame": 0, "durationFrames": 30}, {"text": "自豪得不行。", "startFrame": 30, "durationFrames": 30}, {"text": " “这一切，", "startFrame": 60, "durationFrames": 30}, {"text": "都因为咱们基建牛逼！", "startFrame": 90, "durationFrames": 30}, {"text": "高铁、", "startFrame": 120, "durationFrames": 30}, {"text": "5G，", "startFrame": 150, "durationFrames": 30}, {"text": "世界第一！”", "startFrame": 180, "durationFrames": 30}]} totalDurationFrames={210} quoteSource={"很多人"} showFrom={2} anchors={[]} />
            </Sequence>
            <Sequence from={390} durationInFrames={30}>
                <BWTextFocus content={[{"text": "对了一半。", "startFrame": 0, "durationFrames": 30}]} totalDurationFrames={30} coreSentence={[{"text": "对了一半。", "showFrom": 0}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={420} durationInFrames={151}>
                <BWBeatSequence content={[{"text": "基建确实把物流成本砸下来了。", "startFrame": 0, "durationFrames": 31}, {"text": " 可算法再牛，", "startFrame": 31, "durationFrames": 30}, {"text": "也爬不上六楼。", "startFrame": 61, "durationFrames": 30}, {"text": " 最后三公里，", "startFrame": 91, "durationFrames": 30}, {"text": "永远靠两条人腿在跑。", "startFrame": 121, "durationFrames": 30}]} totalDurationFrames={151} stages={[{ imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "breathe", tone: "calm", showFrom: 0 }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 1 }, { imageSrc: staticFile("images/template/scene1_1.png"), enterEffect: "slideBottom", tone: "alert", showFrom: 3 }]} anchors={[]} />
            </Sequence>
            <Sequence from={571} durationInFrames={120}>
                <BWCognitiveShift content={[{"text": "真正撑起这极致便利的，", "startFrame": 0, "durationFrames": 30}, {"text": " 不是钢筋水泥，", "startFrame": 30, "durationFrames": 30}, {"text": " 而是极其廉价的人力，", "startFrame": 60, "durationFrames": 30}, {"text": "和不要命的汗水。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} notText={"钢筋水泥"} butText={"廉价人力，不要命的汗水"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
