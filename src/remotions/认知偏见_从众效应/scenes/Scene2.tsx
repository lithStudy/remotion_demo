import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 命名：从众效应
const SCENE_DURATION = 295 + 271 + 130 + 193;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={295}>
                <BWConceptCard content={[{"text": "这在心理学上叫从众效应。", "startFrame": 0, "durationFrames": 77}, {"text": "简单来说，", "startFrame": 76, "durationFrames": 26}, {"text": " 就是主动放弃动口动脑。", "startFrame": 101, "durationFrames": 58}, {"text": "把人生的决策和判断权，", "startFrame": 159, "durationFrames": 57}, {"text": " 免费打包外包给一群陌生人。", "startFrame": 216, "durationFrames": 79}]} totalDurationFrames={295} imageSrc={staticFile("images/认知偏见_从众效应/scene_2_1.png")} conceptName={"从众效应"} anchors={[]} />
            </Sequence>
            <Sequence from={295} durationInFrames={271}>
                <BWCenterFocus content={[{"text": "当个体身处狂热的群体中，", "startFrame": 0, "durationFrames": 59}, {"text": " 为了不显得格格不入，", "startFrame": 58, "durationFrames": 41}, {"text": " 或逃避独自决策的巨大压力，", "startFrame": 99, "durationFrames": 67}, {"text": " 我们会阉割真实的自我，", "startFrame": 165, "durationFrames": 47}, {"text": " 去毫无底线地迎合多数人。", "startFrame": 212, "durationFrames": 58}]} totalDurationFrames={271} imageSrc={staticFile("images/认知偏见_从众效应/scene_2_4.png")} enterEffect="fadeIn" anchors={[{"text": "从众", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "阉割自我", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={566} durationInFrames={130}>
                <BWCenterFocus content={[{"text": "在算法统治的互联网时代，", "startFrame": 0, "durationFrames": 60}, {"text": " 这种效应变得更加致命。", "startFrame": 60, "durationFrames": 70}]} totalDurationFrames={130} imageSrc={staticFile("images/认知偏见_从众效应/scene_2_7.png")} enterEffect="fadeIn" anchors={[{"text": "算法统治", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "致命效应", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={696} durationInFrames={193}>
                <BWCenterFocus content={[{"text": "屏幕上几百万的点赞和转发，", "startFrame": 0, "durationFrames": 72}, {"text": " 就像是无声抽打的皮鞭。", "startFrame": 72, "durationFrames": 58}, {"text": "逼着你接受荒谬的共识。", "startFrame": 129, "durationFrames": 63}]} totalDurationFrames={193} imageSrc={staticFile("images/认知偏见_从众效应/scene_2_8.png")} enterEffect="fadeIn" anchors={[{"text": "荒谬的共识", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_从众效应/scene_2/scene_2.mp3")} />
        </AbsoluteFill>
    );
};
