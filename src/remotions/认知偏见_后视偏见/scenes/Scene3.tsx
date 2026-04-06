import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 剖析：生活场景
const SCENE_DURATION = 65 + 166 + 150 + 227;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "实际上，", "startFrame": 0, "durationFrames": 30}, {"text": "后视偏见的陷阱在生活中无处不在：", "startFrame": 30, "durationFrames": 35}]} totalDurationFrames={65} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "后视偏见", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={65} durationInFrames={166}>
                <BWCenterFocus content={[{"text": "- 职场复盘时：", "startFrame": 0, "durationFrames": 30}, {"text": "项目搞砸了，", "startFrame": 30, "durationFrames": 30}, {"text": "领导拍着桌子说“我当初就知道这方案不行”。", "startFrame": 60, "durationFrames": 46}, {"text": "可当方案递上去时，", "startFrame": 106, "durationFrames": 30}, {"text": "他明明也点了点头。", "startFrame": 136, "durationFrames": 30}]} totalDurationFrames={166} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "职场复盘", "showFrom": 0, "color": "#000000", "anim": "slideUp", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={231} durationInFrames={150}>
                <BWCenterFocus content={[{"text": "- 恋爱吵架时：", "startFrame": 0, "durationFrames": 30}, {"text": "对方指着你的鼻子说“我第一眼看你就觉得你靠不住”。", "startFrame": 30, "durationFrames": 55}, {"text": "如果真是这样，", "startFrame": 85, "durationFrames": 30}, {"text": "当初那场浪漫的求婚又是演给谁看？", "startFrame": 115, "durationFrames": 35}]} totalDurationFrames={150} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "恋爱吵架", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}, {"text": "第一眼", "showFrom": 1, "color": "#000000", "anim": "spring", "audioEffect": "ping"}, {"text": "求婚", "showFrom": 3, "color": "#EF4444", "anim": "popIn", "audioEffect": "woosh"}]} />
            </Sequence>
            <Sequence from={381} durationInFrames={227}>
                <BWCenterFocus content={[{"text": "- 指责受害者时：", "startFrame": 0, "durationFrames": 30}, {"text": "看到别人被骗或遭遇意外，", "startFrame": 30, "durationFrames": 30}, {"text": "评论区总有人说“这种套路也能上当？", "startFrame": 60, "durationFrames": 37}, {"text": "换我早就识破了”。", "startFrame": 97, "durationFrames": 30}, {"text": "这种上帝视角，", "startFrame": 127, "durationFrames": 30}, {"text": "不过是利用已知结果在他人伤口上撒盐，", "startFrame": 157, "durationFrames": 40}, {"text": "以此换取一点虚妄的安全感。", "startFrame": 197, "durationFrames": 30}]} totalDurationFrames={227} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[{"text": "上帝视角", "showFrom": 4, "color": "#EF4444", "anim": "highlight", "audioEffect": "impact_thud"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
