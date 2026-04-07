import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 剖析：生活实例
const SCENE_DURATION = 103 + 269 + 257 + 252 + 192;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={103}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 22}, {"text": "后视偏见的陷阱在生活中无处不在：", "startFrame": 21, "durationFrames": 81}]} totalDurationFrames={103} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_1.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={103} durationInFrames={269}>
                <BWCenterFocus content={[{"text": "- 职场复盘时：", "startFrame": 0, "durationFrames": 41}, {"text": "项目搞砸了，", "startFrame": 40, "durationFrames": 34}, {"text": "领导拍着桌子说“我当初就知道这方案不行”。", "startFrame": 74, "durationFrames": 94}, {"text": "可当方案递上去时，", "startFrame": 168, "durationFrames": 47}, {"text": "他明明也点了点头。", "startFrame": 214, "durationFrames": 54}]} totalDurationFrames={269} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_2.png")} enterEffect="slideBottom" anchors={[{"text": "职场复盘", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "马后炮", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={372} durationInFrames={257}>
                <BWCenterFocus content={[{"text": "- 恋爱吵架时：", "startFrame": 0, "durationFrames": 34}, {"text": "对方指着你的鼻子说“我第一眼看你就觉得你靠不住”。", "startFrame": 33, "durationFrames": 95}, {"text": "如果真是这样，", "startFrame": 128, "durationFrames": 41}, {"text": "当初那场浪漫的求婚又是演给谁看的？", "startFrame": 168, "durationFrames": 89}]} totalDurationFrames={257} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_3.png")} enterEffect="slideBottom" anchors={[{"text": "靠不住", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "浪漫求婚", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={629} durationInFrames={252}>
                <BWCenterFocus content={[{"text": "- 指责受害者时：", "startFrame": 0, "durationFrames": 52}, {"text": "看到别人被骗或遭遇意外，", "startFrame": 51, "durationFrames": 70}, {"text": "评论区总有人说“这种套路也能上当？", "startFrame": 121, "durationFrames": 88}, {"text": "换我早就识破了”。", "startFrame": 208, "durationFrames": 44}]} totalDurationFrames={252} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "指责受害者", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={881} durationInFrames={192}>
                <BWCenterFocus content={[{"text": "这种上帝视角，", "startFrame": 0, "durationFrames": 40}, {"text": "不过是利用已知结果在他人伤口上撒盐，", "startFrame": 39, "durationFrames": 92}, {"text": "以此换取一点虚妄的安全感。", "startFrame": 130, "durationFrames": 61}]} totalDurationFrames={192} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "伤口撒盐", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "安全感", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_后视偏见/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
