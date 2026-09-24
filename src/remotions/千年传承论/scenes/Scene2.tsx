import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCognitiveShift, BWTextFocus, BWTreeDiagram } from "../../../components";

// 剖析：强权的需要
const SCENE_DURATION = 56 + 78 + 163 + 60 + 146 + 100 + 62;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={56}>
                <BWTreeDiagram content={[{"text": "第一类：", "startFrame": 0, "durationFrames": 23}, {"text": "强权的需要。", "startFrame": 22, "durationFrames": 33}]} totalDurationFrames={56} root={{ label: "糟粕的延续", showFrom: 0, children: [{ label: "强权的需要", showFrom: 1 }] }} />
            </Sequence>
            <Sequence from={56} durationInFrames={78}>
                <BWCauseChain content={[{"text": "统治者要服从，", "startFrame": 0, "durationFrames": 41}, {"text": "所以推崇儒学。", "startFrame": 40, "durationFrames": 38}]} totalDurationFrames={78} layout={"horizontal"} nodes={[{ label: "权力要服从", imageSrc: staticFile("images/千年传承论/scene_2_2_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "推崇儒学", imageSrc: staticFile("images/千年传承论/scene_2_2_img1.png"), showFrom: 1, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={134} durationInFrames={163}>
                <BWCognitiveShift content={[{"text": "君君臣臣，父父子子。", "startFrame": 0, "durationFrames": 67}, {"text": "表面教你伦理道德，", "startFrame": 66, "durationFrames": 48}, {"text": "骨子里训练思想服从。", "startFrame": 114, "durationFrames": 49}]} totalDurationFrames={163} notText={"教你伦理道德"} butText={"训练思想服从"} butSrc={staticFile("images/千年传承论/scene_2_3.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={297} durationInFrames={60}>
                <BWTextFocus content={[{"text": "传的不是德，", "startFrame": 0, "durationFrames": 31}, {"text": "是服从。", "startFrame": 30, "durationFrames": 30}]} totalDurationFrames={60} coreSentence={[{"text": "传的不是德，", "showFrom": 0, "endFrom": 0}, {"text": "是服从。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "服从", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={357} durationInFrames={146}>
                <BWCauseChain content={[{"text": "父权社会要控制，", "startFrame": 0, "durationFrames": 43}, {"text": "所以推广裹小脚。", "startFrame": 42, "durationFrames": 39}, {"text": "女性脚废，寸步难行。", "startFrame": 80, "durationFrames": 65}]} totalDurationFrames={146} layout={"horizontal"} nodes={[{ label: "父权控制", imageSrc: staticFile("images/千年传承论/scene_2_5_img0.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "裹小脚", imageSrc: staticFile("images/千年传承论/scene_2_5_img1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "寸步难行", imageSrc: staticFile("images/千年传承论/scene_2_5_img2.png"), showFrom: 2, enterEffect: "slideLeft" }]} anchors={[]} />
            </Sequence>
            <Sequence from={503} durationInFrames={100}>
                <BWCognitiveShift content={[{"text": "表面推崇审美风雅，", "startFrame": 0, "durationFrames": 49}, {"text": "骨子里剥夺行动自由。", "startFrame": 48, "durationFrames": 52}]} totalDurationFrames={100} notText={"推崇审美风雅"} butText={"剥夺行动自由"} butSrc={staticFile("images/千年传承论/scene_2_6.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={603} durationInFrames={62}>
                <BWTextFocus content={[{"text": "传的不是美，", "startFrame": 0, "durationFrames": 33}, {"text": "是控制。", "startFrame": 32, "durationFrames": 29}]} totalDurationFrames={62} coreSentence={[{"text": "传的不是美，", "showFrom": 0}, {"text": "是控制。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "控制", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/千年传承论/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
