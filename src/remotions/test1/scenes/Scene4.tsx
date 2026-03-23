import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWDosAndDonts, BWMagnifyingGlass, BWStepList, BWTextFocus } from "../../../components";

// 解决方案：对抗偏见的防身武器
const SCENE_DURATION = 88 + 80 + 115 + 104 + 90 + 68 + 115 + 90;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={88}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31, "anchor": "算法傀儡", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "下次上网冲浪，我建议大家在心里备好这把“防身武器”：", "startFrame": 31, "durationFrames": 57, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={88} />
            </Sequence>
            <Sequence from={88} durationInFrames={80}>
                <BWStepList content={[{"text": "反向搜索法：当你极其认同某个观点时，", "startFrame": 0, "durationFrames": 40, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 40, "durationFrames": 40, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={80} />
            </Sequence>
            <Sequence from={168} durationInFrames={115}>
                <BWDosAndDonts leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} dontLabel={"❌ 别这样"} doLabel={"✅ 正确做法"} content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "如果一段文字让你读完觉得“太解气了、说得太对了”，", "startFrame": 30, "durationFrames": 55, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "这时候一定要停下来。", "startFrame": 85, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={283} durationInFrames={104}>
                <BWMagnifyingGlass content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 37, "anchor": "爽感", "anchorColor": "#EF4444", "anchorAnim": null, "audioEffect": "ping"}, {"text": "往往不是真相，", "startFrame": 37, "durationFrames": 30, "anchor": "真相", "anchorColor": "#EF4444", "anchorAnim": null, "audioEffect": "ping"}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 67, "durationFrames": 37, "anchor": "确认偏误", "anchorColor": "#EF4444", "anchorAnim": null, "audioEffect": "ping"}]} totalDurationFrames={104} />
            </Sequence>
            <Sequence from={387} durationInFrames={90}>
                <BWStepList content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "会有什么证据能说服我？”", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={477} durationInFrames={68}>
                <BWCognitiveShift notText={"真相"} butText={"偏见的陷阱"} content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 35, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 35, "durationFrames": 33, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={68} />
            </Sequence>
            <Sequence from={545} durationInFrames={115}>
                <BWTextFocus content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 40, "durationFrames": 40, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 80, "durationFrames": 35, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={660} durationInFrames={90}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30, "anchor": "大脑", "anchorColor": "#000000", "anchorAnim": "highlight", "audioEffect": "ping"}, {"text": "不被偏见裹挟，我们才能", "startFrame": 30, "durationFrames": 30, "anchor": "偏见", "anchorColor": "#EF4444", "anchorAnim": "popIn", "audioEffect": "impact_thud"}, {"text": "真正看清这个复杂的世界。", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "anchorAnim": null, "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
