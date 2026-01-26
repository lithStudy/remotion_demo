import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import {
  FileSystemScene,
  FileReadScene,
  ParsingScene,
  PromptUpdateScene,
  EffectScene,
  FILE_SYSTEM_DURATION,
  FILE_READ_DURATION,
  PARSING_DURATION,
  PROMPT_UPDATE_DURATION,
  EFFECT_DURATION,
} from "./scenes";

export const skillAnimationSchema = z.object({
  backgroundColor: zColor(),
  primaryColor: zColor(),
  accentColor: zColor(),
});

// 场景时长配置（从各场景动态导入，基于元素动画时长总和）
const SCENE_DURATIONS = {
  FILE_SYSTEM: FILE_SYSTEM_DURATION,      // 场景1: 文件系统扫描
  FILE_READ: FILE_READ_DURATION,          // 场景2: 文件读取
  PARSING: PARSING_DURATION,              // 场景3: 解析
  PROMPT_UPDATE: PROMPT_UPDATE_DURATION,  // 场景4: 提示词更新
  EFFECT: EFFECT_DURATION,                // 场景5: 效果展示
} as const;

// 计算每个场景的起始帧（累积方式）
const SCENE_STARTS = {
  FILE_SYSTEM: 0,
  FILE_READ: SCENE_DURATIONS.FILE_SYSTEM,
  PARSING: SCENE_DURATIONS.FILE_SYSTEM + SCENE_DURATIONS.FILE_READ,
  PROMPT_UPDATE: SCENE_DURATIONS.FILE_SYSTEM + SCENE_DURATIONS.FILE_READ + SCENE_DURATIONS.PARSING,
  EFFECT: SCENE_DURATIONS.FILE_SYSTEM + SCENE_DURATIONS.FILE_READ + SCENE_DURATIONS.PARSING + SCENE_DURATIONS.PROMPT_UPDATE,
} as const;

// 总时长
export const TOTAL_DURATION = SCENE_STARTS.EFFECT + SCENE_DURATIONS.EFFECT;

/**
 * Agent Skill 原理动画
 * 
 * 场景时间轴（通过变量累积自动计算）:
 * - 场景1 文件系统扫描: 0-{SCENE_DURATIONS.FILE_SYSTEM}帧
 * - 场景2 文件读取: {SCENE_STARTS.FILE_READ}-{SCENE_STARTS.FILE_READ + SCENE_DURATIONS.FILE_READ}帧
 * - 场景3 解析: {SCENE_STARTS.PARSING}-{SCENE_STARTS.PARSING + SCENE_DURATIONS.PARSING}帧
 * - 场景4 提示词更新: {SCENE_STARTS.PROMPT_UPDATE}-{SCENE_STARTS.PROMPT_UPDATE + SCENE_DURATIONS.PROMPT_UPDATE}帧
 * - 场景5 效果展示: {SCENE_STARTS.EFFECT}-{SCENE_STARTS.EFFECT + SCENE_DURATIONS.EFFECT}帧
 * 
 * 总时长: {TOTAL_DURATION}帧 ({TOTAL_DURATION / 30}秒 @ 30fps)
 */
export const SkillAnimation: React.FC<z.infer<typeof skillAnimationSchema>> = ({
  backgroundColor,
  primaryColor,
  accentColor,
}) => {
  return (
    <AbsoluteFill style={{ backgroundColor }}>
      {/* 场景1: 文件系统扫描 */}
      <Sequence durationInFrames={SCENE_DURATIONS.FILE_SYSTEM}>
        <FileSystemScene 
          primaryColor={primaryColor} 
          accentColor={accentColor}
          sceneStart={SCENE_STARTS.FILE_SYSTEM}
          sceneDuration={SCENE_DURATIONS.FILE_SYSTEM}
        />
      </Sequence>

      {/* 场景2: 文件读取 */}
      <Sequence from={SCENE_STARTS.FILE_READ} durationInFrames={SCENE_DURATIONS.FILE_READ}>
        <FileReadScene 
          primaryColor={primaryColor} 
          accentColor={accentColor}
          sceneStart={SCENE_STARTS.FILE_READ}
          sceneDuration={SCENE_DURATIONS.FILE_READ}
        />
      </Sequence>

      {/* 场景3: 解析 */}
      <Sequence from={SCENE_STARTS.PARSING} durationInFrames={SCENE_DURATIONS.PARSING}>
        <ParsingScene 
          primaryColor={primaryColor} 
          accentColor={accentColor}
          sceneStart={SCENE_STARTS.PARSING}
          sceneDuration={SCENE_DURATIONS.PARSING}
        />
      </Sequence>

      {/* 场景4: 提示词更新 */}
      <Sequence from={SCENE_STARTS.PROMPT_UPDATE} durationInFrames={SCENE_DURATIONS.PROMPT_UPDATE}>
        <PromptUpdateScene 
          primaryColor={primaryColor} 
          accentColor={accentColor}
          sceneStart={SCENE_STARTS.PROMPT_UPDATE}
          sceneDuration={SCENE_DURATIONS.PROMPT_UPDATE}
        />
      </Sequence>

      {/* 场景5: 效果展示 */}
      <Sequence from={SCENE_STARTS.EFFECT} durationInFrames={SCENE_DURATIONS.EFFECT}>
        <EffectScene 
          primaryColor={primaryColor} 
          accentColor={accentColor}
          sceneStart={SCENE_STARTS.EFFECT}
          sceneDuration={SCENE_DURATIONS.EFFECT}
        />
      </Sequence>
    </AbsoluteFill>
  );
};
