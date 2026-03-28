import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWConceptCard, BWSplitCompare, BWStatCompare, BWTextFocus } from "../../../components";

// 可得性启发偏见
const SCENE_DURATION = 90 + 144 + 66 + 120 + 95 + 74 + 127 + 74;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <BWConceptCard imageSrc={staticFile("images/template/scene1_1.png")} conceptName={"可得性启发"} content={[{"text": "在心理学上，", "startFrame": 0, "durationFrames": 30}, {"text": "咱们这种容易被忽悠的现象，", "startFrame": 30, "durationFrames": 30}, {"text": "叫做“可得性启发”偏见。", "startFrame": 60, "durationFrames": 30}]} anchors={[]} totalDurationFrames={90} />
            </Sequence>
            <Sequence from={90} durationInFrames={144}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} content={[{"text": "说人话就是：咱们的大脑其实特别偷懒，", "startFrame": 0, "durationFrames": 40}, {"text": "它在判断一件事常不常见时，", "startFrame": 40, "durationFrames": 30}, {"text": "完全取决于这件事在脑子里“好不好想起来”", "startFrame": 70, "durationFrames": 44}, {"text": "。", "startFrame": 114, "durationFrames": 30}]} anchors={[]} totalDurationFrames={144} />
            </Sequence>
            <Sequence from={234} durationInFrames={66}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} content={[{"text": "因为你看过太多次耸人听闻的头条，", "startFrame": 0, "durationFrames": 35}, {"text": "极端画面深深印在了潜意识里。", "startFrame": 35, "durationFrames": 31}]} anchors={[]} totalDurationFrames={66} />
            </Sequence>
            <Sequence from={300} durationInFrames={120}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="slideLeft" content={[{"text": "等你真要买机票时，", "startFrame": 0, "durationFrames": 30}, {"text": "大脑一检索，", "startFrame": 30, "durationFrames": 30}, {"text": "瞬间跳出无数空难画面，", "startFrame": 60, "durationFrames": 30}, {"text": "它就疯狂报警提示危险。", "startFrame": 90, "durationFrames": 30}]} anchors={[]} totalDurationFrames={120} />
            </Sequence>
            <Sequence from={420} durationInFrames={95}>
                <BWStatCompare leftLabel={"飞机"} rightLabel={"电动车"} leftValue={1} rightValue={100} content={[{"text": "但真实的数据是，", "startFrame": 0, "durationFrames": 30}, {"text": "飞机出事的概率，", "startFrame": 30, "durationFrames": 30}, {"text": "远比你骑电动车被撞的概率低得多。", "startFrame": 60, "durationFrames": 35}]} anchors={[]} totalDurationFrames={95} />
            </Sequence>
            <Sequence from={515} durationInFrames={74}>
                <BWTextFocus coreSentence={"认清残酷真相：容易想起≠很常见"} anchors={[{"text": "残酷真相", "showFrom": 0, "color": "#EF4444", "anim": null, "audioEffect": null}]} content={[{"text": "咱们必须认清一个残酷的真相：容易想起来，", "startFrame": 0, "durationFrames": 44}, {"text": "绝不等于很常见。", "startFrame": 44, "durationFrames": 30}]} totalDurationFrames={74} />
            </Sequence>
            <Sequence from={589} durationInFrames={127}>
                <BWSplitCompare leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"极端事件"} rightLabel={"安全事件"} content={[{"text": "那些极端事件因为充满冲突和血腥，", "startFrame": 0, "durationFrames": 35}, {"text": "记忆点极强；", "startFrame": 35, "durationFrames": 30}, {"text": "而千万次平平无奇的安全起降，", "startFrame": 65, "durationFrames": 31}, {"text": "根本没资格进入你的记忆内存。", "startFrame": 96, "durationFrames": 31}]} anchors={[]} totalDurationFrames={127} />
            </Sequence>
            <Sequence from={716} durationInFrames={74}>
                <BWTextFocus coreSentence={"直觉被媒体劫持"} content={[{"text": "咱们的直觉，", "startFrame": 0, "durationFrames": 30}, {"text": "就这样被媒体强行灌输的极端画面给劫持了。", "startFrame": 30, "durationFrames": 44}]} anchors={[]} totalDurationFrames={74} />
            </Sequence>

        </AbsoluteFill>
    );
};
