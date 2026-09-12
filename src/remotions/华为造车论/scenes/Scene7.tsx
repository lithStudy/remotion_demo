import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 212;

export const calculateScene7Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene7: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={212}>
                <BWSourceCitation content={[]} totalDurationFrames={212} sectionTitle={"参考资料"} references={[{"title": "Technical Clarification on AITO M7 Plus Accident on Houping Expressway, Shanxi", "titleZh": "问界新M7 Plus侯平高速追尾事故相关技术问题说明", "publisher": "AITO", "publisherZh": "问界汽车", "year": "2024"}, {"title": "Changsha Traffic Police Response to Maextro S800 Sanitation Worker Collision", "titleZh": "长沙交警回应尊界S800撞导流线环卫工事故", "publisher": "Xin Huanghe / Da Yu Finance", "publisherZh": "新黄河·大鱼财经", "year": "2026"}, {"title": "AITO New M5 Hits 11 Sheep on Highway While Smart Driving Engaged", "titleZh": "问界新M5开智驾撞死误闯超车道11只羊", "publisher": "Guancha.cn / Tech Insight", "publisherZh": "观察者网·科技新知", "year": "2024"}, {"title": "Resolution on Huawei Not Building Cars", "titleZh": "关于华为不造车的决议：有效期延长五年", "publisher": "Huawei Technologies Co., Ltd.", "publisherZh": "华为技术有限公司", "year": "2023"}, {"title": "Measures for the Administration of Road Motor Vehicle Manufacturers and Products Access", "titleZh": "道路机动车辆生产企业及产品准入管理办法", "publisher": "Ministry of Industry and Information Technology", "publisherZh": "工业和信息化部", "year": "2019"}, {"title": "Regulation on the Administration of Recall of Defective Auto Products", "titleZh": "缺陷汽车产品召回管理条例：生产者为召回责任主体", "publisher": "State Council of the PRC", "publisherZh": "国务院", "year": "2012"}, {"title": "Implementation Measures for the Regulation on Recall of Defective Auto Products", "titleZh": "召回条例实施办法：以其名义颁发合格证的企业为生产者", "publisher": "AQSIQ / SAMR", "publisherZh": "原质检总局 / 市场监管总局", "year": "2015"}, {"title": "Harmony Intelligent Mobility Alliance (HIMA)", "titleZh": "鸿蒙智行：与车企共建的智能汽车技术生态联盟", "publisher": "Harmony Intelligent Mobility Alliance", "publisherZh": "鸿蒙智行", "year": "2023"}, {"title": "HUAWEI Turing Intelligent Chassis Technical Briefing", "titleZh": "华为途灵智能底盘：路面预瞄与动力制动悬架协同", "publisher": "Huawei / Harmony Intelligent Mobility Alliance", "publisherZh": "华为 / 鸿蒙智行", "year": "2023"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
