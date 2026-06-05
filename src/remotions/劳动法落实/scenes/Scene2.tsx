import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWQuoteCitation, BWTextFocus } from "../../../components";

// 反转：劣质企业该倒闭
const SCENE_DURATION = 144 + 177 + 167 + 85;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={144}>
                <BWQuoteCitation content={[{"text": "有人马上说。", "startFrame": 0, "durationFrames": 32}, {"text": "那很多公司要倒闭。", "startFrame": 31, "durationFrames": 54}, {"text": "他们的利润本来就很微薄。", "startFrame": 85, "durationFrames": 59}]} totalDurationFrames={144} quoteDisplayText={"那很多公司要倒闭。他们的利润本来就很微薄。"} quoteSource={"质疑者"} showFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={144} durationInFrames={177}>
                <BWTextFocus content={[{"text": "我说得直接一点。", "startFrame": 0, "durationFrames": 38}, {"text": "如果一家公司，", "startFrame": 37, "durationFrames": 33}, {"text": "只能靠压榨员工来活下去，", "startFrame": 69, "durationFrames": 58}, {"text": "那就赶紧让他倒闭好了。", "startFrame": 127, "durationFrames": 50}]} totalDurationFrames={177} coreSentence={[{"text": "如果一家公司，", "showFrom": 1}, {"text": "只能靠压榨员工来活下去，", "showFrom": 2}, {"text": "那就赶紧让他倒闭好了。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "压榨员工", "color": "#EF4444"}, {"coreSentenceAnchor": "倒闭", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={321} durationInFrames={167}>
                <BWCauseChain content={[{"text": "它腾出来的订单。", "startFrame": 0, "durationFrames": 36}, {"text": "腾出来的客户。", "startFrame": 35, "durationFrames": 33}, {"text": "会有效率更高、", "startFrame": 68, "durationFrames": 36}, {"text": "商业模式更合理的企业接手。", "startFrame": 104, "durationFrames": 63}]} totalDurationFrames={167} layout={"horizontal"} nodes={[{ label: "腾出资源", imageSrc: staticFile("images/劳动法落实/scene_2_3_img0.png"), showFrom: 0, enterEffect: "slideLeft" }, { label: "高效接手", imageSrc: staticFile("images/劳动法落实/scene_2_3_img1.png"), showFrom: 2, enterEffect: "zoomIn" }, { label: "市场优化", imageSrc: staticFile("images/劳动法落实/scene_2_3_img2.png"), showFrom: 3, enterEffect: "breathe" }]} anchors={[]} />
            </Sequence>
            <Sequence from={488} durationInFrames={85}>
                <BWCognitiveShift content={[{"text": "市场不需要人矿。", "startFrame": 0, "durationFrames": 43}, {"text": "市场需要真本事。", "startFrame": 42, "durationFrames": 42}]} totalDurationFrames={85} notText={"需要人矿"} butText={"需要真本事"} butSrc={staticFile("images/劳动法落实/scene_2_4.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/劳动法落实/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
