#!/usr/bin/env tsx
/**
 * 测量已有音频文件的时长并生成/更新 audio-map.json
 * 用于手动生成音频文件后，自动生成元数据
 */

import * as fs from 'fs-extra';
import * as path from 'path';
import { getAudioDurationInSeconds } from 'get-audio-duration';
import { allSceneScripts } from '../src/remotions/crowd/scenes/scene-scripts';

interface AudioMapEntry {
  duration: number;
  file: string;
  sceneId: string;
  order: number;
  type: string;
  text: string;
}

interface AudioMap {
  [key: string]: AudioMapEntry;
}

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'audio');
const AUDIO_MAP_PATH = path.join(
  __dirname,
  '..',
  'src',
  'remotions',
  'crowd',
  'scenes',
  'audio-map.json'
);

async function measureAudio() {
  console.log('📏 开始测量音频文件时长...\n');

  const audioMap: AudioMap = {};
  let totalFiles = 0;
  let measuredFiles = 0;

  for (const scene of allSceneScripts) {
    const sceneDir = path.join(OUTPUT_DIR, scene.sceneId);

    // 检查场景目录是否存在
    if (!(await fs.pathExists(sceneDir))) {
      console.log(`⚠️  场景目录不存在，跳过: ${scene.sceneName} (${scene.sceneId})`);
      continue;
    }

    console.log(`\n📁 处理场景: ${scene.sceneName} (${scene.sceneId})`);

    for (const item of scene.items) {
      // 跳过不需要读的条目
      if (item.note?.includes('不读') || item.note?.includes('可按需读或不读')) {
        continue;
      }

      totalFiles++;

      // 生成预期的文件名
      const sanitizedType = item.type.replace(/[\/\\:*?"<>|]/g, '_');
      const filename = `${String(item.order).padStart(2, '0')}_${sanitizedType}.mp3`;
      const filepath = path.join(sceneDir, filename);
      const relativeFilePath = `/audio/${scene.sceneId}/${filename}`;

      // 检查文件是否存在
      if (!(await fs.pathExists(filepath))) {
        console.log(`  ⚠️  文件不存在: ${filename}`);
        continue;
      }

      try {
        // 测量音频时长
        const duration = await getAudioDurationInSeconds(filepath);
        measuredFiles++;

        console.log(`  ✅ 已测量: ${filename} (${duration.toFixed(2)}s)`);

        // 添加到映射
        const key = `${scene.sceneId}_${item.order}`;
        audioMap[key] = {
          duration,
          file: relativeFilePath,
          sceneId: scene.sceneId,
          order: item.order,
          type: item.type,
          text: item.text,
        };
      } catch (error) {
        console.error(`  ❌ 测量失败: ${filename}`, error);
      }
    }
  }

  // 保存音频映射文件
  await fs.writeJson(AUDIO_MAP_PATH, audioMap, { spaces: 2 });
  
  console.log(`\n✅ 音频映射已保存到: ${AUDIO_MAP_PATH}`);
  console.log(`\n📊 统计:`);
  console.log(`   - 预期文件数: ${totalFiles}`);
  console.log(`   - 实际测量: ${measuredFiles}`);
  console.log(`   - 缺失文件: ${totalFiles - measuredFiles}`);
  
  if (measuredFiles === 0) {
    console.log(`\n⚠️  没有找到任何音频文件。请先生成音频文件后再运行此脚本。`);
    console.log(`   参考: scripts/README.md`);
  }
}

measureAudio().catch((error) => {
  console.error('❌ 测量过程出错:', error);
  process.exit(1);
});
