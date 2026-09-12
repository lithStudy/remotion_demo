import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 137;

export const calculateScene5Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene5: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={137}>
                <BWSourceCitation content={[]} totalDurationFrames={137} sectionTitle={"参考资料"} references={[{"title": "Xiaomi Phone Launch and Benchmark Marketing Slogan", "titleZh": "小米手机一代：「不服跑个分」性能量化营销", "publisher": "Xiaomi Corporation", "publisherZh": "小米集团", "year": "2011"}, {"title": "Lei Jun Live-streams Xiaomi SU7 Pro Beijing–Shanghai Range Test", "titleZh": "雷军：新一代SU7 Pro京沪续航直播，1313公里中途只充一次电", "publisher": "Lei Jun · Weibo / Xiaomi", "publisherZh": "雷军 · 微博 / 小米", "year": "2026"}, {"title": "Autohome Real-world Range Test: Xiaomi SU7 Pro Runs to Empty", "titleZh": "汽车之家：新一代SU7 Pro城市综合/五环实测跑到趴窝", "publisher": "Autohome", "publisherZh": "汽车之家", "year": "2026"}, {"title": "Xiaomi Releases New SU7 Teardown Video on Body Safety Structure", "titleZh": "小米发布新一代SU7拆解视频：防撞梁、电机与车身用料公开讲解", "publisher": "Xiaomi Corporation · Lei Jun", "publisherZh": "小米集团 · 雷军", "year": "2026"}, {"title": "Talk is cheap. Show me the code.", "titleZh": "空谈无益，代码为证", "publisher": "Linus Torvalds · Linux Kernel Mailing List", "publisherZh": "Linus Torvalds · Linux 内核邮件列表", "year": "2000"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
