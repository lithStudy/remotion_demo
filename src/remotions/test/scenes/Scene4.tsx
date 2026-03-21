import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWStepList, BWTextFocus } from "../../../components";

// 防御锦囊与立意拔高
const SCENE_DURATION = 486 + 114 + 70;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={486}>
                <BWStepList content={[{"text": "为了不让自己变成算法的傀儡，下次上网冲浪，我建议大家在心里备好这把“防身武器”：", "startFrame": 0, "durationFrames": 88, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "反向搜索法： 当你极其认同某个观点时，强迫自己去搜一下反对这个观点的理由。", "startFrame": 88, "durationFrames": 81, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "警惕“爽感”： 如果一段文字让你读完觉得“太解气了、说得太对了”，这时候一定要停下来。因为能让你瞬间产生巨大爽感的东西，往往不是真相，而是针对你“确认偏误”定制的诱饵。", "startFrame": 169, "durationFrames": 185, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "问自己一个问题： “如果我是错的，会有什么证据能说服我？”如果你发现没有任何证据能说服你，那说明你已经掉进了偏见的陷阱。", "startFrame": 354, "durationFrames": 132, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={486} />
            </Sequence>
            <Sequence from={486} durationInFrames={114}>
                <BWTextFocus content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，承认自己“可能错了”并不是一种软弱，而是一个成年人最高级的智力觉醒。", "startFrame": 0, "durationFrames": 114, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={114} />
            </Sequence>
            <Sequence from={600} durationInFrames={70}>
                <BWTextFocus content={[{"text": "做自己大脑的主人，不被偏见裹挟，我们才能真正看清这个复杂的世界。", "startFrame": 0, "durationFrames": 70, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={70} />
            </Sequence>

        </AbsoluteFill>
    );
};
