import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWStepList } from "../../../components";

// 防御锦囊与立意拔高
const SCENE_DURATION = 150 + 150 + 300 + 240 + 180 + 120;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={150}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "为了不让自己变成", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "算法的傀儡，下次", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "上网冲浪，我建议", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "大家在心里备好", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "这把“防身武器”：", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={150} durationInFrames={150}>
                <BWStepList content={[{"text": "反向搜索法：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "当你极其认同", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "某个观点时，", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "强迫自己去搜一下", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "反对这个观点的理由。", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={300} durationInFrames={300}>
                <BWStepList content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "如果一段文字让你", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "读完觉得“太解气了、", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "说得太对了”，", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "这时候一定要停下来。", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "因为能让你瞬间", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "产生巨大爽感的东西，", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "往往不是真相，", "startFrame": 210, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "而是针对你“确认", "startFrame": 240, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "偏误”定制的诱饵。", "startFrame": 270, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={300} />
            </Sequence>
            <Sequence from={600} durationInFrames={240}>
                <BWStepList content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "“如果我是错的，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "会有什么证据", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "能说服我？”", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "如果你发现没有任何", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "证据能说服你，", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "那说明你已经掉进了", "startFrame": 180, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "偏见的陷阱。", "startFrame": 210, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={240} />
            </Sequence>
            <Sequence from={840} durationInFrames={180}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "兄弟姐妹们，在这个", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "套路满天飞的时代，", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "承认自己“可能错了”", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "并不是一种软弱，", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "而是一个成年人", "startFrame": 120, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "最高级的智力觉醒。", "startFrame": 150, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={180} />
            </Sequence>
            <Sequence from={1020} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "不被偏见裹挟，我们", "startFrame": 30, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "才能真正看清这个", "startFrame": 60, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "复杂的世界。", "startFrame": 90, "durationFrames": 30, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={120} />
            </Sequence>

        </AbsoluteFill>
    );
};
