import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCognitiveShift, BWTextFocus } from "../../../components";

// 结论·真正的强国
const SCENE_DURATION = 87 + 196 + 232 + 135;

export const calculateScene10Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene10: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={87}>
                <BWTextFocus content={[{"text": "所有砸特斯拉的人，", "startFrame": 0, "durationFrames": 39}, {"text": "没有一个是真正爱国的。", "startFrame": 38, "durationFrames": 48}]} totalDurationFrames={87} coreSentence={[{"text": "所有砸特斯拉的人，", "showFrom": 0}, {"text": "没有一个是真正爱国的。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "没有一个是真正爱国的", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={87} durationInFrames={196}>
                <BWTextFocus content={[{"text": "你要真爱国，就该明白——", "startFrame": 0, "durationFrames": 57}, {"text": "抵制特斯拉，", "startFrame": 56, "durationFrames": 34}, {"text": "就是抵制同胞造的车，", "startFrame": 90, "durationFrames": 52}, {"text": "就是砸掉中国人的饭碗。", "startFrame": 141, "durationFrames": 54}]} totalDurationFrames={196} coreSentence={[{"text": "抵制特斯拉，", "showFrom": 1}, {"text": "就是抵制同胞造的车，", "showFrom": 2}, {"text": "就是砸掉中国人的饭碗。", "showFrom": 3}]} coreSentenceAnchors={[{"coreSentenceAnchor": "同胞造的车", "color": "#EF4444"}, {"coreSentenceAnchor": "中国人的饭碗", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={283} durationInFrames={232}>
                <BWCognitiveShift content={[{"text": "真正的强国，", "startFrame": 0, "durationFrames": 34}, {"text": "不是靠砸别人的东西来证明自己强。", "startFrame": 33, "durationFrames": 76}, {"text": "而是让全世界最优秀的企业，", "startFrame": 109, "durationFrames": 61}, {"text": "都争着来你的土地上建厂。", "startFrame": 169, "durationFrames": 63}]} totalDurationFrames={232} notText={"靠砸别人证明自己强"} butText={"让全世界优秀企业争着来建厂"} butSrc={staticFile("images/抵制特斯拉的伪爱国/scene_10_3.png")} notContentIndex={1} butContentIndex={3} />
            </Sequence>
            <Sequence from={515} durationInFrames={135}>
                <BWTextFocus content={[{"text": "尊重规律，是最大的清醒。", "startFrame": 0, "durationFrames": 63}, {"text": "拥抱竞争，是最大的自信。", "startFrame": 62, "durationFrames": 72}]} totalDurationFrames={135} coreSentence={[{"text": "尊重规律，是最大的清醒。", "showFrom": 0}, {"text": "拥抱竞争，是最大的自信。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "最大的清醒", "color": "#EF4444"}, {"coreSentenceAnchor": "最大的自信", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/抵制特斯拉的伪爱国/scene_10/scene_10.mp3")} />
        </AbsoluteFill>
    );
};
