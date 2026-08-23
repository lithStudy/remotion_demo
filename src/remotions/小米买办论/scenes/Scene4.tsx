import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus, BWTreeDiagram } from "../../../components";

// 总结
const SCENE_DURATION = 120 + 300 + 369 + 182 + 85;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={120}>
                <BWTextFocus content={[{"text": "让我们总结一下。", "startFrame": 0, "durationFrames": 42}, {"text": "买办论的两个理由，", "startFrame": 41, "durationFrames": 53}, {"text": "都不成立。", "startFrame": 93, "durationFrames": 26}]} totalDurationFrames={120} coreSentence={[{"text": "让我们总结一下。", "showFrom": 0}, {"text": "买办论的两个理由，", "showFrom": 1}, {"text": "都不成立。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={120} durationInFrames={300}>
                <BWTreeDiagram content={[{"text": "对于小米而言，", "startFrame": 0, "durationFrames": 33}, {"text": "注册海外，", "startFrame": 32, "durationFrames": 26}, {"text": "是资本市场规律。", "startFrame": 57, "durationFrames": 42}, {"text": "未被制裁，", "startFrame": 99, "durationFrames": 32}, {"text": "是因为小米主营业务不对国家构成威胁，", "startFrame": 130, "durationFrames": 89}, {"text": "并且它堂堂正正的打赢了对政府的官司。", "startFrame": 219, "durationFrames": 81}]} totalDurationFrames={300} root={{ label: "小米", showFrom: 0, children: [{ label: "注册海外", showFrom: 1, children: [{ label: "资本市场规律", showFrom: 2 }] }, { label: "未被制裁", showFrom: 3, children: [{ label: "业务无威胁", showFrom: 4 }, { label: "胜诉政府", showFrom: 5 }] }] }} anchors={[]} />
            </Sequence>
            <Sequence from={420} durationInFrames={369}>
                <BWTreeDiagram content={[{"text": "对于华为而言，", "startFrame": 0, "durationFrames": 35}, {"text": "不进行海外注册，", "startFrame": 34, "durationFrames": 41}, {"text": "是因为他不上市没有必要，", "startFrame": 75, "durationFrames": 49}, {"text": "其次他的股权结构也无法在外国注册。", "startFrame": 123, "durationFrames": 87}, {"text": "被制裁，", "startFrame": 209, "durationFrames": 24}, {"text": "是因为他的业务涉及网络安全，", "startFrame": 233, "durationFrames": 69}, {"text": "且有孟小姐案件珠玉在前。", "startFrame": 302, "durationFrames": 67}]} totalDurationFrames={369} root={{ label: "华为", showFrom: 0, children: [{ label: "本地注册", showFrom: 1, children: [{ label: "不上市", showFrom: 2 }, { label: "股权结构", showFrom: 3 }] }, { label: "被制裁", showFrom: 4, children: [{ label: "网络安全", showFrom: 5 }, { label: "孟小姐案", showFrom: 6 }] }] }} anchors={[]} />
            </Sequence>
            <Sequence from={789} durationInFrames={182}>
                <BWTextFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 18}, {"text": "理解了这些，", "startFrame": 17, "durationFrames": 26}, {"text": "希望智慧的你，", "startFrame": 42, "durationFrames": 31}, {"text": "以后不要再用注册地和制裁，", "startFrame": 73, "durationFrames": 54}, {"text": "来判断一家公司是不是买办，", "startFrame": 126, "durationFrames": 55}]} totalDurationFrames={182} coreSentence={[{"text": "希望智慧的你", "showFrom": 2, "endFrom": 2}, {"text": "以后不要再用注册地和制裁", "showFrom": 3, "endFrom": 4}, {"text": "来判断一家公司是不是买办", "showFrom": 4, "endFrom": 4}]} coreSentenceAnchors={[{"coreSentenceAnchor": "买办", "color": "#EF4444"}, {"coreSentenceAnchor": "注册地", "color": "#EF4444"}, {"coreSentenceAnchor": "制裁", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={971} durationInFrames={85}>
                <BWTextFocus content={[{"text": "也不要用这些来拉踩两个同属中国的公司。", "startFrame": 0, "durationFrames": 85}]} totalDurationFrames={85} coreSentence={[{"text": "拉踩两个同属中国的公司。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "拉踩", "color": "#EF4444"}, {"coreSentenceAnchor": "中国", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
