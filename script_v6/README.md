# 口播视频生成管线（Narrator Video Pipeline）

自动化口播视频生成工具，将文案转化为完整的 Remotion 动画视频（黑白矢量风格 + BW 布局组件）。

## 流程概览

```
口播文案.txt
    │
    ▼ Step 1: 文案分析（Gemini）
scene-scripts.json
    ├── text[] / anchor[] / audio_effect[]（与句子一一对应）
    ├── layout（每条 item：CENTER_FOCUS | ALERT_STYLE | SPLIT_COMPARE | STEP_LIST 等）
    └── imagePrompt（每条 item 的配图提示）
    │
    ├─▶ Step 2: 图片生成（Gemini 图像模型）
    │       每 9 个 imagePrompt 一批 → 1 张 3×3 网格图 → 裁剪为 9 张 → 去白底(threshold=240) → 透明 PNG
    │       → public/images/{name}/scene{N}_{order}.png
    │
    └─▶ Step 3: 语音合成（Azure TTS）
            → public/audio/{name}/...
            → audio-map.json + 时长同步
    │
    ▼ Step 4: Remotion 代码生成
src/remotions/{name}/
    ├── {Name}.tsx           # 主 Composition
    └── scenes/
        ├── Scene1.tsx ~ SceneN.tsx   # 白底 + BW 布局/字幕/锚点/音效/TTS
        ├── scene-scripts.json
        ├── audio-map.json
        └── index.ts
```

## 快速开始

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

创建纯文本文件，写入口播文案内容（中文）。

### 4. 一键运行

```bash
python pipeline.py --input 文案.txt --name my_video
```

## 分步运行

```bash
# Step 1: 文案分析（输出 anchor[]、audio_effect[]、layout、imagePrompt）
python step1_analyze_script.py --input 文案.txt --output ./output --name my_video

# Step 2: 图片生成（每 9 个一批网格图，裁剪 + 去白底）
python step2_generate_images.py --input scene-scripts.json --output ../public/images/my_video

# Step 3: 语音合成
python step3_generate_audio.py --input scene-scripts.json --output ../public/audio/my_video

# Step 4: Remotion 代码生成（BW 布局、多锚点/字幕/音效按 startTime 绑定）
python step4_generate_remotion.py --input scene-scripts.json --name my_video
```

### 断点续跑

```bash
# 从 Step 2 开始
python pipeline.py --input 文案.txt --name my_video --start 2

# 只运行 Step 3
python pipeline.py --input 文案.txt --name my_video --only 3
```

## 配置说明

`config.json` 主要字段：

| 字段 | 说明 | 默认/示例 |
|------|------|-----------|
| `gemini_model` | Gemini 文本模型 | `gemini-2.0-flash` |
| `imagen_model` | 图片生成模型 | `gemini-3.1-flash-image-preview` |
| `azure_service_region` | Azure 区域 | `eastasia` |
| `azure_voice_name` | TTS 语音 | `zh-CN-Xiaoxiao2:DragonHDFlashLatestNeural` |
| `speech_rate` | 语速 | `+0%` |
| `fps` | 帧率 | `30` |
| `width` / `height` | 视频尺寸 | `1920 x 1080`（横屏 16:9） |
| `image_style` | 图片风格（BW 矢量描述，会拼进 imagePrompt） | Minimalist black and white vector... |
| `image_aspect_ratio` | 单图比例 | `16:9` |
| `image_size` | 图片尺寸档位 | `1K` |
| `project_root` | Remotion 项目根目录（Step 4 输出路径） | 当前项目绝对路径 |
| `transition_duration_frames` | 转场帧数 | `15` |

## 生成的文件结构

```
remotion_shortvideo/
├── public/
│   ├── images/{name}/           # Step 2 透明 PNG（按场景与 order 命名）
│   │   ├── scene1_1.png
│   │   ├── scene1_2.png
│   │   └── ...
│   └── audio/{name}/             # Step 3 TTS 语音
│       ├── scene1/
│       │   └── *.mp3
│       └── ...
├── src/
│   ├── components/               # BW 布局组件（Step 4 依赖）
│   │   └── BWLayouts.tsx         # BWCenterFocus, BWAlertStyle, BWSplitCompare, BWStepList, BWSubtitle, BWAnchorWord, BWCountUpAnchor 等
│   ├── remotions/{name}/
│   │   ├── {Name}.tsx            # 主 Composition
│   │   └── scenes/
│   │       ├── Scene1.tsx ~ SceneN.tsx
│   │       ├── scene-scripts.json
│   │       ├── audio-map.json
│   │       └── index.ts
│   └── utils/                    # AnimationConfig、calculateAnimationTimings 等
└── script/                       # 本管线
```

## 注意事项

1. **Gemini API Key**：需支持文本与图像模型（如 Imagen / Gemini 图像 API）
2. **Azure Speech Key**：需 Azure 语音服务密钥
3. **Step 2 限流**：默认每张图间隔可调（如 `--delay`），每 9 个 prompt 只请求 1 次网格图以节省配额
4. **生成代码依赖**：Step 4 生成的 TSX 依赖项目中的 `components`（BW 系列）和 `utils`（AnimationConfig、calculateAnimationTimings、applyAudioDurations 等）
