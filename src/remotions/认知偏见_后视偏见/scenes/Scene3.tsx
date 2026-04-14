import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 剖析：生活实例
const SCENE_DURATION = 105 + 266 + 275 + 270 + 196;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={105}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 21}, {"text": "后视偏见的陷阱在生活中无处不在：", "startFrame": 20, "durationFrames": 84}]} totalDurationFrames={105} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_1.png")} enterEffect="fadeIn" />
            </Sequence>
            <Sequence from={105} durationInFrames={266}>
                <BWCenterFocus content={[{"text": "- 职场复盘时：", "startFrame": 0, "durationFrames": 37}, {"text": "项目搞砸了，", "startFrame": 36, "durationFrames": 31}, {"text": "领导拍着桌子说“我当初就知道这方案不行”。", "startFrame": 66, "durationFrames": 101}, {"text": "可当方案递上去时，", "startFrame": 166, "durationFrames": 50}, {"text": "他明明也点了点头。", "startFrame": 216, "durationFrames": 50}]} totalDurationFrames={266} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_2.png")} enterEffect="slideBottom" anchors={[{"text": "职场复盘", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "马后炮", "showFrom": 2, "color": "#000000", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={371} durationInFrames={275}>
                <BWCenterFocus content={[{"text": "- 恋爱吵架时：", "startFrame": 0, "durationFrames": 33}, {"text": "对方指着你的鼻子说“我第一眼看你就觉得你靠不住”。", "startFrame": 32, "durationFrames": 104}, {"text": "如果真是这样，", "startFrame": 135, "durationFrames": 38}, {"text": "当初那场浪漫的求婚又是演给谁看的？", "startFrame": 173, "durationFrames": 102}]} totalDurationFrames={275} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_3.png")} enterEffect="slideBottom" anchors={[{"text": "靠不住", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "浪漫求婚", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={646} durationInFrames={270}>
                <BWCenterFocus content={[{"text": "- 指责受害者时：", "startFrame": 0, "durationFrames": 43}, {"text": "看到别人被骗或遭遇意外，", "startFrame": 42, "durationFrames": 62}, {"text": "评论区总有人说“这种套路也能上当？", "startFrame": 103, "durationFrames": 107}, {"text": "换我早就识破了”。", "startFrame": 210, "durationFrames": 59}]} totalDurationFrames={270} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_4.png")} enterEffect="fadeIn" anchors={[{"text": "指责受害者", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>
            <Sequence from={916} durationInFrames={196}>
                <BWCenterFocus content={[{"text": "这种上帝视角，", "startFrame": 0, "durationFrames": 44}, {"text": "不过是利用已知结果在他人伤口上撒盐，", "startFrame": 43, "durationFrames": 89}, {"text": "以此换取一点虚妄的安全感。", "startFrame": 132, "durationFrames": 64}]} totalDurationFrames={196} imageSrc={staticFile("images/认知偏见_后视偏见/scene_3_5.png")} enterEffect="fadeIn" anchors={[{"text": "伤口撒盐", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "安全感", "showFrom": 2, "color": "#000000", "anim": "popIn", "audioEffect": null}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_后视偏见/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
