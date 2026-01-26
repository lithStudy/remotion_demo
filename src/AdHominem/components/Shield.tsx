import React from "react";

export interface ShieldProps {
  text: string;
  scale?: number;
  opacity?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

/**
 * 盾牌组件
 * 用于表示防御、保护或策略的视觉元素
 */
export const Shield: React.FC<ShieldProps> = ({
  text,
  scale = 1,
  opacity = 1,
  primaryColor = "#3498DB",
  secondaryColor = "#2980B9",
}) => {
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <svg width="200" height="240" viewBox="0 0 200 240">
        <defs>
          <linearGradient
            id="shieldGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={primaryColor} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
        <path
          d="M 100 10 L 180 40 L 180 120 Q 180 200 100 230 Q 20 200 20 120 L 20 40 Z"
          fill="url(#shieldGradient)"
          stroke="#1A5276"
          strokeWidth="4"
        />
        <path
          d="M 100 30 L 160 52 L 160 115 Q 160 180 100 205 Q 40 180 40 115 L 40 52 Z"
          fill="rgba(255,255,255,0.2)"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: 36,
          fontWeight: "bold",
          color: "white",
          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        {text}
      </div>
    </div>
  );
};
