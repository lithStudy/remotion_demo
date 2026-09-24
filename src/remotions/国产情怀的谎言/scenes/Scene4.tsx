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
                <BWSourceCitation content={[]} totalDurationFrames={173} sectionTitle={"参考资料"} references={[{"title": "“国产”浏览器红芯融资2.5亿元 谷歌内核遭曝光", "titleZh": "红芯宣称自主内核并完成2.5亿元C轮融资，安装包被指含谷歌 Chrome 文件", "publisher": "Caixin", "publisherZh": "财新网", "year": "2018"}, {"title": "红芯致歉：宣传存一定程度夸大 不应特别强调国产自主", "titleZh": "红芯致歉：承认融资宣传夸大，内核基于 Chromium，不应特别强调国产自主", "publisher": "China News Service", "publisherZh": "中国新闻网", "year": "2018"}, {"title": "融资 2.5 亿的国产换皮 Chrome，你凭什么说“站在巨人的肩膀上”", "titleZh": "红芯融资宣传称“世界第五颗中国人浏览器内核”，被指换皮 Chrome", "publisher": "Huxiu", "publisherZh": "虎嗅网", "year": "2018"}, {"title": "上海交大证实汉芯造假 解除陈进院长职务", "titleZh": "上海交大认定汉芯造假：撤销陈进职务；科技部、教育部、发改委终止项目并追缴经费", "publisher": "Xinhua News Agency", "publisherZh": "新华社", "year": "2006"}, {"title": "“汉芯一号”造假传闻调查", "titleZh": "汉芯被指购买摩托罗拉/飞思卡尔芯片，雇人用砂纸磨去原厂标识后改印“汉芯”", "publisher": "21st Century Business Herald", "publisherZh": "21世纪经济报道", "year": "2006"}, {"title": "“汉芯一号”涉嫌造假？", "titleZh": "举报人称汉芯三年内申报项目40余次，累计骗取无偿拨款超过1亿元", "publisher": "Sina News", "publisherZh": "新浪新闻", "year": "2006"}, {"title": "上海交大关于“汉芯”系列芯片涉嫌造假的调查结论与处理意见的通报", "titleZh": "官方通报：汉芯一号演示存在调换芯片等造假欺骗行为", "publisher": "Shanghai Jiao Tong University", "publisherZh": "上海交通大学", "year": "2006"}, {"title": "“红芯”之前，他们当年是怎样挖出“汉芯”造假案的", "titleZh": "回顾《21世纪经济报道》汉芯调查：砂纸磨标、骗取上亿元科研基金", "publisher": "Jiemian News", "publisherZh": "界面新闻", "year": "2018"}]} />
            </Sequence>

        </AbsoluteFill>
    );
};
