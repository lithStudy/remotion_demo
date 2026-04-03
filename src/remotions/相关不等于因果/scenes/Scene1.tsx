import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 喝药痊愈的错觉
const SCENE_DURATION = 160 + 150 + 74 + 105 + 180 + 72;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={160}>
                <BWCenterFocus content={[{"text": "你捏着鼻子灌下一大碗苦涩发黑的汤药，", "startFrame": 0, "durationFrames": 40}, {"text": "忍受着胃里的翻江倒海。", "startFrame": 40, "durationFrames": 30}, {"text": "三天后病终于好了，", "startFrame": 70, "durationFrames": 30}, {"text": "你立刻在朋友圈发了条长文，", "startFrame": 100, "durationFrames": 30}, {"text": "感慨老祖宗的智慧就是牛", "startFrame": 130, "durationFrames": 30}]} totalDurationFrames={160} imageSrc={staticFile("一个人捏着鼻子喝中药汤，表情痛苦")} enterEffect="fadeIn" anchors={[{"text": "老祖宗的智慧", "showFrom": 4, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={160} durationInFrames={150}>
                <BWCenterFocus content={[{"text": "但你根本看不见，", "startFrame": 0, "durationFrames": 30}, {"text": "在你昏睡发汗的时候，", "startFrame": 30, "durationFrames": 30}, {"text": "你体内那套强大的免疫系统，", "startFrame": 60, "durationFrames": 30}, {"text": "是如何不眠不休地疯狂搏杀，", "startFrame": 90, "durationFrames": 30}, {"text": "才帮你夺回了健康的阵地。", "startFrame": 120, "durationFrames": 30}]} totalDurationFrames={150} imageSrc={staticFile("强大的免疫系统在人体内战斗的卡通场景")} enterEffect="fadeIn" anchors={[{"text": "免疫系统", "showFrom": 2, "color": "#000000", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={310} durationInFrames={74}>
                <BWTextFocus content={[{"text": "我们所有人，", "startFrame": 0, "durationFrames": 30}, {"text": "都极其容易掉进这种看图说话的因果错觉里。", "startFrame": 30, "durationFrames": 44}]} totalDurationFrames={74} coreSentence={"我们容易掉进看图说话的错觉里"} coreSentenceAnchors={[{"coreSentenceAnchor": "看图说话", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={384} durationInFrames={105}>
                <BWCognitiveShift content={[{"text": "千万不要觉得这是因为我们缺乏常识，", "startFrame": 0, "durationFrames": 37}, {"text": "这其实是人类大脑在几百万年进化中，", "startFrame": 37, "durationFrames": 37}, {"text": "死死烙印在基因里的补丁缺陷。", "startFrame": 74, "durationFrames": 31}]} totalDurationFrames={105} notText={"缺乏常识"} butText={"基因的补丁缺陷"} butSrc={staticFile("电路板上缠绕着基因链条")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={489} durationInFrames={180}>
                <BWCenterFocus content={[{"text": "在远古时代，", "startFrame": 0, "durationFrames": 30}, {"text": "草丛一动哪怕只是一阵风，", "startFrame": 30, "durationFrames": 30}, {"text": "我们的大脑也被设定为必须马上联想到老虎，", "startFrame": 60, "durationFrames": 44}, {"text": "因为只有强行把先后发生的事情建立因果联系，", "startFrame": 104, "durationFrames": 46}, {"text": "我们的祖先才能保命。", "startFrame": 150, "durationFrames": 30}]} totalDurationFrames={180} imageSrc={staticFile("远古时代草丛随风摇曳，一只老虎隐藏其中")} enterEffect="fadeIn" anchors={[{"text": "远古时代", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "草丛一动", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "联想老虎", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}, {"text": "保命", "showFrom": 4, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={669} durationInFrames={72}>
                <BWTextFocus content={[{"text": "但在复杂的现代社会，", "startFrame": 0, "durationFrames": 30}, {"text": "这种生存本能反而成了被别人收割的镰刀。", "startFrame": 30, "durationFrames": 42}]} totalDurationFrames={72} coreSentence={"生存本能成了被收割的镰刀"} coreSentenceAnchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
