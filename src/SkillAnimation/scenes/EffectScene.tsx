import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { ContextWindow } from "../../AdHominem/components/ContextWindow";

interface EffectSceneProps {
  primaryColor: string;
  accentColor: string;
  sceneStart?: number;
  sceneDuration?: number;
}

// 元素动画时长配置
const ELEMENT_DURATIONS = {
  USER_FADE_IN: 20,
  THINKING: 30,
  RESPONSE_FADE_IN: 20,
  HIGHLIGHT: 20, // 剩余时长
} as const;

// 计算元素起始帧
const ELEMENT_STARTS = {
  USER_FADE_IN: 0,
  THINKING: ELEMENT_DURATIONS.USER_FADE_IN,
  RESPONSE_FADE_IN: ELEMENT_DURATIONS.USER_FADE_IN + ELEMENT_DURATIONS.THINKING,
  HIGHLIGHT: ELEMENT_DURATIONS.USER_FADE_IN + ELEMENT_DURATIONS.THINKING + ELEMENT_DURATIONS.RESPONSE_FADE_IN,
} as const;

// 计算场景总时长（最后一个元素的结束帧）
export const SCENE_DURATION = ELEMENT_STARTS.HIGHLIGHT + ELEMENT_DURATIONS.HIGHLIGHT;

const userRequest = `用户请求：
帮我创建一个淡入动画`;

const aiResponse = `使用 useCurrentFrame() 和 interpolate() 实现淡入：

const opacity = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp'
});

return <div style={{ opacity }}>内容</div>;`;

/**
 * 场景5：效果展示
 * 展示 skill 如何影响 AI 行为
 */
export const EffectScene: React.FC<EffectSceneProps> = ({
  primaryColor,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 用户请求淡入
  const userOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.USER_FADE_IN, ELEMENT_STARTS.USER_FADE_IN + ELEMENT_DURATIONS.USER_FADE_IN],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // AI 思考动画
  const thinkingOpacity = interpolate(
    frame,
    [
      ELEMENT_STARTS.THINKING,
      ELEMENT_STARTS.THINKING + 10,
      ELEMENT_STARTS.THINKING + ELEMENT_DURATIONS.THINKING - 10,
      ELEMENT_STARTS.THINKING + ELEMENT_DURATIONS.THINKING,
    ],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const thinkingScale = spring({
    frame: Math.max(0, frame - ELEMENT_STARTS.THINKING),
    fps,
    config: { damping: 100 },
  });

  // 脉冲动画
  const getPulseOpacity = (index: number) => {
    const delay = index * 0.2 * fps;
    const pulseFrame = frame - ELEMENT_STARTS.THINKING - delay;
    if (pulseFrame < 0) return 0;
    return 0.3 + 0.7 * Math.sin((pulseFrame / fps) * Math.PI * 2);
  };

  // AI 响应淡入
  const responseOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.RESPONSE_FADE_IN, ELEMENT_STARTS.RESPONSE_FADE_IN + ELEMENT_DURATIONS.RESPONSE_FADE_IN],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 高亮受 skill 影响的部分
  const highlightOpacity = 0.3 + 0.2 * Math.sin((frame - ELEMENT_STARTS.HIGHLIGHT) * 0.3);

  return (
    <AbsoluteFill
      style={{
        padding: 60,
        display: "flex",
        gap: 60,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 左侧：用户请求 */}
      <div
        style={{
          flex: 1,
          opacity: userOpacity,
        }}
      >
        <ContextWindow title="用户" style={{ height: "100%" }}>
          <div
            style={{
              color: accentColor,
              fontSize: 28,
              lineHeight: 1.8,
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
            }}
          >
            {userRequest}
          </div>
        </ContextWindow>
      </div>

      {/* 思考动画 */}
      {frame >= ELEMENT_STARTS.THINKING && frame <= ELEMENT_STARTS.THINKING + ELEMENT_DURATIONS.THINKING && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) scale(${thinkingScale})`,
            opacity: thinkingOpacity,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  backgroundColor: primaryColor,
                  opacity: getPulseOpacity(i),
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 右侧：AI 响应 */}
      <div
        style={{
          flex: 1,
          opacity: responseOpacity,
        }}
      >
        <ContextWindow title="AI 响应 (受 Skill 影响)" style={{ height: "100%" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                color: "#c9d1d9",
                fontSize: 24,
                lineHeight: 1.8,
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
              }}
            >
              {frame >= ELEMENT_STARTS.RESPONSE_FADE_IN ? aiResponse : ""}
            </div>
            {/* 高亮受 skill 影响的部分 */}
            {frame >= ELEMENT_STARTS.HIGHLIGHT && (
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: 0,
                  right: 0,
                  height: "80%",
                  backgroundColor: `rgba(100, 255, 218, ${highlightOpacity})`,
                  borderRadius: 4,
                  pointerEvents: "none",
                }}
              />
            )}
          </div>
        </ContextWindow>
      </div>
    </AbsoluteFill>
  );
};
