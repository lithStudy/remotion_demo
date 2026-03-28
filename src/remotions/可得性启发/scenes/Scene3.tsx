import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 解释“可得性启发”偏见
const SCENE_DURATION = 90 + 150 + 186 + 70 + 62 + 127 + 90;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"可得性启发"} content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "咱们这种容易被忽悠的现象，", "startFrame": 30, "durationFrames": 30}, {"text": "叫做“可得性启发”偏见。", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={90} durationInFrames={150}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "说人话就是：", "startFrame": 0, "durationFrames": 30}, {"text": "咱们的大脑其实特别偷懒，", "startFrame": 30, "durationFrames": 30}, {"text": "它在判断一件事常不常见时，", "startFrame": 60, "durationFrames": 30}, {"text": "完全取决于这件事在脑子里", "startFrame": 90, "durationFrames": 30}, {"text": "“好不好想起来”。", "startFrame": 120, "durationFrames": 30}]} anchors={[]} totalDurationFrames={150} />
            </Sequence>
            <Sequence from={240} durationInFrames={186}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"新闻"} rightLabel={"空难"} content={[{"text": "因为你看过太多次耸人听闻的头条，", "startFrame": 0, "durationFrames": 35}, {"text": "极端画面深深印在了潜意识里。", "startFrame": 35, "durationFrames": 31}, {"text": "等你真要买机票时，", "startFrame": 66, "durationFrames": 30}, {"text": "大脑一检索，", "startFrame": 96, "durationFrames": 30}, {"text": "瞬间跳出无数空难画面，", "startFrame": 126, "durationFrames": 30}, {"text": "它就疯狂报警提示危险。", "startFrame": 156, "durationFrames": 30}]} anchors={[]} totalDurationFrames={186} />
            </Sequence>
            <Sequence from={426} durationInFrames={70}>
                <BWStatCompare leftValue={1} rightValue={1000000} leftLabel={"空难"} rightLabel={"车祸"} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} content={[{"text": "但真实的数据是，飞机出事的概率，", "startFrame": 0, "durationFrames": 35}, {"text": "远比你骑电动车被撞的概率低得多。", "startFrame": 35, "durationFrames": 35}]} anchors={[]} totalDurationFrames={70} />
            </Sequence>
            <Sequence from={496} durationInFrames={62}>
                <BWTextFocus content={[{"text": "咱们必须认清一个残酷的真相：", "startFrame": 0, "durationFrames": 31}, {"text": "容易想起来，绝不等于很常见。", "startFrame": 31, "durationFrames": 31}]} coreSentence={"容易想起来，绝不等于很常见。"} anchors={[]} totalDurationFrames={62} />
            </Sequence>
            <Sequence from={558} durationInFrames={127}>
                <BWSplitCompare content={[{"text": "那些极端事件因为充满冲突和血腥，", "startFrame": 0, "durationFrames": 35}, {"text": "记忆点极强；", "startFrame": 35, "durationFrames": 30}, {"text": "而千万次平平无奇的安全起降，", "startFrame": 65, "durationFrames": 31}, {"text": "根本没资格进入你的记忆内存。", "startFrame": 96, "durationFrames": 31}]} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"极端事件"} rightLabel={"安全起降"} anchors={[]} totalDurationFrames={127} />
            </Sequence>
            <Sequence from={685} durationInFrames={90}>
                <BWTextFocus content={[{"text": "咱们的直觉，", "startFrame": 0, "durationFrames": 30}, {"text": "就这样被媒体强行灌输的", "startFrame": 30, "durationFrames": 30}, {"text": "极端画面给劫持了。", "startFrame": 60, "durationFrames": 30}]} coreSentence={"直觉被媒体强行灌输的极端画面给劫持了"} anchors={[]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
