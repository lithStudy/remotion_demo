import React from "react";

export interface ContextWindowProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  opacity?: number;
  scale?: number;
  style?: React.CSSProperties;
}

/**
 * Context 窗口组件
 * 用于展示 Agent 的上下文内容（代码、提示词等）
 */
export const ContextWindow: React.FC<ContextWindowProps> = ({
  title = "Agent Context",
  content,
  children,
  opacity = 1,
  scale = 1,
  style,
}) => {
  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        backgroundColor: "#0d1117",
        borderRadius: 12,
        border: "2px solid #30363d",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
        fontFamily: "monospace",
        ...style,
      }}
    >
      {/* 标题栏 */}
      <div
        style={{
          backgroundColor: "#161b22",
          padding: "12px 20px",
          borderBottom: "1px solid #30363d",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        {/* 窗口控制按钮 */}
        <div style={{ display: "flex", gap: 6 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#ff5f56",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#ffbd2e",
            }}
          />
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: "#27c93f",
            }}
          />
        </div>
        <div
          style={{
            color: "#8b949e",
            fontSize: 20,
            marginLeft: 12,
            fontWeight: 500,
          }}
        >
          {title}
        </div>
      </div>

      {/* 内容区域 */}
      <div
        style={{
          padding: "20px",
          color: "#c9d1d9",
          fontSize: 24,
          lineHeight: 1.8,
          maxHeight: "600px",
          overflow: "auto",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {children || content}
      </div>
    </div>
  );
};
