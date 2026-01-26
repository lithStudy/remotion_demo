import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { CommentBox } from "../components";

/**
 * P3: 案例一 - 圣母羞辱
 * 展示诉诸动机类型的人身攻击
 */
export const Case1Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const comment1Scale = spring({
    frame: frame - 20,
    fps,
    config: { damping: 80 },
  });

  const comment2Scale = spring({
    frame: frame - 50,
    fps,
    config: { damping: 80 },
  });

  const analysisOpacity = spring({
    frame: frame - 80,
    fps,
    config: { damping: 100 },
  });

  const responseOpacity = spring({
    frame: frame - 110,
    fps,
    config: { damping: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)",
        padding: 60,
      }}
    >
      {/* 标题 */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 30,
          opacity: titleOpacity,
        }}
      >
        <div style={{ fontSize: 48, fontWeight: "bold", color: "#E74C3C" }}>
          案例一："圣母"羞辱
        </div>
        <div style={{ fontSize: 26, color: "#7F8C8D", marginTop: 10 }}>
          诉诸动机（Appeal to Motive）
        </div>
      </div>

      {/* 模拟评论区 */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: 20,
          padding: 30,
          boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
          marginBottom: 30,
        }}
      >
        <div style={{ fontSize: 20, color: "#95A5A6", marginBottom: 20 }}>
          💬 评论区
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <CommentBox
            avatar="🐱"
            username="用户A"
            content="建议加强流浪动物保护。"
            opacity={comment1Scale}
            scale={comment1Scale}
          />
          <CommentBox
            avatar="😤"
            username="用户B"
            content="我看你就是个圣母婊，贫困山区孩子怎么没见你捐钱？"
            isAttack
            opacity={comment2Scale}
            scale={comment2Scale}
          />
        </div>
      </div>

      {/* 谬误剖析 */}
      <div
        style={{
          display: "flex",
          gap: 30,
          opacity: analysisOpacity,
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundColor: "#FDEDEC",
            borderRadius: 15,
            padding: "20px 25px",
            borderLeft: "5px solid #E74C3C",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#E74C3C",
              marginBottom: 10,
            }}
          >
            🔍 谬误剖析
          </div>
          <div style={{ fontSize: 22, color: "#333", lineHeight: 1.6 }}>
            用户B无法反驳"保护动物"的必要性，于是通过攻击A
            <span style={{ color: "#E74C3C", fontWeight: "bold" }}>
              "虚伪"或"动机不纯"
            </span>
            （圣母标签）来转移话题。
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#E8F8F5",
            borderRadius: 15,
            padding: "20px 25px",
            borderLeft: "5px solid #27AE60",
            opacity: responseOpacity,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#27AE60",
              marginBottom: 10,
            }}
          >
            🛡️ 回应实例
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#333",
              lineHeight: 1.6,
              fontStyle: "italic",
            }}
          >
            "我的道德水准高低，不影响流浪动物需要管理的事实。这是两个独立的问题，请不要混淆。"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
