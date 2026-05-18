import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus, BWCognitiveShift, BWTextFocus } from "../../../components";

// 召唤：真正的爱国
const SCENE_DURATION = 90 + 223 + 125 + 120;

export const calculateScene11Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene11: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 30}, {"text": "所有砸特斯拉的人，", "startFrame": 30, "durationFrames": 30}, {"text": "没有一个是真正爱国的。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("一群人争吵的画面")} enterEffect="fadeIn" anchors={[{"text": "爱国", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={90} durationInFrames={223}>
                <BWCauseChain content={[{"text": "你要真爱国，", "startFrame": 0, "durationFrames": 30}, {"text": "就该明白—", "startFrame": 30, "durationFrames": 30}, {"text": "—", "startFrame": 60, "durationFrames": 30}, {"text": "\n抵制特斯拉，", "startFrame": 90, "durationFrames": 30}, {"text": "就是抵制同胞造的车，", "startFrame": 120, "durationFrames": 30}, {"text": "就是抵制中国人的血汗和饭碗，", "startFrame": 150, "durationFrames": 31}, {"text": "就是赶走那条让整个产业保持饥饿的鲶鱼。", "startFrame": 181, "durationFrames": 42}]} totalDurationFrames={223} layout={"horizontal"} nodes={[{ label: "爱国？", imageSrc: staticFile("一个人举着国旗的简笔画"), showFrom: 0, enterEffect: "fadeIn" }, { label: "明白！", imageSrc: staticFile("一个灯泡亮的简笔画"), showFrom: 1, enterEffect: "fadeIn" }, { label: "抵制", imageSrc: staticFile("一个禁止标志覆盖在汽车上的简笔画"), showFrom: 3, enterEffect: "fadeIn" }, { label: "损人", imageSrc: staticFile("一个人踢倒另一个人饭碗的简笔画"), showFrom: 5, enterEffect: "fadeIn" }]} anchors={[]} />
            </Sequence>
            <Sequence from={313} durationInFrames={125}>
                <BWCognitiveShift content={[{"text": "真正的强国，", "startFrame": 0, "durationFrames": 30}, {"text": "不是靠砸别人的东西来证明自己强。", "startFrame": 30, "durationFrames": 35}, {"text": "\n而是让全世界最优秀的企业，", "startFrame": 65, "durationFrames": 30}, {"text": "都争着来你的土地上建厂。", "startFrame": 95, "durationFrames": 30}]} totalDurationFrames={125} notText={"靠砸别人"} butText={"来土地上建厂"} butSrc={staticFile("科技公司在土地上建厂的繁荣景象")} notContentIndex={1} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={438} durationInFrames={120}>
                <BWTextFocus content={[{"text": "尊重规律，", "startFrame": 0, "durationFrames": 30}, {"text": "是最大的清醒。", "startFrame": 30, "durationFrames": 30}, {"text": "拥抱竞争，", "startFrame": 60, "durationFrames": 30}, {"text": "是最大的自信。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} coreSentence={[{"text": "尊重规律，", "showFrom": 0}, {"text": "是最大的清醒。", "showFrom": 1}, {"text": "拥抱竞争，", "showFrom": 2}, {"text": "是最大的自信。", "showFrom": 3}]} coreSentenceAnchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
