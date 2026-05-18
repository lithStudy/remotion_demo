import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWMethodStack } from "../../../components";

// 剖析：制约性制裁
const SCENE_DURATION = 691;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={691}>
                <BWMethodStack content={[{"text": "制约性，", "startFrame": 0, "durationFrames": 20}, {"text": "是因为华为在通信领域技术确实相当牛，", "startFrame": 19, "durationFrames": 96}, {"text": "5G相关专利确实多，", "startFrame": 115, "durationFrames": 56}, {"text": "尤其是中国在6G相关专利的储备上已占全球35%，", "startFrame": 171, "durationFrames": 141}, {"text": "远高于美国的18%，", "startFrame": 312, "durationFrames": 62}, {"text": "如果不采取手段，未来的6G标准制定权，", "startFrame": 373, "durationFrames": 101}, {"text": "有可能会落入我们中国之手。", "startFrame": 473, "durationFrames": 56}, {"text": "因此美国开始通过各种手段，", "startFrame": 528, "durationFrames": 72}, {"text": "制裁包括华为在内的所有中国通信企业。", "startFrame": 600, "durationFrames": 90}]} totalDurationFrames={691} title={"制约性"} imageSrc={staticFile("images/华为制裁论/scene_4_1.png")} notes={[{"text": "华为在通信领域技术确实相当牛", "showFrom": 1}, {"text": "中国6G专利储备已占全球35%", "showFrom": 3}]} />
            </Sequence>
            <Audio src={staticFile("/audio/华为制裁论/scene_4/scene_4.mp3")} />
        </AbsoluteFill>
    );
};
