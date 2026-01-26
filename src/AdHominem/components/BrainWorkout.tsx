import React from "react";
import { interpolate } from "remotion";

export interface BrainWorkoutProps {
  scale?: number;
  opacity?: number;
  /** 举重动画进度，0-1 */
  workoutProgress: number;
}

/**
 * 大脑举重动画组件
 * 用于表示思维训练、学习或思考的视觉元素
 */
export const BrainWorkout: React.FC<BrainWorkoutProps> = ({
  scale = 1,
  opacity = 1,
  workoutProgress,
}) => {
  const liftHeight = -30 * workoutProgress;

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg width="300" height="350" viewBox="0 0 300 350">
        {/* 大脑主体 */}
        <ellipse cx="150" cy="120" rx="100" ry="80" fill="#FF9FF3" />
        <path
          d="M 70 100 Q 50 80 70 60 Q 90 40 110 60 Q 130 30 160 50 Q 190 30 210 60 Q 240 40 250 80 Q 270 100 250 130"
          fill="#FF9FF3"
          stroke="#E056FD"
          strokeWidth="3"
        />

        {/* 大脑纹路 */}
        <path
          d="M 100 90 Q 130 110 100 130"
          stroke="#E056FD"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 150 70 Q 180 90 150 110"
          stroke="#E056FD"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 180 100 Q 200 120 180 140"
          stroke="#E056FD"
          strokeWidth="2"
          fill="none"
        />

        {/* 眼睛 */}
        <circle cx="120" cy="130" r="12" fill="white" />
        <circle cx="180" cy="130" r="12" fill="white" />
        <circle cx="122" cy="132" r="6" fill="#333" />
        <circle cx="182" cy="132" r="6" fill="#333" />

        {/* 嘴巴 - 努力表情 */}
        <path
          d="M 130 165 Q 150 155 170 165"
          stroke="#333"
          strokeWidth="3"
          fill="none"
        />

        {/* 手臂 */}
        <rect x="30" y="180" width="80" height="20" rx="10" fill="#FF9FF3" />
        <rect x="190" y="180" width="80" height="20" rx="10" fill="#FF9FF3" />

        {/* 杠铃 */}
        <g transform={`translate(0, ${liftHeight})`}>
          <rect x="20" y="160" width="260" height="12" rx="6" fill="#95A5A6" />
          <circle
            cx="30"
            cy="166"
            r="25"
            fill="#E74C3C"
            stroke="#C0392B"
            strokeWidth="3"
          />
          <circle
            cx="270"
            cy="166"
            r="25"
            fill="#E74C3C"
            stroke="#C0392B"
            strokeWidth="3"
          />
        </g>

        {/* 肌肉线条 */}
        {workoutProgress > 0.3 && (
          <>
            <path
              d="M 40 195 Q 30 210 50 210"
              stroke="#E056FD"
              strokeWidth="3"
              fill="none"
              opacity={workoutProgress}
            />
            <path
              d="M 260 195 Q 270 210 250 210"
              stroke="#E056FD"
              strokeWidth="3"
              fill="none"
              opacity={workoutProgress}
            />
          </>
        )}

        {/* 汗珠 */}
        {workoutProgress > 0.5 && (
          <>
            <ellipse cx="80" cy="100" rx="5" ry="8" fill="#74B9FF" opacity={0.8} />
            <ellipse
              cx="220"
              cy="95"
              rx="4"
              ry="7"
              fill="#74B9FF"
              opacity={0.8}
            />
          </>
        )}
      </svg>
    </div>
  );
};
