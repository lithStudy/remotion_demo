import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard } from "../../../components";

// 剖析：权威崇拜的认知偏差
const SCENE_DURATION = 183 + 131 + 278 + 147 + 293;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={183}>
                <BWCenterFocus content={[{"text": "问题就在这儿。", "startFrame": 0, "durationFrames": 33}, {"text": "我们以为自己是在相信专业，", "startFrame": 32, "durationFrames": 62}, {"text": "其实很多时候，", "startFrame": 93, "durationFrames": 32}, {"text": "我们只是被权威感拿下了。", "startFrame": 125, "durationFrames": 57}]} totalDurationFrames={183} imageSrc={staticFile("images/认知偏见_光环效应/scene_2_1.png")} enterEffect="fadeIn" anchors={[{"text": "光环效应", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={183} durationInFrames={131}>
                <BWConceptCard content={[{"text": "这背后，", "startFrame": 0, "durationFrames": 29}, {"text": "就是一个很经典的认知偏差，", "startFrame": 28, "durationFrames": 62}, {"text": "叫光环效应。", "startFrame": 89, "durationFrames": 42}]} totalDurationFrames={131} imageSrc={staticFile("images/认知偏见_光环效应/scene_2_2.png")} conceptName={"光环效应"} anchors={[]} />
            </Sequence>
            <Sequence from={314} durationInFrames={278}>
                <BWCenterFocus content={[{"text": "就是一个人只要有一个特别亮眼的点，", "startFrame": 0, "durationFrames": 78}, {"text": "比如头衔响、", "startFrame": 77, "durationFrames": 53}, {"text": "名气大、", "startFrame": 129, "durationFrames": 22}, {"text": "身份看起来很专业，", "startFrame": 151, "durationFrames": 42}, {"text": "我们的大脑就会自动给他套上一层光环。", "startFrame": 193, "durationFrames": 84}]} totalDurationFrames={278} imageSrc={staticFile("images/认知偏见_光环效应/scene_2_3.png")} enterEffect="fadeIn" anchors={[{"text": "光环效应", "showFrom": 4, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={592} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "然后误以为，", "startFrame": 0, "durationFrames": 28}, {"text": "他在别的方面也同样可信，", "startFrame": 27, "durationFrames": 63}, {"text": "同样专业，", "startFrame": 89, "durationFrames": 25}, {"text": "同样不会错。", "startFrame": 113, "durationFrames": 33}]} totalDurationFrames={147} imageSrc={staticFile("images/认知偏见_光环效应/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "误以为", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "可信", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "专业", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={739} durationInFrames={293}>
                <BWCognitiveShift content={[{"text": "所以我们才会觉得，", "startFrame": 0, "durationFrames": 43}, {"text": "有头衔的人，", "startFrame": 42, "durationFrames": 35}, {"text": "说的话更接近真相。", "startFrame": 77, "durationFrames": 54}, {"text": "可现实是，", "startFrame": 130, "durationFrames": 29}, {"text": "头衔不等于全能，", "startFrame": 159, "durationFrames": 47}, {"text": "权威不等于正确，", "startFrame": 206, "durationFrames": 43}, {"text": "背书也不等于证据。", "startFrame": 248, "durationFrames": 44}]} totalDurationFrames={293} notText={"有头衔的人，说的话更接近真相"} butText={"头衔不等于全能"} butSrc={staticFile("images/认知偏见_光环效应/scene_2_5.png")} notContentIndex={1} butContentIndex={4} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_光环效应/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
