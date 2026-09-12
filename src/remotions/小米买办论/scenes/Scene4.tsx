import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWTextFocus, BWTreeDiagram } from "../../../components";

// 总结
const SCENE_DURATION = 113 + 303 + 372 + 210 + 112;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={113}>
                <BWTextFocus content={[{"text": "让我们总结一下。", "startFrame": 0, "durationFrames": 42}, {"text": "买办论的两个理由，", "startFrame": 41, "durationFrames": 46}, {"text": "都不成立。", "startFrame": 87, "durationFrames": 26}]} totalDurationFrames={113} coreSentence={[{"text": "让我们总结一下。", "showFrom": 0}, {"text": "买办论的两个理由，", "showFrom": 1}, {"text": "都不成立。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={113} durationInFrames={303}>
                <BWTreeDiagram content={[{"text": "对于小米而言，", "startFrame": 0, "durationFrames": 33}, {"text": "注册海外，", "startFrame": 32, "durationFrames": 29}, {"text": "是资本市场规律。", "startFrame": 61, "durationFrames": 44}, {"text": "未被制裁，", "startFrame": 104, "durationFrames": 30}, {"text": "是因为小米主营业务不对国家构成威胁，", "startFrame": 134, "durationFrames": 81}, {"text": "并且它堂堂正正的打赢了对政府的官司。", "startFrame": 214, "durationFrames": 88}]} totalDurationFrames={303} root={{ label: "小米", showFrom: 0, children: [{ label: "注册海外", showFrom: 1, children: [{ label: "资本市场规律", showFrom: 2 }] }, { label: "未被制裁", showFrom: 3, children: [{ label: "业务无威胁", showFrom: 4 }, { label: "胜诉政府", showFrom: 5 }] }] }} anchors={[]} />
            </Sequence>
            <Sequence from={416} durationInFrames={372}>
                <BWTreeDiagram content={[{"text": "对于华为而言，", "startFrame": 0, "durationFrames": 34}, {"text": "不进行海外注册，", "startFrame": 33, "durationFrames": 42}, {"text": "是因为他不上市没有必要，", "startFrame": 75, "durationFrames": 53}, {"text": "其次他的股权结构也无法在外国注册。", "startFrame": 127, "durationFrames": 89}, {"text": "被制裁，", "startFrame": 216, "durationFrames": 24}, {"text": "是因为他的业务涉及网络安全，", "startFrame": 240, "durationFrames": 68}, {"text": "且有孟小姐案件珠玉在前。", "startFrame": 308, "durationFrames": 64}]} totalDurationFrames={372} root={{ label: "华为", showFrom: 0, children: [{ label: "本地注册", showFrom: 1, children: [{ label: "不上市", showFrom: 2 }, { label: "股权结构", showFrom: 3 }] }, { label: "被制裁", showFrom: 4, children: [{ label: "网络安全", showFrom: 5 }, { label: "孟小姐案", showFrom: 6 }] }] }} anchors={[]} />
            </Sequence>
            <Sequence from={788} durationInFrames={210}>
                <BWTextFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 22}, {"text": "理解了这些，", "startFrame": 21, "durationFrames": 29}, {"text": "希望智慧的你，", "startFrame": 50, "durationFrames": 33}, {"text": "以后不要再用注册地和制裁，", "startFrame": 82, "durationFrames": 65}, {"text": "来判断一家公司是不是买办，", "startFrame": 147, "durationFrames": 63}]} totalDurationFrames={210} coreSentence={[{"text": "希望智慧的你", "showFrom": 2, "endFrom": 2}, {"text": "以后不要再用注册地和制裁", "showFrom": 3, "endFrom": 4}, {"text": "来判断一家公司是不是买办", "showFrom": 4, "endFrom": 4}]} coreSentenceAnchors={[{"coreSentenceAnchor": "买办", "color": "#EF4444"}, {"coreSentenceAnchor": "注册地", "color": "#EF4444"}, {"coreSentenceAnchor": "制裁", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={998} durationInFrames={87}>
                <BWTextFocus content={[{"text": "也不要用这些来拉踩两个同属中国的公司。", "startFrame": 0, "durationFrames": 87}]} totalDurationFrames={87} coreSentence={[{"text": "拉踩两个同属中国的公司。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "拉踩", "color": "#EF4444"}, {"coreSentenceAnchor": "中国", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1085} durationInFrames={25}>
                <Freeze frame={86}>
                    <BWTextFocus content={[{"text": "也不要用这些来拉踩两个同属中国的公司。", "startFrame": 0, "durationFrames": 87}]} totalDurationFrames={87} coreSentence={[{"text": "拉踩两个同属中国的公司。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "拉踩", "color": "#EF4444"}, {"coreSentenceAnchor": "中国", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
