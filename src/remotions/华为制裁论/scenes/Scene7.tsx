import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWTreeDiagram } from "../../../components";

// 总结：多重原因
const SCENE_DURATION = 891;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={891}>
                <BWTreeDiagram content={[{"text": "让我们总结一下：", "startFrame": 0, "durationFrames": 36}, {"text": "西方国家掀起的抵制华为行动是多方面原因促成的。", "startFrame": 36, "durationFrames": 131}, {"text": "一是被制裁，", "startFrame": 166, "durationFrames": 38}, {"text": "一是被去华为化。", "startFrame": 204, "durationFrames": 47}, {"text": "被制裁分为惩罚性", "startFrame": 250, "durationFrames": 52}, {"text": "和制约性，", "startFrame": 302, "durationFrames": 32}, {"text": "去华为分为技术原因", "startFrame": 333, "durationFrames": 53}, {"text": "和法理原因。", "startFrame": 386, "durationFrames": 36}, {"text": "惩罚性制裁由“星通事件”和“孟女士PPT事件”作为导火索", "startFrame": 421, "durationFrames": 139}, {"text": "制约性制裁是因为中国通信领域技术积累让美国感觉到了威胁", "startFrame": 559, "durationFrames": 151}, {"text": "去华为的技术原因是代码的不可信", "startFrame": 710, "durationFrames": 84}, {"text": "去华为的法理原因是《国家情报法》的颁布。", "startFrame": 794, "durationFrames": 96}]} totalDurationFrames={891} root={{ label: "抵制华为", showFrom: 1, children: [{ label: "被制裁", showFrom: 2, children: [{ label: "惩罚性制裁", showFrom: 4, children: [{ label: "星通", showFrom: 8 }, { label: "孟女士", showFrom: 8 }] }, { label: "制约性制裁", showFrom: 5, children: [{ label: "技术威胁", showFrom: 9 }] }] }, { label: "去华为化", showFrom: 3, children: [{ label: "技术原因", showFrom: 6, children: [{ label: "代码不可信", showFrom: 10 }] }, { label: "法理原因", showFrom: 7, children: [{ label: "国家情报法", showFrom: 11 }] }] }] }} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_7/scene_7.mp3")} />
        </AbsoluteFill>
    );
};
