import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWStepList } from "../../../components";

// 提供解决方案：防身武器
const SCENE_DURATION = 121 + 100 + 115 + 104 + 90 + 68;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={121}>
                <BWCenterFocus imageSrc={staticFile("一个人被许多丝线缠绕的木偶")} enterEffect="zoomIn" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31, "audioEffect": "ping"}, {"text": "下次上网冲浪，", "startFrame": 31, "durationFrames": 30, "audioEffect": "ping"}, {"text": "我建议大家在心里备好这把", "startFrame": 61, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“防身武器”：", "startFrame": 91, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={121} />
            </Sequence>
            <Sequence from={121} durationInFrames={100}>
                <BWStepList content={[{"text": "反向搜索法：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "当你极其认同某个观点时，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 60, "durationFrames": 40, "audioEffect": null}]} anchors={[]} totalDurationFrames={100} />
            </Sequence>
            <Sequence from={221} durationInFrames={115}>
                <BWStepList content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "如果一段文字让你读完觉得“太解气了、说得太对了”，", "startFrame": 30, "durationFrames": 55, "audioEffect": ""}, {"text": "这时候一定要停下来。", "startFrame": 85, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={336} durationInFrames={104}>
                <BWCenterFocus imageSrc={staticFile("一个巨大的甜点，上面插着诱人的钩子")} enterEffect="fadeIn" content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 37, "audioEffect": "ping"}, {"text": "往往不是真相，", "startFrame": 37, "durationFrames": 30, "audioEffect": "ping"}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 67, "durationFrames": 37, "audioEffect": null}]} anchors={[]} totalDurationFrames={104} />
            </Sequence>
            <Sequence from={440} durationInFrames={90}>
                <BWStepList content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30, "audioEffect": "ping"}, {"text": "会有什么证据能说服我？”", "startFrame": 60, "durationFrames": 30, "audioEffect": null}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={530} durationInFrames={68}>
                <BWCenterFocus imageSrc={staticFile("一个人掉入深坑的简笔画")} enterEffect="breathe" content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 35, "durationFrames": 33, "audioEffect": null}]} anchors={[]} totalDurationFrames={68} />
            </Sequence>

        </AbsoluteFill>
    );
};
