import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMethodStack } from "../../../components";

// 剖析：制约性制裁
const SCENE_DURATION = 683;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={683}>
                <BWMethodStack content={[{"text": "制约性，", "startFrame": 0, "durationFrames": 22}, {"text": "是因为华为在通信领域技术确实相当牛，", "startFrame": 21, "durationFrames": 107}, {"text": "5G相关专利确实多，", "startFrame": 128, "durationFrames": 55}, {"text": "尤其是中国在6G相关专利的储备上已占全球35%，", "startFrame": 183, "durationFrames": 135}, {"text": "远高于美国的18%，", "startFrame": 317, "durationFrames": 57}, {"text": "如果不采取手段，未来的6G标准制定权，", "startFrame": 374, "durationFrames": 95}, {"text": "有可能会落入我们中国之手。", "startFrame": 469, "durationFrames": 52}, {"text": "因此美国开始通过各种手段，", "startFrame": 521, "durationFrames": 71}, {"text": "制裁包括华为在内的所有中国通信企业。", "startFrame": 591, "durationFrames": 91}]} totalDurationFrames={683} title={"制约性"} imageSrc={staticFile("images/华为制裁论/scene_4_1.png")} notes={[{"text": "华为在通信领域技术确实相当牛", "showFrom": 1}, {"text": "中国6G专利储备已占全球35%", "showFrom": 3}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
