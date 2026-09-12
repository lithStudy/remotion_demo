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
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "Huawei Investment & Holding Co., Ltd. 2023 Annual Report", "titleZh": "华为2023年报：全球有效授权专利超14万件", "publisher": "Huawei Investment & Holding Co., Ltd.", "publisherZh": "华为投资控股有限公司", "year": "2024"}, {"title": "Huawei Intellectual Property White Paper 2023", "titleZh": "华为2023知识产权白皮书：2022年专利许可收入约5.6亿美元", "publisher": "Huawei Technologies Co., Ltd.", "publisherZh": "华为技术有限公司", "year": "2023"}, {"title": "Navigating the Patent Thicket: Cross Licenses, Patent Pools, and Standard Setting", "titleZh": "专利丛林：交叉许可、专利池与标准制定", "publisher": "Carl Shapiro · Innovation Policy and the Economy", "publisherZh": "Carl Shapiro · 创新政策与经济", "year": "2001"}, {"title": "Patent Law of the People's Republic of China (2020 Amendment)", "titleZh": "专利法（2020修正）：分案申请与实用新型制度", "publisher": "Standing Committee of the National People's Congress", "publisherZh": "全国人民代表大会常务委员会", "year": "2020"}, {"title": "CN102281641B / ZL201110255576.9: Method and Device for Identifying User Equipment", "titleZh": "华为诉联发科核心专利：2007母案、2011分案", "publisher": "China National Intellectual Property Administration", "publisherZh": "国家知识产权局", "year": "2011"}, {"title": "Huawei sues Taiwan's MediaTek over alleged patent infringement", "titleZh": "日经亚洲：2024年华为在中国起诉联发科专利侵权", "publisher": "Nikkei Asia", "publisherZh": "日经亚洲", "year": "2024"}, {"title": "Huawei files lawsuits accusing Samsung of violating patents", "titleZh": "美联社：2016年华为在中美起诉三星专利侵权", "publisher": "Associated Press", "publisherZh": "美联社", "year": "2016"}, {"title": "Huawei Technologies Co., Ltd. v. InterDigital Technology Corporation (2013) Yue Gaofa Minsan Zhongzi No. 306", "titleZh": "广东省高院：华为诉交互数字（IDC）反垄断案二审判决", "publisher": "Guangdong High People's Court", "publisherZh": "广东省高级人民法院", "year": "2013"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
