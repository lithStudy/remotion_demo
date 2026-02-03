# TTS 音频生成指南

由于 Node.js 的 edge-tts 包不太稳定，建议使用以下方式生成音频：

## 方法 1：使用 Python edge-tts (推荐)

1. 安装 Python 版本的 edge-tts：
```bash
pip install edge-tts
```

2. 运行我们的 Python 生成脚本：
```bash
python scripts/generate_audio.py
```

## 方法 2：手动生成

1. 使用任何 TTS 工具（如讯飞、百度、Azure等）生成音频文件
2. 按照以下命名规则保存到 `public/audio/[sceneId]/` 目录：
   - 格式：`{order}_{type}.mp3`
   - 例如：`01_主标题.mp3`, `02_副标题.mp3`

3. 运行测量脚本更新时长映射：
```bash
npx tsx scripts/measure_audio.ts
```

## 音频文件结构

```
public/audio/
├── scene1/
│   ├── 01_主标题.mp3
│   ├── 02_副标题.mp3
│   └── ...
├── scene2/
│   ├── 01_标题.mp3
│   └── ...
└── ...
```

## 音频映射文件

生成的 `src/remotions/crowd/scenes/audio-map.json` 格式：

```json
{
  "scene1_1": {
    "duration": 2.5,
    "file": "/audio/scene1/01_主标题.mp3",
    "sceneId": "scene1",
    "order": 1,
    "type": "主标题",
    "text": "为什么一合群，智商就归零？"
  },
  ...
}
```
