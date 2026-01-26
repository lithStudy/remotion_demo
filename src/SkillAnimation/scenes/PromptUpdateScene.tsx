import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { ContextWindow } from "../../AdHominem/components/ContextWindow";
import { DataFlow } from "../components/DataFlow";
import { TypewriterText } from "../components/TypewriterText";

interface PromptUpdateSceneProps {
  primaryColor: string;
  accentColor: string;
  sceneStart?: number;
  sceneDuration?: number;
}

// 元素动画时长配置
const ELEMENT_DURATIONS = {
  BEFORE_FADE_IN: 30,
  DATA_FLOW: 30,
  BEFORE_FADE_OUT: 30,
  AFTER_FADE_IN: 30,
  TYPEWRITER: 60, // 剩余时长
  HIGHLIGHT: 90, // 剩余时长
} as const;

// 计算元素起始帧
const ELEMENT_STARTS = {
  BEFORE_FADE_IN: 0,
  DATA_FLOW: ELEMENT_DURATIONS.BEFORE_FADE_IN,
  BEFORE_FADE_OUT: ELEMENT_DURATIONS.BEFORE_FADE_IN + ELEMENT_DURATIONS.DATA_FLOW,
  AFTER_FADE_IN: ELEMENT_DURATIONS.BEFORE_FADE_IN + ELEMENT_DURATIONS.DATA_FLOW,
  TYPEWRITER: ELEMENT_DURATIONS.BEFORE_FADE_IN + ELEMENT_DURATIONS.DATA_FLOW,
  HIGHLIGHT: ELEMENT_DURATIONS.BEFORE_FADE_IN + ELEMENT_DURATIONS.DATA_FLOW + ELEMENT_DURATIONS.AFTER_FADE_IN,
} as const;

// 计算场景总时长（最后一个元素的结束帧）
export const SCENE_DURATION = ELEMENT_STARTS.HIGHLIGHT + ELEMENT_DURATIONS.HIGHLIGHT;

const promptBefore = `你是一个 AI 编程助手...

你的任务是帮助用户编写代码。

遵循最佳实践和代码规范。`;

const promptAfter = `你是一个 AI 编程助手...

你的任务是帮助用户编写代码。

遵循最佳实践和代码规范。

[Skill: remotion-best-practices]
所有动画必须使用 useCurrentFrame() 驱动。
禁止使用 CSS transitions。
使用 interpolate() 或 spring() 实现动画。
组件必须是确定性的。`;

/**
 * 场景4：提示词更新
 * 展示系统提示词如何被更新
 */
export const PromptUpdateScene: React.FC<PromptUpdateSceneProps> = ({
  primaryColor,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 上半部分：更新前的提示词
  const beforeOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.BEFORE_FADE_IN, ELEMENT_STARTS.BEFORE_FADE_IN + ELEMENT_DURATIONS.BEFORE_FADE_IN],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const beforeFadeOut = interpolate(
    frame,
    [ELEMENT_STARTS.BEFORE_FADE_OUT, ELEMENT_STARTS.BEFORE_FADE_OUT + ELEMENT_DURATIONS.BEFORE_FADE_OUT],
    [1, 0.3],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 数据流动动画
  const dataFlowOpacity = interpolate(
    frame,
    [
      ELEMENT_STARTS.DATA_FLOW,
      ELEMENT_STARTS.DATA_FLOW + ELEMENT_DURATIONS.DATA_FLOW,
      ELEMENT_STARTS.BEFORE_FADE_OUT + ELEMENT_DURATIONS.BEFORE_FADE_OUT,
    ],
    [0, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 下半部分：更新后的提示词
  const afterOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.AFTER_FADE_IN, ELEMENT_STARTS.AFTER_FADE_IN + ELEMENT_DURATIONS.AFTER_FADE_IN],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 打字机效果
  const typewriterStartFrame = ELEMENT_STARTS.TYPEWRITER;

  // 高亮新增内容
  const highlightOpacity = 0.3 + 0.2 * Math.sin((frame - ELEMENT_STARTS.HIGHLIGHT) * 0.3);

  return (
    <AbsoluteFill
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      {/* 上半部分：更新前的提示词 */}
      <div
        style={{
          flex: 1,
          opacity: beforeOpacity * beforeFadeOut,
        }}
      >
        <ContextWindow title="系统提示词 (更新前)" style={{ height: "100%" }}>
          <div
            style={{
              color: "#c9d1d9",
              fontSize: 22,
              lineHeight: 1.8,
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
            }}
          >
            {promptBefore}
          </div>
        </ContextWindow>
      </div>

      {/* 数据流动动画 */}
      {frame >= ELEMENT_STARTS.DATA_FLOW && frame <= ELEMENT_STARTS.BEFORE_FADE_OUT + ELEMENT_DURATIONS.BEFORE_FADE_OUT && (
        <div style={{ position: "absolute", width: "100%", height: "100%", opacity: dataFlowOpacity }}>
          <DataFlow
            fromX={960}
            fromY={300}
            toX={960}
            toY={780}
            color={primaryColor}
            startFrame={ELEMENT_STARTS.DATA_FLOW}
            durationInFrames={ELEMENT_DURATIONS.DATA_FLOW}
          />
        </div>
      )}

      {/* 下半部分：更新后的提示词 */}
      <div
        style={{
          flex: 1,
          opacity: afterOpacity,
        }}
      >
        <ContextWindow title="系统提示词 (更新后)" style={{ height: "100%" }}>
          <div style={{ position: "relative" }}>
            <TypewriterText
              text={promptAfter}
              startFrame={typewriterStartFrame}
              charactersPerFrame={3}
            />
            {/* 高亮新增内容 */}
            {frame >= ELEMENT_STARTS.HIGHLIGHT && (
              <div
                style={{
                  position: "absolute",
                  top: "60%",
                  left: 0,
                  right: 0,
                  height: "35%",
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
