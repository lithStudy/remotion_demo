import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 召唤：核心心法
const SCENE_DURATION = 149 + 260 + 311 + 262;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWCenterFocus content={[{"text": "要想不被这种虚妄的神话毁掉人生，", "startFrame": 0, "durationFrames": 81}, {"text": "你最好记住这三个核心心法：", "startFrame": 80, "durationFrames": 68}]} totalDurationFrames={149} imageSrc={staticFile("images/test/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心心法", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={149} durationInFrames={260}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 18}, {"text": "寻找“沉默的证据”：", "startFrame": 17, "durationFrames": 52}, {"text": "看到一个诱人的成功案例时，", "startFrame": 68, "durationFrames": 59}, {"text": "先去搜索它的失败率，", "startFrame": 127, "durationFrames": 54}, {"text": "去看看那些失败的人都踩了哪些坑。", "startFrame": 181, "durationFrames": 79}]} totalDurationFrames={260} title={"寻找沉默的证据"} imageSrc={staticFile("images/test/scene_4_2.png")} notes={[{"text": "警惕诱人的成功案例", "showFrom": 2}, {"text": "更要搜索它的失败率", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={409} durationInFrames={311}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 14}, {"text": "剥离“运气的底色”：", "startFrame": 13, "durationFrames": 52}, {"text": "冷酷地分析成功者的背景。", "startFrame": 64, "durationFrames": 57}, {"text": "如果他的成功依赖于特定的时代、", "startFrame": 120, "durationFrames": 68}, {"text": "家境或极低的概率，", "startFrame": 188, "durationFrames": 47}, {"text": "那对你来说就毫无参考价值。", "startFrame": 235, "durationFrames": 76}]} totalDurationFrames={311} title={"剥离“运气”"} imageSrc={staticFile("images/test/scene_4_3.png")} notes={[{"text": "分析成功者背景", "showFrom": 2}, {"text": "辨别时代、家境等因素", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={720} durationInFrames={262}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 19}, {"text": "建立“概率思维”：", "startFrame": 18, "durationFrames": 43}, {"text": "别被个别“黑天鹅”带偏了节奏。", "startFrame": 61, "durationFrames": 70}, {"text": "在这个世界上，", "startFrame": 130, "durationFrames": 30}, {"text": "常识和大概率事件才是普通人避坑的护身符。", "startFrame": 160, "durationFrames": 102}]} totalDurationFrames={262} title={"建立概率思维"} imageSrc={staticFile("images/test/scene_4_4.png")} notes={[{"text": "别被个别现象带偏", "showFrom": 2}, {"text": "常识才是护身符", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Audio src={staticFile("/audio/test/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
