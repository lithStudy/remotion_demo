import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWStepList, BWTextFocus } from "../../../components";

// 给出建议：对抗偏见的武器
const SCENE_DURATION = 105 + 80 + 115 + 104 + 90 + 68 + 115 + 120;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={105}>
                <BWCenterFocus content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31}, {"text": "下次上网冲浪，", "startFrame": 31, "durationFrames": 30}, {"text": "我建议大家在心里备好这几把“防身武器”：", "startFrame": 61, "durationFrames": 44}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={105} />
            </Sequence>
            <Sequence from={105} durationInFrames={80}>
                <BWStepList content={[{"text": "反向搜索法：当你极其认同某个观点时，", "startFrame": 0, "durationFrames": 40}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 40, "durationFrames": 40}]} anchors={[{"text": "反向搜索法", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} totalDurationFrames={80} />
            </Sequence>
            <Sequence from={185} durationInFrames={115}>
                <BWStepList content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30}, {"text": "如果一段文字让你读完觉得“太解气了、说得太对了”，", "startFrame": 30, "durationFrames": 55}, {"text": "这时候一定要停下来。", "startFrame": 85, "durationFrames": 30}]} anchors={[{"text": "爽感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "停下来", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={300} durationInFrames={104}>
                <BWCenterFocus content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 37}, {"text": "往往不是真相，", "startFrame": 37, "durationFrames": 30}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 67, "durationFrames": 37}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "爽感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": null}, {"text": "真相", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "确认偏误", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "诱饵", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={104} />
            </Sequence>
            <Sequence from={404} durationInFrames={90}>
                <BWStepList content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30}, {"text": "会有什么证据能说服我？”", "startFrame": 60, "durationFrames": 30}]} anchors={[{"text": "说服", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={494} durationInFrames={68}>
                <BWCenterFocus content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 35}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 35, "durationFrames": 33}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={68} />
            </Sequence>
            <Sequence from={562} durationInFrames={115}>
                <BWTextFocus content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 40}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 40, "durationFrames": 40}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 80, "durationFrames": 35}]} coreSentence={"承认自己“可能错了”并不是一种软弱"} anchors={[{"text": "可能错了", "showFrom": 1, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={115} />
            </Sequence>
            <Sequence from={677} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30}, {"text": "不被偏见裹挟，", "startFrame": 30, "durationFrames": 30}, {"text": "我们才能真正看清", "startFrame": 60, "durationFrames": 30}, {"text": "这个复杂的世界。", "startFrame": 90, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={120} />
            </Sequence>

        </AbsoluteFill>
    );
};
