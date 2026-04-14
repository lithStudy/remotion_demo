import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWCenterFocus } from "../../../components";

// 反转：剧毒鸡汤
const SCENE_DURATION = 103 + 309 + 298 + 302;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 23}, {"text": "幸存者偏差的“剧毒鸡汤”随处可见：", "startFrame": 22, "durationFrames": 80}]} totalDurationFrames={103} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_3_1.png")} enterEffect="slideBottom" />
            </Sequence>
            <Sequence from={103} durationInFrames={309}>
                <BWCaseBreakdown content={[{"text": "你看到某博主晒出翻倍的收益单，", "startFrame": 0, "durationFrames": 79}, {"text": "就觉得跟着他能发财。", "startFrame": 78, "durationFrames": 60}, {"text": "你没看到的是，", "startFrame": 138, "durationFrames": 28}, {"text": "他背后还有十个亏到销号的马甲，", "startFrame": 165, "durationFrames": 67}, {"text": "只是那个中奖的号恰好被你刷到了。", "startFrame": 232, "durationFrames": 77}]} totalDurationFrames={309} title={"理财陷阱"} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_3_2.png")} phases={[{"phaseLabel": "收益可观？", "showFrom": 0}, {"phaseLabel": "亏的没让你看到", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={412} durationInFrames={298}>
                <BWCaseBreakdown content={[{"text": "某个百岁老人每天抽烟喝酒，", "startFrame": 0, "durationFrames": 68}, {"text": "大家就觉得养生没用。", "startFrame": 67, "durationFrames": 43}, {"text": "其实那只是因为他基因逆天，", "startFrame": 109, "durationFrames": 59}, {"text": "而那些学他抽烟喝酒的人，", "startFrame": 168, "durationFrames": 57}, {"text": "大多没活到能接受采访的年纪。", "startFrame": 225, "durationFrames": 72}]} totalDurationFrames={298} title={"长寿悖论"} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_3_3.png")} phases={[{"phaseLabel": "抽烟喝酒不养生？", "showFrom": 0}, {"phaseLabel": "个别的基因逆天", "showFrom": 2}, {"phaseLabel": "大多没活到能接受采访的年纪", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={710} durationInFrames={302}>
                <BWCaseBreakdown content={[{"text": "公司里有个老员工从不加班也能升职，", "startFrame": 0, "durationFrames": 77}, {"text": "你觉得也能效仿。", "startFrame": 76, "durationFrames": 41}, {"text": "却不知道他可能是某个大客户的亲侄子，", "startFrame": 116, "durationFrames": 1}, {"text": "或者是掌握了某种你根本无法复制的核心资源。", "startFrame": 0, "durationFrames": 761}]} totalDurationFrames={302} title={"职场特例陷阱"} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_3_4.png")} phases={[{"phaseLabel": "不努力也能升职？", "showFrom": 0}, {"phaseLabel": "其他你不知道的因素在起作用", "showFrom": 2}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_幸存者偏差/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
