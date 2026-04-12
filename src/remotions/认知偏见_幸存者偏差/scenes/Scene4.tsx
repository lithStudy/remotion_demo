import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 召唤：核心心法
const SCENE_DURATION = 65 + 155 + 183 + 167 + 97 + 130;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={65}>
                <BWCenterFocus content={[{"text": "要想不被这种虚妄的神话毁掉人生，", "startFrame": 0, "durationFrames": 35}, {"text": "你最好记住这三个核心心法：", "startFrame": 35, "durationFrames": 30}]} totalDurationFrames={65} imageSrc={staticFile("大脑思考的抽象概念图")} enterEffect="fadeIn" anchors={[{"text": "核心心法", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={65} durationInFrames={155}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 30}, {"text": "寻找“沉默的证据”：", "startFrame": 30, "durationFrames": 30}, {"text": "看到一个诱人的成功案例时，", "startFrame": 60, "durationFrames": 30}, {"text": "先去搜索它的失败率，", "startFrame": 90, "durationFrames": 30}, {"text": "去看看那些失败的人都踩了哪些坑。", "startFrame": 120, "durationFrames": 35}]} totalDurationFrames={155} title={"寻找沉默的证据"} imageSrc={staticFile("一个侦探拿着放大镜在散落的碎片中寻找线索")} notes={[{"text": "关注失败案例", "showFrom": 1}, {"text": "避免重蹈覆辙", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={220} durationInFrames={183}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 30}, {"text": "剥离“运气的底色”：", "startFrame": 30, "durationFrames": 30}, {"text": "冷酷地分析成功者的背景。", "startFrame": 60, "durationFrames": 30}, {"text": "如果他的成功依赖于特定的时代、", "startFrame": 90, "durationFrames": 33}, {"text": "家境或极低的概率，", "startFrame": 123, "durationFrames": 30}, {"text": "那对你来说就毫无参考价值。", "startFrame": 153, "durationFrames": 30}]} totalDurationFrames={183} title={"剥离运气成分"} imageSrc={staticFile("一个戴着放大镜的人正在仔细观察一个奖杯，背景是一些模糊的骰子和彩票")} notes={[{"text": "分析成功者的背景", "showFrom": 2}, {"text": "看是否依赖特定条件", "showFrom": 3}, {"text": "不具参考价值", "showFrom": 5}]} anchors={[]} />
            </Sequence>
            <Sequence from={403} durationInFrames={167}>
                <BWMethodStack content={[{"text": "第三，", "startFrame": 0, "durationFrames": 30}, {"text": "建立“概率思维”：", "startFrame": 30, "durationFrames": 30}, {"text": "别被个别“黑天鹅”带偏了节奏。", "startFrame": 60, "durationFrames": 33}, {"text": "在这个世界上，", "startFrame": 93, "durationFrames": 30}, {"text": "常识和大概率事件才是普通人避坑的护身符。", "startFrame": 123, "durationFrames": 44}]} totalDurationFrames={167} title={"建立概率思维"} imageSrc={staticFile("一群人朝着不同的方向走，其中只有一条路通向山顶，大部分人都在山脚下徘徊的简笔画")} notes={[{"text": "别被黑天鹅带偏", "showFrom": 2}, {"text": "常识才是护身符", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={570} durationInFrames={97}>
                <BWCenterFocus content={[{"text": "在这个崇拜赢家的时代里，", "startFrame": 0, "durationFrames": 30}, {"text": "如果你不主动去推开聚光灯外的黑暗，", "startFrame": 30, "durationFrames": 37}, {"text": "你就永远无法看清脚下的路。", "startFrame": 67, "durationFrames": 30}]} totalDurationFrames={97} imageSrc={staticFile("聚光灯照亮黑暗道路的场景")} enterEffect="fadeIn" anchors={[{"text": "崇拜赢家", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "聚光灯外", "showFrom": 1, "color": "#000000", "anim": "slideUp", "audioEffect": null}]} />
            </Sequence>
            <Sequence from={667} durationInFrames={130}>
                <BWTextFocus content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 30}, {"text": "真正的清醒不是复刻别人的奇迹，", "startFrame": 30, "durationFrames": 33}, {"text": "而是认清概率后，", "startFrame": 63, "durationFrames": 30}, {"text": "依然有勇气选择那条胜算最高的正道。", "startFrame": 93, "durationFrames": 37}]} totalDurationFrames={130} coreSentence={["认清概率后，依然选择胜算最高的正道"]} coreSentenceAnchors={[{"coreSentenceAnchor": "胜算最高", "color": "#EF4444"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
