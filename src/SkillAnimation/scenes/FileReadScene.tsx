import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { FileTree } from "../components/FileTree";
import { ContextWindow } from "../../AdHominem/components/ContextWindow";
import { TypewriterText } from "../components/TypewriterText";

interface FileReadSceneProps {
  primaryColor: string;
  accentColor: string;
  sceneStart?: number;
  sceneDuration?: number;
}

// 元素动画时长配置
const ELEMENT_DURATIONS = {
  TREE_TRANSITION: 30,
  CONTENT_FADE_IN: 30,
  TYPEWRITER: 120, // 剩余时长
} as const;

// 计算元素起始帧
const ELEMENT_STARTS = {
  TREE_TRANSITION: 0,
  CONTENT_FADE_IN: 0, // 与树过渡同时进行
  TYPEWRITER: ELEMENT_DURATIONS.TREE_TRANSITION,
} as const;

// 计算场景总时长（最后一个元素的结束帧）
export const SCENE_DURATION = ELEMENT_STARTS.TYPEWRITER + ELEMENT_DURATIONS.TYPEWRITER;

const skillContent = `---
name: remotion-best-practices
description: Best practices for Remotion
---

# Remotion 最佳实践

所有动画必须使用 useCurrentFrame() 驱动。

禁止使用 CSS transitions 或动画库。

使用 interpolate() 或 spring() 实现动画效果。

组件必须是确定性的，相同输入产生相同输出。`;

/**
 * 场景2：文件读取
 * 展示 skill 文件内容被读取
 */
export const FileReadScene: React.FC<FileReadSceneProps> = ({
  primaryColor,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 文件树缩小并淡出
  const treeScale = interpolate(
    frame,
    [ELEMENT_STARTS.TREE_TRANSITION, ELEMENT_STARTS.TREE_TRANSITION + ELEMENT_DURATIONS.TREE_TRANSITION],
    [1, 0.6],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const treeOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.TREE_TRANSITION, ELEMENT_STARTS.TREE_TRANSITION + ELEMENT_DURATIONS.TREE_TRANSITION],
    [1, 0.5],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 文件内容窗口淡入
  const contentOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.CONTENT_FADE_IN, ELEMENT_STARTS.CONTENT_FADE_IN + ELEMENT_DURATIONS.CONTENT_FADE_IN],
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
      {/* 左侧：文件树（缩小） */}
      <div
        style={{
          opacity: treeOpacity,
          transform: `scale(${treeScale})`,
        }}
      >
        <FileTree highlightPath=".cursor/skills/remotion/SKILL.md" />
      </div>

      {/* 右侧：文件内容 */}
      <div
        style={{
          flex: 1,
          opacity: contentOpacity,
          maxWidth: 900,
        }}
      >
        <ContextWindow title="SKILL.md" style={{ height: "100%" }}>
          <TypewriterText
            text={skillContent}
            startFrame={typewriterStartFrame}
            charactersPerFrame={3}
          />
        </ContextWindow>
      </div>
    </AbsoluteFill>
  );
};
