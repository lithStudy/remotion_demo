import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 给出建议：防身武器
const SCENE_DURATION = 103 + 80 + 120 + 104 + 90 + 68;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31}, {"text": "下次上网冲浪，", "startFrame": 31, "durationFrames": 30}, {"text": "我建议大家在心里备好这把“防身武器”：", "startFrame": 61, "durationFrames": 42}]} anchors={[{"text": "算法的傀儡", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={103} />
            </Sequence>
            <Sequence from={103} durationInFrames={80}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideLeft" content={[{"text": "反向搜索法：当你极其认同某个观点时，", "startFrame": 0, "durationFrames": 40}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 40, "durationFrames": 40}]} anchors={[{"text": "反向搜索法", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": null}]} totalDurationFrames={80} />
            </Sequence>
            <Sequence from={183} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30}, {"text": "如果一段文字让你读完觉得", "startFrame": 30, "durationFrames": 30}, {"text": "“太解气了、说得太对了”，", "startFrame": 60, "durationFrames": 30}, {"text": "这时候一定要停下来。", "startFrame": 90, "durationFrames": 30}]} anchors={[]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={303} durationInFrames={104}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 37}, {"text": "往往不是真相，", "startFrame": 37, "durationFrames": 30}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 67, "durationFrames": 37}]} anchors={[]} totalDurationFrames={104} />
            </Sequence>
            <Sequence from={407} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30}, {"text": "会有什么证据能说服我？”", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={497} durationInFrames={68}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 35}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 35, "durationFrames": 33}]} anchors={[]} totalDurationFrames={68} />
            </Sequence>

        </AbsoluteFill>
    );
};
