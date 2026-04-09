import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift } from "../../../components";

// 举例：剧毒鸡汤
const SCENE_DURATION = 67 + 93 + 98 + 90 + 91 + 97 + 86;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={67}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 30}, {"text": "幸存者偏差的“剧毒鸡汤”随处可见：", "startFrame": 30, "durationFrames": 37}]} totalDurationFrames={67} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={67} durationInFrames={93}>
                <BWCenterFocus content={[{"text": "理财圈的“大神”：", "startFrame": 0, "durationFrames": 30}, {"text": "你看到某博主晒出翻倍的收益单，", "startFrame": 30, "durationFrames": 33}, {"text": "就觉得跟着他能发财。", "startFrame": 63, "durationFrames": 30}]} totalDurationFrames={93} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "理财圈", "showFrom": 0, "color": "#000000", "anim": "spring", "audioEffect": null}, {"text": "收益", "showFrom": 1, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={160} durationInFrames={98}>
                <BWCognitiveShift content={[{"text": "你没看到的是，", "startFrame": 0, "durationFrames": 30}, {"text": "他背后还有十个亏到销号的马甲，", "startFrame": 30, "durationFrames": 33}, {"text": "只是那个中奖的号恰好被你刷到了。", "startFrame": 63, "durationFrames": 35}]} totalDurationFrames={98} notText={"收益会翻倍"} butText={"多数会亏损"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>
            <Sequence from={258} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "长寿老人的“秘诀”：", "startFrame": 0, "durationFrames": 30}, {"text": "某个百岁老人每天抽烟喝酒，", "startFrame": 30, "durationFrames": 30}, {"text": "大家就觉得养生没用。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "幸存者偏差", "showFrom": 2, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={348} durationInFrames={91}>
                <BWCognitiveShift content={[{"text": "其实那只是因为他基因逆天，", "startFrame": 0, "durationFrames": 30}, {"text": "而那些学他抽烟喝酒的人，", "startFrame": 30, "durationFrames": 30}, {"text": "大多没活到能接受采访的年纪。", "startFrame": 60, "durationFrames": 31}]} totalDurationFrames={91} notText={"基因逆天"} butText={"没活到那年纪"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={439} durationInFrames={97}>
                <BWCenterFocus content={[{"text": "职场上的“特例”：", "startFrame": 0, "durationFrames": 30}, {"text": "公司里有个老员工从不加班也能升职，", "startFrame": 30, "durationFrames": 37}, {"text": "你觉得也能效仿。", "startFrame": 67, "durationFrames": 30}]} totalDurationFrames={97} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "特例", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "不加班", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={536} durationInFrames={86}>
                <BWCognitiveShift content={[{"text": "却不知道他可能是某个大客户的亲侄子，", "startFrame": 0, "durationFrames": 40}, {"text": "或者是掌握了某种你根本无法复制的核心资源。", "startFrame": 40, "durationFrames": 46}]} totalDurationFrames={86} notText={"普通老员工"} butText={"客户的亲戚"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={0} butContentIndex={1} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
