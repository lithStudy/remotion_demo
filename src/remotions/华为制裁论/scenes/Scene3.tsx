import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMethodStack, BWSplitCompare, BWTreeDiagram } from "../../../components";

// 剖析：惩罚性制裁
const SCENE_DURATION = 294 + 960 + 297;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={294}>
                <BWTreeDiagram content={[{"text": "先说“被制裁”。", "startFrame": 0, "durationFrames": 40}, {"text": "制裁的目的也分两种：", "startFrame": 39, "durationFrames": 44}, {"text": "一种是惩罚性的，就是你干了坏事我用制裁惩罚了", "startFrame": 82, "durationFrames": 113}, {"text": "一种是制约性的，就是你太牛了我要限制你。", "startFrame": 195, "durationFrames": 98}]} totalDurationFrames={294} root={{ label: "制裁", showFrom: 0, children: [{ label: "惩罚性", showFrom: 2 }, { label: "制约性", showFrom: 3 }] }} />
            </Sequence>
            <Sequence from={294} durationInFrames={960}>
                <BWMethodStack content={[{"text": "惩罚性，", "startFrame": 0, "durationFrames": 24}, {"text": "是因为华为在美国做生意，", "startFrame": 24, "durationFrames": 54}, {"text": "却违反了美国法律。", "startFrame": 77, "durationFrames": 43}, {"text": "最主要的有下面两件事：", "startFrame": 120, "durationFrames": 59}, {"text": "第一，", "startFrame": 179, "durationFrames": 18}, {"text": "星通事件，", "startFrame": 196, "durationFrames": 31}, {"text": "华为通过“星通”公司，", "startFrame": 227, "durationFrames": 57}, {"text": "向当时被美国制裁的伊朗转卖禁售的设备。", "startFrame": 283, "durationFrames": 103}, {"text": "尽管华为不承认，", "startFrame": 386, "durationFrames": 42}, {"text": "但“星通”的员工确实是使用的华为工牌和邮箱。", "startFrame": 428, "durationFrames": 105}, {"text": "第二，", "startFrame": 532, "durationFrames": 16}, {"text": "孟女士PPT事件，", "startFrame": 547, "durationFrames": 53}, {"text": "通过向汇丰银行提供虚假或误导性的信息，", "startFrame": 600, "durationFrames": 110}, {"text": "来为华为及星通，", "startFrame": 709, "durationFrames": 41}, {"text": "处理了数百万美元的伊朗方面的清算交易。", "startFrame": 749, "durationFrames": 98}, {"text": "这是孟女士在《延期起诉协议》中签字确认过的。", "startFrame": 847, "durationFrames": 113}]} totalDurationFrames={960} title={"惩罚性制裁"} imageSrc={staticFile("images/华为制裁论/scene_3_2.png")} notes={[{"text": "星通事件", "showFrom": 4}, {"text": "孟女士PPT事件", "showFrom": 10}]} />
            </Sequence>
            <Sequence from={1254} durationInFrames={297}>
                <BWSplitCompare content={[{"text": "这两件事前者被定性为违反了制裁法案，", "startFrame": 0, "durationFrames": 102}, {"text": "后者被定性为“银行欺诈”，", "startFrame": 101, "durationFrames": 64}, {"text": "这两者，", "startFrame": 164, "durationFrames": 23}, {"text": "是导致华为被列入实体清单的直接法理依据。", "startFrame": 187, "durationFrames": 110}]} totalDurationFrames={297} leftSrc={staticFile("images/华为制裁论/scene_3_3_left.png")} rightSrc={staticFile("images/华为制裁论/scene_3_3_right.png")} leftLabel={"制裁法案"} rightLabel={"银行欺诈"} leftShowFrom={0} rightShowFrom={1} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
