# Scene Studio Web Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans. Steps use checkbox syntax.

**Goal:** 云端 Web 工作台：Step0/1 异步生成 + 模板感知编辑 scene-scripts，ZIP 导入/导出对齐仓库路径。

**Architecture:** FastAPI 进程内调用 `narrator_pipeline`；云端 `WORKSPACE_ROOT` 作 `project_root`；SPA 调全 POST API；全局单飞 job。

**Tech Stack:** FastAPI + uvicorn + Pydantic；前端 Vite + React + TypeScript。

## Global Constraints

- 全部 HTTP 接口用 POST；请求体为 `*Param` Pydantic 模型
- 不改 Step1 AI/prompt 语义；复用 contracts 校验
- 口播稿路径跟随 `project_root/narrations/{name}.txt`
- 第一期无 Remotion 预览、无 Step2–4、无多用户
- 不主动 git commit（除非用户要求）

## File map

- Modify: `narrator_pipeline/paths.py` — narration 跟 project_root
- Modify: `narrator_pipeline/analysis/step0.py` — 抽出 `run_step0_for_video`
- Modify: `narrator_pipeline/analysis/step1.py` — 抽出 `run_step1_for_video`
- Create: `narrator_pipeline/web/` — FastAPI 应用
- Create: `scene_studio/` — Vite React SPA
- Modify: `narrator_pipeline/requirements.txt` — fastapi/uvicorn/python-multipart

### Task 1: paths + step 库函数

- [ ] `narration_txt = project_root / "narrations" / f"{name}.txt"`
- [ ] `run_step0_for_video(name, config, ...)` / `run_step1_for_video(name, config, ...)`
- [ ] CLI `main` 改为调用上述函数

### Task 2: FastAPI 核心

- [ ] workspace CRUD、ZIP 导入导出、单飞 job、口令鉴权
- [ ] 路由：login / projects / generate / draft / scripts / sync-from-scripts / templates / export/import

### Task 3: SPA

- [ ] 登录、工程列表、生成进度、可选草稿审阅、模板感知编辑器、反推预览、导入导出

### Task 4: 冒烟验证

- [ ] 启动 API；无鉴权 401；带口令 list projects；本地 import/export 往返
---
