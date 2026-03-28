import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWSplitCompare, BWTextFocus } from "../../../components";

// 可得性启发
const SCENE_DURATION = 183 + 218 + 229;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={183}>
                <BWCenterFocus imageSrc={staticFile("images/template/scene1_1.png")} enterEffect="breathe" content={[{"text": "在心理学上，咱们这种容易被忽悠的现象，叫做“可得性启发”偏见。说人话就是：咱们的大脑其实特别偷懒，它在判断一件事常不常见时，完全取决于这件事在脑子里“好不好想起来”。", "startFrame": 0, "durationFrames": 183}]} anchors={[]} totalDurationFrames={183} />
            </Sequence>
            <Sequence from={183} durationInFrames={218}>
                <BWSplitCompare content={[{"text": "因为你看过太多次耸人听闻的头条，极端画面深深印在了潜意识里。等你真要买机票时，大脑一检索，瞬间跳出无数空难画面，它就疯狂报警提示危险。但真实的数据是，飞机出事的概率，远比你骑电动车被撞的概率低得多。", "startFrame": 0, "durationFrames": 218}]} leftSrc={staticFile("images/template/scene1_1.png")} rightSrc={staticFile("images/template/scene1_1.png")} leftLabel={"空难"} rightLabel={"骑车"} anchors={[]} totalDurationFrames={218} />
            </Sequence>
            <Sequence from={401} durationInFrames={229}>
                <BWTextFocus content={[{"text": "咱们必须认清一个残酷的真相：容易想起来，绝不等于很常见。那些极端事件因为充满冲突和血腥，记忆点极强；而千万次平平无奇的安全起降，根本没资格进入你的记忆内存。咱们的直觉，就这样被媒体强行灌输的极端画面给劫持了。", "startFrame": 0, "durationFrames": 229}]} coreSentence={"容易想起来，绝不等于很常见"} anchors={[]} totalDurationFrames={229} />
            </Sequence>

        </AbsoluteFill>
    );
};
