import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { ContextWindow } from "../../AdHominem/components/ContextWindow";
import { DataFlow } from "../components/DataFlow";
import { TypewriterText } from "../components/TypewriterText";

interface ParsingSceneProps {
  primaryColor: string;
  accentColor: string;
  sceneStart?: number;
  sceneDuration?: number;
}

// 元素动画时长配置
const ELEMENT_DURATIONS = {
  MARKDOWN_TRANSITION: 20,
  DATA_FLOW: 30,
  JSON_FADE_IN: 30,
  TYPEWRITER: 120, // 剩余时长
} as const;

// 计算元素起始帧
const ELEMENT_STARTS = {
  MARKDOWN_TRANSITION: 0,
  DATA_FLOW: ELEMENT_DURATIONS.MARKDOWN_TRANSITION,
  JSON_FADE_IN: ELEMENT_DURATIONS.MARKDOWN_TRANSITION + ELEMENT_DURATIONS.DATA_FLOW,
  TYPEWRITER: ELEMENT_DURATIONS.MARKDOWN_TRANSITION + ELEMENT_DURATIONS.DATA_FLOW,
} as const;

// 计算场景总时长（最后一个元素的结束帧）
export const SCENE_DURATION = ELEMENT_STARTS.TYPEWRITER + ELEMENT_DURATIONS.TYPEWRITER;

const skillMarkdown = `---
name: remotion-best-practices
description: Best practices for Remotion
---

# Remotion 最佳实践
所有动画必须使用 useCurrentFrame() 驱动。`;

const parsedJson = `{
  "name": "remotion-best-practices",
  "description": "Best practices for Remotion",
  "rules": [
    "所有动画必须使用 useCurrentFrame() 驱动",
    "禁止使用 CSS transitions",
    "使用 interpolate() 或 spring() 实现动画",
    "组件必须是确定性的"
  ]
}`;

/**
 * 场景3：解析场景
 * 展示 skill 内容被解析成结构化数据
 */
export const ParsingScene: React.FC<ParsingSceneProps> = ({
  primaryColor,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 左侧 markdown 淡入并缩小
  const markdownOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.MARKDOWN_TRANSITION, ELEMENT_STARTS.MARKDOWN_TRANSITION + ELEMENT_DURATIONS.MARKDOWN_TRANSITION],
    [0, 0.6],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const markdownScale = interpolate(
    frame,
    [ELEMENT_STARTS.MARKDOWN_TRANSITION, ELEMENT_STARTS.MARKDOWN_TRANSITION + ELEMENT_DURATIONS.MARKDOWN_TRANSITION],
    [1, 0.7],
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
      ELEMENT_STARTS.DATA_FLOW + ELEMENT_DURATIONS.DATA_FLOW + ELEMENT_DURATIONS.JSON_FADE_IN,
    ],
    [0, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // JSON 内容淡入
  const jsonOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.JSON_FADE_IN, ELEMENT_STARTS.JSON_FADE_IN + ELEMENT_DURATIONS.JSON_FADE_IN],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 打字机效果
  const typewriterStartFrame = ELEMENT_STARTS.TYPEWRITER;

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
      {/* 左侧：原始 markdown */}
      <div
        style={{
          flex: 1,
          opacity: markdownOpacity,
          transform: `scale(${markdownScale})`,
        }}
      >
        <ContextWindow title="原始文件 (Markdown)" style={{ height: "100%" }}>
          <div
            style={{
              color: "#c9d1d9",
              fontSize: 24,
              lineHeight: 1.8,
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
            }}
          >
            {skillMarkdown}
          </div>
        </ContextWindow>
      </div>

      {/* 数据流动动画 */}
      {frame >= ELEMENT_STARTS.DATA_FLOW && frame <= ELEMENT_STARTS.DATA_FLOW + ELEMENT_DURATIONS.DATA_FLOW + ELEMENT_DURATIONS.JSON_FADE_IN && (
        <div style={{ position: "absolute", width: "100%", height: "100%", opacity: dataFlowOpacity }}>
          <DataFlow
            fromX={600}
            fromY={540}
            toX={1320}
            toY={540}
            color={primaryColor}
            startFrame={ELEMENT_STARTS.DATA_FLOW}
            durationInFrames={ELEMENT_DURATIONS.DATA_FLOW}
          />
        </div>
      )}

      {/* 右侧：解析后的 JSON */}
      <div
        style={{
          flex: 1,
          opacity: jsonOpacity,
        }}
      >
        <ContextWindow title="解析结果 (JSON)" style={{ height: "100%" }}>
          <TypewriterText
            text={parsedJson}
            startFrame={typewriterStartFrame}
            charactersPerFrame={4}
          />
        </ContextWindow>
      </div>
    </AbsoluteFill>
  );
};
