import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWConceptCard, BWDosAndDonts, BWMethodStack } from "../../../components";

// 非对称归因
const SCENE_DURATION = 89 + 229 + 205 + 139;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={89}>
                <BWConceptCard content={[{"text": "顶级操盘手都有“非对称归因”的能力。", "startFrame": 0, "durationFrames": 89}]} totalDurationFrames={89} imageSrc={staticFile("images/认知偏差_自利偏差/scene_4_1.png")} conceptName={"非对称归因"} anchors={[]} />
            </Sequence>
            <Sequence from={89} durationInFrames={229}>
                <BWMethodStack content={[{"text": "第一，", "startFrame": 0, "durationFrames": 19}, {"text": "对内残酷，", "startFrame": 18, "durationFrames": 32}, {"text": "即便环境真的很烂，", "startFrame": 50, "durationFrames": 43}, {"text": "也永远优先反思自己的核心能力，", "startFrame": 92, "durationFrames": 75}, {"text": "因为唯有自己是可控变量。", "startFrame": 166, "durationFrames": 62}]} totalDurationFrames={229} title={"对内残酷"} imageSrc={staticFile("images/认知偏差_自利偏差/scene_4_2.png")} notes={[{"text": "优先反思自己的核心能力", "showFrom": 3}, {"text": "自己是可控变量", "showFrom": 4}]} anchors={[]} />
            </Sequence>
            <Sequence from={318} durationInFrames={205}>
                <BWMethodStack content={[{"text": "第二，", "startFrame": 0, "durationFrames": 22}, {"text": "对外慈悲，", "startFrame": 21, "durationFrames": 27}, {"text": "看别人的落魄多看他头顶的乌云，", "startFrame": 48, "durationFrames": 84}, {"text": "看别人狂妄多看他背后的风口。", "startFrame": 132, "durationFrames": 73}]} totalDurationFrames={205} title={"对外慈悲"} imageSrc={staticFile("images/认知偏差_自利偏差/scene_4_3.png")} notes={[{"text": "多理解他人处境", "showFrom": 1}, {"text": "不妄加评判", "showFrom": 3}]} anchors={[]} />
            </Sequence>
            <Sequence from={523} durationInFrames={139}>
                <BWDosAndDonts content={[{"text": "平庸的人用自利偏差麻醉自己，", "startFrame": 0, "durationFrames": 76}, {"text": "清醒的人用它看透世界。", "startFrame": 75, "durationFrames": 64}]} totalDurationFrames={139} left={{label: "麻醉自己", src: staticFile("images/认知偏差_自利偏差/scene_3_1_left.png"), showFrom: 0 }} right={{label: "看透世界", src: staticFile("images/认知偏差_自利偏差/scene_3_1_right.png"), showFrom: 1 }} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_自利偏差/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
