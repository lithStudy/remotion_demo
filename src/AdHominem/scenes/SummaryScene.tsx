import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  spring,
} from "remotion";
import { BrainWorkout } from "../components";

/**
 * P6: 总结场景
 * 展示本期要点总结和下期预告
 */
export const SummaryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = spring({
    frame,
    fps,
    config: { damping: 100 },
  });

  const item1Opacity = spring({
    frame: frame - 20,
    fps,
    config: { damping: 100 },
  });

  const item2Opacity = spring({
    frame: frame - 40,
    fps,
    config: { damping: 100 },
  });

  const item3Opacity = spring({
    frame: frame - 60,
    fps,
    config: { damping: 100 },
  });

  const brainScale = spring({
    frame: frame - 80,
    fps,
    config: { damping: 80, stiffness: 100 },
  });

  const previewOpacity = spring({
    frame: frame - 110,
    fps,
    config: { damping: 100 },
  });

  // 大脑举重动画进度
  const workoutProgress = interpolate(frame - 80, [0, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: 60,
      }}
    >
      {/* 标题 */}
      <div
        style={{
          textAlign: "center",
          marginBottom: 40,
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "white",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          本期总结
        </div>
      </div>

      <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
        {/* 左侧总结要点 */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 25 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              opacity: item1Opacity,
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "25px 35px",
              borderRadius: 15,
            }}
          >
            <span style={{ fontSize: 36 }}>✅</span>
            <span style={{ fontSize: 32, color: "white" }}>
              骂人 <span style={{ color: "#F1C40F" }}>≠</span> 驳倒
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              opacity: item2Opacity,
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "25px 35px",
              borderRadius: 15,
            }}
          >
            <span style={{ fontSize: 36 }}>✅</span>
            <span style={{ fontSize: 32, color: "white" }}>
              动机不纯 <span style={{ color: "#F1C40F" }}>≠</span> 事实为假
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              opacity: item3Opacity,
              backgroundColor: "rgba(255,255,255,0.15)",
              padding: "25px 35px",
              borderRadius: 15,
            }}
          >
            <span style={{ fontSize: 36 }}>✅</span>
            <span style={{ fontSize: 28, color: "white", lineHeight: 1.4 }}>
              哪怕是魔鬼，如果他说"现在是白天"，那也是真话
            </span>
          </div>
        </div>

        {/* 右侧大脑举重动画 */}
        <div
          style={{
            flex: 0.6,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BrainWorkout
            scale={brainScale}
            opacity={brainScale}
            workoutProgress={workoutProgress}
          />
        </div>
      </div>

      {/* 下期预告 */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 60,
          right: 60,
          opacity: previewOpacity,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            borderRadius: 20,
            padding: "25px 35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
            <span style={{ fontSize: 36 }}>👋</span>
            <span style={{ fontSize: 28, color: "white" }}>下期预告：</span>
          </div>
          <div style={{ fontSize: 32, color: "#F1C40F", fontWeight: "bold" }}>
            你行你上？真的需要行才能上吗？
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
