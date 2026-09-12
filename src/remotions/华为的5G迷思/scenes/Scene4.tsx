import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 173;

export const calculateScene4Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene4: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={173}>
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "Noncooperative Cellular Wireless with Unlimited Numbers of Base Station Antennas", "titleZh": "Massive MIMO：大规模天线阵列奠基研究", "publisher": "Thomas L. Marzetta · IEEE Transactions on Wireless Communications", "publisherZh": "Thomas L. Marzetta · 贝尔实验室 / IEEE", "year": "2010"}, {"title": "Low-Density Parity-Check Codes", "titleZh": "LDPC 长码：低密度奇偶校验码理论（高通为5G核心推动者）", "publisher": "Robert G. Gallager · MIT", "publisherZh": "Robert G. Gallager · 麻省理工学院", "year": "1963"}, {"title": "Channel Polarization: A Method for Constructing Capacity-Achieving Codes for Symmetric Binary-Input Memoryless Channels", "titleZh": "Polar 短码：信道极化算法（2008提出，非华为发明）", "publisher": "Erdal Arıkan · IEEE Transactions on Information Theory", "publisherZh": "Erdal Arıkan · 毕尔肯特大学 / IEEE", "year": "2009"}, {"title": "3GPP RAN1 agreements on channel coding for eMBB", "titleZh": "3GPP eMBB 信道编码：数据信道 LDPC、控制信道 Polar", "publisher": "3GPP", "publisherZh": "第三代合作伙伴计划（3GPP）", "year": "2016"}, {"title": "Millimeter Wave Mobile Communications for 5G Cellular: It Will Work!", "titleZh": "毫米波通信：高频段传播与覆盖可行性研究", "publisher": "Theodore S. Rappaport et al. · NYU Wireless / IEEE", "publisherZh": "Theodore S. Rappaport 等 · NYU Wireless / IEEE", "year": "2013"}, {"title": "Who is leading the 5G patent race?", "titleZh": "5G 标准必要专利：华为约15%量级份额（非垄断）", "publisher": "IPlytics / LexisNexis Intellectual Property", "publisherZh": "IPlytics / LexisNexis 知识产权", "year": "2019"}, {"title": "Who Is Leading the 5G Patent Race?", "titleZh": "5G SEP 持有格局：华为、中兴、大唐与高通、爱立信、诺基亚、三星等", "publisher": "LexisNexis Intellectual Property Solutions", "publisherZh": "LexisNexis 知识产权解决方案", "year": "2025"}, {"title": "Digital Decade - 5G Observatory Report", "titleZh": "欧盟5G观测：基础5G人口覆盖近97%，网络未因限制华为而瘫痪", "publisher": "European Commission", "publisherZh": "欧盟委员会", "year": "2025"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
