import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWCognitiveShift, BWConceptCard, BWStatCompare } from "../../../components";

// 可得性启发偏见
const SCENE_DURATION = 90 + 136 + 66 + 120 + 95 + 91 + 127 + 74;

export const calculateScene2Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene2: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWConceptCard content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "咱们这种容易被忽悠的现象，", "startFrame": 30, "durationFrames": 30}, {"text": "叫做“可得性启发”偏见。", "startFrame": 60, "durationFrames": 30}]} totalDurationFrames={90} imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"可得性启发"} anchors={[]} />
            </Sequence>
            <Sequence from={90} durationInFrames={136}>
                <BWCenterFocus content={[{"text": "说人话就是：", "startFrame": 0, "durationFrames": 30}, {"text": "咱们的大脑其实特别偷懒，", "startFrame": 30, "durationFrames": 30}, {"text": "它在判断一件事常不常见时，", "startFrame": 60, "durationFrames": 30}, {"text": "完全取决于这件事在脑子里“好不好想起来”。", "startFrame": 90, "durationFrames": 46}]} totalDurationFrames={136} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={226} durationInFrames={66}>
                <BWCenterFocus content={[{"text": "因为你看过太多次耸人听闻的头条，", "startFrame": 0, "durationFrames": 35}, {"text": "极端画面深深印在了潜意识里。", "startFrame": 35, "durationFrames": 31}]} totalDurationFrames={66} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={292} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "等你真要买机票时，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑一检索，", "startFrame": 30, "durationFrames": 30}, {"text": "瞬间跳出无数空难画面，", "startFrame": 60, "durationFrames": 30}, {"text": "它就疯狂报警提示危险。", "startFrame": 90, "durationFrames": 30}]} totalDurationFrames={120} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideBottom" anchors={[]} />
            </Sequence>
            <Sequence from={412} durationInFrames={95}>
                <BWStatCompare content={[{"text": "但真实的数据是，", "startFrame": 0, "durationFrames": 30}, {"text": "飞机出事的概率，", "startFrame": 30, "durationFrames": 30}, {"text": "远比你骑电动车被撞的概率低得多。", "startFrame": 60, "durationFrames": 35}]} totalDurationFrames={95} leftValue={1} rightValue={1000000} leftLabel={"飞机出事"} rightLabel={"电动车事故"} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} anchors={[]} />
            </Sequence>
            <Sequence from={507} durationInFrames={91}>
                <BWCognitiveShift content={[{"text": "咱们必须认清一个残酷的真相：", "startFrame": 0, "durationFrames": 31}, {"text": "容易想起来，", "startFrame": 31, "durationFrames": 30}, {"text": "绝不等于很常见。", "startFrame": 61, "durationFrames": 30}]} totalDurationFrames={91} notText={"容易想起来"} butText={"很常见"} butSrc={staticFile("images/template/scene1_1.png")} notContentIndex={1} butContentIndex={2} anchors={[]} />
            </Sequence>
            <Sequence from={598} durationInFrames={127}>
                <BWCenterFocus content={[{"text": "那些极端事件因为充满冲突和血腥，", "startFrame": 0, "durationFrames": 35}, {"text": "记忆点极强；", "startFrame": 35, "durationFrames": 30}, {"text": "而千万次平平无奇的安全起降，", "startFrame": 65, "durationFrames": 31}, {"text": "根本没资格进入你的记忆内存。", "startFrame": 96, "durationFrames": 31}]} totalDurationFrames={127} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} />
            </Sequence>
            <Sequence from={725} durationInFrames={74}>
                <BWCenterFocus content={[{"text": "咱们的直觉，", "startFrame": 0, "durationFrames": 30}, {"text": "就这样被媒体强行灌输的极端画面给劫持了。", "startFrame": 30, "durationFrames": 44}]} totalDurationFrames={74} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="fadeIn" anchors={[]} />
            </Sequence>

        </AbsoluteFill>
    );
};
