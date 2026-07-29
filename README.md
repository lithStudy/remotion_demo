# Remotion 口播视频项目

基于 [Remotion](https://www.remotion.dev/) 的口播短视频工程：从口播文案自动生成分镜、语音、配图与 Composition 代码，可在 Remotion Studio 预览与渲染。

领域用语见 [`CONTEXT.md`](./CONTEXT.md)。

## 仓库结构

```
├── narrations/              # 口播文案（.txt）
├── narrator_pipeline/       # 口播视频管线（Python）
├── scene_studio/            # 分镜工作台前端（React / Vite）
├── src/remotions/           # Remotion Composition / Scene
├── public/audio/            # 生成的语音
├── public/images/           # 生成的配图
├── docs/adr/                # 架构决策
└── out/                     # 渲染输出
```

## 安装依赖

**Remotion 主项目**（仓库根）：

```bash
npm install
```

**口播管线**（Python）：

```bash
pip install -r narrator_pipeline/requirements.txt
cp narrator_pipeline/.env.example narrator_pipeline/.env
```

按需填写 `narrator_pipeline/.env`（Gemini / DeepSeek / Azure Speech、Scene Studio 密码等）。

**Scene Studio 前端**（可选）：

```bash
cd scene_studio
npm install
```

## 快速开始

### 预览 / 渲染视频

```bash
npm run dev          # Remotion Studio
npm run build        # 打包
```

具体 Composition 的渲染命令见 `package.json` 的 `scripts`。

### 跑口播管线

1. 将口播稿放到 `narrations/{name}.txt`
2. 在**仓库根目录**执行：

```bash
python -m narrator_pipeline --name 大模型先驱论
```

断点续跑 / 单步：

```bash
python -m narrator_pipeline --name xxx --start 2
python -m narrator_pipeline --name xxx --only 4
```

分步入口与路径约定见 [`narrator_pipeline/README.md`](./narrator_pipeline/README.md)。

管线步骤概览：

| Step | 能力 | 产物 |
|------|------|------|
| 0–1 | 分析域（analysis） | 场景拆分草稿 → 分镜脚本 `scene-scripts.json` |
| 2 | 语音域（audio） | `public/audio/{name}/`，写回时间轴 |
| 3 | 配图域（images） | `public/images/{name}/` |
| 4 | 代码生成域（codegen） | `src/remotions/{name}/` Composition |

### Scene Studio（分镜工作台）

用于审阅/编辑 Step0–1 产物，再导出回仓库：

```bash
# 终端 1：API（默认 :21119）
# .env 中设置 SCENE_STUDIO_PASSWORD，可选 SCENE_STUDIO_WORKSPACE
python -m narrator_pipeline.web

# 终端 2：前端（默认 :21118，代理 /api → :21119）
cd scene_studio && npm run dev
```

浏览器登录 → 新建/导入 → 生成 → 编辑 → 导出 ZIP → 解压到仓库根。细节见 [`scene_studio/README.md`](./scene_studio/README.md)。

## 路径约定

| 用途 | 路径 |
|------|------|
| 口播原文 | `narrations/{name}.txt` |
| 场景草稿 / 分镜脚本 | `src/remotions/{name}/scenes/` |
| 音频 | `public/audio/{name}/` |
| 配图 | `public/images/{name}/` |

## 相关文档

- [`CONTEXT.md`](./CONTEXT.md) — 领域用语
- [`narrator_pipeline/README.md`](./narrator_pipeline/README.md) — 管线用法
- [`scene_studio/README.md`](./scene_studio/README.md) — 工作台用法
- [`docs/adr/`](./docs/adr/) — 架构决策记录
