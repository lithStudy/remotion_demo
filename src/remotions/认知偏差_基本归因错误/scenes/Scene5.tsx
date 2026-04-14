import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWQuoteCitation } from "../../../components";

// 总结：放过自己
const SCENE_DURATION = 67 + 121;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWQuoteCitation content={[{"text": "原谅别人，", "startFrame": 0, "durationFrames": 30}, {"text": "其实是把自己从别人的牢笼里放出来。", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} quoteSource={"一句台词"} quoteDisplayText={"原谅别人，其实是把自己从别人的牢笼里放出来。"} anchors={[]} />
            </Sequence>
            <Sequence from={67} durationInFrames={121}>
                <BWCenterFocus content={[{"text": "看清了环境的枷锁，", "startFrame": 0, "durationFrames": 30}, {"text": "你才会发现，", "startFrame": 30, "durationFrames": 30}, {"text": "这个世界没有那么多坏人，", "startFrame": 60, "durationFrames": 30}, {"text": "只有被生活掐住脖子的普通人。", "startFrame": 90, "durationFrames": 31}]} totalDurationFrames={121} imageSrc={staticFile("一个人被锁链束缚，然后挣脱锁链的场景")} enterEffect="fadeIn" anchors={[{"text": "枷锁", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "普通人", "showFrom": 3, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
