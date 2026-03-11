# 口播视频生成管线（Narrator Video Pipeline）

自动化口播视频生成工具，将文案转化为完整的 Remotion 动画视频。

## 📋 流程概览

```
口播文案.txt
    │
    ▼ Step 1: 文案分析（Gemini）
场景脚本 scene-scripts.json（含 imagePrompt）
    │
    ├─▶ Step 2: 图片生成（Gemini Imagen）
    │       → public/images/{name}/scene{N}.png
    │
    └─▶ Step 3: 语音合成（Azure TTS）
            → public/audio/{name}/...
            → audio-map.json + 时长同步
    │
    ▼ Step 4: Remotion 代码生成
src/remotions/{name}/
    ├── {Name}.tsx           # 主 Composition
    └── scenes/
        ├── Scene1.tsx ~ SceneN.tsx
        ├── scene-scripts.json
        ├── audio-map.json
        └── index.ts
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd script
pip install -r requirements.txt
```

### 2. 配置 API 密钥

复制 `.env.example` 为 `.env`，填入真实密钥：

```bash
cp .env.example .env
```

```env
GEMINI_API_KEY=your_gemini_api_key
SPEECH_KEY=your_azure_speech_key
```

### 3. 准备口播文案

创建一个纯文本文件，写入口播文案内容（中文）。

### 4. 一键运行

```bash
python pipeline.py --input 文案.txt --name my_video
```

## 🔧 分步运行

每个步骤也可以独立运行：

```bash
# Step 1: 文案分析
python step1_analyze_script.py --input 文案.txt --output ./output --name my_video

# Step 2: 图片生成
python step2_generate_images.py --input scene-scripts.json --output ../public/images/my_video

# Step 3: 语音合成
python step3_generate_audio.py --input scene-scripts.json --output ../public/audio/my_video

# Step 4: Remotion 代码生成
python step4_generate_remotion.py --input scene-scripts.json --name my_video
```

### 断点续跑

如果某步失败，可以从指定步骤重新开始：

```bash
# 从 Step 2 开始
python pipeline.py --input 文案.txt --name my_video --start 2

# 只运行 Step 3
python pipeline.py --input 文案.txt --name my_video --only 3
```

## ⚙️ 配置说明

`config.json` 配置项：

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `gemini_model` | Gemini 文本模型 | `gemini-2.0-flash` |
| `imagen_model` | Imagen 图片模型 | `imagen-3.0-generate-002` |
| `azure_service_region` | Azure 区域 | `eastasia` |
| `azure_voice_name` | TTS 语音 | `zh-CN-Xiaoxiao:DragonHDFlashLatestNeural` |
| `speech_rate` | 语速 | `+0%` |
| `fps` | 帧率 | `30` |
| `width` / `height` | 视频尺寸 | `960 x 1280`（竖屏） |
| `image_style` | 图片风格提示 | Modern digital illustration... |
| `project_root` | Remotion 项目根目录 | 自动检测 |

## 📁 生成的文件结构

```
remotion_test/
├── public/
│   ├── images/{name}/       # AI 生成的场景配图
│   │   ├── scene1.png
│   │   └── ...
│   └── audio/{name}/        # TTS 生成的语音
│       ├── scene1/
│       │   ├── 01_主标题.mp3
│       │   └── ...
│       └── ...
├── src/remotions/{name}/    # Remotion 动画代码
│   ├── {Name}.tsx           # 主 Composition
│   └── scenes/
│       ├── Scene1.tsx
│       ├── ...
│       ├── scene-scripts.json
│       ├── audio-map.json
│       └── index.ts
└── script/                  # 本管线工具
```

## 📝 注意事项

1. **Gemini API Key**: 需要 Google AI Studio 的 API Key，支持 Imagen 图片生成
2. **Azure Speech Key**: 需要 Azure Cognitive Services 的语音服务密钥
3. **图片生成限流**: 默认每张图片间隔 2 秒，可通过 `--delay` 调整
4. **生成代码依赖**: 生成的 TSX 代码依赖项目中已有的 `components`（FadeInText）和 `utils`（AnimationConfig 等）
