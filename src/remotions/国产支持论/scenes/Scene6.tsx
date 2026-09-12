import React from "react";
import { AbsoluteFill, Sequence, Audio, staticFile } from "remotion";
import { BWSourceCitation } from "../../../components";

// 片尾·参考资料
const SCENE_DURATION = 161;

export const calculateScene6Duration = (): number => {
    return SCENE_DURATION;
};

export const Scene6: React.FC = () => {
    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={161}>
                <BWSourceCitation content={[]} totalDurationFrames={161} sectionTitle={"参考资料"} references={[{"title": "关于2016-2020年新能源汽车推广应用财政支持政策的通知", "titleZh": "新能源汽车推广应用财政补贴政策", "publisher": "Ministry of Finance, MIIT, MOST, NDRC", "publisherZh": "财政部、工信部、科技部、发改委", "year": "2015"}, {"title": "关于延续和优化新能源汽车车辆购置税减免政策的公告", "titleZh": "新能源汽车车辆购置税减免政策延续与优化", "publisher": "Ministry of Finance, STA, MIIT", "publisherZh": "财政部、税务总局、工业和信息化部", "year": "2023"}, {"title": "高新技术企业认定管理办法", "titleZh": "高新技术企业：企业所得税减按15%征收", "publisher": "MOST, Ministry of Finance, STA", "publisherZh": "科技部、财政部、国家税务总局", "year": "2016"}, {"title": "推动大规模设备更新和消费品以旧换新行动方案", "titleZh": "消费品以旧换新：家电汽车等财政补贴", "publisher": "State Council of the PRC", "publisherZh": "国务院", "year": "2024"}, {"title": "中华人民共和国增值税法", "titleZh": "增值税：我国第一大税种与消费环节征税", "publisher": "Standing Committee of the NPC", "publisherZh": "全国人民代表大会常务委员会", "year": "2024"}, {"title": "中华人民共和国进出口关税条例", "titleZh": "进出口关税：调节进口与保护国内产业", "publisher": "State Council of the PRC", "publisherZh": "国务院", "year": "2003"}, {"title": "中华人民共和国对外贸易法", "titleZh": "对外贸易法：进口限制与贸易救济措施", "publisher": "Standing Committee of the NPC", "publisherZh": "全国人民代表大会常务委员会", "year": "2022"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
