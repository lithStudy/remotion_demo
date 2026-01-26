import React from "react";

export type PersonExpression = "angry" | "confused" | "neutral" | "smug";

export interface CartoonPersonProps {
  expression: PersonExpression;
  color: string;
  scale?: number;
  opacity?: number;
  pointing?: boolean;
}

/**
 * 卡通人物组件
 * 支持多种表情和指向手势，可用于各种场景演示
 */
export const CartoonPerson: React.FC<CartoonPersonProps> = ({
  expression,
  color,
  scale = 1,
  opacity = 1,
  pointing = false,
}) => {
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <svg width="160" height="200" viewBox="0 0 160 200">
        {/* 身体 */}
        <ellipse cx="80" cy="150" rx="45" ry="45" fill={color} />

        {/* 头部 */}
        <circle
          cx="80"
          cy="60"
          r="45"
          fill="#FFE0BD"
          stroke="#E8C39E"
          strokeWidth="2"
        />

        {/* 眼睛 - 根据表情变化 */}
        {expression === "angry" ? (
          <>
            <ellipse cx="60" cy="55" rx="8" ry="6" fill="white" />
            <ellipse cx="100" cy="55" rx="8" ry="6" fill="white" />
            <circle cx="62" cy="55" r="4" fill="#333" />
            <circle cx="102" cy="55" r="4" fill="#333" />
            {/* 愤怒的眉毛 */}
            <line
              x1="48"
              y1="40"
              x2="72"
              y2="45"
              stroke="#333"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="112"
              y1="40"
              x2="88"
              y2="45"
              stroke="#333"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        ) : expression === "confused" ? (
          <>
            <ellipse cx="60" cy="55" rx="10" ry="10" fill="white" />
            <ellipse cx="100" cy="55" rx="10" ry="10" fill="white" />
            <circle cx="60" cy="55" r="5" fill="#333" />
            <circle cx="100" cy="55" r="5" fill="#333" />
            {/* 困惑的眉毛 */}
            <path
              d="M 48 42 Q 60 48 72 42"
              stroke="#333"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M 88 42 Q 100 48 112 42"
              stroke="#333"
              strokeWidth="3"
              fill="none"
            />
          </>
        ) : expression === "smug" ? (
          <>
            <ellipse cx="60" cy="55" rx="8" ry="5" fill="white" />
            <ellipse cx="100" cy="55" rx="8" ry="5" fill="white" />
            <circle cx="63" cy="55" r="3" fill="#333" />
            <circle cx="103" cy="55" r="3" fill="#333" />
            <line
              x1="48"
              y1="45"
              x2="72"
              y2="48"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="112"
              y1="45"
              x2="88"
              y2="48"
              stroke="#333"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            <ellipse cx="60" cy="55" rx="10" ry="10" fill="white" />
            <ellipse cx="100" cy="55" rx="10" ry="10" fill="white" />
            <circle cx="60" cy="55" r="5" fill="#333" />
            <circle cx="100" cy="55" r="5" fill="#333" />
          </>
        )}

        {/* 嘴巴 - 根据表情变化 */}
        {expression === "angry" ? (
          <path
            d="M 55 80 Q 80 70 105 80"
            stroke="#333"
            strokeWidth="3"
            fill="none"
          />
        ) : expression === "confused" ? (
          <ellipse cx="80" cy="80" rx="8" ry="10" fill="#333" />
        ) : expression === "smug" ? (
          <path
            d="M 60 78 Q 80 90 100 78"
            stroke="#333"
            strokeWidth="3"
            fill="none"
          />
        ) : (
          <path
            d="M 60 78 Q 80 85 100 78"
            stroke="#333"
            strokeWidth="3"
            fill="none"
          />
        )}

        {/* 指向的手臂 */}
        {pointing && (
          <>
            <rect x="125" y="130" width="60" height="15" rx="7" fill="#FFE0BD" />
            <circle cx="185" cy="137" r="8" fill="#FFE0BD" />
            <line
              x1="185"
              y1="132"
              x2="200"
              y2="125"
              stroke="#FFE0BD"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </div>
  );
};
