import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWMethodStack, BWTextFocus } from "../../../components";

// 对抗建议
const SCENE_DURATION = 163 + 318 + 93 + 390 + 92 + 382 + 226 + 308;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={163}>
                <BWCenterFocus content={[{"text": "要想不被这种自我毁灭的恐怖死循环毁掉人生，", "startFrame": 0, "durationFrames": 95}, {"text": "你最好记住这三个核心心法：", "startFrame": 94, "durationFrames": 68}]} totalDurationFrames={163} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_4_1.png")} enterEffect="fadeIn" anchors={[{"text": "核心心法", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={163} durationInFrames={318}>
                <BWMethodStack content={[{"text": "第一，植入“零基思考”模式：", "startFrame": 0, "durationFrames": 80}, {"text": "当你在泥潭中犹豫不决时，", "startFrame": 79, "durationFrames": 56}, {"text": "问自己一个问题：", "startFrame": 135, "durationFrames": 41}, {"text": "如果时间倒流，我现在什么都没投入，", "startFrame": 175, "durationFrames": 76}, {"text": "我还会选择开始这件破事吗？", "startFrame": 250, "durationFrames": 67}]} totalDurationFrames={318} title={"零基思考模式"} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_4_2.png")} notes={[{"text": "假设从头开始", "showFrom": 3}, {"text": "还会选择开始这件破事吗？", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={481} durationInFrames={93}>
                <BWTextFocus content={[{"text": "如果答案是否定的，", "startFrame": 0, "durationFrames": 39}, {"text": "那就立刻转身，快跑。", "startFrame": 38, "durationFrames": 55}]} totalDurationFrames={93} coreSentence={["快跑！！！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "快跑！！！", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={574} durationInFrames={390}>
                <BWMethodStack content={[{"text": "第二，建立“止损即止盈”的心智：", "startFrame": 0, "durationFrames": 86}, {"text": "永远不要把沉没的成本当成继续投入的理由。", "startFrame": 85, "durationFrames": 105}, {"text": "在这个残酷的世界上，", "startFrame": 189, "durationFrames": 45}, {"text": "真正的勇敢不是在错误的赛道上死磕，", "startFrame": 234, "durationFrames": 95}, {"text": "而是懂得挥刀斩乱麻。", "startFrame": 329, "durationFrames": 61}]} totalDurationFrames={390} title={"止损即止盈"} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_4_4.png")} notes={[{"text": "沉没成本不是继续投入的理由", "showFrom": 1}, {"text": "挥刀斩乱麻", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={964} durationInFrames={92}>
                <BWTextFocus content={[{"text": "能认栽，", "startFrame": 0, "durationFrames": 28}, {"text": "本身就是一种巨大的保底收益。", "startFrame": 27, "durationFrames": 65}]} totalDurationFrames={92} coreSentence={["认栽！！！"]} coreSentenceAnchors={[{"coreSentenceAnchor": "认栽！！！", "color": "#EF4444"}]} />
            </Sequence>
            <Sequence from={1056} durationInFrames={382}>
                <BWMethodStack content={[{"text": "第三，剥离“自我证明”的滤镜：", "startFrame": 0, "durationFrames": 77}, {"text": "坦然接受自己的失败，", "startFrame": 76, "durationFrames": 49}, {"text": "承认自己看错了一只股票、爱错了一个人。", "startFrame": 124, "durationFrames": 92}, {"text": "只有经受住损失的刺痛，", "startFrame": 216, "durationFrames": 58}, {"text": "你才能把紧盯过去的双眼，", "startFrame": 273, "durationFrames": 56}, {"text": "真正望向未来的天地。", "startFrame": 329, "durationFrames": 53}]} totalDurationFrames={382} title={"剥离自我证明"} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_4_7.png")} notes={[{"text": "坦然接受失败", "showFrom": 1}, {"text": "承认看错", "showFrom": 2}, {"text": "望向未来", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={1438} durationInFrames={226}>
                <BWCenterFocus content={[{"text": "在这个总喜欢教人“永不言弃”的时代里，", "startFrame": 0, "durationFrames": 77}, {"text": "如果你不主动去割掉那些正在溃烂的尾巴，", "startFrame": 76, "durationFrames": 88}, {"text": "你就会被一点点拖进坟墓。", "startFrame": 163, "durationFrames": 63}]} totalDurationFrames={226} imageSrc={staticFile("images/认知偏见_沉没成本谬误/scene_4_9.png")} enterEffect="fadeIn" anchors={[{"text": "割掉正在溃烂的尾巴", "showFrom": 0, "color": "#EF4444", "anim": "highlight", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={1664} durationInFrames={308}>
                <BWTextFocus content={[{"text": "永远记住，", "startFrame": 0, "durationFrames": 32}, {"text": "真正的清醒绝不是在无望的执念中瞎熬岁月，", "startFrame": 31, "durationFrames": 110}, {"text": "而是认清现实后，", "startFrame": 140, "durationFrames": 42}, {"text": "依然有勇气砍掉沉没成本，", "startFrame": 182, "durationFrames": 62}, {"text": "轻装上阵走向明天。", "startFrame": 243, "durationFrames": 65}]} totalDurationFrames={308} coreSentence={["绝不在无望的执念中瞎熬岁月", "认清现实，轻装上阵走向明天。"]} coreSentenceAnchors={[{"coreSentenceAnchor": "瞎熬岁月", "color": "#EF4444"}, {"coreSentenceAnchor": "轻装上阵", "color": "#EF4444"}]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_沉没成本谬误/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
