import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 解释可得性启发偏见
const SCENE_DURATION = 72 + 116 + 66 + 120 + 95 + 62 + 127 + 90;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={72}>
                <BWCenterFocus content={[{"text": "在心理学上，咱们这种容易被忽悠的现象，", "startFrame": 0, "durationFrames": 42}, {"text": "叫做“可得性启发”偏见。", "startFrame": 42, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "可得性启发", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": null}]} totalDurationFrames={72} />
            </Sequence>
            <Sequence from={72} durationInFrames={116}>
                <BWCenterFocus content={[{"text": "说人话就是：咱们的大脑其实特别偷懒，", "startFrame": 0, "durationFrames": 40}, {"text": "它在判断一件事常不常见时，", "startFrame": 40, "durationFrames": 30}, {"text": "完全取决于这件事在脑子里“好不好想起来”。", "startFrame": 70, "durationFrames": 46}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[{"text": "特别偷懒", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": null}, {"text": "好不好想起来", "showFrom": 2, "color": "#EF4444", "anim": "popIn", "audioEffect": null}]} totalDurationFrames={116} />
            </Sequence>
            <Sequence from={188} durationInFrames={66}>
                <BWCenterFocus content={[{"text": "因为你看过太多次耸人听闻的头条，", "startFrame": 0, "durationFrames": 35}, {"text": "极端画面深深印在了潜意识里。", "startFrame": 35, "durationFrames": 31}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={66} />
            </Sequence>
            <Sequence from={254} durationInFrames={120}>
                <BWCenterFocus content={[{"text": "等你真要买机票时，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑一检索，", "startFrame": 30, "durationFrames": 30}, {"text": "瞬间跳出无数空难画面，", "startFrame": 60, "durationFrames": 30}, {"text": "它就疯狂报警提示危险。", "startFrame": 90, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={374} durationInFrames={95}>
                <BWStatCompare content={[{"text": "但真实的数据是，", "startFrame": 0, "durationFrames": 30}, {"text": "飞机出事的概率，", "startFrame": 30, "durationFrames": 30}, {"text": "远比你骑电动车被撞的概率低得多。", "startFrame": 60, "durationFrames": 35}]} leftValue={1} rightValue={100000} leftLabel={"飞机事故概率"} rightLabel={"电动车事故概率"} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} anchors={[]} totalDurationFrames={95} />
            </Sequence>
            <Sequence from={469} durationInFrames={62}>
                <BWTextFocus content={[{"text": "咱们必须认清一个残酷的真相：", "startFrame": 0, "durationFrames": 31}, {"text": "容易想起来，绝不等于很常见。", "startFrame": 31, "durationFrames": 31}]} coreSentence={"容易想起来，绝不等于很常见"} anchors={[{"text": "残酷的真相", "showFrom": 0, "color": "#EF4444", "anim": "popIn", "audioEffect": "impact_thud"}, {"text": "容易想起来", "showFrom": 1, "color": "#000000", "anim": "highlight", "audioEffect": null}, {"text": "很常见", "showFrom": 1, "color": "#EF4444", "anim": "spring", "audioEffect": null}]} totalDurationFrames={62} />
            </Sequence>
            <Sequence from={531} durationInFrames={127}>
                <BWSplitCompare content={[{"text": "那些极端事件因为充满冲突和血腥，", "startFrame": 0, "durationFrames": 35}, {"text": "记忆点极强；", "startFrame": 35, "durationFrames": 30}, {"text": "而千万次平平无奇的安全起降，", "startFrame": 65, "durationFrames": 31}, {"text": "根本没资格进入你的记忆内存。", "startFrame": 96, "durationFrames": 31}]} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"极端事件"} rightLabel={"安全起降"} anchors={[]} totalDurationFrames={127} />
            </Sequence>
            <Sequence from={658} durationInFrames={90}>
                <BWCenterFocus content={[{"text": "咱们的直觉，", "startFrame": 0, "durationFrames": 30}, {"text": "就这样被媒体强行灌输的", "startFrame": 30, "durationFrames": 30}, {"text": "极端画面给劫持了。", "startFrame": 60, "durationFrames": 30}]} imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" anchors={[]} totalDurationFrames={90} />
            </Sequence>

        </AbsoluteFill>
    );
};
