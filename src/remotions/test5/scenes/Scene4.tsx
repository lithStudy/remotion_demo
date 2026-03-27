import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMultiImage, BWTextFocus } from "../../../components";

// 提供方法：应对确认偏误的建议
const SCENE_DURATION = 103 + 80 + 219 + 133 + 184;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "为了不让自己变成算法的傀儡，", "startFrame": 0, "durationFrames": 31}, {"text": "下次上网冲浪，", "startFrame": 31, "durationFrames": 30}, {"text": "我建议大家在心里备好这把“防身武器”：", "startFrame": 61, "durationFrames": 42}]} anchors={[]} totalDurationFrames={103} />
            </Sequence>
            <Sequence from={103} durationInFrames={80}>
                <BWMultiImage content={[{"text": "反向搜索法：当你极其认同某个观点时，", "startFrame": 0, "durationFrames": 40}, {"text": "强迫自己去搜一下反对这个观点的理由。", "startFrame": 40, "durationFrames": 40}]} groups={[{"image": {"src": "放大镜简笔画图标"}, "anchor": {"text": "反向搜索", "color": "#000000", "anim": "highlight", "audioEffect": "ping"}}]} images={[{ src: staticFile("images/template/scene1_1.png") }]} anchors={[{"text": "反向搜索", "showFrom": 0, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} totalDurationFrames={80} />
            </Sequence>
            <Sequence from={183} durationInFrames={219}>
                <BWMultiImage content={[{"text": "警惕“爽感”：", "startFrame": 0, "durationFrames": 30}, {"text": "如果一段文字让你读完觉得“太解气了、说得太对了”，", "startFrame": 30, "durationFrames": 55}, {"text": "这时候一定要停下来。", "startFrame": 85, "durationFrames": 30}, {"text": "因为能让你瞬间产生巨大爽感的东西，", "startFrame": 115, "durationFrames": 37}, {"text": "往往不是真相，", "startFrame": 152, "durationFrames": 30}, {"text": "而是针对你“确认偏误”定制的诱饵。", "startFrame": 182, "durationFrames": 37}]} groups={[{"image": {"src": "警惕的表情图标"}, "anchor": {"text": "爽感", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}}, {"image": {"src": "停下的手势图标"}, "anchor": {"text": "停下来", "color": "#EF4444", "anim": "spring"}}, {"image": {"src": "钓鱼的图标"}, "anchor": {"text": "诱饵", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}}]} images={[{ src: staticFile("images/template/scene1_1.png") }, { src: staticFile("images/template/scene1_1.png") }, { src: staticFile("images/template/scene1_1.png") }]} anchors={[{"text": "爽感", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "停下来", "showFrom": 2, "color": "#EF4444", "anim": "spring", "audioEffect": null}, {"text": "诱饵", "showFrom": 5, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={219} />
            </Sequence>
            <Sequence from={402} durationInFrames={133}>
                <BWMultiImage content={[{"text": "问自己一个问题：“如果我是错的，", "startFrame": 0, "durationFrames": 35}, {"text": "会有什么证据能说服我？”", "startFrame": 35, "durationFrames": 30}, {"text": "如果你发现没有任何证据能说服你，", "startFrame": 65, "durationFrames": 35}, {"text": "那说明你已经掉进了偏见的陷阱。", "startFrame": 100, "durationFrames": 33}]} groups={[{"image": {"src": "问号表情符号"}, "anchor": {"text": "我是错的", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}}, {"image": {"src": "证据放大镜图标"}, "anchor": {"text": "说服", "color": "#000000", "anim": "spring"}}, {"image": {"src": "陷阱简笔画图标"}, "anchor": {"text": "偏见的陷阱", "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}}]} images={[{ src: staticFile("images/template/scene1_1.png") }, { src: staticFile("images/template/scene1_1.png") }, { src: staticFile("images/template/scene1_1.png") }]} anchors={[{"text": "我是错的", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "说服", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": null}, {"text": "偏见的陷阱", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={133} />
            </Sequence>
            <Sequence from={535} durationInFrames={184}>
                <BWTextFocus content={[{"text": "兄弟姐妹们，在这个套路满天飞的时代，承认自己“可能错了”并不是一种软弱，", "startFrame": 0, "durationFrames": 79}, {"text": "而是一个成年人最高级的智力觉醒。做自己大脑的主人，不被偏见裹挟，", "startFrame": 79, "durationFrames": 70}, {"text": "我们才能真正看清这个复杂的世界。", "startFrame": 149, "durationFrames": 35}]} coreSentence={"承认自己“可能错了”并不是一种软弱"} anchors={[{"text": "可能错了", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}]} totalDurationFrames={184} />
            </Sequence>

        </AbsoluteFill>
    );
};
