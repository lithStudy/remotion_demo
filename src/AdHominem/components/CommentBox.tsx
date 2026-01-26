import React from "react";

export interface CommentBoxProps {
  avatar: string;
  username: string;
  content: string;
  isAttack?: boolean;
  opacity?: number;
  scale?: number;
  avatarColor?: string;
  attackColor?: string;
}

/**
 * 评论框组件
 * 模拟社交媒体评论区的评论样式
 */
export const CommentBox: React.FC<CommentBoxProps> = ({
  avatar,
  username,
  content,
  isAttack = false,
  opacity = 1,
  scale = 1,
  avatarColor,
  attackColor = "#E74C3C",
}) => {
  const defaultAvatarColor = isAttack ? attackColor : "#3498DB";

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        backgroundColor: "white",
        borderRadius: 16,
        padding: "20px 24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        border: isAttack ? `3px solid ${attackColor}` : "2px solid #E8E8E8",
        maxWidth: 700,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: avatarColor || defaultAvatarColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
          }}
        >
          {avatar}
        </div>
        <span style={{ fontSize: 22, fontWeight: "bold", color: "#333" }}>
          {username}
        </span>
      </div>
      <div style={{ fontSize: 26, color: "#333", lineHeight: 1.6 }}>
        {content}
      </div>
    </div>
  );
};
