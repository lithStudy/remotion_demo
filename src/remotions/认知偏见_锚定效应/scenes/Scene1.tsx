import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 案例引入
const SCENE_DURATION = 450 + 238 + 136 + 245;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={450}>
                <BWCenterFocus content={[{"text": "看着直播间里被划掉的999元，", "startFrame": 0, "durationFrames": 80}, {"text": "再看看旁边闪烁的99元限时秒杀，", "startFrame": 79, "durationFrames": 83}, {"text": "你毫不犹豫地按下了付款按钮，", "startFrame": 162, "durationFrames": 64}, {"text": "心里激动地想着今天真是赚翻了。", "startFrame": 225, "durationFrames": 94}, {"text": "这种捡到绝世大便宜的狂喜，", "startFrame": 319, "durationFrames": 72}, {"text": "是不是让你觉得特别有成就感？", "startFrame": 391, "durationFrames": 58}]} totalDurationFrames={450} imageSrc={staticFile("images/认知偏见_锚定效应/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "限时秒杀", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "赚翻了", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={450} durationInFrames={238}>
                <BWCenterFocus content={[{"text": "我们总以为自己是个精明的消费者，", "startFrame": 0, "durationFrames": 68}, {"text": "能精准捕捉到商家的每一次“大放血”，", "startFrame": 67, "durationFrames": 88}, {"text": "但其实我们早就掉进了资本的陷阱。", "startFrame": 154, "durationFrames": 83}]} totalDurationFrames={238} imageSrc={staticFile("images/认知偏见_锚定效应/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={688} durationInFrames={136}>
                <BWCognitiveShift content={[{"text": "这不是因为我们贪图小便宜，", "startFrame": 0, "durationFrames": 56}, {"text": "而是大脑处理信息时存在致命弱点。", "startFrame": 55, "durationFrames": 81}]} totalDurationFrames={136} notText={"贪图小便宜"} butText={"致命弱点"} butSrc={staticFile("images/认知偏见_锚定效应/scene_1_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={824} durationInFrames={245}>
                <BWCenterFocus content={[{"text": "资本家早就把人性研究透彻了，", "startFrame": 0, "durationFrames": 70}, {"text": "他们精准地在你的潜意识里植入一根“针”，", "startFrame": 69, "durationFrames": 89}, {"text": "让你心甘情愿地掏空钱包还感恩戴德。", "startFrame": 158, "durationFrames": 87}]} totalDurationFrames={245} imageSrc={staticFile("images/认知偏见_锚定效应/scene_1_4.png")} enterEffect="slideBottom" anchors={[{"text": "潜意识", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "掏空钱包", "showFrom": 2, "color": "#EF4444", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
