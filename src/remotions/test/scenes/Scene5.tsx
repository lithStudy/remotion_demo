import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCenterFocus } from "../../../components";

// 解释比例陷阱
const SCENE_DURATION = 237;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={237}>
                <BWCenterFocus imageSrc={staticFile("images/test/5_1.png")} enterEffect="breathe" content={[{"text": "小基数玩命涨，大基数微调。", "startFrame": 0, "durationFrames": 77, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "就像穷小子逆袭，很容易翻倍。", "startFrame": 76, "durationFrames": 83, "anchor": null, "anchorColor": null, "audioEffect": null}, {"text": "首富资产翻倍，要掏空地球。", "startFrame": 159, "durationFrames": 77, "anchor": null, "anchorColor": null, "audioEffect": null}]} totalDurationFrames={237} />
            </Sequence>
            <Audio src={staticFile("/audio/test/5/5.mp3")} />
        </AbsoluteFill>
    );
};
