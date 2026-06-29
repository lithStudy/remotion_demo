import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain, BWCenterFocus } from "../../../components";

// 剖析：内卷循环与个人困境
const SCENE_DURATION = 210 + 120 + 120;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={210}>
                <BWCauseChain content={[{"text": "廉价的人力，", "startFrame": 0, "durationFrames": 30}, {"text": "还会制造内卷。", "startFrame": 30, "durationFrames": 30}, {"text": "企业习惯用低人力成本赚钱，", "startFrame": 60, "durationFrames": 30}, {"text": "打工人工资就上不去。", "startFrame": 90, "durationFrames": 30}, {"text": "大家兜里没钱，", "startFrame": 120, "durationFrames": 30}, {"text": "只能消费降级，", "startFrame": 150, "durationFrames": 30}, {"text": "追求更便宜的东西。", "startFrame": 180, "durationFrames": 30}]} totalDurationFrames={210} layout={"horizontal"} nodes={[{ label: "廉价人力", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 0 }, { label: "压低成本", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 2 }, { label: "工资难涨", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 3 }, { label: "消费降级", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 5 }]} anchors={[]} />
            </Sequence>
            <Sequence from={210} durationInFrames={120}>
                <BWCauseChain content={[{"text": "企业为了提供更低的价格，", "startFrame": 0, "durationFrames": 30}, {"text": "就只能继续压榨打工人。", "startFrame": 30, "durationFrames": 30}, {"text": "这就形成了循环，", "startFrame": 60, "durationFrames": 30}, {"text": "也就造就了内卷。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} layout={"horizontal"} nodes={[{ label: "价格竞争", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "压榨工人", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 1, enterEffect: "slideLeft" }, { label: "恶性循环", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 2, enterEffect: "slideBottom" }, { label: "内卷", imageSrc: staticFile("images/template/scene1_1.png"), showFrom: 3, enterEffect: "zoomIn" }]} anchors={[{"text": "内卷", "showFrom": 3, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={330} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "我们每个人，", "startFrame": 0, "durationFrames": 30}, {"text": "既是享受廉价便利的消费者，", "startFrame": 30, "durationFrames": 30}, {"text": "又是被死死压榨的打工人。", "startFrame": 60, "durationFrames": 30}, {"text": "逃不掉。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "逃不掉", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
