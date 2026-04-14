---
name: generate-scene-scripts
description: "从口播文案生成 scene-scripts.json 动画脚本。当用户提供口播文案（.txt 文件或文本）并要求生成动画脚本、scene-scripts、视频分镜时触发。执行三阶段分析：场景拆分、分镜模板选型、参数细化，输出符合 Remotion 管线的 JSON。"
metadata:
  tags: scene-scripts, remotion, pipeline, step1
---

# 从口播文案生成 scene-scripts.json

## 何时使用

- 用户提供口播文案（`.txt` 文件或直接贴文本），要求生成动画脚本 / scene-scripts / 视频分镜
- 用户要求"分析文案"并产出可被 Remotion 管线消费的 JSON

## 前置准备

1. **确认视频名称**：向用户确认 `name`（英文，用作目录名），如 `认知偏见_达克效应`
2. **读取配置**：从 `script_v6/config.json` 获取以下关键参数：
   - `fps`（帧率，当前 30）
   - `image_style`（图片风格描述，写入 image_prompt 类字段时参考）
   - `cover_*` 系列字段（封面信息，后处理注入）
3. **输出路径**：`src/remotions/{name}/scenes/scene-scripts.json`
4. **预清理**：若目标路径已有旧文件，先确认是否覆盖

## 三阶段工作流

### 阶段 1：场景拆分 + Topic 生成

将口播全文拆为若干大场景（Scene），并生成封面钩子 `topic`。

详细规则见 [PHASE_1_SCENE_SPLIT.md](references/PHASE_1_SCENE_SPLIT.md)

**输入**：口播全文
**输出**：`{ "topic": "...", "scenes": [{ "sceneId", "sceneName", "text" }] }`

### 阶段 2：逐场景分镜 + 模板选型

对每个 scene 的 `text` 做分镜切分，产出 `items`，每个 item 选择一个模板。

详细规则见 [PHASE_2_ITEM_TEMPLATE.md](references/PHASE_2_ITEM_TEMPLATE.md)

模板详情请查阅 **scene-scripts-templates** skill 的各 `references/*.md` 子文件。

**输入**：单个 scene 的 `text`、`topic`、`sceneName`
**输出**：该 scene 的 `items` 数组

### 阶段 3：逐 Item 参数细化

对每个 item，根据其 `template` 的 `param_schema` 填充 `param` 对象。

详细规则见 [PHASE_3_PARAM.md](references/PHASE_3_PARAM.md)

**输入**：item 的 `text`、`template`、所在 scene 全文（上下文）
**输出**：item 的 `param` + `content` 数组

## 后处理（阶段 3 完成后）

完成三阶段分析后，对整份 JSON 执行以下后处理：

1. **清理临时字段**：删除 scene 级 `text`、item 级 `text`
2. **content 归一化**：每条 content 仅保留 `{ "text": "..." }`，不写 startFrame/durationFrames（留给 Step3 音频处理）
3. **锚点清洗**：
   - 非 TEXT_FOCUS 模板：校验 `param.anchors`，`showFrom` 必须是 content 数组的合法 0-based 下标，`text` 非空
   - TEXT_FOCUS 模板：不使用 `anchors`，使用 `coreSentenceAnchors`，每项 `coreSentenceAnchor` 必须是 `coreSentence` 拼接后的子串
4. **注入 fps**：顶层写入 `"fps": 30`（或 config 中的值）
5. **注入 cover**：按 `script_v6/config.json` 中的 `cover_*` 字段注入顶层 `cover` 对象（详见 [OUTPUT_FORMAT.md](references/OUTPUT_FORMAT.md)）
6. **param 禁止字段**：`param` 内不得出现 `content` 或 `totalDurationFrames`（这两者只属于 item 顶层）

## 输出格式

最终 JSON 结构规范与完整示例见 [OUTPUT_FORMAT.md](references/OUTPUT_FORMAT.md)

## 校验

生成完成后，按 [VALIDATION_RULES.md](references/VALIDATION_RULES.md) 自查。

也可运行校验脚本（从项目根目录执行）：
```bash
python script_v6/scripts/validate_scene_scripts.py src/remotions/{name}/scenes/scene-scripts.json
```

## 硬性约束（全流程必须遵守）

1. **原文零修改**：所有 item 的 content[].text 拼接后，必须与口播原文完全一致（允许忽略空白差异）。严禁修改、缩写、重新措辞
2. **完整覆盖**：所有 scene 的所有 item 的 content 拼合，必须 100% 覆盖口播全文，不遗漏、不重叠
3. **换行保留**：原文中的段落分隔必须以 `\n` 保留在对应位置
4. **模板合法**：`template` 必须来自 scene-scripts-templates skill 定义的合法模板列表
5. **分场景输出**：为避免单次输出过大，按 scene 逐步生成，每完成一个 scene 的全部 items + params 后再处理下一个

## 与 Python 管线的关系

本 skill 替代 `script_v6/step1_analyze_script.py` 的 Gemini AI 分析环节。后续步骤仍可使用现有脚本：
- Step2（生图）：`python script_v6/step2_generate_images.py --input {json_path} --output {images_dir}`
- Step3（TTS）：`python script_v6/step3_generate_audio.py --input {json_path} --output {audio_dir}`
- Step4（代码生成）：`python script_v6/step4_generate_remotion.py --input {json_path} --name {name}`
