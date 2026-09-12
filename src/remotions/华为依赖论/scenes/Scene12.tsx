import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 149;

export const calculateScene12Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene12: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={149}>
                <BWSourceCitation content={[]} totalDurationFrames={149} sectionTitle={"参考资料"} references={[{"title": "China Mobile 2023–2024 5G Wireless Main Equipment Centralized Procurement Bid Results", "titleZh": "中国移动2023–2024年5G无线主设备集采：华为过半，中兴约23%–37%，爱立信、诺基亚贝尔、大唐入围", "publisher": "China Mobile Procurement / Securities Times / C114", "publisherZh": "中国移动采购与招标网 / 证券时报 / C114通信网", "year": "2023"}, {"title": "China Mobile 2021 4G/5G Converged Core Network New Equipment Centralized Procurement", "titleZh": "中国移动约75亿元4G/5G融合核心网集采：华为、中兴两家入围并瓜分份额", "publisher": "China Mobile / C114", "publisherZh": "中国移动 / C114通信网", "year": "2021"}, {"title": "ZTE: 7nm 5G Base Station Chip in Commercial Use; 5nm Under Development", "titleZh": "中兴通讯：7纳米5G基站芯片已商用量产，5纳米处于技术导入/推进", "publisher": "ZTE Corporation / Shenzhen Stock Exchange interactive platform", "publisherZh": "中兴通讯 / 深交所互动易", "year": "2020"}, {"title": "ZTE Corporation 2024 Annual Report", "titleZh": "中兴通讯2024年年度报告：全年营业收入约1213亿元", "publisher": "ZTE Corporation", "publisherZh": "中兴通讯股份有限公司", "year": "2025"}, {"title": "Worldwide Telecom Equipment Down 11 Percent in 2024", "titleZh": "2024年全球电信设备市场萎缩约11%（二十年来最严重）；华为份额约30%量级居首", "publisher": "Dell'Oro Group", "publisherZh": "Dell'Oro Group", "year": "2025"}, {"title": "ZTE Corporation Annual Report: Shareholding Structure of Zhongxingxin", "titleZh": "中兴通讯年报：控股股东中兴新含西安微电子、航天广宇等国有背景股东参股", "publisher": "ZTE Corporation", "publisherZh": "中兴通讯股份有限公司", "year": "2024"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
