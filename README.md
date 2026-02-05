# Remotion Animation Project (Remotion 动画项目)

本项目基于 [Remotion](https://www.remotion.dev/) 框架开发，旨在探索和实践**数据驱动动画**（Data-Driven Animation）的制作流程。通过将文案、TTS 语音生成和动画时序自动同步，实现高效的短视频生产。

## 📖 项目简介

本项目包含多个演示和实际应用场景的 Composition，主要包括：

- **Crowd (乌合之众)**: 心理学知识科普动画，完整展示了基于 TTS 时长的自动动画同步工作流。
- **StrawManFallacy (稻草人谬误)**: 逻辑思维讲解动画，演示了复杂的文本强调和转场。
- **ConfirmationBias (确认偏误)**: 认知偏见系列动画。
- **ScienceIntro**: 科普类视频通用的开场动画模板（卡片闪烁 → 定格 → 下移）。

## 📺 演示视频 (Demos)

### Crowd (乌合之众)
<video src="out/Crowd.mp4" controls width="100%"></video>

### ConfirmationBias (确认偏误)
<video src="out/ConfirmationBias.mp4" controls width="100%"></video>


## 🚀 使用说明 (Usage)

### 1. 安装依赖

```bash
npm install
```

### 2. 启动预览 (Dev Server)

启动 Remotion Studio 进行实时预览和调试：

```bash
npm run dev
```

### 3. 生成视频 (Render)

渲染指定 Composition 为视频文件：

```bash
npx remotion render <CompositionID> out/video.mp4

# 示例: 渲染"乌合之众"视频
npx remotion render Crowd out/crowd.mp4
```

### 4. TTS 语音工作流 (TTS Workflow)

本项目集成了 Azure TTS / Edge TTS 自动生成语音并同步动画时长的功能，这是本项目自动化的核心。

**核心脚本位置**: `.agent/skills/remotion-script-generator/scripts/`

**配置说明**:

如果你没有Azure账号，可以：
1. 自行注册，免费的：https://zhuanlan.zhihu.com/p/49711377
2. 直接使用 `generate_audio.py` 脚本，它会调用 Edge TTS 生成语音。

**操作步骤**:

1.  **修改文案**: 编辑对应场景的 `scene-scripts.ts` 或配置文件。
2.  **生成语音**: 运行 Python 脚本生成 MP3 并更新 `audio-map.json`。
    ```bash
    python .agent/skills/remotion-script-generator/scripts/generate_audio_azure.py
    ```
    *(需确保已安装 python 及相关依赖，如 `edge-tts`, `azure-cognitiveservices-speech` 等，具体参考脚本头部说明)*
3.  **自动同步**: 脚本会自动更新 `audio-map.json` 中的 duration 字段。
4.  **开发调试**: 重新启动或刷新 `npm run dev`，Remotion 会读取最新的时长数据，自动调整动画节奏。

> 💡 详细 TTS 工作流说明请查阅: [TTS_WORKFLOW_GUIDE.md](./TTS_WORKFLOW_GUIDE.md)

## 🛠 技术原理 (Technical Principles)

### 1. 数据驱动动画 (Data-Driven)
所有场景的文案、结构和基本时序都尽可能由 JSON/TypeScript 数据定义。动画组件读取这些配置（Configs），而非硬编码每一个动画帧。

### 2. 音画同步 (Audio-Video Sync)
本项目解决的核心痛点是“改文案导致音频变长，动画需要重调”的问题。
- **生成**: 使用 TTS 脚本批量生成语音。
- **映射**: 脚本自动测量每一段音频的精确时长（秒），存入 `audio-map.json`。
- **动态计算**: 前端组件使用 `applyAudioDurations` 工具函数，将配置中的 `durationInFrames` 动态设置为 `ceil(audioDuration * fps + buffer)`。
- **结果**: 无论文案长短，动画永远与解说语音自动对齐。

### 3. 组件化系统
- **Scenes**: 每个视频被拆分为多个独立的 Scene 组件，便于管理和复用。
- **Base Components**: 封装了 `FadeInText`, `SpringText`, `Stamp`, `HighlightText` 等常用动画组件，确保视觉风格统一。
- **Utils**: 提供了 `calculateAnimationTimings` (串行/并行时间轴计算) 等工具函数。

## 📂 开发指南 (Development Guide)

### 目录结构

```
remotion_demo/
├── src/
│   ├── components/      # 通用 UI/动画组件 (SpringText, HighlightText 等)
│   ├── hooks/           # 自定义 Hooks (useSceneAudio 等)
│   ├── remotions/       # 视频项目主目录 - 所有的 Composition 都在这里
│   │   ├── crowd/             # 乌合之众
│   │   ├── strawManFallacy/   # 稻草人谬误
│   │   ├── confirmationBias/  # 确认偏误
│   │   └── scienceIntro/      # 开场动画模板
│   ├── utils/           # 工具函数 (时序计算、路径处理)
│   └── Root.tsx         # 注册所有 Composition
├── public/
│   └── audio/           # 生成的语音文件存放处 (按项目/场景分类)
├── .agent/skills/...    # Python 自动化辅助脚本 (TTS 生成、时长同步)
└── out/                 # 渲染输出目录
```

### 新增场景开发流程

1.  **创建文件**: 在 `src/remotions/<Project>/scenes/` 下新建 `SceneX.tsx`。
2.  **配置动画**: 定义 `AnimationConfig` 数组，指定每个步骤的 key 和 `audioId`（如需语音）。
3.  **配置文案/语音**:
    *   在 `scene-scripts.ts` 添加文案。
    *   运行 TTS 生成脚本，生成新的音频文件。
4.  **组件实现**:
    *   使用 `useAudioMap` 和 `applyAudioDurations` 获取动态时长。
    *   使用 `calculateAnimationTimings` 计算每个元素的 `startTime`。
    *   使用 `Sequence` 或 `delay` 属性控制元素入场。
5.  **串联**: 在主 Composition 文件中引入该 Scene，并根据其计算出的总时长设置 `Sequence` 的长度。

---
*Generated for Remotion Demo Project*
