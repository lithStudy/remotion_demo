import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMultiImage } from "../../../components";

// 提供解决方案：防身武器
const SCENE_DURATION = 103 + 395;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus imageSrc={staticFile("一个人被许多算法代码包围的抽象概念图")} enterEffect="breathe" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31}, {"text": "下次上网冲浪，", "startFrame": 31, "durationFrames": 30}, {"text": "我建议大家在心里备好这把“防身武器”：", "startFrame": 61, "durationFrames": 42}]} anchors={[{"text": "算法", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={103} />
            </Sequence>
            <Sequence from={103} durationInFrames={395}>
                <BWMultiImage groups={[{"image": {"src": "放大镜简笔画图标", "textIndex": 0}, "anchor": {"text": "反向搜索法", "color": "#000000", "anim": "highlight", "audioEffect": "ping"}}, {"image": {"src": "警钟简笔画图标", "textIndex": 2}, "anchor": {"text": "警惕爽感", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}}, {"image": {"src": "问号思考简笔画图标", "textIndex": 6}, "anchor": {"text": "自我反问", "color": "#000000", "anim": "spring", "audioEffect": null}}]} content={[{"text": "反向搜索法：当你极其认同某个观点时，", "startFrame": 0, "durationFrames": 40}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 40, "durationFrames": 40}, {"text": "警惕“爽感”：如果一段文字让你读完觉得“太解气了、", "startFrame": 80, "durationFrames": 55}, {"text": "说得太对了”，这时候一定要停下来。", "startFrame": 135, "durationFrames": 37}, {"text": "因为能让你瞬间产生巨大爽感的东西，往往不是真相，", "startFrame": 172, "durationFrames": 53}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 225, "durationFrames": 37}, {"text": "问自己一个问题：“如果我是错的，", "startFrame": 262, "durationFrames": 35}, {"text": "会有什么证据能说服我？”", "startFrame": 297, "durationFrames": 30}, {"text": "如果你发现没有任何证据能说服你，那说明你已经掉进了偏见的陷阱。", "startFrame": 327, "durationFrames": 68}]} totalDurationFrames={395} />
            </Sequence>

        </AbsoluteFill>
    );
};
