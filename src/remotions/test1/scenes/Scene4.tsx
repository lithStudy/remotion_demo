import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWDosAndDonts, BWStepList, BWTextFocus } from "../../../components";

// 提供方法：对抗偏见的“防身武器”
const SCENE_DURATION = 103 + 100 + 120 + 104 + 90 + 68 + 115 + 120;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31, "audioEffect": "ping"}, {"text": "下次上网冲浪，我建议大家在心里备好这把", "startFrame": 31, "durationFrames": 42, "audioEffect": "ping"}, {"text": "“防身武器”：", "startFrame": 73, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={103} />
            </Sequence>
            <Sequence from={103} durationInFrames={100}>
                <BWStepList content={[{"text": "反向搜索法：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "当你极其认同某个观点时，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 60, "durationFrames": 40, "audioEffect": null}]} anchors={[]} totalDurationFrames={100} />
            </Sequence>
            <Sequence from={203} durationInFrames={120}>
                <BWDosAndDonts leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} dontLabel={"❌ 别这样"} doLabel={"✅ 正确做法"} content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30, "audioEffect": "impact_thud"}, {"text": "如果一段文字让你读完觉得", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“太解气了、说得太对了”，", "startFrame": 60, "durationFrames": 30, "audioEffect": "ping"}, {"text": "这时候一定要停下来。", "startFrame": 90, "durationFrames": 30, "audioEffect": "ping"}]} anchors={[]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={323} durationInFrames={104}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 37, "audioEffect": "ping"}, {"text": "往往不是真相，", "startFrame": 37, "durationFrames": 30, "audioEffect": "impact_thud"}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 67, "durationFrames": 37, "audioEffect": null}]} anchors={[]} totalDurationFrames={104} />
            </Sequence>
            <Sequence from={427} durationInFrames={90}>
                <BWStepList content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "会有什么证据能说服我？”", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={517} durationInFrames={68}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 35, "durationFrames": 33, "audioEffect": null}]} anchors={[]} totalDurationFrames={68} />
            </Sequence>
            <Sequence from={585} durationInFrames={115}>
                <BWTextFocus content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40, "audioEffect": "ping"}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 40, "durationFrames": 40, "audioEffect": "impact_thud"}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 80, "durationFrames": 35, "audioEffect": null}]} anchors={[]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={700} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="zoomIn" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "不被偏见裹挟，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我们才能真正看清", "startFrame": 60, "durationFrames": 30, "audioEffect": "ping"}, {"text": "这个复杂的世界。", "startFrame": 90, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={120} />
            </Sequence>

        </AbsoluteFill>
    );
};
