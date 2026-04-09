import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack } from "../../../components";

// 召唤：核心心法
const SCENE_DURATION = 65 + 155 + 183 + 167;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "要想不被这种虚妄的神话毁掉人生，", "startFrame": 0, "durationFrames": 35}, {"text": "你最好记住这三个核心心法：", "startFrame": 35, "durationFrames": 30}]} totalDurationFrames={65} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心心法", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={65} durationInFrames={155}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "寻找“沉默的证据”：", "startFrame": 30, "durationFrames": 30}, {"text": "看到一个诱人的成功案例时，", "startFrame": 60, "durationFrames": 30}, {"text": "先去搜索它的失败率，", "startFrame": 90, "durationFrames": 30}, {"text": "去看看那些失败的人都踩了哪些坑。", "startFrame": 120, "durationFrames": 35}]} totalDurationFrames={155} title={"寻找沉默的证据"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "警惕诱人的成功案例", "showFrom": 2}, {"text": "更要搜索它的失败率", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={220} durationInFrames={183}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "剥离“运气的底色”：", "startFrame": 30, "durationFrames": 30}, {"text": "冷酷地分析成功者的背景。", "startFrame": 60, "durationFrames": 30}, {"text": "如果他的成功依赖于特定的时代、", "startFrame": 90, "durationFrames": 33}, {"text": "家境或极低的概率，", "startFrame": 123, "durationFrames": 30}, {"text": "那对你来说就毫无参考价值。", "startFrame": 153, "durationFrames": 30}]} totalDurationFrames={183} title={"剥离“运气”"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "分析成功者背景", "showFrom": 2}, {"text": "辨别时代、家境等因素", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={403} durationInFrames={167}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 30}, {"text": "建立“概率思维”：", "startFrame": 30, "durationFrames": 30}, {"text": "别被个别“黑天鹅”带偏了节奏。", "startFrame": 60, "durationFrames": 33}, {"text": "在这个世界上，", "startFrame": 93, "durationFrames": 30}, {"text": "常识和大概率事件才是普通人避坑的护身符。", "startFrame": 123, "durationFrames": 44}]} totalDurationFrames={167} title={"建立概率思维"} imageSrc={staticFile("images/template/scene1_1.png")} notes={[{"text": "别被个别现象带偏", "showFrom": 2}, {"text": "常识才是护身符", "showFrom": 4}]} anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
