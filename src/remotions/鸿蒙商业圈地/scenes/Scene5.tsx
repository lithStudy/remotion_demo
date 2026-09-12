import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 173;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={173}>
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "Download the Android source", "titleZh": "安卓开源项目：可下载完整源代码并本地构建", "publisher": "Android Open Source Project", "publisherZh": "安卓开源项目（Google）", "year": "2024"}, {"title": "Android Open Source Project Licenses", "titleZh": "安卓开源许可：核心代码以 Apache 2.0 等开源协议发布", "publisher": "Android Open Source Project", "publisherZh": "安卓开源项目（Google）", "year": "2024"}, {"title": "HarmonyOS: “Fake it till you make it” meets OS development", "titleZh": "鸿蒙系统实测：本质是 Android 分支，而非全新操作系统", "publisher": "Ron Amadeo · Ars Technica", "publisherZh": "Ron Amadeo · Ars Technica（科技媒体）", "year": "2021"}, {"title": "Huawei officially replaces Android with HarmonyOS, which is also Android", "titleZh": "华为正式用鸿蒙替换 Android，但鸿蒙仍是 Android", "publisher": "Ron Amadeo · Ars Technica", "publisherZh": "Ron Amadeo · Ars Technica（科技媒体）", "year": "2021"}, {"title": "Huawei's Harmony OS 2.0 beta appears to be based on Android", "titleZh": "鸿蒙 OS 2.0 测试版基于 Android 框架", "publisher": "XDA Developers", "publisherZh": "XDA Developers（开发者社区）", "year": "2021"}, {"title": "HarmonyOS", "titleZh": "鸿蒙系统：2019–2024 整合 AOSP，5.0 前兼容 Android 应用", "publisher": "Wikipedia", "publisherZh": "维基百科", "year": "2024"}, {"title": "openEuler", "titleZh": "openEuler：基于 Linux 内核的开源操作系统", "publisher": "openEuler Community", "publisherZh": "openEuler 开源社区", "year": "2024"}, {"title": "Kylin Operating System", "titleZh": "麒麟操作系统：基于 Linux 的国产操作系统", "publisher": "KylinSoft / Wikipedia", "publisherZh": "麒麟软件 / 维基百科", "year": "2024"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
