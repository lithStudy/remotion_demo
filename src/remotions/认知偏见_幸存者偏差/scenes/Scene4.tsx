import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：核心心法
const SCENE_DURATION = 147 + 254 + 315 + 291 + 208 + 185;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={147}>
                <BWCenterFocus content={[{"text": "要想不被这种虚妄的神话毁掉人生，", "startFrame": 0, "durationFrames": 78}, {"text": "你最好记住这三个核心心法：", "startFrame": 77, "durationFrames": 69}]} totalDurationFrames={147} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心心法", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={147} durationInFrames={254}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 21}, {"text": "寻找“沉默的证据”：", "startFrame": 20, "durationFrames": 57}, {"text": "看到一个诱人的成功案例时，", "startFrame": 77, "durationFrames": 54}, {"text": "先去搜索它的失败率，", "startFrame": 130, "durationFrames": 46}, {"text": "去看看那些失败的人都踩了哪些坑。", "startFrame": 176, "durationFrames": 77}]} totalDurationFrames={254} title={"寻找沉默的证据"} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_4_2.png")} notes={[{"text": "关注失败案例", "showFrom": 1}, {"text": "避免重蹈覆辙", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={401} durationInFrames={315}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 18}, {"text": "剥离“运气的底色”：", "startFrame": 17, "durationFrames": 44}, {"text": "冷酷地分析成功者的背景。", "startFrame": 61, "durationFrames": 54}, {"text": "如果他的成功依赖于特定的时代、", "startFrame": 114, "durationFrames": 77}, {"text": "家境或极低的概率，", "startFrame": 190, "durationFrames": 51}, {"text": "那对你来说就毫无参考价值。", "startFrame": 240, "durationFrames": 75}]} totalDurationFrames={315} title={"剥离运气成分"} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_4_3.png")} notes={[{"text": "分析成功者的背景", "showFrom": 2}, {"text": "看是否依赖特定条件", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={716} durationInFrames={291}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 20}, {"text": "建立“概率思维”：", "startFrame": 19, "durationFrames": 44}, {"text": "别被个别“黑天鹅”带偏了节奏。", "startFrame": 63, "durationFrames": 87}, {"text": "在这个世界上，", "startFrame": 149, "durationFrames": 32}, {"text": "常识和大概率事件才是普通人避坑的护身符。", "startFrame": 181, "durationFrames": 110}]} totalDurationFrames={291} title={"建立概率思维"} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_4_4.png")} notes={[{"text": "别被黑天鹅带偏", "showFrom": 2}, {"text": "常识才是护身符", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1007} durationInFrames={208}>
                <BWCenterFocus content={[{"text": "在这个崇拜赢家的时代里，", "startFrame": 0, "durationFrames": 58}, {"text": "如果你不主动去推开聚光灯外的黑暗，", "startFrame": 57, "durationFrames": 83}, {"text": "你就永远无法看清脚下的路。", "startFrame": 140, "durationFrames": 67}]} totalDurationFrames={208} imageSrc={staticFile("images/认知偏见_幸存者偏差/scene_4_5.png")} enterEffect="fadeIn" anchors={[{"text": "聚光灯外的黑暗", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={1215} durationInFrames={185}>
                <BWTextFocus content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 30}, {"text": "多看一眼没站上台的那群人，", "startFrame": 29, "durationFrames": 71}, {"text": "分母才是现实，", "startFrame": 100, "durationFrames": 42}, {"text": "传奇只是样本。", "startFrame": 141, "durationFrames": 44}]} totalDurationFrames={185} coreSentence={["分母才是现实，传奇只是样本"]} coreSentenceAnchors={[{"coreSentenceAnchor": "现实", "color": "#EF4444"}, {"coreSentenceAnchor": "样本", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_幸存者偏差/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
