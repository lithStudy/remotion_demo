# TTS 驱动动画工作流使用指南

已成功实现「数据驱动动画」工作流！通过脚本生成 TTS 语音，根据语音时长动态更新动画时间，并自动同步动画。

## 📁 文件结构

```
project/
├── scripts/
│   ├── README.md              # TTS 生成说明
│   ├── generate_audio.py      # Python TTS 生成脚本 (推荐)
│   ├── generate_audio.ts      # Node.js TTS 生成脚本 (不可用)
│   └── measure_audio.ts       # 音频时长测量脚本
├── src/
│   ├── hooks/
│   │   └── useSceneAudio.ts   # 音频数据 Hook
│   ├── utils/
│   │   └── animationTiming.ts # 时序计算工具 (已支持音频)
│   └── remotions/crowd/scenes/
│       ├── scene-scripts.ts   # 场景文案数据
│       ├── scene-scripts.txt  # 纯文本文案
│       ├── audio-map.json     # 音频时长映射
│       └── Scene1.tsx         # 场景1 (已集成音频)
└── public/
    └── audio/                 # 音频文件目录
        └── scene1/
            ├── 01_主标题.mp3
            └── 02_副标题.mp3
```

## 🚀 使用流程

### 方法 1：使用 Python edge-tts（推荐）

1. **安装 Python 依赖**
```bash
pip install edge-tts mutagen
```

2. **运行生成脚本**
```bash
python scripts/generate_audio.py
```

这将：
- 读取 `scene-scripts.ts` 中的文案
- 使用 Edge TTS 生成中文语音
- 自动测量每个音频的时长
- 生成 `audio-map.json` 映射文件
- 将音频保存到 `public/audio/` 目录

### 方法 2：手动生成音频

1. **使用任意 TTS 工具**（讯飞、百度、Azure 等）生成音频文件

2. **按规则命名并保存**
   - 目录：`public/audio/[sceneId]/`
   - 格式：`{order}_{type}.mp3`
   - 示例：`01_主标题.mp3`, `02_副标题.mp3`

3. **运行测量脚本**
```bash
npx tsx scripts/measure_audio.ts
```

这将扫描 `public/audio/` 目录，测量所有音频时长并生成 `audio-map.json`。

## 📝 在场景中使用音频

### 1. 配置动画时添加 `audioId`

```typescript
const animationConfigs: AnimationConfig[] = [
  { 
    name: "title", 
    delayBefore: 15, 
    delayAfter: 0, 
    durationInFrames: 40,  // 默认时长，会被音频覆盖
    preName: null,
    audioId: "scene1_1"    // 关联音频 ID
  },
  // ...
];
```

### 2. 导入音频相关工具

```typescript
import { useSceneAudio, useAudioMap } from "../../../hooks/useSceneAudio";
import { Audio, staticFile } from "remotion";
import audioMapData from './audio-map.json';
import type { AudioMap } from "../../../utils";
```

### 3. 在组件中使用音频

```typescript
export const Scene1: React.FC = () => {
  const audioMap = useAudioMap();
  const { getAudioFile } = useSceneAudio('scene1');
  
  // 应用音频时长到配置
  const configsWithAudio = animationConfigs.map(config => {
    if (config.audioId && audioMap[config.audioId]) {
      const audioDuration = audioMap[config.audioId].duration;
      const fps = 30;
      const durationInFrames = Math.ceil((audioDuration + 0.3) * fps);
      return { ...config, durationInFrames };
    }
    return config;
  });
  
  const timings = calculateAnimationTimings(configsWithAudio);

  return (
    <AbsoluteFill>
      {/* 渲染音频 */}
      {getAudioFile(1) && (
        <Audio src={staticFile(getAudioFile(1)!)} startFrom={timings.title.startTime} />
      )}
      {getAudioFile(2) && (
        <Audio src={staticFile(getAudioFile(2)!)} startFrom={timings.subtitle.startTime} />
      )}
      
      {/* 其他内容 */}
    </AbsoluteFill>
  );
};
```

### 4. 更新场景时长计算

```typescript
export const calculateScene1Duration = (): number => {
  return calculateSceneDuration(animationConfigs, audioMapData as AudioMap, 30);
};
```

## 🎨 工作流优势

1. **数据驱动**：文案、音频、动画时长完全由数据驱动
2. **自动同步**：音频时长自动应用到动画，无需手动调整
3. **易于维护**：修改文案只需更新 `scene-scripts.ts`，重新生成音频即可
4. **灵活扩展**：支持任意 TTS 工具，只需生成音频和映射文件

## 📊 audio-map.json 格式

```json
{
  "scene1_1": {
    "duration": 3.5,
    "file": "/audio/scene1/01_主标题.mp3",
    "sceneId": "scene1",
    "order": 1,
    "type": "主标题",
    "text": "为什么一合群，智商就归零？"
  }
}
```

## ⚠️ 注意事项

1. **首次使用**：需要先生成音频文件，否则 Audio 组件会找不到文件
2. **缓冲时间**：默认在音频时长基础上增加 0.3 秒缓冲，可在 `audioDurationToFrames` 函数中调整
3. **帧率匹配**：确保 fps 参数与 Composition 的 fps 一致（默认 30）
4. **TypeScript**：已启用 `resolveJsonModule`，可直接 import JSON 文件

## 🔄 完整工作流示例

1. **编写文案** → `scene-scripts.ts`
2. **生成音频** → `python scripts/generate_audio.py`
3. **查看映射** → `audio-map.json` 已自动生成
4. **在场景中使用** → 添加 `audioId` 和 `<Audio>` 组件
5. **预览视频** → `npm run dev`
6. **调整时长** → 修改音频或缓冲时间，重新测量

## 🎯 下一步

- 将此模式应用到其他场景（Scene2 - Scene8）
- 根据实际音频时长调整动画节奏
- 优化音频淡入淡出效果
- 添加背景音乐（BGM）支持

祝你的视频制作顺利！🎬
