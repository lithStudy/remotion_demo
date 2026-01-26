import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { CommentBox } from "../components";

/**
 * P4: 案例二 - 地域/身份攻击
 * 展示查成分类型的人身攻击
 */
export const Case2Scene: React.FC = () => {
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
        <div style={{ fontSize: 48, fontWeight: "bold", color: "#9B59B6" }}>
          案例二：地域/身份攻击
        </div>
        <div style={{ fontSize: 26, color: "#7F8C8D", marginTop: 10 }}>
          查成分（Genetic Fallacy）
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
            avatar="🎬"
            username="用户A"
            content="这部国产电影剧情有硬伤。"
            opacity={comment1Scale}
            scale={comment1Scale}
          />
          <CommentBox
            avatar="🔥"
            username="用户B"
            content="你IP在国外，这就开始递刀子了？不爱国就闭嘴！"
            isAttack
            attackColor="#9B59B6"
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
            backgroundColor: "#F5EEF8",
            borderRadius: 15,
            padding: "20px 25px",
            borderLeft: "5px solid #9B59B6",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#9B59B6",
              marginBottom: 10,
            }}
          >
            🔍 谬误剖析
          </div>
          <div style={{ fontSize: 22, color: "#333", lineHeight: 1.6 }}>
            通过攻击说话者的
            <span style={{ color: "#9B59B6", fontWeight: "bold" }}>
              地理位置或身份
            </span>
            （IP地址）来剥夺其发言权，而非讨论电影本身的好坏。
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
            "电影好不好看是艺术鉴赏问题，与我在哪里无关。请问针对我提出的剧情漏洞，你有何高见？"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
