import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 反转：剧毒鸡汤
const SCENE_DURATION = 67 + 191 + 181 + 183;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 30}, {"text": "幸存者偏差的“剧毒鸡汤”随处可见：", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} imageSrc={staticFile("乌云密布的天空中，一只鸡正在喝毒药")} enterEffect="slideBottom" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={67} durationInFrames={191}>
                <BWMethodStack content={[{"text": "理财圈的“大神”：", "startFrame": 0, "durationFrames": 30}, {"text": "你看到某博主晒出翻倍的收益单，", "startFrame": 30, "durationFrames": 33}, {"text": "就觉得跟着他能发财。", "startFrame": 63, "durationFrames": 30}, {"text": "你没看到的是，", "startFrame": 93, "durationFrames": 30}, {"text": "他背后还有十个亏到销号的马甲，", "startFrame": 123, "durationFrames": 33}, {"text": "只是那个中奖的号恰好被你刷到了。", "startFrame": 156, "durationFrames": 35}]} totalDurationFrames={191} title={"理财陷阱"} imageSrc={staticFile("许多人围着一张收益表，表情贪婪")} notes={[{"text": "幸存者偏差", "showFrom": 0}, {"text": "只看贼吃肉，不见贼挨打", "showFrom": 3}, {"text": "信息茧房", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={258} durationInFrames={181}>
                <BWMethodStack content={[{"text": "长寿老人的“秘诀”：", "startFrame": 0, "durationFrames": 30}, {"text": "某个百岁老人每天抽烟喝酒，", "startFrame": 30, "durationFrames": 30}, {"text": "大家就觉得养生没用。", "startFrame": 60, "durationFrames": 30}, {"text": "其实那只是因为他基因逆天，", "startFrame": 90, "durationFrames": 30}, {"text": "而那些学他抽烟喝酒的人，", "startFrame": 120, "durationFrames": 30}, {"text": "大多没活到能接受采访的年纪。", "startFrame": 150, "durationFrames": 31}]} totalDurationFrames={181} title={"长寿悖论"} imageSrc={staticFile("一位面带微笑的百岁老人正在抽烟，旁边放着一杯酒")} notes={[{"text": "幸存者偏差", "showFrom": 2}, {"text": "忽略沉默的大多数", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={439} durationInFrames={183}>
                <BWMethodStack content={[{"text": "职场上的“特例”：", "startFrame": 0, "durationFrames": 30}, {"text": "公司里有个老员工从不加班也能升职，", "startFrame": 30, "durationFrames": 37}, {"text": "你觉得也能效仿。", "startFrame": 67, "durationFrames": 30}, {"text": "却不知道他可能是某个大客户的亲侄子，", "startFrame": 97, "durationFrames": 40}, {"text": "或者是掌握了某种你根本无法复制的核心资源。", "startFrame": 137, "durationFrames": 46}]} totalDurationFrames={183} title={"职场特例陷阱"} imageSrc={staticFile("办公室里，一个戴着墨镜的人悠闲地坐在办公椅上，周围的人忙碌地工作")} notes={[{"text": "升职不一定靠努力", "showFrom": 1}, {"text": "资源才是关键", "showFrom": 4}]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
