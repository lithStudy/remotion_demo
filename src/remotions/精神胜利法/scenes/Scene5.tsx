import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile, Freeze } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWPunchCaption, BWSplitCompare, BWStepList, BWTextFocus } from "../../../components";

// 真正自信先看清自己
const SCENE_DURATION = 194 + 80 + 111 + 164 + 96 + 104 + 195 + 186;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={194}>
                <BWSplitCompare content={[{"text": "自己的历史本来应该是一面镜子。", "startFrame": 0, "durationFrames": 68}, {"text": "让现在的人明得失。", "startFrame": 67, "durationFrames": 44}, {"text": "精神胜利法，", "startFrame": 111, "durationFrames": 31}, {"text": "却把它改成了美颜相机。", "startFrame": 142, "durationFrames": 52}]} totalDurationFrames={194} leftSrc={staticFile("images/精神胜利法/scene_5_1_left.png")} rightSrc={staticFile("images/精神胜利法/scene_5_1_right.png")} leftLabel={"镜子"} rightLabel={"美颜相机"} leftShowFrom={0} rightShowFrom={3} anchors={[]} />
            </Sequence>
            <Sequence from={194} durationInFrames={80}>
                <BWPunchCaption content={[{"text": "只负责美化自己，", "startFrame": 0, "durationFrames": 43}, {"text": "不负责看清自己。", "startFrame": 42, "durationFrames": 37}]} totalDurationFrames={80} punches={[{"text": "只美化自己", "showFrom": 0, "enterEffect": "snap", "tone": "calm"}, {"text": "不看清自己", "showFrom": 1, "enterEffect": "shake", "tone": "alert"}]} />
            </Sequence>
            <Sequence from={274} durationInFrames={111}>
                <BWCenterFocus content={[{"text": "别人的历史本来应该是一把尺子。", "startFrame": 0, "durationFrames": 67}, {"text": "让现在的人量高低。", "startFrame": 66, "durationFrames": 44}]} totalDurationFrames={111} imageSrc={staticFile("images/精神胜利法/scene_5_3.png")} enterEffect="fadeIn" anchors={[{"text": "尺子", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={385} durationInFrames={164}>
                <BWCognitiveShift content={[{"text": "伪史论，", "startFrame": 0, "durationFrames": 28}, {"text": "却把它改成了一块橡皮。", "startFrame": 27, "durationFrames": 55}, {"text": "只负责抹掉别人，", "startFrame": 81, "durationFrames": 44}, {"text": "不负责量清自己。", "startFrame": 125, "durationFrames": 39}]} totalDurationFrames={164} notText={"抹掉别人"} butText={"量清自己"} butSrc={staticFile("images/精神胜利法/scene_5_4.png")} notContentIndex={2} butContentIndex={3} anchors={[]} />
            </Sequence>
            <Sequence from={549} durationInFrames={96}>
                <BWSplitCompare content={[{"text": "承认金字塔是真的，", "startFrame": 0, "durationFrames": 44}, {"text": "长城不会变矮。", "startFrame": 43, "durationFrames": 53}]} totalDurationFrames={96} leftSrc={staticFile("images/精神胜利法/scene_5_6_left.png")} rightSrc={staticFile("images/精神胜利法/scene_5_6_right.png")} leftLabel={"金字塔"} rightLabel={"长城"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={645} durationInFrames={104}>
                <BWSplitCompare content={[{"text": "承认亚里士多德存在，", "startFrame": 0, "durationFrames": 46}, {"text": "孔子也不会失去光芒。", "startFrame": 45, "durationFrames": 58}]} totalDurationFrames={104} leftSrc={staticFile("images/精神胜利法/scene_5_7_left.png")} rightSrc={staticFile("images/精神胜利法/scene_5_7_right.png")} leftLabel={"亚里士多德"} rightLabel={"孔子"} leftShowFrom={0} rightShowFrom={1} anchors={[]} />
            </Sequence>
            <Sequence from={749} durationInFrames={195}>
                <BWStepList content={[{"text": "真正自信的人，", "startFrame": 0, "durationFrames": 34}, {"text": "不需要把全世界变矮，", "startFrame": 33, "durationFrames": 45}, {"text": "来证明自己高大。", "startFrame": 78, "durationFrames": 40}, {"text": "正视差距。", "startFrame": 117, "durationFrames": 30}, {"text": "用今天的努力去追赶。", "startFrame": 147, "durationFrames": 47}]} totalDurationFrames={195} title={"真正的自信"} steps={[{"text": "不把别人变矮，来证明自己高大", "showFrom": 1}, {"text": "正视差距", "showFrom": 3}, {"text": "用今天的努力去追赶。", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={944} durationInFrames={161}>
                <BWTextFocus content={[{"text": "历史留给我们的，", "startFrame": 0, "durationFrames": 35}, {"text": "不该是一份可以反复领取的荣誉。", "startFrame": 34, "durationFrames": 61}, {"text": "更该，是一项还没做完的任务。", "startFrame": 95, "durationFrames": 66}]} totalDurationFrames={161} coreSentence={[{"text": "历史留给我们的，", "showFrom": 0}, {"text": "不该是一份可以反复领取的荣誉。", "showFrom": 1}, {"text": "更该，是一项还没做完的任务。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "荣誉", "color": "#EF4444"}, {"coreSentenceAnchor": "任务", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1105} durationInFrames={25}>
                <Freeze frame={160}>
                    <BWTextFocus content={[{"text": "历史留给我们的，", "startFrame": 0, "durationFrames": 35}, {"text": "不该是一份可以反复领取的荣誉。", "startFrame": 34, "durationFrames": 61}, {"text": "更该，是一项还没做完的任务。", "startFrame": 95, "durationFrames": 66}]} totalDurationFrames={161} coreSentence={[{"text": "历史留给我们的，", "showFrom": 0}, {"text": "不该是一份可以反复领取的荣誉。", "showFrom": 1}, {"text": "更该，是一项还没做完的任务。", "showFrom": 2}]} coreSentenceAnchors={[{"coreSentenceAnchor": "荣誉", "color": "#EF4444"}, {"coreSentenceAnchor": "任务", "color": "#EF4444"}]} />
                </Freeze>
            </Sequence>
            <Audio src={staticFile("/audio/精神胜利法/scene_5/scene_5.mp3")} />
        </AbsoluteFill>
    );
};
