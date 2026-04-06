import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus, BWStatCompare, BWTimeline } from "../../../components";

// 反转·车祸与慢性病
const SCENE_DURATION = 334 + 224 + 251;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={334}>
                <BWTimeline content={[{"text": "因为空难极其惨烈且被疯狂报道。", "startFrame": 0, "durationFrames": 88}, {"text": "所以它在你的记忆库里特别鲜活。", "startFrame": 87, "durationFrames": 77}, {"text": "你的大脑一秒钟就能调取恐怖画面。", "startFrame": 163, "durationFrames": 76}, {"text": "于是立刻得出坐飞机随时会掉的结论。", "startFrame": 238, "durationFrames": 95}]} totalDurationFrames={334} images={[{ src: staticFile("images/认知偏见_可得性启发/scene_4_1_img0.png"), position: "left", enterEffect: "fadeIn", textIndex: 0 }, { src: staticFile("images/认知偏见_可得性启发/scene_4_1_img1.png"), position: "center", enterEffect: "slideBottom", textIndex: 1 }, { src: staticFile("images/认知偏见_可得性启发/scene_4_1_img2.png"), position: "right", enterEffect: "fadeIn", textIndex: 3 }]} anchors={[{"text": "惨烈", "showFrom": 0, "color": "#EF4444", "anim": "spring", "audioEffect": "impact_thud"}, {"text": "记忆深刻", "showFrom": 1, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}, {"text": "坠毁结论", "showFrom": 3, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={334} durationInFrames={224}>
                <BWCenterFocus content={[{"text": "但事实上车祸的死亡人数要多得多。", "startFrame": 0, "durationFrames": 81}, {"text": "只因为车祸太常见上不了头条。", "startFrame": 80, "durationFrames": 74}, {"text": "你的大脑就自动忽略了它的危险性。", "startFrame": 153, "durationFrames": 70}]} totalDurationFrames={224} imageSrc={staticFile("images/认知偏见_可得性启发/scene_4_2.png")} enterEffect="fadeIn" anchors={[{"text": "车祸", "showFrom": 0, "color": "#000000", "anim": "popIn", "audioEffect": "ping"}]} />
            </Sequence>
            <Sequence from={558} durationInFrames={251}>
                <BWStatCompare content={[{"text": "同理美国枪击案新闻频发会让你觉得美国治安极差。", "startFrame": 0, "durationFrames": 123}, {"text": "却没想过随机枪击死亡率比车祸死亡率低的多得多。", "startFrame": 122, "durationFrames": 128}]} totalDurationFrames={251} leftValue={1} rightValue={12} leftLabel={"随机枪击"} rightLabel={"车祸"} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏见_可得性启发/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
