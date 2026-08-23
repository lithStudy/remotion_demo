import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTreeDiagram } from "../../../components";

// 总结：多重原因
const SCENE_DURATION = 874;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={874}>
                <BWTreeDiagram content={[{"text": "让我们总结一下：", "startFrame": 0, "durationFrames": 35}, {"text": "西方国家掀起的抵制华为行动是多方面原因促成的。", "startFrame": 34, "durationFrames": 133}, {"text": "一是被制裁，", "startFrame": 167, "durationFrames": 30}, {"text": "一是被去华为化。", "startFrame": 197, "durationFrames": 47}, {"text": "被制裁分为惩罚性", "startFrame": 244, "durationFrames": 44}, {"text": "和制约性，", "startFrame": 287, "durationFrames": 28}, {"text": "去华为分为技术原因", "startFrame": 315, "durationFrames": 52}, {"text": "和法理原因。", "startFrame": 366, "durationFrames": 37}, {"text": "惩罚性制裁由“星通事件”和“孟女士PPT事件”作为导火索", "startFrame": 403, "durationFrames": 138}, {"text": "制约性制裁是因为中国通信领域技术积累让美国感觉到了威胁", "startFrame": 540, "durationFrames": 158}, {"text": "去华为的技术原因是代码的不可信", "startFrame": 697, "durationFrames": 80}, {"text": "去华为的法理原因是《国家情报法》的颁布。", "startFrame": 777, "durationFrames": 97}]} totalDurationFrames={874} root={{ label: "抵制华为", showFrom: 1, children: [{ label: "被制裁", showFrom: 2, children: [{ label: "惩罚性制裁", showFrom: 4, children: [{ label: "星通", showFrom: 8 }, { label: "孟女士", showFrom: 8 }] }, { label: "制约性制裁", showFrom: 5, children: [{ label: "技术威胁", showFrom: 9 }] }] }, { label: "去华为化", showFrom: 3, children: [{ label: "技术原因", showFrom: 6, children: [{ label: "代码不可信", showFrom: 10 }] }, { label: "法理原因", showFrom: 7, children: [{ label: "国家情报法", showFrom: 11 }] }] }] }} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
