import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring } from "remotion";
import { CartoonPerson } from "../components";

/**
 * P1: 标题场景
 * 展示人身攻击谬误的标题和基本概念
 */
export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  // subtitleOpacity 控制副标题的透明度（实现淡入动画）
  // 使用 interpolate 对当前帧 frame 进行插值，生成从 0~1 的透明度变化
  // 参数详解：
  // - frame：当前帧编号，决定动画进度
  // - [20, 40]：输入区间，表示第20帧时透明度为0，第40帧时透明度为1
  // - [0, 1]：输出区间，对应透明度从0（全透明）到1（全不透明）
  // - extrapolateLeft: "clamp"：小于20帧时输出均为0
  // - extrapolateRight: "clamp"：大于40帧时输出均为1
  const subtitleOpacity = interpolate(
    frame,              // 当前帧数，动画进度驱动因子
    [110, 130],           // 插值输入范围，动画将在第20-40帧之间发生
    [0, 1],             // 插值输出范围，对应透明度由0变到1
    {
      extrapolateLeft: "clamp",   // 小于20帧时保持透明度为0
      extrapolateRight: "clamp",  // 大于40帧时保持透明度为1
    }
  );

  // 逐渐淡入-呈现“被指责的人”手里纸张的透明度动画
  // 此 spring 动画函数各参数解释如下：
  // - frame: 当前帧编号减去30，表示动画延迟30帧后开始（即前30帧不显示）
  // - fps: 视频的帧率（frames per second），用于保证动画速度与帧率适配
  // - config: spring动画配置，这里只设置damping（阻尼系数），数值越大运动越快平滑
  const paperOpacity = spring({
    frame: frame - 35,     // 当前帧编号，减去30实现延迟出现
    fps,                   // 视频帧率，保持动画时间一致性
    config: { damping: 80 } // 阻尼系数，决定动画收敛快慢
  });

  const personOpacity = spring({
    frame: frame - 45,
    fps,
    config: { damping: 80 },
  });

  

  const conceptOpacity = interpolate(frame, [70, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #E74C3C 0%, #C0392B 100%)",
        padding: 60,
      }}
    >
      {/* 标题区域 */}
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <div
          style={{
            fontSize: 80,
            fontWeight: "bold",
            color: "white",
            transform: `scale(${titleScale})`,
            textShadow: "0 4px 30px rgba(0,0,0,0.3)",
          }}
        >
          逻辑谬误01：人身攻击
        </div>
      </div>

      {/* 漫画场景 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 80,
          marginTop: 50,
        }}
      >
        {/* 被指责的人 */}
        <div style={{ opacity: paperOpacity }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: "20px 30px",
              marginTop: 10,
              fontSize: 32,
              fontWeight: "bold",
              color: "#27AE60",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            }}
          >
            1+1=2 ✓
          </div>
          <CartoonPerson expression="confused" color="#3498DB" />
        </div>
        {/* 指责的人 */}
        <div style={{ opacity: personOpacity }}>
          
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: "15px 25px",
              marginTop: -30,
              marginLeft: -20,
              fontSize: 30,
              color: "#333",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              maxWidth: 280,
            }}
          >
            "你长得丑，所以你数学题算错了！"
          </div>
          <CartoonPerson expression="angry" color="#9B59B6" pointing />
        </div>

        
      </div>

      {/* 副标题问题 */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          opacity: conceptOpacity,
        }}
      >
        <div style={{ fontSize: 32, color: "#F1C40F", fontWeight: "bold" }}>
          为什么"长得丑"不代表"算得错"？
        </div>
      </div>

      {/* 概念解析 */}
      <div
        style={{
          textAlign: "center",
          marginTop: 40,
          opacity: subtitleOpacity,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 20,
            padding: "25px 35px",
          }}
        >
          <div style={{ fontSize: 26, color: "white", lineHeight: 1.7 }}>
            <strong>概念解析：</strong>当辩论不赢时，通过攻击对方的
            <span style={{ color: "#F1C40F" }}>长相、身份、动机或过往</span>
            ，来试图证明对方的观点是错的。
          </div>
          <div style={{ fontSize: 24, color: "#FADBD8", marginTop: 15 }}>
            ❌ 典型话术："你个键盘侠懂什么？""你就是个圣母！"
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
