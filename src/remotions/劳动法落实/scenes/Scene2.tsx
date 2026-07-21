import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 反转：劣质企业该倒闭
const SCENE_DURATION = 130 + 169 + 172 + 87;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={130}>
                <BWQuoteCitation content={[{"text": "有人马上说。", "startFrame": 0, "durationFrames": 33}, {"text": "那很多公司要倒闭。", "startFrame": 32, "durationFrames": 44}, {"text": "他们的利润本来就很微薄。", "startFrame": 76, "durationFrames": 54}]} totalDurationFrames={130} quoteDisplayText={"那很多公司要倒闭。他们的利润本来就很微薄。"} quoteSource={"质疑者"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={130} durationInFrames={169}>
                <BWTextFocus content={[{"text": "我说得直接一点。", "startFrame": 0, "durationFrames": 42}, {"text": "如果一家公司，", "startFrame": 41, "durationFrames": 30}, {"text": "只能靠压榨员工来活下去，", "startFrame": 70, "durationFrames": 55}, {"text": "那就赶紧让他倒闭好了。", "startFrame": 125, "durationFrames": 44}]} totalDurationFrames={169} coreSentence={[{"text": "如果一家公司，", "showFrom": 1}, {"text": "只能靠压榨员工来活下去，", "showFrom": 2}, {"text": "那就赶紧让他倒闭好了。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "压榨员工", "color": "#EF4444"}, {"coreSentenceAnchor": "倒闭", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={299} durationInFrames={172}>
                <BWCauseChain content={[{"text": "它腾出来的订单。", "startFrame": 0, "durationFrames": 38}, {"text": "腾出来的客户。", "startFrame": 37, "durationFrames": 33}, {"text": "会有效率更高、", "startFrame": 69, "durationFrames": 32}, {"text": "商业模式更合理的企业接手。", "startFrame": 101, "durationFrames": 71}]} totalDurationFrames={172} layout={"horizontal"} nodes={[{ label: "腾出资源", imageSrc: staticFile("images/劳动法落实/scene_2_3_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { label: "高效接手", imageSrc: staticFile("images/劳动法落实/scene_2_3_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "市场优化", imageSrc: staticFile("images/劳动法落实/scene_2_3_img2.png"), showFrom: 3, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={471} durationInFrames={87}>
                <BWCognitiveShift content={[{"text": "市场不需要人矿。", "startFrame": 0, "durationFrames": 45}, {"text": "市场需要真本事。", "startFrame": 44, "durationFrames": 43}]} totalDurationFrames={87} notText={"需要人矿"} butText={"需要真本事"} butSrc={staticFile("images/劳动法落实/scene_2_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
