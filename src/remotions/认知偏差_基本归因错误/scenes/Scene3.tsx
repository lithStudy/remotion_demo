import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWCauseChain } from "../../../components";

// 反转：平庸与聪明
const SCENE_DURATION = 365;

export const calculateScene3Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene3: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={365}>
                <BWCauseChain content={[{"text": "所有的平庸者，", "startFrame": 0, "durationFrames": 34}, {"text": "都喜欢在别人身上找主观原因。", "startFrame": 33, "durationFrames": 69}, {"text": "他们甚至会为了维护这种“心理掌控感”，", "startFrame": 102, "durationFrames": 79}, {"text": "强行给别人贴上“没素质、冷血、不负责”的标签。", "startFrame": 181, "durationFrames": 113}, {"text": "而真正的高手，只看外部变量。", "startFrame": 293, "durationFrames": 72}]} totalDurationFrames={365} layout={"horizontal"} nodes={[{ label: "主观原因", imageSrc: staticFile("images/认知偏差_基本归因错误/scene_3_2_img1.png"), showFrom: 0, enterEffect: "fadeIn" }, { label: "心理掌控", imageSrc: staticFile("images/认知偏差_基本归因错误/scene_3_2_img0.png"), showFrom: 2, enterEffect: "fadeIn" }, { label: "看外因", imageSrc: staticFile("images/认知偏差_基本归因错误/scene_3_2_img2.png"), showFrom: 4, enterEffect: "fadeIn" }]} />
            </Sequence>
            <Audio src={staticFile("/audio/认知偏差_基本归因错误/scene_3/scene_3.mp3")} />
        </AbsoluteFill>
    );
};
