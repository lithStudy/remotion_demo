import React from "react";
import { useCurrentFrame, interpolate } from "remotion";

export interface DataFlowProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  color?: string;
  opacity?: number;
  startFrame?: number;
  durationInFrames?: number;
}

/**
 * 数据流动动画组件
 * 使用 SVG path 实现从起点到终点的数据流动效果
 */
export const DataFlow: React.FC<DataFlowProps> = ({
  fromX,
  fromY,
  toX,
  toY,
  color = "#64ffda",
  opacity = 1,
  startFrame = 0,
  durationInFrames = 60,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 计算控制点，创建平滑的曲线
  const controlX1 = fromX + (toX - fromX) * 0.5;
  const controlY1 = fromY;
  const controlX2 = fromX + (toX - fromX) * 0.5;
  const controlY2 = toY;

  // 计算当前粒子位置
  const t = progress;
  const currentX =
    (1 - t) ** 3 * fromX +
    3 * (1 - t) ** 2 * t * controlX1 +
    3 * (1 - t) * t ** 2 * controlX2 +
    t ** 3 * toX;
  const currentY =
    (1 - t) ** 3 * fromY +
    3 * (1 - t) ** 2 * t * controlY1 +
    3 * (1 - t) * t ** 2 * controlY2 +
    t ** 3 * toY;

  // 绘制路径
  const path = `M ${fromX} ${fromY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${toX} ${toY}`;

  const pathOpacity = interpolate(
    frame,
    [startFrame, startFrame + durationInFrames],
    [0.3, 0.8],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 粒子大小脉冲动画
  const particleRadius = 8 + 2 * Math.sin((frame - startFrame) * 0.5);

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
      }}
    >
      {/* 路径线 */}
      <path
        d={path}
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeDasharray="10 5"
        opacity={pathOpacity}
      />
      {/* 流动粒子 */}
      {progress > 0 && progress < 1 && (
        <circle
          cx={currentX}
          cy={currentY}
          r={particleRadius}
          fill={color}
          opacity={0.9}
        />
      )}
    </svg>
  );
};
