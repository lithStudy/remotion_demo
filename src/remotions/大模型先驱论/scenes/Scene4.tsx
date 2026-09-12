import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 161;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={161}>
                <BWSourceCitation content={[]} totalDurationFrames={161} sectionTitle={"参考资料"} references={[{"title": "Yu Chengdong at HDC 2026: Pangu Is Absolute Global Pioneer of LLMs", "titleZh": "余承东 HDC 2026：盘古大模型是行业绝对的全球先驱者", "publisher": "Huawei Developer Conference / Tech media reports", "publisherZh": "华为开发者大会 / 多家科技媒体报道", "year": "2026"}, {"title": "Attention Is All You Need", "titleZh": "Transformer：所有现代大模型的基石", "publisher": "Vaswani et al. · Google · NeurIPS", "publisherZh": "Vaswani 等 · Google · NeurIPS", "year": "2017"}, {"title": "Language Models are Few-Shot Learners", "titleZh": "GPT-3：现代大模型时代的起点", "publisher": "Brown et al. · OpenAI · NeurIPS", "publisherZh": "Brown 等 · OpenAI · NeurIPS", "year": "2020"}, {"title": "Introducing ChatGPT", "titleZh": "ChatGPT：首次向普通用户开放对话式大模型", "publisher": "OpenAI", "publisherZh": "OpenAI", "year": "2022"}, {"title": "Baidu Launches ERNIE Bot (Wenxin Yiyan) Public Access", "titleZh": "百度文心一言：国内较早面向用户开放体验的大模型", "publisher": "Baidu", "publisherZh": "百度", "year": "2023"}, {"title": "LLM Fingerprint Analysis: Pangu Pro MoE vs Qwen2.5-14B Correlation 0.927", "titleZh": "盘古 Pro MoE 与通义千问 2.5-14B 注意力参数相关性达 0.927", "publisher": "HonestAGI · GitHub / tech media reports", "publisherZh": "HonestAGI · GitHub / 科技媒体报道", "year": "2025"}, {"title": "The Fall of Pangu (Pangu Zhi Shang)", "titleZh": "《盘古之殇》：疑似内部员工长文直指套壳换血", "publisher": "Anonymous alleged ex-Pangu employee · Zhihu / tech forums", "publisherZh": "疑似盘古前成员 · 知乎 / 技术社区传阅", "year": "2025"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
