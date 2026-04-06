import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard } from "../../../components";

// 命名·可得性启发
const SCENE_DURATION = 67 + 204;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWConceptCard content={[{"text": "学术界给这种大脑的错觉起了个名字。", "startFrame": 0, "durationFrames": 37}, {"text": "叫做可得性启发。", "startFrame": 37, "durationFrames": 30}]} totalDurationFrames={67} imageSrc={staticFile("大脑简笔画图标")} conceptName={"可得性启发"} anchors={[]} />
            </Sequence>
            <Sequence from={67} durationInFrames={204}>
                <BWCenterFocus content={[{"text": "说白了就是大脑在极度偷懒。", "startFrame": 0, "durationFrames": 30}, {"text": "我们在判断一件事情发生的概率时。", "startFrame": 30, "durationFrames": 35}, {"text": "往往不去看枯燥真实的统计数据。", "startFrame": 65, "durationFrames": 33}, {"text": "而是看这件事在脑子里想起来有多容易。", "startFrame": 98, "durationFrames": 40}, {"text": "因为空难极其惨烈且被疯狂报道。", "startFrame": 138, "durationFrames": 33}, {"text": "所以它在你的记忆库里特别鲜活。", "startFrame": 171, "durationFrames": 33}]} totalDurationFrames={204} imageSrc={staticFile("一个人在思考的抽象简笔画，周围是许多问号")} enterEffect="fadeIn" anchors={[{"text": "极度偷懒", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "统计数据", "showFrom": 2, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}, {"text": "记忆库", "showFrom": 5, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
