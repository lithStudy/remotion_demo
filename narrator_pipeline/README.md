# 口播视频生成管线（Narrator Pipeline）

自动化口播视频生成工具：口播文案 → 分镜脚本 → 语音/时间轴 → 配图 → Remotion 代码。

领域用语见仓库根 [`CONTEXT.md`](../CONTEXT.md)；架构决策见 [`docs/adr/0001-narrator-pipeline-layout.md`](../docs/adr/0001-narrator-pipeline-layout.md)。

## 包结构

```
narrator_pipeline/
├── pipeline.py          # 编排入口（包内调用，无 subprocess）
├── analysis/            # Step0–1：场景拆分 + 文案分析
├── audio/               # Step2：语音与时间轴
├── images/              # Step3：配图
├── codegen/             # Step4：Remotion 代码生成
├── contracts/           # 校验、草稿/脚本契约、模板注册表
├── common/              # 配置、LLM、清理等共享能力
└── cli/                 # 辅助 CLI（如校验）

narrations/              # 口播文案（仓库根，非本包内）
```

## 快速开始

```bash
pip install -r narrator_pipeline/requirements.txt
cp narrator_pipeline/.env.example narrator_pipeline/.env
```

口播稿放在 `narrations/{name}.txt`，在**仓库根目录**执行：

```bash
python -m narrator_pipeline --name 大模型先驱论
python -m narrator_pipeline --name 大模型先驱论 --start 1
```

## 分步运行

```bash
python -m narrator_pipeline.analysis.step0 --name xxx
python -m narrator_pipeline.analysis.step1 --name xxx
python -m narrator_pipeline.audio.step2 --name xxx
python -m narrator_pipeline.images.step3 --name xxx
python -m narrator_pipeline.codegen.step4 --name xxx
```

断点续跑：

```bash
python -m narrator_pipeline --name xxx --start 2
python -m narrator_pipeline --name xxx --only 4
```

校验：

```bash
python -m narrator_pipeline.cli.validate_scene_scripts src/remotions/{name}/scenes/scene-scripts.json
```

## 名称与路径约定

| 用途 | 路径 |
|------|------|
| 口播原文（仅 Step0） | `narrations/{name}.txt` |
| 场景草稿 / 分镜脚本 | `src/remotions/{name}/scenes/` |
| 音频 | `public/audio/{name}/` |
| 配图 | `public/images/{name}/` |

Step1 的分析与校验只读场景草稿：对照文本为草稿中各 `scene.text` 按顺序拼接。

## Scene Studio（Step0/1 Web）

云端工作台：异步跑 Step0/1，可视化编辑 `scene-scripts`，ZIP 导入/导出（目录对齐仓库约定）。

```bash
# .env 中设置 SCENE_STUDIO_PASSWORD；可选 SCENE_STUDIO_WORKSPACE
pip install -r narrator_pipeline/requirements.txt
python -m narrator_pipeline.web

# 另开终端
cd scene_studio && npm install && npm run dev
```

浏览器打开 Vite 地址（`SCENE_STUDIO_UI_PORT`，默认 `:21118`；代理 `/api` → `SCENE_STUDIO_PORT`）。

## 配置

见 `config.json`（模型、画布、TTS、`project_root` 等）与 `.env`。
