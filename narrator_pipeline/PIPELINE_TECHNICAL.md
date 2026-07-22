# narrator_pipeline 口播视频管线 — 执行逻辑技术说明

本文档描述 `narrator_pipeline` 从口播文案到 Remotion 工程产物的**执行顺序、数据流、关键模块职责与配置依赖**。领域用语见仓库根 `CONTEXT.md`。

> 实现已按能力域拆分；下文 Step 编号仍是对外编排门面。旧版 `script_v6` / `script_v5` 路径均已废弃。统一入口参数为 `--name`，口播原文约定为 `narrations/{name}.txt`。

---

## 1. 总体架构

管线将一条口播视频拆为五步，中间以 **`scene-scripts.json`** 为核心契约串联前后步骤：

| 步骤 | 模块 | 输入 | 主要输出 |
|------|------|------|----------|
| 0 | `analysis.step0` | `narrations/{name}.txt` | `scene-split-draft.json` |
| 1 | `analysis.step1` | 场景拆分草稿（分镜 + 校验均对照草稿 `scene.text`） | `scene-scripts.json` |
| 2 | `audio.step2` | `scene-scripts.json` | `public/audio/{name}/` MP3；JSON 注入时间轴 |
| 3 | `images.step3` | `scene-scripts.json` | `public/images/{name}/` PNG；JSON 内图片字段改路径 |
| 4 | `codegen.step4` | `scene-scripts.json` | `src/remotions/{name}/` Composition 等 |

**统一编排入口**：`python -m narrator_pipeline --name ...`（`pipeline.py`）通过**包内函数调用**依次执行各 Step 的 `main`，支持 `--start` / `--only`；仅跑 Step1 时会在成功后自动再跑一次 Step4 的预览模式（静音 + 固定占位图）。

能力域：`analysis` / `images` / `audio` / `codegen` / `contracts` / `common` / `cli`。

其余细节（AI 阶段、校验、模板注册表行为）与重构前一致，契约语义未改。详见各模块源码与 `analysis/prompts/`。
