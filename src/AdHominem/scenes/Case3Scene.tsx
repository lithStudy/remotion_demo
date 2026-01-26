import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { CartoonPerson } from "../components";

/**
 * P5: 案例三 - 背景攻击
 * 展示诉诸权威反面类型的人身攻击
 */
export const Case3Scene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const personAOpacity = spring({
    frame: frame - 20,
    fps,
    config: { damping: 80 },
  });

  const personBOpacity = spring({
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
        <div style={{ fontSize: 48, fontWeight: "bold", color: "#E67E22" }}>
          案例三：背景攻击
        </div>
        <div style={{ fontSize: 26, color: "#7F8C8D", marginTop: 10 }}>
          诉诸权威的反面（Reverse Appeal to Authority）
        </div>
      </div>

      {/* 职场场景 */}
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
          🏢 职场场景
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          {/* 用户A */}
          <div style={{ textAlign: "center", opacity: personAOpacity }}>
            <CartoonPerson expression="neutral" color="#3498DB" scale={0.8} />
            <div
              style={{
                backgroundColor: "#EBF5FB",
                borderRadius: 15,
                padding: "15px 20px",
                marginTop: 10,
                maxWidth: 320,
                fontSize: 22,
                color: "#333",
                border: "2px solid #3498DB",
              }}
            >
              "这个方案的数据模型有问题。"
            </div>
            <div style={{ fontSize: 18, color: "#7F8C8D", marginTop: 10 }}>
              员工A
            </div>
          </div>

          {/* 用户B */}
          <div style={{ textAlign: "center", opacity: personBOpacity }}>
            <CartoonPerson expression="smug" color="#E67E22" scale={0.8} />
            <div
              style={{
                backgroundColor: "#FEF5E7",
                borderRadius: 15,
                padding: "15px 20px",
                marginTop: 10,
                maxWidth: 380,
                fontSize: 22,
                color: "#333",
                border: "2px solid #E67E22",
              }}
            >
              "你连大学都没毕业，也好意思质疑博士的方案？"
            </div>
            <div style={{ fontSize: 18, color: "#7F8C8D", marginTop: 10 }}>
              博士B
            </div>
          </div>
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
            backgroundColor: "#FEF5E7",
            borderRadius: 15,
            padding: "20px 25px",
            borderLeft: "5px solid #E67E22",
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#E67E22",
              marginBottom: 10,
            }}
          >
            🔍 谬误剖析
          </div>
          <div style={{ fontSize: 22, color: "#333", lineHeight: 1.6 }}>
            <span style={{ color: "#E67E22", fontWeight: "bold" }}>
              学历低不代表发现不了错误
            </span>
            。用学历压人回避了对数据本身的检查。
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
            "学历不代表不会犯错。数据是客观的，让我们一起验算一下第3行的公式，错误自然会显现。"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
