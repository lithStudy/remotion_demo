#!/usr/bin/env tsx

import * as fs from 'fs-extra';
import * as path from 'path';
import { execSync } from 'child_process';
import { getAudioDurationInSeconds } from 'get-audio-duration';
import { allSceneScripts } from '../src/remotions/crowd/scenes/scene-scripts';

interface AudioMapEntry {
  duration: number; // 秒
  file: string; // 相对于 public 的路径
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

// Edge TTS 配置
const TTS_VOICE = 'zh-CN-XiaoxiaoNeural'; // 中文女声
const TTS_RATE = '+0%'; // 语速，可调整为 +10%, -10% 等

async function generateAudio() {
  console.log('🎤 开始生成 TTS 音频...\n');

  const audioMap: AudioMap = {};

  // 确保输出目录存在
  await fs.ensureDir(OUTPUT_DIR);

  for (const scene of allSceneScripts) {
    console.log(`\n📁 处理场景: ${scene.sceneName} (${scene.sceneId})`);

    const sceneDir = path.join(OUTPUT_DIR, scene.sceneId);
    await fs.ensureDir(sceneDir);

    for (const item of scene.items) {
      // 跳过标记为"不读"的条目
      if (item.note?.includes('不读') || item.note?.includes('可按需读或不读')) {
        console.log(
          `  ⏭️  跳过 [${item.order}] ${item.type}: ${item.text.substring(0, 20)}...`
        );
        continue;
      }

      // 生成文件名: {order}_{type}.mp3
      // 清理 type 中的特殊字符
      const sanitizedType = item.type.replace(/[\/\\:*?"<>|]/g, '_');
      const filename = `${String(item.order).padStart(2, '0')}_${sanitizedType}.mp3`;
      const filepath = path.join(sceneDir, filename);
      const relativeFilePath = `/audio/${scene.sceneId}/${filename}`;

      console.log(`  🎵 生成 [${item.order}] ${item.type}: ${item.text.substring(0, 30)}...`);

      try {
        // 使用 Edge TTS CLI 生成音频
        // 转义文本中的特殊字符
        const escapedText = item.text.replace(/"/g, '\\"');
        const command = `npx edge-tts --voice "${TTS_VOICE}" --rate "${TTS_RATE}" --text "${escapedText}" --write-media "${filepath}"`;
        
        execSync(command, {
          cwd: path.join(__dirname, '..'),
          stdio: 'pipe',
        });

        // 测量音频时长
        const duration = await getAudioDurationInSeconds(filepath);

        console.log(`  ✅ 已生成: ${filename} (${duration.toFixed(2)}s)`);

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
        console.error(`  ❌ 生成失败: ${filename}`, error);
      }
    }
  }

  // 保存音频映射文件
  await fs.writeJson(AUDIO_MAP_PATH, audioMap, { spaces: 2 });
  console.log(`\n✅ 音频映射已保存到: ${AUDIO_MAP_PATH}`);
  console.log(`\n📊 总计生成 ${Object.keys(audioMap).length} 个音频文件`);
}

// 运行生成脚本
generateAudio().catch((error) => {
  console.error('❌ 生成过程出错:', error);
  process.exit(1);
});
