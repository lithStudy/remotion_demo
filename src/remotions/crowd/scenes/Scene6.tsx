import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { FadeInText, SpringText } from "../../../components/TextAnimations";
import {
    AnimationConfig,
    calculateAnimationTimings,
    calculateSceneDuration,
} from "../../../utils";

const animationConfigs: AnimationConfig[] = [
    { name: "title", delayBefore: 10, delayAfter: 0, durationInFrames: 30, preName: null },
    { name: "gear1", delayBefore: 20, delayAfter: 0, durationInFrames: 30, preName: "title" },
    { name: "gear2", delayBefore: 30, delayAfter: 0, durationInFrames: 30, preName: "gear1" },
    { name: "gear3", delayBefore: 30, delayAfter: 60, durationInFrames: 30, preName: "gear2" },
];

export const calculateScene6Duration = (): number => {
    return calculateSceneDuration(animationConfigs);
};

const BACKGROUND =
    "linear-gradient(180deg, #0f172a 0%, #0c1222 40%, #050810 100%)";

const Gear: React.FC<{
    x: number;
    y: number;
    radius: number;
    teeth: number;
    rotation: number;
    color: string;
    text: string;
    opacity: number;
    scale?: number;
}> = ({ x, y, radius, teeth, rotation, color, text, opacity, scale = 1 }) => {
    // 生成齿轮路径
    const innerRadius = radius * 0.8;
    const holeRadius = radius * 0.3;

    // 构建齿轮路径字符串
    let path = "";
    const angleStep = (2 * Math.PI) / teeth;

    for (let i = 0; i < teeth; i++) {
        const angle = i * angleStep;
        const nextAngle = (i + 1) * angleStep;
        
        // 齿根
        const r1 = innerRadius;
        const x1 = Math.cos(angle) * r1;
        const y1 = Math.sin(angle) * r1;
        
        // 齿顶起点
        const r2 = radius;
        const x2 = Math.cos(angle + angleStep * 0.2) * r2;
        const y2 = Math.sin(angle + angleStep * 0.2) * r2;
        
        // 齿顶终点
        const x3 = Math.cos(angle + angleStep * 0.8) * r2;
        const y3 = Math.sin(angle + angleStep * 0.8) * r2;
        
        // 下一个齿根
        const x4 = Math.cos(nextAngle) * r1;
        const y4 = Math.sin(nextAngle) * r1;

        if (i === 0) {
            path += `M ${x1} ${y1}`;
        }
        path += ` L ${x2} ${y2} L ${x3} ${y3} L ${x4} ${y4}`;
    }
    path += " Z";

    // 中心孔
    // SVG path 中，如果在同一个 path 元素里画两个形状，并且第二个形状的方向相反（或者使用 fill-rule="evenodd"），可以挖空
    // 这里简单起见，画一个圆盖在上面，或者使用 mask。
    // 为了简单，我们只画齿轮主体，中心孔用另一个 circle 元素画，颜色设为背景色或者透明

    return (
        <g transform={`translate(${x}, ${y}) scale(${scale})`} style={{ opacity }}>
            <g transform={`rotate(${rotation})`}>
                <path d={path} fill={color} stroke="#1e293b" strokeWidth={2} />
                <circle cx={0} cy={0} r={holeRadius} fill="#1e293b" stroke={color} strokeWidth={2} />
                <circle cx={0} cy={0} r={holeRadius * 0.5} fill={color} />
            </g>
            <text
                x={0}
                y={radius + 40}
                textAnchor="middle"
                fill="#fff"
                fontSize={24}
                fontWeight="bold"
                style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
                {text}
            </text>
        </g>
    );
};

const InfoCard: React.FC<{
    title: string;
    content: string;
    icon: string;
    x: number;
    y: number;
    opacity: number;
    color: string;
}> = ({ title, content, icon, x, y, opacity, color }) => {
    return (
        <g transform={`translate(${x}, ${y})`} style={{ opacity }}>
            <rect
                x={0}
                y={0}
                width={500}
                height={220}
                rx={12}
                fill="rgba(30, 41, 59, 0.8)"
                stroke={color}
                strokeWidth={2}
            />
            
            {/* 序号/图标背景 */}
            <circle cx={40} cy={50} r={24} fill={color} />
            <text x={40} y={60} textAnchor="middle" fill="#1e293b" fontSize={28} fontWeight="bold">
                {icon}
            </text>

            {/* 标题 */}
            <text x={85} y={58} fill={color} fontSize={34} fontWeight="bold">
                {title}
            </text>

            {/* 内容 */}
            <foreignObject x={30} y={85} width={450} height={120}>
                <div style={{ 
                    color: "#e2e8f0", 
                    fontSize: "26px", 
                    lineHeight: "1.5",
                    fontFamily: "sans-serif",
                    fontWeight: 500
                }}>
                    {content}
                </div>
            </foreignObject>
        </g>
    );
};

export const Scene6: React.FC = () => {
    const frame = useCurrentFrame();
    const timings = calculateAnimationTimings(animationConfigs);

    // 布局参数
    const cardHeight = 220;
    const gap = 60;
    const startY = 180;
    
    const item1Y = startY;
    const item2Y = startY + cardHeight + gap;
    const item3Y = startY + (cardHeight + gap) * 2;

    const gear1Y = item1Y + cardHeight / 2;
    const gear2Y = item2Y + cardHeight / 2;
    const gear3Y = item3Y + cardHeight / 2;

    // 齿轮参数
    const gear1Config = { x: 180, y: gear1Y, radius: 80, teeth: 12, color: "#60a5fa" }; // 蓝色
    const gear2Config = { x: 300, y: gear2Y, radius: 80, teeth: 12, color: "#f472b6" }; // 粉色
    const gear3Config = { x: 180, y: gear3Y, radius: 80, teeth: 12, color: "#34d399" }; // 绿色

    // 旋转动画
    // 假设每帧旋转 1 度
    const baseRotation = frame * 1; 
    
    // 齿轮1顺时针
    const rotation1 = baseRotation;
    // 齿轮2逆时针 (咬合)
    const rotation2 = -baseRotation + 15; // +15 是为了相位对齐
    // 齿轮3顺时针 (咬合)
    const rotation3 = baseRotation + 30; // +30 是为了相位对齐

    // 出现动画
    const gear1Opacity = interpolate(frame, [timings.gear1.startTime, timings.gear1.startTime + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const gear1Scale = interpolate(frame, [timings.gear1.startTime, timings.gear1.startTime + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

    const gear2Opacity = interpolate(frame, [timings.gear2.startTime, timings.gear2.startTime + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const gear2Scale = interpolate(frame, [timings.gear2.startTime, timings.gear2.startTime + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

    const gear3Opacity = interpolate(frame, [timings.gear3.startTime, timings.gear3.startTime + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const gear3Scale = interpolate(frame, [timings.gear3.startTime, timings.gear3.startTime + 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

    return (
        <AbsoluteFill style={{ background: BACKGROUND }}>
            {/* 标题 */}
            <div style={{ position: "absolute", top: 50, width: "100%", textAlign: "center", zIndex: 10 }}>
                <SpringText delay={timings.title.startTime}>
                    <div style={{ fontSize: 64, fontWeight: "bold", color: "#fff", marginBottom: 20 }}>
                        为什么我们会“降智”？
                    </div>
                </SpringText>
                <FadeInText delay={timings.title.startTime + 10}>
                    <div style={{ fontSize: 32, color: "#94a3b8" }}>
                        勒庞总结了三大成因
                    </div>
                </FadeInText>
            </div>

            <svg width="100%" height="100%" style={{ position: "absolute", top: 150, left: 0 }}>
                {/* 连接线 */}
                <path 
                    d={`M 260 ${gear1Y} L 420 ${gear1Y}`}
                    stroke={gear1Config.color} 
                    strokeWidth={3} 
                    strokeDasharray="8,8"
                    opacity={gear1Opacity}
                />
                 <path 
                    d={`M 380 ${gear2Y} L 420 ${gear2Y}`}
                    stroke={gear2Config.color} 
                    strokeWidth={3} 
                    strokeDasharray="8,8"
                    opacity={gear2Opacity}
                />
                 <path 
                    d={`M 260 ${gear3Y} L 420 ${gear3Y}`}
                    stroke={gear3Config.color} 
                    strokeWidth={3} 
                    strokeDasharray="8,8"
                    opacity={gear3Opacity}
                />

                {/* 齿轮组 */}
                <Gear
                    {...gear1Config}
                    rotation={rotation1}
                    text="Anonymity"
                    opacity={gear1Opacity}
                    scale={gear1Scale}
                />
                <Gear
                    {...gear2Config}
                    rotation={rotation2}
                    text="Contagion"
                    opacity={gear2Opacity}
                    scale={gear2Scale}
                />
                <Gear
                    {...gear3Config}
                    rotation={rotation3}
                    text="Suggestibility"
                    opacity={gear3Opacity}
                    scale={gear3Scale}
                />

                {/* 信息卡片 */}
                <InfoCard
                    title="匿名性"
                    content="“法不责众”。藏在人群里，责任感消失，胆子变大，敢做平时不敢做的坏事。"
                    icon="1"
                    x={420}
                    y={item1Y}
                    opacity={gear1Opacity}
                    color={gear1Config.color}
                />
                <InfoCard
                    title="传染性"
                    content="情绪也是病毒。狂热、恐慌、愤怒，在人群中会以几何级数扩散。"
                    icon="2"
                    x={420}
                    y={item2Y}
                    opacity={gear2Opacity}
                    color={gear2Config.color}
                />
                <InfoCard
                    title="易受暗示性"
                    content="大脑像被催眠。此时逻辑下线，谁声音大、谁情绪激昂，就听谁的。"
                    icon="3"
                    x={420}
                    y={item3Y}
                    opacity={gear3Opacity}
                    color={gear3Config.color}
                />

            </svg>
        </AbsoluteFill>
    );
};
