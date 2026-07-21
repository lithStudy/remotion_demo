import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCaseBreakdown, BWChatBubble, BWCognitiveShift, BWDosAndDonts, BWTextFocus } from "../../../components";

// 反转·硬件营销包装
const SCENE_DURATION = 176 + 259 + 331 + 86 + 151 + 243 + 75 + 82 + 110;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={176}>
                <BWChatBubble content={[{"text": "那为什么很多车企在不断地宣传自己家有几颗雷达？", "startFrame": 0, "durationFrames": 107}, {"text": "宣称自己就是比别人的安全？", "startFrame": 106, "durationFrames": 69}]} totalDurationFrames={176} bubbles={[{ bubbleText: "很多车企在不断地宣传自己家有几颗雷达", showFrom: 0, align: "left" }, { bubbleText: "自己就是比别人的安全", showFrom: 1, align: "left" }]} anchors={[]} />
            </Sequence>
            <Sequence from={176} durationInFrames={259}>
                <BWCaseBreakdown content={[{"text": "因为雷达是可见的，", "startFrame": 0, "durationFrames": 52}, {"text": "雷达一听就是军用高科技的玩意。", "startFrame": 51, "durationFrames": 60}, {"text": "雷达有几颗，", "startFrame": 110, "durationFrames": 39}, {"text": "激光多少束。", "startFrame": 148, "durationFrames": 40}, {"text": "消费者看得见，", "startFrame": 187, "durationFrames": 35}, {"text": "车企卖得出去。", "startFrame": 222, "durationFrames": 37}]} totalDurationFrames={259} title={"雷达卖点逻辑"} imageSrc={staticFile("images/智驾论之瓶颈/scene_3_2.png")} phases={[{"phaseLabel": "可见性", "showFrom": 0}, {"phaseLabel": "科技标签", "showFrom": 1}, {"phaseLabel": "量化包装", "showFrom": 2}, {"phaseLabel": "营销收束", "showFrom": 4}]} />
            </Sequence>
            <Sequence from={435} durationInFrames={331}>
                <BWCaseBreakdown content={[{"text": "但决策层面，", "startFrame": 0, "durationFrames": 34}, {"text": "神经网络怎么判断，", "startFrame": 33, "durationFrames": 50}, {"text": "训练数据覆盖了什么场景，", "startFrame": 82, "durationFrames": 64}, {"text": "遇到边界场景怎么取舍。", "startFrame": 146, "durationFrames": 59}, {"text": "这些东西，", "startFrame": 204, "durationFrames": 28}, {"text": "消费者看不见。", "startFrame": 232, "durationFrames": 39}, {"text": "车企也很难包装成卖点。", "startFrame": 270, "durationFrames": 61}]} totalDurationFrames={331} title={"决策黑箱"} imageSrc={staticFile("images/智驾论之瓶颈/scene_3_4.png")} phases={[{"phaseLabel": "决策层面", "showFrom": 0}, {"phaseLabel": "黑箱机制", "showFrom": 1}, {"phaseLabel": "消费者盲区", "showFrom": 5}, {"phaseLabel": "包装困境", "showFrom": 6}]} />
            </Sequence>
            <Sequence from={766} durationInFrames={86}>
                <BWTextFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 18}, {"text": "行业才喜欢把故事", "startFrame": 17, "durationFrames": 41}, {"text": "讲回硬件。", "startFrame": 57, "durationFrames": 28}]} totalDurationFrames={86} coreSentence={[{"text": "所以，", "showFrom": 0, "endFrom": 0}, {"text": "行业才喜欢把故事", "showFrom": 1, "endFrom": 2}, {"text": "讲回硬件。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "硬件", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={852} durationInFrames={151}>
                <BWDosAndDonts content={[{"text": "多一颗雷达，", "startFrame": 0, "durationFrames": 27}, {"text": "就像多一份安全感。", "startFrame": 26, "durationFrames": 38}, {"text": "多一套配置，", "startFrame": 63, "durationFrames": 29}, {"text": "就能多收一份智驾溢价。", "startFrame": 91, "durationFrames": 59}]} totalDurationFrames={151} left={{label: "❌ 安全感话术", src: staticFile("images/智驾论之瓶颈/scene_3_6_left.png"), showFrom: 0 }} right={{label: "✅ 堆配置溢价", src: staticFile("images/智驾论之瓶颈/scene_3_6_right.png"), showFrom: 2 }} />
            </Sequence>
            <Sequence from={1003} durationInFrames={243}>
                <BWCognitiveShift content={[{"text": "可真正难的，", "startFrame": 0, "durationFrames": 33}, {"text": "从来不是再装一个传感器。", "startFrame": 32, "durationFrames": 55}, {"text": "而是让系统在看见之后，", "startFrame": 86, "durationFrames": 50}, {"text": "知道该不该刹车。", "startFrame": 135, "durationFrames": 42}, {"text": "该不该避让。", "startFrame": 177, "durationFrames": 33}, {"text": "该不该继续走。", "startFrame": 209, "durationFrames": 33}]} totalDurationFrames={243} notText={"堆硬件"} butText={"训练大脑"} butSrc={staticFile("images/智驾论之瓶颈/scene_3_7.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={1246} durationInFrames={75}>
                <BWTextFocus content={[{"text": "这才是智驾公司，", "startFrame": 0, "durationFrames": 36}, {"text": "最不想被追问的地方。", "startFrame": 36, "durationFrames": 39}]} totalDurationFrames={75} coreSentence={[{"text": "这才是智驾公司", "showFrom": 0}, {"text": "最不想被追问的地方。", "showFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "最不想被追问的地方", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1321} durationInFrames={82}>
                <BWTextFocus content={[{"text": "因为训练大脑，", "startFrame": 0, "durationFrames": 33}, {"text": "比堆硬件难一百倍。", "startFrame": 32, "durationFrames": 50}]} totalDurationFrames={82} coreSentence={[{"text": "因为训练大脑，", "showFrom": 0, "endFrom": 0}, {"text": "比堆硬件难一百倍。", "showFrom": 1, "endFrom": 1}]} coreSentenceAnchors={[{"coreSentenceAnchor": "难一百倍", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1403} durationInFrames={110}>
                <BWCognitiveShift content={[{"text": "未来智驾的胜负手，", "startFrame": 0, "durationFrames": 48}, {"text": "不在传感器。", "startFrame": 48, "durationFrames": 32}, {"text": "而在大脑。", "startFrame": 79, "durationFrames": 31}]} totalDurationFrames={110} notText={"传感器"} butText={"大脑"} butSrc={staticFile("images/智驾论之瓶颈/scene_3_10.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/智驾论之瓶颈/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
