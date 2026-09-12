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
                <BWSourceCitation content={[]} totalDurationFrames={161} sectionTitle={"参考资料"} references={[{"title": "2021中国民营企业500强调研分析报告", "titleZh": "2021民企500强报告：华为纳税903亿元", "publisher": "All-China Federation of Industry and Commerce", "publisherZh": "中华全国工商业联合会", "year": "2021"}, {"title": "华为投资控股有限公司2020年年度报告", "titleZh": "华为2020年报：企业所得税76亿元", "publisher": "Huawei Investment & Holding Co., Ltd.", "publisherZh": "华为投资控股有限公司", "year": "2020"}, {"title": "华为投资控股有限公司2020年年度报告（附注：其他收支）", "titleZh": "华为2020年报：计入损益的政府补助约27.85亿元", "publisher": "Huawei Investment & Holding Co., Ltd.", "publisherZh": "华为投资控股有限公司", "year": "2020"}, {"title": "腾讯控股有限公司2020年年度报告", "titleZh": "腾讯2020年报：企业所得税约228亿元", "publisher": "Tencent Holdings Limited", "publisherZh": "腾讯控股有限公司", "year": "2020"}, {"title": "中华人民共和国增值税暂行条例", "titleZh": "增值税暂行条例：间接税与13%基本税率", "publisher": "State Council of the PRC", "publisherZh": "国务院", "year": "2017"}, {"title": "中华人民共和国企业所得税法", "titleZh": "企业所得税法：企业利润的直接税", "publisher": "National People's Congress", "publisherZh": "全国人民代表大会", "year": "2018"}, {"title": "中华全国工商业联合会章程", "titleZh": "全国工商联章程：民间商会组织性质", "publisher": "All-China Federation of Industry and Commerce", "publisherZh": "中华全国工商业联合会", "year": "2022"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
