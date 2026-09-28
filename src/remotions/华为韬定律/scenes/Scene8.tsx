import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 参考资料
const SCENE_DURATION = 173;

export const calculateScene8Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene8: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={173}>
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "HUAWEI Presents the Tau (τ) Scaling Law, Enabling Breakthroughs in Transistor Density and System Performance", "titleZh": "华为发表韬(τ)定律：以时间缩微替代几何缩微", "publisher": "Huawei", "publisherZh": "华为", "year": "2026"}, {"title": "A Time Scaling Theory for Multi-Layer Electronic Systems", "titleZh": "多层电子系统的时间缩微理论（韬定律）", "publisher": "Tingbo He · ChinaXiv / Science China Information Sciences", "publisherZh": "何庭波 · ChinaXiv / 《中国科学：信息科学》", "year": "2026"}, {"title": "Cramming More Components onto Integrated Circuits", "titleZh": "摩尔定律原文：集成电路元件数目约每两年翻倍", "publisher": "Gordon E. Moore · Electronics Magazine", "publisherZh": "Gordon E. Moore · Electronics 杂志", "year": "1965"}, {"title": "TSMC-SoIC: System on Integrated Chips", "titleZh": "台积电 SoIC：晶圆级三维堆叠与混合键合平台", "publisher": "Taiwan Semiconductor Manufacturing Company", "publisherZh": "台积电", "year": "2025"}, {"title": "Foveros Direct 3D Technology Brief", "titleZh": "英特尔 Foveros：有源芯片垂直堆叠与混合键合", "publisher": "Intel Foundry", "publisherZh": "英特尔代工", "year": "2025"}, {"title": "CN119652311A: Ternary Logic Gate Circuit, Computing Circuit, Chip and Electronic Device", "titleZh": "华为三进制逻辑门专利：局部电路结构简化与功耗优化", "publisher": "China National Intellectual Property Administration", "publisherZh": "国家知识产权局", "year": "2025"}, {"title": "CN116841060A: Optical Chip, Optical Module and Communication Device", "titleZh": "华为光芯片专利：硅光集成面向数据传输，可降低光模块尺寸与功耗", "publisher": "China National Intellectual Property Administration", "publisherZh": "国家知识产权局", "year": "2023"}, {"title": "CN117751427A: Method for Manufacturing Semiconductor Device with Self-Aligned Quadruple Patterning", "titleZh": "华为自对准四重图案化（SAQP）专利：以多重曝光补偿先进光刻短板", "publisher": "China National Intellectual Property Administration", "publisherZh": "国家知识产权局", "year": "2024"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
