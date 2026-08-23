import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWChecklistReveal } from "../../../components";

// 召唤：情怀三问
const SCENE_DURATION = 166 + 743;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={166}>
                <BWCenterFocus content={[{"text": "此外，", "startFrame": 0, "durationFrames": 22}, {"text": "作为一个消费者。", "startFrame": 21, "durationFrames": 39}, {"text": "当你要为情怀买单时，", "startFrame": 60, "durationFrames": 54}, {"text": "你还应该要问自己三个问题。", "startFrame": 113, "durationFrames": 52}]} totalDurationFrames={166} imageSrc={staticFile("images/华为高价论/scene_5_1.png")} enterEffect="fadeIn" anchors={[{"text": "三个问题", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={166} durationInFrames={743}>
                <BWChecklistReveal content={[{"text": "第一，", "startFrame": 0, "durationFrames": 19}, {"text": "你为了情怀多花的钱，", "startFrame": 18, "durationFrames": 53}, {"text": "是真的一分不少花在了国产的研发上，", "startFrame": 70, "durationFrames": 87}, {"text": "还是变成了少数人的利润、", "startFrame": 157, "durationFrames": 56}, {"text": "奖金和加拿大的别墅？", "startFrame": 212, "durationFrames": 54}, {"text": "第二，", "startFrame": 266, "durationFrames": 16}, {"text": "你为了情怀多花的钱，", "startFrame": 281, "durationFrames": 48}, {"text": "是推动了底层技术突破，", "startFrame": 329, "durationFrames": 52}, {"text": "还是只是支付了绕过封锁的中间商成本？", "startFrame": 380, "durationFrames": 88}, {"text": "第三，", "startFrame": 468, "durationFrames": 18}, {"text": "如果一个产品不靠性能、", "startFrame": 485, "durationFrames": 51}, {"text": "不靠价格、", "startFrame": 536, "durationFrames": 27}, {"text": "不靠体验，", "startFrame": 562, "durationFrames": 27}, {"text": "而主要靠情绪动员才能卖出去，", "startFrame": 588, "durationFrames": 63}, {"text": "那它到底是在推动国产进步，", "startFrame": 650, "durationFrames": 57}, {"text": "还是在奖励落后？", "startFrame": 707, "durationFrames": 36}]} totalDurationFrames={743} title={"情怀三问"} rows={[{"text": "用于研发还是别墅？", "showFrom": 0}, {"text": "用于突破还是中间商？", "showFrom": 5}, {"text": "用于推动进步还是奖励落后？", "showFrom": 9}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为高价论/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
