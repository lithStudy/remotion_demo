import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { Shield } from "../components";

/**
 * P2: 策略场景 - 人剑分离法
 * 展示应对人身攻击的策略
 */
export const StrategyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const shieldScale = spring({
    frame,
    fps,
    config: { damping: 80 },
  });

  const titleOpacity = spring({
    frame: frame - 10,
    fps,
    config: { damping: 100 },
  });

  const step1Opacity = spring({
    frame: frame - 30,
    fps,
    config: { damping: 100 },
  });

  const step2Opacity = spring({
    frame: frame - 50,
    fps,
    config: { damping: 100 },
  });

  const step3Opacity = spring({
    frame: frame - 70,
    fps,
    config: { damping: 100 },
  });

  const formulaOpacity = spring({
    frame: frame - 90,
    fps,
    config: { damping: 100 },
  });

  const goldenSentenceOpacity = spring({
    frame: frame - 110,
    fps,
    config: { damping: 100 },
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
        padding: 60,
      }}
    >
      {/* 标题 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          marginBottom: 40,
          opacity: titleOpacity,
        }}
      >
        <div style={{ position: "relative" }}>
          <Shield text="反射" scale={shieldScale * 0.7} opacity={shieldScale} />
        </div>
        <div>
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "#3498DB",
              textShadow: "0 2px 10px rgba(52,152,219,0.5)",
            }}
          >
            人剑分离法
          </div>
          <div style={{ fontSize: 28, color: "#95A5A6", marginTop: 10 }}>
            The Separation Strategy
          </div>
        </div>
      </div>

      {/* 核心心法 */}
      <div
        style={{
          backgroundColor: "rgba(52,152,219,0.2)",
          borderRadius: 20,
          padding: "25px 40px",
          marginBottom: 30,
          border: "2px solid #3498DB",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: 15,
          }}
        >
          💡 <strong>核心心法：</strong>
          <span style={{ color: "#F1C40F" }}>
            把"说话的人"和"说出的话"分开看
          </span>
        </div>
      </div>

      {/* 公式图解 */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 30,
          opacity: formulaOpacity,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 20,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 15,
            padding: "20px 40px",
          }}
        >
          <span style={{ fontSize: 36, color: "#E74C3C" }}>观点</span>
          <span style={{ fontSize: 48, color: "white" }}>≠</span>
          <span style={{ fontSize: 36, color: "#3498DB" }}>发言者</span>
        </div>
      </div>

      {/* 三步法 */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            opacity: step1Opacity,
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "20px 30px",
            borderRadius: 15,
            borderLeft: "5px solid #E74C3C",
          }}
        >
          <span
            style={{ fontSize: 36, fontWeight: "bold", color: "#E74C3C" }}
          >
            1
          </span>
          <div>
            <span style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>
              识别：
            </span>
            <span style={{ fontSize: 26, color: "#BDC3C7" }}>
              对方在攻击你的特征（身份/动机），而不是你的论据
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            opacity: step2Opacity,
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "20px 30px",
            borderRadius: 15,
            borderLeft: "5px solid #F1C40F",
          }}
        >
          <span
            style={{ fontSize: 36, fontWeight: "bold", color: "#F1C40F" }}
          >
            2
          </span>
          <div>
            <span style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>
              不怒：
            </span>
            <span style={{ fontSize: 26, color: "#BDC3C7" }}>
              他攻击人，说明他在逻辑上已经输了
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            opacity: step3Opacity,
            backgroundColor: "rgba(255,255,255,0.1)",
            padding: "20px 30px",
            borderRadius: 15,
            borderLeft: "5px solid #27AE60",
          }}
        >
          <span
            style={{ fontSize: 36, fontWeight: "bold", color: "#27AE60" }}
          >
            3
          </span>
          <div>
            <span style={{ fontSize: 28, color: "white", fontWeight: "bold" }}>
              回正：
            </span>
            <span style={{ fontSize: 26, color: "#BDC3C7" }}>
              强行把话题拉回事实本身
            </span>
          </div>
        </div>
      </div>

      {/* 万能金句 */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 60,
          right: 60,
          opacity: goldenSentenceOpacity,
        }}
      >
        <div
          style={{
            backgroundColor: "#27AE60",
            borderRadius: 20,
            padding: "25px 35px",
            boxShadow: "0 4px 20px rgba(39,174,96,0.4)",
          }}
        >
          <div style={{ fontSize: 24, color: "white", marginBottom: 10 }}>
            🎯 万能金句：
          </div>
          <div
            style={{
              fontSize: 28,
              color: "white",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            "即使我是个[坏标签]，也不影响[事实]本身的真实性，请回应事实。"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
