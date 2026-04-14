# 校验规则清单

生成 scene-scripts.json 后，按以下规则逐项自查。规则按严重程度分为**阻断级**（必须修复）和**建议级**（可选修复）。

## 阻断级规则

### 1. 原文完整覆盖

所有 scene → 所有 item → 所有 content[].text 按顺序拼接后，必须与口播原文完全一致（忽略空白差异）。

- 不允许遗漏任何非空白字符
- 不允许重复覆盖
- 不允许修改原文措辞

### 2. template 必须合法

每个 item 的 `template` 必须是以下合法值之一：

`BEAT_SEQUENCE` / `CASE_BREAKDOWN` / `CAUSE_CHAIN` / `CENTER_FOCUS` / `CHAT_BUBBLE` / `CHECKLIST_REVEAL` / `COGNITIVE_SHIFT` / `CONCEPT_CARD` / `DOS_AND_DONTS` / `KPI_HERO` / `MAGNIFYING_GLASS` / `METHOD_STACK` / `PANEL_GRID` / `PROGRESS_RING` / `QUOTE_CITATION` / `SPLIT_COMPARE` / `STAT_COMPARE` / `STEP_LIST` / `TEXT_FOCUS` / `TIMELINE`

### 3. item 必须有 content

每个 item 必须有 `content` 数组，且至少一条 content 的 `text` 非空。

### 4. param 必须是对象

每个 item 的 `param` 必须是一个非 null 的对象。

### 5. param 禁止字段

`param` 内**不得出现** `content` 或 `totalDurationFrames`。这两个字段只属于 item 顶层（由后续 Step3 写入）。

### 6. param 必填字段

根据模板的 param_schema 中的 `required` 列表，对应字段不能缺失或为空。各模板的必填字段请查阅 scene-scripts-templates skill。

常见必填字段示例：
- CENTER_FOCUS: `imageSrc`
- COGNITIVE_SHIFT: `notText`, `butText`, `butSrc`
- QUOTE_CITATION: `quoteSource`
- CONCEPT_CARD: `conceptName`
- TEXT_FOCUS: `coreSentence`
- STAT_COMPARE: `leftLabel`, `leftValue`, `rightLabel`, `rightValue`

### 7. anchors.showFrom 合法性

对使用 `anchors` 的模板（非 TEXT_FOCUS）：
- `showFrom` 必须是 **content 数组的 0-based 合法下标**（`0 ≤ showFrom < content.length`）
- `text` 不能为空
- 每个 anchor 必须是对象

### 8. TEXT_FOCUS 锚点规则

TEXT_FOCUS 模板：
- **不使用** `anchors`（若存在应删除）
- 使用 `coreSentence`（非空 string[]，每元素一行）
- 使用 `coreSentenceAnchors`（每项含 `coreSentenceAnchor` + 可选 `color`）
- `coreSentenceAnchor` 必须是 `coreSentence` 各元素拼接后的**子串**

### 9. content_index 字段范围

param 中标记为 `format: content_index` 的整数字段（如 `notContentIndex`、`butContentIndex`、`dontContentIndex`、`doContentIndex`、`showFrom`），值必须满足 `0 ≤ 值 < content.length`。

### 10. 枚举字段合法性

param 中有 `enum` 约束的字符串字段，值必须在枚举列表内。常见的：
- `enterEffect`：`breathe` / `slideLeft` / `slideBottom` / `zoomIn` / `fadeIn`

## 建议级规则

### 11. CONCEPT_CARD 语义一致性

`CONCEPT_CARD` 的 `conceptName` 应在口播文本（content[].text 拼接）中真实出现。若未出现，可能概念不一致，建议改为口播中实际出现的术语/产品名/概念名。

### 12. SPLIT_COMPARE 方向性检查

若 `SPLIT_COMPARE` 的口播含"升级为""而不是""不再""别再""应该""关键在于""真正重要的是"等方向性/纠偏表达，可能更适合 `COGNITIVE_SHIFT` 或 `DOS_AND_DONTS`。

### 13. content 条数合理性

- 除 TEXT_FOCUS 外，content 中应至少有 2 条
- 部分模板有 `content_min_items` / `content_max_items` 限制（详见各模板 templateMeta）

### 14. 数组字段长度范围

param 中数组类字段（如 `steps`、`beats`、`nodes`、`panels`、`events`、`checkItems`），若 schema 定义了 `minItems` / `maxItems`，长度应在范围内。

### 15. 连续 CENTER_FOCUS 检查

若同一 scene 内连续多个 item 都使用 CENTER_FOCUS，考虑是否可以合并或改用更丰富的模板。
