import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 反转：剧毒鸡汤
const SCENE_DURATION = 67 + 161 + 151 + 153;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 30}, {"text": "幸存者偏差的“剧毒鸡汤”随处可见：", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} imageSrc={staticFile("乌云密布的天空中，一只鸡正在喝毒药")} enterEffect="slideBottom" anchors={[]} />
            </Sequence>
            <Sequence from={67} durationInFrames={161}>
                <BWMethodStack content={[{"text": "你看到某博主晒出翻倍的收益单，", "startFrame": 0, "durationFrames": 33}, {"text": "就觉得跟着他能发财。", "startFrame": 33, "durationFrames": 30}, {"text": "你没看到的是，", "startFrame": 63, "durationFrames": 30}, {"text": "他背后还有十个亏到销号的马甲，", "startFrame": 93, "durationFrames": 33}, {"text": "只是那个中奖的号恰好被你刷到了。", "startFrame": 126, "durationFrames": 35}]} totalDurationFrames={161} title={"理财陷阱"} imageSrc={staticFile("许多人围着一张收益表，表情贪婪")} notes={[{"text": "收益可观？", "showFrom": 0}, {"text": "亏的没让你看到", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={228} durationInFrames={151}>
                <BWMethodStack content={[{"text": "某个百岁老人每天抽烟喝酒，", "startFrame": 0, "durationFrames": 30}, {"text": "大家就觉得养生没用。", "startFrame": 30, "durationFrames": 30}, {"text": "其实那只是因为他基因逆天，", "startFrame": 60, "durationFrames": 30}, {"text": "而那些学他抽烟喝酒的人，", "startFrame": 90, "durationFrames": 30}, {"text": "大多没活到能接受采访的年纪。", "startFrame": 120, "durationFrames": 31}]} totalDurationFrames={151} title={"长寿悖论"} imageSrc={staticFile("一位面带微笑的百岁老人正在抽烟，旁边放着一杯酒")} notes={[{"text": "抽烟喝酒不养生？", "showFrom": 0}, {"text": "个别的基因逆天", "showFrom": 2}, {"text": "大多没活到能接受采访的年纪", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={379} durationInFrames={153}>
                <BWMethodStack content={[{"text": "公司里有个老员工从不加班也能升职，", "startFrame": 0, "durationFrames": 37}, {"text": "你觉得也能效仿。", "startFrame": 37, "durationFrames": 30}, {"text": "却不知道他可能是某个大客户的亲侄子，", "startFrame": 67, "durationFrames": 40}, {"text": "或者是掌握了某种你根本无法复制的核心资源。", "startFrame": 107, "durationFrames": 46}]} totalDurationFrames={153} title={"职场特例陷阱"} imageSrc={staticFile("办公室里，一个戴着墨镜的人悠闲地坐在办公椅上，周围的人忙碌地工作")} notes={[{"text": "不努力也能升职？", "showFrom": 0}, {"text": "其他你不知道的因素在起作用", "showFrom": 2}]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
