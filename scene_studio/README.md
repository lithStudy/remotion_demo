
### 怎么用（云端）
1. `.env` 设置 `SCENE_STUDIO_PASSWORD`，可选 `SCENE_STUDIO_WORKSPACE`
2. `python -m narrator_pipeline.web`（端口见 `.env` 的 `SCENE_STUDIO_PORT`，默认 `:21119`）
3. `cd scene_studio && npm run dev`（端口见 `.env` 的 `SCENE_STUDIO_UI_PORT`，默认 `:21118`；代理 `/api` → `SCENE_STUDIO_PORT`）
4. 浏览器登录 → 新建/导入 → 生成 → 编辑 → 导出 ZIP → 本机解压到仓库根

### 关键改动
| 位置 | 内容 |
|------|------|
| `narrator_pipeline/paths.py` | 口播稿改为 `project_root/narrations/{name}.txt` |
| `step0` / `step1` | 抽出 `run_step0_for_video` / `run_step1_for_video` |
| `narrator_pipeline/web/` | FastAPI：鉴权、工程、异步单飞 job、草稿/脚本、反推、ZIP、模板 |
| `scene_studio/` | React SPA：列表、进度、草稿审阅、模板感知编辑器、反推预览 |
