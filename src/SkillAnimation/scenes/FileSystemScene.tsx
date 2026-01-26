import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { FileTree } from "../components/FileTree";

interface FileSystemSceneProps {
  primaryColor: string;
  accentColor: string;
  sceneStart?: number;
  sceneDuration?: number;
}

// 元素动画时长配置
const ELEMENT_DURATIONS = {
  TREE_FADE_IN: 30,
  SCAN_LINE: 30,
  HIGHLIGHT: 30,
} as const;

// 计算元素起始帧
const ELEMENT_STARTS = {
  TREE_FADE_IN: 0,
  SCAN_LINE: ELEMENT_DURATIONS.TREE_FADE_IN,
  HIGHLIGHT: ELEMENT_DURATIONS.TREE_FADE_IN + ELEMENT_DURATIONS.SCAN_LINE,
} as const;

// 计算场景总时长（最后一个元素的结束帧）
export const SCENE_DURATION = ELEMENT_STARTS.HIGHLIGHT + ELEMENT_DURATIONS.HIGHLIGHT;

/**
 * 场景1：文件系统扫描
 * 展示 skill 文件的发现过程
 */
export const FileSystemScene: React.FC<FileSystemSceneProps> = ({
  primaryColor,
  accentColor,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 文件树淡入
  const treeOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.TREE_FADE_IN, ELEMENT_STARTS.TREE_FADE_IN + ELEMENT_DURATIONS.TREE_FADE_IN],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // 扫描线位置
  const scanLineY = interpolate(
    frame,
    [ELEMENT_STARTS.SCAN_LINE, ELEMENT_STARTS.SCAN_LINE + ELEMENT_DURATIONS.SCAN_LINE],
    [0, 1080],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  // Skill 文件高亮
  const highlightOpacity = spring({
    frame: Math.max(0, frame - ELEMENT_STARTS.HIGHLIGHT),
    fps,
    config: { damping: 50 },
  });

  const pulseOpacity = 0.5 + 0.5 * Math.sin((frame - ELEMENT_STARTS.HIGHLIGHT) * 0.2);

  // 状态文本显示
  const statusOpacity = interpolate(
    frame,
    [ELEMENT_STARTS.HIGHLIGHT, ELEMENT_STARTS.HIGHLIGHT + ELEMENT_DURATIONS.HIGHLIGHT],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        padding: 60,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 左侧：文件树 */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: "50%",
          transform: "translateY(-50%)",
          opacity: treeOpacity,
        }}
      >
        <FileTree
          highlightPath=".cursor/skills/remotion/SKILL.md"
          highlightOpacity={frame >= ELEMENT_STARTS.HIGHLIGHT ? highlightOpacity * pulseOpacity : 0}
        />
      </div>

      {/* 扫描线 */}
      {frame >= ELEMENT_STARTS.SCAN_LINE && frame <= ELEMENT_STARTS.SCAN_LINE + ELEMENT_DURATIONS.SCAN_LINE && (
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: scanLineY,
            height: 4,
            background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)`,
            boxShadow: `0 0 20px ${primaryColor}`,
            zIndex: 10,
          }}
        />
      )}

      {/* 状态提示 */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: statusOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: primaryColor,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          发现 Skill 文件
        </div>
        <div
          style={{
            fontSize: 24,
            color: accentColor,
            fontFamily: "monospace",
          }}
        >
          .cursor/skills/remotion/SKILL.md
        </div>
      </div>
    </AbsoluteFill>
  );
};
