import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWDosAndDonts, BWMagnifyingGlass, BWTextFocus } from "../../../components";

// 提供解决方案：防身武器
const SCENE_DURATION = 204 + 179 + 214 + 204 + 144 + 154 + 258 + 159;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={204}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_4_1.png")} enterEffect="breathe" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 70, "audioEffect": "ping"}, {"text": "下次上网冲浪，我建议大家在心里备好这把", "startFrame": 69, "durationFrames": 100, "audioEffect": "ping"}, {"text": "“防身武器”：", "startFrame": 168, "durationFrames": 35, "audioEffect": null}]} anchors={[]} totalDurationFrames={204} />
            </Sequence>
            <Sequence from={204} durationInFrames={179}>
                <BWConceptCard imageSrc={staticFile("images/test3/scene_4_2.png")} conceptName={"反向搜索"} content={[{"text": "反向搜索法：", "startFrame": 0, "durationFrames": 30, "audioEffect": "ping"}, {"text": "当你极其认同某个观点时，", "startFrame": 29, "durationFrames": 60, "audioEffect": "ping"}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 89, "durationFrames": 90, "audioEffect": null}]} anchors={[{"text": "反向搜索", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={179} />
            </Sequence>
            <Sequence from={383} durationInFrames={214}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_4_3.png")} enterEffect="fadeIn" content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 35, "audioEffect": "ping"}, {"text": "如果一段文字让你读完觉得", "startFrame": 34, "durationFrames": 65, "audioEffect": "ping"}, {"text": "“太解气了、说得太对了”，", "startFrame": 99, "durationFrames": 65, "audioEffect": "ping"}, {"text": "这时候一定要停下来。", "startFrame": 163, "durationFrames": 50, "audioEffect": null}]} anchors={[{"text": "爽感", "showFrom": 0, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={214} />
            </Sequence>
            <Sequence from={597} durationInFrames={204}>
                <BWMagnifyingGlass content={[{"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 0, "durationFrames": 85, "audioEffect": null}, {"text": "往往不是真相，", "startFrame": 84, "durationFrames": 35, "audioEffect": null}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 118, "durationFrames": 85, "audioEffect": "ping"}]} anchors={[{"text": "确认偏误", "showFrom": 2, "color": "#EF4444", "anim": "popIn"}, {"text": "诱饵", "showFrom": 2, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={204} />
            </Sequence>
            <Sequence from={801} durationInFrames={144}>
                <BWConceptCard imageSrc={staticFile("images/test3/scene_4_5.png")} conceptName={"反思"} content={[{"text": "问自己一个问题：", "startFrame": 0, "durationFrames": 40, "audioEffect": "ping"}, {"text": "“如果我是错的，", "startFrame": 39, "durationFrames": 40, "audioEffect": "ping"}, {"text": "会有什么证据能说服我？”", "startFrame": 79, "durationFrames": 65, "audioEffect": null}]} anchors={[]} totalDurationFrames={144} />
            </Sequence>
            <Sequence from={945} durationInFrames={154}>
                <BWDosAndDonts leftSrc={staticFile("images/test3/scene_4_6_left.png")} rightSrc={staticFile("images/test3/scene_4_6_right.png")} dontLabel={"别固执"} doLabel={"听建议"} content={[{"text": "如果你发现没有任何证据能说服你，", "startFrame": 0, "durationFrames": 80, "audioEffect": "ping"}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 79, "durationFrames": 75, "audioEffect": null}]} anchors={[]} totalDurationFrames={154} />
            </Sequence>
            <Sequence from={1099} durationInFrames={258}>
                <BWTextFocus coreSentence={"承认自己“可能错了”是一种智力觉醒"} content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，", "startFrame": 0, "durationFrames": 90, "audioEffect": "ping"}, {"text": "承认自己“可能错了”并不是一种软弱，", "startFrame": 89, "durationFrames": 90, "audioEffect": "ping"}, {"text": "而是一个成年人最高级的智力觉醒。", "startFrame": 178, "durationFrames": 80, "audioEffect": null}]} anchors={[{"text": "可能错了", "showFrom": 0, "color": "red"}, {"text": "智力觉醒", "showFrom": 0, "color": "red"}]} totalDurationFrames={258} />
            </Sequence>
            <Sequence from={1357} durationInFrames={159}>
                <BWCenterFocus imageSrc={staticFile("images/test3/scene_4_8.png")} enterEffect="fadeIn" content={[{"text": "做自己大脑的主人，", "startFrame": 0, "durationFrames": 45, "audioEffect": "ping"}, {"text": "不被偏见裹挟，", "startFrame": 44, "durationFrames": 35, "audioEffect": "ping"}, {"text": "我们才能真正看清这个复杂的世界。", "startFrame": 79, "durationFrames": 80, "audioEffect": null}]} anchors={[{"text": "偏见", "showFrom": 1, "color": "#EF4444", "anim": "popIn"}]} totalDurationFrames={159} />
            </Sequence>
            <Audio src={staticFile("/audio/test3/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
