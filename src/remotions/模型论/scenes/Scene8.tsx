import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 173;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={173}>
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "Huawei Cloud Launches Pangu Large Model 3.0 and Ascend AI Cloud Service", "titleZh": "华为云发布盘古大模型 3.0：面向行业的大模型系列", "publisher": "Huawei Cloud", "publisherZh": "华为云", "year": "2023"}, {"title": "Pangu Industry NLP Large Models Product Description", "titleZh": "盘古行业 NLP 大模型：在基础 NLP 大模型上叠加垂直行业数据", "publisher": "Huawei Cloud", "publisherZh": "华为云", "year": "2024"}, {"title": "Language Models are Few-Shot Learners", "titleZh": "GPT-3：现代大模型时代的起点", "publisher": "Brown et al. · OpenAI · NeurIPS", "publisherZh": "Brown 等 · OpenAI · NeurIPS", "year": "2020"}, {"title": "Scaling Laws for Neural Language Models", "titleZh": "神经语言模型规模定律：参数量决定能力上限", "publisher": "Kaplan et al. · OpenAI", "publisherZh": "Kaplan 等 · OpenAI", "year": "2020"}, {"title": "Attention Is All You Need", "titleZh": "Transformer：大语言模型的底层架构基石", "publisher": "Vaswani et al. · Google · NeurIPS", "publisherZh": "Vaswani 等 · Google · NeurIPS", "year": "2017"}, {"title": "OpenAI LP", "titleZh": "OpenAI LP：以宪章使命为先的封顶利润结构", "publisher": "OpenAI", "publisherZh": "OpenAI", "year": "2019"}, {"title": "Sam Altman's leap of faith", "titleZh": "Altman：OpenAI 当时无营收、亦无短期变现计划", "publisher": "TechCrunch", "publisherZh": "TechCrunch", "year": "2019"}, {"title": "OpenAI's GPT-3 Language Model: A Technical Overview", "titleZh": "Lambda Labs：复现 GPT-3 训练成本约 460 万美元量级", "publisher": "Lambda Labs", "publisherZh": "Lambda Labs", "year": "2020"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
