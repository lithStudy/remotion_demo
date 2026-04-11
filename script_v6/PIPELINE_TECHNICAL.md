# script_v5 口播视频管线 — 执行逻辑技术说明

本文档描述 `script_v5` 目录下从口播文案到 Remotion 工程产物的**执行顺序、数据流、关键模块职责与配置依赖**，便于维护与排障。

---

## 1. 总体架构

管线将一条口播视频拆为四步，中间以 **`scene-scripts.json`** 为核心契约串联前后步骤：

| 步骤 | 脚本 | 输入 | 主要输出 |
|------|------|------|----------|
| 1 | `step1_analyze_script.py` | 口播文案 `.txt` | `scene-scripts.json`（场景 / item / 模板 / param） |
| 2 | `step2_generate_images.py` | `scene-scripts.json` | `public/images/{name}/` 下 PNG；JSON 内图片字段改为相对 `public` 的路径 |
| 3 | `step3_generate_audio.py` | `scene-scripts.json` | `public/audio/{name}/` 下按场景的 MP3；JSON 注入场景级音频与逐句时间轴 |
| 4 | `step4_generate_remotion.py` | `scene-scripts.json` | `src/remotions/{name}/` 下 Composition、各 `Scene*.tsx`、`scenes/index.ts`，并可选更新 `Root.tsx` |

**统一编排入口**：`pipeline.py` 通过 `subprocess` 依次调用上述脚本，支持 `--start` / `--only` 从中间步骤执行；仅跑 Step1 时会在成功后自动再跑一次 Step4 的**预览模式**（静音 + 固定占位图）。

---

## 2. 路径与项目根

- **`config.json`** 中的 `project_root` 指向 Remotion 工程根目录（含 `src/`、`public/`）。
- Step1 默认将 `scene-scripts.json` 写到：`{project_root}/src/remotions/{video_name}/scenes/`（由 `pipeline` 传入的 `--output` 决定）。
- Step1 执行前会**预清理**与当前 `video_name` 相关的历史目录/文件，避免旧图、旧音频、旧场景代码干扰：`scenes/`、`public/images/{name}`、`public/audio/{name}` 及输出目录下的 `scene-scripts.json`（逻辑见 `step1_analyze_script._cleanup_related_resources`）。

---

## 3. 配置与环境变量

### 3.1 `config.json`（节选含义）

- **模型与画质**：`gemini_model`、`imagen_model`、`image_aspect_ratio`、`image_size`、`image_style`。
- **画布**：`fps`、`width`、`height`。
- **Azure TTS**：`azure_service_region`、`azure_voice_name`、`speech_rate`。
- **转场与片尾**：`transition_duration_frames`、`scene_end_padding_frames`。
- **Step1 行为**：`default_template`（未知模板回退）、`step1_retry_on_validate_warnings`（校验有告警时是否触发一次 AI 修订）。
- **无音频预览**：`preview_min_duration_frames`、`preview_frames_per_char`（Step4 在尚未跑 Step3 时于内存中按文案长度注入 `content` 时间轴用；不写回 JSON）。

### 3.2 `.env`（由 `utils.load_env` 加载）

- **Step1 / Step2**：`GEMINI_API_KEY`。
- **Step3**：`SPEECH_KEY`（Azure Speech）。

### 3.3 `utils.py`

各步骤共用：`load_env`、`load_config`、`extract_content_text`（从 `content` 单条取文案）、`AiLogger`（Step1 AI 对话追加写入 `logs/{video_name}_step1_ai_*.log`）。

---

## 4. 模板注册表 `template_registry.py`

- **构建方式**：启动时扫描 `{project_root}/src/components/templates/*.tsx`，解析 `export const templateMeta = { ... }` 为 JSON，得到 **`TEMPLATE_REGISTRY`**。
- **用途**：
  - Step1：根据注册表生成 AI 可用的模板说明（`generate_ai_prompt_guide`），并约束模板名与 `param` 结构。
  - Step2：`get_image_fields` / `get_template` 识别 `param` 中哪些字段是「图生图提示词」及字段类型（单图、数组、分组数组等）。
  - Step4：`get_template_to_component_map` 将模板名映射到 React 导出组件名；缺失 `componentExport` 时回退到 `BWCenterFocus`。

---

## 5. Step1：文案分析（`step1_analyze_script.py`）

Step1 将口播全文转为 `scene-scripts.json`：多场景、每场景多 item，每项绑定 Remotion 模板名与 `param`。执行链为 **`main` → `analyze_with_gemini` →（AI 管线 + 清理 + 校验/修订）→ 破折号字幕合并 → `finalize_step1_content_and_anchors`（content 仅 `text` + 锚点清洗，无时间轴）→ 写盘**。

### 5.1 入口与准备（`main`）

1. **`load_env` / `load_config`**：读取 `script_v5/.env`、`config.json`。
2. **读文案**：`--input` 指向的 `.txt` 全文；空则失败退出。
3. **`video_name`**：`--name` 或 `config.package_name`。
4. **预清理 `_cleanup_related_resources`**：删除与本次视频名相关的 `src/remotions/{name}/scenes`、`public/images/{name}`、`public/audio/{name}` 及输出目录下的 `scene-scripts.json`，避免旧产物混入。
5. **`AiLogger(output_dir, video_name)`**：在输出目录下创建 `logs/`，后续每次请求/响应追加到 `{video_name}_step1_ai_时间戳.log`。
6. **核心**：`result = analyze_with_gemini(text, config, ai_logger)`，再 `_merge_dash_only_captions`、`finalize_step1_content_and_anchors`（`scene_timing`），最后写入 `scene-scripts.json`。

### 5.2 `analyze_with_gemini`（总编排）

1. 读取 `GEMINI_API_KEY`，构造 `google.genai.Client`；模型名 `config.gemini_model`。
2. **`generate_ai_prompt_guide(image_style, include_examples=False)`**：生成模板选型用的说明字符串，**不包含示例**，减轻 Step2 过拟合。
3. 依次调用：
   - `_run_ai_analysis_pipeline`（三段 AI + 质量指标打印）
   - `_cleanup_intermediate_fields`
   - `result["fps"] = config.get("fps", 30)`
   - `_validate_and_auto_fix`（校验 + 可选一次修订）

### 5.3 AI 管线 `_run_ai_analysis_pipeline`

Prompt 文件位于 `prompts/step1/*.md`，占位符为 `__KEY__`，由 `prompt_loader.render_prompt` 替换。

#### 5.3.1 阶段 A：场景拆分 — `scene_step.analyze_scenes`

- 使用 **`scene_step.md`**，注入全文 `TEXT`。
- **`generate_with_retry`** → **`parse_json_from_response`** 得到 JSON（API 侧 `response_mime_type=application/json`）。
- **后处理 `_realign_scene_texts`**：模型返回的 `scene.text` 常为「压平空白」后的句子。脚本将**原文**做扁平化并建立字符到原文下标的映射，在原文中定位与 `scene.text` 内容一致的子串，用**原文切片**（保留换行等）写回 `scene.text`。若找不到（模型改写文字），保留模型输出。
- 产出：`topic`、`scenes[]`（含 `sceneId`、`sceneName`、`text` 等）。

#### 5.3.2 阶段 B：Item — `item_step.analyze_items_for_scene`（2A + 2B + 程序拆句）

对每个场景顺序执行：

**Sub-step 2A — `_split_scene_into_items`（只分镜，不选模板）**

- Prompt：**`item_split_step.md`**，变量：`TOPIC`、`SCENE_NAME`、`SCENE_TEXT`。
- 期望 `items[]`：分镜元数据（如 `narrativeRole`、`visualFocus`、`emotionTone`、`estimatedSeconds`、`groupKey` 等），**不含模板名**。
- **失败**：整场景退为 **1 个 item**，`text` 为整段 `scene_text`。
- **规范化**：补 `order`；缺 `groupKey` 则设为 `solo_{order}`（`_normalize_split_group_keys`）。

**Sub-step 2B — `_assign_templates_to_items`（只选模板）**

- Prompt：**`item_template_step.md`**，输入 `SPLIT_ITEMS`（JSON）与 `TEMPLATE_GUIDE`。
- 期望 `items[]`：含 `template`、`narrativeType`、`reasoning` 等。
- **失败**：每条 split 退为 **`CENTER_FOCUS`**。
- **`groupKey` 继承**：若 2B 某条无有效 `groupKey`，从 2A 同 `order` 拷贝（`_inject_group_keys_from_split`）。

**程序侧 `content` 预生成 — `content_split.split_text_to_content`**

- 对每条 `matched_items`：`item["content"] = split_text_to_content(item["text"])`。
- 规则：按中英文标点切句，标点留在段末；单段最长 **20 字**，超出硬切；拼回应等于原文，否则打印 warning。
- 随后 **`scene["items"] = matched_items`**。口播分句始终保留在 **`item.content`**，阶段 C **不会**将其写入 `param`。

**控制台**：打印每场景 2A 镜头数、2B 模板列表；并调用 **`_collect_template_quality_metrics`**（见 5.8）。

#### 5.3.3 阶段 C：参数细化 — `param_step.analyze_param_for_item`

对每个 item：

1. **清字段**：仅保留 `order, narrativeType, reasoning, template, text, groupKey, content`，其余键从 item 上 `pop`，避免污染后续步骤。
2. Prompt：**`param_step.md`**，注入：
   - `SCENE_TEXT`（整场景）、`ITEM_TEXT`
   - `TEMPLATE_NAME`
   - **`param_schema`**（来自 `TEMPLATE_REGISTRY` 的 JSON）；若模板声明 `content_min_items` / `content_max_items`，以注释形式追加到 schema 字符串，提示条数边界
   - 模板 **`example`**
   - **`CONTENT_STR`**：阶段 B 已生成的 `item["content"]`
3. 解析返回的 **`param`** 赋给 `item["param"]`；若模型误返回 `content` / `totalDurationFrames`，会**剔除**（归属 item 层）。
4. **异常**：解析失败则 `param = { "anchors": [] }`，**`ensure_item_has_content`** 仍保证 `item.content` 可用（`item.text` / `coreSentence` 兜底）。

### 5.4 Gemini 共用工具（`step1_analysis/gemini_utils.py`）

- **`generate_with_retry`**：打印完整 prompt；可选写入 `AiLogger`；`generate_content` 使用 JSON MIME；失败时指数退避重试（默认 3 次）。
- **`parse_json_from_response`**：去掉 markdown 代码围栏后 `json.loads`。

### 5.5 `_cleanup_intermediate_fields`

- 从每个 **scene** 删除 `text`。
- 从每个 **item** 删除 `text`；**保留** `item.content`。
- 从 **`item.param` 中删除**误留的 `content`、`totalDurationFrames`（若存在）。

### 5.6 `_validate_and_auto_fix`

1. **`validate_and_normalize_scene_scripts`**（`scene_script_validate.py`）：按 `TEMPLATE_REGISTRY` 归一化并收集 **warnings**（未知模板回退、enum 钳制、`content` 回填、`images` 与 `image_count` 等）。
2. 有告警则打印；若 **`step1_retry_on_validate_warnings`** 为 `false`，直接返回当前 `result`。
3. 若为 `true`：调用 **`fix_step.gemini_fix_after_warnings`**（**`fix_after_warnings.md`**），传入原文、告警列表、当前草稿、`TEMPLATE_GUIDE`，做一次结构修订。
4. **锁定 `content`**：修订前按 `(sceneId, order)` 备份 **`item.content`**，修订后写回；`param` 可由模型修订。
5. 对修订结果再校验；打印修订后是否仍有告警。修订失败（如 JSON 解析错误）则保留初稿。

### 5.7 `scene_timing.py`：Step1 落盘内容 vs Step4 内存预览帧

- **Step1 — `finalize_step1_content_and_anchors`**：将每条 `content` 归一为 **`{"text": ...}`**（不含 `startFrame` / `durationFrames`），并清洗 **`param.anchors` / `coreSentenceAnchors`**（逻辑同原 `_sanitize_anchors`、`_sanitize_core_sentence_anchors`）。**不写** `item.totalDurationFrames`。
- **Step4 — `needs_text_length_timings_from_scripts` + `inject_text_length_content_timings`**：若首场景首个 item 的首条 `content` 上缺少 **`int` 型的 `startFrame` 与 `durationFrames`**，视为未跑 Step3，则在**内存中**按 **`preview_frames_per_char`**、**`preview_min_duration_frames`** 注入每条口播的帧时间轴并设置 **`item.totalDurationFrames`**，再清洗锚点；**不回写**输入的 `scene-scripts.json`。

Step3 生成真实 TTS 后会覆盖 `content` 时间与场景级时长。

### 5.8 质量指标（控制台，不阻断）

**`_collect_template_quality_metrics`**：统计 STEP_LIST 单条占比、同 `groupKey` 下模板混搭场景等，仅打印告警。

### 5.9 落盘与收尾

- `output_dir.mkdir(parents=True, exist_ok=True)`，写入 **`scene-scripts.json`**（`indent=2`）。
- 打印主题、场景数、item 总数、模板分布、`AiLogger` 路径。

### 5.10 数据流简图

```text
口播全文
  → [A] scene_step：场景 JSON + scene.text 对齐回原文
  → 每场景 [B] 2A 分镜 → 2B 选模板 → content_split 生成 item.content
  → 每 item [C] AI 填 param（不含 content）；item.content 为程序切句结果
  → 删除 scene.text / item.text；保留 item.content
  → 写入 fps → 校验（±1 次修订且锁 content）→ 合并破折号字幕 → content 仅 text + 锚点清洗（无时间轴）
  → scene-scripts.json + AI 日志
```

---

## 6. Step2：图片生成（`step2_generate_images.py`）

### 6.1 任务收集（`collect_image_tasks`）

遍历所有 scene/item，按模板 `param_schema` 与 `get_image_fields` 收集需生成的「提示词」任务，区分：

- 普通 `image_prompt` 字符串字段；
- `image_prompt_array`（如多图列表）；
- 嵌套结构（如 `panels[].src`、`images[].src`）中的图片提示词字段。

### 6.2 批量生成策略

- 每批最多 **9 条**，拼成 **3×3 网格** 的单次文生图请求（`generate_image`：Imagen 或 Gemini 图像模态，由模型名判定）。
- 返回的网格图经 Pillow **裁剪为 9 格**、**去白底**（可选阈值），文件名规则见 `get_output_filename`（含 `sceneId_order`、数组下标、左右图等）。
- 批次间可 `--delay`  sleep，减轻限流。

### 6.3 回写 JSON（`apply_image_paths`）

将 `param` 中的提示词替换为相对 **`public`** 的路径（如 `images/{name}/scene1_1.png`），并**写回输入的 `scene-scripts.json` 原文件**。

### 6.4 可选参数

- `--scene`：只处理指定 `sceneId`。

---

## 7. Step3：TTS 与时间轴（`step3_generate_audio.py`）

### 7.1 粒度：按「场景」一条长音频

对每个场景：

- 将该场景下所有 item 的 `content` 文案按顺序拼成**一句列表**（`extract_texts_from_content`）；
- `_ensure_trailing_punctuation` 补标点以利句间停顿；
- Azure SSML 合成**单个 MP3**（`{sceneId}/{sceneId}.mp3`），路径写入 **`scene.audioSrc`**（形如 `/audio/{animation_name}/{sceneId}/{sceneId}.mp3`，供 Remotion `staticFile` 使用）。

### 7.2 分句时间戳

`synthesize_speech` 优先用 SSML **bookmark** 对齐每句起止；失败则尝试 **word_boundary**；再不行则按字符比例切分（`_map_by_char_ratio`）。

### 7.3 回写 item 级 `content` 与时长

对每个 item：

- 用全局 boundaries 切片得到该 item 的句子区间；
- `upgrade_content_with_timing` 将每条 `content` 升级为带 `text`、`startFrame`、`durationFrames` 的对象（**帧坐标相对本 item 的 Sequence 起点**）；
- 写入 **`item.totalDurationFrames`**（由该 item 首末句时间换算）。

同时写入 **`scene.totalDurationFrames`**（整段 MP3 时长 × fps 向上取整）。

### 7.4 可选参数

- `--scene`：只处理指定场景。

---

## 8. Step4：Remotion 代码生成（`step4_generate_remotion.py`）

### 8.1 输入与复制

读取 `scene-scripts.json`；若检测到尚未具备 Step3 音频时间轴（见 `scene_timing.needs_text_length_timings_from_scripts`），则在内存中按文案长度注入预览帧后再生成 TSX（不写回源 JSON）。若输入路径与目标不一致，会复制到 `src/remotions/{name}/scenes/scene-scripts.json`，便于工程内引用或调试。

### 8.2 单场景 TSX（`generate_scene_tsx`）

- 每个 item 映射为 `Sequence`，`durationInFrames` 取自 **`item.totalDurationFrames`**。
- 组件名来自 `TEMPLATE_TO_COMPONENT`；**`content`** 与 **`totalDurationFrames`** 来自 item；其余字段由 `param` 经 `_param_to_jsx_props` 生成；图片类字段包 `staticFile()`；`audioSrc` 不在 item 上输出（音频在场景级）。
- 场景根上若存在 `audioSrc`，渲染一层 `<Audio src={staticFile(...)} />`。

### 8.3 主 Composition（`generate_composition_tsx`）

- 使用 `@remotion/transitions` 的 `TransitionSeries` + `fade` 串联各场景；
- `sceneConfigs` 中每段时长 = 子场景内 items 时长之和 + `scene_end_padding_frames`；
- 导出 `TOTAL_DURATION_{NAME}` 常量供 `Root.tsx` 使用；
- 内含进度条式 `ProgressBar` 组件（与口播场景标签联动）。

### 8.4 `Root.tsx`

默认会插入新 Composition 的 import 与 `<Composition id={PascalCase} ... />`（若已存在同 import 则跳过）。

### 8.5 预览模式

- `--mute-audio`：清空场景 `audioSrc`，用于无音频预览。
- `--preview-image`：将所有已识别的图片字段及 `images[]`、`stages[].imageSrc` 等替换为固定 public 相对路径；若未跑 Step3，Step4 会在内存中按文案长度补全时间轴后生成代码，便于快速看版。

---

## 9. 校验模块 `scene_script_validate.py`

在 Step1 的 `_validate_and_auto_fix` 中调用，职责包括（不完全列举）：

- 模板名合法性 → 回退 `default_template` 并告警；
- `param_schema` 中 enum 非法值钳制；
- **`item.content`** 缺失时用 `item.text` / `param.coreSentence` 回填并告警；
- `image_prompt_array` 与 `image_count`、锚点音效 ID 合法值校验等。

具体规则以源码注释与实现为准。

---

## 10. `pipeline.py` 行为小结

- 解析 `--input`、`--name`（缺省用 `config.package_name`）。
- 推导固定路径：`scene-scripts.json`、`images`、`audio`、Remotion 目录。
- 循环执行 Step1–4；任一步非零退出则停止并提示可用 `--start` 重跑。
- **`--only 1`**：在 Step1 成功后自动执行 Step4，并传入 `--mute-audio --preview-image`（`preview-image` 默认 `images/template/scene1_1.png`），用于快速生成可预览的 Remotion 代码。

---

## 11. 依赖与运行

- Python 依赖见 `requirements.txt`（含 `google-genai`、Azure Speech、`Pillow`、`mutagen` 等）。
- 前端模板与 `templateMeta` 必须与注册表、Step4 组件映射保持同步；新增模板时需补齐 TSX 中 `templateMeta` 及 `componentExport`（或通过注册表约定避免 Step4 回退组件）。

---

*文档版本与源码一致：以仓库内实际脚本为准；若行为变更请同步更新本节。*
