import React from "react";
import {
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from "remotion";

/**
 * 稻草人 SVG 组件
 */
const StrawMan: React.FC<{ opacity: number; scale: number }> = ({ opacity, scale }) => {
    return (
        <svg
            viewBox="0 0 200 240"
            style={{
                width: 300,
                height: 360,
                opacity,
                transform: `scale(${scale})`,
                overflow: "visible",
            }}
        >
            {/* 支撑架 */}
            <line x1="100" y1="230" x2="100" y2="100" stroke="#8B4513" strokeWidth="8" />
            <line x1="60" y1="160" x2="140" y2="160" stroke="#8B4513" strokeWidth="8" />

            {/* 身体/稻草部分 */}
            <rect x="70" y="100" width="60" height="90" fill="#F4D03F" rx="5" />

            {/* 头 */}
            <circle cx="100" cy="75" r="25" fill="#FAD7A0" stroke="#E67E22" strokeWidth="3" />
            <rect x="85" y="55" width="30" height="15" fill="#F4D03F" rx="2" /> {/* 帽子顶 */}
            <line x1="75" y1="70" x2="125" y2="70" stroke="#F4D03F" strokeWidth="4" /> {/* 帽子沿 */}

            {/* 细节 */}
            <line x1="100" y1="110" x2="100" y2="190" stroke="#D4AC0D" strokeWidth="2" strokeDasharray="4 2" />
        </svg>
    );
};

/**
 * 靶子 SVG 组件
 */
const Target: React.FC<{ opacity: number; scale: number }> = ({ opacity, scale }) => {
    return (
        <svg
            viewBox="0 0 200 200"
            style={{
                width: 300,
                height: 300,
                opacity,
                transform: `scale(${scale})`,
                overflow: "visible",
            }}
        >
            {/* 靶心圈 */}
            <circle cx="100" cy="100" r="80" fill="white" stroke="#E53E3E" strokeWidth="15" />
            <circle cx="100" cy="100" r="50" fill="white" stroke="#E53E3E" strokeWidth="15" />
            <circle cx="100" cy="100" r="20" fill="#E53E3E" />

            {/* 装饰线条 */}
            <line x1="100" y1="20" x2="100" y2="180" stroke="#E53E3E" strokeWidth="2" opacity="0.3" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#E53E3E" strokeWidth="2" opacity="0.3" />
        </svg>
    );
};

interface StrawManToTargetProps {
    delay?: number;
    duration?: number;
    style?: React.CSSProperties;
}

export const StrawManToTarget: React.FC<StrawManToTargetProps> = ({
    delay = 0,
    duration = 60,
    style,
}) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const switchPoint = 0.3; // 在持续时间的 40% 处切换
    const progress = (frame - delay) / duration;

    // --- 稻草人动画 (被踢飞) ---
    // 稻草人在进入切换点前一段时间开始动作
    const kickStart = switchPoint - 0.1;

    // 向右飞出
    const strawManTranslateX = interpolate(
        progress,
        [kickStart, switchPoint],
        [0, 800],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // 飞出时的快速旋转
    const strawManRotate = interpolate(
        progress,
        [kickStart, switchPoint],
        [0, 45],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    const strawManOpacity = interpolate(
        progress,
        [kickStart, switchPoint],
        [1, 0],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    // --- 靶子动画 (飞入 + 摇晃) ---
    const targetEnterStartTime = delay + duration * switchPoint;
    const targetFrame = frame - targetEnterStartTime;

    // 飞入动画 (使用 spring 实现动感)
    const targetSpring = spring({
        frame: targetFrame,
        fps,
        config: { damping: 12, stiffness: 100 }, // 稍微有点弹性
    });

    const targetTranslateX = interpolate(targetSpring, [0, 1], [-600, 0]);
    const targetOpacity = interpolate(targetFrame, [0, 5], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
    });

    // 左右摇晃效果 (使用另一个低阻尼 spring 来驱动旋转)
    const swaySpring = spring({
        frame: targetFrame,
        fps,
        config: { damping: 6, stiffness: 120 }, // 产生明显的过冲和回摆
    });

    // 将过冲映射为旋转角度：1 为平衡点，偏离 1 则产生旋转，模拟回摆过程
    // 当 swaySpring 超过 1（如 1.15）时产生正向旋转，低于 1（如 0.9）时产生负向旋转
    const targetRotate = interpolate(
        swaySpring,
        [0.8, 1, 1.2], // 覆盖可能的过冲范围
        [-10, 0, 10]
    );

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 400,
                position: "relative",
                ...style,
            }}
        >
            {/* 稻草人 */}
            <div
                style={{
                    position: "absolute",
                    transform: `translateX(${strawManTranslateX}px) rotate(${strawManRotate}deg)`,
                    opacity: strawManOpacity,
                }}
            >
                <StrawMan opacity={1} scale={1} />
            </div>

            {/* 靶子 */}
            <div
                style={{
                    position: "absolute",
                    transform: `translateX(${targetTranslateX}px) rotate(${targetRotate}deg) scale(${targetSpring})`,
                    opacity: targetOpacity,
                }}
            >
                <Target opacity={1} scale={1} />
            </div>
        </div>
    );
};
