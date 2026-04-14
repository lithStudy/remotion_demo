# 阶段 3：逐 Item 参数细化

## 目标

对每个 item，根据其 `template` 的参数规范（param_schema），生成 `param` 对象并将 `text` 拆分为 `content` 数组。

## 工作步骤

### 1. 查阅模板 param_schema

根据 item 的 `template`，查阅 **scene-scripts-templates** skill 中对应的 `references/{TEMPLATE_NAME}.md`，获取：
- `param_schema`：定义了 param 中每个字段的类型、是否必填、枚举值等
- `example`：一个完整的 param 示例

### 2. 将 text 拆分为 content

将 item 的 `text`（来自阶段 2）按口播的自然语句断句，拆分为 `content` 数组：

```json
"content": [
  { "text": "第一句话，" },
  { "text": "第二句话。" }
]
```

拆分规则：
- 按标点符号自然断句（句号、逗号、问号、感叹号、省略号等）
- 每条 content 应是一个完整的语义单元
- **除 TEXT_FOCUS 外**，content 中至少应有 2 条（不允许只有 1 个 text）
- 所有 content[].text 拼接后必须与原 item.text 完全一致

### 3. 填充 param 对象

根据 param_schema 填充各字段。关键规则如下：

#### 图片类字段（format: image_prompt）

当 param_schema 中某字段标记为 `format: image_prompt` 时：
- 写入**英文视觉场景描述**，纯粹描述画面内容
- **绝不包含**任何文字、标语、注音或 UI 元素
- 描述风格参考 `script_v6/config.json` 中的 `image_style`（当前为极简黑白矢量插图风格）
- 后续由 Step2 据此生成图片并回写为文件路径

示例：
```json
"imageSrc": "A person standing in front of a mirror, simplified silhouette"
```

#### enterEffect 字段

图片入场特效，合法值：`breathe` | `slideLeft` | `slideBottom` | `zoomIn` | `fadeIn`

#### content_index 类字段（format: content_index）

当 param_schema 中某整数字段标记为 `format: content_index` 时：
- 值必须是 content 数组的 **0-based 合法下标**
- 用于决定某视觉元素在动画中出现的时机（对齐到哪条字幕出现时）

#### 视觉标题字段

当 param_schema 要求 `notText` / `butText` / DOS_AND_DONTS 的 `left.label` 与 `right.label` / `conceptName` 等视觉标题：
- 填**极简关键词（约 2～6 字）**
- **禁止**把整句台词搬进标题字段

## 锚点规则（Anchors）

### 通用锚点（非 TEXT_FOCUS 模板）

`param.anchors` 是一个数组，每项结构：

```json
{
  "text": "高亮关键词（2～4 字）",
  "showFrom": 0,
  "color": "#EF4444",
  "anim": "spring",
  "audioEffect": "impact_thud"
}
```

**克制原则**：
- 多数句子应**无锚点**；拿不准就留空 `[]`
- 只选整段里真正的高潮、反转或核心名词（宜 2～4 字、有记忆点）
- 平庸词、铺垫句不做锚点

**字段说明**：
- `text`：高亮的关键词短语，必须是 content 中某条 text 的子串
- `showFrom`：content 数组的 0-based 下标，表示这个锚点在第几条字幕出现时显示
- `color`：`#EF4444`（警示/反转/负面/结论）或 `#000000`（事实/术语/数据）
- `anim`：`spring` | `slideUp` | `popIn` | `highlight`
- `audioEffect`（可选）：`impact_thud` | `ping` | `woosh`

**校验规则**：
- `showFrom` 必须 ≥ 0 且 < content 数组长度
- `text` 不能为空

### TEXT_FOCUS 特殊锚点

TEXT_FOCUS 模板**不使用** `anchors`，而使用：

- `param.coreSentence`：`string[]`，大屏主文案，每个元素一行
- `param.coreSentenceAnchors`：数组，每项：
  ```json
  {
    "coreSentenceAnchor": "高亮短语",
    "color": "#EF4444"
  }
  ```
- `coreSentenceAnchor` 必须是 `coreSentence` 各元素拼接后的**子串**

## 各模板 param 快速参考

以下列出常用模板的关键 param 字段。完整 schema 请查阅 scene-scripts-templates skill。

| 模板 | 关键 param 字段 |
|------|----------------|
| CENTER_FOCUS | `imageSrc`(image_prompt), `enterEffect`, `anchors` |
| COGNITIVE_SHIFT | `notText`, `butText`, `butSrc`(image_prompt), `notContentIndex`, `butContentIndex`, `anchors` |
| QUOTE_CITATION | `quoteSource`, `quoteDisplayText`(可选), `showFrom`(可选), `anchors` |
| CONCEPT_CARD | `imageSrc`(image_prompt), `conceptName`, `anchors` |
| TEXT_FOCUS | `coreSentence`(string[]), `coreSentenceAnchors` |
| STAT_COMPARE | `leftLabel`, `leftValue`, `rightLabel`, `rightValue`, `anchors` |
| SPLIT_COMPARE | `leftTitle`, `rightTitle`, `leftSrc`(image_prompt), `rightSrc`(image_prompt), `anchors` |
| DOS_AND_DONTS | `left` / `right`（各含 `label`、`src`(image_prompt)、可选 `showFrom`：有 content 时间轴且值 < 条数时为 **content 下标**，否则为 **帧号**）, `anchors` |
| STEP_LIST | `steps`(string[]), `anchors` |
| METHOD_STACK | `methodTitle`, `methodSrc`(image_prompt), `anchors` |
| BEAT_SEQUENCE | `beats`(数组，每项含 `imageSrc`), `anchors` |
| CAUSE_CHAIN | `nodes`(数组，每项含 `label` + `imageSrc`), `anchors` |
| PANEL_GRID | `panels`(数组，每项含 `imageSrc` + `showFrom`), `anchors` |
| CASE_BREAKDOWN | `caseSrc`(image_prompt), `caseLabel`, `anchors` |
| CHECKLIST_REVEAL | `checkItems`(string[]), `anchors` |
| MAGNIFYING_GLASS | `focusWord`, `imageSrc`(image_prompt), `anchors` |
| KPI_HERO | `value`, `label`, `suffix`, `anchors` |
| PROGRESS_RING | `percent`, `label`, `anchors` |
| TIMELINE | `events`(数组，每项含 `year` + `label`), `anchors` |

## 阶段 3 输出

每个 item 最终应包含：
- `order`（来自阶段 2）
- `narrativeType`（来自阶段 2）
- `template`（来自阶段 2）
- `reasoning`（来自阶段 2）
- `content`：`[{ "text": "..." }, ...]`
- `param`：根据模板 schema 填充的参数对象

**删除** item 上的临时 `text` 字段（阶段 2 中间产物）。
