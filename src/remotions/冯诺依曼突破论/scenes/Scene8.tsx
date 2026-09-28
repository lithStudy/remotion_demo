import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 161;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={161}>
                <BWSourceCitation content={[]} totalDurationFrames={161} sectionTitle={"参考资料"} references={[{"title": "华为开创AI时代计算架构：让百万处理器成为一台计算机", "titleZh": "华为中文官网：Peerium「突破」冯·诺依曼单机架构，提出 Nested BSP", "publisher": "Huawei", "publisherZh": "华为", "year": "2026"}, {"title": "Huawei Pioneers a New Computing Architecture for the AI Era: Making One Million Processors Work as One Computer", "titleZh": "华为英文官网：Peerium「扩展」冯·诺依曼单机架构（extends）", "publisher": "Huawei", "publisherZh": "华为", "year": "2026"}, {"title": "Nested Parallel von Neumann Architecture and Nested BSP", "titleZh": "预印本：嵌套并行冯·诺依曼架构与 Nested BSP（定位为扩展而非抛弃）", "publisher": "Heng Liao · arXiv", "publisherZh": "廖恒 · arXiv", "year": "2026"}, {"title": "A Bridging Model for Parallel Computation", "titleZh": "BSP（批量同步并行）模型原文：并行计算的桥接模型", "publisher": "Leslie G. Valiant · Communications of the ACM", "publisherZh": "Leslie G. Valiant · ACM 通讯", "year": "1990"}, {"title": "NestStep: Nested Parallelism and Virtual Shared Memory for the BSP Model", "titleZh": "NestStep：面向 BSP 的嵌套并行与虚拟共享内存", "publisher": "Christoph W. Keßler · PDPTA", "publisherZh": "Christoph W. Keßler · PDPTA", "year": "1999"}, {"title": "First Draft of a Report on the EDVAC", "titleZh": "冯·诺依曼存储程序体制奠基文献：EDVAC 报告初稿", "publisher": "John von Neumann", "publisherZh": "John von Neumann", "year": "1945"}, {"title": "Huawei Unveils New UnifiedBus Computing Architecture for SuperPoDs and Clusters", "titleZh": "华为灵衢（UnifiedBus）：超节点与集群的平等互联总线", "publisher": "Huawei", "publisherZh": "华为", "year": "2026"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
