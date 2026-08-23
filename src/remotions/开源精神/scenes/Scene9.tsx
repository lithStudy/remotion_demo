import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 180;

export const calculateScene9Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene9: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={180}>
                <BWSourceCitation content={[]} totalDurationFrames={180} sectionTitle={"参考资料"} references={[{"title": "HarmonyOS: “Fake it till you make it” meets OS development", "titleZh": "鸿蒙系统实测：本质是 Android 分支，而非全新操作系统", "publisher": "Ron Amadeo · Ars Technica", "publisherZh": "Ron Amadeo · Ars Technica（科技媒体）", "year": "2021"}, {"title": "Huawei officially replaces Android with HarmonyOS, which is also Android", "titleZh": "华为正式用鸿蒙替换 Android，但鸿蒙仍是 Android", "publisher": "Ron Amadeo · Ars Technica", "publisherZh": "Ron Amadeo · Ars Technica（科技媒体）", "year": "2021"}, {"title": "Huawei's Harmony OS 2.0 beta appears to be based on Android", "titleZh": "鸿蒙 OS 2.0 测试版基于 Android 框架", "publisher": "XDA Developers", "publisherZh": "XDA Developers（开发者社区）", "year": "2021"}, {"title": "Harmony OS 2.0 includes Android Q's easter egg app", "titleZh": "鸿蒙 2.0 系统中发现 Android Q 彩蛋应用", "publisher": "Android Authority", "publisherZh": "Android Authority（科技媒体）", "year": "2021"}, {"title": "HarmonyOS", "titleZh": "鸿蒙系统：2019–2024 整合 AOSP，5.0 前兼容 Android 应用", "publisher": "Wikipedia", "publisherZh": "维基百科", "year": "2024"}, {"title": "HarmonyOS version history", "titleZh": "鸿蒙版本史：HarmonyOS 4.0 为 Android 12/AOSP 双框架架构", "publisher": "HandWiki", "publisherZh": "HandWiki（技术百科）", "year": "2024"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
