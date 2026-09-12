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
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "Xiaomi Corporation Global Offering Prospectus", "titleZh": "小米招股书：开曼群岛注册成立", "publisher": "Hong Kong Exchanges and Clearing", "publisherZh": "香港交易所", "year": "2018"}, {"title": "Alibaba Group Holding Limited Form 20-F", "titleZh": "阿里巴巴年报：开曼群岛控股架构", "publisher": "U.S. Securities and Exchange Commission", "publisherZh": "美国证券交易委员会", "year": "2023"}, {"title": "Semiconductor Manufacturing International Corporation Annual Report", "titleZh": "中芯国际年报：开曼注册与港股上市", "publisher": "SMIC", "publisherZh": "中芯国际集成电路制造有限公司", "year": "2023"}, {"title": "Qualifying Entities Prepared in Response to Section 1237 of the National Defense Authorization Act for FY 1999", "titleZh": "美国国防部：将小米列入涉军企业清单", "publisher": "U.S. Department of Defense", "publisherZh": "美国国防部", "year": "2021"}, {"title": "Xiaomi Corporation v. U.S. Department of Defense, Memorandum Opinion", "titleZh": "哥伦比亚特区联邦法院：小米胜诉，清单指定违反《行政程序法》", "publisher": "U.S. District Court for the District of Columbia", "publisherZh": "美国哥伦比亚特区联邦地区法院", "year": "2021"}, {"title": "Administrative Procedure Act, 5 U.S.C. § 706", "titleZh": "《行政程序法》：法院可撤销违法的行政机关行为", "publisher": "United States Congress", "publisherZh": "美国国会", "year": "1946"}, {"title": "Huawei Investment & Holding Co., Ltd. Annual Report", "titleZh": "华为年报：员工持股计划与未上市股权结构", "publisher": "Huawei Investment & Holding Co., Ltd.", "publisherZh": "华为投资控股有限公司", "year": "2020"}, {"title": "Huawei CFO Wanzhou Meng Admits to Misleading Global Financial Institution", "titleZh": "美国司法部：孟晚舟承认误导金融机构并达成暂缓起诉协议", "publisher": "U.S. Department of Justice", "publisherZh": "美国司法部", "year": "2021"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
