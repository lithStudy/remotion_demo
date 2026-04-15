import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWQuoteCitation, BWTextFocus } from "../../../components";

// 总结：放过自己
const SCENE_DURATION = 111 + 189;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={111}>
                <BWQuoteCitation content={[{"text": "原谅别人，", "startFrame": 0, "durationFrames": 24}, {"text": "其实是把自己从别人的牢笼里放出来。", "startFrame": 24, "durationFrames": 87}]} totalDurationFrames={111} quoteSource={"心理学研究"} quoteDisplayText={"原谅别人，其实是把自己从别人的牢笼里放出来。"} anchors={[]} />
            </Sequence>
            <Sequence from={111} durationInFrames={189}>
                <BWTextFocus content={[{"text": "看清了环境的枷锁，", "startFrame": 0, "durationFrames": 42}, {"text": "你才会发现，", "startFrame": 41, "durationFrames": 30}, {"text": "这个世界没有那么多坏人，", "startFrame": 70, "durationFrames": 53}, {"text": "只有被生活掐住脖子的普通人。", "startFrame": 123, "durationFrames": 66}]} totalDurationFrames={189} coreSentence={["这个世界没有那么多坏人", "只有被生活掐住脖子的普通人"]} coreSentenceAnchors={[{"coreSentenceAnchor": "没有那么多坏人", "color": "#EF4444"}, {"coreSentenceAnchor": "掐住脖子的普通人", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_基本归因错误/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
