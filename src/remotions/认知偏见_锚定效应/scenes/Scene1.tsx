import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 引入：锚定效应与占便宜心理
const SCENE_DURATION = 460 + 223 + 154 + 248;

export const calculateScene1Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene1: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={460}>
                <BWCenterFocus content={[{"text": "看着直播间里被划掉的999元，", "startFrame": 0, "durationFrames": 84}, {"text": "再看看旁边闪烁的99元限时秒杀，", "startFrame": 84, "durationFrames": 89}, {"text": "你毫不犹豫地按下了付款按钮，", "startFrame": 172, "durationFrames": 65}, {"text": "心里激动地想着今天真是赚翻了。", "startFrame": 236, "durationFrames": 103}, {"text": "这种捡到绝世大便宜的狂喜，", "startFrame": 339, "durationFrames": 67}, {"text": "是不是让你觉得特别有成就感？", "startFrame": 405, "durationFrames": 54}]} totalDurationFrames={460} imageSrc={staticFile("images/认知偏见_锚定效应/scene_1_1.png")} enterEffect="fadeIn" anchors={[{"text": "限时秒杀", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}, {"text": "赚翻了", "showFrom": 3, "color": "#EF4444", "anim": "highlight", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={460} durationInFrames={223}>
                <BWCenterFocus content={[{"text": "我们总以为自己是个精明的消费者，", "startFrame": 0, "durationFrames": 65}, {"text": "能精准捕捉到商家的每一次“大放血”，", "startFrame": 64, "durationFrames": 82}, {"text": "但其实我们早就掉进了资本的陷阱。", "startFrame": 146, "durationFrames": 77}]} totalDurationFrames={223} imageSrc={staticFile("images/认知偏见_锚定效应/scene_1_2.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>
            <Sequence from={683} durationInFrames={154}>
                <BWCognitiveShift content={[{"text": "这不是因为我们贪图小便宜，", "startFrame": 0, "durationFrames": 57}, {"text": "而是大脑处理信息时存在致命弱点。", "startFrame": 56, "durationFrames": 97}]} totalDurationFrames={154} notText={"贪图小便宜"} butText={"致命弱点"} butSrc={staticFile("images/认知偏见_锚定效应/scene_1_3.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={837} durationInFrames={248}>
                <BWCenterFocus content={[{"text": "资本家早就把人性研究透彻了，", "startFrame": 0, "durationFrames": 77}, {"text": "他们精准地在你的潜意识里植入一根“针”，", "startFrame": 76, "durationFrames": 79}, {"text": "让你心甘情愿地掏空钱包还感恩戴德。", "startFrame": 154, "durationFrames": 93}]} totalDurationFrames={248} imageSrc={staticFile("images/认知偏见_锚定效应/scene_1_4.png")} enterEffect="slideBottom" anchors={[{"text": "潜意识", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "掏空钱包", "showFrom": 2, "color": "#EF4444", "anim": "slideUp", "audioEffect": "woosh"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_锚定效应/scene_1/scene_1.mp3")} />
        </AbsoluteFill>
    );
};
