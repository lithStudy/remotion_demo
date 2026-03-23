import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 解决方案：防身武器
const SCENE_DURATION = 186 + 172 + 200 + 191 + 135 + 144;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={186}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_1.png")} enterEffect="breathe" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 65, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "下次上网冲浪，", "startFrame": 64, "durationFrames": 33, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "我建议大家在心里备好这把“防身武器”：", "startFrame": 97, "durationFrames": 89, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={186} />
            </Sequence>
            <Sequence from={186} durationInFrames={172}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_2.png")} enterEffect="breathe" content={[{"text": "反向搜索法：", "startFrame": 0, "durationFrames": 28, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "当你极其认同某个观点时，", "startFrame": 27, "durationFrames": 56, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "强迫自己去搜一下", "startFrame": 83, "durationFrames": 42, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "反对这个观点的理由。", "startFrame": 125, "durationFrames": 47, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={172} />
            </Sequence>
            <Sequence from={358} durationInFrames={200}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_3.png")} enterEffect="breathe" content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 33, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "如果一段文字让你读完觉得", "startFrame": 32, "durationFrames": 61, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“太解气了、说得太对了”，", "startFrame": 92, "durationFrames": 61, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "这时候一定要停下来。", "startFrame": 153, "durationFrames": 47, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={200} />
            </Sequence>
            <Sequence from={558} durationInFrames={191}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_4.png")} enterEffect="breathe" content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 79, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "往往不是真相，", "startFrame": 78, "durationFrames": 33, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 111, "durationFrames": 79, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={191} />
            </Sequence>
            <Sequence from={749} durationInFrames={135}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_5.png")} enterEffect="breathe" content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 38, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“如果我是错的，", "startFrame": 37, "durationFrames": 38, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "会有什么证据能说服我？”", "startFrame": 74, "durationFrames": 61, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={135} />
            </Sequence>
            <Sequence from={884} durationInFrames={144}>
                <BWCenterFocus imageSrc={staticFile("images/test/4_6.png")} enterEffect="breathe" content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 75, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 74, "durationFrames": 70, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={144} />
            </Sequence>
            <Audio src={staticFile("/audio/test/4/4.mp3")} />
        </AbsoluteFill>
    );
};
