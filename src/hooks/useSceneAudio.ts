import { useMemo } from 'react';
import type { AudioMap } from '../utils/animationTiming';

// 导入音频映射（在实际使用前需要生成）
let audioMapData: AudioMap = {};

try {
  // 动态导入音频映射文件
  audioMapData = require('../remotions/crowd/scenes/audio-map.json');
} catch (error) {
  console.warn('音频映射文件未找到，使用空映射', error);
}

/**
 * 获取场景的音频数据
 * @param sceneId 场景 ID
 * @returns 该场景的所有音频条目
 */
export function useSceneAudio(sceneId: string) {
  const sceneAudioMap = useMemo(() => {
    const filtered: AudioMap = {};
    
    Object.entries(audioMapData).forEach(([key, value]) => {
      if (value.sceneId === sceneId) {
        filtered[key] = value;
      }
    });
    
    return filtered;
  }, [sceneId]);

  /**
   * 根据 order 获取音频路径
   */
  const getAudioFile = (order: number): string | null => {
    const key = `${sceneId}_${order}`;
    return sceneAudioMap[key]?.file || null;
  };

  /**
   * 根据 order 获取音频时长（秒）
   */
  const getAudioDuration = (order: number): number | null => {
    const key = `${sceneId}_${order}`;
    return sceneAudioMap[key]?.duration || null;
  };

  /**
   * 获取整个场景的音频映射
   */
  const getFullMap = () => sceneAudioMap;

  return {
    sceneAudioMap,
    getAudioFile,
    getAudioDuration,
    getFullMap,
  };
}

/**
 * 获取全局音频映射
 */
export function useAudioMap(): AudioMap {
  return audioMapData;
}
