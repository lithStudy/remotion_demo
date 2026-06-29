import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTextFocus, BWTreeDiagram } from "../../../components";

// 总结
const SCENE_DURATION = 112 + 292 + 364 + 201 + 87;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={112}>
                <BWTextFocus content={[{"text": "让我们总结一下。", "startFrame": 0, "durationFrames": 42}, {"text": "买办论的两个理由，", "startFrame": 41, "durationFrames": 45}, {"text": "都不成立。", "startFrame": 86, "durationFrames": 26}]} totalDurationFrames={112} coreSentence={[{"text": "让我们总结一下。", "showFrom": 0}, {"text": "买办论的两个理由，", "showFrom": 1}, {"text": "都不成立。", "showFrom": 2, "endFrom": 2}]} coreSentenceAnchors={[]} />
            </Sequence>
            <Sequence from={112} durationInFrames={292}>
                <BWTreeDiagram content={[{"text": "对于小米而言，", "startFrame": 0, "durationFrames": 33}, {"text": "注册海外，", "startFrame": 32, "durationFrames": 26}, {"text": "是资本市场规律。", "startFrame": 57, "durationFrames": 45}, {"text": "未被制裁，", "startFrame": 102, "durationFrames": 27}, {"text": "是因为小米主营业务不对国家构成威胁，", "startFrame": 128, "durationFrames": 81}, {"text": "并且它堂堂正正的打赢了对政府的官司。", "startFrame": 209, "durationFrames": 83}]} totalDurationFrames={292} root={{ label: "小米", showFrom: 0, children: [{ label: "注册海外", showFrom: 1, children: [{ label: "资本市场规律", showFrom: 2 }] }, { label: "未被制裁", showFrom: 3, children: [{ label: "业务无威胁", showFrom: 4 }, { label: "胜诉政府", showFrom: 5 }] }] }} anchors={[]} />
            </Sequence>
            <Sequence from={404} durationInFrames={364}>
                <BWTreeDiagram content={[{"text": "对于华为而言，", "startFrame": 0, "durationFrames": 36}, {"text": "不进行海外注册，", "startFrame": 36, "durationFrames": 40}, {"text": "是因为他不上市没有必要，", "startFrame": 75, "durationFrames": 51}, {"text": "其次他的股权结构也无法在外国注册。", "startFrame": 125, "durationFrames": 93}, {"text": "被制裁，", "startFrame": 217, "durationFrames": 22}, {"text": "是因为他的业务涉及网络安全，", "startFrame": 239, "durationFrames": 62}, {"text": "且有孟小姐案件珠玉在前。", "startFrame": 300, "durationFrames": 63}]} totalDurationFrames={364} root={{ label: "华为", showFrom: 0, children: [{ label: "本地注册", showFrom: 1, children: [{ label: "不上市", showFrom: 2 }, { label: "股权结构", showFrom: 3 }] }, { label: "被制裁", showFrom: 4, children: [{ label: "网络安全", showFrom: 5 }, { label: "孟小姐案", showFrom: 6 }] }] }} anchors={[]} />
            </Sequence>
            <Sequence from={768} durationInFrames={201}>
                <BWTextFocus content={[{"text": "所以，", "startFrame": 0, "durationFrames": 19}, {"text": "理解了这些，", "startFrame": 18, "durationFrames": 28}, {"text": "希望智慧的你，", "startFrame": 45, "durationFrames": 32}, {"text": "以后不要再用注册地和制裁，", "startFrame": 77, "durationFrames": 66}, {"text": "来判断一家公司是不是买办，", "startFrame": 142, "durationFrames": 58}]} totalDurationFrames={201} coreSentence={[{"text": "希望智慧的你", "showFrom": 2, "endFrom": 2}, {"text": "以后不要再用注册地和制裁", "showFrom": 3, "endFrom": 4}, {"text": "来判断一家公司是不是买办", "showFrom": 4, "endFrom": 4}]} coreSentenceAnchors={[{"coreSentenceAnchor": "买办", "color": "#EF4444"}, {"coreSentenceAnchor": "注册地", "color": "#EF4444"}, {"coreSentenceAnchor": "制裁", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={969} durationInFrames={87}>
                <BWTextFocus content={[{"text": "也不要用这些来拉踩两个同属中国的公司。", "startFrame": 0, "durationFrames": 87}]} totalDurationFrames={87} coreSentence={[{"text": "拉踩两个同属中国的公司。", "showFrom": 0, "endFrom": 0}]} coreSentenceAnchors={[{"coreSentenceAnchor": "拉踩", "color": "#EF4444"}, {"coreSentenceAnchor": "中国", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/小米买办论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
