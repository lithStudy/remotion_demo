---
name: scene-scripts-templates
description: "scene-scripts.json 中可用的模板详情，在编辑或生成 `scene-scripts.json`时，用于了解如何正确使用模板，响应用户的验证、修改模板的请求。模板包括：BEAT_SEQUENCE、CAUSE_CHAIN、CENTER_FOCUS、CHAT_BUBBLE、CHECKLIST_REVEAL、COGNITIVE_SHIFT、CONCEPT_CARD、DOS_AND_DONTS、KPI_HERO、MAGNIFYING_GLASS、METHOD_STACK、PANEL_GRID、PROGRESS_RING、QUOTE_CITATION、SPLIT_COMPARE、STAT_COMPARE、STEP_LIST、TEXT_FOCUS、TIMELINE。"
metadata:
  tags: remotion, scene-scripts, templateMeta, json
---
## 何时使用

在编辑或生成 `scene-scripts.json`时，用于了解如何正确使用模板，响应用户的验证、修改模板的请求

## scene-scripts 结构要点

- 顶层常见字段：`topic`、`fps`、`scenes`。
- `fps` 常与工程一致（当前配置为 **30**）。
- 每个 `scene` 含 `sceneId`、`items`。
- 每个 `item` 至少含：`order`、`template`、`param`、`content`。
- `content` 为数组；元素多为 `{"text": "..."}`。口播以 `content[].text` 为准。
- 未知或非法 `template` 时，管线可能回退到默认模板（当前配置为 **`CENTER_FOCUS`**）。
- `param` 内不应长期存放 `content` 或 `totalDurationFrames`（校验会剔除）；时长与分句权威在 `item` 上。
- **TEXT_FOCUS** 使用 `param.coreSentence` 与 `param.coreSentenceAnchors`（非普通 `anchors`）；锚点短语须为 `coreSentence` 的子串。
- 带 `anchors` 的模板：`showFrom` 为 **content 数组的 0-based 下标**，不是时间轴帧号。

## 图片类字段

- 工程 `config.json` 中的 `image_style`（供 image_prompt 类字段参考）：

  Minimalist black and white vector illustration, flat design, symbolic icon style, bold high-contrast lines, isolated on white background

## 修改范围
当用户目的是修改`scene-scripts.json`时，只操作这一个被指定的文件，不要额外修改scene等文件。

## 可用模板

为避免上下文过长，每个模板的 `templateMeta` 已拆分为独立 Skill。需要查看某个模板的详情时，请打开对应子 Skill。

- **BEAT_SEQUENCE**: `references/BEAT_SEQUENCE.md`
- **CAUSE_CHAIN**: `references/CAUSE_CHAIN.md`
- **CENTER_FOCUS**: `references/CENTER_FOCUS.md`
- **CHAT_BUBBLE**: `references/CHAT_BUBBLE.md`
- **CHECKLIST_REVEAL**: `references/CHECKLIST_REVEAL.md`
- **COGNITIVE_SHIFT**: `references/COGNITIVE_SHIFT.md`
- **CONCEPT_CARD**: `references/CONCEPT_CARD.md`
- **DOS_AND_DONTS**: `references/DOS_AND_DONTS.md`
- **KPI_HERO**: `references/KPI_HERO.md`
- **MAGNIFYING_GLASS**: `references/MAGNIFYING_GLASS.md`
- **METHOD_STACK**: `references/METHOD_STACK.md`
- **PANEL_GRID**: `references/PANEL_GRID.md`
- **PROGRESS_RING**: `references/PROGRESS_RING.md`
- **QUOTE_CITATION**: `references/QUOTE_CITATION.md`
- **SPLIT_COMPARE**: `references/SPLIT_COMPARE.md`
- **STAT_COMPARE**: `references/STAT_COMPARE.md`
- **STEP_LIST**: `references/STEP_LIST.md`
- **TEXT_FOCUS**: `references/TEXT_FOCUS.md`
- **TIMELINE**: `references/TIMELINE.md`

## 维护方式

- 修改 `src/components/templates/*.tsx` 后，重新运行 `export_template_meta_skill.py` 以更新主 Skill 与所有子 Skill。
