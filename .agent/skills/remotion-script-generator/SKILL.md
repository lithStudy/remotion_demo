---
name: remotion-script-generator
description: 根据主题自动生成Remotion动画脚本、TTS语音，并同步时长。当用户要求生成动画脚本、创建视频脚本、或生成关于某主题的动画时触发。
metadata:
  tags: remotion, video, tts, animation, script, 脚本生成
---

# Remotion 脚本生成器

根据用户输入的主题，自动生成完整的Remotion动画脚本，包括TTS语音和时长同步。

## 触发条件

当用户说：
- "生成关于XXX的动画脚本"
- "创建XXX主题的视频"
- "帮我做一个关于XXX的短视频"

## 工作流程

复制此清单并跟踪进度：
- [ ] Step 1: 理解主题需求
- [ ] Step 2: 生成场景脚本JSON
- [ ] Step 3: 生成TTS语音
- [ ] Step 4: 同步音频时长
- [ ] Step 5: 计算高亮时间
- [ ] Step 6: 生成场景插图
- [ ] Step 7: 生成场景动画

---

### Step 1: 理解主题需求

首先确认以下信息：

1. **主题**：用户想要讲解什么内容？
2. **场景数量**：默认8个场景（开场 + 6个内容场景 + 结尾）
3. **风格**：科普讲解、故事叙述、还是其他？
4. **目标平台**：抖音/小红书（竖屏960x1280）还是B站/YouTube（横屏1920x1080）？

如果用户未提供，使用默认值：
- 场景数量：8
- 风格：科普讲解
- 平台：竖屏短视频

---

### Step 2: 生成场景脚本JSON

阅读 [prompts/generate_script.md](prompts/generate_script.md) 获取提示词模板。

根据模板，参考 [templates/script_template.json](templates/script_template.json) 的数据结构生成脚本。

将生成的JSON保存到用户项目中：
```
{项目路径}/src/remotions/{动画名称}/scenes/scene-scripts.json
```

---

### Step 3: 生成TTS语音

运行语音生成脚本：

```bash
python {skill路径}/scripts/generate_audio_azure.py --input "{项目路径}/src/remotions/{动画名称}/scenes/scene-scripts.json" --output "{项目路径}/public/audio/{动画名称}"
```

此脚本会：
1. 读取 `scene-scripts.json` 中的所有文案
2. 使用 edge-tts 生成中文语音
3. 测量每个音频的时长
4. 生成 `audio-map.json` 映射文件

---

### Step 4: 同步音频时长

运行时长同步脚本：

```bash
python {skill路径}/scripts/sync_durations.py --script "{项目路径}/src/remotions/{动画名称}/scenes/scene-scripts.json" --audio-map "{项目路径}/src/remotions/{动画名称}/scenes/audio-map.json" --fps 30
```

此脚本会：
1. 读取 `audio-map.json` 中的时长数据
2. 计算每个条目的 `durationInFrames`（时长 * fps + 缓冲）
3. 更新 `scene-scripts.json`，添加时长信息

---

### Step 5: 计算高亮时间

运行高亮时间计算脚本（在Step 4之后运行）：

```bash
python {skill路径}/scripts/calculate_highlight_delays.py "{项目路径}/src/remotions/{动画名称}/scenes/scene-scripts.json"
```

此脚本会：
1. 检查 `scene-scripts.json` 中带有 `highlight` 字段的条目
2. 根据高亮文字在整段文本中的位置比例，自动计算高亮显示的起始时间
3. 生成 `highlightDelays` 字段，与 `highlight` 数组一一对应

---

### Step 6: 生成场景插图

1. 创建图片目录：
   ```bash
   mkdir public/images/{动画名称}
   ```

2. 为每个场景生成插图：
   - **风格**：Modern corporate flat art style, minimal, clean, vector illustration, white background
   - **内容**：根据 `scene-scripts.json` 中每个场景的核心内容生成
   - **保存路径**：`public/images/{动画名称}/{scene_name}.png` (例如 `scene_1.png`)
   - **尺寸**： 适应动画场景的尺寸，只作为插图存在，不占用文字显示区域。

---

### Step 7: 生成场景动画

1. 根据脚本 {项目路径}/src/remotions/{动画名称}/scenes/scene-scripts.json   通过remotion生成动画场景，并插入生成的插图。基本遵循标题在上，插图在中间，正文在下面的结构，插图显示的尺寸不能太大，要适中。

---

## 依赖要求

TTS脚本需要以下Python包：
```bash
pip install edge-tts mutagen
```

## 参考文件

- [templates/script_template.json](templates/script_template.json) - 脚本数据模板
- [prompts/generate_script.md](prompts/generate_script.md) - AI生成脚本的提示词
- [examples/crowd_example.json](examples/crowd_example.json) - 《乌合之众》示例脚本
